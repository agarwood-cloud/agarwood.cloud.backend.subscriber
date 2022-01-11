import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { DrawerService, IDrawerOpenResult } from 'ng-devui/drawer';
import { DialogService } from 'ng-devui/modal';
import { Theme } from 'ng-devui/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PersonalizeService } from '../@core/services/personalize.service';
import { PersonalizeComponent } from '../@shared/components/personalize/personalize.component';
import { SideMenuComponent } from '../@shared/components/side-menu/side-menu.component';
import { DaScreenMediaQueryService } from '../@shared/layouts/da-grid';
import { DaLayoutConfig, DaLayoutService } from '../@shared/layouts/da-layout';
import menu from './menu';

@Component({
  selector: 'da-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  private destroy$ = new Subject();
  public menu: any;

  public layoutConfig: DaLayoutConfig;
  public isSidebarShrink = false;
  public isSidebarFold = false;

  public sideDrawer: IDrawerOpenResult;

  public constructor(
    private drawerService: DrawerService,
    private dialogService: DialogService,
    private personalizeService: PersonalizeService,
    private layoutService: DaLayoutService,
    private mediaQueryService: DaScreenMediaQueryService,
    private render2: Renderer2,
    private translate: TranslateService
  ) {
    this.personalizeService.initTheme();
    this.layoutService
      .getLayoutConfig()
      .pipe(takeUntil(this.destroy$))
      .subscribe((config: DaLayoutConfig) => {
        this.layoutConfig = config;
        this.isSidebarShrink = !!this.layoutConfig.sidebar.shrink;
      });

    this.mediaQueryService
      .getPoint()
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ currentPoint, change, compare }) => {
        /* ml：sidebar shrink breakpoint */
        if (change <= 0 && compare['ml'] <= 0) {
          this.sidebarShrink(true);
        } else if (change >= 0 && compare['ml'] > 0) {
          this.sidebarShrink(false);
        }

        /* mm：sidebar hidden breakpoint */
        if (change <= 0 && compare['mm'] <= 0) {
          this.sidebarFold(true);
        } else if (change >= 0 && compare['mm'] > 0) {
          this.sidebarFold(false);
        }
      });
  }

  public ngOnInit(): void {
    this.translate
      .get('page')
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.updateMenu(res);
      });

    this.translate.onLangChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('page');
        this.updateMenu(values);
      });
    this.personalizeService.getUiTheme()!.subscribe((theme) => {
      const currentTheme = Object.values(
        (window as { [key: string]: any })['devuiThemes']
      ).find((i: Theme | unknown) => {
        return (i as Theme).id === theme;
      });
      if (currentTheme && (<any>currentTheme).isDark) {
        this.render2.addClass(document.body, 'is-dark');
      } else {
        this.render2.removeClass(document.body, 'is-dark');
      }
    });
  }

  public updateMenu(values: any): void {
    this.menu = menu(values);
  }

  public openSideMenuDrawer(): void {
    this.drawerService.open({
      drawerContentComponent: SideMenuComponent,
      width: '240px',
      position: 'left' /* TODO: if destroyOnHide is false, there has some problem, waiting ng-devui bug fix*/,
      // destroyOnHide: false,
      data: {
        data: this.menu,
      },
    });
  }

  public personalizeConfig(): void {
    const result = this.dialogService.open({
      id: 'theme',
      width: '800px',
      maxHeight: '800px',
      title: '',
      content: PersonalizeComponent,
      backdropCloseable: true,
      onClose: () => {},
      buttons: [],
    });
  }

  public sidebarShrink(isShrink: boolean): void {
    this.isSidebarShrink = isShrink;

    if (this.layoutConfig.sidebar.firSidebar) {
      this.layoutConfig.sidebar.firSidebar.width = this.isSidebarShrink
        ? 54
        : 240;
    }
    this.layoutConfig.sidebar.shrink = this.isSidebarShrink;
    this.layoutService.updateLayoutConfig(this.layoutConfig);
  }

  public sidebarFold(isFold: boolean): void {
    this.isSidebarFold = isFold;

    if (this.layoutConfig.sidebar.firSidebar) {
      this.layoutConfig.sidebar.firSidebar.hidden = isFold;
      this.layoutService.updateLayoutConfig(this.layoutConfig);
    }
  }

  public destroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

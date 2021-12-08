import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { LANGUAGES } from 'src/config/language-config';
import { User } from '../../../models/user';
import { I18nService } from 'ng-devui/i18n';

@Component({
  selector: 'da-header-operation',
  templateUrl: './header-operation.component.html',
  styleUrls: ['./header-operation.component.scss'],
})
export class HeaderOperationComponent implements OnInit {
  public user: User;
  public languages = LANGUAGES;
  public language: string;
  public haveLoggedIn = false;

  constructor(
    private route: Router,
    private authService: AuthService,
    private translate: TranslateService,
    private i18n: I18nService
  ) {}

  public ngOnInit(): void {
    if (localStorage.getItem('userInfo')) {
      this.user = JSON.parse(localStorage.getItem('userInfo')!);
      this.haveLoggedIn = true;
    } else {
      this.authService.login('Admin', 'Devui.admin').subscribe((res) => {
        this.authService.setSession(res);
        this.user = JSON.parse(localStorage.getItem('userInfo')!);
        this.haveLoggedIn = true;
      });
    }

    this.language = this.translate.currentLang;
  }

  public onSearch(event: any): void {
    console.log(event);
  }

  public onLanguageClick(language: string): void {
    this.language = language;
    localStorage.setItem('lang', this.language);
    this.i18n.toggleLang(this.language);
    this.translate.use(this.language);
  }

  public handleUserOps(operation: string): void {
    switch (operation) {
      case 'logout': {
        this.haveLoggedIn = false;
        this.authService.logout();
        this.route.navigate(['/', 'login']);
        break;
      }
      default:
        break;
    }
  }
}

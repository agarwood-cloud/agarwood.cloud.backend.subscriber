import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'ng-devui';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  public i18nValues: any;

  public constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService,
    private translate: TranslateService
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.isUserLoggedIn()) {
      this.i18nValues = this.translate.instant('authNotice');
      this.toastService.open({
        value: [
          {
            severity: 'info',
            summary: this.i18nValues['summary'],
            content: this.i18nValues['content']
          }
        ],
        life: 2000,
      });
      this.router.navigate(['login']).then(r => console.log('navigate', r));
      return false;
    } else {
      return true;
    }
  }
}

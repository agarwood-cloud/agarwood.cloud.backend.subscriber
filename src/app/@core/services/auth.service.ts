import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from 'src/app/@shared/models/user';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  // User Login
  public login(account: string, password: string): Observable<any>  {
    return this.http.post('/oauth-center/authentication/oauth/user-login', {
      username: account,
      password: password,
      version:  '1.0.0'
    });
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expiredAt');
    localStorage.removeItem('userInfo');
  }

  public logoutServer(): Observable<any> {
    return this.http.post('/oauth-center/authentication/oauth/user-logout', {});
  }

  public setSession(userInfo: User): void {
    localStorage.setItem('token', userInfo.token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('expiredAt', '3600');
  }

  public isUserLoggedIn(): boolean {
    if (localStorage.getItem('userInfo')) {
      return true;
    } else {
      return false;
    }
  }
}

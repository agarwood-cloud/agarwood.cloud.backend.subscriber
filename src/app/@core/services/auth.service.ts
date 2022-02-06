import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from 'src/app/@shared/models/user';

@Injectable()
export class AuthService {

  /**
   * Constructor
   *
   * @param http HttpClient
   */
  public constructor(private http: HttpClient) {}

  /**
   * login
   *
   * @param account account
   * @param password password
   */
  public login(account: string, password: string): Observable<any>  {
    return this.http.post('/oauth-center/authentication/oauth/user-login', {
      username: account,
      password: password,
      version:  '1.0.0'
    });
  }

  /**
   * Logout
   */
  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expiredAt');
    localStorage.removeItem('userInfo');
  }

  /**
   * logout from server
   */
  public logoutServer(): Observable<any> {
    return this.http.post('/oauth-center/authentication/oauth/user-logout', {});
  }

  /**
   * Set token and expired time
   *
   * @param userInfo User
   */
  public setSession(userInfo: User): void {
    localStorage.setItem('token', userInfo.token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('expiredAt', '3600');
  }

  /**
   * isLogin
   */
  public isUserLoggedIn(): boolean {
    return !!localStorage.getItem('userInfo');
  }
}

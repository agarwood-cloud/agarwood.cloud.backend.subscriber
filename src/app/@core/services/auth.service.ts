import { Injectable } from '@angular/core';
import { throwError, of, Observable } from 'rxjs';
import { User } from 'src/app/@shared/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  // User Login
  public login(account: string, password: string): Observable<any>  { 
    const res = this.http.post('http://localhost:18306/authentication/oauth/user/login', {
      username: account,
      password: password,
      version:  '1.0.0'
    });

    return res;
    
    // for (let i = 0; i < USERS.length; i++) {
    //   if (account === USERS[i].account && password === USERS[i].password) {
    //     let { userName, gender, phoneNumber, email } = USERS[i];
    //     let userInfo: User = { userName, gender, phoneNumber, email };
    //     return of(userInfo);
    //   }
    // }
    // return throwError(
    //   'Please make sure you have input correct account and password'
    // );
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expiredAt');
    localStorage.removeItem('userInfo');
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

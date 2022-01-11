import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    /**
     * add Bearer token to Http Header
     *
     * @param req HttpRequest
     * @param token string
     * @private
     */
    private static addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
        return req.clone({
            setHeaders: { Authorization: `Bearer ` + token },
            // todo add officialAccountId params
            // params: req.params.set('officialAccountId', 'officialAccountId')
        });
    }

    /**
     * Identifies and handles a given HTTP request.
     *
     * @param req HttpRequest
     * @param next HttpHandler
     */
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // 这里加入token值
        return next.handle(HeaderInterceptor.addToken(req, localStorage.getItem('token')));
    }
}

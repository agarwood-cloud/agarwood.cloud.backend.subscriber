import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface Item {
  createdAt: string;
  customer: string|null;
  customerId: number|null;
  headImgUrl: string | null;
  id: number;
  nickname: string | null;
  openid: string | null;
  subscribe: string;
  subscribeAt: string | null;
  subscribeScene: string;
  unionId: string | null;
  unsubscribedAt: string | null;
  updatedAt: string | null;
}

export interface ListPager {
  total?: number;
  perPage?: number;
  page?: number;
}

@Injectable()
export class ListDataService {
  /**
   * 初始化
   * @param http
   */
  public constructor(private http: HttpClient) {
  }

  /**
   * 获取用户列表
   */
  public getUserList(params: any): Observable<any> {
    return this.http.get('/user-center/official-account/v1/user', { params: params });
  }
}

import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface Item {
  id?: string;
  title?: string;
  priority?: string;
  iteration?: string;
  assignee?: string;
  status?: string;
  timeline?: string;
  $checked?: boolean;
  $expandConfig?: any;
  children?: any;
  chosen?: boolean;
  $isChildTableOpen?: boolean;
}

export interface ListPager {
  pageSize?: number;
  pageIndex?: number;
}

@Injectable()
export class ListDataService {
  /**
   * 初始化
   * @param http 
   */
  public constructor(private http: HttpClient) {
    this.getUserList();
  }

  /**
   * 获取用户列表
   */
  public getUserList(): Observable<any> {
    return this.http.get('http://localhost:18316/official-account/v1/user');
  }

  private basicData: Item[] = [
    {
      id: '530000200702210206',
      title: 'Tksno Nvsche Rmysrkwsy Qxjvulnsd Rzo',
      priority: 'Medium',
      iteration: 'iteration',
      assignee: 'Ruth Anderson',
      status: 'Done',
      timeline: '1980-01-05',
    },
    {
      id: '120000201207262146',
      title: 'Mcpnwxqws Dfqrmphi Ipl',
      priority: 'Medium',
      iteration: 'iteration',
      assignee: 'Susan Garcia',
      status: 'Done',
      timeline: '1972-01-14',
    },
    {
      id: '360000199409270026',
      title: 'Lwomkvcng Hwwj Hhjxlz',
      priority: 'High',
      iteration: 'iteration',
      assignee: 'Kevin Johnson',
      status: 'Done',
      timeline: '1991-06-03',
    },
  ];

  private pagerList(data, pager) {
    return data.slice(
      pager.pageSize * (pager.pageIndex - 1),
      pager.pageSize * pager.pageIndex
    );
  }

  getListData(pager: ListPager): Observable<any> {
    return observableOf({
      pageList: this.pagerList(this.basicData, pager),
      total: this.basicData.length,
    }).pipe(delay(1000));
  }
}

import { Component, OnInit } from '@angular/core';
import { Customer } from '../services/customer';

@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
  styleUrls: ['./chat-sidebar.component.scss']
})
export class ChatSidebarComponent implements OnInit {

  /**
   * active Tab
   */
  public activeTab: string | number = 'chat-list';

  /**
   * customer service name
   */
  public customer: Customer;

  public user;

  public message;

  /**
   * init
   */
  public constructor() {
    this.customer = JSON.parse(localStorage.getItem('userInfo'));

    this.user = {
      id: 1111,
      officialAccountId: 2222,
      openid: '123456789',
      customerId: 'customer_id',
      customer: 'customer',
      nickname: 'anme',
      headImgUrl: 'string',
      subscribeAt: 'string',
      unsubscribeAt: 'string',
      subscribe: 'subscribe',
      subscribeScene: 'ADD_SCENE_SEARCH',
      createdAt: '2022-01-14 00:00:00',
    };

    this.message = {
      id: 22222,
      content: '最后一条消息最后一条消息最后一条消息最后一条消息最后一条消息最后一条消息最后一条消息',
      createdAt: '2022-01-14 00:00:00',
    };

  }

  public ngOnInit(): void {
    // this.customerService = 'John Doe';
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-sidebar-accordion',
  templateUrl: './chat-sidebar-accordion.component.html',
  styleUrls: ['./chat-sidebar-accordion.component.scss']
})
export class ChatSidebarAccordionComponent implements OnInit {
  /**
   * user
   */
  public user;
  public constructor() {
    this.user = {
      id: 1111,
      officialAccountId: 2222,
      openid: '123456789',
      customerId: 'customer_id',
      customer: 'customer',
      nickname: 'username',
      headImgUrl: '',
      subscribeAt: 'string',
      unsubscribeAt: 'string',
      subscribe: 'subscribe',
      subscribeScene: 'ADD_SCENE_SEARCH',
      createdAt: '2022-01-14 00:00:00',
    };
  }
  menu = [{
    title: 'Content 1',
    children: [],
    content: 'Child Content of Content 1'
  }, {
    title: 'Content 2',
    children: [],
    content: 'Child Content of Content 2'
  }];

  public itemClick(event): void {
    event.clicktimes = (event.clicktimes || 0) + 1;
  }

  public menuToggle(event): void {
    console.log('item click', event);
  }

  public onClickUser(): void {
    console.log('onClickUser');
  }

  public ngOnInit(): void {
    console.log('ChatSidebarAccordionComponent');
  }

}

import { Component, OnInit } from '@angular/core';
import { ChatSocketService } from '../services/chat-socket.service';
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

  /**
   * ChatSocketService Object
   *
   * @private
   */
  private readonly chatSocket: ChatSocketService;

  /**
   * Whether the websocket is connected
   */
  public isOnline = false;

  public user;

  public message;

  /**
   * initializes the ChatSidebarComponent
   *
   * @param chatSocket ChatSocketService
   */
  public constructor(chatSocket: ChatSocketService) {
    // socket is connected
    this.chatSocket = chatSocket;
  }

  public ngOnInit(): void {
    // set customer params
    this.customer = JSON.parse(localStorage.getItem('userInfo'));

    console.log('this.socket', this.chatSocket);
    this.isSocketConnected();

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

  /**
   * Whether the websocket is connected
   */
  public isSocketConnected (): void {
    this.chatSocket.socket.on('connect', () => {
      console.log('connected');
      this.isOnline = true;
    });

    this.chatSocket.socket.on('disconnect', () => {
      console.log('disconnected');
      this.isOnline = false;
    });

    this.chatSocket.socket.on('connect_error', () => {
      console.log('connect_error');
      this.isOnline = false;
    });
  }

}

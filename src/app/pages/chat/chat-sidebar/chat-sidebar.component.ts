import { Component, OnInit } from '@angular/core';
import {User} from '../services/user';

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
  public customer: User;

  public constructor() {
    this.customer = JSON.parse(localStorage.getItem('userInfo'));
  }

  public ngOnInit(): void {
    // this.customerService = 'John Doe';
  }

}

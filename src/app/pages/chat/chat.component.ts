import { Component, OnInit } from '@angular/core';
import { ChatSocketService } from './services/chat-socket.service';

@Component({
  selector: 'app-chat',
  // template: `<router-outlet></router-outlet>`,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  /**
   * get socket.io client instance
   */
  public constructor(private readonly socket: ChatSocketService) {
    // this.socket = new ChatSocketService();
  }

  /**
   * A callback method that is invoked immediately after the
   * default change detector has checked the directive's
   * data-bound properties for the first time,
   * and before any of the view or content children have been checked.
   * It is invoked only once when the directive is instantiated.
   */
  public ngOnInit(): void {

    this.socket.sendTextMessage('111111', 'test');

    this.socket.sendImageMessage('dddd', 'dddd');

    this.socket.sendNewsItemMessage('adfadf', 'adfadfa', 'adfads', 'fadfad');

    this.socket.sendVideoMessage('adfadf', 'adfadfa', 'adfadfa', 'adfadfa', 'adfadf', 'adfadfa');

    this.socket.sendVoiceMessage('adfadf', 'adfadfa', 'adfadfa');

    console.log('ChatComponent-ngOnInit');
  }

}

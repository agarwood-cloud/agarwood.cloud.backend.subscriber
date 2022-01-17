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
   * @private
   */
  private readonly socket: ChatSocketService;

  /**
   * get socket.io client instance
   */
  public constructor(socket: ChatSocketService) {
    this.socket = socket;
  }

  /**
   * A callback method that is invoked immediately after the
   * default change detector has checked the directive's
   * data-bound properties for the first time,
   * and before any of the view or content children have been checked.
   * It is invoked only once when the directive is instantiated.
   */
  public ngOnInit(): void {

    console.log('ChatComponent-ngOnInit');
  }

}

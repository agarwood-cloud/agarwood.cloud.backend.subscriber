import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss']
})
export class ChatContentComponent implements OnInit {

  public constructor() {
    console.log('ChatContentComponent-constructor');
  }

  public ngOnInit(): void {
    console.log('ChatContentComponent');
  }

}

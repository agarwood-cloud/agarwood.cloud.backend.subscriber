import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-toolbar',
  templateUrl: './chat-toolbar.component.html',
  styleUrls: ['./chat-toolbar.component.scss']
})
export class ChatToolbarComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
    console.log('ChatToolbarComponent');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-toolbar',
  templateUrl: './chat-toolbar.component.html',
  styleUrls: ['./chat-toolbar.component.scss']
})
export class ChatToolbarComponent implements OnInit {

  public constructor() { }

  tab1acticeID: string | number = 'tab2';
  tab2acticeID: string | number = 'tab3';

  public ngOnInit(): void {
    console.log('ChatToolbarComponent');
  }

  activeTabChange(id) {
    console.log(id);
  }

}

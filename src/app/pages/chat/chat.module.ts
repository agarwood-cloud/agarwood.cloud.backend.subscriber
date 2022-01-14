import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatContentComponent } from './chat-content/chat-content.component';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatSidebarComponent } from './chat-sidebar/chat-sidebar.component';
import { ChatToolbarComponent } from './chat-toolbar/chat-toolbar.component';
import { ChatComponent } from './chat.component';
import { ChatBottomBarComponent } from './chat-bottom-bar/chat-bottom-bar.component';

@NgModule({
  declarations: [
    ChatComponent,
    ChatSidebarComponent,
    ChatContentComponent,
    ChatToolbarComponent,
    ChatBottomBarComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
  ]
})
export class ChatModule { }

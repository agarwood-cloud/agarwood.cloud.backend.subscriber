import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule, DataTableModule, SplitterModule } from 'ng-devui';

import { RelativeTimeModule } from 'ng-devui/relative-time';
import { ChatContentComponent } from './chat-content/chat-content.component';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatSidebarAccordionComponent } from './chat-sidebar/chat-sidebar-accordion/chat-sidebar-accordion.component';
import { ChatSidebarUserComponent } from './chat-sidebar/chat-sidebar-user/chat-sidebar-user.component';
import { ChatSidebarComponent } from './chat-sidebar/chat-sidebar.component';
import { ChatToolbarComponent } from './chat-toolbar/chat-toolbar.component';
import { ChatComponent } from './chat.component';
import { ChatSocketService } from './services/chat-socket.service';

@NgModule({
  providers: [
    ChatSocketService,
  ],
  declarations: [
    ChatComponent,
    ChatSidebarComponent,
    ChatContentComponent,
    ChatToolbarComponent,
    ChatSidebarUserComponent,
    ChatSidebarAccordionComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    RelativeTimeModule,
    SplitterModule,
    CardModule,
    DataTableModule,
  ]
})
export class ChatModule { }

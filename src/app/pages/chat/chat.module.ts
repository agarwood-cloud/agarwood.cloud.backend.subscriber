import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule, DataTableModule, SplitterModule } from 'ng-devui';

import { RelativeTimeModule } from 'ng-devui/relative-time';
import { ChatBottomBarComponent } from './chat-bottom-bar/chat-bottom-bar.component';
import { ChatContentComponent } from './chat-content/chat-content.component';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatSidebarAccordionComponent } from './chat-sidebar/chat-sidebar-accordion/chat-sidebar-accordion.component';
import { ChatSidebarUserComponent } from './chat-sidebar/chat-sidebar-user/chat-sidebar-user.component';
import { ChatSidebarComponent } from './chat-sidebar/chat-sidebar.component';
import { ChatToolbarComponent } from './chat-toolbar/chat-toolbar.component';
import { ChatComponent } from './chat.component';

@NgModule({
  declarations: [
    ChatComponent,
    ChatSidebarComponent,
    ChatContentComponent,
    ChatToolbarComponent,
    ChatBottomBarComponent,
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

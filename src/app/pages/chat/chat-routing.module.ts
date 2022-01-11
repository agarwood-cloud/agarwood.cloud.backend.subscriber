import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ChatModalComponent } from './chat-modal/chat-modal.component';

const routes: Routes = [
  { 
    path: '', component: ChatComponent,
    children: [
      { path: 'modal', component: ChatModalComponent },
      { path: '', redirectTo: 'modal', pathMatch: 'full' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, SharedModule]
})
export class ChatRoutingModule { }

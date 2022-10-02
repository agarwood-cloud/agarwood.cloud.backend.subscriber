import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from 'ng-devui/layout';
import {
  DaLayoutComponent,
  DaLayoutFooterComponent,
  DaLayoutHeaderComponent,
  DaLayoutSecHeaderComponent,
  DaLayoutSecSidebarComponent,
  DaLayoutSidebarComponent,
} from './da-layout.component';

@NgModule({
  declarations: [
    DaLayoutComponent,
    DaLayoutSidebarComponent,
    DaLayoutSecSidebarComponent,
    DaLayoutHeaderComponent,
    DaLayoutSecHeaderComponent,
    DaLayoutFooterComponent,
  ],
  imports: [CommonModule, LayoutModule],
  exports: [
    DaLayoutComponent,
    DaLayoutSidebarComponent,
    DaLayoutSecSidebarComponent,
    DaLayoutHeaderComponent,
    DaLayoutSecHeaderComponent,
    DaLayoutFooterComponent,
  ],
})
export class DaLayoutModule {}

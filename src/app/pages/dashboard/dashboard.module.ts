import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';


@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    CustomerServiceComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

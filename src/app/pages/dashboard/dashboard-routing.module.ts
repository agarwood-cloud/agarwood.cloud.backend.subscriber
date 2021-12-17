import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';

const routes: Routes = [
  { 
    path: '', component: DashboardComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'customer-service', component: CustomerServiceComponent },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

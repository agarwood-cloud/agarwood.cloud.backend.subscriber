import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(
          m => m.DashboardModule
        ),
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('./customers/customers.module').then(
            (m) => m.CustomersModule
          )
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(
          m => m.ProductModule
        )
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(
          m => m.OrderModule
          )
        },
      {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}

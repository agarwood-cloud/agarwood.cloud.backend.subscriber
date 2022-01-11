import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/@shared/shared.module';
import { ListComponent } from './list/list.component';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers.routing.module';
import { BasicListModule } from './list/basic-list/basic-list.module';

@NgModule({
  declarations: [ListComponent, CustomersComponent],
  imports: [SharedModule, CustomersRoutingModule, BasicListModule],
  providers: [],
})
export class CustomersModule {}

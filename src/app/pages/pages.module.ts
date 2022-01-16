import { NgModule } from '@angular/core';
import { BackTopModule, DialogService } from 'ng-devui';
import { DaLayoutModule } from '../@shared/layouts/da-layout';
import { SharedModule } from '../@shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [PagesRoutingModule, SharedModule, BackTopModule, DaLayoutModule],
  declarations: [PagesComponent],
  providers: [DialogService]
})
export class PagesModule {}

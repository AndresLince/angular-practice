import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientComponent } from './client/client.component';
import { ClientsComponent } from './clients/clients.component';


@NgModule({
  declarations: [ ClientComponent, ClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }

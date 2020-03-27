import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundRoutingModule } from './background-routing.module';
import { BackgroundPage } from './background.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [BackgroundPage],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    BackgroundRoutingModule
  ]
})
export class BackgroundModule { }

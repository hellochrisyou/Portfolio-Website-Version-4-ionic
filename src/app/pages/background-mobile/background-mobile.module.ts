import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundMobileRoutingModule } from './background-mobile-routing.module';
import { BackgroundMobilePage } from './background-mobile.component';
import { SharedModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [BackgroundMobilePage],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    BackgroundMobileRoutingModule
  ]
})
export class BackgroundMobileModule { }

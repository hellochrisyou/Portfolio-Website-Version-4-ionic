import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionRoutingModule } from './version-routing.module';
import { VersionPage } from './version.component';
import { SharedModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [VersionPage],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    VersionRoutingModule
  ]
})
export class VersionModule { }

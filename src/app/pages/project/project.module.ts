import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectPage } from './project.component';
import { SharedModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ProjectPage],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }

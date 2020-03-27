import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillRoutingModule } from './skill-routing.module';
import { SkillPage } from './skill.component';
import { SharedModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [SkillPage],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    SkillRoutingModule
  ]
})
export class SkillModule { }

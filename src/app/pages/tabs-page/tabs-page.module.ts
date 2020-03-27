import { ContactModule } from './../contact/contact.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HomeModule } from '../home/home.module';
import { MapModule } from '../map/map.module';
import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';
import { SkillModule } from '../skill/skill.module';
import { VersionModule } from '../version/version.module';
import { BackgroundModule } from '../background/background.module';
import { ProjectModule } from '../project/project.module';
import { SharedModule } from '../../shared/shared.module';
import { RecordingModule } from '../recording/recording.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContactModule,
    FormsModule,
    IonicModule,
    MapModule,
    HomeModule,
    ProjectModule,
    SkillModule,
    VersionModule,
    BackgroundModule,
    RecordingModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }

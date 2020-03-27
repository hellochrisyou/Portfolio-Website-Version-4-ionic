import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordingRoutingModule } from './recording-routing.module';
import { RecordingPage } from './recording.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [RecordingPage],
  imports: [
    CommonModule,
    SharedModule,
    RecordingRoutingModule
  ]
})
export class RecordingModule { }

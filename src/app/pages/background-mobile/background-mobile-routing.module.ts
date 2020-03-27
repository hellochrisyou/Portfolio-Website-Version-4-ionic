import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundMobilePage } from './background-mobile.component';


const routes: Routes = [
  {
    path: '',
    component: BackgroundMobilePage
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackgroundMobileRoutingModule { }

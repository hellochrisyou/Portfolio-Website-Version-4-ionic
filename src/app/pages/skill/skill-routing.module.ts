import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillPage } from './skill.component';

const routes: Routes = [
  {
    path: '',
    component: SkillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule { }

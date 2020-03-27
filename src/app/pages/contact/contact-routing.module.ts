import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPage } from './contact.component';


const routes: Routes = [
  {
    path: '',
    component: ContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }

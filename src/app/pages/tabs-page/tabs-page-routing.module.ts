import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { HomePage } from '../home/home';
import { BackgroundPage } from '../background/background.component';
import { SkillPage } from '../skill/skill.component';
import { ProjectPage } from '../project/project.component';
import { ContactPage } from '../contact/contact.component';
import { VersionPage } from '../version/version.component';
import { RecordingPage } from '../recording/recording.component';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'background',
        children: [
          {
            path: '',
            loadChildren: () => import('../background/background.module').then(m => m.BackgroundModule)
          }
        ]
      },
      {
        path: 'skill',
        children: [
          {
            path: '',
            loadChildren: () => import('../skill/skill.module').then(m => m.SkillModule)
          }
        ]
      },
      {
        path: 'project',
        children: [
          {
            path: '',
            loadChildren: () => import('../project/project.module').then(m => m.ProjectModule)
          }
        ]
      },
      {
        path: 'recording',
        children: [
          {
            path: '',
            loadChildren: () => import('../recording/recording.module').then(m => m.RecordingModule)
          }
        ]
      },
      {
        path: 'contact',
        children: [
          {
            path: '',
            loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule)
          }
        ]
      },
      {
        path: 'version',
        children: [
          {
            path: '',
            loadChildren: () => import('../version/version.module').then(m => m.VersionModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/background',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }


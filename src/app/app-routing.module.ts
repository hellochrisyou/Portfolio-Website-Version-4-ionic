import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'background',
    loadChildren: () => import('./pages/background/background.module').then(m => m.BackgroundModule)
  },
  {
    path: 'background-mobile',
    loadChildren: () => import('./pages/background-mobile/background-mobile.module').then(m => m.BackgroundMobileModule)
  },
  {
    path: 'skill',
    loadChildren: () => import('./pages/skill/skill.module').then(m => m.SkillModule)
  },
  {
    path: 'recording',
    loadChildren: () => import('./pages/recording/recording.module').then(m => m.RecordingModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'version',
    loadChildren: () => import('./pages/version/version.module').then(m => m.VersionModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

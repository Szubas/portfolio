import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./skills/skills.component').then(m => m.SkillsComponent)
  },
  {
    path: '**',
    redirectTo: 'about',
    pathMatch: 'full'
  },
];

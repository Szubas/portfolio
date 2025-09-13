import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then((m) => m.AboutComponent),
    data: { animation: 'AboutPage' },
  },
  {
    path: 'skills',
    loadComponent: () => import('./skills/skills.component').then((m) => m.SkillsComponent),
    data: { animation: 'SkillsPage' },
  },
  {
    path: 'projects',
    loadComponent: () => import('./projects/projects.component').then((m) => m.ProjectsComponent),
    data: { animation: 'ProjectsPage' },
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then((m) => m.ContactComponent),
    data: { animation: 'ContactPage' },
  },
  {
    path: '**',
    redirectTo: 'about',
    pathMatch: 'full',
  },
];

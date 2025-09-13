import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { trigger, transition, style, animate, query } from '@angular/animations';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.html',
  styleUrls: ['./app.scss'],
  imports: [
    HeaderComponent,
    RouterModule,
    SkillsComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
  ],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [style({ position: 'absolute', width: '100%', top: 0, left: 0 })], {
          optional: true,
        }),
        query(':leave', [style({ opacity: 0 })], { optional: true }),
        query(':enter', [style({ opacity: 0 }), animate('300ms ease-in', style({ opacity: 1 }))], {
          optional: true,
        }),
      ]),
    ]),
  ],
})
export class App {
  protected readonly title = signal('portfolio');
}

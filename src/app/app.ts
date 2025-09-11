import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';  // <-- dodaj

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [
    HeaderComponent,
    RouterModule  
  ]
})
export class App {
  protected readonly title = signal('portfolio');
}

import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
      <a [routerLink]="['/']">
        <img src="/assets/logo.svg" class="brand-logo" alt="logo" aria-hidden="true">
      </a>
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterLink, RouterOutlet],
})
export class AppComponent {
  title = 'homes';
}

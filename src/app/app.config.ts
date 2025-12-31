import { provideRouter } from '@angular/router';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<h1>Page Not Found</h1>`,
  standalone: true
})
export class NotFoundComponent {}

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ]
};

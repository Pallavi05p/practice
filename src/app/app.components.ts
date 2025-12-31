import { provideRouter, RouterModule, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { Component } from '@angular/core';

// Optional: NotFoundComponent
@Component({
  selector: 'app-not-found',
  template: `<h1>Page Not Found</h1>`,
  standalone: true,
})
export class NotFoundComponent {}

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' }, // default route
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent } 
];

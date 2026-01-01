import { Routes } from '@angular/router';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'about' }   
];

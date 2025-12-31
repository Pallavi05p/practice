import { Component } from '@angular/core';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

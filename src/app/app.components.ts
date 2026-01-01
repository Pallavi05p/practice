// import { Component } from '@angular/core';
// import { AboutComponent } from './about/about';
// import { ContactComponent } from './contact/contact';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [AboutComponent, ContactComponent],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {}  
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // <-- Add this

@Component({
  selector: 'app-root',
  standalone: true,       // Make sure it's standalone
  imports: [RouterModule], // <-- Add RouterModule here
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-app';
}

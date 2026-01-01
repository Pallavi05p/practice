import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.components';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});

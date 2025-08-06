import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menubar } from './component/menubar/menubar';
import {routes} from './app.routes';
import { RouterModule } from '@angular/router';
import { provideRouter } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Menubar],
  // Removed provideRouter(routes) from providers as it should be provided in main.ts or bootstrapApplication
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'MaterialLearning';
}
export const appConfig = {
  providers:[
    provideRouter(routes)
  ]
};
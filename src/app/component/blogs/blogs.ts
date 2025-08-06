import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule if you use icons
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule for buttons


@Component({
  selector: 'app-blogs',
  imports: [MatCardModule,
    MatIconModule,
    MatButtonModule
  ], 
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss'
})
export class Blogs {

}

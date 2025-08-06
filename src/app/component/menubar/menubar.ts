import { Component } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from '@angular/router'; // ✅ Import this
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router'; // ✅ Import this


@Component({
  selector: 'app-menubar',
  imports: [MatToolbar,
    MatButton,
    MatButtonModule,
    MatIcon,
    RouterLink,
    MatMenuModule,
    MatSidenavModule,
    MatListModule, RouterOutlet],
  templateUrl: './menubar.html',
  styleUrl: './menubar.scss'
})
export class Menubar {

}

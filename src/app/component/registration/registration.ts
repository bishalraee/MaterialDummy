import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCard } from "@angular/material/card";
import { MatCardModule } from '@angular/material/card'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ChangeDetectionStrategy} from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [MatFormFieldModule,
    MatInputModule, 
    MatCard,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class Registration {
  registrationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl('')
  });

  onReset(){
    this.registrationForm.reset();
  }
}

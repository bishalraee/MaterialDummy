import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCard } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox'; //for checkbox
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

//to call the registration service
import { Registration } from '../../services/registration';


@Component({
  selector: 'app-registration2',
  imports: [MatCardModule,MatCard,MatFormFieldModule,MatInputModule, ReactiveFormsModule,MatButtonModule,MatCheckboxModule],
  templateUrl: './registration2.html',
  styleUrl: './registration2.scss'
})
export class Registration2 {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private regService: Registration) { 
    this.registrationForm = this.fb.group({
      username: [''],
      password: [''],
      phone: [''],
      course: [''],
      php:[false],
      java:[false],   
      python:[false],
      ai:[false],
      feedback:['']
    });
  }

  onReset() {
    this.registrationForm.reset();
  }

  onSave(){
    if(this.registrationForm.valid){
      this.regService.registerClient(this.registrationForm.value).subscribe({
        next:(res:any) => {
          console.log('Client registered successfully', res);
          this.onReset(); // Reset the form after successful registration
        },
        error:(err: any)=>{
          console.error('Error registering client', err);
        }
      });
    }
  }
}
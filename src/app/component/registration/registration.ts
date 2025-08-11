import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { MatCard } from "@angular/material/card";
import { MatCardModule } from '@angular/material/card'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

//import done to work with edit and delete functionality
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { Customer } from '../../Model/Customer';
import {Optional} from '@angular/core';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule, 
    // MatCard,
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


//this code was before working with edit and delete functionalty
// export class Registration {
//   registrationForm = new FormGroup({
//     firstName: new FormControl(''),
//     lastName: new FormControl(''),
//     email: new FormControl(''),
//     dob: new FormControl(''),
//     gender: new FormControl('')
//   });

export class Registration {
  registrationForm: FormGroup;

  constructor(
    @Optional() public dialogRef?: MatDialogRef<Registration>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data?: any
  ){
    //initialize the form, use data if present(for editing)
    this.registrationForm = new FormGroup({
      id: new FormControl(this.data?.id || ''),
      name: new FormControl(this.data?.name || ''),
      email: new FormControl(this.data?.email || ''),
      phone: new FormControl(this.data?.phone || ''),
      status: new FormControl(this.data?.status || '')
    });
  }

  onReset(){
    this.registrationForm.reset();
  }

  onSave(){
    if(this.registrationForm.valid){
      //close dialog and send form value back
      if (this.dialogRef) {
        this.dialogRef.close(this.registrationForm.value);
      }
    }
    
  }
}

  

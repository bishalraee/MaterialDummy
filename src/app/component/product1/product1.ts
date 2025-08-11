import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { Master } from '../../services/master';
import { Customer } from '../../Model/Customer';
// import { MatCard } from "@angular/material/card";
// import { MatCardContent } from "../../../../node_modules/@angular/material/card/index";
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-product1',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatButton,MatSort,MatFormFieldModule,MatInputModule],
  templateUrl: './product1.html',
  styleUrl: './product1.scss'
})
export class Product1 {

  customerlist !: Customer[];
  dataSource:any;
  displayedColumns: string[] = ['code', 'name', 'email', 'phone', 'status','action']; //the value here are displayed in the table
  @ViewChild(MatPaginator) paginator!: MatPaginator; //ViewChild is used to get the reference of the paginator in the template //see from here
  @ViewChild(MatSort) sort!: MatSort; //ViewChild is used to get the reference of the sort in the template

  constructor(private service:Master){
    this.service.GetCustomer().subscribe(res=>
    {
      this.customerlist = res;
      this.dataSource = new MatTableDataSource<Customer>(this.customerlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; //assigning the sort to the dataSource
    });
  }

  applyFilter(data:Event){
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase(); //filtering the data based on the input value
  }



}


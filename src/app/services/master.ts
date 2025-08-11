import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Model/Customer'; 
@Injectable({
  providedIn: 'root'
})
export class Master {
  constructor(private http: HttpClient) {}

  GetCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:3000/customer");
    
  }
}

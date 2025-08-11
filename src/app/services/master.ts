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

  //method added for edit and delete as they are used in product1.ts
  UpdateCustomer(customer:Customer):Observable<any>{
    return this.http.put(`http://localhost:3000/customer/${customer.id}`, customer);
  }

  DeleteCustomer(id:number):Observable<any>{
    return this.http.delete(`http://localhost:3000/customer/${id}`);
  } 
}

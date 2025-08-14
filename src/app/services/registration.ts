import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Client } from '../Model/client';

@Injectable({
  providedIn: 'root'
})
export class Registration {

  private apiUrl = 'http://localhost:3001/client';  //backend end point

  constructor(private http: HttpClient) { }

  // Method to register a new client
  registerClient(data:any):Observable<any>{
    return this.http.post(this.apiUrl, data);
  }

  getClient():Observable<Client[]>{
    return this.http.get<Client[]>(this.apiUrl);
  }

}

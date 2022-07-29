import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService1 {

  private baseURL="http://localhost:8080/api/v1/employees";

  constructor( private httpClient: HttpClient) { }

  getCandidateList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>('http://localhost:8080/api/v1/employees');
  }

}

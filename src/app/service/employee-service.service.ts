import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Employee.module';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpclient :HttpClient) { }


 addEmployee(emp:Employee)
 {
   return this.httpclient.post(`http://localhost:9090/demo/employee`,emp);

 }

 getAllRecord()
 {
   return this.httpclient.get<Employee[]>(`http://localhost:9090/demo/employee`);
 }

 updateEmployee(emp:Employee)
 {
   return this.httpclient.put(`http://localhost:9090/demo/employee`,emp);

 }


 deleteEmployee(id:any)
 {
   return this.httpclient.delete(`http://localhost:9090/demo/employee/${id}`)
 }



}

import { Component } from '@angular/core';
import { Employee } from './Employee.module';
import { BasicAuthonticationService } from './service/auth/basic-authontication.service';
import { EmployeeServiceService } from './service/employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSpringBoot';

  constructor( private employeeServices:EmployeeServiceService,
                private auth:BasicAuthonticationService
    
    )
  {

  }

employee =new Employee();

emplyeeArr:Employee[]=[];


formtitle="Add Employee"
submitButton="Submit"
updateIs=false;

isLogin=false;
username="";
password="";


login()
{
  console.log("username-"+this.username);
  console.log("password-"+this.password);

  this.auth.exicuteAuthentaition(this.username,this.password).subscribe(
    data =>
    {
        this.isLogin=true;
        alert("user is login")
    },
    error=>
    {
        alert("not login");
    }
  );
  
}

logout()
{
   this.auth.logout();
  this.isLogin=false;

}



addEmployee()
{
  console.table(this.employee)
    
 if(this.employee.id==0)
 {
 this.employeeServices.addEmployee(this.employee).subscribe(result =>{
   alert("added");
   this.showAllEmployee();
 })
 }
 else{
  this.employeeServices.updateEmployee(this.employee).subscribe(result =>{
    alert("update");
    this.showAllEmployee();
  })
 }

}

showAllEmployee()
{
  this.employeeServices.getAllRecord().subscribe(result =>
    {
      this.emplyeeArr=result;
      console.table(this.emplyeeArr);
    })
}


addRecord()
{
  this.employee=new Employee();
  this.employee.id=0;
  this.formtitle="Add Employee"
  this.submitButton="Submit"
  this.updateIs=false;
  
}


editEmployee(emp:Employee)
{
  this.employee=emp;
  this.formtitle="Edit Employee"
  this.submitButton="Update"
  this.updateIs=true;
}

deleteRecord(id:any)
{
  this.employeeServices.deleteEmployee(id).subscribe(result=>
    {
      alert("deleted")
      this.showAllEmployee();
    })
}


}

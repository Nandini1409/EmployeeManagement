import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeService:EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveEmployee()
  {
    console.log('Payload sent to backend:', this.employee);
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log('Employee created:', data);
      this.goToEmployeeList();
    },
  
    error => console.log(error));
  }

  goToEmployeeList(){

    this.router.navigate(['/employees']);

  }
  onSubmit(){
    console.log('Form submitted:', this.employee);
    this.saveEmployee();

  }

}

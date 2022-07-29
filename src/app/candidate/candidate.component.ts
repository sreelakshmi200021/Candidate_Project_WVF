import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employeeService.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  employees : Employee = new Employee();
  constructor(private employeeService :EmployeeService, 
    private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.employees);
    this.employeeService['Candidate'](this.employees).subscribe(data =>{
      console.log(data);
      this.goToTrainer();
    },
        error => console.log(error)); 
  }
  goToTrainer()
  {
    this.router.navigate(['/trainer']);
  }


  }


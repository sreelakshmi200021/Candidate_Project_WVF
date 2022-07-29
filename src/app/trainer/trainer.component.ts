import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService1 } from '../service/employee1.service';
import { EmployeeService } from '../service/employeeService.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService1: EmployeeService1) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents() {
    this.employeeService1.getCandidateList().subscribe(data => {
      this.employees = data;
    });
  }
}
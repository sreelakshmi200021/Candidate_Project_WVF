import { TestBed } from '@angular/core/testing';

import { EmployeeService1 } from './employee1.service';

describe('EmployeeService', () => {
  let service: EmployeeService1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

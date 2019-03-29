 import { Injectable } from '@angular/core';
import{IEmployee} from './employee-interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployeeListService(): IEmployee[]{

    return [
      {Firstname:'Sachin', Lastname:'Lodhi',Age:25, Salary:20000, Gender:'Male'},
      {Firstname:'Raashi', Lastname:'Jain',Age:25, Salary:30000, Gender:'Female'},
      {Firstname:'Kshitij', Lastname:'Gupta',Age:24, Salary:100000, Gender:'Male'},
      {Firstname:'Sakshii', Lastname:'Lonkar',Age:23, Salary:80000, Gender:'Female'},
      {Firstname:'Pushpa', Lastname:'Bhagat',Age:26, Salary:90000, Gender:'Female'},
      {Firstname:'Nidhi', Lastname:'Sharma',Age:27, Salary:97000, Gender:'Female'}
      // {Firstname:'Govind', Lastname:'Patkar',Age:28, Salary:40000, Gender:'Male'}
    ]
  }

}

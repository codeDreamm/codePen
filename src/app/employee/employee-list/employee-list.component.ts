import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee.component';
import{IEmployee} from '../employee-interface';
import {EmployeeService} from '../employee.service';
// import{EmployeeCount} from 'employee-count.component';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[]; //array type of Interface

  /**************Service Example********************* */
    
  constructor(private empService : EmployeeService) {
    


    /* this.employees=[
      /* {Firstname:'Sachin', Lastname:'Lodhi',Age:25, Salary:20000, Gender:'Male'},
      {Firstname:'Raashi', Lastname:'Jain',Age:25, Salary:30000, Gender:'Female'},
      {Firstname:'Kshitij', Lastname:'Gupta',Age:24, Salary:40000, Gender:'Male'},
      {Firstname:'Sakshii', Lastname:'Lonkar',Age:23, Salary:80000, Gender:'Female'},
      {Firstname:'Pushpa', Lastname:'Bhagat',Age:26, Salary:90000, Gender:'Female'},
      {Firstname:'Nidhi', Lastname:'Sharma',Age:27, Salary:97000, Gender:'Female'},
      {Firstname:'Govind', Lastname:'Patkar',Age:28, Salary:40000, Gender:'Male'}
    ]  */
   }
  // Firstname:string;
  ngOnInit() {
    this.employees= this.empService.getEmployeeListService();// service should be called inside ngonit
  }
    /* commented for ngTrack by
    employees: any[] = [
      {Firstname:'Sachin', Lastname:'Lodhi',Age:25, Salary:20000, Gender:'Male'},
      {Firstname:'Raashi', Lastname:'Jain',Age:25, Salary:30000, Gender:'Female'},
      {Firstname:'Kshitij', Lastname:'Gupta',Age:24, Salary:40000, Gender:'Male'},
      {Firstname:'Sakshii', Lastname:'Lonkar',Age:23, Salary:80000, Gender:'Female'},
      {Firstname:'Pushpa', Lastname:'Bhagat',Age:26, Salary:90000, Gender:'Female'}
    ]
 */
    // ngFor track by Example

   /* getEmploeeyList(): void{
      this.employees=[
        {Firstname:'Sachin', Lastname:'Lodhi',Age:25, Salary:20000, Gender:'Male'},
        {Firstname:'Raashi', Lastname:'Jain',Age:25, Salary:30000, Gender:'Female'},
        {Firstname:'Kshitij', Lastname:'Gupta',Age:24, Salary:40000, Gender:'Male'},
        {Firstname:'Sakshii', Lastname:'Lonkar',Age:23, Salary:80000, Gender:'Female'},
        {Firstname:'Pushpa', Lastname:'Bhagat',Age:26, Salary:90000, Gender:'Female'},
        {Firstname:'Nidhi', Lastname:'Sharma',Age:27, Salary:97000, Gender:'Female'},
        {Firstname:'Govind', Lastname:'Patkar',Age:28, Salary:40000, Gender:'Male'}
      ]
    } */

    /*trackByEmpName(index:number, emp:any): string{ //emp is employee object
      return emp.Firstname;
    } */

    selectedRadioButton : string = 'All';

    getTotalEmployeeCount(): number{
      return this.employees.length;
    }

    getTotalMaleEmployeeCount(): number{
      return this.employees.filter(e=> e.Gender === 'Male').length;
    }

    getTotalFemaleEmployeeCount(): number{
      return this.employees.filter(e=> e.Gender === 'Female').length;
    }

    onRadioButtonSelectionChange(radioSelected: string): void{
      this.selectedRadioButton=  radioSelected;
    }

    /***************lifeCycleHook Example **********************/
    

    userText:string='Sakshii';

    
    
}

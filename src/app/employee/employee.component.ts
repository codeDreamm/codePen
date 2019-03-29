import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  Firstname: String= 'Sakshi';
  Lastname: String = 'Lonkar';
  Age: number =24;
  Gender: string= 'Female';
  Salary: number = 700000;
  columnSpan: number=2;
  fontSize: number=20;
  color:string='Blue';
  fontWeight:string='italic';
  fontFamily:string='Arial';
  radius:number=2;
  marginRight:number=600;
  marginTop:number=30;
  showDetails:boolean = false;
  name:string='Sakshii';
  constructor() { }

  ngOnInit() {
  }
  getCandidateName(): string{
    return this.Firstname + ' ' + this.Lastname;
  }
  addStyle(){
    let style={
      'color':this.color,
      'font-size.px':this.fontSize,
      'font-weight':this.fontWeight,
      'font-family':this.fontFamily,
      'margin-right.px':this.marginRight,
      'margin-top.px':this.marginTop
     

    }
    return style;
  }
  onClick(): void{
      alert("You Clicked Me :)");
  }
  
  toggleDetails() : void{
    this.showDetails = !this.showDetails;
  }
}

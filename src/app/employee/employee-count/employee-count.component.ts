import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {
  @Input()
  all: number=10;

  @Input()
  male:number=5;

  @Input()
  female:number=5;
  constructor() { }

  //It will give value to the selected string like male/female/all
  selectedRadioButtonValue: string ='All';

  //this will give the count of selected radio button
  @Output()
  countOnRadioButtonSelectionChange: EventEmitter<string>= new EventEmitter<string>();
  ngOnInit() {
  }

  // the function which occurs on change radio button
  onRadiobuttonSelecetionChanged(){
    this.countOnRadioButtonSelectionChange.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue)
  }
  
}

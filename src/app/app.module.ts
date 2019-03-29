import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeTitle } from './employee/EmployeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employee-count/employee-count.component';
import { LifeCycleHookExplComponent } from './Others/life-cycle-hook-expl/life-cycle-hook-expl.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeTitle,
    EmployeeCountComponent,
    LifeCycleHookExplComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // declaration:[AppComponent,EmployeeComponent,EmployeeTitle],
  bootstrap: [AppComponent]
})
export class AppModule { }

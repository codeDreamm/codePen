import{Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'employeeTitle'
})

export class EmployeeTitle implements PipeTransform{
    transform(value:string, Gender:string){
        if(Gender.toLowerCase()=='male'){
            return 'Mr. '+ value;
        }
        else{
            return 'Miss ' + value;
        }
    }

}
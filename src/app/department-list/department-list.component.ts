import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';
import { Employee } from '../mock/employee';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public listOfLocalNames = [];
  public employee : Employee; 
  public myOptionalID : any;

 
  /* Service as Dependency, so need to call the service in constructor and add the service call in provider in ngModule */
  /* Router we need to call only in constructor */
  constructor(private myDemoServiceService: DemoServiceService,  private router : Router, private activtedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    console.log("ngOnInit...DepartmentListComponent...");
      // this.listOfNames = this.myDemoServiceService.getNameOfArray();
      this.listOfLocalNames = this.myDemoServiceService.getMockObjectNameOfArray();
      // get the id from the optional routing 
      this.activtedRoute.paramMap.subscribe( (map: ParamMap) => { 
        let i = parseInt(map.get('id')); 
        this.myOptionalID = i;
        let s = map.get('name'); 
        console.log("Optional name... " + s)
      });
  }

  employeeInfo(employee : Employee) {
    console.log("Employee ID: "+employee.id+" Employee Name: "+employee.name);
    // departments/:id -> need to pass the ID dynamically
    // Route Parameters will be present the dynamic value in router file (:/id)
    // Absolute routing
    // this.router.navigate(['/dirc', dynamicValue]); -- navigate to which route you need 
    this.router.navigate(['/departments', employee.id]);

    // Relative routing - When ever the URL dict name changed we need to change the path name here also, to avoid that Relative routing will be call, relativeTo
    // this.router.navigate( [employee.id], {relativeTo: this.activtedRoute} );
  }

  isSelectedEmployeeCheck(employee : Employee) : boolean {
    if(this.myOptionalID == employee.id) {
      return true;
    }
  }

}

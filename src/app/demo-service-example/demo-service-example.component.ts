import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-demo-service-example',
  templateUrl: './demo-service-example.component.html',
  styleUrls: ['./demo-service-example.component.css']
})
export class DemoServiceExampleComponent implements OnInit {

  public listOfLocalNames = [];
  public listOfServiceNames = [];
  isSuccess = false;
  
  /* Service as Dependency, so need to call the service in constructor and add the service call in provider in ngModule */
  constructor(public myDemoServiceService: DemoServiceService) { }

  ngOnInit(): void {
   // this.listOfNames = this.myDemoServiceService.getNameOfArray();
    this.listOfLocalNames = this.myDemoServiceService.getMockObjectNameOfArray();

    // call the subscribe method to get the value from Observable
    this.myDemoServiceService.getDatafromServer()
    .subscribe( value => {
      this.isSuccess = true;
      this.listOfServiceNames = value.data; 
      console.log("subscribe...success : "+value.per_page); 
    }, error => { this.isSuccess = false; console.log("subscribe...error :"+error); });
  }
  

}



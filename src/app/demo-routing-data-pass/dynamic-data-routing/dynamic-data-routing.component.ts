import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-data-routing',
  templateUrl: './dynamic-data-routing.component.html',
  styleUrls: ['./dynamic-data-routing.component.css']
})
export class DynamicDataRoutingComponent implements OnInit {

  public id: number ;
  public name: string ;

  constructor(private router: Router) { 
    // Accessing the state value - works only in the constructor
    // Please remember getCurrentNavigation() only works in the constructor. It will return null if used elsewhere.   
    // it is only available during Navigation, and will be set to null when Navigation ends. 
    // So to access the state we would have to subscribe to the appropriate event.
    let value = this.router.getCurrentNavigation().extras.state;
    console.log("DynamicDataRoutingComponent... Data JSON... "+JSON.stringify(value));  
    this.id = value['dynamicID'];
    this.name = value['dynamicName'];
  } 

  ngOnInit(): void {
    console.log("DynamicDataRoutingComponent::: "+JSON.stringify(history.state));
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-static-data-routing',
  templateUrl: './static-data-routing.component.html',
  styleUrls: ['./static-data-routing.component.css']
})
export class StaticDataRoutingComponent implements OnInit {

  public id: number ;
  public name: string ;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    // get the static JSON data from the routing module ts file
    // activatedRoute.data.subscribe()
    this.activatedRoute.data.subscribe(
      value => { 
        console.log("StaticDataRoutingComponent... Data JSON... "+JSON.stringify(value));  
        // obj[key]    
        console.log("StaticDataRoutingComponent... DeptID... "+value['DeptID']);      
        console.log("StaticDataRoutingComponent... DeptName... "+value['DeptName']);   
        this.id = value['DeptID'];
        this.name = value['DeptName'];
        // get the value from JSON
        for(let key in value) {
          // Whatever you want to do with key or obj[key]
          console.log(key);
          console.log(value[key]);
          }
      }
    );
  }

}

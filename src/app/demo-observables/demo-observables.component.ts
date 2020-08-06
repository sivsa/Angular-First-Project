import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo-observables',
  templateUrl: './demo-observables.component.html',
  styleUrls: ['./demo-observables.component.css']
})
export class DemoObservablesComponent implements OnInit {

  constructor() { }

  obser = new Observable((obser) =>  { /* push the value */
    console.log("Observable start...");
    obser.next("1");  
    obser.next("2");  
    obser.next("3");  
    obser.next(99);  
    console.log("Observable end...");
    return {
      unsubscribe() {
        console.log("unsubscribe");
      }
    }
  });

  unobser : any;

  ngOnInit(): void {
  }

  simpleObservables() {
    console.log("simpleObservables click start...");
    this.unobser = this.obser.subscribe((data) => {
       /* pull the value */
      console.log("simpleObservables data value... " + data);
    }, (error) => {
      console.log("simpleObservables error value... " + error);
    });
    console.log("simpleObservables click end...");
  }

  simpleUnsubscribe() {
    /* unsubscribe the Observable */
    /* it will work after the subscribe, otherwise it will be a error */
    console.log("simpleUnsubscribe click");
    this.unobser.unsubscribe();
  }

  

}

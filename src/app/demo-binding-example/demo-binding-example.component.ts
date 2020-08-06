import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-binding-example',
  templateUrl: './demo-binding-example.component.html',
  styleUrls: ['./demo-binding-example.component.css']
})
export class DemoBindingExampleComponent implements OnInit {

  firstName : any = "sankar";
  message = "this is dummy message!";
  age = 20;
  myId = "testID";
  isInputDisabledTrue = true;
  classBindingGreen = "text-success";
  classBindingRed = "text-danger";
  classBindingSpecial = "text-special";
  classBindingCombined = "text-special text-danger";
  hasGreen = true;
  hasRed = false;
  hasSpecial = true;
  colorNgClass = {
    "text-success" : !this.hasGreen,
    "text-danger" : !this.hasRed, 
    "text-special" : this.hasSpecial, 
  };
  colorPurple = "purple";
  multipleStyle = {
    /* text-align: "center", font-size: "34px", background-color: "#222" */
    /* text-align as textAlign ; font-size as fontSize ; background-color as backgroundColor*/
    color: this.colorPurple,
    textAlign : "center",
    fontSize : "34px",
    backgroundColor : "#222"
  };

  twoWayText = "My data";

  constructor() { }

  ngOnInit(): void {
    console.log("DemoBindingExampleComponent...");
  }

  onFire(e : Event) {
    console.log("Event Binding..."+e.type);
  }

  onGetInputVar(value : any) {
    console.log("Template Reference Variables..."+value);
  }

}
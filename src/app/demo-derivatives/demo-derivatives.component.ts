import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-derivatives',
  templateUrl: './demo-derivatives.component.html',
  styleUrls: ['./demo-derivatives.component.css']
})
export class DemoDerivativesComponent implements OnInit {

  // string 
  public firstName : string = "sivasankar";
  public lastName = "Palpandian";
  public fullName : string = 'This is  + ${firstName}';
  public colorName = "blue";
  // number 
  public age : number = 27;
  public decimal : number = 6;
  // boolean 
  public displayIfExample = false;
  public checkMaleGender = true;
  // Array
  public listOfNames = ["Bala", "Ram", "Vicky"];
  public fruits = ["Mango","Apple","Grapes","Banana"];
  public listOfRollMumber = [11, 22, 33];
  public list: Array<number> = [1, 2, 3];
  // tuple array 
  public tupleExample : [string, number] =  ["hello", 10];

  constructor() { }

  ngOnInit(): void {
    console.log("DemoDerivativesComponent...");
  }

}

import { Component, OnInit } from '@angular/core';
import { UserDetails } from './user-details';

@Component({
  selector: 'app-demo-login',
  templateUrl: './demo-login.component.html',
  styleUrls: ['./demo-login.component.css']
})
export class DemoLoginComponent implements OnInit {

  courses = [
    "Angular" , "Android", "Html5", "CSS3", "React JS"
  ];

  courseValue = "";
  genderValue = "";
  subscribeValue = "";
  formSubmitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  // myUserDetails = new UserDetails("Siva", "9566737324" , "Android", "female", true);
  myUserDetails = new UserDetails("", "" , "", "", false);

  selectedCourseValue(value) {
    console.log("Course - "+value);
    this.courseValue = value;
  }

  genderValueFunc(value) {
    console.log("Gender - "+value);
    this.genderValue = value;
  }

  subscribeValueFunc(value) {
    console.log("Subscribe - "+value);
    this.subscribeValue = value;
  }

  sumbitFunc(formValue : any) {
    console.log("User Details - "+JSON. stringify(this.myUserDetails));
    console.log("Form Details - "+JSON. stringify(formValue));
    this.formSubmitted = true;
  }

  loadData() {
    this.myUserDetails = new UserDetails("Siva", "9566737324" , "Android", "female", true);
  }
  

}

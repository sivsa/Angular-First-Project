import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-register',
  templateUrl: './demo-register.component.html',
  styleUrls: ['./demo-register.component.css']
})
export class DemoRegisterComponent implements OnInit {

  courses = [
    "Angular" , "Android", "Html5", "CSS3", "React JS"
  ];

  courseValue = "";
  genderValue = "";
  subscribeValue = "";
  formSubmitted = false;


  /* FormBuilder service - is the dependency and used to give the error method and all */
  constructor(private formBuilder : FormBuilder) { }
  
  /* Method 1 - new FormGroup({ new FormControl('') }) */
  /* registerFormGroup = new FormGroup({
    userNameFormControl : new FormControl('Sivasankar'),
    mobileNumberFormControl : new FormControl(''),
    courseFormControl : new FormControl(''),
    genderFormControl : new FormControl(''),
    subscribeFormControl : new FormControl('')
  }); */

   /* Method 2 - Using FormBuilder */
   /* userNameFormControl : ['data', [Need to put all Validators in this Array] ] */
   /* you can give Validators here or in html element itself If it's pre-defined attr */
   registerFormGroup =  this.formBuilder.group({ 
    userNameFormControl : ['Sivasankar', [Validators.required, Validators.minLength(3)] ], /* Validators - for validation */
    mobileNumberFormControl : [],
    courseFormControl : [],
    genderFormControl : [],
    subscribeFormControl : []
   });

  get commonUserNameFormControl() {
     return this.registerFormGroup.get('userNameFormControl')
   }

  get commonMobileNumberFormControl() {
     return this.registerFormGroup.get('mobileNumberFormControl')
   }

  ngOnInit(): void {
  }

  loadData() {
    /* setValue - it's like a tree structure - need to give all the values without fail - Must supply a value for form control with name */
    /* patchValue - we can pass which input we need */
    this.registerFormGroup.patchValue({
      userNameFormControl : 'sivasankar palpandian',
      mobileNumberFormControl : '9566737324',
      courseFormControl : 'Html5',
      genderFormControl : 'female',
      subscribeFormControl : 'true'
    }); 
  }

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
    console.log("Form Details - "+JSON. stringify(formValue));
    console.log("Form Details - "+JSON. stringify(this.registerFormGroup.value ));
    this.formSubmitted = true;
  }


}

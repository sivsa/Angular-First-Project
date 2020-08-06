import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list-detail',
  templateUrl: './department-list-detail.component.html',
  styleUrls: ['./department-list-detail.component.css']
})
export class DepartmentListDetailComponent implements OnInit {

  public myID : any;

  /* Router should be declared in constructor - Dependency */
  constructor(private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    console.log("ngOnInit...DepartmentListDetailComponent...");
    /* 
    // activatedRoute - to get the current URL id paramter
    // snapshot - will work only from another component,
    // snapshot - will not be work to call the same component again,
    // this snapshot method can't invoke again and ID params can't be updated
    // parseInt(will convert to number)
    */
    // this.myID = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    /* For avoiding the snapshot - we need use paramsMap Observable and subscribe */
    this.activatedRoute.paramMap.subscribe( ( paramMap : ParamMap) => {
      // parseInt(will convert to number)
      let id = parseInt(paramMap.get('id'));
      this.myID = id; 
    });
  }

  previous() {
    let pre = this.myID - 1;
    this.router.navigate(['/departments', pre]);
  }

  next() {
    let next = this.myID + 1;
    this.router.navigate(['/departments', next]);
  }

  back() {
    // Absolute routing
    // optional params pass from the child to parent - this optional params no need declare in router file
    // http://localhost:4200/departments;id=1 - ;id=1 it's the optional params routing
    // optional params routing -  need to add the JSON format data with key pair value
    this.router.navigate(['/departments', { 'id':this.myID, 'name':'dummy'} ]);

    // Relative routing - When ever the URL dict name changed we need to change the path name here also, to avoid that Relative routing will be call, relativeTo
    // (../) - remove the last-dict from the URL, 
    // http://localhost:4200/departments/2 --> http://localhost:4200/departments
    // this.router.navigate(['../', {'id':this.myID, 'name':'dummy'}], {relativeTo: this.activatedRoute});
  }

  overview() {
    // Absolute routing - can't be assess this type of scenario while calling the children path
    // this.router.navigate(['/overview']);
    // Relative routing - For this we need to call the relative routing
    // ['/overview'] vs ['overview'] - For child we don't need to call ['/dir']
    this.router.navigate(['overview'], {relativeTo: this.activatedRoute});
  }

  contact() {
    // Absolute routing - can't be assess this type of scenario while calling the children path
    // this.router.navigate(['/contact']);
    // Relative routing - For this we need to call the relative routing
    // ['/contact'] vs ['contact'] - For child we don't need to call ['/dir']
    // Implement optional params
    this.router.navigate(['contact', {'id': this.myID, 'contact': 'sucess'}], {relativeTo: this.activatedRoute});


    // We need to go to Binding component, then we need to delete the last two directory for that '../../'
    //this.router.navigate(['../../', 'binding', {'id': this.myID, 'contact': 'sucess'}], {relativeTo: this.activatedRoute});
  }



}

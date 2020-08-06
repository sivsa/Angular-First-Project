import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-demo-routing-data-pass',
  templateUrl: './demo-routing-data-pass.component.html',
  styleUrls: ['./demo-routing-data-pass.component.css']
})
export class DemoRoutingDataPassComponent implements OnInit {

  constructor(private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  staticData() {
    // need to achieve -- http://localhost:4200/routing-parent/static

    // Absolute Routing 
    // Method 1
    // this.router.navigate(['routing-parent/static']);
    // Method 2
    // this.router.navigate(['/routing-parent','static']);

    // Relative Routing 
    // for calling the children - we need to recommended to use the relative routing
    this.router.navigate(['static'], {relativeTo: this.activatedRoute});
  }

  dynamicData() {
    // Angular 7.2 - Allow passing state to NavigationExtra - This allows you to provide a state to store in the browser History API, great for tracking    // Relative Routing
    // navigate(['dict', 'mandatory Params', 'Optional Params'], { state:{}, relativeTo: this.activatedRoute });
    this.router.navigate(['dynamic'], {state: {'dynamicID':'66', 'dynamicName':'Sivasankar'} ,relativeTo: this.activatedRoute});
  }

}

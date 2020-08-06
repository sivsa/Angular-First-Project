import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  callNavigate() {
    // Absolute path navigation
    this.router.navigate(['/departments']);
   
    // Relative path navigation
    // this.router.navigate(['/departments'], {relativeTo: this.activatedRoute});
   
    // this will append the current url (http://localhost:4200/home/departments)
    // this.router.navigate(['departments'], {relativeTo: this.activatedRoute});
  }
  

}

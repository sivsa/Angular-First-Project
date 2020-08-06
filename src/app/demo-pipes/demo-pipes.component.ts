import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipes',
  templateUrl: './demo-pipes.component.html',
  styleUrls: ['./demo-pipes.component.css']
})
export class DemoPipesComponent implements OnInit {

  name = "sivasankar palpandian"
  amount = 9963.123
  percentage = 90
  malegender = 2


  constructor() { }

  ngOnInit(): void {
  }

}

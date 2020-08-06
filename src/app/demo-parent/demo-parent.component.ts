import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-parent',
  templateUrl: './demo-parent.component.html',
  styleUrls: ['./demo-parent.component.css']
})
export class DemoParentComponent implements OnInit {

  public fromParentData = "";
  public fromChildData : any;
  
  constructor() { }

  ngOnInit(): void {
    console.log("DemoParentComponent...")
  }

  onFire(value : string) {
    this.fromParentData = value;
    console.log("DemoParentComponent..."+this.fromParentData);
  }

}

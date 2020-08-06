import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/* EventEmitter should be called from @angular/core */

@Component({
  selector: 'app-demo-parent-child',
  templateUrl: './demo-parent-child.component.html',
  styleUrls: ['./demo-parent-child.component.css']
})
export class DemoParentChildComponent implements OnInit {

  @Input()
  paramsParentData : string;
  // Alternate Method 
  /* @Input('paramsParentData')
  public myParamsParentData : string; */

  @Output()
  myEmitter = new EventEmitter();

  public fromChildData = "";


  constructor() { }

  ngOnInit(): void {
    console.log("DemoParentChildComponent...")
  }

  onFire(value : string) {
    this.fromChildData = value;
    console.log("DemoParentChildComponent..."+this.fromChildData);
    this.myEmitter.emit(this.fromChildData);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.css']
})
export class LogicComponent implements OnInit {

  myLargeSize  = false;
  myItalicFont  = false;
  myColorRed  = false;
  constructor() { }

  ngOnInit(): void {
  }

  onLargeSize() {
    this.myLargeSize = !this.myLargeSize;
  }

  onItalicFont() {
    this.myItalicFont = !this.myItalicFont;
  }

  onColorRed() {
    this.myColorRed = !this.myColorRed;
  }

  myClassStyle() {
    return {
      "largeSize" : this.myLargeSize,
      "italicFont" : this.myItalicFont,
      "colorRed" : this.myColorRed
    }
   }


}

import { Component } from '@angular/core';

@Component({
  selector: 'ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component {
  cName: string;
  cFont: string;
  cFontAll: string[];
  cSize: number;
  cAlign: string;


  constructor() {
    this.cName = "Visitor";
    this.cFont = 'Arial';
    this.cFontAll = ['Arial', 'Times New Roman', "Verdana"];
    this.cSize = 40;
    this.cAlign = "text-left"
  }




}


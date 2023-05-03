import { Component } from '@angular/core';

@Component({
  selector: 'ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component {

  cN1: number;
  cN2: number;
  cOperator: string;
  cOperatorAll: string[];
  cResults: any[];


  constructor() {
    this.cN1 = 0;
    this.cN2 = 0;
    this.cOperator = '+';
    this.cOperatorAll = ['+', '-', '*', '÷'];
    this.cResults = [];

  }

  onSolve() {

    let cDate = new Date();

    switch (this.cOperator) {
      case '+':
        this.cResults.unshift({
          value: (this.cN1 + this.cN2),
          time: cDate.toLocaleTimeString(),
          request: "Addition (+)"
        });
        break

      case '-':
        this.cResults.unshift({
          value: (this.cN1 - this.cN2),
          time: cDate.toLocaleTimeString(),
          request: "Subtraction (-)"
        });

        break

      case '*':
        this.cResults.unshift({
          value: (this.cN1 * this.cN2),
          time: cDate.toLocaleTimeString(),
          request: "Multiplication (*)"
        });
        break

      case '÷':
        this.cResults.unshift({
          value: (this.cN1 / this.cN2),
          time: cDate.toLocaleTimeString(),
          request: "Division (÷)"
        });
        break

      default:
        break
    }
  }

  onRemove(item: any) {
    let index = this.cResults.indexOf(item);
    this.cResults.splice(index, 1);
  }

}

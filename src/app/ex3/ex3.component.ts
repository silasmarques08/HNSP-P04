import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request/request.service';

@Component({
  selector: 'ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {


  cTransactions: any[];
  cTitles: string[];
  isLoading: boolean;
  public choice: any;
  constructor(private requestService: RequestService) { }

  ngOnInit() {

    this.getTransactions();

  }

  getTransactions() {
    this.requestService.getTransactionsServer()
      .subscribe(data => {
        this.isLoading = true;
        this.cTransactions = Object.values(data);
        this.cTitles = Object.keys(this.cTransactions[0]);
        this.isLoading = false;
      })
  }


  onSort($event: any) {

    let index = this.cTitles.indexOf($event);
    this.choice = Object.keys(this.cTransactions[0])[index];


    if (this.choice === "id") {

      if (this.cTransactions[0].id > this.cTransactions[1].id) {

        this.cTransactions.sort((a, b) => (a.id > b.id) ? 1 : -1);
      }

      else {
        this.cTransactions.sort((a, b) => (a.id < b.id) ? 1 : -1);
      }

    } else if (this.choice === "amount") {

      if (this.cTransactions[0].id > this.cTransactions[1].id) {

        this.cTransactions.sort((a, b) => (parseInt(a.amount) < parseInt(b.amount)) ? 1 : -1);
      }

      else {
        this.cTransactions.sort((a, b) => (parseInt(a.amount) > parseInt(b.amount)) ? 1 : -1);
      }


    } else if (this.choice === "balance") {

      if (this.cTransactions[0].id > this.cTransactions[1].id) {

        this.cTransactions.sort((a, b) => (parseInt(a.balance) < parseInt(b.balance)) ? 1 : -1);
      }

      else {
        this.cTransactions.sort((a, b) => (parseInt(a.balance) > parseInt(b.balance)) ? 1 : -1);
      }

    } else if (this.choice === "label") {

      if (this.cTransactions[0].id > this.cTransactions[1].id) {

        this.cTransactions.sort((a, b) => (a.label > b.label) ? 1 : -1);
      }

      else {
        this.cTransactions.sort((a, b) => (a.label < b.label) ? 1 : -1);
      }

    } else if (this.choice === "date") {

      this.cTransactions.sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf());

    } else {

      alert("something went wrong with the sorting");
    }
  }

}





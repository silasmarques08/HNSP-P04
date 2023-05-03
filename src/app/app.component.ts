import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ExosAngular';

  dateTime: Date;

  ngOnInit() {
    this.dateTime = new Date();
    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date();
    })
  }
}

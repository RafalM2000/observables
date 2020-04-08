import { Component, OnInit } from '@angular/core';
import { of, interval } from 'rxjs';

@Component({
  selector: 'app-example-three',
  templateUrl: './example-three.component.html',
  styleUrls: ['./example-three.component.css']
})
export class ExampleThreeComponent implements OnInit {

  constructor() {
    interval(1000)
    .subscribe(data => console.log(data));
   }

  ngOnInit(): void {
  }

  observablesRun() {
    of(1, 101, 1001, 1002, 1003)
    .subscribe(data => console.log(data));
  }

}

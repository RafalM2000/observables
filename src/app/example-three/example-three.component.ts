import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';



@Component({
  selector: 'app-example-three',
  templateUrl: './example-three.component.html',
  styleUrls: ['./example-three.component.css']
})


export class ExampleThreeComponent implements OnInit {

  constructor() { }

   ngOnInit() {
     const counter$ = interval(1000);
     const sub = counter$.subscribe(data => console.log(data));

     setTimeout(() => sub.unsubscribe(), 7000);
     }
    observableRun() {
      of({name: 'Stefan', age: 45, sex: 'mężczyzna'}, {name: 'Sefania', age: 30, sex: 'kobieta'})
      .subscribe(data => console.log(data));
    }
}

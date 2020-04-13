import { Component, OnInit } from '@angular/core';
import { of, interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-example-three',
  templateUrl: './example-three.component.html',
  styleUrls: ['./example-three.component.css']
})


export class ExampleThreeComponent implements OnInit {

  constructor() { }

   ngOnInit() {
    const counter$ = interval(50);
    const sub = counter$.subscribe(data => console.log(data));

    setTimeout(() => sub.unsubscribe() , 6000);
   }

  observablesRun() {
    of({name: 'Stefan', age: 30, sex: 'mężczyzna'}, {name: 'Ola', age: 18, sex: 'kobieta'})
    .pipe(
      map(data => {
        return {name: data.name, sex: data.sex};
      }))
    .subscribe(data => console.log(data));
  }
}

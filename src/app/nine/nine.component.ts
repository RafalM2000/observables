import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { map, mergeMap, take, skip } from 'rxjs/operators';

@Component({
  selector: 'app-nine',
  templateUrl: './nine.component.html',
  styleUrls: ['./nine.component.css']
})
export class NineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fromEvent<MouseEvent>(document, 'click').pipe(
      map(ev => ev.clientX),
      mergeMap((num) => of('Pozycja pozioma kursora: ', num))
    ).subscribe(console.log)
  }

  fromEvent<MouseEvent>(document, 'click').pipe(
    skip(3)
  ).subscribe(console.log);
  }
}

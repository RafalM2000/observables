import { Component, OnInit } from '@angular/core';
import {  fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-eight',
  templateUrl: './eight.component.html',
  styleUrls: ['./eight.component.css']
})
export class EightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fromEvent(document, 'click').pipe(
      switchMap(() => interval(1000))
    ).subscribe(console.log);
  }

}

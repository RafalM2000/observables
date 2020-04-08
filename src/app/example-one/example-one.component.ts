import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.css']
})
export class ExampleOneComponent implements OnInit {

  posY: number;
  constructor() {  }

  ngOnInit(): void {
    const el = document.querySelector('.container');
    const mouseMove$ = fromEvent<MouseEvent>(el, 'mousemove');

    mouseMove$.pipe(
      filter(ev => ev.clientY > 430),
      map(ev => ev.clientY)
    )
    .subscribe(data => this.posY = data);
  }

}

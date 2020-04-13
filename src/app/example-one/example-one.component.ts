import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.css']
})
export class ExampleOneComponent implements AfterViewInit {

  posY: number;
  @ViewChild('AreaY') el: ElementRef;
  constructor() {  }

  ngAfterViewInit(): void {
    const mouseMove$ = fromEvent<MouseEvent>(this.el.nativeElement, 'mousemove');

    mouseMove$.pipe(
      filter(ev => ev.clientY > 430),
      map(ev => ev.clientY)
    )
    .subscribe(data => this.posY = data);
  }

}

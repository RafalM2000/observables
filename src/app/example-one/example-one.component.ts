import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.css']
})
export class ExampleOneComponent implements OnInit {

  stream = fromEvent(document.getElementsByTagName('h5'), 'click');

  constructor() {
    this.stream
    .pipe(
      debounceTime(5000)
    )
    .subscribe(param => console.log(param));
  }

  ngOnInit(): void {
  }

}

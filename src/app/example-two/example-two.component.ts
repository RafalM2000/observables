import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.css']
})
export class ExampleTwoComponent implements OnInit {

  mySearch: FormControl = new FormControl ('');

  constructor() {
    this.mySearch.valueChanges
    .pipe(
      debounceTime(2000)
    )
    .subscribe(param => console.log(param));
  }

  ngOnInit(): void {
  }

}

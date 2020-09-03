import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.css']
})
export class SevenComponent implements OnInit {

  person1 = {
    name: 'Maciej',
    age: 20
  };

  person2 = {
    name: 'Janusz',
    age: 21
  };

  constructor() { }

  ngOnInit(): void {
    of(this.person1, this.person2).pipe(
      distinctUntilKeyChanged('age')
    )
    .subscribe(data => console.log(data));
  }

}

import { Component, OnInit } from '@angular/core';
import { UserActionService } from '../user-action.service';

@Component({
  selector: 'app-example-six',
  templateUrl: './example-six.component.html',
  styleUrls: ['./example-six.component.css']
})
export class ExampleSixComponent implements OnInit {

  constructor(private service: UserActionService) { }

  ngOnInit(): void {
  }

  switchON() {
    this.service.valueEmitter.next(Math.random());
  }
}

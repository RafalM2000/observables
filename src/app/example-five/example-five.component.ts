import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';

interface Authors {
  id: number;
  name: string;
}

@Component({
  selector: 'app-example-five',
  templateUrl: './example-five.component.html',
  styleUrls: ['./example-five.component.css']
})
export class ExampleFiveComponent implements OnInit {

  authors  = [
    {id: 1, name: 'Ota Pavel'},
    {id: 2, name: 'Jerome David Salinger'},
    {id: 3, name: 'Thomas Mann'},
    {id: 4, name: 'Franz Kafka'},
  ];

  authors$: Observable<Authors[]> = of(this.authors);

  constructor() {
  }

  ngOnInit(): void {
  }

}

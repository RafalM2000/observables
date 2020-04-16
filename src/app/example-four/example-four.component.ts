import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Authors {
  id: number;
  name: string;
}

@Component({
  selector: 'app-example-four',
  templateUrl: './example-four.component.html',
  styleUrls: ['./example-four.component.css']
})
export class ExampleFourComponent implements OnInit {

  authors = [
    {id: 1, name: 'Ota Pavel'},
    {id: 2, name: 'Jerome David Salinger'},
    {id: 3, name: 'Thomas Mann'},
    {id: 4, name: 'Franz Kafka'},

  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onRow(author) {
    this.router.navigate(['/fourdetails', author.id]);
  }
}

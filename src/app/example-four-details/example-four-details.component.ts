import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-example-four-details',
  templateUrl: './example-four-details.component.html',
  styleUrls: ['./example-four-details.component.css']
})
export class ExampleFourDetailsComponent implements OnInit {

  authorId: number;

  constructor(private router: Router, private routeActive: ActivatedRoute) {
    this.routeActive.paramMap
    .subscribe(param => this.authorId = + param.get('id'));
   }

  ngOnInit(): void {
  }

  previousRow() {
    this.authorId = this.authorId - 1;
    this.router.navigate(['/fourdetails', this.authorId]);
  }

  nextRow() {
    this.authorId = this.authorId + 1;
    this.router.navigate(['/fourdetails', this.authorId]);
  }

}

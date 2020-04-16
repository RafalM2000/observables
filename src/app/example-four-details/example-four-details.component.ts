import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-example-four-details',
  templateUrl: './example-four-details.component.html',
  styleUrls: ['./example-four-details.component.css']
})
export class ExampleFourDetailsComponent implements OnInit {

  authorId: number;

  constructor(private router: Router, private routerActive: ActivatedRoute) {
    this.routerActive.paramMap
    .subscribe(params => this.authorId = + params.get('id'));
   }

  ngOnInit(): void {
  }

  nextRow() {
    this.authorId = this.authorId + 1;
    this.router.navigate(['/fourdetails', this.authorId]);
  }

  previousRow() {
    this.authorId = this.authorId - 1;
    this.router.navigate(['/fourdetails', this.authorId]);
  }
}

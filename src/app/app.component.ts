import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title1: string = 'Angular-In-Examples';
  title2: string = 'Observables, Observers i subscribe';
  title3: string = 'fromEvent, filter, map';

  constructor(private currentRoute: Router) {}

  ngDoCheck() {
    switch (this.currentRoute.url) {
      case '/one':
        this.title3 = 'fromEvent, filter, map';
        break;
      case '/two':
        this.title3 = 'valueChanges, debounceTime';
        break;
      case '/three':
        this.title3 = 'interval, of, unsubscribe';
        break;
        case '/four':
          this.title3 = 'routes and observables';
          break;
      default:
        this.title3 = 'routes and observables';
    }
  }
}

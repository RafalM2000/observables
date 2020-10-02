import { Component, DoCheck , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserActionService } from './user-action.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  title1: string = 'Angular-In-Examples';
  title2: string = 'Observables, Observers i subscribe';
  title3: string = 'fromEvent, filter, map';

  randomValue: number;

  constructor(private currentRoute: Router, private service: UserActionService) {}

  ngOnInit() {
    this.service.valueEmitter
    .subscribe(data => this.randomValue = data);
  }

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
          case '/five':
            this.title3 = 'AsyncPipe';
            break;
          case '/six':
            this.title3 = 'Subject, BehaviorSubject';
            break;
          case '/seven':
            this.title3 = 'distinctUntilChanged, distinctUntilKeyChanged';
            break;
          case '/eight':
            this.title3 = 'switchMap';
            break;
          case '/nine':
            this.title3 = 'mergeMap, take, skip';
            break;
      default:
        this.title3 = 'routes and observables';
    }
  }
}

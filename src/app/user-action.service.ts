import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserActionService {

  valueEmitter = new BehaviorSubject<number>(100);
  constructor() { }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['the first goal', 'the secon goal', 'the third goal']);
  goal = this.goals.asObservable();
  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }

}

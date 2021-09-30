import { BehaviorSubject } from "rxjs";
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppState  {
  private albumSubject$: BehaviorSubject<any>;
  private usersSubject$: BehaviorSubject<any>;
  private usersFilteredSubject$: BehaviorSubject<any>;

  get albumSubject(): any {
    return this.stateFactory(this.albumSubject$);
  }
  get usersSubject(): any {
    return this.stateFactory(this.usersSubject$);
  }
  get usersFilteredSubject(): any {
    return this.stateFactory(this.usersFilteredSubject$);
  }

  constructor() {
    this.albumSubject$ = new BehaviorSubject(null);
    this.usersSubject$ = new BehaviorSubject(null);
    this.usersFilteredSubject$ = new BehaviorSubject(null);
  }

  private stateFactory<T>(subject$: BehaviorSubject<T>): any {
    return {
      $: () => subject$.asObservable(),
      snapshot: () => this.copyPayload(subject$.getValue()),
      set: (payload: T) => subject$.next(this.copyPayload(payload))
    }
  }

  private copyPayload<T> (payload: T): T {
    return JSON.parse(JSON.stringify(payload)) as T;
  }
}

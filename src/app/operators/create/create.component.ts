import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'bz-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public counter = 0;

  constructor() {
    this.currentObserver = this.currentObserver.bind(this);
  }

  ngOnInit() {
  }

  public runCreate() {
    const newObservable = this.getNewObservable();
    newObservable.subscribe(this.currentObserver);
  }

  public asyncDelayEvent() {
    const asyncEvent = of('emitted value');
    asyncEvent.pipe(
      delay(3000)
    );
    return asyncEvent;
  }

  public getNewObservable(): Observable<string> {
    return new Observable<string>(subscriber => {
      subscriber.next('next value');
      subscriber.error('error');
      subscriber.complete();
    });
  }

  public currentObserver(value: string) {
    this.counter++;
    console.log('currentObserver: ', value, this.counter);
  }

}

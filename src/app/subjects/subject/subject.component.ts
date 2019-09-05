import { Component, OnInit } from '@angular/core';
import { Subject, interval } from 'rxjs';

@Component({
  selector: 'bz-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  public subject01 = new Subject<string>();
  public subject02 = new Subject<string>();

  public observerCounter01 = 0;

  constructor() {
    this.customObserver01 = this.customObserver01.bind(this);
  }

  ngOnInit() {
    this.runExample();
  }

  public get observable01$() {
    return this.subject01.asObservable();
  }

  public get observable02$() {
    return this.subject02.asObservable();
  }

  public customObserver01(value: string) {
    this.observerCounter01++;
    console.log('customObserver01 => value: ', value, this.observerCounter01);
  }

  public customObserver02(value: string) {
    console.log('customObserver02 => value: ', value);
  }

  public runExample() {
    const currentInterval = interval(5000);
    currentInterval.subscribe((value) => {
      console.log(value);
      const text = `interval: ${value}`;
      this.subject01.next(text);
      this.subject02.next(text);
    });
  }

  public subscribeObserver01ToSubject01() {
    this.observable01$.subscribe(this.customObserver01);
  }

  public subscribeObserver02ToSubject01() {
    this.observable01$.subscribe(this.customObserver02);
  }

  public subscribeObserver01ToSubject02() {
    this.observable02$.subscribe(this.customObserver01);
  }

  public subscribeObserver02ToSubject02() {
    this.observable02$.subscribe(this.customObserver01);
  }
}

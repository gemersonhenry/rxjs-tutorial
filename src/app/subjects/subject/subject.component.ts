import { Component, OnInit } from '@angular/core';
import { Subject, interval, Subscription } from 'rxjs';
import { ShareUserService, IUser } from './share-user.service';

@Component({
  selector: 'bz-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  private subject = new Subject<number>();
  private observable$ = this.subject.asObservable();

  public customTimer = interval(3000);
  public time01: number;
  public time02: number;

  private subscription01: Subscription;
  private subscription02: Subscription;

  constructor(
    private shareUserService: ShareUserService
  ) {
    this.customObserver01 = this.customObserver01.bind(this);
    this.customObserver02 = this.customObserver02.bind(this);
  }

  ngOnInit() {
    this.customTimer.subscribe(time => {
      this.subject.next(time);
    });
  }

  private customObserver01(time: number) {
    this.time01 = time;
  }

  private customObserver02(time: number) {
    this.time02 = time;
  }

  public subscribeCustomObserver01() {
    this.subscription01 = this.observable$
      .subscribe(this.customObserver01);
  }

  public subscribeCustomObserver02() {
    this.subscription02 = this.observable$
      .subscribe(this.customObserver02);
  }

  public unsubscribeCustomObserver01() {
    this.subscription01.unsubscribe();
  }

  public unsubscribeCustomObserver02() {
    this.subscription02.unsubscribe();
  }

}

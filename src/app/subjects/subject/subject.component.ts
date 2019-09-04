import { Component, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';

@Component({
  selector: 'bz-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  public subject01 = new Subject<string>();
  public subject02 = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.subject_example01();
  }

  public get observable01$() {
    return this.subject01.asObservable();
  }

  public get observable02$() {
    return this.subject02.asObservable();
  }

  public subject_example01() {
    const subjectTimer = timer(0, 5000);
    subjectTimer.subscribe(() => {
      console.log('timer');
    });
  }

}

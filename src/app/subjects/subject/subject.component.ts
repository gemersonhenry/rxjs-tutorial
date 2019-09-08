import { Component, OnInit } from '@angular/core';
import { Subject, interval } from 'rxjs';

@Component({
  selector: 'bz-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  public subject = new Subject<number>();

  public observerCounter01 = 0;

  constructor() {
  }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { timer, combineLatest } from 'rxjs';

@Component({
  selector: 'bz-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.combineLatestOperator_2Observables_example01();
    this.combineLatestOperator_2Observables_example02();
    // this.combineLatestOperators_3Observables_example01();
    // this.combineLatestOperators_3Observables_example02();
    // this.combineLatestOperators_3Observables_example03();
  }

  public combineLatestOperator_2Observables_example01(): void {
    const firstTimer = timer(0, 4000);
    const secondTimer = timer(0, 2000);

    const combinedTimers = combineLatest( firstTimer, secondTimer );
    combinedTimers.subscribe(console.log);
  }

  public combineLatestOperator_2Observables_example02(): void {
    const firstTimer = timer(0, 4000);
    const secondTimer = timer(2000, 2000);

    const combinedTimers = combineLatest( firstTimer, secondTimer );
    combinedTimers.subscribe(console.log);
  }

  public combineLatestOperators_3Observables_example01(): void {
    const firstTimer = timer(0, 4000);
    const secondTimer = timer(0, 2000);
    const thirdTimer = timer(0, 1000);

    const combinedTimers = combineLatest( firstTimer, secondTimer, thirdTimer );
    combinedTimers.subscribe(console.log);
  }

  public combineLatestOperators_3Observables_example02(): void {
    const firstTimer = timer(0, 5000);
    const secondTimer = timer(0, 3000);
    const thirdTimer = timer(0, 2000);

    const combinedTimers = combineLatest( firstTimer, secondTimer, thirdTimer );
    combinedTimers.subscribe(console.log);
  }

  public combineLatestOperators_3Observables_example03(): void {
    const firstTimer = timer(0, 8000);
    const secondTimer = timer(2000, 6000);
    const thirdTimer = timer(4000, 4000);

    const combinedTimers = combineLatest( firstTimer, secondTimer, thirdTimer );
    combinedTimers.subscribe(console.log);
  }

}

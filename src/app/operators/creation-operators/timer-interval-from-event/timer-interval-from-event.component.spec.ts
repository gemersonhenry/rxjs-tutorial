import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerIntervalFromEventComponent } from './timer-interval-from-event.component';

describe('TimerIntervalFromEventComponent', () => {
  let component: TimerIntervalFromEventComponent;
  let fixture: ComponentFixture<TimerIntervalFromEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerIntervalFromEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerIntervalFromEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

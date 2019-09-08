import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableObserverSubscriptionComponent } from './observable-observer-subscription.component';

describe('ObservableObserverSubscriptionComponent', () => {
  let component: ObservableObserverSubscriptionComponent;
  let fixture: ComponentFixture<ObservableObserverSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableObserverSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableObserverSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

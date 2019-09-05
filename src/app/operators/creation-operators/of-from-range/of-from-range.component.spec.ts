import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfFromRangeComponent } from './of-from-range.component';

describe('OfFromRangeComponent', () => {
  let component: OfFromRangeComponent;
  let fixture: ComponentFixture<OfFromRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfFromRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfFromRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

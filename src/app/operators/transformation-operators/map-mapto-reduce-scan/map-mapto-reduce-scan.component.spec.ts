import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMaptoReduceScanComponent } from './map-mapto-reduce-scan.component';

describe('MapMaptoReduceScanComponent', () => {
  let component: MapMaptoReduceScanComponent;
  let fixture: ComponentFixture<MapMaptoReduceScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapMaptoReduceScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMaptoReduceScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

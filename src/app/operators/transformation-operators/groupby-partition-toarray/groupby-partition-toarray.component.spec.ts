import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupbyPartitionToarrayComponent } from './groupby-partition-toarray.component';

describe('GroupbyPartitionToarrayComponent', () => {
  let component: GroupbyPartitionToarrayComponent;
  let fixture: ComponentFixture<GroupbyPartitionToarrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupbyPartitionToarrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupbyPartitionToarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

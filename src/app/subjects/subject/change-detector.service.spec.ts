import { TestBed } from '@angular/core/testing';

import { ChangeDetectorService } from './change-detector.service';

describe('ChangeDetectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeDetectorService = TestBed.get(ChangeDetectorService);
    expect(service).toBeTruthy();
  });
});

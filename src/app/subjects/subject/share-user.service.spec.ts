import { TestBed } from '@angular/core/testing';

import { ShareUserService } from './share-user.service';

describe('ShareUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareUserService = TestBed.get(ShareUserService);
    expect(service).toBeTruthy();
  });
});

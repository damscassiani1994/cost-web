import { TestBed } from '@angular/core/testing';

import { InfoUserService } from './info-user.service';

describe('InfoUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoUserService = TestBed.get(InfoUserService);
    expect(service).toBeTruthy();
  });
});

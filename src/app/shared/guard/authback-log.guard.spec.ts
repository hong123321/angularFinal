import { TestBed } from '@angular/core/testing';

import { AuthbackLogGuard } from './authback-log.guard';

describe('AuthbackLogGuard', () => {
  let guard: AuthbackLogGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthbackLogGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

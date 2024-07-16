import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isUrlCorrectGuard } from './is-url-correct.guard';

describe('isUrlCorrectGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isUrlCorrectGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

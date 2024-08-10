import { TestBed } from '@angular/core/testing';

import { FilterFormValidatorsService } from './filter-form-validators.service';

describe('FilterFormValidatorsService', () => {
  let service: FilterFormValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFormValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TimeApiService } from './time-api.service';

describe('TimeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeApiService = TestBed.get(TimeApiService);
    expect(service).toBeTruthy();
  });
});

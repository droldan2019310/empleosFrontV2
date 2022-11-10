import { TestBed } from '@angular/core/testing';

import { RestEmploymentService } from './rest-employment.service';

describe('RestEmploymentService', () => {
  let service: RestEmploymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestEmploymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

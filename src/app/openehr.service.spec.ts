import { TestBed } from '@angular/core/testing';

import { OpenehrService } from './openehr.service';

describe('OpenehrService', () => {
  let service: OpenehrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenehrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

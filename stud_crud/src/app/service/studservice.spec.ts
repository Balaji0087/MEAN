import { TestBed } from '@angular/core/testing';

import { Studservice } from './studservice';

describe('Studservice', () => {
  let service: Studservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Studservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

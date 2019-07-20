import { TestBed } from '@angular/core/testing';

import { BingService } from './bing.service';

describe('BingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BingService = TestBed.get(BingService);
    expect(service).toBeTruthy();
  });
});

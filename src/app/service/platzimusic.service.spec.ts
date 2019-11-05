import { TestBed } from '@angular/core/testing';

import { PlatzimusicService } from './platzimusic.service';

describe('PlatzimusicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatzimusicService = TestBed.get(PlatzimusicService);
    expect(service).toBeTruthy();
  });
});

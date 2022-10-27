import { TestBed } from '@angular/core/testing';

import { DeezerApiServicesService } from './deezer-api-services.service';

describe('DeezerApiServicesService', () => {
  let service: DeezerApiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeezerApiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { CoreSvcService } from './core-svc.service';

describe('CoreSvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreSvcService]
    });
  });

  it('should be created', inject([CoreSvcService], (service: CoreSvcService) => {
    expect(service).toBeTruthy();
  }));
});

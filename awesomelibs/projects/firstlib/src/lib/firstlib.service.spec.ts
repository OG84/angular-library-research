import { TestBed, inject } from '@angular/core/testing';

import { FirstlibService } from './firstlib.service';

describe('FirstlibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstlibService]
    });
  });

  it('should be created', inject([FirstlibService], (service: FirstlibService) => {
    expect(service).toBeTruthy();
  }));
});

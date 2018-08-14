import { TestBed, inject } from '@angular/core/testing';

import { PsychoService } from './psycho.service';

describe('PsychoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PsychoService]
    });
  });

  it('should be created', inject([PsychoService], (service: PsychoService) => {
    expect(service).toBeTruthy();
  }));
});

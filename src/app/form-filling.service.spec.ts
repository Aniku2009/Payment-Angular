import { TestBed, inject } from '@angular/core/testing';

import { FormFillingService } from './form-filling.service';

describe('FormFillingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormFillingService]
    });
  });

  it('should be created', inject([FormFillingService], (service: FormFillingService) => {
    expect(service).toBeTruthy();
  }));
});

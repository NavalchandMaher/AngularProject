import { TestBed } from '@angular/core/testing';

import { BasicAuthonticationService } from './basic-authontication.service';

describe('BasicAuthonticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthonticationService = TestBed.get(BasicAuthonticationService);
    expect(service).toBeTruthy();
  });
});

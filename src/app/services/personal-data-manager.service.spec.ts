import { TestBed } from '@angular/core/testing';

import { PersonalDataManagerService } from './personal-data-manager.service';

describe('PersonalDataManagerService', () => {
  let service: PersonalDataManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalDataManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DevRegisterService } from './dev-register.service';

describe('DevRegisterService', () => {
  let service: DevRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ScreenlogicApiService } from './screenlogic-api.service';

describe('ScreenlogicApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreenlogicApiService = TestBed.get(ScreenlogicApiService);
    expect(service).toBeTruthy();
  });
});

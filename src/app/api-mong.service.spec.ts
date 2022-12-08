import { TestBed } from '@angular/core/testing';

import { ApiMongService } from './api-mong.service';

describe('ApiMongService', () => {
  let service: ApiMongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

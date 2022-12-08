import { TestBed } from '@angular/core/testing';

import { DigiAssignmentService } from './digi-assignment.service';

describe('DigiAssignmentService', () => {
  let service: DigiAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigiAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

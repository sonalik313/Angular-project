import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiAssignmentComponent } from './digi-assignment.component';

describe('DigiAssignmentComponent', () => {
  let component: DigiAssignmentComponent;
  let fixture: ComponentFixture<DigiAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigiAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

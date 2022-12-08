import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdetailsPostComponent } from './empdetails-post.component';

describe('EmpdetailsPostComponent', () => {
  let component: EmpdetailsPostComponent;
  let fixture: ComponentFixture<EmpdetailsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdetailsPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpdetailsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

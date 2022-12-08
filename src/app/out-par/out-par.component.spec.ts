import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutParComponent } from './out-par.component';

describe('OutParComponent', () => {
  let component: OutParComponent;
  let fixture: ComponentFixture<OutParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutParComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutChComponent } from './out-ch.component';

describe('OutChComponent', () => {
  let component: OutChComponent;
  let fixture: ComponentFixture<OutChComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutChComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewheadComponent } from './newhead.component';

describe('NewheadComponent', () => {
  let component: NewheadComponent;
  let fixture: ComponentFixture<NewheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerDataComponent } from './flower-data.component';

describe('FlowerDataComponent', () => {
  let component: FlowerDataComponent;
  let fixture: ComponentFixture<FlowerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

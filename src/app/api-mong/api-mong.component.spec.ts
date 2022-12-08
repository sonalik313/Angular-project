import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMongComponent } from './api-mong.component';

describe('ApiMongComponent', () => {
  let component: ApiMongComponent;
  let fixture: ComponentFixture<ApiMongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiMongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiMongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

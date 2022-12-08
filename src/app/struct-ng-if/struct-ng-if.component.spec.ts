import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructNgIfComponent } from './struct-ng-if.component';

describe('StructNgIfComponent', () => {
  let component: StructNgIfComponent;
  let fixture: ComponentFixture<StructNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructNgIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

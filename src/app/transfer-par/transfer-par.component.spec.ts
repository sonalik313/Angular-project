import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferParComponent } from './transfer-par.component';

describe('TransferParComponent', () => {
  let component: TransferParComponent;
  let fixture: ComponentFixture<TransferParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferParComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

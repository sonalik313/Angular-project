import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferChComponent } from './transfer-ch.component';

describe('TransferChComponent', () => {
  let component: TransferChComponent;
  let fixture: ComponentFixture<TransferChComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferChComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

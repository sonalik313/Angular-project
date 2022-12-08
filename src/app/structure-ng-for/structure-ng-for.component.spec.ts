import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureNgForComponent } from './structure-ng-for.component';

describe('StructureNgForComponent', () => {
  let component: StructureNgForComponent;
  let fixture: ComponentFixture<StructureNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructureNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

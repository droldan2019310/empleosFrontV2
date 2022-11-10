import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableEmployeeComponent } from './available-employee.component';

describe('AvailableEmployeeComponent', () => {
  let component: AvailableEmployeeComponent;
  let fixture: ComponentFixture<AvailableEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

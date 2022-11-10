import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastEmployeeComponent } from './last-employee.component';

describe('LastEmployeeComponent', () => {
  let component: LastEmployeeComponent;
  let fixture: ComponentFixture<LastEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEmploymentsComponent } from './my-employments.component';

describe('MyEmploymentsComponent', () => {
  let component: MyEmploymentsComponent;
  let fixture: ComponentFixture<MyEmploymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyEmploymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEmploymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

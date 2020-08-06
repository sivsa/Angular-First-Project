import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentListDetailComponent } from './department-list-detail.component';

describe('DepartmentListDetailComponent', () => {
  let component: DepartmentListDetailComponent;
  let fixture: ComponentFixture<DepartmentListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

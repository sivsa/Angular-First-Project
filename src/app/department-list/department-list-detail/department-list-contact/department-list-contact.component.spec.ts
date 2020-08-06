import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentListContactComponent } from './department-list-contact.component';

describe('DepartmentListContactComponent', () => {
  let component: DepartmentListContactComponent;
  let fixture: ComponentFixture<DepartmentListContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentListContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentListContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

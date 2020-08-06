import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentListOverviewComponent } from './department-list-overview.component';

describe('DepartmentListOverviewComponent', () => {
  let component: DepartmentListOverviewComponent;
  let fixture: ComponentFixture<DepartmentListOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentListOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoParentChildComponent } from './demo-parent-child.component';

describe('DemoParentChildComponent', () => {
  let component: DemoParentChildComponent;
  let fixture: ComponentFixture<DemoParentChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoParentChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoParentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

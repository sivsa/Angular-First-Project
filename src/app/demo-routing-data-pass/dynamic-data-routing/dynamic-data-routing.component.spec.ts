import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDataRoutingComponent } from './dynamic-data-routing.component';

describe('DynamicDataRoutingComponent', () => {
  let component: DynamicDataRoutingComponent;
  let fixture: ComponentFixture<DynamicDataRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDataRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDataRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

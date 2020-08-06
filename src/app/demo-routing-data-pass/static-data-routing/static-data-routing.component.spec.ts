import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticDataRoutingComponent } from './static-data-routing.component';

describe('StaticDataRoutingComponent', () => {
  let component: StaticDataRoutingComponent;
  let fixture: ComponentFixture<StaticDataRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticDataRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticDataRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

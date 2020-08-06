import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRoutingDataPassComponent } from './demo-routing-data-pass.component';

describe('DemoRoutingDataPassComponent', () => {
  let component: DemoRoutingDataPassComponent;
  let fixture: ComponentFixture<DemoRoutingDataPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRoutingDataPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRoutingDataPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

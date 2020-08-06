import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoObservablesComponent } from './demo-observables.component';

describe('DemoObservablesComponent', () => {
  let component: DemoObservablesComponent;
  let fixture: ComponentFixture<DemoObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

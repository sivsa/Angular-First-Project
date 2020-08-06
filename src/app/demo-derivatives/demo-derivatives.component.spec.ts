import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDerivativesComponent } from './demo-derivatives.component';

describe('DemoDerivativesComponent', () => {
  let component: DemoDerivativesComponent;
  let fixture: ComponentFixture<DemoDerivativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDerivativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDerivativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

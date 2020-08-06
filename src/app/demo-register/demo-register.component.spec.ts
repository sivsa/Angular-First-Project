import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRegisterComponent } from './demo-register.component';

describe('DemoRegisterComponent', () => {
  let component: DemoRegisterComponent;
  let fixture: ComponentFixture<DemoRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

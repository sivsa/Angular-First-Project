import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBindingExampleComponent } from './demo-binding-example.component';

describe('DemoBindingExampleComponent', () => {
  let component: DemoBindingExampleComponent;
  let fixture: ComponentFixture<DemoBindingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBindingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

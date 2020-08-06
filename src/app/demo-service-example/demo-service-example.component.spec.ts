import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoServiceExampleComponent } from './demo-service-example.component';

describe('DemoServiceExampleComponent', () => {
  let component: DemoServiceExampleComponent;
  let fixture: ComponentFixture<DemoServiceExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoServiceExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoServiceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

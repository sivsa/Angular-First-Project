import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHtmlExampleComponent } from './demo-html-example.component';

describe('DemoHtmlExampleComponent', () => {
  let component: DemoHtmlExampleComponent;
  let fixture: ComponentFixture<DemoHtmlExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoHtmlExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHtmlExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFileUploaderComponent } from './demo-file-uploader.component';

describe('DemoFileUploaderComponent', () => {
  let component: DemoFileUploaderComponent;
  let fixture: ComponentFixture<DemoFileUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFileUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T2compComponent } from './t2comp.component';

describe('T2compComponent', () => {
  let component: T2compComponent;
  let fixture: ComponentFixture<T2compComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T2compComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T2compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

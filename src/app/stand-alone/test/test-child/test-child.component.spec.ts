import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChildComponent } from './test-child.component';

describe('TestChildComponent', () => {
  let component: TestChildComponent;
  let fixture: ComponentFixture<TestChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestChildComponent]
    });
    fixture = TestBed.createComponent(TestChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

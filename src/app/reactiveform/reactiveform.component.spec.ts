import { ComponentFixture, TestBed } from '@angular/core/testing';

import ReactiveformComponent from './reactiveform.component';

describe('ReactiveformComponent', () => {
  let component: ReactiveformComponent;
  let fixture: ComponentFixture<ReactiveformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveformComponent]
    });
    fixture = TestBed.createComponent(ReactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

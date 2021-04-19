import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeeramComponent } from './jeeram.component';

describe('JeeramComponent', () => {
  let component: JeeramComponent;
  let fixture: ComponentFixture<JeeramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeeramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeeramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

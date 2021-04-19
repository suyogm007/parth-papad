import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglemariComponent } from './singlemari.component';

describe('SinglemariComponent', () => {
  let component: SinglemariComponent;
  let fixture: ComponentFixture<SinglemariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglemariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglemariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

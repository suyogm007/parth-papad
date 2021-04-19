import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularanimationComponent } from './angularanimation.component';

describe('AngularanimationComponent', () => {
  let component: AngularanimationComponent;
  let fixture: ComponentFixture<AngularanimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularanimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunjabimComponent } from './punjabim.component';

describe('PunjabimComponent', () => {
  let component: PunjabimComponent;
  let fixture: ComponentFixture<PunjabimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunjabimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunjabimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

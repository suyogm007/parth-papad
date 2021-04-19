import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethiComponent } from './methi.component';

describe('MethiComponent', () => {
  let component: MethiComponent;
  let fixture: ComponentFixture<MethiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

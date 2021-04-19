import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatranComponent } from './katran.component';

describe('KatranComponent', () => {
  let component: KatranComponent;
  let fixture: ComponentFixture<KatranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

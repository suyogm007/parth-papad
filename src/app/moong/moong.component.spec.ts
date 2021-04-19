import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoongComponent } from './moong.component';

describe('MoongComponent', () => {
  let component: MoongComponent;
  let fixture: ComponentFixture<MoongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RajwadiComponent } from './rajwadi.component';

describe('RajwadiComponent', () => {
  let component: RajwadiComponent;
  let fixture: ComponentFixture<RajwadiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RajwadiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RajwadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

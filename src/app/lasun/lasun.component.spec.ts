import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LasunComponent } from './lasun.component';

describe('LasunComponent', () => {
  let component: LasunComponent;
  let fixture: ComponentFixture<LasunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LasunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LasunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

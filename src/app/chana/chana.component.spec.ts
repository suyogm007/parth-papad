import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanaComponent } from './chana.component';

describe('ChanaComponent', () => {
  let component: ChanaComponent;
  let fixture: ComponentFixture<ChanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

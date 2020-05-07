import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpldetailComponent } from './empldetail.component';

describe('EmpldetailComponent', () => {
  let component: EmpldetailComponent;
  let fixture: ComponentFixture<EmpldetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpldetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

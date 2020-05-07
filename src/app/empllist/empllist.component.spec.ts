import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpllistComponent } from './empllist.component';

describe('EmpllistComponent', () => {
  let component: EmpllistComponent;
  let fixture: ComponentFixture<EmpllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

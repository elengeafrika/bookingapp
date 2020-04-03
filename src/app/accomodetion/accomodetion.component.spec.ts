import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodetionComponent } from './accomodetion.component';

describe('AccomodetionComponent', () => {
  let component: AccomodetionComponent;
  let fixture: ComponentFixture<AccomodetionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodetionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

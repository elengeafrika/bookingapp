import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestyleComponent } from './livestyle.component';

describe('LivestyleComponent', () => {
  let component: LivestyleComponent;
  let fixture: ComponentFixture<LivestyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivestyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

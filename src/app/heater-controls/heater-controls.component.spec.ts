import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaterControlsComponent } from './heater-controls.component';

describe('HeaterControlsComponent', () => {
  let component: HeaterControlsComponent;
  let fixture: ComponentFixture<HeaterControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaterControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaterControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

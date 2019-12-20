import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolSpaStatusComponent } from './pool-spa-status.component';

describe('PoolSpaStatusComponent', () => {
  let component: PoolSpaStatusComponent;
  let fixture: ComponentFixture<PoolSpaStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolSpaStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolSpaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

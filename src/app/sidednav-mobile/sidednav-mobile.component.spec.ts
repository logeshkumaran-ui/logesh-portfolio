import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidednavMobileComponent } from './sidednav-mobile.component';

describe('SidednavMobileComponent', () => {
  let component: SidednavMobileComponent;
  let fixture: ComponentFixture<SidednavMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidednavMobileComponent]
    });
    fixture = TestBed.createComponent(SidednavMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

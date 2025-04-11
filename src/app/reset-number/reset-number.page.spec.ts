import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetNumberPage } from './reset-number.page';

describe('ResetNumberPage', () => {
  let component: ResetNumberPage;
  let fixture: ComponentFixture<ResetNumberPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

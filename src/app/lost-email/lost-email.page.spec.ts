import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LostEmailPage } from './lost-email.page';

describe('LostEmailPage', () => {
  let component: LostEmailPage;
  let fixture: ComponentFixture<LostEmailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LostEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

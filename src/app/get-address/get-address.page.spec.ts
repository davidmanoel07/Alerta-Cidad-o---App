import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetAddressPage } from './get-address.page';

describe('GetAddressPage', () => {
  let component: GetAddressPage;
  let fixture: ComponentFixture<GetAddressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

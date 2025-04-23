import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RiskAreaPage } from './risk-area.page';

describe('RiskAreaPage', () => {
  let component: RiskAreaPage;
  let fixture: ComponentFixture<RiskAreaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

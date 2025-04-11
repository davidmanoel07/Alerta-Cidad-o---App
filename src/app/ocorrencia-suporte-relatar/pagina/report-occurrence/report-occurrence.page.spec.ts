import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportOccurrencePage } from './report-occurrence.page';

describe('ReportOccurrencePage', () => {
  let component: ReportOccurrencePage;
  let fixture: ComponentFixture<ReportOccurrencePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportOccurrencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

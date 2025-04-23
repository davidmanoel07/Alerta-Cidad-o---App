import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusOccurrencesPage } from './status-occurrences.page';

describe('StatusOccurrencesPage', () => {
  let component: StatusOccurrencesPage;
  let fixture: ComponentFixture<StatusOccurrencesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusOccurrencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

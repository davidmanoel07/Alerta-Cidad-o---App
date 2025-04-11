import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurrencesPage } from './occurrences.page';

describe('OccurrencesPage', () => {
  let component: OccurrencesPage;
  let fixture: ComponentFixture<OccurrencesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OccurrencesPage]
    }).compileComponents();

    fixture = TestBed.createComponent(OccurrencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
  
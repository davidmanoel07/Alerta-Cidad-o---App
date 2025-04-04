import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnonymousPage } from './anonymous.page';

describe('AnonymousPage', () => {
  let component: AnonymousPage;
  let fixture: ComponentFixture<AnonymousPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

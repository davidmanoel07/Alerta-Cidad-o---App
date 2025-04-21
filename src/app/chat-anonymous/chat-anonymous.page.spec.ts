import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatAnonymousPage } from './chat-anonymous.page';

describe('ChatAnonymousPage', () => {
  let component: ChatAnonymousPage;
  let fixture: ComponentFixture<ChatAnonymousPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAnonymousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

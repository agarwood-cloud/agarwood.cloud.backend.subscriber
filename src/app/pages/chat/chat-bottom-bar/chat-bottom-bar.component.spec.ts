import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBottomBarComponent } from './chat-bottom-bar.component';

describe('ChatBottomBarComponent', () => {
  let component: ChatBottomBarComponent;
  let fixture: ComponentFixture<ChatBottomBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBottomBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

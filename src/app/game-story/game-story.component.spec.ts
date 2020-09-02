import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStoryComponent } from './game-story.component';

describe('GameStoryComponent', () => {
  let component: GameStoryComponent;
  let fixture: ComponentFixture<GameStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

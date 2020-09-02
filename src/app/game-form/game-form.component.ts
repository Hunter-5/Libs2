import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { BlankInput } from '../blank-input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css', '../app.component.css']
})


export class GameFormComponent implements OnInit {
  blankInputs: BlankInput[];
  private numberOfStories = 6;
  story: string;

  constructor(
    private storyService: StoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
  	this.getStories();
  }

  getStories(): void {
  	this.storyService.getStories().subscribe(stories => this.selectRandomStory(stories));
  }

  selectRandomStory(stories: string[]): void {
    this.story = stories[Math.floor(Math.random() * this.numberOfStories)];
    this.getStoryBlanks(this.story);
  }

  getStoryBlanks(story: string): void {
    let fillInTheBlanks = story.match(/<(.*?)>/g);
    this.blankInputs = new Array(fillInTheBlanks.length);
    
    fillInTheBlanks.forEach((inputType, index) => {
      let partOfSpeech = inputType.substring(1, inputType.length-1);
      let story = { blank: partOfSpeech, value:"" };
      this.blankInputs[index] = story;
    });
  }

  sendFormValues(): void {
    this.router.navigate(['/story'], {
      state: {
        blankInputs: JSON.stringify(this.blankInputs),
        story: JSON.stringify(this.story)
      }
    });
  }
}

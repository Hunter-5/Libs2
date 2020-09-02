import { Component, OnInit } from '@angular/core';
import { BlankInput } from '../blank-input';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-story',
  templateUrl: './game-story.component.html',
  styleUrls: ['./game-story.component.css', '../app.component.css']
})
export class GameStoryComponent implements OnInit {
	state: any;
	template: string;
	story: string = "";
	blankInputs: BlankInput[];
	boi: string;

  constructor(private router: Router) { 
  	if (this.router.getCurrentNavigation().extras.state) {
  		this.state = this.router.getCurrentNavigation().extras.state;
  		if (this.state) {
  			this.blankInputs = JSON.parse(this.state.blankInputs);
  			this.template = JSON.parse(this.state.story);
  		}
  		this.fillBlanks();
  	}
  }

  ngOnInit(): void { }

	fillBlanks(): void {
		let template = this.template, 
			pattern = /<(.*?)>/g,
			startingIndex = 0;

		for (let i = 0, match = pattern.exec(template); match !== null; i++) {
			let templateText = template.slice(startingIndex, match.index);
			this.story = this.story.concat(templateText, this.blankInputs[i].value);

			startingIndex = pattern.lastIndex;
			match = pattern.exec(template);
		}

		if (pattern.lastIndex < template.length) {
			this.story = this.story.concat(template.slice(startingIndex));
		}
	}
}

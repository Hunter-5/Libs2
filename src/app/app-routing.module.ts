import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameInfoComponent } from './game-info/game-info.component';
import { GameFormComponent } from './game-form/game-form.component';
import { GameStoryComponent } from './game-story/game-story.component';

const routes: Routes = [
	{ path: '', redirectTo: '/info', pathMatch: 'full' },
	{ path: 'info', component: GameInfoComponent },
	{ path: 'form', component: GameFormComponent },
  { path: 'story', component: GameStoryComponent }
];

@NgModule({
  declarations: [],
  imports: [
  	RouterModule.forRoot(routes)
  ],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }

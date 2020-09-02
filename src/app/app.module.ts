import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GameInfoComponent } from './game-info/game-info.component';
import { GameFormComponent } from './game-form/game-form.component';
import { FormsModule } from '@angular/forms';
import { GameStoryComponent } from './game-story/game-story.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent,
    GameInfoComponent,
    GameFormComponent,
    GameStoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

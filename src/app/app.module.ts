import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DiscoverComponent } from './discover/discover.component';
import { TeamComponent } from './team/team.component';
import { BookComponent } from './book/book.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiscoverComponent,
    TeamComponent,
    BookComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }

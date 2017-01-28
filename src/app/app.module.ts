import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { SearchResultModule } from './search-result/search-result.module';
import { BookDetailModule } from './book-detail/book-detail.module';
import { FavoritesBooksModule } from './favorites-books/favorites-books.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BookDetailModule,
    FavoritesBooksModule,
    HomeModule,
    SearchResultModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

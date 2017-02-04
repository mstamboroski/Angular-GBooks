import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'search-result',  loadChildren : 'app/search-result/search-result.module#SearchResultModule' },
    { path: 'book-detail',    loadChildren : 'app/book-detail/book-detail.module#BookDetailModule' },
    { path: 'favorites',      loadChildren : 'app/favorites-books/favorites-books.module#FavoritesBooksModule' },
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}


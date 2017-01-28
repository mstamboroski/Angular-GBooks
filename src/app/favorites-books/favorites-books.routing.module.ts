import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoritesBooksComponent } from './favorites-books.component';

const favoritesBooksRoutes: Routes = [
    { path: 'favorites', component: FavoritesBooksComponent }
];

@NgModule({
    imports: [RouterModule.forChild(favoritesBooksRoutes)],
    exports: [RouterModule]
})
export class FavoritesBooksRoutingModule {
}

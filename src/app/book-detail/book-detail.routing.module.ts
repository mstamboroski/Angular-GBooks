import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookDetailComponent } from './book-detail.component';

const bookDeatilRoutes: Routes = [
    { path: '', component: BookDetailComponent },
    { path: ':book', component: BookDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(bookDeatilRoutes)],
    exports: [RouterModule]
})
export class BookDetailRoutingModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookDetailComponent }   from './book-detail.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [],
    declarations: [
        BookDetailComponent
    ],
    providers: [],
})
export class BookDetailModule { }


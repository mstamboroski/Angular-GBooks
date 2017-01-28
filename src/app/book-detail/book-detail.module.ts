import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookDetailComponent } from './book-detail.component';
import { BookDetailRoutingModule } from './book-detail.routing.module';

@NgModule({
    imports: [
        CommonModule,
        BookDetailRoutingModule
    ],
    exports: [],
    declarations: [
        BookDetailComponent
    ],
    providers: [],
})
export class BookDetailModule { }


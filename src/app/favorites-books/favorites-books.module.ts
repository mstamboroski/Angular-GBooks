import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesBooksComponent } from './favorites-books.component';
import { FavoritesBooksRoutingModule } from './favorites-books.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FavoritesBooksRoutingModule
    ],
    exports: [],
    declarations: [
        FavoritesBooksComponent
    ],
    providers: [],
})
export class FavoritesBooksModule { }


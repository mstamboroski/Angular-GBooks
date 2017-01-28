import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchResultComponent }   from './search-result.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [],
    declarations: [
        SearchResultComponent
    ],
    providers: [],
})
export class SearchResultModule { }


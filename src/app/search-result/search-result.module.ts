import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultComponent } from './search-result.component';
import { SearchResultRoutingModule } from './search-result.routing.module';
import { SearchResultService } from './search-result.service';
import { PaginationComponent } from '../pagination/pagination.component';

@NgModule({
    imports: [
        CommonModule,
        SearchResultRoutingModule,

    ],
    exports: [],
    declarations: [
        SearchResultComponent,
        PaginationComponent
    ],
    providers: [SearchResultService],
})
export class SearchResultModule { }


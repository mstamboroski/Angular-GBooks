import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchResultComponent } from './search-result.component';

const searchResultRoutes: Routes = [
    { path: '', component: SearchResultComponent },
    { path: ':searchParams', component: SearchResultComponent }
];

@NgModule({
    imports: [RouterModule.forChild(searchResultRoutes)],
    exports: [RouterModule]
})
export class SearchResultRoutingModule {
}

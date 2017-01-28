import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent }   from './home.component';
import { HomeService } from './home.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [],
    declarations: [
        HomeComponent
    ],
    providers: [HomeService],
})
export class HomeModule { }


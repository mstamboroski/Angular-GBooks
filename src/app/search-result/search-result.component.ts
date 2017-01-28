import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx'

import { SearchResultService } from './search-result.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  favoriteStarClass : string = 'glyphicon glyphicon-star-empty';
  searchResult: any[] = [{}];
  searchQuery: string = '';
  subscriber: Subscription;
  

  constructor(private searchService: SearchResultService,
              private activatedRoute: ActivatedRoute) {

   }

  ngOnInit() {
     this.subscriber = this.activatedRoute.queryParams.subscribe(
      (queryParams:any) => this.searchQuery = queryParams['searchParams']
    );
    this.searchResult = this.searchService.getResult(this.searchQuery);
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
  
  bookFavorited(bookName: string) {
    this.favoriteStarClass = 'glyphicon glyphicon-star';
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { SearchResultService } from './search-result.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnDestroy {

  favoriteStarClass = 'glyphicon glyphicon-star-empty';
  gotServerResponse = false;
  searchResult: any[] = [{}];
  searchQuery: string;
  routSubscriber: Subscription;
  querySubscriber: Subscription;
  pagesResultNumber = 1;
  resultsPerPage = 10;

  constructor(private searchService: SearchResultService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
   }

  ngOnInit() {
     this.routSubscriber = this.activatedRoute.queryParams.subscribe(
      (queryParams: any) => this.searchQuery = queryParams['searchParams']
    );

    if (this.searchQuery == null || this.searchQuery.length <= 0) {
      this.router.navigate(['']);
    }

    this.querySubscriber = this.searchService.getResult(this.searchQuery).subscribe( response => {
        this.searchResult = response.items; 
        this.gotServerResponse = true;
        this.pagesResultNumber = +response.totalItems / this.resultsPerPage;
      });
  }

  ngOnDestroy() {
    this.routSubscriber.unsubscribe();
    this.querySubscriber.unsubscribe();
  }

  bookFavorited() {
    this.favoriteStarClass = 'glyphicon glyphicon-star';
  }

  bookDetails(bookObject: any) {
      this.searchService.bookSelected(bookObject);
      const navigationExtras: NavigationExtras = {
        queryParams: { 'book' : bookObject.id }
      };
      this.router.navigate(['/book-detail'], navigationExtras);
  }

  loadNewPageResults(pageNumber: string) {
    this.querySubscriber.unsubscribe();
    let paginatedSearchQuery = this.searchQuery + '&maxResults=10&startIndex=' + (+pageNumber - 1).toString();
    this.querySubscriber = this.searchService.getResult(paginatedSearchQuery).subscribe( response => {this.searchResult = response.items; this.gotServerResponse = true;});
  }
}

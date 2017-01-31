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

  // This component has the responsability to show the results from the search

  // Icon for the favorite book toggle
  favoriteStarClass = 'glyphicon glyphicon-star-empty';
  // Boolean the control the page loading after get the response from server
  gotServerResponse = false;
  searchResult: any[] = [{}];
  searchQuery: string;
  routSubscriber: Subscription;
  querySubscriber: Subscription;
  // Variables to calculate how many pages are going to be paginated and how many result will be displayed per page
  pagesResultNumber = 1;
  resultsPerPage = 10;
  totalItensResult = 1;
  currentShowingResultsNumberMin = 1;
  currentShowingResultsNumberMax = this.resultsPerPage;

  constructor(private searchService: SearchResultService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
   }

  ngOnInit() {
    // Get the parameters for the book query
     this.routSubscriber = this.activatedRoute.queryParams.subscribe(
      (queryParams: any) => this.searchQuery = queryParams['searchParams']
    );

    // If no query, go back to the home
    if (this.searchQuery == null || this.searchQuery.length <= 0) {
      this.router.navigate(['']);
    }

    // Get the results from quering the server, and then calculate the total number of pages to be paginated
    this.querySubscriber = this.searchService.getResult(this.searchQuery).subscribe( response => {
        this.searchResult = response.items; 
        this.gotServerResponse = true;
        this.pagesResultNumber = +response.totalItems / this.resultsPerPage;
        this.totalItensResult = +response.totalItems;
      });
  }

  ngOnDestroy() {
    this.routSubscriber.unsubscribe();
    this.querySubscriber.unsubscribe();
  }

  bookFavorited() {
    this.favoriteStarClass = this.favoriteStarClass === 'glyphicon glyphicon-star' ? 'glyphicon glyphicon-star-empty' : 'glyphicon glyphicon-star';
  }

  // On click, navigated to the book detail page
  bookDetails(bookObject: any) {
      this.searchService.bookSelected(bookObject);
      const navigationExtras: NavigationExtras = {
        queryParams: { 'book' : bookObject.id }
      };
      this.router.navigate(['/book-detail'], navigationExtras);
  }

  // On click on pagination controller, reload the results for the next bacth of informations
  loadNewPageResults(pageNumber: string) {
    this.querySubscriber.unsubscribe();
    let paginatedSearchQuery = this.searchQuery + '&maxResults=10&startIndex=' + (+pageNumber - 1).toString();
    this.querySubscriber = this.searchService.getResult(paginatedSearchQuery).subscribe( response => {this.searchResult = response.items; this.gotServerResponse = true;});
    this.currentShowingResultsNumberMax = +pageNumber * +this.resultsPerPage;
    this.currentShowingResultsNumberMin = +this.currentShowingResultsNumberMax - +this.resultsPerPage + 1;
  }
}

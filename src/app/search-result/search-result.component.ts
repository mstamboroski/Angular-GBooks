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
  searchResult: any[] = [{}];
  searchQuery: string;
  subscriber: Subscription;

  constructor(private searchService: SearchResultService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
   }

  ngOnInit() {
     this.subscriber = this.activatedRoute.queryParams.subscribe(
      (queryParams: any) => this.searchQuery = queryParams['searchParams']
    );

    if (this.searchQuery == null || this.searchQuery.length <= 0) {
      this.router.navigate(['']);
    }

    this.searchResult = this.searchService.getResult(this.searchQuery);
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

  bookFavorited(bookName: string) {
    this.favoriteStarClass = 'glyphicon glyphicon-star';
  }

  bookDetails(id: string) {
    if (id.length > 0) {
      this.searchService.bookSelected(id);
      const navigationExtras: NavigationExtras = {
        queryParams: { 'book' : id }
      };
      this.router.navigate(['/book-detail'], navigationExtras);
    }
  }
}

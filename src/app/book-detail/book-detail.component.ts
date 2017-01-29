import { Component, OnInit } from '@angular/core';

import { SearchResultService } from './../search-result/search-result.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  bookDetails : any;

  constructor() { }

  ngOnInit() {
    // Here is where I had to use the static variable to get the book object
    this.bookDetails = SearchResultService.bookSelected;
  }

}

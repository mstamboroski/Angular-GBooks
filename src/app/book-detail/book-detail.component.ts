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
    /*this.bookDetails = this.bookDetailService.getBookDetails();
    console.log(this.bookDetails);*/
    /*SearchResultService.choosedBookObjectEmitter.subscribe(
      book => {this.bookDetails = book;
        console.log(book);
    }
    );*/
    this.bookDetails = SearchResultService.bookSelected;
  }

}

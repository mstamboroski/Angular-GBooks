import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchResultService {

  // Using a static atribute because I was having trouble communicating between services. Ok because it is a prototype and I didn't had much time, but it's not a good solution.
  static bookSelected: any;

  baseQueryUrl = "https://www.googleapis.com/books/v1/volumes?q=";

  constructor(private http: Http) { 
  }

  getResult(searchParams: string) {
    return this.http.get(this.baseQueryUrl + searchParams).map((res: Response) => res.json()).catch(this.handleError);
  }

  getBookFromResults() {
  }

  bookSelected(book: any) {
        SearchResultService.bookSelected = book;
  }

  private handleError(error: any) {
    let foundErrors = error.message || 'Server error';
    console.error('An error has been raised:', error);
    return Observable.throw(foundErrors);
  }
}

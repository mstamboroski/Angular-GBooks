/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookDetailService } from './book-detail.service';

describe('BookDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookDetailService]
    });
  });

  it('should ...', inject([BookDetailService], (service: BookDetailService) => {
    expect(service).toBeTruthy();
  }));
});

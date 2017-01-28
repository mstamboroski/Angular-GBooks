/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchResultService } from './search-result.service';

describe('SearchResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchResultService]
    });
  });

  it('should ...', inject([SearchResultService], (service: SearchResultService) => {
    expect(service).toBeTruthy();
  }));
});

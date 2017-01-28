import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  pagesNumber = [1];
  currentPage = 1;
  @Output() currentPageChanged = new EventEmitter();
  @Input() totalPageNumber = this.pagesNumber.length;
  @Input() displayNumber = 1;

  constructor() { }

  ngOnInit() {
    this.setDisplayPagesNumber(1);
  }

  setDisplayPagesNumber(startIndex: number) {
    this.pagesNumber = [];
    for(let i = startIndex; i <= (+this.displayNumber + startIndex - 1) && (i <= +this.totalPageNumber); i++) {
      this.pagesNumber.push(i);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPageNumber) {
      this.currentPage++;
      this.currentPageChanged.emit({newPage: this.currentPage});
      if (this.currentPage > this.pagesNumber[this.pagesNumber.length - 1])
        this.setDisplayPagesNumber(this.currentPage);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.currentPageChanged.emit({newPage: this.currentPage});
      if (this.currentPage < this.pagesNumber[0])
        this.setDisplayPagesNumber(this.currentPage);
    }
  }

  changePage(nextPage: string) {
    if (this.currentPage !== +nextPage) {
      this.currentPage = +nextPage;
      this.currentPageChanged.emit({newPage: this.currentPage});
    }
  }
}

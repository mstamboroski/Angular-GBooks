import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService,
              private router: Router) { }

  ngOnInit() {
  }
  //After getting the input from the html, it routs to the search-result component, passing the paramters as a query
  searchBook(searchParams: string) {
    if (searchParams.length > 0) {
      const navigationExtras: NavigationExtras = {
        queryParams: { 'searchParams' : searchParams }
      };
      this.router.navigate(['/search-result'], navigationExtras);
    }
  }


}

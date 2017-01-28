import { Injectable } from '@angular/core';

@Injectable()
export class SearchResultService {

  result: any[] = [
    { title: "Harry Potter",
      description: "He was a little magic boy and etc."
    },
    { title: "Lord of the rings",
      description: "How a gardner saved the world from a evil cosplayer"
    }
  ];

  constructor() { }

  getResult(searchParams:string){
    return this.result;
  }

}

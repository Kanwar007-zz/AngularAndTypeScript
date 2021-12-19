import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostserService {
  
  constructor(private Http: HttpClient) {

   }
   urlValue = "https://jsonplaceholder.typicode.com/posts";
    getPostValue () : any {
     this.Http.get(this.urlValue,{responseType: 'json'}).subscribe(
        response => {
          console.log(response)
          return response
        }
      );
   }

}

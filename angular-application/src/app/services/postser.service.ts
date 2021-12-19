import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from '../post/post/posts';

@Injectable({
  providedIn: 'root'
})
export class PostserService {
  
  constructor(private Http: HttpClient) {

   }
   urlValue = "https://jsonplaceholder.typicode.com/posts";
    getPostValue () : Observable<any> {
     return this.Http.get(this.urlValue)
   }

}

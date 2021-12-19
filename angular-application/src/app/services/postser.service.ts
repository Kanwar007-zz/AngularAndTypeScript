import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from '../post/post/posts';

@Injectable({
  providedIn: 'root'
})
export class PostserService {
  
  constructor(private Http: HttpClient) {

   }
   
   headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
   urlValue = "https://jsonplaceholder.typicode.com/posts";
    getPostValue () : Observable<post[]> {
     return this.Http.get<post[]>(this.urlValue, {'headers': this.headers})
   }

}

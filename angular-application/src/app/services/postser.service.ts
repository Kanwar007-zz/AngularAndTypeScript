import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from '../post/post/posts';

@Injectable({
  providedIn: 'root'
})
export class PostserService {
  private  urlValue = "https://jsonplaceholder.typicode.com/posts"
  constructor(private Http: HttpClient) {

   }
   
   headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
  ;
    getPostValue () : Observable<post[]> {
     return this.Http.get<post[]>(this.urlValue, {'headers': this.headers})
   }
   createPostValue(postValue : HTMLInputElement) : Observable<any>{
    let body=JSON.stringify(postValue.value);
    console.log(body)
     return this.Http.post(this.urlValue, body);
   } 

}

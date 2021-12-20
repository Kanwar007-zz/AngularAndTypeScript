import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../persondemo/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  baseURL: string = "http://localhost:3000/";
  constructor(private http : HttpClient) { }

   getPeople(): Observable<Person[]>{
     return this.http.get<Person[]>(this.baseURL+'people');
   }
   create(person: Person):Observable<any>{
     const header = { 'content-type': 'application/json'} ;
     return this.http.post(this.baseURL +'people',JSON.stringify(person),{'headers':header});
   }
}

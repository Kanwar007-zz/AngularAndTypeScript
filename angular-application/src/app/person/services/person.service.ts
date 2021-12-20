import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../persondemo/person';
import { logging } from 'protractor';
import { error } from '@angular/compiler/src/util';

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
   update(person:Person):Observable<Person>{
     console.log(JSON.stringify(Person.name))
     const header = { 'content-type': 'application/json'} ;
      return this.http.put<Person>(this.baseURL+'people/'+person.id,JSON.stringify(person),{'headers':header});
   }
   deletePerson(person:Person){
      // this.http.delete(this.baseURL+'people/'+person.id).subscribe(
        this.http.delete(this.baseURL+'people/'+"222").subscribe(
      data => {
        console.log(data);
      },(error:Response)=>{
        if(error.status == 404){
alert("another error 404  ")
        }else{
alert("else error")
        }

      }
    );
  }
}

import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from './person';

@Component({
  selector: 'app-persondemo',
  templateUrl: './persondemo.component.html',
  styleUrls: ['./persondemo.component.css']
})
export class PersondemoComponent implements OnInit {
  title = 'httpGet and post Example';
  people:Person[];
  person = new Person();
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.refreshTab()
  }
  getPerson(){
   this.personService.getPeople().subscribe(
     data => {
       console.log(data);
      this.people = data;
     } ,error=>{
      alert("error")
    }
   );
  }
  refreshTab(){
    this.getPerson();
  }
  addPerson(){
this.personService.create(this.person).subscribe(
  data =>{
    console.log(data);
    this.refreshTab();
  } ,error=>{
    alert("error")
  });
     }
     updatePerson(person:Person){
       console.log("update"+person.name);
       this.personService.update(person);
       
     }
     removePerson(person:Person){
      console.log("update"+person.name);
      this.personService.deletePerson(person);
      this.refreshTab();

     }
  }




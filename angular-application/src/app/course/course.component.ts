import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/services/course.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  {
  courseList
  constructor(service: CourseService) {
    this.courseList =service.getListOfCourese();
   }
  twoWayBinding="vijay@vijay";
  titleCourse = "List of course";
  isActive= false;
  
  getTitle(){
   return this.titleCourse;
  }
  onSave($event){
    $event.stopPropagation();
    console.log('click on on save button',$event)
  }
  onDivClick(){
    console.log('div was click ');
  }
  onEnterValue(email){
    console.log('Enter value is ',email);
  }
  ontwoWayBinding(){
    console.log(this.twoWayBinding);
  }
  
}

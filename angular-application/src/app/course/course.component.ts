import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/services/course.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseList
  constructor(service: CourseService) {
    this.courseList =service.getListOfCourese();
   }

  ngOnInit(): void {
  }

  titleCourse = "List of course";
  
  getTitle(){
   return this.titleCourse;
  }
  
}

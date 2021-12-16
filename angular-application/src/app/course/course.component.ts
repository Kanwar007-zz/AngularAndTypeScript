import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  titleCourse = "List of course";
  courseList = ['Java', 'Angular','Groovy', 'php'];
  getTitle(){
   return this.titleCourse;
  }
  getListOfCourese(){
    return this.courseList;
  }
}

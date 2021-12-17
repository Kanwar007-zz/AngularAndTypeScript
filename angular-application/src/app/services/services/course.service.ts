

export class CourseService {

  constructor() { }
  course1={
     name:"java",
     student:200,
     price:20.20,
     copyright:"java kanwar"
  }
  course2={
    name:"Angular",
    student:20,
    price:20.00,
    copyright:"Angular kanwar"
 }
 course3={
  name:"Groovy",
  student:33,
  price:14.00,
  copyright:"Groovy kanwar"
}
  getListOfCourese(){
    return [this.course1,this.course2,this.course3];
  }
}

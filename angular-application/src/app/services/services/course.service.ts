

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
  getListOfCourese(){
    return ['Java', 'Angular','Groovy', 'php'];
  }
}

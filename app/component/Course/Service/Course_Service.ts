import {Course} from "../Model/Course";

export class CourseService{

  courses:Array<Course> = [];
  constructor(){
    this.courses.push(
      new Course({name:"Course A",description:"Course A Description"}),
      new Course({name:"Course B",description:"Course B Description"}),
      new Course({name:"Course C",description:"Course C Description"}),
      new Course({name:"Course D",description:"Course D Description"})
    )

  }

  getCourses = () => this.courses;


}
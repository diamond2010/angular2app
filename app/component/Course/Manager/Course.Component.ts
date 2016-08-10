import {Component} from "angular2/core"
import {Course} from "../Model/Course";
import {CourseService} from "../Service/Course_Service";
import {AutoGrowDirective} from "../../autoGrow.directive";

@Component({
  selector:'courseComponent',
  template:`
        <div>
        
    <h2>TITLE</h2>
    <input type="text" autoGrow/>
    <ul *ngFor="#course of courses">
        <li>{{course.name}}</li>
    </ul>
</div>
    `,
  providers:[CourseService],
  directives:[AutoGrowDirective]
})

export class CourseComponent{

  courses:Array<Course> = [];
  courseService:CourseService;

  constructor(courseService:CourseService){
    this.courseService = courseService;
    this.courses = this.getCourses();
  }

  getCourses = ():Array<Course> => this.courseService.getCourses();

}
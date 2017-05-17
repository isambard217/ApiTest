import {Component} from '@angular/core'; // If you look at the source code
import {CourseService} from './course.service';

@Component({
    selector: 'coursesa',
    templateUrl: 'app/Views/courses.component.html',
    providers: [CourseService],
    
})
export class CoursesComponent {

    title: string = "The titile of courses ptrtagetrr";
    courses;



    constructor(courseService: CourseService) {

        this.courses = courseService.getCourses();
    }


}
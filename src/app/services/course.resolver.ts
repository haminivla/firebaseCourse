import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";
import { Course } from "../model/course";

@Injectable({
    providedIn: "root"
})

export class CourseResolver implements Resolve<Course>{
    
    constructor(private coursesService: CoursesService) {}

    resolve(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot):
        Observable<Course> {

        const courseUrl = route.paramMap.get("courseUrl");

        return this.coursesService.findCourseByUrl(courseUrl);
    }
}
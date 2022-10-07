import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    // we pass the properties to help how this component works
    selector: 'courses',
    template: `
    <h2>{{"Title: " +  getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses">
        {{ course }}
        </li>
    </ul>
    <input (keyup.enter)="onKeyUp($event)"/> 
    <p> Here we use the two way bindings</p>
    <input [(ngModel)] ="email" (keyup.enter)="onKeyUp2()" />

    <button (click)="onSave($event)" class = "btn btn-primary" [class.active]="isActive">save</button>
    `
})
export class CoursesComponent {
    title = "list of courses";
    isActive = true;
    courses;
    email: string = "";

    getTitle() {
        return this.title;
    }

    // built-in dependency injection!! (but we need to register this dependency)
    // we register that in the provider of the module
    // angular will create only one object for all of them
    // singleton
    constructor(service : CoursesService) {
        // we have tightly coupled the component and service
        this.courses = service.getCourses();
    }

    onSave($event: Event){
        // stopping the event bubbling
        $event.stopPropagation();
        console.log("Button was clicked", $event)
    }

    onKeyUp($event:any){
        console.log($event.target.value);
    }


    onKeyUp2() {
        console.log(this.email);
    }

    // logic for callin the http service in this comonent
    // but it is coupled

}
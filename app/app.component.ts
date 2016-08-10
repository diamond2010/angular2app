import {Component} from 'angular2/core';
import {CourseComponent} from "./component/Course/Manager/Course.Component";
import {AuthorComponent} from "./component/Author/Manager/Author.Component";


@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular 2</h1><courseComponent></courseComponent><authorComponent></authorComponent>',
    directives:[CourseComponent, AuthorComponent]

})

export class AppComponent { }
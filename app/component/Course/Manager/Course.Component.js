System.register(["angular2/core", "../Service/Course_Service", "../../autoGrow.directive"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Course_Service_1, autoGrow_directive_1;
    var CourseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Course_Service_1_1) {
                Course_Service_1 = Course_Service_1_1;
            },
            function (autoGrow_directive_1_1) {
                autoGrow_directive_1 = autoGrow_directive_1_1;
            }],
        execute: function() {
            CourseComponent = (function () {
                function CourseComponent(courseService) {
                    var _this = this;
                    this.courses = [];
                    this.getCourses = function () { return _this.courseService.getCourses(); };
                    this.courseService = courseService;
                    this.courses = this.getCourses();
                }
                CourseComponent = __decorate([
                    core_1.Component({
                        selector: 'courseComponent',
                        template: "\n        <div>\n        \n    <h2>TITLE</h2>\n    <input type=\"text\" autoGrow/>\n    <ul *ngFor=\"#course of courses\">\n        <li>{{course.name}}</li>\n    </ul>\n</div>\n    ",
                        providers: [Course_Service_1.CourseService],
                        directives: [autoGrow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [Course_Service_1.CourseService])
                ], CourseComponent);
                return CourseComponent;
            }());
            exports_1("CourseComponent", CourseComponent);
        }
    }
});
//# sourceMappingURL=Course.Component.js.map
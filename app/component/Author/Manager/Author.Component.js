System.register(["angular2/core", "../Service/Author_Service"], function(exports_1, context_1) {
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
    var core_1, Author_Service_1;
    var AuthorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Author_Service_1_1) {
                Author_Service_1 = Author_Service_1_1;
            }],
        execute: function() {
            AuthorComponent = (function () {
                function AuthorComponent(service) {
                    var _this = this;
                    this.service = service;
                    this.authors = [];
                    this.getAuthors = function () { return _this.service.getAuthors(); };
                    this.authors = this.getAuthors();
                }
                AuthorComponent = __decorate([
                    core_1.Component({
                        selector: 'authorComponent',
                        template: "\n        <div>\n    <h2>AUTHORS</h2>\n    \n    <ul *ngFor=\"#author of authors\">\n        <li>{{author.name}}</li>\n    </ul>\n</div>\n    ",
                        providers: [Author_Service_1.AuthorService]
                    }), 
                    __metadata('design:paramtypes', [Author_Service_1.AuthorService])
                ], AuthorComponent);
                return AuthorComponent;
            }());
            exports_1("AuthorComponent", AuthorComponent);
        }
    }
});
//# sourceMappingURL=Author.Component.js.map
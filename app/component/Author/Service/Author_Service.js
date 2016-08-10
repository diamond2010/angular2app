System.register(["../Model/Author"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Author_1;
    var AuthorService;
    return {
        setters:[
            function (Author_1_1) {
                Author_1 = Author_1_1;
            }],
        execute: function() {
            AuthorService = (function () {
                function AuthorService() {
                    var _this = this;
                    this.authors = [];
                    this.getAuthors = function () { return _this.authors; };
                    this.authors.push(new Author_1.Author({ name: "Dan Brown" }), new Author_1.Author({ name: "Andreas Eschbach" }), new Author_1.Author({ name: "Stephen King" }));
                }
                return AuthorService;
            }());
            exports_1("AuthorService", AuthorService);
        }
    }
});
//# sourceMappingURL=Author_Service.js.map
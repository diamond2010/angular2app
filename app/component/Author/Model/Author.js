System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Author;
    return {
        setters:[],
        execute: function() {
            Author = (function () {
                function Author(params) {
                    if (params) {
                        this.name = params.name;
                    }
                }
                return Author;
            }());
            exports_1("Author", Author);
        }
    }
});
//# sourceMappingURL=Author.js.map
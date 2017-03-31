System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var CustomBrowserXhr;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            CustomBrowserXhr = (function (_super) {
                __extends(CustomBrowserXhr, _super);
                function CustomBrowserXhr() {
                }
                CustomBrowserXhr.prototype.build = function () {
                    var xhr = _super.prototype.build.call(this);
                    xhr.responseType = "blob";
                    return (xhr);
                };
                CustomBrowserXhr = __decorate([
                    core_1.Injectable(),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CustomBrowserXhr);
                return CustomBrowserXhr;
            }(http_1.BrowserXhr));
            exports_1("CustomBrowserXhr", CustomBrowserXhr);
        }
    }
});
//# sourceMappingURL=custom.xhr.js.map
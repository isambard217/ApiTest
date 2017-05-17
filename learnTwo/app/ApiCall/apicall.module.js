System.register(["@angular/platform-browser", "@angular/core", "./ApiInvoke.component", "@angular/http", "./ApiService.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var platform_browser_1, core_1, ApiInvoke_component_1, http_1, ApiService_service_1, apicallModule;
    return {
        setters: [
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ApiInvoke_component_1_1) {
                ApiInvoke_component_1 = ApiInvoke_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ApiService_service_1_1) {
                ApiService_service_1 = ApiService_service_1_1;
            }
        ],
        execute: function () {
            apicallModule = (function () {
                function apicallModule() {
                }
                return apicallModule;
            }());
            apicallModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule],
                    declarations: [ApiInvoke_component_1.ApiInvoke],
                    bootstrap: [ApiInvoke_component_1.ApiInvoke],
                    providers: [ApiService_service_1.ApiService],
                    exports: [ApiInvoke_component_1.ApiInvoke] // Allows this components to be used in other components. Not other modules as we did not register it with other modules
                })
            ], apicallModule);
            exports_1("apicallModule", apicallModule);
        }
    };
});
//# sourceMappingURL=apicall.module.js.map
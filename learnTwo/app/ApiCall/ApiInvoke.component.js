System.register(["@angular/core", "./ApiService.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, ApiService_service_1, ApiInvoke;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ApiService_service_1_1) {
                ApiService_service_1 = ApiService_service_1_1;
            }
        ],
        execute: function () {
            ApiInvoke = (function () {
                function ApiInvoke(apiservice) {
                    this.apiservice = apiservice;
                }
                ApiInvoke.prototype.GetCarsFromApi = function () {
                    this.apiservice.getVehicles()
                        .subscribe(function (res) {
                        console.log(res);
                    });
                };
                return ApiInvoke;
            }());
            ApiInvoke = __decorate([
                core_1.Component({
                    selector: "ApiTest",
                    template: " \n                    <label> Submit </label>\n                  <input type=\"submit\" (click)=\"GetCarsFromApi()\"/>\n                "
                }),
                __metadata("design:paramtypes", [ApiService_service_1.ApiService])
            ], ApiInvoke);
            exports_1("ApiInvoke", ApiInvoke);
        }
    };
});
//# sourceMappingURL=ApiInvoke.component.js.map
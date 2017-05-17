System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, HeartComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            HeartComponent = (function () {
                function HeartComponent() {
                    this.isClicked = false;
                    this.counter = 10;
                }
                HeartComponent.prototype.onClick = function () {
                    this.isClicked == true ? ++this.counter : --this.counter;
                    this.isClicked = !this.isClicked;
                };
                return HeartComponent;
            }());
            HeartComponent = __decorate([
                core_1.Component({
                    template: "<i \n               class=\"glyphicon-heart\"\n               [class.isClicked] = isClicked\n               [class.isNotClick] = !isClicked\n               ></i>",
                    selector: "heart"
                })
            ], HeartComponent);
            exports_1("HeartComponent", HeartComponent);
        }
    };
});
//# sourceMappingURL=heart.component.js.map
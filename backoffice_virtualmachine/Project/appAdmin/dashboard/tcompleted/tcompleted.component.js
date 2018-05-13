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
var core_1 = require('@angular/core');
var tcompleted_service_1 = require('./tcompleted.service');
var TcompletedComponent = (function () {
    function TcompletedComponent(_tcompletedService) {
        this._tcompletedService = _tcompletedService;
    }
    TcompletedComponent.prototype.getTCompleted = function () {
        var _this = this;
        this._tcompletedService.getTCompletas().then(function (dados) { return _this.TCompletas = dados; });
    };
    TcompletedComponent.prototype.ngOnInit = function () {
        this.getTCompleted();
    };
    TcompletedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tcompleted-cmp',
            templateUrl: 'tcompleted.component.html',
            animations: [
                core_1.trigger('cardtable1', [
                    core_1.state('*', core_1.style({
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform': 'translate3D(0px, 0px, 0px)',
                        transform: 'translate3D(0px, 0px, 0px)',
                        opacity: 1 })),
                    core_1.transition('void => *', [
                        core_1.style({ opacity: 0,
                            '-ms-transform': 'translate3D(0px, 150px, 0px)',
                            '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                            '-moz-transform': 'translate3D(0px, 150px, 0px)',
                            '-o-transform': 'translate3D(0px, 150px, 0px)',
                            transform: 'translate3D(0px, 150px, 0px)',
                        }),
                        core_1.animate('0.3s 0s ease-out')
                    ])
                ])
            ],
            providers: [tcompleted_service_1.TCompletedService]
        }), 
        __metadata('design:paramtypes', [tcompleted_service_1.TCompletedService])
    ], TcompletedComponent);
    return TcompletedComponent;
}());
exports.TcompletedComponent = TcompletedComponent;
//# sourceMappingURL=tcompleted.component.js.map
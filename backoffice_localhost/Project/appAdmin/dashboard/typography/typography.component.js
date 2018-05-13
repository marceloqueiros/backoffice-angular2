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
var FuncaoParaOsDados = require('../../../assets/js/DateGraficos.js');
var typography_service_1 = require('./typography.service');
var TypographyComponent = (function () {
    function TypographyComponent(_typographyService) {
        this._typographyService = _typographyService;
    }
    TypographyComponent.prototype.getTypography2 = function () {
        this._typographyService.getTypography().then(function (dados) { return FuncaoParaOsDados(dados); });
    };
    TypographyComponent.prototype.ngOnInit = function () {
        this.getTypography2();
    };
    TypographyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'typography-cmp',
            templateUrl: 'typography.component.html',
            animations: [
                core_1.trigger('carduser', [
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
                        core_1.animate('0.3s 0.25s ease-out')
                    ])
                ])
            ],
            providers: [typography_service_1.TypographyService]
        }), 
        __metadata('design:paramtypes', [typography_service_1.TypographyService])
    ], TypographyComponent);
    return TypographyComponent;
}());
exports.TypographyComponent = TypographyComponent;
//# sourceMappingURL=typography.component.js.map
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
var plinguagens_service_1 = require('./plinguagens.service');
var PlinguagensComponent = (function () {
    function PlinguagensComponent(_plinguagens) {
        this._plinguagens = _plinguagens;
        this.isOn = false;
    }
    PlinguagensComponent.prototype.getPrecosLinguagens = function () {
        var _this = this;
        this._plinguagens.getPrecos()
            .subscribe(function (dados) { return _this.precos = dados; });
    };
    PlinguagensComponent.prototype.ngOnInit = function () {
        this.getPrecosLinguagens();
    };
    PlinguagensComponent.prototype.onClick = function (event) {
        this.isOn = true;
        this.valor = this.precos[event].Valor;
        this.lingua1 = this.precos[event].Linguagem1;
        this.lingua2 = this.precos[event].Linguagem2;
    };
    PlinguagensComponent.prototype.cancelar = function () {
        this.isOn = false;
    };
    PlinguagensComponent.prototype.editarPreco = function (valor, lingua1, lingua2) {
        var _this = this;
        this.isOn = false;
        var editar = { valor: valor, linguaOriginal: lingua1, linguaFinal: lingua2 };
        this._plinguagens.editarPreco(editar).subscribe(function (data) {
            // refresh the list
            _this.todos(event);
        });
    };
    PlinguagensComponent.prototype.todos = function (event) {
        var _this = this;
        this._plinguagens.getPrecos()
            .subscribe(function (dados) { return _this.precos = dados; });
    };
    PlinguagensComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'plinguagens-cmp',
            templateUrl: 'plinguagens.component.html',
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
            providers: [plinguagens_service_1.PLinguagensService]
        }), 
        __metadata('design:paramtypes', [plinguagens_service_1.PLinguagensService])
    ], PlinguagensComponent);
    return PlinguagensComponent;
}());
exports.PlinguagensComponent = PlinguagensComponent;
//# sourceMappingURL=plinguagens.component.js.map
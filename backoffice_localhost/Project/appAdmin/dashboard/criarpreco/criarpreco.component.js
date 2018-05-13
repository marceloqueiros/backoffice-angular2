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
var criarpreco_service_1 = require('./criarpreco.service');
require('rxjs/add/operator/map');
var CriarPrecoComponent = (function () {
    function CriarPrecoComponent(_CriarPrecoService) {
        this._CriarPrecoService = _CriarPrecoService;
    }
    CriarPrecoComponent.prototype.criarPreco = function (preco, linguaOriginal, linguaTraducao) {
        var _this = this;
        var Preco = { preco: preco, linguaOriginal: linguaOriginal, linguaTraducao: linguaTraducao };
        console.log(Preco);
        this._CriarPrecoService.criarPreco(Preco).subscribe(function (data) {
            // refresh the list
            _this.todos(event);
        });
    };
    CriarPrecoComponent.prototype.todos = function (event) {
        console.log("Inserido com sucesso!");
    };
    CriarPrecoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'criarPreco',
            templateUrl: 'criarpreco.component.html',
            providers: [criarpreco_service_1.CriarPrecoService]
        }), 
        __metadata('design:paramtypes', [criarpreco_service_1.CriarPrecoService])
    ], CriarPrecoComponent);
    return CriarPrecoComponent;
}());
exports.CriarPrecoComponent = CriarPrecoComponent;
//# sourceMappingURL=criarpreco.component.js.map
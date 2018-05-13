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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('rxjs/add/operator/map');
var CriarPrecoService = (function () {
    function CriarPrecoService(_http) {
        this._http = _http;
    }
    CriarPrecoService.prototype.criarPreco = function (preco) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(preco);
        var options = new http_2.RequestOptions({ headers: headers });
        console.log(preco);
        return this._http.post('http://localhost:52143/api/Precostraducoes', body, options).map(function (res) { return res.json(); });
    };
    CriarPrecoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CriarPrecoService);
    return CriarPrecoService;
}());
exports.CriarPrecoService = CriarPrecoService;
//# sourceMappingURL=criarpreco.service.js.map
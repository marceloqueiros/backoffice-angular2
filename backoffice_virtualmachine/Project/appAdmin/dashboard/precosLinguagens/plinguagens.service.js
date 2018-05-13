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
require('rxjs/add/operator/toPromise');
require('rxjs/RX');
require('rxjs/add/operator/map');
var PLinguagensService = (function () {
    function PLinguagensService(_http) {
        this._http = _http;
        this._url = 'http://192.168.138.58/APIBackoffice/api/PLinguagens';
    }
    PLinguagensService.prototype.getPrecos = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); });
    };
    PLinguagensService.prototype.editarPreco = function (editar) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(editar);
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post('http://192.168.138.58/APIBackoffice/api/EditarPreco', body, options).map(function (res) { return res.json(); });
    };
    PLinguagensService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PLinguagensService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PLinguagensService);
    return PLinguagensService;
}());
exports.PLinguagensService = PLinguagensService;
//# sourceMappingURL=plinguagens.service.js.map
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
var TypographyService = (function () {
    function TypographyService(_http) {
        this._http = _http;
        this._url = 'http://192.168.138.58/APIBackoffice/api/BuscarEstatisticas';
    }
    TypographyService.prototype.getTypography = function () {
        return this._http.get(this._url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TypographyService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    TypographyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TypographyService);
    return TypographyService;
}());
exports.TypographyService = TypographyService;
//# sourceMappingURL=typography.service.js.map
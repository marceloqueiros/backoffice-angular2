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
var DatatableComponent = (function () {
    function DatatableComponent() {
        this.enableFilter = false;
        this.maxSize = 7;
        this.directionLinks = true;
        this.Page = 10;
        this.labels = {
            previousLabel: 'Anterior',
            nextLabel: 'Seguinte'
        };
        this.config = {
            id: 'advanced',
            itemsPerPage: 10,
            currentPage: 1
        };
        this.columns = [];
        this.query = "";
    }
    DatatableComponent.prototype.onPageChange = function (number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    };
    DatatableComponent.prototype.addColumn = function (column) {
        this.columns.push(column);
    };
    DatatableComponent.prototype.getData = function () {
        if (this.query !== "") {
            return this.filteredList;
        }
        else {
            return this.dataset;
        }
    };
    DatatableComponent.prototype.filter = function () {
        this.filteredList = this.dataset.filter(function (el) {
            var result = "";
            for (var key in el) {
                result += el[key];
            }
            return result.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "dataset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "enableFilter", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "sort", void 0);
    DatatableComponent = __decorate([
        core_1.Component({
            selector: 'datatable',
            template: "\n      <input type=\"text\" class=\"form-control\" *ngIf=enableFilter [(ngModel)]=query \n         (keyup)=filter() placeholder=\"Filter\" style=\"float:right\"/>\n          <div class=\"dataTables_length\" *ngIf=enableFilter>\n              <label class=\"control\">Mostrar\n                  <input type=\"number\" class=\"input\" min=\"1\" default=\"10\" max=\"50\" style=\"text-align: center\" [(ngModel)]=\"config.itemsPerPage\"> Items\n              </label>\n          </div>\n      <table class=\"table table-striped table-no-bordered table-hover dataTable dtr-inline\">\n        <thead>\n          <tr>\n            <th class=\"sorting_disabled\" style=\"text-align:center;\" *ngFor=\"let column of columns; let i of index\">{{column.header}}</th>\n          </tr>\n        </thead>\n        <tbody >\n\t  <tr style=\"text-align:center;\" *ngFor=\"let row of getData() | paginate: config; let even = even; let odd = odd;\" [ngClass]=\"{ odd: odd, even: even }\">\n\t    <td  style=\"text-align:center;\" *ngFor=\"let column of columns; let i = index\">\n            <span *ngIf=\"i == 1\">\n                 <a href=\"#/user\">{{row[column.value]}}</a>\n            </span>\n            <span *ngIf=\"i == 5\">\n                 <a href=\"#/user\">{{row[column.value]}}</a>\n            </span>\n            <span *ngIf=\"i != 1 && i != 5\">\n                {{row[column.value]}}\n            </span>\n      </td>\n\t  </tr>\n        </tbody>\n      </table>\n      <br/>\n      <pagination-controls\n                        [id]=\"config.id\"\n                         [maxSize]=\"maxSize\"\n                         [directionLinks]=\"directionLinks\"\n                         [autoHide]=\"autoHide\"\n                         [previousLabel]=\"labels.previousLabel\"\n                         [nextLabel]=\"labels.nextLabel\"\n                         (pageChange)=\"onPageChange($event)\" *ngIf=enableFilter style=\"float:right\">\n    </pagination-controls>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DatatableComponent);
    return DatatableComponent;
}());
exports.DatatableComponent = DatatableComponent;
//# sourceMappingURL=datatable.component.js.map
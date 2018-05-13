import { Http, Response } from '@angular/http';
import { Injectable, Component, Input } from '@angular/core';
import { ColumnComponent } from './column.component';

import {OrderBy} from './orderby';


@Component({
  selector: 'datatable',
  template: `
      <input type="text" class="form-control" *ngIf=enableFilter [(ngModel)]=query 
         (keyup)=filter() placeholder="Filter" style="float:right"/>
          <div class="dataTables_length" *ngIf=enableFilter>
              <label class="control">Mostrar
                  <input type="number" class="input" min="1" default="10" max="50" style="text-align: center" [(ngModel)]="config.itemsPerPage"> Items
              </label>
          </div>
      <table class="table table-striped table-no-bordered table-hover dataTable dtr-inline">
        <thead>
          <tr>
            <th class="sorting_disabled" style="text-align:center;" *ngFor="let column of columns; let i of index">{{column.header}}</th>
          </tr>
        </thead>
        <tbody >
	  <tr style="text-align:center;" *ngFor="let row of getData() | paginate: config; let even = even; let odd = odd;" [ngClass]="{ odd: odd, even: even }">
	    <td  style="text-align:center;" *ngFor="let column of columns; let i = index">
            <span *ngIf="i == 1">
                 <a href="#/user">{{row[column.value]}}</a>
            </span>
            <span *ngIf="i == 5">
                 <a href="#/user">{{row[column.value]}}</a>
            </span>
            <span *ngIf="i != 1 && i != 5">
                {{row[column.value]}}
            </span>
      </td>
	  </tr>
        </tbody>
      </table>
      <br/>
      <pagination-controls
                        [id]="config.id"
                         [maxSize]="maxSize"
                         [directionLinks]="directionLinks"
                         [autoHide]="autoHide"
                         [previousLabel]="labels.previousLabel"
                         [nextLabel]="labels.nextLabel"
                         (pageChange)="onPageChange($event)" *ngIf=enableFilter style="float:right">
    </pagination-controls>
  `
})
export class DatatableComponent {

  @Input() dataset;
  @Input() enableFilter = false;
  @Input() sort: any;

    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public Page: number =  10;
    public labels: any = {
        previousLabel: 'Anterior',
        nextLabel: 'Seguinte'
    };
    public config: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 10,
        currentPage: 1
    };

    onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    }

  columns: ColumnComponent[] = [];
  query = "";
  filteredList;

  addColumn(column) {
    this.columns.push(column);
  }

  getData() {
    if (this.query !== "") {
      return this.filteredList;
    } else {
      return this.dataset;
    }
  }

  filter() {
    this.filteredList = this.dataset.filter(function (el) {
      var result = "";
      for (var key in el) {
        result += el[key];
      }
      return result.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
    }.bind(this));
  }

}

export interface PaginationInstance {
    /**
     * An optional ID for the pagination instance. Only useful if you wish to
     * have more than once instance at a time in a given component.
     */
    id?: string;
    /**
     * The number of items per paginated page.
     */
    itemsPerPage: number;
    /**
     * The current (active) page.
     */
    currentPage: number;
    /**
     * The total number of items in the collection. Only useful when
     * doing server-side paging, where the collection size is limited
     * to a single page returned by the server API.
     *
     * For in-memory paging, this property should not be set, as it
     * will be automatically set to the value of  collection.length.
     */
    totalItems?: number;
}
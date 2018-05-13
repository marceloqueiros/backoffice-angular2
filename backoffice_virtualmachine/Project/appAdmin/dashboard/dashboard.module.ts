import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';
        

import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { OrderBy } from './datatables/orderby'
import {DatatableComponent} from './datatables/datatable.component';
import {ColumnComponent} from './datatables/column.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(MODULE_ROUTES),
        NgxPaginationModule
    ],
    declarations: [ MODULE_COMPONENTS, DatatableComponent, ColumnComponent, OrderBy ]
})

export class DashboardModule{}

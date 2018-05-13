import {Component, OnInit,trigger,state,style,transition,animate,keyframes, group} from '@angular/core';

import { TCompleted } from './tcompleted';
import { TCompletedService } from './tcompleted.service';

import initDataTable = require('../../../assets/js/datatables.js');

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'tcompleted-cmp',
    templateUrl: 'tcompleted.component.html',
    animations: [
        trigger('cardtable1', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform':'translate3D(0px, 150px, 0px)',
                        transform:'translate3D(0px, 150px, 0px)',
                    }),
                    animate('0.3s 0s ease-out')
                ])
        ])
    ],
    providers: [TCompletedService]
})

export class TcompletedComponent implements OnInit{
    TCompletas : TCompleted[];

    constructor(private _tcompletedService: TCompletedService){ }

    getTCompleted() : void {
        this._tcompletedService.getTCompletas().then(dados => this.TCompletas = dados );
    }

     ngOnInit() {
         this.getTCompleted();
    }
}
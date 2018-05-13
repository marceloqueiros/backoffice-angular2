import {Component, OnInit,trigger,state,style,transition,animate,keyframes, group} from '@angular/core';

import { TPendentes } from './tpendentes';
import { TPendentesService } from './tpendentes.service';

import initDataTable = require('../../../assets/js/datatables.js');

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'tpendentes-cmp',
    templateUrl: 'tpendentes.component.html',
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
    providers: [TPendentesService]
})

export class TpendentesComponent implements OnInit{
    TPendentes : TPendentes[];

    constructor(private _tPendentesService: TPendentesService){ }

    getTPendentes() : void {
        this._tPendentesService.getTPendentes().then(dados => this.TPendentes = dados );
    }
    
     ngOnInit() {
         this.getTPendentes();
    }
}
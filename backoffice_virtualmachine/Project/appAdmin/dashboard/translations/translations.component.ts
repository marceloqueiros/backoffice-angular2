import { Component, OnInit, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';

import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';

import { Translation } from './translation';
import { TranslationsService } from './translations.service';


import initDataTable = require('../../../assets/js/datatables.js');

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'translations-cmp',
    templateUrl: 'translations.component.html',
    animations: [
        trigger('cardtable1', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform': 'translate3D(0px, 0px, 0px)',
                transform: 'translate3D(0px, 0px, 0px)',
                opacity: 1
            })),
            transition('void => *', [
                style({
                    opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform': 'translate3D(0px, 150px, 0px)',
                    transform: 'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0s ease-out')
            ])
        ])
    ],
    providers: [TranslationsService],
})

export class TranslationsComponent {
    translations: Translation[];

    constructor(private translationsService: TranslationsService) {}

    getTranslations(): void {
        this.translationsService.getTranslations().then(translations => this.translations = translations);
    }

    ngOnInit() {
        this.getTranslations();
    }

}
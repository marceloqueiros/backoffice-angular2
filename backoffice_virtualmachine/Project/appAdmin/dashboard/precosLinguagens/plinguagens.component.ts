import {Component, OnInit,trigger,state,style,transition,animate,keyframes, group} from '@angular/core';

import { PLinguagens } from './plinguagens';
import { PLinguagensService } from './plinguagens.service';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'plinguagens-cmp',
    templateUrl: 'plinguagens.component.html',
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
    providers: [PLinguagensService]
})

export class PlinguagensComponent implements OnInit {
    precos: PLinguagens[];
    valor : any;
    lingua1 : any;
    lingua2 : any;
    public isOn = false

    constructor(private _plinguagens: PLinguagensService) { }

    getPrecosLinguagens(): void {
        this._plinguagens.getPrecos()
            .subscribe(dados => this.precos = dados);
    }

    ngOnInit() {
        this.getPrecosLinguagens();
    }

    onClick(event) {
        this.isOn = true;
        this.valor = this.precos[event].Valor;
        this.lingua1 = this.precos[event].Linguagem1;
        this.lingua2 = this.precos[event].Linguagem2;
    }

    cancelar(){
        this.isOn = false;
    }

    editarPreco(valor, lingua1, lingua2){
        this.isOn = false;
        let editar = {valor: valor, linguaOriginal: lingua1, linguaFinal: lingua2};
        this._plinguagens.editarPreco(editar).subscribe(
            data => {
                // refresh the list
                this.todos(event);
            });
    }

       todos(event){
          this._plinguagens.getPrecos()
            .subscribe(dados => this.precos = dados);
       }




}
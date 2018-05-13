import { Component, OnInit } from '@angular/core';
import { CriarPrecoService} from './criarpreco.service';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {  Headers, RequestOptions } from '@angular/http';


@Component({
	moduleId:module.id,
	selector: 'criarPreco',
	templateUrl: 'criarpreco.component.html',
	providers: [CriarPrecoService]
})

export class CriarPrecoComponent{
    constructor(private _CriarPrecoService: CriarPrecoService){}
    criarPreco(preco,linguaOriginal,linguaTraducao){
      
		let Preco = {preco: preco,linguaOriginal: linguaOriginal,linguaTraducao: linguaTraducao};
    console.log(Preco);
    this._CriarPrecoService.criarPreco(Preco).subscribe(
       data => {
         // refresh the list
         this.todos(event);
       }
	   
    );}

       todos(event){
          console.log("Inserido com sucesso!");
       }
}
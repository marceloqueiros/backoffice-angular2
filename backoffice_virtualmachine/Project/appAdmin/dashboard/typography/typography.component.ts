import {Component, OnInit,AfterViewInit,trigger,state,style,transition,animate,keyframes} from '@angular/core';
import FuncaoParaOsDados = require('../../../assets/js/DateGraficos.js');
import {Typography} from './typography';
import {TypographyService} from './typography.service';

@Component({
    moduleId: module.id,
    selector: 'typography-cmp',
    templateUrl: 'typography.component.html',
    animations: [
        trigger('carduser', [
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
                    animate('0.3s 0.25s ease-out')
                
                ])
        ])                                  
    ],
    providers: [TypographyService]
})

export class TypographyComponent implements OnInit{
         Typographyx : any;

    constructor(private _typographyService: TypographyService){ }

    getTypography2() : void {
        this._typographyService.getTypography().then(dados => FuncaoParaOsDados(dados));    
                                
    }

    ngOnInit() {              

        this.getTypography2();            
       
    }

}

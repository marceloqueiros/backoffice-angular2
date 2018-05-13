import { Component, trigger,transition,style,animate,group,state } from '@angular/core';
import FuncaoParaOsDados2 = require('../../../assets/js/GraficoTradu.js');
import { IconsService } from './icons.service';
import { Icons } from './icons';

@Component({
    moduleId: module.id,
    selector: 'icons-cmp',
    templateUrl: 'icons.component.html',
    animations: [       
        trigger('card2014sales', [
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
                    animate('0.3s 0.5s ease-out')
                ])
        ]),
    ],
    providers:[IconsService]
})

export class IconsComponent{ 

    constructor(private _iconsService: IconsService){ }

    getIcons2() : void {
        this._iconsService.getIcons().then(dados => FuncaoParaOsDados2(dados));                                    
    }

 ngOnInit() {          
    
       this.getIcons2();
    }

}

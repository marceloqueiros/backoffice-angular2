import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Icons } from './icons';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/RX';

@Injectable()
export class IconsService {

    private _url: string = 'http://192.168.138.58/APIBackoffice/api/BuscarEstatisticasTraducoes';
    constructor(private _http: Http) { }

    getIcons(): Promise<Icons> {
        return this._http.get(this._url)
            .toPromise()
            .then(response => response.json() as Icons)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
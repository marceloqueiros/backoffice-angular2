import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { TPendentes } from './tpendentes';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/RX';

@Injectable()
export class TPendentesService {

    private _url: string = 'http://192.168.138.58/APIBackoffice/api/TPendentes';
    constructor(private _http: Http) { }

    getTPendentes(): Promise<TPendentes[]> {
        return this._http.get(this._url)
            .toPromise()
            .then(response => response.json() as TPendentes[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}

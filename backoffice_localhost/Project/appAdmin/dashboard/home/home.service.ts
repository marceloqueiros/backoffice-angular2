import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Tabela } from './home';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/RX';

@Injectable()
export class HomeService {

    private _url: string = 'http://localhost:52143/api/TabelaHome';
    constructor(private _http: Http) { }

    getTabela(): Promise<Tabela[]> {
        return this._http.get(this._url)
            .toPromise()
            .then(response => response.json() as Tabela[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}

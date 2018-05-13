import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { PLinguagens } from './plinguagens';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/RX';
import 'rxjs/add/operator/map'

@Injectable()
export class PLinguagensService {

    private _url: string = 'http://localhost:52143/api/PLinguagens';
    constructor(private _http: Http) { }

    getPrecos(){
        return this._http.get(this._url)
            .map((response:Response) => response.json());
    }

    editarPreco(editar) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify(editar);
        let options = new RequestOptions({ headers: headers })
        return this._http.post('http://localhost:52143/api/EditarPreco', body, options).map((res: Response) => res.json());
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
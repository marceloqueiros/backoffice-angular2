import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { TCompleted } from './tcompleted';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/RX';

@Injectable()
export class TCompletedService {

    private _url: string = 'http://localhost:52143/api/TCompletas';
    constructor(private _http: Http) { }

    getTCompletas(): Promise<TCompleted[]> {
        return this._http.get(this._url)
            .toPromise()
            .then(response => response.json() as TCompleted[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}


import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Typography } from './typography';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/RX';

@Injectable()
export class TypographyService {
                                                        
    private _url: string = 'http://localhost:52143/api/BuscarEstatisticas';
    constructor(private _http: Http) { }

    getTypography(): Promise<Typography> {
        return this._http.get(this._url)
            .toPromise()
            .then(response => response.json() as Typography)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }

}
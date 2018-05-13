import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Translation } from './translation';
import { TRANSLATIONS } from './mock-translations';

@Injectable()
export class TranslationsService{
    
    private _url: string = 'http://192.168.138.58/APIBackoffice/api/TDecorrer';
    
    constructor(private _http: Http) { }
    
    getTranslations(): Promise<Translation[]> {
        return this._http.get(this._url)
            .toPromise()
            .then(response => response.json() as Translation[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}
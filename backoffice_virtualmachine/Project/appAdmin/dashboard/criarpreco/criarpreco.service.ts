import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()

export class CriarPrecoService{
    constructor(private _http: Http){}
    criarPreco(preco) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(preco);
    let options = new RequestOptions({ headers: headers })
    console.log(preco);
    return this._http.post('http://192.168.138.58/APIBackoffice/api/Precostraducoes', body, options).map((res: Response) => res.json());
    }
}
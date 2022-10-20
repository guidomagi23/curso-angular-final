import {Injectable} from '@angular/core';
import { HttpClient , HttpResponse, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Favorito } from '../models/favorito';

@Injectable()
export class FavoritoService{
    public url: string;
    
    constructor(private _http: HttpClient){
        this.url = "http://localhost:3678/api/";
    }

    testService(){
        return 'Probando el servicio de Angular';
    }

    getFavoritos(){
        return this._http.get<Favorito>(this.url+'favoritos');
    }

    getFavorito(id: string){
        return this._http.get<Favorito>(this.url+'favorito/'+id);
    }

    addFavorito(favorito: Favorito){
        let params = JSON.stringify(favorito);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post<Favorito>(this.url+'favorito', params, {headers: headers});
    }
}

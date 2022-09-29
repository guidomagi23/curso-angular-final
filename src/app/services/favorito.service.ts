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
}

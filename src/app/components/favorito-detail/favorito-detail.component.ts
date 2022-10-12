import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FavoritoService } from '../../services/favorito.service';
import { Favorito } from '../../models/favorito';

@Component({
  selector: 'favorito-detail',
  templateUrl: './favorito-detail.component.html',
  providers: [FavoritoService]
})
export class FavoritoDetailComponent  implements OnInit {
  public favorito!: Favorito;
  public errorMenssage = null;

  constructor(
    private _favoritoService: FavoritoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(){
    this.getFavorito();
  }

  getFavorito(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      

      this._favoritoService.getFavorito(id).subscribe(
        result => {
          this.favorito = result.favorito;

          if(!this.favorito){
            this._router.navigate(['/hola']);
          }

        },
        error => {
          this.errorMenssage = <any>error;
          if (this.errorMenssage != null) {
            console.log(this.errorMenssage);
            alert('Error en la petición de favorito');
          }
        }
      );
    });
  }
}
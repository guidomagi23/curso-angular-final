import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../../services/favorito.service';
import { Favorito } from '../../models/favorito';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'favorito-add',
  templateUrl: './favorito-add.component.html',
  providers: [FavoritoService]
})

export class FavoritoAddComponent implements OnInit {
  public titulo: string;
  public favorito!: Favorito;
  
  constructor(
    private _favoritoService: FavoritoService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.titulo = 'Crear un nuevo favorito';
  }

  ngOnInit(){
    this.favorito = new Favorito('','','','',[],'');
  }

  onSubmit(){
    console.log(this.favorito);

    this._favoritoService.addFavorito(this.favorito).subscribe(
      response => {
        
        if(!response.favorito){
          alert('Error en la creacion');
        } else{
          this.favorito = response.favorito;
          this._router.navigate(['/']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );

  }

}
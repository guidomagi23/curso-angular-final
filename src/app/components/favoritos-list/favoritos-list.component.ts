import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../../services/favorito.service';
import { Favorito } from '../../models/favorito';


@Component({
  selector: 'favoritos-list',
  templateUrl: './favoritos-list.component.html',
  providers: [FavoritoService]
})

export class FavoritosListComponent implements OnInit {
  public title: String;
  public favoritos!: Favorito[];
  public errorMenssage = null;

  constructor(
    private _favoritoService: FavoritoService
  ) {
    this.title = 'Listado de marcadores:';
  }

  ngOnInit() {
    console.log('FavoritosListComponent cargado');
    this._favoritoService.getFavoritos().subscribe(
      result => {
        console.log(result);
        this.favoritos = result.favoritos;

        if (!this.favoritos) {
          alert('Error en el servidor');
        }

      },
      error => {
        this.errorMenssage = <any>error;
        if (this.errorMenssage != null) {
          console.log(this.errorMenssage);
          alert('Error en la petición');
        }
      }
    );
  }

}
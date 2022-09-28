import { Component } from '@angular/core';


@Component({
  selector: 'favoritos-list',
  templateUrl: './favoritos-list.component.html',
})

export class FavoritosListComponent {
    public title: String;

  constructor() {
    this.title = 'Listado de marcadores';

  }
}
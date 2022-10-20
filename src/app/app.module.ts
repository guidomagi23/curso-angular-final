import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingProviders, routing } from './app.routing';

import { AppComponent } from './app.component';
import { FavoritosListComponent } from './components/favoritos-list/favoritos-list.component';
import { FavoritoDetailComponent } from './components/favorito-detail/favorito-detail.component';
import { FavoritoAddComponent } from './components/favorito-add/favorito-add.component';



@NgModule({
  declarations: [
    AppComponent,
    FavoritosListComponent,
    FavoritoDetailComponent,
    FavoritoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }

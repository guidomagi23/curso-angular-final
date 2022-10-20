import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";

import { FavoritosListComponent } from "./components/favoritos-list/favoritos-list.component";
import { FavoritoDetailComponent } from './components/favorito-detail/favorito-detail.component';
import { FavoritoAddComponent } from './components/favorito-add/favorito-add.component';

const appRoutes: Routes = [
    { path: 'favorito/:id', component: FavoritoDetailComponent },
    { path: '', component: FavoritosListComponent },
    { path: 'nuevo-marcador', component: FavoritoAddComponent},
    { path: '**', component: FavoritosListComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
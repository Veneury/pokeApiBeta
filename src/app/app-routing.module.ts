import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { PokemonesComponent } from './componets/pokemones/pokemones.component';
import { DetalleComponent } from './componets/detalle/detalle.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'detalle/:name', component: DetalleComponent},
  {path: 'pokemones', component: PokemonesComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

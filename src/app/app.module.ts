import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { DetalleComponent } from './componets/detalle/detalle.component';
import { HeaderComponent } from './componets/header/header.component';
import { PokemonesComponent } from './componets/pokemones/pokemones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalleComponent,
    HeaderComponent,
    PokemonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

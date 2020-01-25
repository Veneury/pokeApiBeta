import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) {
   }


   getPokemon()
   {
     
    return this.http.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=21");
   }
  
   getpokemont(name:string)
   {
        let ruta = "https://pokeapi.co/api/v2/pokemon/"+name;
       return this.http.get(ruta);
   }
   getDetallePokemon(url:string)
   {
     return this.http.get(url);
   }
}

import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   data:any[]=[];
   datadetalle:any[]=[];
   busqueda='pikachu';
  constructor(private api: PokeApiService) { 


  }

  ngOnInit() {
    this.api.getPokemon().subscribe(
      (result:any) => {
          this.data=result;
      },
      error => {
          console.log(<any>error);
      }
  );
  }

  getdata(name:string)
  {
    let url = "https://pokeapi.co/api/v2/pokemon/"+name;
    console.log(url);
    this.api.getDetallePokemon(url).subscribe((data:any)=>{
      this.datadetalle=[];
      this.datadetalle.push(data);      
    });
  }

}

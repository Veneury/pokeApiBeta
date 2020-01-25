import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PokeApiService } from 'src/app/services/poke-api.service';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
   data: {name:string};
   pokemon:string;
   pokedetal:any[]=[];
   ver:boolean=false;
  constructor(private rutaActiva: ActivatedRoute, private service:PokeApiService) { }

  ngOnInit() {
    this.pokemon = this.rutaActiva.snapshot.params["name"];
    this.pokemon=this.pokemon.toLowerCase();
    this.service.getpokemont(this.pokemon).subscribe((data:any)=>{

      this.pokedetal=data;
      
      if(this.pokedetal["forms"].length > 0 )
    {
      this.ver=true;
    }
    });
    
  }

}

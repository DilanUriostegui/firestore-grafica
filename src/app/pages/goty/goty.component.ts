import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/interfaces';

import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  
  public juegos: Game[] = [];

  constructor( public game: GameService ) { 
    this.game.cargarJuegos()
            .subscribe( () => {
              this.juegos = this.game.juegos;
              console.log(this.juegos);
            } );
  }

  ngOnInit(): void {
  }

  votar( juego: Game){
    console.log(juego);
    this.game.agregarVoto(juego);
  }

}

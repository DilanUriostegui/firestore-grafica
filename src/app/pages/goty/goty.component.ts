import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/interfaces';

import { GameService } from 'src/app/services/game.service';

import Swal from 'sweetalert2'


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
            } );
  }

  ngOnInit(): void {
  }

  votar( juego: Game){
    this.game.agregarVoto(juego);
    Swal.fire({
      title: 'Gracias',
      text: 'Tu voto se guardo correctamente',
      icon: 'success',
    })
  }

}

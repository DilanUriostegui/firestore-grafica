import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Game } from "../interfaces/interfaces";

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  private itemsCollection: AngularFirestoreCollection<Game>;

  public juegos: Game[] = [];

  constructor( private afs: AngularFirestore) {}


  cargarJuegos(){
    
    this.itemsCollection = this.afs.collection<Game>('goty', ref => ref);
    return this.itemsCollection.valueChanges()
                              .pipe(map( (juegos: Game[]) => {
                                //console.log(juegos);
                                this.juegos = juegos;
                                return this.juegos;
                              } )
                              )

  }

  agregarVoto( juego: Game ){

   
    juego.votos += 1;
    return this.itemsCollection.doc(juego.id).set(juego);
    
  }
}

import { Component, Input, } from '@angular/core';
import { Room } from '../../models/room';

@Component({
  selector: 'app-card-room',
  templateUrl: './card-room.component.html',
  styleUrls: ['./card-room.component.css']
})
export class CardRoomComponent{

  direccion:String = '';
  @Input() room: Room = null;
  
  constructor(){}

  ngOnInit(): void {
    // this.concatDireccion();

  }

  // concatDireccion(){
  //   this.direccion = this.room.region + ', ' + 
  //   this.room.ciudad + ', ' + this.room.comuna + ', ' +
  //   this.room.calle + ', ' + this.room.comuna + ', ' + 
  //   this.room.numero;
  // }
}

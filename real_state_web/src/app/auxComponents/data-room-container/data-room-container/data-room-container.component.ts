import { Component} from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-room-container',
  templateUrl: './data-room-container.component.html',
  styleUrls: ['./data-room-container.component.css']
})
export class DataRoomContainerComponent {

  constructor(private activaterouter: ActivatedRoute, public roomService: RoomService){}
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

}

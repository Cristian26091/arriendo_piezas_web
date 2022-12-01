import { Component,} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  constructor( public contactService: ContactService){

  }

  sendMessage(form: NgForm){
    console.log(form.value);
  }

}

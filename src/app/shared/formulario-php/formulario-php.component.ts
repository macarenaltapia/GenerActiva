import { Component, OnInit } from '@angular/core';
import {ContactModel} from '../../models/contactForm';
import { NgForm } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-php',
  templateUrl: './formulario-php.component.html',
  styleUrls: ['./formulario-php.component.css']
})
export class FormularioPhpComponent implements OnInit {

  //creacion de variable contact
  ContactModel = new ContactModel();
  private emailResponse;
  private truefalse:boolean = false;
  


  constructor(private sendServices: MessageService) { }

  ngOnInit() {
  }

onSubmit(f: NgForm){
    this.getSentServices(this.ContactModel, f);
}
//metodo de services
getSentServices(body:ContactModel, f: NgForm){
    this.sendServices.getResponseEmail(body).subscribe(
        data => {
            if(data){
                  f.reset();
            }
            swal.fire('Tu email ha sido enviado correctamente', '' ,'success');
          },
      );
  
}

}
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import swal from 'sweetalert2';
import { ContactModelB } from 'src/app/models/contactFormB';

@Component({
  selector: 'app-formulario-mail',
  templateUrl: './formulario-mail.component.html',
  styleUrls: ['./formulario-mail.component.css']
})
export class FormularioMailComponent implements OnInit {

  //creacion de variable contact
  ContactModelb = new ContactModelB();
  
  constructor(public _MessageService: MessageService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    this.getSentServices(this.ContactModelb, f);
}
//metodo de services
getSentServices(body:ContactModelB, f: NgForm){
    this._MessageService.sendMail(body).subscribe(
      data => {
          if(data){
                f.reset();
          }
          swal.fire('Tu email ha sido enviado correctamente', '' ,'success');
        },
    );
}
}

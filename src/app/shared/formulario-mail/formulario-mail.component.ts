import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-mail',
  templateUrl: './formulario-mail.component.html',
  styleUrls: ['./formulario-mail.component.css']
})
export class FormularioMailComponent implements OnInit {
  constructor(public _MessageService: MessageService) { }

  ngOnInit(): void {
  }


  mailForm(mail:NgForm) {
    this._MessageService.sendMail(mail).subscribe(() => {
    swal.fire('Tu email ha sido enviado correctamente', '' ,'success');
    });
    }
}

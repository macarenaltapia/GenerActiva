import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  f:FormGroup
  constructor(private _MessageService: MessageService,private fb: FormBuilder) { 
    this.f = fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])],
      apellido: '',
      mail: ['', Validators.compose([
        Validators.required,
        Validators.email,
      ])],
      mensaje: ''
      })
  }

  ngOnInit(): void {
  }
  contactForm(f) {
    this._MessageService.sendMessage(f).subscribe(() => {
    swal.fire('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
    });
    this.f.reset()
    }
}

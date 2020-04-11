import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario = {
    nombre: '',
    email: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  enviar(formulario:NgForm){
    if (formulario.invalid){
      Object.values(formulario.controls).forEach( control => {
      control.markAsTouched();
    })
      return;
    } 
  }

  
}

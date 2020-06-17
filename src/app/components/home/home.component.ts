import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  titulo: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { QueHacemosComponent } from './components/que-hacemos/que-hacemos.component';
import { ComoTrabajamosComponent } from './components/como-trabajamos/como-trabajamos.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './shared/formulario/formulario.component';

import { MessageService } from './services/message.service';
import { FormularioMailComponent } from './shared/formulario-mail/formulario-mail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    QueHacemosComponent,
    ComoTrabajamosComponent,
    EquipoComponent,
    HomeComponent,
    FormularioComponent,
    FormularioMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

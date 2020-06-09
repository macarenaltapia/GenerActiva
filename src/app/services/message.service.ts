import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactModelB } from '../models/contactFormB';
import { ContactModel } from '../models/contactForm';


@Injectable()
export class MessageService {
constructor(private _http: HttpClient) { }

 sendMail(_body: ContactModelB): Observable<any> {
   return this._http.post('/sendMail.php',_body);

 };

 getResponseEmail(_body: ContactModel): Observable<any>{
    return this._http.post('/send.php',_body);
   }
 
 }
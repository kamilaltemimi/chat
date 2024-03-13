import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  contactsUrl = "http://localhost:3001/contacts";
  lastContactsUrl = "http://localhost:3001/lastContacts";
  suggestedContactsUrl = "http://localhost:3001/suggestedContacts";

  constructor(
    private http: HttpClient){
  }

  getContacts(): Observable<User[]>{
    return this.http.get<User[]>(this.contactsUrl);
  }

  getLastContacts(): Observable<User[]>{
    return this.http.get<User[]>(this.lastContactsUrl)
  }

  getSuggestedContacts(): Observable<User[]>{
    return this.http.get<User[]>(this.suggestedContactsUrl)
  }

}




import { Component } from '@angular/core';
import { User } from '../core/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // z racji tego ze to jest aktywna osoba z chata to activeContactData, selectedContact, selectedUser, activeUser
  contactData: User | undefined 

  setContactData(contact: User): void {
    this.contactData = contact
  }

}

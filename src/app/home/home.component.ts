import { Component } from '@angular/core';
import { User } from '../core/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  contactData: User | undefined 

  setContactData(contact: User): void {
    this.contactData = contact
  }

}

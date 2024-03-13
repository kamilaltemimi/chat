import { Component, EventEmitter, Output } from "@angular/core"
import { ContactsService } from "src/app/core/services/contacts/contacts.service"
import { User } from "src/app/core/models/user"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Output() contact = new EventEmitter<User>()

  lastContacts = this.contactsService.lastContacts
  suggestedContacts = this.contactsService.suggestedContacts
  contacts = this.contactsService.contacts

  panelOpenState: boolean = false;

  constructor(
    private contactsService: ContactsService){
    }

  toggleTab(){
    if (this.panelOpenState) {
      this.panelOpenState = false
    } else {
      this.panelOpenState = true
    } return this.panelOpenState
  }

  gatherInfo(contact: User): void {
    this.contact.emit(contact)
  }
    
}


  







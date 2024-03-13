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

  lastContacts: User[] = []
  suggestedContacts: User[] = []
  contacts: User[] = []

  panelOpenState: boolean = false;

  constructor(
    private contactsService: ContactsService){
      this.getContacts()
      this.getLastContacts()
      this.getSuggestedContacts()
    }

  toggleTab(): void{
    this.panelOpenState = !this.panelOpenState
  }

  gatherInfo(contact: User): void {
    this.contact.emit(contact)
  }

  getContacts(): void {
    this.contactsService.getContacts().subscribe((data: User[]) => this.contacts = data)
  }

  getLastContacts(): void {
    this.contactsService.getLastContacts().subscribe((data: User[]) => this.lastContacts = data)
  }

  getSuggestedContacts(): void {
    this.contactsService.getSuggestedContacts().subscribe((data: User[]) => this.suggestedContacts = data)
  }
    
}


  







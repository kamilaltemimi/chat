import { Component, EventEmitter, Output } from "@angular/core"
import { ContactsService } from "src/app/core/services/contacts/contacts.service"
import { User } from "src/app/core/models/user"


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output() id = new EventEmitter<number>()
  @Output() nickname = new EventEmitter<string>()
  @Output() avatar = new EventEmitter<string>()

  lastContacts = this.contactsService.lastContacts
  suggestedContacts = this.contactsService.suggestedContacts
  contacts = this.contactsService.contacts

  panelOpenState: boolean = false;

  constructor(
    private contactsService: ContactsService){
    }

  openClose(){
    let isOpened;
    if (isOpened === true) {
      this.panelOpenState = false
    } else if (isOpened === false) {
      this.panelOpenState =true
    }
  }

  gatherInfo(contact: User): void {
    this.id.emit(contact.id)
    this.nickname.emit(contact.nickname)
    this.avatar.emit(contact.avatar)
    localStorage.getItem(`${contact.id}`)
    console.log(localStorage.getItem(`${contact.id}`))
    }
    
  }


  







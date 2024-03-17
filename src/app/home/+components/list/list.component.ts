import { Component, EventEmitter, Output } from "@angular/core"
import { ContactsService } from "src/app/core/services/contacts/contacts.service"
import { User } from "src/app/core/models/user"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  //todo: Output powinien byc czasownikiem ktory obluguje jakies zdarzenie wiec tutaj np ja bym nazwal onContactChange, onActiveContactChange, contactSelection, userChange cos w ten desen
  @Output() contact = new EventEmitter<User>()

  lastContacts: User[] = []
  suggestedContacts: User[] = []
  contacts: User[] = []

  panelOpenState: boolean = false;

  constructor(
    private contactsService: ContactsService,
  ){
    //todo: generalnie ladnie to wyglada jedyna uwaga do ogolnej struktury. Chcesz miec prawie zawsze parent component ktory bedzie zjamowal sie sciaganiem, zapisywaniem zmian i rozne inne operacje powinien brac na siebie w twoim przypadku jest to home.component i w nim powinines miec wsyzstkiego rodzaju operacje jak sciaganie danych i ich zapisywanie a child componenty (list i chat) powinny byc dumb componentami czyli powinny przyjmowac wartosci w Inputach i emitowac output eventy
    // Wiec jeli chodzi o ten przyklad tutaj to dla zmiennych lastContacts, suggested i contacts powinny zostac porobione Inputy dla nich i w homecomponentcie powinienes je sciagac
    // To prosta zmiana ale niesie za soba wiele prostszych rozwiazan do implementacji z ktorymi w przypadku takiej implementacji mialbys problemy
    // Przyklad: Edytujesz jakis contact i musisz odswiezyc liste wtedy robi sie problem bo jak component list.component mialby poinformowac chat.component zeby sie przerenderowal? Natomiast majac wsztystkie dane w home.component nadpiszesz sobie tablice contacts nowymi wartoscami i te komponenty dzieci (list i chat) sie rerenderuja same a normalnie mialbys skomplikowana logike zeby to osbluzyc
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


  







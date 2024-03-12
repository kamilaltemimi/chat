import { Component, EventEmitter, Output } from "@angular/core"
import { ContactsService } from "src/app/core/contacts/contacts.service"
import { ConversationService } from "src/app/core/conversation/conversation.service"
import { User } from "src/app/core/models/user"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  //todo: staraj sie componenty nazywac troche bardizej opisowo bo w aplkacji bedziesz mial raczej duzo wiecej list niz tylko 1 dlatego to powinna nazywac sie user-list albo contact-list podobny komenatrz do innnych miejsc gdzie nazwa jest za malo intuicyjna np chat jest okej bo to sie raczej nie bedzie potwarzac ale lista na bank
  @Output() id = new EventEmitter<number>()
  @Output() nickname = new EventEmitter<string>()
  @Output() avatar = new EventEmitter<string>()

  lastContacts = this.contactsService.lastContacts
  suggestedContacts = this.contactsService.suggestedContacts
  contacts = this.contactsService.contacts

  panelOpenState: boolean = false;

  constructor(
    private contactsService: ContactsService,
    private conversationService: ConversationService){
    }

    //todo: taka metode ktora zamienia stan najlepiej nazwac 'toggle' wiec tutaj np 'toggleTab'
  openClose(){
    let isOpened;
    console.log(isOpened, 'zawsze bedzie undefined');
    //todo: tutaj dopiero definiujesz zmienna isOpen i nie przypisujesz jej zadnej wartosci podczas 2 i 3 wywaloania tej metody isOpned zawsze bdzie 'undefined' mozesz sobie sprawdzic za pomoca console.loga ktorego dodalem
    if (isOpened === true) {
      this.panelOpenState = false
    } else if (isOpened === false) {
      this.panelOpenState =true
    }

    //todo: chcesz tutaj przelaczac na podstawie tego czy this.panelOpenState jest albo false albo true wiec moznaby zrobic to tak
    // if (this.panelOpenState) {
      // zrob cos
    // }


    //todo: a najlepiej bo ! przed wartoscia mapuje ja na odwrotna wiec jesli this.panelOpenState bedzie true to !this.panelOpenState zamieni to na false zobacz przyokazji co sietanie sie z innymi wartosciami
    // this.panelOpenState = !this.panelOpenState;
    // console.log(!true);
    // console.log(!false);
    // console.log(!{name: 'Kamil'});
    // console.log(!!{name: 'Kamil'}); //podwojny !! najpierw neguje wartosc i sprowadza ja do booleana a potem odwraca wiec w rezultacie jelsi jest ustawiona wartosc to zwroci true jesli jakas 'falsy' value to false
    // console.log(!undefined);
    // console.log(!!undefined);
    // console.log(!null);
    // console.log(!!null);
    // console.log(!'tekst');
    // console.log(!!'tekst');
  }

  gatherInfo(contact: User): void {
    this.id.emit(contact.id)
    this.nickname.emit(contact.nickname)
    this.avatar.emit(contact.avatar)
    //todo: tutaj 3x emitujesz wartosc a mozesz poprostu zrobic cos takeigo this.userSelection.emit(contact) i zwrocic caly obiekt co jest duzo lepsze bo nie musisz kazdej zmiennej w ten sposob zwracac zmien odrazu Output i to jak obslugujesz to w parentComponentcie
    console.log(this.conversationService.getConversation(contact.id))
  }
    
  }


  







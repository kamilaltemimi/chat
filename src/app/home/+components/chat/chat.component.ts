import { Component, Input } from "@angular/core";
import { User } from "src/app/core/models/user";
import { ConversationService } from "src/app/core/services/conversation/conversation.service";
import { take } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  @Input()
  contactData: User | undefined;

  messages: string[] = []
  inputValue: string = ''
  replyData: string = ''

  constructor(
    private conversationService: ConversationService
    ){}

  //todo: nieuzywane ? widze ze w ChatComponent nie masz implements OnChanges
  ngOnChanges(): void {
    if (this.contactData) {
      this.messages = this.conversationService.getConversation(this.contactData.id)
    }
    this.reply()
  }

  //todo: brak typu
  reply(){
    //todo: tutaj mam tylko taka uwage ze w rxjs te Observable jak sie do nich w taki sposob subsrybujesz to oznacza sie podpinasz sie pod strumien danych i jesli nowa wartosc zostanie wyemitowana to przypisananie tego data wykona sie podczas kolejny narazie dopoki sobie lepiej nie przerobisz rxjsa to bym to zostawil jak jest ALE zeby bylo po bozemu pamietaj aby dodawac .pipe(take(1)) operator take(1) po tym jak dostanie jedna wartosc ze strumienia automatycznie zamknie strumien wiec nie bedzie wyciekow pamieci dodalem to w tym przypadku za ciebie ale wszedzei indziej gdzie wykonujesz .subscribe() pamietaj aby tez dodac ten pipe z take(1)
    this.conversationService.getReply().pipe(take(1)).subscribe((data: string) => this.replyData = data)
  }

  //todo: brak typu
  displayMessage(){
    this.reply()
    if (this.contactData){
      this.conversationService.addMessage(this.contactData.id, this.inputValue)
      this.messages = this.conversationService.chatData[this.contactData.id]
      this.inputValue = ''
      }
    }
}





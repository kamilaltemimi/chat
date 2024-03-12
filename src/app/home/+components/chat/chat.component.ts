import { Component, Input } from "@angular/core";
import { ConversationService } from "src/app/core/conversation/conversation.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  //todo: podobnie jak w list.component tutaj to wszystko mozesz zastapic obiektem User ktory bnedzie zwracany z listComponent i obslugiwany tutaj
  @Input()
  id!: number;
  @Input()
  avatarData: string | undefined;
  @Input()
  nicknameData: string | undefined;

  messages: string[] = []
  inputValue: string = ''
  replyData: string = ''

  constructor(
    private conversationService: ConversationService
    ){}
  
  ngOnChanges(): void {
    if (this.id) {
      this.messages = this.conversationService.getConversation(this.id)
    }
    this.reply()
  }
  
  reply(){
    //todo: tutaj mozna dodac typ dla data
    // this.conversationService.getReply().subscribe((data: jakistyp) => this.replyData = data)
    this.conversationService.getReply().subscribe(data => this.replyData = data)
  }

  displayMessage(){
    this.reply()
    if (this.id){
      this.conversationService.addMessage(this.id, this.inputValue)
      this.messages = this.conversationService.chatData[this.id]
      this.inputValue = ''
      }
    }

  
  
}





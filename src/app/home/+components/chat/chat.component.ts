import { Component, Input } from "@angular/core";
import { User } from "src/app/core/models/user";
import { ConversationService } from "src/app/core/services/conversation/conversation.service";

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
  
  ngOnChanges(): void {
    if (this.contactData) {
      this.messages = this.conversationService.getConversation(this.contactData.id)
    }
    this.reply()
  }
  
  reply(){
    this.conversationService.getReply().subscribe((data: string) => this.replyData = data)
  }

  displayMessage(){
    this.reply()
    if (this.contactData){
      this.conversationService.addMessage(this.contactData.id, this.inputValue)
      this.messages = this.conversationService.chatData[this.contactData.id]
      this.inputValue = ''
      }
    }

}





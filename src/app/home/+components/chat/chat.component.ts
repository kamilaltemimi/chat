import { Component, Input } from "@angular/core";
import { ConversationService } from "src/app/core/conversation/conversation.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  
  @Input()
  id: number | undefined
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

  reply(){
    this.conversationService.getReply().subscribe(data => this.replyData = data)
  }

  displayMessage(){
    this.reply()
    if (this.id){
      this.conversationService.addMessage(this.id, this.inputValue)
      this.messages = this.conversationService.chatData[this.id]
      this.inputValue = ""
      
      localStorage.setItem(`${this.id}`, JSON.stringify(this.conversationService.chatData[this.id]))

      console.log(localStorage.setItem(`${this.id}`, JSON.stringify(this.messages)))
      console.log(this.conversationService.chatData)
      }
    }
  
}





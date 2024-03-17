import { Component, Input, OnChanges } from "@angular/core";
import { User } from "src/app/core/models/user";
import { ConversationService } from "src/app/core/services/conversation/conversation.service";
import { take } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnChanges{

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

  reply(): void{
    this.conversationService.getReply().pipe(take(1)).subscribe((data: string) => this.replyData = data)
  }

  displayMessage(): void{
    this.reply()
    if (this.contactData){
      this.conversationService.addMessage(this.contactData.id, this.inputValue)
      this.messages = this.conversationService.chatData[this.contactData.id]
      this.inputValue = ''
      }
    }
}





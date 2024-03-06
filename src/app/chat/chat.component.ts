import { ChatService } from './../service/chat.service';
import { ReplyService } from './../service/reply.service';
import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  
  constructor(
    private replyService: ReplyService,
    private chatService: ChatService
    ){}
    
  
  ngOnInit(): void {
  }

  reply(){
    this.replyService.getReply().subscribe(data => this.replyData = data)
  }

  @Input()
  id: number | undefined
  @Input()
  avatarData: string | undefined;
  @Input()
  nicknameData: string | undefined;

  messages: string[] = []
  inputValue: string = ""
  replyData: string = ""

  displayMessage(){
    this.reply()

    if (this.id){
      this.chatService.addMessage(this.id, this.inputValue)
      console.log(this.chatService.chatData)

      this.messages = this.chatService.chatData[this.id]
      
      this.inputValue = ""
    }
    
    if(this.nicknameData && this.id){
      localStorage.setItem(JSON.stringify(this.id), JSON.stringify(this.chatService.chatData[this.id]))
      console.log(localStorage.setItem(JSON.stringify(this.id), JSON.stringify(this.messages))
      )
      }
    }
  

}




import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  chatData: { [id: number]: string[]} = {};

  addMessage(id: number, message: string){
    if (!this.chatData[id]) {
      this.chatData[id] = []
    }
    this.chatData[id].push(message)
  }

  getConversation(id: number): string[]{
    return this.chatData[id] || [];
  }
}


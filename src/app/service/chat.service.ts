import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chatData: { [id: number]: string[]} = {};

  constructor() { }

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


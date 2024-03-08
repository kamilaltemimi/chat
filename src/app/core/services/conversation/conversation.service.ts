import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  url = "http://localhost:3000/reply";

  chatData: { [id: number]: string[]} = {};

  constructor(
    private http:HttpClient) { }

  addMessage(id: number, message: string){
    if (!this.chatData[id]) {
      this.chatData[id] = []
    }
    this.chatData[id].push(message)
  }

  getConversation(id: number): string[]{
    return this.chatData[id] || [];
  }

  getReply():Observable<string>{
    return this.http.get(this.url, {responseType: 'text'})
  }

}


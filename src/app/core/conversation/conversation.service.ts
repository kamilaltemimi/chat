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
    const existingMessages = this.getConversation(id);
    if (!existingMessages) {
      this.chatData[id] = [message];
    } else {
      this.chatData[id] = [...existingMessages, message];
    }
    localStorage.setItem(`${id}`, JSON.stringify(this.chatData[id]));
  }

  getConversation(id: number): string[]{
    const data = localStorage.getItem(`${id}`);
    return data ? JSON.parse(data) : [];
  }

  getReply():Observable<string>{
    return this.http.get(this.url, {responseType: 'text'})
  }

}


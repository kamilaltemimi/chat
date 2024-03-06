import { ChatService } from './../service/chat.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { ListService } from '../service/list.service';
import { User } from '../models/user';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lastContacts = this.listService.lastContacts
  suggestedContacts = this.listService.suggestedContacts
  contacts = this.listService.contacts

  panelOpenState: boolean = false;

  constructor(
    private listService: ListService,
    private chatService: ChatService){
    }
  ngOnInit(): void {
    localStorage.getItem
  }

  openClose(){
    let isOpened;

    if (isOpened === true) {
      this.panelOpenState = false
    } else if (isOpened === false) {
      this.panelOpenState =true
    }
  }
  
  @Output() id = new EventEmitter<number>()
  @Output() nickname = new EventEmitter<string>()
  @Output() avatar = new EventEmitter<string>()


  gatherInfo(contact: User): void {
    this.id.emit(contact.id)
    this.nickname.emit(contact.nickname)
    this.avatar.emit(contact.avatar)
    
    localStorage.getItem(`${contact.id}`)
    
    }
    
    
  }


  







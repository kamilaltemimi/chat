import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }


  

  storageData(nickname: any, messages: any):any{
    if(nickname){
      localStorage.setItem(nickname, JSON.stringify(messages))
      }
    }

  getSavedChat(nickname:string ){
    JSON.parse(localStorage.getItem(nickname))
  }



}
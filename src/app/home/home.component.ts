import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  id: number = 0
  avatarData: string = ''
  nicknameData: string = ''

  setAvatarData(avatar: string){
    this.avatarData = avatar
  }

  //todo: brakuje typu z returnu metody w tym przypadku bedzei to void bo nie ma go
  setNicknameData(nickname: string): void {
    this.nicknameData = nickname
  }

  setIdData(id: number ){
    this.id = id
  }

}

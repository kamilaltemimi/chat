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

  setNicknameData(nickname: string){
    this.nicknameData = nickname
  }

  setIdData(id: number ){
    this.id = id
  }

}

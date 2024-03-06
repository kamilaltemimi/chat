import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
ngOnInit(): void {
  ;
}

id: number | undefined
avatarData: string = ""
nicknameData: string = ""

setAvatarData(avatar: string){
  this.avatarData = avatar
}

setNicknameData(nickname: string){
  this.nicknameData = nickname
}

setIdData(id: number | undefined){
  this.id = id
}

}

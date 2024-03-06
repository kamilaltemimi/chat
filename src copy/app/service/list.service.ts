import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  

  contacts: User[] =[
  {
    id: 1,
    avatar: "assets/avatar1.jpeg",
    nickname: "miketyson_2003"
  },
  {
    id: 2,
    avatar: "assets/avatar2.jpeg",
    nickname: "andrzej_kowalski1"
  },
  {
    id: 3,
    avatar: "assets/avatar3.jpeg",
    nickname: "qwerty1234567"
  },
  {
    id: 4,
    avatar: "assets/avatar4.jpeg",
    nickname: "Joanna Joanna"
  },
  {
    id: 1,
    avatar: "assets/avatar1.jpeg",
    nickname: "miketyson_2003"
  },
  {
    id: 2,
    avatar: "assets/avatar2.jpeg",
    nickname: "andrzej_kowalski1"
  },
  {
    id: 3,
    avatar: "assets/avatar3.jpeg",
    nickname: "qwerty1234567"
  },
  {
    id: 4,
    avatar: "assets/avatar4.jpeg",
    nickname: "Joanna Joanna"
  },
  {
    id: 1,
    avatar: "assets/avatar1.jpeg",
    nickname: "miketyson_2003"
  },
  {
    id: 2,
    avatar: "assets/avatar2.jpeg",
    nickname: "andrzej_kowalski1"
  },
  {
    id: 3,
    avatar: "assets/avatar3.jpeg",
    nickname: "qwerty1234567"
  },
  {
    id: 4,
    avatar: "assets/avatar4.jpeg",
    nickname: "Joanna Joanna"
  },
  {
    id: 1,
    avatar: "assets/avatar1.jpeg",
    nickname: "miketyson_2003"
  },
  {
    id: 2,
    avatar: "assets/avatar2.jpeg",
    nickname: "andrzej_kowalski1"
  },
  {
    id: 3,
    avatar: "assets/avatar3.jpeg",
    nickname: "qwerty1234567"
  },
  {
    id: 4,
    avatar: "assets/avatar4.jpeg",
    nickname: "Joanna Joanna"
  }
  ]

  lastContacts: User[] = [
    {
      id: 1,
      avatar: "assets/avatar1.jpeg",
      nickname: "miketyson_2003"
    },
    {
      id: 3,
      avatar: "assets/avatar3.jpeg",
      nickname: "qwerty1234567"
    },
    {
      id: 4,
      avatar: "assets/avatar4.jpeg",
      nickname: "Joanna Joanna"
    },
    {
      id: 1,
      avatar: "assets/avatar1.jpeg",
      nickname: "miketyson_2003"
    },
    {
      id: 2,
      avatar: "assets/avatar2.jpeg",
      nickname: "andrzej_kowalski1"
    },
    {
      id: 3,
      avatar: "assets/avatar3.jpeg",
      nickname: "qwerty1234567"
    },
    {
      id: 4,
      avatar: "assets/avatar4.jpeg",
      nickname: "Joanna Joanna"
    },
    {
      id: 1,
      avatar: "assets/avatar1.jpeg",
      nickname: "miketyson_2003"
    }
  ]

  suggestedContacts: User[] = [
    {
      id: 2,
      avatar: "assets/avatar2.jpeg",
      nickname: "andrzej_kowalski1"
    },
    {
      id: 3,
      avatar: "assets/avatar3.jpeg",
      nickname: "qwerty1234567"
    },
    {
      id: 4,
      avatar: "assets/avatar4.jpeg",
      nickname: "Joanna Joanna"
    },
    {
      id: 3,
      avatar: "assets/avatar3.jpeg",
      nickname: "qwerty1234567"
    },
    {
      id: 4,
      avatar: "assets/avatar4.jpeg",
      nickname: "Joanna Joanna"
    },
    {
      id: 1,
      avatar: "assets/avatar1.jpeg",
      nickname: "miketyson_2003"
    },
    {
      id: 2,
      avatar: "assets/avatar2.jpeg",
      nickname: "andrzej_kowalski1"
    },
    {
      id: 3,
      avatar: "assets/avatar3.jpeg",
      nickname: "qwerty1234567"
    },
    {
      id: 4,
      avatar: "assets/avatar4.jpeg",
      nickname: "Joanna Joanna"
    },
    {
      id: 1,
      avatar: "assets/avatar1.jpeg",
      nickname: "miketyson_2003"
    }
  ]


  


  
  

}




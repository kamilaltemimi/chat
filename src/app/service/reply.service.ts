import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  url = 'http://localhost:3000/reply';
  
  constructor(private http: HttpClient) { }

  getReply():Observable<string>{
    return this.http.get(this.url, {responseType: 'text'})
  }

}

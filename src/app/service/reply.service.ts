import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {
  
  

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/reply";

  getReply():Observable<string>{
    return this.http.get(this.url, {responseType: 'text'})
  }

  
  
}

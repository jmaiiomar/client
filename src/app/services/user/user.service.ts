import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUrl: string = 'http://127.0.0.1:8000/utilisateur/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  Register(user:any): Observable<any> {
    return this.http.post(this.userUrl+"register", user, this.httpOptions);
  }
  login(email:string,pwd:string): Observable<any> {
    return this.http.post(this.userUrl+"login"+"/"+email+"/"+pwd, this.httpOptions);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/intern';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {

  baseUrl = "http://localhost:8080/";
  path = "api/interns/createintern"
  constructor(private http: HttpClient) {

  }

  chackIsUse(userName: string): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/chacking`, { userName: userName });
  }

  createIntern(intern: any): Observable<User> {
    console.log(intern);
    return this.http.post<User>(`${this.baseUrl}auth/register`,intern);
  }

  login(login: any): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/login`, login)
  }


}

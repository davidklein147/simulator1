import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InternDetailsComponent } from '../components/register1/intern-details.component';
import { User } from '../interfaces/intern';
import { HttpServerService } from './http-server.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  inteinRegister: {
    details: User;
    register: object;
    role: string;
    roleNum: number;
  }

  isLogin = false;
  img: string;
  code: string;
  isCreate: boolean;

  constructor(private httpServer: HttpServerService) {
    this.inteinRegister = {
      details: {
        id: '',
        name: '',
        passport: '',
        phoneNum: ''
      },
      register: {
        userName: null,
        passwrod: null
      },
      role: '',
      roleNum: null
    };
      this.code = null,
      this.img = null,
      this.isCreate = false
      var a = JSON.stringify(this.inteinRegister);

      
  }

  sendCode(): void {
    console.log("sendCode");
    this.code = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
  }

  displayCode(): Observable<string> {
    return of(this.code);
  }

  regDB(): void {
    this.httpServer.createIntern(this.inteinRegister).subscribe(res => {
      console.log(res);
    });
  }
}

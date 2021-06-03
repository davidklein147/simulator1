import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servers/data.service';
import { HttpServerService } from 'src/app/servers/http-server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private data:DataService, private http:HttpServerService) {
    this.data.isCreate = true;
    this.data.inteinRegister.details.name ='';
   }

  ngOnInit(): void {
  }

  send(login: object):void{
    console.log(login);
    
    this.http.login(login).subscribe(res =>{
      console.log(res);
      
    })


  }

}

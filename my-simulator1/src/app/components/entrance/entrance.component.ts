import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servers/data.service';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {
  kindUser: string = 'intern';
  constructor(public data: DataService) {
     data.isCreate =false;
   }

  ngOnInit(): void {
  }

  typeUser(intern:string):void{
    this.kindUser = intern;

  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servers/data.service';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {

  constructor(public data: DataService) { 
    data.isLogin = false
  }

  ngOnInit(): void {
  }

  log(): void {
    console.log("test");
    this.data.isLogin= true;

  }

}

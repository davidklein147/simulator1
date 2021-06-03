import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mien',
  templateUrl: './mien.component.html',
  styleUrls: ['./mien.component.css']
})
export class MienComponent implements OnInit {

  page: number;

  constructor() {
    this.page = 1;
   }

  ngOnInit(): void {
  }

  updatePage(pageNum?: number):void{
    if(this.page <3){
    this.page++;
    }
  }

}

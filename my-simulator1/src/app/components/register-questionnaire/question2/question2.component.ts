import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {} from 'events';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  @Output() page :EventEmitter<number> = new EventEmitter<number>();

  scops : {
    NY:string[],
    isriel:string[] 
  }
  stetes: string[];
  citys:string[];

  constructor() {
    this.scops = {
      NY: ["Bruklin", "wilumsburg"],
      isriel:["jarusilem", "beny brak"]
    }

    this.stetes = Object.keys(this.scops)
    this.page.emit(1);
   }

  ngOnInit(): void {
  }
  stetesList(country:string):void{
    this.citys = this.scops[country];
    console.log(this.citys)
  }

}

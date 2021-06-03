import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {

  @Output() page :EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.page.emit(2);
   }

  ngOnInit(): void {
  }

}

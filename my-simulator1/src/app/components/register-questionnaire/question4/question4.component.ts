import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {

  @Output() page :EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.page.emit(3);
   }

  ngOnInit(): void {
  }

}

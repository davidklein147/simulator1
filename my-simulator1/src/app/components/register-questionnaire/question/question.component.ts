import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servers/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit(): void {
  }

}

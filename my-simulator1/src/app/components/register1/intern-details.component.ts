import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/intern';
import { DataService } from 'src/app/servers/data.service';

@Component({
  selector: 'app-intern-details',
  templateUrl: './intern-details.component.html',
  styleUrls: ['./intern-details.component.css']
})
export class InternDetailsComponent implements OnInit {

  internDetails:User;

  constructor(private data: DataService,private router:Router) {
    this.internDetails = data.inteinRegister.details;
  }

  ngOnInit(): void {
  }

  send(): void {
    this.data.inteinRegister.details = this.internDetails;
    this.data.sendCode();
    this.router.navigate(['/register']);
  }

}

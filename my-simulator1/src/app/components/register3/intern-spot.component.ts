import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/servers/data.service';

@Component({
  selector: 'app-intern-spot',
  templateUrl: './intern-spot.component.html',
  styleUrls: ['./intern-spot.component.css']
})
export class InternSpotComponent implements OnInit {

  constructor(public data:DataService, private router: Router) { }

  ngOnInit(): void {
  }
  continue(){
   this.router.navigate(['/thanks'])
   this.data.regDB();
   this.data.isCreate =true;
  }

}

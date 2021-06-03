import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs/operators';
import { DataService } from 'src/app/servers/data.service';
import { isIndexSignatureDeclaration } from 'typescript';

@Component({
  selector: 'app-intern-code',
  templateUrl: './intern-code.component.html',
  styleUrls: ['./intern-code.component.css']
})
export class InternCodeComponent implements OnInit {
  notifi = 0;

  char1 = ""
  char2 = ""
  char3 = ""
  char4 = ""
  constructor(public data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.code();
  }

  pass(event: any) {
    if(event.srcElement != "")
    event.srcElement.nextElementSibling.focus();
  }

  code(): void {
    this.data.displayCode().subscribe(res => {
      console.log(res);
    })
  }

  send(): void {
    var code = this.char1 + this.char2 + this.char3 + this.char4;
    var reg = new RegExp('^[0-9]+$');
    if (!reg.test(code)) {
      this.notifi = 1;
      this.reset();
    }
    else if (code !== this.data.code) {
      this.notifi = 2;
      this.reset();
    } else {
      console.log("succefull");
      this.router.navigate(['/spot'])
    }
  }

  reset() {
    this.char1 = "";
    this.char2 = "";
    this.char3 = "";
    this.char4 = "";
    //document.getElementById("1").focus();
  }
}

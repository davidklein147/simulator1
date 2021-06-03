import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntranceComponent } from './components/entrance/entrance.component';
import { InternDetailsComponent } from './components/register1/intern-details.component';
import { from } from 'rxjs';
import { InternCodeComponent } from './components/register2/intern-code.component';
import { InternSpotComponent } from './components/register3/intern-spot.component';
import { LogoComponent } from './components/logo/logo.component';
import { Register1BComponent } from './components/register1-b/register1-b.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionComponent } from './components/register-questionnaire/question/question.component';
import { Question2Component } from './components/register-questionnaire/question2/question2.component';
import { MienComponent } from './components/register-questionnaire/mien/mien.component';
import { Question3Component } from './components/register-questionnaire/question3/question3.component';
import { Question4Component } from './components/register-questionnaire/question4/question4.component';



@NgModule({
  declarations: [
    AppComponent,
    WellcomeComponent,
    EntranceComponent,
    InternDetailsComponent,
    InternCodeComponent,
    InternSpotComponent,
    LogoComponent,
    Register1BComponent,
    LoginComponent,
    QuestionComponent,
    Question2Component,
    MienComponent,
    Question3Component,
    Question4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceComponent } from './components/entrance/entrance.component';
import { InternCodeComponent } from './components/register2/intern-code.component';
import { InternDetailsComponent } from './components/register1/intern-details.component';
import { InternSpotComponent } from './components/register3/intern-spot.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { Register1BComponent } from './components/register1-b/register1-b.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionComponent } from './components/register-questionnaire/question/question.component';
import { Question2Component } from './components/register-questionnaire/question2/question2.component';
import { MienComponent } from './components/register-questionnaire/mien/mien.component';

const routes: Routes = [
  {path: '', component: WellcomeComponent},
  {path: 'entrance', component: EntranceComponent},
  {path: 'details', component: InternDetailsComponent},
  {path: 'code', component: InternCodeComponent},
  {path: 'spot', component: InternSpotComponent},
  {path: 'thanks', component: QuestionComponent},
  {path: 'register', component: Register1BComponent},
  {path: 'login', component:LoginComponent},
  {path: 'questionnaire', component:MienComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

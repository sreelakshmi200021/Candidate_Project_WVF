import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogincoordinatorComponent } from './logincoordinator/logincoordinator.component';
import { TrainerComponent } from './trainer/trainer.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"login", component:LoginComponent},
  {path:"logincoordinator", component:LogincoordinatorComponent},
  {path:"trainer",component:TrainerComponent},
  {path:"candidate",component:CandidateComponent},
  {path:"coordinator",component:CoordinatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

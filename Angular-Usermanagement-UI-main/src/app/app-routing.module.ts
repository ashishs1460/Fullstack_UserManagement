import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { UsersComponent } from './component/users/users.component';

import { EditUserComponent } from './component/edit-user/edit-user.component';
import { AuthGuard } from './Guards/auth-guard.guard';

const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'signup',component:SignupComponent},
  {path:'admin-home',component:AdminHomeComponent},
  {path: 'users',component:UsersComponent},
  // {path: 'admin-home/edit/:id',component:EditUserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }

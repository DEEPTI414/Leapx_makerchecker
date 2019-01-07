import { PlaylistComponent } from './playlist/playlist.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path : '' , component : LoginComponent},
  { path : 'signup' , component : SignupComponent},
  { path : 'playlist' , component : PlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

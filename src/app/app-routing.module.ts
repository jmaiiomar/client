import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarnetComponent } from './components/carnet/listCarnet/carnet.component';
import { LoginComponent } from './components/utilisateurs/login/login/login.component';
import { RegisterComponent } from './components/utilisateurs/registre/register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: CarnetComponent,canActivate:[AuthGuard]   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

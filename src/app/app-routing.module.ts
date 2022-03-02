import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonListComponent } from './abon-list/abon-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { GuardGuard } from './guard.guard';
import { LivreListComponent } from './livre-list/livre-list.component';
import { LivreStatComponent } from './livre-stat/livre-stat.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'', component: CategoryListComponent,canActivate: [GuardGuard]},
  {path:'livre', component: LivreListComponent,canActivate: [GuardGuard]},
  {path:'users', component: UserListComponent, canActivate: [GuardGuard]},
  {path: 'abonne', component: AbonListComponent, canActivate: [GuardGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'stat', component: LivreStatComponent, canActivate: [GuardGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

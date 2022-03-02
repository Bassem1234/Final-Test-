import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router){}
  canActivate(){
if(this.loginService.loggedIn()){
  return true;
}    
else{ 
  this.router.navigate(['login']);
  return false}
  }
  
}

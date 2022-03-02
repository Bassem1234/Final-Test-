import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:any;
res:any;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  logIn(){
    this.loginService.login(this.loginForm.value).subscribe((response)=> {
    console.log(response); 
    this.res = response;   
    localStorage.setItem('utilisateur', JSON.stringify(this.res.user));
    localStorage.setItem('token', this.res.token);
    this.router.navigate(['']);
    }, (error)=>{
      console.log(error);
    });
  }
}

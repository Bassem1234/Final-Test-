import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:any;
registerData:any;
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fName: new FormControl('', [Validators.required]),
      lName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      profile: new FormControl('Profile')
    });
  }
  register(){
    this.registerData = new FormData();
   this.registerData.append('fName', this.registerForm.value.fName);
   this.registerData.append('lName', this.registerForm.value.lName);
   this.registerData.append('email', this.registerForm.value.email);
   this.registerData.append('password', this.registerForm.value.password);
   this.registerData.append('profile', this.registerForm.value.profile);
  this.registerService.register(this.registerForm.value).subscribe((response:any)=>{
    alert('Your account has been added successfully!');
    this.router.navigate(['login']);
  })
  }
}

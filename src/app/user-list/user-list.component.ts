import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
userForm: any;
use = false;
users:any;
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((response)=>{
      this.users = response;
    });
   }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      fName: new FormControl('', [Validators.required]),
      lName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  addUser(){
    this.userService.addUser(this.userForm.value).subscribe((response:any)=>{
      alert('user added successfully');
    }, (error)=>{
      console.log(error);
    });
    //this.use = false;
  }
  newUser(){
    this.use = true;
  }
  deleteUser(input:any){
    this.userService.deleteUser(this.users[input]._id).subscribe((response)=>{
      alert('user deleted successfully !!');
    });
  }
}

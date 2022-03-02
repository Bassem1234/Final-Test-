import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbonneService } from '../abonne.service';

@Component({
  selector: 'app-abon-list',
  templateUrl: './abon-list.component.html',
  styleUrls: ['./abon-list.component.css']
})
export class AbonListComponent implements OnInit {
abonForm:any
abonnes:any;
abn = false;
abonData:any;
  constructor(private abonService: AbonneService) {
    this.abonService.getAbonne().subscribe((response:any)=>{
      this.abonnes = response;
    })
   }

  ngOnInit(): void {
    this.abonForm = new FormGroup({
      fName: new FormControl('', [Validators.required]),
      lName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  addAbon(){
this.abonData = new FormData();
this.abonData.append('fName', this.abonForm.value.fName);
this.abonData.append('lName', this.abonForm.value.lName);
this.abonData.append('email', this.abonForm.value.email);
this.abonData.append('password', this.abonForm.value.password);
console.log(this.abonForm.value);
    this.abonService.addAbon(this.abonForm.value).subscribe((response:any) =>{
      console.log(response);
      alert("abonné added successfully");
    }); 
    //window.location.reload();
  }
  newAbon(){
    this.abn = true;
  }
  dismissNewLivre(){
    this.abn = false;
  }
  delete(input:any){
    this.abonService.deleteAbon(this.abonnes[input]._id).subscribe((response)=>{
      console.log(response);
    }, (error)=>{
      console.log(error);
    });
  }

}

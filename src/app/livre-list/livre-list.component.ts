import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { subscribeOn } from 'rxjs';
import { CategoryService } from '../category.service';
import { DownloadService } from '../download.service';
import { LivreService } from '../livre.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-livre-list',
  templateUrl: './livre-list.component.html',
  styleUrls: ['./livre-list.component.css']
})
export class LivreListComponent implements OnInit {
livreForm:any;
livreData:any;
liv= false;
file:any;
livres:any;
categories:any;
user:any;
catName:any;
  constructor(private livreService: LivreService, private categoryService: CategoryService, private downloadService: DownloadService) { 
    this.categoryService.getCategories().subscribe((response:any)=>{
      this.categories = response;
      this.catName = this.categories[0].nomcategorie;
    });
    this.livreService.getLivres().subscribe((response:any) =>{
      this.livres = response;
    });
    this.user = JSON.parse(localStorage.getItem('utilisateur') || '');
  }

  ngOnInit(): void {
    this.livreForm = new FormGroup({
      Titre: new FormControl('', [Validators.required]),
      Auteur: new FormControl('', [Validators.required]),
      Description:new FormControl('', [Validators.required]),
      category: new FormControl('Category',[Validators.required])
    });
  }
  addLivre(){
    this.livreData = new FormData();
    this.livreData.append('Titre', this.livreForm.value.Titre);
    this.livreData.append('Auteur', this.livreForm.value.Auteur);
    this.livreData.append('Description', this.livreForm.value.Description);
    this.livreData.append('Contenue', this.file.name);
    this.livreData.append('file', this.file);
    this.livreData.append('DowTimes',0);
    this.livreData.append('category', this.livreForm.value.category);
    console.log(this.livreForm.value.category);
    this.livreService.addLivre(this.livreData, this.livreForm.value.category).subscribe((response:any)=>{
      alert('livre added successfully');
      window.location.reload();
    }, (error)=>{
      console.log(error);
    });
    this.liv = false;
  }
  newLivre(){
    this.liv = true;
  }
  onChange(event:any){
this.file = event.target.files[0];
  }
  downloadLivre(input:any){
this.downloadService.downloadFile({filename: this.livres[input].Contenue}, this.user._id).subscribe((response:any)=>{
  if(response.type === 'application/json'){
    alert('You have reached the limit of books downloaded for this month');
  }
  else {
    alert('book downloaded successfully !!');
    saveAs( response);
  }
}, (err) =>{
  console.log(err)
});
  }
  deleteLiv(input:any){
this.livreService.deleteLivre(this.livres[input]._id, this.livres[input].category).subscribe((response:any)=>{
  alert('livre deleted successfully!!')
  window.location.reload();
})
 }
}

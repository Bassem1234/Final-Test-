import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
catForm:any;
catData:any;
livreForm:any;
categories:any;
liv = false;
cate = false;
livreData:any;
file:any;
Name:any;
nom:any;
user:any;
indice =0;
  constructor(private categoryService: CategoryService, private livreService: LivreService) { 
    this.categoryService.getCategories().subscribe((response:any) =>{
      this.categories = response;
    });
    this.user = JSON.parse(localStorage.getItem('utilisateur') || '');
  }

  ngOnInit(): void {
    this.catForm = new FormGroup({
      nomcategorie: new FormControl('', [Validators.required])
    });
    this.livreForm = new FormGroup({
      Titre: new FormControl('', [Validators.required]),
      Auteur: new FormControl('', [Validators.required]),
      Description:new FormControl('', [Validators.required]),
      file: new FormControl(''),
    });
  }
  saveCat(){
    this.catData = new FormData();
    this.catData.append('nomcategorie', this.catForm.value.nomcategorie);
    console.log(this.catForm.value.nomcategorie);
   this.categoryService.addCategory({'nomcategorie': this.catForm.value.nomcategorie}).subscribe((response:any)=>{
     alert('cat added successfully');
     window.location.reload();
   }, (error)=>{
     console.log(error);
   });
    //this.cate = false;
   }
  addLivre(input:any){
this.liv = true;
this.indice = input;
alert
  }
  saveLiv(){
this.Name = this.categories[this.indice].nomcategorie;
this.livreData = new FormData();
    this.livreData.append('Titre', this.livreForm.value.Titre);
    this.livreData.append('Auteur', this.livreForm.value.Auteur);
    this.livreData.append('Description', this.livreForm.value.Description);
    this.livreData.append('file', this.file);
    this.livreData.append('Contenue', this.file.name);
    this.livreData.append('category', this.Name);
    this.livreService.addLivre(this.livreData, this.Name).subscribe((response:any)=>{
      alert('livre added');
      window.location.reload();
      this.liv = false;
    } ,(error) => {
      console.log(error);
    });


  }
  dismissLiv(){
    this.liv = false;
  }
  addCategory(){
    this.cate = true;
  }
  disCat(){
    this.cate = false;
  }
  onChange(event:any){
    this.file = event.target.files[0];
  }
  deleteCat(input:any){
this.categoryService.deleteCategory(this.categories[input]._id).subscribe((response:any)=>{
  alert('Category and all respective livres are deleted');
  window.location.reload();
})
  }
}

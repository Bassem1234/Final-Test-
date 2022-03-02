import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { DownloadService } from '../download.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { LivreService } from '../livre.service';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  livres: any;
  categories: any;
  data: any = [];
  Liv: any = [];
  constructor(private livreService: LivreService, private categorService: CategoryService, public router: Router) {
    this.livreService.getLivres().subscribe((response: any) => {
      this.livres = response;
    });
    this.categorService.getCategories().subscribe((response: any) => {
      this.categories = response;
    })
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('utilisateur') || '');
  }
  getExcelFile() {
    for (let i = 0; i < this.categories.length; i++) {
      for (let j = 0; j < this.categories[i].listeDesLivres.length; j++) {
        this.Liv.push(this.categories[i].listeDesLivres[j].Titre);
      }
      this.data.push({ Category: this.categories[i].nomcategorie, livres: this.Liv });
      this.Liv = [];
    }
    new ngxCsv(this.data, 'Categories');
  }
  getStats() {
    this.router.navigate(['/stat']);
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('utilisateur');
    this.router.navigate(['login']);
  }
}

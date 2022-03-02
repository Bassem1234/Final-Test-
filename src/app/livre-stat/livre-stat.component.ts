import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-livre-stat',
  templateUrl: './livre-stat.component.html',
  styleUrls: ['./livre-stat.component.css']
})
export class LivreStatComponent implements OnInit {
livres:any;
categories:any;
  constructor(private livreService: LivreService, private categoryService: CategoryService) {
    this.livreService.getLivres().subscribe((response:any)=>{
      this.livres = response;
    });
    this.categoryService.getCategories().subscribe((response:any)=>{
      this.categories = response;
    });
   }

  ngOnInit(): void {
  }

}

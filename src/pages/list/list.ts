import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Categorie } from '../../app/categorie';
import { CategorieServiceProvider } from '../../providers/categorie-service/categorie-service';
import { DetailsCategoriePage } from '../detailsCategorie/detailsCategorie'
import { HomePage } from '../../pages/home/home';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class Categories {
  selectedItem: Categorie;
  categories : Categorie[];
  OptionAdd:boolean;
  categorie : string;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  private categoriesRestService:CategorieServiceProvider) {
    this.OptionAdd=false;
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesRestService.getCategories()
     .subscribe(categories => this.categories = categories);
 }

  details(event,item) {
    this.navCtrl.push(DetailsCategoriePage, {
      item: item
    });
  }

  optionAdd(){
    this.OptionAdd=true;

  }

  add(){
    this.categoriesRestService.addCategorie(this.categorie).subscribe(); 
    this.navCtrl.push(HomePage);
  }

  
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Categorie} from '../../app/Categorie';
import { HomePage } from '../../pages/home/home';
import { CategorieServiceProvider } from '../../providers/categorie-service/categorie-service';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-detailsCategorie',
  templateUrl: 'detailsCategorie.html',
})
export class DetailsCategoriePage {
  selectedItem:Categorie
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private categoriesRestService : CategorieServiceProvider,
    private toastCtrl: ToastController  ) {
    this.selectedItem = navParams.get('item');
  }

  onDelete() : void{
    this.presentToast("Delete Done");
    this.categoriesRestService.deleteCategorie(this.selectedItem).subscribe();
    this.navCtrl.push(HomePage);

  } 

  update(): void{
    this.categoriesRestService.updateCategorie(this.selectedItem)
      .subscribe();
      this.navCtrl.push(HomePage);
      this.presentToast("Update Done");

}

presentToast(txt: string) {
  let toast = this.toastCtrl.create({
    message: txt,
    duration: 1000,
    position: 'middle'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}




}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NoteServicesProvider } from '../../providers/note-services/note-services';
import { HomePage } from '../../pages/home/home';
import{Note} from '../../app/Note'
import{Categorie} from '../../app/categorie'
import { CategorieServiceProvider } from '../../providers/categorie-service/categorie-service';
import { ToastController } from 'ionic-angular';






@Component({
  selector: 'page-details',
  templateUrl: 'detailsNote.html',
})
export class DetailsNotePage {
  selectedItem : any;
  optionUpdate:boolean;
  categories:Categorie[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private noteRestService : NoteServicesProvider,
    private categoriesRestService:CategorieServiceProvider,
    private toastCtrl: ToastController ) {

    this.selectedItem = navParams.get('note');
    this.optionUpdate=false;

  }

  delete(){

      this.noteRestService.deleteNote(this.selectedItem).subscribe();
      this.navCtrl.push(HomePage);
      this.presentToast("Deleted");

  }


  update(){
    this.optionUpdate=true;
    this.categoriesRestService.getCategories()
     .subscribe(categories => this.categories = categories);

  }

  save(){
    this.selectedItem.categorie=this.selectedItem.categorie.categorie;
    this.noteRestService.updateNote(this.selectedItem)
      .subscribe();
    this.navCtrl.push(HomePage);
    this.presentToast("Updated");

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

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Note } from '../../app/note';
import { CategorieServiceProvider } from '../../providers/categorie-service/categorie-service';
import { NoteServicesProvider } from '../../providers/note-services/note-services';
import{Categorie} from '../../app/categorie';
import { HomePage } from '../../pages/home/home';
import { ToastController } from 'ionic-angular';




/**
 * Generated class for the AddNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {
categories : Categorie [];
n : any;
note : Note;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private noteRestService : NoteServicesProvider,
    private categoriesRestService:CategorieServiceProvider,
    private toastCtrl: ToastController ) {
       this.note = new Note();
  }

  ionViewDidLoad() {
    this.categoriesRestService.getCategories()
     .subscribe(categories => this.categories = categories);  }

  save(){
    
    this.note.note= '<?xml version="1.0" encoding="UTF-8"?><note>'+this.n +"</note>";
    this.noteRestService.addNote(this.note).subscribe();
    this.presentToast();
    this.navCtrl.push(HomePage);
    

  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Note was added successfully',
      duration: 1000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}

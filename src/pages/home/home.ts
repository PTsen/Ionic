import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import { Categories } from '../../pages/list/list';
import { NotesPage } from '../../pages/notes/notes';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  notes(){
    this.navCtrl.push(NotesPage);
  }
 
  categories(){
    this.navCtrl.push(Categories);
  }

}

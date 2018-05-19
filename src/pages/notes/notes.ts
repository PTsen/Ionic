import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NoteServicesProvider } from '../../providers/note-services/note-services';
import {Note} from '../../app/note';
import {DetailsNotePage} from '../../pages/detailsNote/detailsNote';
import { ToastController } from 'ionic-angular';
import { AddNotePage } from '../../pages/add-note/add-note';

/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
  notes : Note[];

  constructor(public navCtrl: NavController , private noteRestService : NoteServicesProvider,
    public navParams: NavParams, private toastCtrl: ToastController) {
  }
  
  ionViewDidEnter() {
    this.getNotes();
  }

  getNotes(): void {
     this.noteRestService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

  click(event,note):void {
    this.navCtrl.push(DetailsNotePage,{
      note: note
    });
  }
  add():void {
    this.navCtrl.push(AddNotePage);
  }

}




@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})

export class HomePage {
 

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NoteServicesProvider } from '../../providers/note-services/note-services';
import {Note} from '../../app/note';
import {DetailsNotePage} from '../../pages/detailsNote/detailsNote';
import { AddNotePage } from '../../pages/add-note/add-note';


@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
  notes : Note[];

  constructor(public navCtrl: NavController , private noteRestService : NoteServicesProvider,
    public navParams: NavParams) {
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

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; 



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Categories } from '../pages/list/list';
import { DetailsNotePage } from '../pages/detailsNote/detailsNote';
import { DetailsCategoriePage } from '../pages/detailsCategorie/detailsCategorie';
import { AddNotePage } from '../pages/add-note/add-note';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NoteServicesProvider } from '../providers/note-services/note-services';
import { NotesPage } from '../pages/notes/notes';
import { CategorieServiceProvider } from '../providers/categorie-service/categorie-service';


@NgModule({
  declarations: [
    MyApp,
    NotesPage,
    HomePage,
    Categories,
    DetailsNotePage,
    DetailsCategoriePage,
    AddNotePage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotesPage,
    HomePage,
    Categories,
    DetailsNotePage,
    DetailsCategoriePage,
    AddNotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteServicesProvider,
    CategorieServiceProvider
  ]
})
export class AppModule {}

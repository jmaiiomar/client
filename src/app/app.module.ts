import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarnetComponent } from './components/carnet/listCarnet/carnet.component';
import { UtilisateurComponent } from './components/utilisateurs/utilisateur/utilisateur.component';
import { AddCarnetComponent } from './components/carnet/addCarnet/add-carnet/add-carnet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarnetComponent,
    UtilisateurComponent,
    AddCarnetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

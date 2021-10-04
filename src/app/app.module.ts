import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarnetComponent } from './components/carnet/listCarnet/carnet.component';
import { UtilisateurComponent } from './components/utilisateurs/utilisateur/utilisateur.component';
import { AddCarnetComponent } from './components/carnet/addCarnet/add-carnet/add-carnet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LanguageComponent } from './components/language/language/language.component';
import { RegisterComponent } from './components/utilisateurs/registre/register/register.component';
import { LoginComponent } from './components/utilisateurs/login/login/login.component';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    CarnetComponent,
    UtilisateurComponent,
    AddCarnetComponent,
    LanguageComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
    }),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}

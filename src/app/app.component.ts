import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(private translateService:TranslateService){
    this.translateService.setDefaultLang('fr');
    this.translateService.use(localStorage.getItem('lang')|| 'fr');
  }
}

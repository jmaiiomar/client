import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
})
export class LanguageComponent implements OnInit {
  constructor() {}
  lang: string="";
  ngOnInit(): void {
    this.lang=localStorage.getItem("lang") || "fr";
  }
  selectLanguage(event: any) {
  
    localStorage.setItem("lang",event.target.value);
    window.location.reload();
   

  }
   
  
}

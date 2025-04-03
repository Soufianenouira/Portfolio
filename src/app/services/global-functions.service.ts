import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {

  constructor() { }

  texte = 
[
  {
    "about": "Über mich",
    "skills": "Kenntnisse",
    "projects": "Projekte",
    "FrontendDeveloper": "Frontend-Entwickler"
  },
  {
    "about": "About me",
    "skills": "Skills",
    "projects": "Projects",
    "FrontendDeveloper": "Frontend Developer"
  }
  
];
language = 0;
languageImg = "./../../../../assets/img/en_de.png";
DeEn(){
  if(this.language == 0){
    this.language = 1;
    this.languageImg = "./../../../../assets/img/de_en.png";

  }else{
    this.language = 0;
    this.languageImg = "./../../../../assets/img/en_de.png";
  }
}
}

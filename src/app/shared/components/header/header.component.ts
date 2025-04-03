import { CommonModule} from '@angular/common';
import { Component, inject } from '@angular/core';
import { GlobalFunctionsService } from '../../../services/global-functions.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
menuDisplay: string = 'none';
global = inject(GlobalFunctionsService);
/* texte = 
[
  {
    "about": "Über mich",
    "skills": "Kenntnisse",
    "projects": "Projekte"
  },
  {
    "about": "About me",
    "skills": "Skills",
    "projects": "Projects"
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
} */
openMenu(){
    if(this.menuDisplay == 'none'){
      this.menuDisplay = 'flex';
    } else{
      this.menuDisplay = 'none';
    }
  }
}

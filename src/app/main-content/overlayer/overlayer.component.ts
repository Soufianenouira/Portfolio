import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output, inject} from '@angular/core';
import { GlobalFunctionsService } from '../../services/global-functions.service';

@Component({
  selector: 'app-overlayer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overlayer.component.html',
  styleUrl: './overlayer.component.scss'
})
export class OverlayerComponent {
  global = inject(GlobalFunctionsService);
  joinUsedTools= 
  [
    {
      "name": "Anguler",
      "img": "./../../../assets/img/angular.png"
    },
    {
      "name": "TypeScript",
      "img": "./../../../assets/img/typescript.png"
    },
    {
      "name": "HTML",
      "img": "./../../../assets/img/html.png"
    },
    {
      "name": "CSS",
      "img": "./../../../assets/img/css.png"
    },
    {
      "name": "Firebase",
      "img": "./../../../assets/img/firebase.png"
    }];
  poloUsedTools = 
  [
    {
      "name": "JavaScript",
      "img": "./../../../assets/img/java.png"
    },
    {
      "name": "HTML",
      "img": "./../../../assets/img/html.png"
    },
    {
      "name": "CSS",
      "img": "./../../../assets/img/css.png"
    }
    ];
  bubbleUsedTools = 
  [
    {
      "name": "Rest-API",
      "img": "./../../../assets/img/rest-api.svg"
    },
    {
      "name": "JavaScript",
      "img": "./../../../assets/img/java.png"
    },
    {
      "name": "HTML",
      "img": "./../../../assets/img/html.png"
    },
    {
      "name": "CSS",
      "img": "./../../../assets/img/css.png"
    }
  ];

  displayFlex = "flex";
  displayNone= "none";
  @Input() projectToBeShown:string = "";
  @Output() messageEmitter = new EventEmitter<string>();

close(){
  this.messageEmitter.emit('');
  this.projectToBeShown = '';
  document.body.style.overflow = 'auto';
}

nextProject(){
  if(this.projectToBeShown == "Join"){
    this.projectToBeShown = "El Pollo Locco"
  }else if(this.projectToBeShown == "El Pollo Locco"){
    this.projectToBeShown = "DA Bubble"
  }else if(this.projectToBeShown == "DA Bubble"){
    this.projectToBeShown = "Join"
  }

}
}

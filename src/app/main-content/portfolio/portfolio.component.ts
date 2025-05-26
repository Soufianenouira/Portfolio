import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GlobalFunctionsService } from '../../services/global-functions.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  global = inject(GlobalFunctionsService);
  projects = [
    {
      "name": "Join",
      "usedTools": ['Anguler', 'TypeScript', 'Firebase', 'HTML', 'CSS'],
      "img": "./../../../assets/img/join_overlayer.png",
      "link": "...."
    },
    {
      "name": "El Poco Loco",
      "usedTools": ['JavaScript', 'HTML', 'CSS'],
      "img": "./../../../assets/img/pocoloco_overlayer.png",
      "link": "...."
    },
    {
      "name": "DA Bubble",
      "usedTools": ['JavaScript', 'Rest-API', 'HTML', 'CSS'],
      "img": "./../../../assets/img/bubble_overlayer.png",
      "link": "...."
    }

  ];

  projectImage: string = "./../../../assets/img//join_overlayer.png";
  alignment: string = "flex-start"
  displayStyle: string = "none";
  daBubbleArrow: string = "none";
  pocoLocoArrow: string = "none";
  joinArrow: string = "none";

  over(path:string, index:number){
    this.projectImage = path;
    this.displayStyle = "flex";
    if(index == 0){
      this.alignment = "flex-start";
      this.joinArrow = "flex";
    }else if (index == 1){
      this.alignment = "center";
      this.pocoLocoArrow = "flex";
    }else if (index == 2){
      this.alignment = "flex-end";
      this.daBubbleArrow = "flex";
    }
    
  }

  out(){
    this.displayStyle = "none";
    this.joinArrow = "none";
    this.pocoLocoArrow = "none";
    this.daBubbleArrow = "none";
  }

  @Output() messageEmitter = new EventEmitter<string>();
  @Input() projectName:string = '';

  showProject(projectName:string) {
    this.projectName = projectName;
    this.messageEmitter.emit(this.projectName);
  }
}

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
      "usedTools": ['Anguler', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      "img": "./../../../assets/img/group21.png",
      "link": "...."
    },
    {
      "name": "El Poco Loco",
      "usedTools": ['HTML', 'CSS', 'JavaScript'],
      "img": "./../../../assets/img/group22.png",
      "link": "...."
    },
    {
      "name": "DA Bubble",
      "usedTools": ['Anguler', 'Firebase', 'TypeScript'],
      "img": "./../../../assets/img/group23.png",
      "link": "...."
    }

  ];

  projectImage: string = "./../../../assets/img/group21.png";
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

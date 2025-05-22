import { Component, inject} from '@angular/core';
import { GlobalFunctionsService } from '../../services/global-functions.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  global = inject(GlobalFunctionsService);
  skillsIcons = [
    {
      "name": "HTML",
      "img": "./../../../assets/img/1.tech_icons.png"
    },
    {
      "name": "CSS",
      "img": "./../../../assets/img/2.tech_icons.png"
    },
    {
      "name": "JsvsScript",
      "img": "./../../../assets/img/3.tech_icons.png"
    },
    {
      "name": "Material Design",
      "img": "./../../../assets/img/4.tech_icons.png"
    },
    {
      "name": "TypeScript",
      "img": "./../../../assets/img/5.tech_icons.png"
    },
    {
      "name": "Angular",
      "img": "./../../../assets/img/6.tech_icons.png"
    },
    {
      "name": "Firebase",
      "img": "./../../../assets/img/7.tech_icons.png"
    },
    {
      "name": "Git",
      "img": "./../../../assets/img/8.tech_icons.png"
    },
    {
      "name": "Rest-API",
      "img": "./../../../assets/img/9.tech_icons.png"
    },
    {
      "name": "Scrum",
      "img": "./../../../assets/img/10.tech_icons.png"
    },
    {
      "name": "C",
      "img": "./../../../assets/img/c.png"
    },
    {
      "name": "C++",
      "img": "./../../../assets/img/c_plus.png"
    }, 
    {
      "name": "Growth Mindset",
      "img": "./../../../assets/img/11.tech_icons.png"
    }
  ]
}

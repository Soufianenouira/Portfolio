import { Component, inject} from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ReferencesComponent } from './references/references.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { OverlayerComponent } from './overlayer/overlayer.component';
import { GlobalFunctionsService } from '../services/global-functions.service'; 

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeroComponent,
    AboutMeComponent,
    PortfolioComponent,
    SkillsComponent,
    ReferencesComponent,
    ContactMeComponent,
    OverlayerComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  global = inject(GlobalFunctionsService);
  projectToBeShown: string = '';
  

  closeProjectViewer(projetName: string){
    this.projectToBeShown = projetName;
  }

  openProjectViewer(projetName: string) {
    this.projectToBeShown = projetName;
  }
}

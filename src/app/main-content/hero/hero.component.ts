import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { GlobalFunctionsService } from '../../services/global-functions.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  global = inject(GlobalFunctionsService);
}

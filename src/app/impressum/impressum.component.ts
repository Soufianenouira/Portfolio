import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { GlobalFunctionsService } from '../services/global-functions.service';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  globale = inject(GlobalFunctionsService);
}

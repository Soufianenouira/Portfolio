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
openMenu(){
    if(this.menuDisplay == 'none'){
      this.menuDisplay = 'flex';
    } else{
      this.menuDisplay = 'none';
    }
  }
}

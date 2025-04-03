import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
menuDisplay: string = 'none';

openMenu(){
    if(this.menuDisplay == 'none'){
      this.menuDisplay = 'flex';
    } else{
      this.menuDisplay = 'none';
    }
  }
}

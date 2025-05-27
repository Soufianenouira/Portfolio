import { CommonModule} from '@angular/common';
import { Component, ElementRef, inject, ViewChild, HostListener} from '@angular/core';
import { GlobalFunctionsService } from '../../../services/global-functions.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('overlayRef', { static: false }) overlayRef!: ElementRef;

global = inject(GlobalFunctionsService);


  @HostListener('document:click', ['$event'])
  handleBackdropClick(event: MouseEvent) {
    if (!this.overlayRef?.nativeElement) return;

    const clickedInside = this.overlayRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      if(this.global.menuDisplay == 'flex'){
        this.global.openMenu();
      }
    }
  }
}

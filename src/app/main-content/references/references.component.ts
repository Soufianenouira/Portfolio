import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  references = [
    /* {
      "author": "Soufiane",
      "comment": "teammate6",
      "display": "none",
      "backgroundColor": "#3dcfb711"
    }, */
    {
      "author": "Soufiane",
      "comment": "teammate1",
      "display": "flex",
      "backgroundColor": "#3dcfb747"
    },
    {
      "author": "Soufiane",
      "comment": "teammate2",
      "display": "none",
      "backgroundColor": "#3dcfb711"
    },
    {
      "author": "Soufiane",
      "comment": "teammate3",
      "display": "none",
      "backgroundColor": "#3dcfb711"
    },
    {
      "author": "Soufiane",
      "comment": "teammate4",
      "display": "none",
      "backgroundColor": "#3dcfb711"
    },
    {
      "author": "Soufiane",
      "comment": "teammate5",
      "display": "none",
      "backgroundColor": "#3dcfb711"
    },
    {
      "author": "Soufiane",
      "comment": "teammate6",
      "display": "none",
      "backgroundColor": "#3dcfb711"
    },
    {
      "author": "Soufiane",
      "comment": "teammate1",
      "display": "none",
      "backgroundColor": "#3dcfb711"
    }, 

  ];

  fillColors = ["#3DCFB6", "white", "white", "white", "white", "white",];
  scrollBehavior = "smooth";
  scrollLeftPosition:number = 160;

  ngAfterViewInit() {
    const referencesContainer = document.querySelector('.references');
    if (referencesContainer) {
      referencesContainer.scrollLeft = 0;
      console.log(referencesContainer.scrollWidth);
      
      //this.fillTheRightSvg(referencesContainer.scrollLeft);
    }
  }
  
  scrollLeft() {
    const referencesContainer = document.querySelector('.references');
    if (referencesContainer) {
      if(this.scrollLeftPosition > 160){
        this.scrollBehavior = "smooth";
        referencesContainer.scrollLeft -= 766;
        this.scrollLeftPosition -= 766;
      }else{
        this.scrollBehavior = "auto";
        referencesContainer.scrollLeft = 3991;
        this.scrollLeftPosition = 3991;
      }
      //this.fillTheRightSvg(this.scrollLeftPosition);
    }
  }

  
  scrollRight() {
    const referencesContainer = document.querySelector('.references');
    if (referencesContainer) {
      if(this.scrollLeftPosition < 3990){
        this.scrollBehavior = "smooth";
        referencesContainer.scrollLeft += 766;
        this.scrollLeftPosition += 766;
      }else{
        this.scrollBehavior = "auto";
        referencesContainer.scrollLeft = 160;
        this.scrollLeftPosition = 160;
      }
      //this.fillTheRightSvg(this.scrollLeftPosition);
    }
  }

  clearFillColors(){
    for (let index = 0; index < this.fillColors.length; index++) {
      this.fillColors[index] = "white";
    }
  }

  clearReferencesImg(){
    for (let index = 0; index < this.references.length; index++) {
      this.references[index].display = "none";
      this.references[index].backgroundColor = "#3dcfb711";
    }
    
  }

  fillTheRightSvg(position:number){
    console.log(position);
    switch (position) {
      case 160: 
      this.clearFillColors();
      this.clearReferencesImg();
      this.fillColors[0] = "#3DCFB6"
      this.references[1].display = "flex";
      this.references[1].backgroundColor = "#3dcfb747";
      break;
      case 926:
        this.clearFillColors();
        this.clearReferencesImg();
        this.fillColors[1] = "#3DCFB6"
        this.references[2].display = "flex";
        this.references[2].backgroundColor = "#3dcfb747";
        break;
        case 1692:
        this.clearFillColors();
        this.clearReferencesImg();
        this.fillColors[2] = "#3DCFB6"
        this.references[3].display = "flex";
        this.references[3].backgroundColor = "#3dcfb747";
        break;
        case 2458:
        this.clearFillColors();
        this.clearReferencesImg();
        this.fillColors[3] = "#3DCFB6"
        this.references[4].display = "flex";
        this.references[4].backgroundColor = "#3dcfb747";
        break;
        case 3224:
        this.clearFillColors();
        this.clearReferencesImg();
        this.fillColors[4] = "#3DCFB6"
        this.references[5].display = "flex";
        this.references[5].backgroundColor = "#3dcfb747";
        break;
        case 3990:
        this.clearFillColors();
        this.clearReferencesImg();
        this.fillColors[5] = "#3DCFB6"
        this.references[6].display = "flex";
        this.references[6].backgroundColor = "#3dcfb747";
        break;
       
      default:
        
    }
  }

}

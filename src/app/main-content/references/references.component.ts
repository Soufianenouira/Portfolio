import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { GlobalFunctionsService } from '../../services/global-functions.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  global = inject(GlobalFunctionsService);
feedbacks :{name: string; feedback: string, ref: string}[][]= 
[

[
 
  {
    "name": "Mihaela Aghirculesei",
    "feedback": "Soufiane hat mit seinen starken Programmierkenntnissen und seiner strukturierten Arbeitsweise maßgeblich zum Erfolg unserer gemeinsamen Projekte beigetragen. Er versteht komplexe Aufgaben sehr schnell, findet praktische Lösungen und arbeitet hervorragend im Team. Seine Offenheit und sein Engagement machen ihn zu einem echten Gewinn für jedes Unternehmen.",
    "ref": "Vorgesetzte"
  },
  {
    "name": "Ha Dao",
    "feedback": "Die Zusammenarbeit mit Soufiane während unseres Gruppenprojekts an der Developer Akademie war eine großartige Erfahrung. Er ist ein äußerst kompetenter Programmierer mit einer stark lösungsorientierten Denkweise und geht selbst die komplexesten Probleme mit logischem Denken an, wobei er stets effektive Lösungen findet. Darüber hinaus ist er entspannt, witzig und ein wirklich sympathischer Mensch, der anderen immer gerne hilft, wenn sie feststecken. Seine Kombination aus technischer Stärke und Teamgeist macht ihn zu einer echten Bereicherung für jedes Projekt.",
    "ref": "Kollegin"
  },
  {
    "name": "Christian Duus",
    "feedback": "Soufiane hat immer wieder mit seiner Fähigkeit überzeugt, selbst in herausfordernden Situationen schnell effektive Lösungen zu finden. Er blieb auch unter Druck ruhig und ließ sich von Rückschlägen nicht aus der Bahn werfen. Mit solidem technischem Wissen und klarer Zielorientierung hatte er stets einen Plan und brachte wertvolle Struktur in den Workflow des Teams.",
    "ref": "Projektmanager"
  },
  {
    "name": "Marvin Schneemann",
    "feedback": "Ich hatte die Gelegenheit, mit Soufiane am Join-Projekt zu arbeiten, und war durchweg beeindruckt von seinen Fähigkeiten. Er ist nicht nur ein äußerst talentierter Entwickler, sondern auch unglaublich schnell und effizient in der Umsetzung. Seine Zuverlässigkeit, technische Expertise und sein sauberer Programmierstil machen ihn zu einem echten Gewinn für jedes Team. Soufiane ist proaktiv, bringt wertvolle Ideen ein und bleibt auch unter Druck fokussiert und lösungsorientiert. Die Zusammenarbeit mit ihm war stets produktiv, angenehm und inspirierend. Ich kann Soufiane sowohl fachlich als auch menschlich uneingeschränkt empfehlen.",
    "ref": "Kollege"
  },
  {
    "name": "Patrick Frey",
    "feedback": "Soufiane hat viele Aspekte des Projekts selbstständig und mit großer Begeisterung umgesetzt, dabei war er stets offen für Austausch und neue Perspektiven. Besonders geschätzt habe ich seine hilfsbereite Art – er hat Fragen und gemeinsame Herausforderungen stets mit offenem Geist und klarem Fokus angegangen. Die Zusammenarbeit mit ihm war nicht nur fachlich bereichernd, sondern auch persönlich sehr angenehm.",
    "ref": "Softwareentwickler"
  }
],  
[
  {
  name: ' Mihaela Aghirculesei',
  feedback: 'Soufiane made a significant contribution to the success of our joint projects with his strong programming skills and structured approach. He quickly understands complex tasks, finds practical solutions, and works excellently in a team. His openness and dedication make him a real asset to any company',
  ref: 'Boss'
},
{
  name: 'Ha Dao',
  feedback: 'Working with Soufiane during our group project at Developer Akademie was a great experience. He is a highly skilled programmer with a strong solution-oriented mindset and always approaches even the most complex problems with logical thinking, consistently finding effective solutions. On top of that, he’s a relaxed, funny, and genuinely likeable person who’s always happy to help others when they’re stuck. His combination of technical strength and team spirit makes him a great asset to any project',
  ref: 'employee'
},
{ feedback: "Soufiane consistently impressed with his ability to quickly find effective solutions, even in challenging situations. He remained calm under pressure and never let setbacks throw him off course. With solid technical knowledge and a clear sense of direction, he always had a plan for moving forward and brought valuable structure to the team’s workflow.",
   name: "Christian Duus",
    ref: "Project Manager"
   },
{
  name: 'Marvin Schneemann',
  feedback: 'I had the opportunity to work with Soufiane on the Join project, and I was consistently impressed by his skills. He is not only a highly talented developer but also incredibly fast and efficient in execution. His reliability, technical expertise, and clean coding style make him a true asset to any team. Soufiane is proactive, contributes valuable ideas, and remains focused and solution-oriented even under pressure. Working with him was always productive, pleasant, and inspiring.I can fully recommend Soufiane – both professionally and personally, he’s a great addition to any team.',
  ref: 'putzfrau'
},
{ feedback: "Soufiane independently and enthusiastically implemented many aspects of the project, while always remaining open to exchange and new perspectives. I particularly appreciated his helpful nature – he consistently approached questions and shared challenges with an open mind and clear focus. Collaborating with him was not only professionally enriching but also personally very pleasant.",
   name: "Patrick Frey",
    ref: "Software Engineer"
   }
]
  
];
currentOffset = 0;

middleIndex = 2; 


slideLeft() {
  if(this.middleIndex < this.feedbacks[0].length -1){
    this.middleIndex++;
  }else{this. middleIndex = this.middleIndex}  
  this.shiftCards('right');
  
}

slideRight() {
  if (this.middleIndex != 0) {
    this.middleIndex--; 
  }else{
    this.middleIndex = 0
  }
  this.shiftCards('left'); 
}

shiftCards(direction: string) {
  const feedbackCards = document.querySelectorAll('.feedback-card');
  if (direction === 'left') {
    this.currentOffset += 100; 
  } else if (direction === 'right') {
    this.currentOffset -= 100; 
  }
  if(this.currentOffset > 200){
    this.currentOffset = 200;
  }if(this.currentOffset < -200){
    this.currentOffset= -200
  }
  feedbackCards.forEach((card: any, index:number) => {
    let isActive:boolean = index === this.middleIndex;
    card.style.transform = `translateX(${this.currentOffset}%) scale(${isActive ? 1.1 : 0.8})` ;
    
  });
}
getCardClass(index: number): string {
  if (index < this.middleIndex) return 'left feedback-card';
  if (index > this.middleIndex) return 'right feedback-card';
  return 'feedback-card';
}



}
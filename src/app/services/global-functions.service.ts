import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {

  constructor() { }

  texte = 
[
  {
    "about": "Über mich",
    "skills": "Fähigkeiten",
    "projects": "Projekte",
    "FrontendDeveloper": "Frontend Entwickler",
    "checkMyWork": "meine Arbeiten",
    "contactMe": "Kontaktiere mich",
    "basedIn": "Ansässig in Frankfurt am Main",
    "open": "offen für neue Stellen",
    "avialable": "Verfügbar für Remote-Arbeit",
    "whoIAm": "Wer ich bin",
    "technologies": "Technologien",
    "skillSet": "skills",
    "youNeed": "Du benötigst",
    "anotherSkill": "Noch eine Fähigkeit?",
    "letsTalk": "Lass uns sprechen",
    "featuredProjects": "Ausgewählte Projekte",
    "explore": "Entdecke eine Auswahl meiner Arbeiten hier - Interagiere mit den Projekten, um meine Fähigkeiten in Aktion zu sehen",
    "colleagues": "Was meine Kollegen über mich sagen",
    "whatsYourName": "Wie heißt du?",
    "email": "Wie lautet deine E-Mail?",
    "subject": "Wie kann ich dir weiterhelfen?",
    "yourName": "Dein Name?",
    "yourEmail": "Deine E-Mail?",
    "yourMessage": "Deine Nachricht",
    "letsWorkT": "Lass uns zusammen arbeiten",
    "gotAProblem": "Hast du ein Problem zu lösen?"
},
  {
    "about": "About me",
    "skills": "Skills",
    "projects": "Projects",
    "FrontendDeveloper": "Frontend Developer",
    "checkMyWork": "check my work",
    "contactMe": "Contact me",
    "basedIn": "Based in Franfurt am Main",
    "open": " Open to work",
    "avialable": "Available for remote work",
    "whoIAm": "Who I Am",
    "technologies": "Technologies",
    "skillSet": "Skill Set",
    "youNeed": "You need",
    "anotherSkill": "another skill?",
    "letsTalk": "Let's Talk",
    "featuredProjects": "Featured Projects",
    "explore": "Explore a selection of my work here - Interact with projects to see my skills in action",
    "colleagues": "What my colleagues say about me",
    "whatsYourName": "What's your name?",
    "email": "What's your e-mail?",
    "subject": "How can I help you?",
    "yourName": "Your Name",
    "yourEmail": "Your E-mail",
    "yourMessage": "Your Message",
    "letsWorkT" : "Let's work together",
    "gotAProblem": "Got a problem to solve?"
  }
  
];

impressumEN = `
   <h1>Imprint</h1>

    <p><strong>Information in accordance with Section 5 TMG:</strong></p>
    <p><strong>Soufiane Nouira</strong><br>
    Schönbornstraße 39<br>
    60431 Frankfurt am Main<br>
    Germany</p>

    <p><strong>Contact:</strong><br>
    Phone: <a href="tel:+49-176-64926060">+49 176 64926060</a><br>
    E-Mail: <a href="mailto:kontakt@soufiane-nouira.de">kontakt@soufiane-nouira.de</a></p>

    <h2>Disclaimer</h2>
    <p>The contents of this website were created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the information provided. As a service provider, we are responsible for our own content on these pages according to general laws under Section 7, Paragraph 1 TMG. However, according to Sections 8 to 10 TMG, we are not obligated to monitor transmitted or stored external information or to investigate circumstances that indicate unlawful activity.</p>

    <p><strong>Liability for Links:</strong><br>
    Our website contains links to external websites of third parties, over whose content we have no influence. Therefore, we cannot accept any responsibility for the content of these external websites. The respective provider or operator of the linked pages is always responsible for the content of the linked pages.</p>

`;

impressumDE = `
<h1>Impressum</h1>
    
        <p><strong>Angaben gemäß § 5 TMG:</strong></p>
        <p><strong>Soufiane Nouira</strong><br>
        Schönbornstraße 39<br>
        60431 Frankfurt am Main<br>
        Deutschland</p>
    
        <p><strong>Kontakt:</strong><br>
        Telefon: <a href="tel:+49-176-64926060">+49 176 64926060</a><br>
        E-Mail: <a href="mailto:kontakt@soufiane-nouira.de">kontakt&#64;soufiane-nouira.de</a></p>
    
        <h2>Haftungsausschluss</h2>
        <p>Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Dennoch übernehmen wir keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Als Dienstanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
    
        <p><strong>Haftung für Links:</strong><br>
        Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
`;

impressum = `
<h1>Impressum</h1>
    
        <p><strong>Angaben gemäß § 5 TMG:</strong></p>
        <p><strong>Soufiane Nouira</strong><br>
        Schönbornstraße 39<br>
        60431 Frankfurt am Main<br>
        Deutschland</p>
    
        <p><strong>Kontakt:</strong><br>
        Telefon: <a href="tel:+49-176-64926060">+49 176 64926060</a><br>
        E-Mail: <a href="mailto:kontakt@soufiane-nouira.de">kontakt&#64;soufiane-nouira.de</a></p>
    
        <h2>Haftungsausschluss</h2>
        <p>Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Dennoch übernehmen wir keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Als Dienstanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
    
        <p><strong>Haftung für Links:</strong><br>
        Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
`;
language = 0;
languageImg = "./../../../../assets/img/en_de.png";
DeEn(){
  if(this.language == 0){
    this.language = 1;
    this.languageImg = "./../../../../assets/img/de_en.png";
    this.impressum = this.impressumEN;
  }else{
    this.language = 0;
    this.languageImg = "./../../../../assets/img/en_de.png";
    this.impressum = this.impressumDE;
  }
}
}

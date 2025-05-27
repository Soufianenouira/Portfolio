import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {

  constructor() { }
  menuDisplay: string = 'none';
  texte = 
[
  {
  "about": "Über mich",
  "heyThere": "Hallo, ich bin Soufiane! Als Frontend-Entwickler konzentriere ich mich auf die Gestaltung klarer, benutzerfreundlicher Interfaces unter Verwendung moderner Webtechnologien wie Angular, JavaScript, HTML und CSS. Ich arbeite gerne an kreativen Lösungen mit technischer Tiefe – stets mit Blick auf Design und Performance. Darüber hinaus bringe ich Erfahrung mit C, C++, C# und Verilog mit, was mein technisches Verständnis und meine Vielseitigkeit als Entwickler stärkt.",
  "located": "Ich lebe in Frankfurt am Main und arbeite sowohl vor Ort als auch remote effizient. Auch hybride Arbeitsmodelle sind möglich.",
  "openMinded": "Ich bin sehr lernfreudig und suche kontinuierlich nach Möglichkeiten, mein Wissen und meine Fähigkeiten zu erweitern. Ob in privaten oder beruflichen Projekten – ich fordere mich aktiv heraus, bleibe neugierig und offen für neue Technologien und Ideen.",
  "brief": "Bei der Lösung von Problemen verbinde ich analytisches Denken mit Kreativität, um effektive und elegante Lösungen zu entwickeln. Jede Herausforderung sehe ich als Chance, meine Fähigkeiten zu verfeinern und mein Wissen zu erweitern. Mit Ausdauer arbeite ich methodisch an der Lösung von Problemen und schätze Zusammenarbeit, da die besten Ergebnisse oft aus gemeinsamen Ideen und vielfältigen Perspektiven entstehen.",
  "skills": "Fähigkeiten",
  "introduction": "Umfassende Expertise in der modernen Frontend-Entwicklung, gestützt durch ein starkes technisches Fundament und Erfahrung mit Low-Level-Programmiersprachen. Dieses tiefgehende Verständnis für systemnahe Abläufe ermöglicht die Umsetzung effizienter und leistungsstarker Lösungen – auch bei komplexen Anforderungen. Eine hohe Lernbereitschaft sowie die Fähigkeit, sich schnell auf neue Technologien und Frameworks einzustellen, gewährleisten Flexibilität in einem sich ständig weiterentwickelnden Umfeld. Die regelmäßige Auseinandersetzung mit aktuellen Trends und Innovationen in der Webentwicklung ist ein fester Bestandteil der Arbeitsweise und sorgt dafür, dass alle Lösungen modern, nachhaltig und zukunftssicher sind.",
  "feel": "Melden Sie sich gerne. Ich freue mich darauf, mein Wissen weiter auszubauen.",
  "projects": "Projekte",
  "FrontendDeveloper": "Frontend-Entwickler",
  "checkMyWork": "Meine Projekte",
  "contactMe": "Mein Kontakt",
  "basedIn": "Ansässig in Frankfurt am Main",
  "open": "Offen für neue Herausforderungen",
  "avialable": "Verfügbar für Remote-Arbeit",
  "whoIAm": "Wer ich bin",
  "technologies": "Technologien",
  "skillSet": "Kompetenzen",
  "youNeed": "Du suchst",
  "anotherSkill": "eine andere Fähigkeit?",
  "letsTalk": "Lass uns sprechen",
  "featuredProjects": "Ausgewählte Projekte",
  "explore": "Entdecke hier eine Auswahl meiner Arbeiten – interagiere mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.",
  "colleagues": "Was Kollegen über mich sagen",
  "whatsYourName": "Wie ist dein Name?",
  "email": "Wie lautet deine E-Mail-Adresse?",
  "subject": "Wobei kann ich helfen?",
  "yourName": "Dein Name",
  "yourEmail": "Deine E-Mail-Adresse",
  "yourMessage": "Deine Nachricht",
  "letsWorkT": "Lass uns zusammen arbeiten",
  "gotAProblem": "Ein Problem zu lösen?",
  "joinDescription": "Ein Aufgabenmanager, inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop und weise Benutzern sowie Kategorien zu.",
  "elPolloLoccoDescription": "Ein Jump-'n'-Run-Spiel mit objektorientierter Programmierung. Hilf Pepe, Münzen und Tabasco-Sauce zu sammeln, um gegen das verrückte Huhn zu kämpfen.",
  "PokedexDescription": "Dieses Pokédex basiert auf der PokéAPI. Suche nach deinem Lieblingspokémon und entdecke alle wichtigen Informationen darüber.",
  "whatIs": "Worum geht es in diesem Projekt?",
  "nextProject": "Nächstes Projekt"
}
,
  {
    "about": "About me",
    "heyThere": `Hey there, I'm Soufiane! As a Frontend Engineer, I focus on creating clear, user-friendly interfaces using modern web technologies such as Angular, JavaScript, HTML, and CSS.
                    I enjoy working on creative solutions with technical depth, always keeping both design and performance in mind.
                    Additionally, I bring experience in C, C++, C#, and Verilog, which enhances my technical understanding and versatility as a developer.`,
    "located": `Located in Frankfurt am Main, I can work effectively both on-site and remotely. Hybrid models that combine office and remote work are also possible`,
    "openMinded": `I am highly eager to learn and continuously seek opportunities to expand my knowledge and skills. Whether in personal or professional projects, I actively challenge myself to grow, stay curious, and embrace new technologies and ideas`,
    "brief": `When approaching a problem, I combine analytical thinking with creativity to explore effective and elegant solutions.
                    I see each challenge as a learning opportunity, refining my skills and expanding my knowledge along the way.
                    With persistence, I work through obstacles methodically, and I value collaboration—believing that the best results often come from shared ideas and diverse perspectives.`,
    "skills": "Skills",
    "introduction": `Comprehensive expertise in modern front-end development, supported by a strong technical foundation that includes experience with low-level programming languages. This deep understanding of system-level processes enables the development of efficient and high-performance solutions, even for complex requirements. A strong willingness to learn and the ability to quickly adapt to new technologies and frameworks ensure flexibility in a rapidly evolving landscape. Staying up to date with current trends and innovations in web development is an integral part of the workflow, ensuring that all solutions are modern, sustainable, and future-ready.`,
    "feel": "Feel free to contact me. I look forward to expanding on my previous knowledge.",
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
    "gotAProblem": "Got a problem to solve?",
    "joinDescription":"Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    "elPolloLoccoDescription":"Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
    "PokedexDescription":"This Pokédex is powered by the PokéAPI. Search for your favorite Pokémon and discover detailed information about each one.",
    "whatIs": "What is this project about?",
    "nextProject": "Next project"
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
language = localStorage.getItem('language')? Number(localStorage.getItem('language')) : 0;
languageImg = this.language == 0 ? "./../../../../assets/img/de_en.png" : "./../../../../assets/img/en_de.png";
DeEn(){
  if(this.language == 0){
    this.language = 1;
    localStorage.setItem('language', '1');
    this.languageImg = "./../../../../assets/img/en_de.png";
    this.impressum = this.impressumEN;
  }else{
    this.language = 0;
    localStorage.setItem('language', '0');
    this.languageImg = "./../../../../assets/img/de_en.png";
    this.impressum = this.impressumDE;
  }
}

openMenu(){
    if(this.menuDisplay == 'none'){
      this.menuDisplay = 'flex';
    } else{
      this.menuDisplay = 'none';
    }
  }

  closeMenu(){
    if(this.menuDisplay == 'flex'){
      this.menuDisplay = 'none';
    }
  }
}

import moduleFederationImage from "./images/thumb/moduleFederationImage.png";
import rabbitImage from "./images/thumb/rabbit.png";
import graphqlImage from "./images/thumb/graphql.png";
import anotherifImage from "./images/thumb/anotherif.png";
import anotherifImageBig from "./images/solo-un-altro-if.png";
import nextEventImage from "./images/thumb/3-150x150.png";
import rabbitImageFull from "./images/Applicazioni-piu-semplici-robuste-e-performanti-con-RabbitMQ-min.png";
import searchEngine from "./images/building-a-full-text-search-engine-from-scratch-in-typescript.png";
import fontendApps from "./images/rendere-applicazioni-front-end-scalabitli.png";
import graphqlImageBig from "./images/graphql-2014-min.png";
import christmasBeer from "./images/christmas-beer-firenze-dev.png";
import christmasBeerThumb from "./images/thumb/christmas-beer-firenze-dev.webp";
import devExpThumb from "./images/thumb/evento_devex-150x150.png";
import devExp from "./images/evento_devex.png";
import monolite from "./images/dal-monolite-ai-microservizi.png";
import monoliteThumb from "./images/thumb/dal-monolite-ai-microservizi.png";
import meetUpCodemotion from "./images/meet-up-codemotion-05-2023.png";
import meetUpCodemotionThumb from "./images/thumb/meet-up-codemotion-05-2023-thumb.png";
import summerBeer from "./images/EventBrite_summer.png";
import summerBeerThumb from "./images/thumb/summer-beer-thumb-150x150.png";
import blockchain101Thumb from "./images/thumb/blockchain101-thumb.webp";
import blockchain101 from "./images/blockchain101.webp";
import { EventType } from "./EventService";
import dayjs from "dayjs";

export const events: EventType[] = [
  {
    title: "Blockchain 101, from zero to developer",
    subtitle:
      "Un percorso alla scoperta della blockchain, per comprenderne il funzionamento e le potenzialità",
    icon: blockchain101Thumb,
    image: blockchain101,
    abstract: `Hai sempre considerato la blockchain un mistero insondabile? Sei ancora incerto sugli ambiti in cui può essere applicata? È ora di svelare i segreti di questa tecnologia rivoluzionaria!

Dalla crittografia all' utilizzo dei wallet, dagli smart contract agli NFT, in questo evento Lorenzo Spinelli e Tiziano Pessa ci mostreranno gli aspetti tecnici che ogni programmatore deve conoscere per capire questa tecnologia e sviluppare applicazioni decentralizzate su blockchain.
    
Non preoccuparti se è la prima volta che ti avvicini a questo argomento, saranno affrontati in modo chiaro e semplice tutti gli aspetti essenziali, per consentire anche a chi non conosce questa tecnologia, non solo di seguire il talk, ma anche di iniziare a svilupparci fin da subito.`,
    current: true,
    date: dayjs("2023-10-12 18:30").toDate(),
    sponsor: "",
    place: "Frame School",
    address: "via di Scandicci 88, Firenze, FI",
    eventbriteId: "719618035917",
    eventbriteLink:"https://www.eventbrite.it/e/biglietti-blockchain-101-from-zero-to-developer-719618035917",
  },
  {
    title: "Summer Beer Meetup",
    subtitle:
      "L'estate è finalmente alle porte, cosa c'è di meglio che condividere una birra fresca in compagnia?",
    icon: summerBeerThumb,
    image: summerBeer,
    abstract: `L'estate è finalmente alle porte, cosa c'è di meglio che condividere una birra fresca in compagnia?
    Ci piacerebbe approfittare dell' occasione per scambiare qualche chiacchiera informale e darvi la possibilità di suggerire gli argomenti che vi piacerebbe trattare nei prossimi eventi che organizzeremo.
    Puoi portare con te chi vuoi, per partecipare è sufficiente prenotare un biglietto gratuito per ogni persona, così che possiamo riservare un posto per tutti! 
    Ti aspettiamo!`,
    current: true,
    date: dayjs("2023-06-08 21:30").toDate(),
    sponsor: "",
    place: "Fabbrica in Pedavena",
    address: "Via Generale C. A. dalla Chiesa, 1, 50136 Firenze FI",
    eventbriteId: "646533919357",
    eventbriteLink:"https://www.eventbrite.it/e/biglietti-summer-beer-meetup-646533919357",
  },
  {
    title: "Dev Florence Meetup",
    subtitle:
      "La community di developer fiorentina si ritrova a Firenze presso Impact Hub il 24 maggio 2023 per un meetup organizzato da Codemotion, Firenze.dev, Full Stack Florence e Schrodinger Hat",
    icon: meetUpCodemotionThumb,
    image: meetUpCodemotion,
    abstract: `
Ecco gli interventi della serata:
    
Un viaggio alla scoperta di Three.js
Sei appassionat* di videogiochi o semplicemente di animazioni grafiche? 
Allora la libreria Three.js è lo strumento che fa per te! Insieme esploreremo questo mondo virtuale, 
scopriremo le sue funzioni principali e vedremo quali applicazioni possiamo mettere in pratica per dare sfogo alla nostra creatività nel fantastico mondo della grafica 3D.

Schrodinger Hat - Angela Busato
    
WebGPU, a new dawn for web graphics
WebGPU è una tecnologia emergente che mira a fornire un'API grafica a basso livello per il web, simile a DirectX e Vulkan. 
In questo talk verrà fornita un'introduzione all'API WebGPU, i suoi vantaggi, e come iniziare a utilizzarlo. Discuteremo le prestazioni e la portabilità su diverse piattaforme, 
e mostreremo alcuni esempi di applicazioni WebGPU. Se sei un sviluppatore web interessato a costruire applicazioni grafiche avanzate, 
o un appassionato di GPU alla ricerca delle ultime tendenze in tecnologia grafica, questo talk fa al caso tuo.

Full Stack Florence - Andrea Gherardi, Chief Technical Officer @ Mirror
   
Real world GraphQL subscriptions
Le subscription sono una delle feature più interessanti di GraphQL perché permettono di ricevere dati dal server verso il client in tempo reale, 
ma ci sono alcuni aspetti importanti da considerare per poterle utilizzare: come si gestiscono le sessioni persistenti? di quali componenti aggiuntivi avremo bisogno? come funzionano l'autenticazione e l'uso della cache? 
In questo talk vedremo quali accorgimenti dobbiamo usare quando si usano le subscription in un vero ambiente di produzione, elencheremo gli errori più comuni nei quali possiamo incorrere e valuteremo in quali casi conviene utilizzarle per sfruttare al meglio le loro potenzialità.

Firenze.dev - Tiziano Pessa, Co-founder @ firenze.dev
   `,
    current: true,
    date: dayjs("2023-05-24 18:30").toDate(),
    sponsor: "Codemotion",
    place: "Impact Hub - Firenze",
    address: "Via Panciatichi, 16, 50141 Firenze FI",
    externalLink:"https://docs.google.com/forms/d/1xL0EKFvb4jpXfwFU47qSlqBPgZmdtwZa4BOQSqtZEnc/viewform?edit_requested=true#responses",
  },
  {
    title: "Dal monolite ai microservizi, una storia vera",
    subtitle:
      "Approcciare il cambiamento e le sue sfide in un sistema business critical di una grande realtà internazionale",
    icon: monoliteThumb,
    image: monolite,
    abstract: `A chi non è capitato di dover mettere in produzione un&apos;applicazione critica per sistemare un piccolo bug, con il rischio di bloccare tutta la produzione? E chi di noi non ha un&apos;applicazione che consuma moltissime risorse, ma ne sfrutta solo una piccola parte?

Forse è il momento giusto per passare ai microservizi! In questo talk, Luca Lorenzon, senior software engineer di Gucci, ci racconterà il percorso per trasformare un monolite in un&apos;architettura a microservizi scalabile e flessibile. Non sarà solo una storia di successo, ma vedremo tutti i retroscena di un progetto con vari step di complessità.
    
Scopriremo come è stato gestito il cambiamento e come una grande realtà internazionale ha affrontato l&apos;adattamento a queste nuove tecnologie, in un contesto di business altamente sfidante.`,
    current: true,
    date: dayjs("2023-04-20 18:30").toDate(),
    sponsor: "Gucci",
    place: "Gucci ArtLab",
    address: "via delle nazioni unite 1, Scandicci, 50018",
    eventbriteId: "593998735207",
    eventbriteLink:
      "https://www.eventbrite.it/e/biglietti-dal-monolite-ai-microservizi-una-storia-vera-593998735207",
  },
  {
    title: "La Developer Experience nelle Big Tech",
    subtitle:
      "Cosa dovresti sapere per lavorare in una grande azienda internazionale",
    icon: devExpThumb,
    image: devExp,
    abstract: `Ogni developer ha pensato almeno una volta nella propria carriera a come sarebbe lavorare per una Big Company, su un progetto figo e in un contesto internazionale, con tecnologie all'avanguardia e modalità di lavoro innovative.

Ma come si vive davvero all'interno di queste realtà e come ci si può orientare in una Big Company?
    
La Developer Experience è un elemento chiave in queste grandi aziende: ma cos'è in concreto?
    
Può davvero migliorare le modalità e la qualità del lavoro degli sviluppatori?
    
E possiamo applicarla anche in realtà più piccole?
    
Di tutto questo ci parlerà [Francesco Corti](https://www.linkedin.com/in/fcorti/), speaker e autore di libri su temi IT, che partendo dalle sue esperienze come Developer Advocate e Product Manager in aziende come Alfresco e Spotify, ci spiegherà come viene affrontato lo sviluppo software nelle grandi aziende internazionali e cosa è importante sapere per poter lavorare in una Big Tech.
    
Vedremo cosa sono e come vengono applicati i modelli di riferimento e andremo alla scoperta di modalità di lavoro e tecnologie differenti, allo scopo di diventare degli sviiluppatori migliori e più felici.
    
Dopo il talk ci sarà il consueto aperitivo di networking.`,
    current: true,
    date: dayjs("2023-03-02 18:30").toDate(),
    sponsor: undefined,
    place: "Camplus Firenze",
    address: "via del Romito 5-7, 50134, Firenze",
    eventbriteId: "532054077067",
    eventbriteLink:
      "https://www.eventbrite.com/e/biglietti-la-developer-experience-nelle-big-tech-532054077067",
  },

  {
    title: "Christmas beer",
    subtitle:
      "Brindiamo al primo anno di firenze.dev e discutiamo delle prossime attività",
    icon: christmasBeerThumb,
    image: christmasBeer,
    abstract: `Un evento informale per celebrare il primo anno di firenze.dev, ma anche per conoscerci meglio, bere una birra insieme e gettare uno sguardo al futuro della community.

Niente speaker, niente talk, solo un gruppo di amici che si incontrano davanti a un bicchiere di birra per parlare di cosa ci piacerebbe fare nell'anno che sta per iniziare e raccontarci le nostre aspettative sulle attività della community per il 2023.
    
La serata è aperta a tutti i membri della community di firenze.dev e si svolgerà presso la Manifattura Tabacchi, in via delle Cascine 35 a Firenze. Ci ritroveremo a partire dalle 21.30, avremo un tavolo riservato, quindi è richiesta la prenotazione del biglietto per poterci organizzare meglio.`,
    current: true,
    date: dayjs("2022-12-15 21:30").toDate(),
    sponsor: undefined,
    place: "Manifattura Tabacchi",
    address: "Manifattura Tabacchi, Via delle Cascine 35, 50144 Firenze",
    eventbriteId: "482058017507",
    eventbriteLink:
      "https://www.eventbrite.it/e/biglietti-christmas-beer-482058017507",
  },
  {
    title: "Building a full-text search engine from scratch in TypeScript",
    subtitle:
      "In questo nuovo evento della community di firenze.dev, Michele Riva ci mostrerà come costruire da zero un motore di ricerca full-text.",
    icon: nextEventImage,
    image: searchEngine,
    abstract: `In questo nuovo evento della community di firenze.dev, [Michele Riva](https://twitter.com/MicheleRivaCode), Staff Engineer @ NearForm, autore e speaker di fama internazionale oltre che Google Developer Expert e Microsoft MVP, ci mostrerà come costruire da zero un motore di ricerca full-text RESTful, spiegandoci quali siano gli algoritmi e le strutture dati più adatti per questo tipo di applicazioni.
  
  
  Vedremo come mantenere prestazioni incredibilmente elevate pur lavorando con un'enorme quantità di dati e capiremo perché è così importante scegliere i giusti algoritmi e le strutture dati più adeguate per questo tipo di sistemi.
  
  Dopo il talk ci sarà il consueto aperitivo di networking.`,
    current: false,
    date: dayjs("2022-11-30 18:30").toDate(),
    sponsor: "Extendi",
    place: "Le Murate",
    address: "Piazza Madonna della Neve 50122 Firenze",
    eventbriteId: "462656256317",
    eventbriteLink:
      "https://www.eventbrite.it/e/biglietti-building-a-full-text-search-engine-from-scratch-in-typescript-462656256317",
  },
  {
    title: "Rendere scalabili le moderne applicazioni di front-end",
    subtitle:
      "Scopriremo tecniche e tool per far evolvere le nostre applicazioni di front-end, da una semplice Single Page Application fino a utilizzare la Module Federation.",
    icon: moduleFederationImage,
    image: fontendApps,
    abstract: `Come superare le nuove sfide che ci pone lo sviluppo di applicazioni front-end, quali ad esempio performance, SEO e dinamicità?
      
  Partendo da una piccola app, fino ad arrivare a progetti più grandi con la Module Federation, ti forniremo dei consigli su come orientarti tra la mole di informazioni disponibili sul web.
      
  Ti aiuteremo ad identificare i giusti tools, i frameworks e le librerie per far scalare il tuo applicativo.
      
  Tutto questo riportando la nostra esperienza nello sviluppo in React di applicazioni web e native.`,
    date: dayjs("2022-10-25 18:30").toDate(),
    sponsor: "Extendi",
    place: "Le Murate",
    address: "Piazza Madonna della Neve 50122 Firenze",
    eventbriteId: "430942198717",
    eventbriteLink:
      "https://www.eventbrite.it/e/biglietti-rendere-scalabili-le-moderne-applicazioni-di-front-end-430942198717",
  },
  {
    title: "Applicazioni più semplici, robuste e performanti con RabbitMQ",
    subtitle:
      "L'evento di firenze.dev per imparare come utilizzare RabbitMQ per semplificare l'architettura dei sistemi e renderli scalabili.",
    icon: rabbitImage,
    image: rabbitImageFull,
    abstract: `Il tuo nuovissimo servizio in Go non riesce a comunicare con la tua vecchia applicazione Java? Nei tuoi servizi una singola feature si trasforma in un ingestibile groviglio di chiamate? E cosa succede quando una di queste chiamate fallisce? Come è possibile gestire gli errori in un sistema distribuito?
  
A queste e ad altre domande risponderà per noi [Gabriele Santomaggio](https://twitter.com/gsantomaggio), Staff Software Engineer nel RabbitMQ team in VMware, speaker e autore di libri e articoli di tecnologia.
  
Vedremo insieme come RabbitMQ risolve questi problemi, ma anche come sia possibile sfruttarlo per semplificare l'architettura dei nostri sistemi e in che modo si possano affrontare i temi della scalabilità e della sicurezza nella gestione dei flussi di dati.
  
Dopo il talk ci sarà il consueto aperitivo di networking, offerto da Register.it.`,
    sponsor: "Register.it",
    place: "Register.it",
    address: "Viale della giovine Italia 17, 50122 Firenze",
    eventbriteId: "347290865327",
    eventbriteLink:
      "https://www.eventbrite.it/e/biglietti-applicazioni-piu-semplici-robuste-e-performanti-con-rabbitmq-347290865327",
    date: dayjs("2022-06-17 18:30").toDate(),
  },
  {
    title: "Next level API con GraphQL",
    subtitle:
      "Cos'è GraphQL, quali sono i suoi vantaggi, come utilizzarlo al meglio e quali sono le cose da evitare assolutamente.",
    icon: graphqlImage,
    image: graphqlImageBig,
    abstract: `Si sente dire in giro che con GraphQL si possono creare API performanti, scalabili e flessibili, che se non lo usi sei un dinosauro e che adesso il REST non serve più.
  
  Noi, dopo anni che lo utilizziamo in produzione, abbiamo imparato a sfruttarne le potenzialità e ad affrontare le sfide che questa tecnologica ci pone
  
  In questo talk vedremo che cos'è GraphQL, quali sono i suoi vantaggi, come utilizzarlo al meglio e quali sono le cose da evitare assolutamente.
      
  Oltre a imparare i concetti di base, affronteremo alcuni scenari più avanzati e concluderemo l'incontro con una sessione interattiva in cui potrete porre agli speaker qualsiasi domanda sull'argomento (anche quelle più scomode!).
      
  Dopo il talk ci sarà il consueto aperitivo di networking, offerto da Register.it.`,
    sponsor: "Register.it",
    place: "Register.it",
    address: "Viale della giovine Italia 17, 50122 Firenze",
    eventbriteId: "324349707707",
    eventbriteLink:
      "https://www.eventbrite.it/e/biglietti-next-level-api-con-graphql-324349707707",
    date: dayjs("2022-05-11 18:30").toDate(),
  },
  {
    title: "È solo un altro IF",
    subtitle: "Come scrivere codice migliore nella metà del tempo",
    icon: anotherifImage,
    image: anotherifImageBig,
    abstract: `Ti è mai capitato che la cosa più veloce sul momento si sia rivelata un boomerang a lungo termine, facendoti perdere talmente tanto tempo da farti maledire il giorno in cui hai deciso di fare lo sviluppatore?
  
  È successo anche a noi, ma con l'esperienza abbiamo imparato che basta applicare alcune semplici regole per scrivere un codice migliore e più manutenibile. E vogliamo condividerle con te.
      
  Dopo il talk ci sarà il consueto aperitivo di networking, offerto da Register.it.`,
    sponsor: "Register.it",
    place: "Register.it",
    address: "Viale della giovine Italia 17, 50122 Firenze",
    eventbriteId: "204947703097",
    eventbriteLink:
      "https://www.eventbrite.it/e/biglietti-e-solo-un-altro-if-204947703097",
    date: dayjs("2021-12-01 18:30").toDate(),
  },
];

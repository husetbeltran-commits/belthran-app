import { Song, Prayer, Article, BibleVerse } from '../types';

export const SONGS: Song[] = [
  {
    id: '1',
    title: 'O Store Gud',
    lyrics: `O store Gud, när jag den värld beskådar
Som du har skapat med ditt allmaktsord
Hur där din visdom väver livets trådar
Och alla väsen mättas vid ditt bord

Då brister själen ut i lovsångs ljud:
O store Gud, o store Gud!
Då brister själen ut i lovsångs ljud:
O store Gud, o store Gud!

När sommarvinden susar över fälten
När blommor dofta invid källans rand
När trastar drilla i de gröna tälten
Vid furuskogens tysta, dunkla rand

Då brister själen ut i lovsångs ljud:
O store Gud, o store Gud!`,
    categories: ['Lovsång', 'Hymn'],
    tags: ['Klassisk', 'Natur'],
    createdAt: '2023-01-01T08:30:00Z',
    featured: true,
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop' // Nature/Forest
  },
  {
    id: '2',
    title: 'Tio tusen skäl',
    lyrics: `Sjung min själ till Herren
Sjung min själ
Sjung ut Hans heliga namn
Sjung som aldrig förr
Sjung min själ
Sjung ut Hans heliga namn

Solen går upp, det är en ny dag
Det är dags att sjunga igen
Vad som än händer och vad som än väntar
Låt mig få sjunga när kvällen når sitt slut`,
    categories: ['Lovsång', 'Modern'],
    tags: ['Matt Redman', 'Översättning'],
    createdAt: '2023-05-15T12:00:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9d869?q=80&w=600&auto=format&fit=crop' // Sunrise/Sky
  },
  {
    id: '3',
    title: 'Hörnsten',
    lyrics: `Mitt hopp är byggt på Kristus
Hans blod och Hans rättfärdighet
Jag vågar inte tro på nåt annat
Än Jesu namn och helighet

Kristus är min fasta grund
En klippa i en orolig stund
Allt annat är som sand
Allt annat är som sand`,
    categories: ['Lovsång', 'Ungdomsmöte'],
    tags: ['Hillsong', 'Tillit'],
    createdAt: '2023-08-20T18:15:00Z',
    pinned: true,
    imageUrl: 'https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?q=80&w=600&auto=format&fit=crop' // Stone/Texture
  }
];

export const PRAYERS: Prayer[] = [
  {
    id: '1',
    title: 'The Bridge',
    body: `## Arrival

Find a comfortable position.  
Let your body become still, while your mind remains awake.

This is not something to perform or solve.  
It is a space to see and orient.

For the next minutes, allow yourself to follow the images that arise.  
Nothing needs to be forced.

*Pause.*

---

## Settling

Begin by noticing your breathing.  
Inhale gently.  
Exhale fully.

*Pause.*

Let each breath slow you down a little more.  
Your shoulders soften.  
Your face relaxes.

*Pause.*

Your attention turns inward.  
Calm.  
Clear.  
Present.

---

## The Overview

Now imagine yourself gently rising above your life.  
As if you are lifted in a quiet air balloon,  
slowly gaining height,  
until you can see your life from above.

*Pause.*

Below you, notice the different areas of your life.  
Not in detail.  
Just as landscapes.

Some areas may feel open and alive.  
Some may feel unclear, unfinished, or distant.

*Pause.*

Notice which areas matter most to you right now.  
Not what should matter —  
but what truly draws your attention.

*Pause.*

Simply observe.

---

## The Distance

Now notice that in some areas,  
there is a distance between where things are today  
and where you sense they could go.

Picture this distance as a canyon.

*Pause.*

In some places the canyon may be narrow.  
In others, wide and deep.

*Pause.*

On the other side, notice how things could be.  
Not perfect.  
But aligned.

See how that place looks.  
Sense how it feels to imagine standing there.

*Pause.*

---

## Desire

Now feel your desire to move toward that place.  
Not as pressure.  
Not as urgency.  
But as willingness.

*Pause.*

This desire is not a wish.  
It is a decision to move in a direction.

Let that decision settle in your body.  
Quiet.  
Steady.

*Pause.*

---

## The Bridge — Will and Faith

Now imagine a bridge beginning to form across the canyon.  
It does not appear all at once.  
It is built plank by plank.

*Pause.*

The first plank appears because you will it.  
You decide to move.

*Pause.*

The second plank appears because you do not let go.  
You stay with your direction.

*Pause.*

The third plank appears because you believe it is possible.  
Not emotionally —  
but practically.

*Pause.*

The fourth plank appears as your belief strengthens.  
You trust that what you aim for can be accomplished.

*Pause.*

The fifth plank appears because you keep your will directed,  
even when nothing else seems to change.

*Pause.*

*You have reached the middle of the bridge.*

---

## Becoming — Identity and Integrity

The sixth plank appears because you begin to be the right person to continue.

Picture yourself clearly.  
How you stand.  
How you move.  
How your face looks when you are aligned.

*Pause.*

Notice how your body feels.  
Grounded.  
Present.

*Pause.*

When this feels real, the plank settles into place.

*Pause.*

The seventh plank appears as you imagine acting with integrity  
across all areas of your life.  
Not selectively.  
Not occasionally.  
Consistently.

*Pause.*

---

## Capacity — Receiving and Managing

The eighth plank appears as you sense yourself becoming capable  
of holding what you are moving toward.

Responsibility.  
Stability.  
Balance.

*Pause.*

You are not reaching for something beyond you.  
You are growing into it.

*Pause.*

The ninth plank appears as your will matures.  
It is no longer forceful.  
It is steady.

*Pause.*

You no longer ask if you will continue.  
You simply do.

*Pause.*

The tenth plank appears as you accept that you can receive  
what you are aiming for —  
and manage it well.

*Pause.*

The bridge is now complete.

---

## Will — Crossing

Now look toward the other side.

Feel your will gather in your body.  
Not tension.  
Not force.  
Resolve.

*Pause.*

Silently say to yourself:

I am getting there.  
I am becoming who I need to be.  
I am moving forward.

*Pause.*

With each repetition, feel your will strengthen.  
Grounded.  
Certain.

*Pause.*

---

## Arrival

Now sense yourself standing on the other side.  
No drama.  
No celebration.  
Just arrival.

*Pause.*

Notice how natural it feels to be here.  
Not because it was easy —  
but because you became the one who could arrive.

*Pause.*

Let this feeling settle into your body.

---

## Return

Begin to let the images soften.

Bring your attention back to your breathing.  
To the room around you.

*Pause.*

Carry this sense of direction with you.  
Not as pressure —  
but as orientation.

When you are ready, open your eyes.`,
    categories: ['Mental träning', 'Fokus och riktning'],
    tags: ['Klassisk', 'Trygghet'],
    createdAt: '2023-02-10T07:45:00Z',
    featured: true,
    tracks: [
      { id: 't1', title: 'Stillhet (Piano)', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
      { id: 't2', title: 'Regnljud', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&w=600&auto=format&fit=crop' // Calming water/stones
  },
  {
    id: '2',
    title: 'Aftonbön',
    body: `Gud, tack för denna dag som gått.
Tack för allt jag fått uppleva, både glädje och utmaningar.
Förlåt mig där jag brustit i kärlek till dig och min nästa.
Jag lämnar nu allt i dina händer.
Bevara mig och mina kära under natten.
Låt mig vila i din frid.
I Jesu namn, Amen.`,
    categories: ['Dagliga böner', 'Tyst stund'],
    tags: ['Kväll', 'Vila'],
    createdAt: '2023-09-01T21:10:00Z',
    tracks: [],
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop' // Sunset/Calm
  },
  {
    id: '3',
    title: 'Bön vid ångest',
    body: `Herre, mitt hjärta är oroligt.
Tankarna snurrar och jag finner inget fäste.
Du har sagt att du är min herde och att mig intet skall fattas.
Hjälp mig att andas in din nåd.
Hjälp mig att släppa taget om det jag inte kan kontrollera.
Du är större än min oro.
Du är här, just nu.
Jag vilar i dig. Amen.`,
    categories: ['Bön vid oro', 'Andningsbön'],
    tags: ['Psykisk hälsa', 'Tröst'],
    createdAt: '2023-11-05T10:05:00Z',
    tracks: [
       { id: 't3', title: 'Lugnande atmosfär', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?q=80&w=600&auto=format&fit=crop' // Abstract/Light
  }
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Vad innebär det att tro?',
    body: `Att tro handlar inte bara om att hålla vissa påståenden för sanna. Det handlar om en relation.

### En levande relation
När vi talar om tro i kristen bemärkelse, talar vi om tillit. Som ett barn litar på sin förälder, är vi inbjudna att lita på Gud. Det är en vandring där vi dag för dag lär oss att känna ig[...]  

### Tvivel är en del av tron
Många tror att tvivel är motsatsen till tro, men ofta är tvivel en del av trons växt. Genom att våga ställa de svåra frågorna kan vår tro fördjupas och mogna. Gud är inte rädd för dina fr[...]  

### Gemenskap
Tron är heller inte något vi bär ensamma. Vi är skapade för gemenskap, att vara en del av en kropp. Kyrkan är inte en byggnad, utan vi människor tillsammans.`,
    categories: ['Evangeliet', 'Livet med Gud'],
    tags: ['Grunder', 'Intro'],
    createdAt: '2023-10-12T14:00:00Z',
    featured: true,
    pinned: true,
    mainImageUrl: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=600&auto=format&fit=crop' // Open book/Light
  },
  {
    id: '2',
    title: 'Att hitta vila i en stressig värld',
    body: `Vi lever i ett samhälle som ständigt kräver vår uppmärksamhet. Prestation, sociala medier och karriär kan lätt bli avgudar som stjäl vår frid.

Jesus säger: "Kom till mig, alla ni som arbetar och bär på tunga bördor, så ska jag ge er vila." (Matt 11:28).

Detta är inte en uppmaning till passivitet, utan till en inre hållning. Att vila i Gud är att veta att vårt värde inte ligger i vad vi gör, utan i vem vi är – Guds älskade barn.`,
    categories: ['Livet med Gud', 'Hopp'],
    tags: ['Stress', 'Vila'],
    createdAt: '2023-12-01T09:00:00Z',
    mainImageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop' // Coffee/Relax
  },
  {
    id: '3',
    title: 'Vem är Jesus?',
    body: `Historiskt sett är Jesus från Nasaret en person som faktiskt levt. Men vem var han egentligen – en vis lärare, en profet, eller något mycket större?

Jesus från Nasaret är mer än en religiös figur. Han är en historisk person, en världsomvälvande gestalt – och, enligt Bibeln, själva Gud som blev människa. Men vem är han egentligen, och v[...]  

## En verklig person i historien
Det finns få historiska personer från antiken som är lika väldokumenterade som Jesus. Utöver de fyra evangelierna – som i sig är trovärdiga antika källor – nämns Jesus också av historike[...]  

Men även om Jesus är historiskt trovärdig – är det övernaturliga trovärdigt?

## Vetenskapen närmar sig mysteriet
Många antar att vetenskapen och tron står i konflikt. Men verkligheten är mer nyanserad. Ju mer vi utforskar universum, desto mer mysterium stöter vi på. Kvantfysikens värld bryter mot våra var[...]  

Vi lever i en värld där tid, rum och materia inte är så "solida" som vi trodde. Det som en gång avfärdades som övernaturligt – som tanken att en Gud kan träda in i tiden och bli människa –[...]  

## Vem sade Jesus att han var?
Jesus sade inte bara att vi skulle älska våra fiender eller vända andra kinden till. Han sade också radikala saker som:

> ”Jag är vägen, sanningen och livet. Ingen kommer till Fadern utom genom mig” (Johannes 14:6)

och

> ”Jag och Fadern är ett” (Johannes 10:30)

Han påstod inte bara att han kände Gud – utan att han var Gud. Och hans liv, död och uppståndelse utgör kärnan i kristendomen. Om uppståndelsen är sann, så bevisar den hans anspråk. [...]  

## Varför du behöver Jesus – särskilt i Sverige
I ett sekulärt Sverige där Gud ofta förpassats till historiens skräphög, står många ändå kvar med tomheten. Vi har frihet, teknologi och trygghet – men också ensamhet, ångest och en läng[...]  

Jesus erbjuder något unikt:
* Inte bara en livsfilosofi, utan förlåtelse.
* Inte bara inre frid, utan evigt liv.
* Inte bara kärlek, utan sanning.

Han möter dig där du är – med öppna armar, inte med krav.
Han bjuder in dig till att lära känna honom, inte bara som en symbol, utan som en levande Frälsare.

## Avslutande bön
> Jesus, om du är den du säger att du är – visa dig för mig. Jag är öppen. Hjälp mig tro, även när jag tvivlar. Amen.`,
    categories: ['Evangeliet', 'Identitet i Kristus'],
    tags: ['Teologi', 'Jesus', 'Vem är Jesus-serien'],
    createdAt: '2025-12-15T08:00:00Z',
    featured: false,
    mainImageUrl: '/images/vem-ar-jesus-v2.png' // Correct path
  },
  {
  id: '4',
  title: 'Bibeln: myt eller tillförlitlig källa?',
  body: `**Vi ser Bibeln överallt – på hotellrum, i högtider, på sociala medier. Men kan man verkligen lita på den? Är den historiskt trovärdig, eller bara religiösa legender? Här är vad v[...
  
---
  
### Vad menar vi med ”trovärdig”? 
  Att något är trovärdigt betyder inte att det måste bevisas i ett laboratorium. Det betyder att det står pall för granskning.
Vi tror på massor av saker i vardagen utan att själva kunna testa dem i mikroskop. Som historia, relationer, värderingar – eller ögonvittnesskildringar. Därför är det rimligt att fråga: **H�[...]  
   
---
 
### En av världens bäst bevarade antika texter
  Bibeln är inte en bok. Den är **66 böcker, skrivna av över 40 författare** under ungefär 1500 år, på tre kontinenter – men med en sammanhängande berättelse.
Nya testamentet har **över 5 800 bevarade grekiska handskrifter**, plus tusentals översättningar. Det är mer än något annat från antiken. De är dessutom nära i tid till originalen – vilket [...]  

Till skillnad från viskleken har Bibeln bevarats med extrem noggrannhet.
---

### Arkeologin backar upp detaljerna
  Bibeln beskriver platser, folk och händelser – och gång på gång har arkeologin bekräftat att dessa faktiskt existerat:
- Pontius Pilatus – bekräftad genom inskription i Caesarea.
- Davids dynasti – omnämnd i Tel Dan-stelen.
- Babyloniska rikets fall – återges i flera oberoende källor.
- Jerusalem och tempelområdet – stämmer med arkeologiska fynd.
Det betyder inte att varje berättelse kan bevisas. Men det **visar att Bibeln är djupare rotad i historien än många tror**.
---

### Den känns för äkta för att vara påhitt
  Om du hittar på en religion – skriver du då in att dina ledare tvivlade, svek sin vän, och att kvinnor (som då inte ansågs trovärdiga vittnen) var de första som såg uppståndelsen?
Förmodligen inte.
Bibeln är ärlig. Den är inte rädd för komplexitet. Och det gör den – märkligt nog – mer trovärdig.
---

### Så… är det bara en religiös bok?
  Nej, det är mycket mer. 
  Bibeln är **historiskt stark, textkritiskt välbevarad, arkeologiskt förankrad och litterärt komplex**. Men framför allt: den säger att det finns en Gud som talar – genom historia, poesi, lag, [...
Det är där allting ställs på sin spets. För om Jesus är den Bibeln säger att han är – då är det här inte bara gamla texter. Då är det **en röst som fortfarande talar**.
---

### Vad betyder det för dig?
  Du behöver inte blint tro. Men du får gärna undersöka. Börja läsa själv. Prata med någon som läst. Våga vara nyfiken.
Bibeln säger:
> ”Den som söker, han finner” (Matteus 7:8). 
---

### En enkel bön för klarhet
*Gud, om du finns – hjälp mig att förstå. Ge mig mod att se det jag kanske missat. Visa mig inte bara enkla svar, utan sanningen, även när den är större än jag kan greppa. Hjälp mig att vå[...] 

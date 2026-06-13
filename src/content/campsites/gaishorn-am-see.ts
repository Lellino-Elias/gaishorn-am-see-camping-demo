import type { CampsiteConfig } from "../types";

/**
 * Camping Gaishorn am See — honest config, abgeleitet aus raw/digest (Quelle: gaishorn-am-see.at).
 * Ein einfacher Camping-Stellplatz am Gaishorner Badesee im steirischen Paltental, am Rand des
 * Nationalparks Gesäuse. Preise real aus prices.md. Design = Original-Palette (kein theme), Hero center.
 */
const IMG = "/campsites/gaishorn-am-see";

const gaishornAmSee: CampsiteConfig = {
  name: "Camping Gaishorn am See",
  shortName: "Gaishorn",
  slug: "gaishorn-am-see",
  ort: "Gaishorn am See",
  region: "Steiermark",
  brandKind: "Stellplatz am Badesee",
  see: "Gaishorner Badesee",
  regionLong: "Paltental · Nationalpark Gesäuse · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Camping direkt am Gaishorner Badesee",
  claimEmphasis: "Gaishorner Badesee",
  emailDetail: "euer Freizeitgelände am See mit gratis Badebucht und Spielplatz",
  intro:
    "Zwanzig Plätze am Gaishorner Badesee, eingerahmt von den Gesäusebergen: begrünter Schotter, Strom an jeder Ecke, kurze Wege zur Badebucht — und ein ganzes Freizeitgelände, das du als Camper gratis mitbenutzt.",

  statement: {
    text: "Hinterm Stellplatz liegt der Badesee, dahinter steigen die Gesäuseberge auf.",
    emphasis: "der Badesee",
  },

  pillars: [
    {
      title: "Direkt am Badesee",
      text: "Der Platz liegt am Freizeitgelände des Gaishorner Sees — Badebucht und Liegewiese erreichst du in wenigen Schritten.",
      image: { src: `${IMG}/see-bergkulisse.webp`, alt: "Gaishorner Badesee mit der Gesäuse-Bergkulisse" },
    },
    {
      title: "Umrahmt vom Gesäuse",
      text: "Rund um den Ort steigen die Ennstaler Alpen auf — der Nationalpark Gesäuse beginnt praktisch vor der Haustür.",
      image: { src: `${IMG}/gesaeuse-sommer.webp`, alt: "Sommerwiese vor den Gesäusebergen bei Gaishorn am See" },
    },
    {
      title: "Mitten im Paltental",
      text: "Gaishorn am See liegt ruhig im steirischen Paltental — Bahnhof, Ort und Geschäfte sind nur Minuten entfernt.",
      image: { src: `${IMG}/ort-gaishorn.webp`, alt: "Ortsbild von Gaishorn am See im Paltental" },
    },
  ],

  usps: [
    "20 Plätze am Badesee",
    "Schotter-Wiese mit Strom",
    "Zugang rund um die Uhr",
    "Gratis ans Freizeitgelände",
    "Hunde willkommen",
    "Mitten im Gesäuse",
  ],

  trust: {
    heading: "Klein, ehrlich, direkt am See",
    headingEmphasis: "direkt am See",
    intro:
      "Kein Animationsprogramm, keine Schranke — ein überschaubarer Stellplatz mit gepflegten Sanitäranlagen, direkt am Badesee und mit dem ganzen Freizeitgelände gratis vor der Tür. Reservieren musst du nicht.",
  },

  awards: [],

  saison: { von: "April", bis: "November" },

  hero: {
    aerial: { src: `${IMG}/hero-badesee.webp`, alt: "Luftaufnahme: Gaishorner Badesee mit Seekiosk und den Gesäusebergen" },
  },

  camping: {
    heading: "Camping am Gaishorner See",
    intro:
      "Zwanzig nummerierte Plätze auf begrüntem Schotter, Strom an 18 Anschlüssen, Dusch- und WC-Anlage und Zugang rund um die Uhr. Reservieren musst du nicht — abends kommt die Kassa am Platz vorbei.",
    features: [
      {
        title: "20 Plätze, klar aufgeteilt",
        text: "Nummerierte Stellplätze für Wohnwagen, Wohnmobil und Zelt auf begrüntem Schotter — Trinkwasser, eine Dusch- und WC-Anlage sowie 18 Stromanschlüsse gehören dazu.",
        image: { src: `${IMG}/lageplan.webp`, alt: "Lageplan des Campingplatzes Gaishorn am See" },
      },
      {
        title: "Mitten im Freizeitgelände",
        text: "Der Platz liegt direkt am Freizeitgelände des Gaishorner Sees — Badebucht, Liegewiese, Kinderspielplatz und Sportflächen nutzt du als Camper gratis mit.",
        image: { src: `${IMG}/seekiosk-see.webp`, alt: "Seekiosk am Gaishorner Badesee mit Blick auf die Gesäuseberge" },
      },
      {
        title: "Auch im Winter ein Ziel",
        text: "Wenn der See zufriert, wird die Fläche zur Eisbahn: Eislaufen mit Blick auf die verschneiten Gesäuseberge gehört in Gaishorn zum Winter dazu.",
        image: { src: `${IMG}/eislaufen-see.webp`, alt: "Eislaufen auf dem gefrorenen Gaishorner See im Winter" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Raus aus dem Vorzelt",
    intro:
      "Baden und Fischen am See, Nordic Walking und Radfahren durchs Paltental, anspruchsvolle Touren hinauf ins Gesäuse — von deinem Platz aus startest du in alle Richtungen.",
    items: [
      {
        title: "Wandern & Bergtouren",
        text: "Vom leichten Seewanderweg rund um den See bis zur anspruchsvollen Bergtour auf die Gesäusegipfel — die Wege beginnen quasi am Platz.",
        image: { src: `${IMG}/wandern-gesaeuse.webp`, alt: "Wanderer auf einem Bergpfad im Gesäuse bei Gaishorn" },
      },
      {
        title: "Hinauf zur Mödlingerhütte",
        text: "Die Mödlingerhütte auf 1.523 m lohnt mit Panoramablick ins Gesäuse — für Biker sind es 801 Höhenmeter ab Gaishorn.",
        image: { src: `${IMG}/moedlingerhuette.webp`, alt: "Mödlingerhütte vor den Gipfeln des Gesäuse im Abendlicht" },
      },
      {
        title: "Winter mit Ruhe",
        text: "Verschneite Wege zum Spazieren und Langlaufen, dazu klare, stille Tage — Gaishorn strahlt auch in der kalten Jahreszeit Gemütlichkeit aus.",
        image: { src: `${IMG}/winter-weg.webp`, alt: "Verschneiter Winterweg in der Bergwelt bei Gaishorn am See" },
      },
    ],
  },

  anreise: {
    heading: "So kommst du an den See",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A9 (Pyhrn Autobahn) bis Trieben oder Treglwang, dann auf die B113 Richtung Gaishorn — die Abfahrt zum Freizeitgelände liegt direkt an der Bundesstraße, gleich bei der Tankstelle.",
      },
      {
        title: "Mit der Bahn",
        text: "Der Bahnhof Gaishorn am See liegt rund 300 Meter vom Platz entfernt — die letzten Meter gehst du bequem zu Fuß.",
      },
      {
        title: "Lage",
        text: "Gaishorn am See im steirischen Paltental, am Rand des Nationalparks Gesäuse; das Stift Admont ist rund 25 km entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Gaishorn in Bildern",
    headingEmphasis: "Bildern",
    intro: "See, Tal und Berge — ein paar Eindrücke aus Gaishorn am See und der Bergwelt ringsum.",
    tag: "Sommer wie Winter",
    moreCount: 6,
    images: [
      { src: `${IMG}/almhuetten-gesaeuse.webp`, alt: "Almhütten unter den Gipfeln des Gesäuse bei Gaishorn" },
      { src: `${IMG}/gesaeuse-gipfel.webp`, alt: "Felsgipfel des Gesäuse über dem Paltental" },
      { src: `${IMG}/almwiese.webp`, alt: "Sommerliche Almwiese am Berghang bei Gaishorn am See" },
    ],
  },

  booking: {
    heading: "Am See ist noch ein Platz frei",
    headingEmphasis: "Am See",
    intro:
      "Reservieren kannst du nicht — und musst du auch nicht. Sag uns Zeitraum und Personen, der Rest passiert unkompliziert vor Ort.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtwert inkl. 2 Personen — € 14 Stellplatz + € 3/Person ab 16 J. (Kinder 6–15 € 2, bis 6 frei). Zzgl. Strom € 2/Nacht und Ortstaxe € 2/Person (Kinder bis 15 frei). Saison 2025.",
    highlight: {
      title: "Ohne Reservierung",
      text: "Einfach anreisen — Plätze gibt es genug, abends kommt die Kassa am Stellplatz vorbei.",
    },
    categories: [
      { id: "stellplatz", label: "Wohnwagen / Wohnmobil", perNight: 14, perExtraGuest: 3 },
      { id: "zelt-gross", label: "Zeltplatz (groß)", perNight: 14, perExtraGuest: 3 },
      { id: "zelt-klein", label: "Kleiner Zeltplatz (1–2 P.)", perNight: 8, perExtraGuest: 3 },
    ],
  },

  kontakt: {
    tel: "+43 (0) 3617 / 24 15",
    telHref: "tel:+4336172415",
    mail: "hermine.mayr@gmail.com",
    adresse: "8783 Gaishorn am See · Steiermark · Österreich",
    coords: { lat: 47.486481, lng: 14.546339 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Freizeitgelände", href: "#camping" },
      ],
    },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default gaishornAmSee;

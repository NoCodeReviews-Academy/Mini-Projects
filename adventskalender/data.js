// Wipecoding Adventskalender 2024 - Alle 24 Türchen
const calendarData = [
    {
        day: 1,
        title: "Digitale Weihnachtskarte",
        icon: "🎄",
        difficulty: 1,
        task: "Erstelle eine animierte Weihnachtskarte, die du an Freunde verschicken kannst.",
        prompt: `Erstelle mir eine schöne digitale Weihnachtskarte als HTML-Seite.
Sie soll einen festlichen Hintergrund haben, "Frohe Weihnachten"
als animierten Text zeigen und Schneeflocken die herunterfallen.
Mach es weihnachtlich und gemütlich!`,
        instructions: "Öffne die erstellte index.html Datei direkt im Browser (Doppelklick). Du hast gerade deine erste Web-App gebaut!",
        skill: "/skill frontend-design"
    },
    {
        day: 2,
        title: "Weihnachts-Countdown",
        icon: "⏰",
        difficulty: 1,
        task: "Baue einen Live-Countdown, der die Tage, Stunden und Minuten bis Weihnachten anzeigt.",
        prompt: `Baue mir einen Weihnachts-Countdown der live anzeigt wie viele
Tage, Stunden, Minuten und Sekunden es noch bis zum 24. Dezember sind.
Das Design soll festlich sein mit einem schönen Timer in der Mitte.`,
        instructions: "Der Countdown aktualisiert sich automatisch jede Sekunde. Lass die Seite offen und schau zu wie die Zeit vergeht!",
        skill: "/skill frontend-design"
    },
    {
        day: 3,
        title: "Schneeflocken-Generator",
        icon: "❄️",
        difficulty: 1,
        task: "Erstelle einen Generator, der auf Knopfdruck einzigartige Schneeflocken zeichnet.",
        prompt: `Erstelle einen Schneeflocken-Generator. Bei jedem Klick auf einen
Button soll eine neue, zufällig generierte Schneeflocke gezeichnet
werden. Nutze Canvas oder SVG. Jede Schneeflocke soll einzigartig sein!`,
        instructions: "Klicke auf den Button und beobachte wie jede Schneeflocke anders aussieht - genau wie in der Natur!",
        skill: "/skill frontend-design"
    },
    {
        day: 4,
        title: "Digitaler Wunschzettel",
        icon: "📝",
        difficulty: 1,
        task: "Baue eine App, in der du deine Weihnachtswünsche eintragen und abhaken kannst.",
        prompt: `Erstelle eine Wunschzettel-App für Weihnachten. Ich möchte Wünsche
hinzufügen können mit Name und optional einem Link. Die Wünsche
sollen in einer schönen Liste angezeigt werden und ich möchte sie
als "erfüllt" markieren können. Speichere alles im LocalStorage.`,
        instructions: "Deine Wünsche werden im Browser gespeichert und sind auch nach dem Neuladen noch da. Teile die Liste mit deiner Familie!",
        skill: "/skill frontend-design"
    },
    {
        day: 5,
        title: "Adventskerzen",
        icon: "🕯️",
        difficulty: 1,
        task: "Erstelle einen virtuellen Adventskranz, bei dem du jede Woche eine Kerze anzünden kannst.",
        prompt: `Baue einen interaktiven Adventskranz mit 4 Kerzen. Ich möchte
jede Kerze einzeln anklicken können um sie anzuzünden. Die Flamme
soll flackern (Animation). Der Kranz soll schön weihnachtlich aussehen.`,
        instructions: "Klicke auf die Kerzen um sie anzuzünden. Perfekt für die Adventssonntage!",
        skill: "/skill frontend-design"
    },
    {
        day: 6,
        title: "Weihnachtsrezept-Finder",
        icon: "🍪",
        difficulty: 1,
        task: "Erstelle ein Python-Skript, das dir zufällige Weihnachtsrezept-Ideen gibt.",
        prompt: `Erstelle ein Python-Skript das mir zufällige Weihnachtsrezepte
vorschlägt. Es soll verschiedene Kategorien haben (Vorspeise,
Hauptgang, Dessert, Plätzchen) und mir per Zufall Ideen geben.
Mach es interaktiv im Terminal mit schöner Ausgabe.`,
        instructions: "Führe das Skript mit python rezept_finder.py im Terminal aus. Lass dich inspirieren!",
        skill: "Keiner nötig - Python läuft direkt"
    },
    {
        day: 7,
        title: "Weihnachtsquiz",
        icon: "❓",
        difficulty: 1,
        task: "Baue ein kleines Quiz rund um Weihnachtstraditionen weltweit.",
        prompt: `Erstelle ein Weihnachtsquiz mit 10 Fragen über Weihnachtstraditionen
aus aller Welt. Multiple Choice mit 4 Antwortmöglichkeiten.
Am Ende soll mein Ergebnis angezeigt werden mit einer lustigen
Bewertung. Schönes weihnachtliches Design!`,
        instructions: "Teste dein Weihnachtswissen! Fordere Freunde heraus - wer weiß mehr?",
        skill: "/skill frontend-design"
    },
    {
        day: 8,
        title: "Lichterketten-Konfigurator",
        icon: "✨",
        difficulty: 1,
        task: "Erstelle eine Seite mit animierten Lichterketten, deren Farben du selbst bestimmen kannst.",
        prompt: `Baue einen Lichterketten-Konfigurator. Zeige eine animierte
Lichterkette am oberen Bildschirmrand. Ich möchte die Farben
der Lichter selbst wählen können und zwischen verschiedenen
Blink-Mustern wechseln können (gleichmäßig, zufällig, Welle).`,
        instructions: "Experimentiere mit den Farben und Mustern. Screenshot machen und als Inspiration für echte Deko nutzen!",
        skill: "/skill frontend-design"
    },
    {
        day: 9,
        title: "Geschenke-Budget-Tracker",
        icon: "💰",
        difficulty: 2,
        task: "Baue eine App, um deine Geschenke-Ausgaben im Blick zu behalten.",
        prompt: `Erstelle einen Geschenke-Budget-Tracker. Ich möchte ein Gesamtbudget
festlegen und dann Geschenke mit Person und Preis eintragen.
Zeige mir an wie viel ich schon ausgegeben habe und wie viel
noch übrig ist. Mit Fortschrittsbalken und Warnung wenn das
Budget fast aufgebraucht ist. Speichere im LocalStorage.`,
        instructions: "Behalte den Überblick über deine Weihnachtsausgaben. Dein Geldbeutel wird es dir danken!",
        skill: "/skill frontend-design"
    },
    {
        day: 10,
        title: "Wichtel-Generator",
        icon: "🎅",
        difficulty: 2,
        task: "Erstelle einen Wichtel-Zuordnungs-Generator für deine Familie oder Freunde.",
        prompt: `Baue einen Wichtel-Generator. Ich gebe Namen ein und das Programm
ordnet zufällig zu wer wem ein Geschenk macht (niemand sich selbst).
Die Zuordnung soll verdeckt angezeigt werden - jeder kann seinen
Namen anklicken um nur seinen Wichtel-Partner zu sehen.
Füge optional Ausschlüsse hinzu (z.B. Partner nicht untereinander).`,
        instructions: "Perfekt für Familien-Wichteln! Jeder klickt nur auf seinen Namen und sieht seinen Partner.",
        skill: "/skill frontend-design + /skill superpowers:brainstorming"
    },
    {
        day: 11,
        title: "Adventskalender-Tracker",
        icon: "📅",
        difficulty: 2,
        task: "Baue eine App, die trackt welche Türchen du schon geöffnet hast (für physische Kalender).",
        prompt: `Erstelle einen Adventskalender-Tracker für meinen echten Kalender.
24 Türchen zum Anklicken wenn ich sie geöffnet habe. Zeige an
welcher Tag heute ist und welche Türchen ich noch öffnen darf.
Ich möchte zu jedem Türchen eine kleine Notiz speichern können
was drin war. Mit Statistik wie viel Prozent des Advents schon rum sind.`,
        instructions: "Dokumentiere deinen Adventskalender-Inhalt. Am Ende hast du eine schöne Erinnerung!",
        skill: "/skill frontend-design"
    },
    {
        day: 12,
        title: "Weihnachtsplaylist-Randomizer",
        icon: "🎵",
        difficulty: 2,
        task: "Erstelle einen Zufalls-Generator für Weihnachtssongs.",
        prompt: `Baue einen Weihnachtsplaylist-Randomizer. Zeige mir zufällige
Weihnachtssong-Vorschläge aus verschiedenen Kategorien
(Klassiker, Modern, International, Lustig). Bei jedem Klick
ein neuer Song mit Titel und Künstler. Bonus: Füge YouTube-Suchlinks hinzu.`,
        instructions: "Klicke dich durch und entdecke neue Weihnachtssongs! Die Links führen direkt zur YouTube-Suche.",
        skill: "/skill frontend-design"
    },
    {
        day: 13,
        title: "Weihnachtskarten-Generator",
        icon: "💌",
        difficulty: 2,
        task: "Baue einen Generator für personalisierte Weihnachtsgrüße.",
        prompt: `Erstelle einen Weihnachtskarten-Generator. Ich gebe den Namen
des Empfängers ein und wähle einen Stil (klassisch, lustig,
modern). Das Programm generiert einen personalisierten
Weihnachtsgruß-Text. Mit verschiedenen Hintergründen und der
Möglichkeit die Karte als Bild zu speichern.`,
        instructions: "Generiere einzigartige Grüße für alle deine Lieben. Speichern und per WhatsApp verschicken!",
        skill: "/skill frontend-design"
    },
    {
        day: 14,
        title: "Plätzchen-Timer",
        icon: "🥧",
        difficulty: 2,
        task: "Erstelle einen smarten Back-Timer für verschiedene Plätzchensorten.",
        prompt: `Erstelle ein Python-Programm als Plätzchen-Back-Timer.
Ich wähle die Plätzchenart (Vanillekipferl, Zimtsterne,
Lebkuchen etc.) und der Timer startet mit der richtigen Backzeit.
Mit Countdown-Anzeige und Alarm (Ton oder Print-Nachricht)
wenn die Zeit um ist. Zeige auch die richtige Temperatur an.`,
        instructions: "Starte den Timer wenn du deine Plätzchen in den Ofen schiebst. Nie wieder verbrannte Kekse!",
        skill: "Keiner nötig"
    },
    {
        day: 15,
        title: "Geschenke-Ideen-Generator",
        icon: "🎁",
        difficulty: 2,
        task: "Baue eine App, die Geschenkideen basierend auf Person und Budget vorschlägt.",
        prompt: `Erstelle einen Geschenke-Ideen-Generator. Ich gebe ein:
- Für wen (Mama, Papa, Freund, Kind etc.)
- Interessen (z.B. Kochen, Gaming, Lesen)
- Budget (z.B. bis 20€, 20-50€, 50-100€)

Das Programm schlägt mir passende Geschenkideen vor.
Mit schönem Interface und der Möglichkeit Ideen zu favorisieren.`,
        instructions: "Keine Idee was du schenken sollst? Lass dir helfen! Speichere deine Favoriten für später.",
        skill: "/skill frontend-design + /skill superpowers:brainstorming"
    },
    {
        day: 16,
        title: "Weihnachtsfilm-Roulette",
        icon: "🎬",
        difficulty: 2,
        task: "Erstelle ein Roulette, das dir und deiner Familie den nächsten Weihnachtsfilm aussucht.",
        prompt: `Baue ein Weihnachtsfilm-Roulette. Ein Glücksrad mit
Weihnachtsfilmen (Kevin allein zu Haus, Der Grinch,
Tatsächlich Liebe, Die Eiskönigin etc.). Mit Animation
beim Drehen und Anzeige des Films mit kurzer Beschreibung.
Ich möchte auch eigene Filme hinzufügen können.`,
        instructions: "Keine Diskussion mehr welchen Film ihr schaut - das Roulette entscheidet! Drehe das Rad!",
        skill: "/skill frontend-design"
    },
    {
        day: 17,
        title: "Weihnachtsmarkt-Finder",
        icon: "🏠",
        difficulty: 3,
        task: "Baue eine App zum Sammeln und Bewerten von Weihnachtsmärkten.",
        prompt: `Erstelle eine Weihnachtsmarkt-Sammlung-App. Ich möchte
Weihnachtsmärkte hinzufügen mit Name, Ort und meiner Bewertung
(1-5 Sterne). Dazu Notizen was besonders gut war (bester Glühwein,
schönste Stände etc.). Mit Filterfunktion und Sortierung.
LocalStorage zum Speichern. Schöne Kartenansicht für jeden Markt.`,
        instructions: "Dokumentiere deine Weihnachtsmarkt-Besuche! Nächstes Jahr weißt du genau wo es am besten war.",
        skill: "/skill frontend-design"
    },
    {
        day: 18,
        title: "Schneemann-Baukasten",
        icon: "⛄",
        difficulty: 3,
        task: "Erstelle einen interaktiven Schneemann-Designer.",
        prompt: `Baue einen Schneemann-Baukasten. Ich möchte einen Schneemann
zusammenstellen können mit verschiedenen:
- Körperformen (3 Kugeln, 2 Kugeln, etc.)
- Hüten (Zylinder, Mütze, Eimer)
- Nasen (Karotte, Button, Zweig)
- Schals (verschiedene Farben)
- Armen (Zweige, Handschuhe)
- Augen und Mund

Mit Drag & Drop oder Klick-Auswahl. Am Ende Screenshot-Funktion.`,
        instructions: "Gestalte deinen perfekten Schneemann! Speichere ihn und teile ihn mit Freunden.",
        skill: "/skill frontend-design"
    },
    {
        day: 19,
        title: "Weihnachts-Memory",
        icon: "🃏",
        difficulty: 3,
        task: "Erstelle ein Memory-Spiel mit weihnachtlichen Motiven.",
        prompt: `Baue ein Weihnachts-Memory-Spiel. Ein 4x4 Raster (8 Paare)
mit weihnachtlichen Emojis oder Icons. Karten umdrehen durch
Klick, Paare finden, Züge zählen. Mit Timer und Highscore-Liste
(LocalStorage). Schöne Umdreh-Animation und Konfetti bei Gewinn!`,
        instructions: "Trainiere dein Gedächtnis! Versuche mit möglichst wenigen Zügen alle Paare zu finden.",
        skill: "/skill frontend-design + /skill superpowers:test-driven-development"
    },
    {
        day: 20,
        title: "Lebkuchenhaus-Designer",
        icon: "🏡",
        difficulty: 3,
        task: "Erstelle einen 2D-Lebkuchenhaus-Designer zum Dekorieren.",
        prompt: `Baue einen Lebkuchenhaus-Designer. Ein 2D-Haus von vorne,
das ich dekorieren kann. Mit Werkzeugleiste für:
- Zuckerguss-Linien zeichnen (verschiedene Farben)
- Süßigkeiten platzieren (Gummibärchen, Schokolinsen, etc.)
- Fenster und Türen
- Dach-Deko

Undo-Funktion und Speichern/Laden des Designs.`,
        instructions: "Werde kreativ! Gestalte dein Traum-Lebkuchenhaus virtuell - ohne klebrige Finger.",
        skill: "/skill frontend-design"
    },
    {
        day: 21,
        title: "Weihnachtsbaum-Schmück-Simulator",
        icon: "🎄",
        difficulty: 3,
        task: "Baue einen virtuellen Weihnachtsbaum zum Schmücken.",
        prompt: `Erstelle einen Weihnachtsbaum-Schmück-Simulator. Ein Tannenbaum
in der Mitte, den ich dekorieren kann:
- Kugeln in verschiedenen Farben (per Klick platzieren)
- Lichterkette (an/aus schaltbar, blinkend)
- Stern oder Spitze oben
- Lametta

Mit Reset-Button und der Möglichkeit verschiedene
Baum-Stile zu wählen. Festliche Hintergrundmusik wäre cool!`,
        instructions: "Dekoriere deinen virtuellen Baum! Perfekt zum Ausprobieren bevor du den echten schmückst.",
        skill: "/skill frontend-design"
    },
    {
        day: 22,
        title: "Weihnachts-Countdown-Widget",
        icon: "📊",
        difficulty: 3,
        task: "Erstelle ein Desktop-Widget-ähnliches Countdown mit Extras.",
        prompt: `Baue ein Weihnachts-Countdown-Widget im modernen Glassmorphism-Design.
Features:
- Countdown bis Weihnachten (Tage, Stunden, Minuten, Sekunden)
- Aktuelles Wetter (nutze eine freie API oder zeige Platzhalter)
- Zufälliger Weihnachts-Fakt des Tages
- Mini-Adventskalender-Fortschritt
- Schneeflocken-Animation im Hintergrund

Soll wie ein echtes Desktop-Widget aussehen.`,
        instructions: "Ein All-in-One Weihnachts-Dashboard! Lass es im Browser offen als dein Weihnachts-Begleiter.",
        skill: "/skill frontend-design"
    },
    {
        day: 23,
        title: "Weihnachtsessen-Planer",
        icon: "🍽️",
        difficulty: 3,
        task: "Erstelle einen kompletten Planungs-Helfer für das Weihnachtsessen.",
        prompt: `Baue einen Weihnachtsessen-Planer:
- Gäste hinzufügen mit Ernährungseinschränkungen (vegetarisch, vegan, Allergien)
- Menü zusammenstellen (Vorspeise, Hauptgang, Beilagen, Dessert)
- Automatische Einkaufsliste generieren
- Zeitplan für die Zubereitung (wann muss was in den Ofen)
- Checklist-Ansicht zum Abhaken

Speichere alles im LocalStorage. Schönes, übersichtliches Design.`,
        instructions: "Der ultimative Helfer für stressfreie Weihnachten! Plane alles im Voraus.",
        skill: "/skill frontend-design + /skill superpowers:systematic-debugging"
    },
    {
        day: 24,
        title: "Jahresrückblick-Generator",
        icon: "🎆",
        difficulty: 3,
        task: "Erstelle eine App, die einen persönlichen Jahresrückblick generiert.",
        prompt: `Baue einen persönlichen Jahresrückblick-Generator. Ich beantworte
Fragen zu meinem Jahr:
- Beste Momente
- Größte Erfolge
- Was ich gelernt habe
- Wofür ich dankbar bin
- Ziele für nächstes Jahr

Daraus wird ein schöner, teilbarer Jahresrückblick im
Spotify-Wrapped-Stil generiert. Mit Animationen, schönen
Grafiken und der Möglichkeit als Bild zu exportieren.`,
        instructions: "Der perfekte Abschluss! Reflektiere dein Jahr und teile deinen Rückblick. Frohe Weihnachten! 🎄",
        skill: "/skill frontend-design"
    }
];

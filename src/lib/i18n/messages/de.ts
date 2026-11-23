export type Messages = {
  common: {
    home: string;
    docs: string;
    playground: string;
    contact: string;
    preview: string;
    search: string;
    loading: string;
    save: string;
    saving: string;
    cancel: string;
    create: string;
    edit: string;
    delete: string;
    searchPlaceholder: string;
    noResults: string;
    new: string;
    inDevelopment: string;
    actions: string;
    copy: string;
    copied: string;
    live: string;
    open: string;
    tryIt: string;
    learnMore: string;
    back: string;
    close: string;
    yes: string;
    no: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    networkError: string;
    temporary: string;
    temporaryBadge: string;
    generator: string;
    imageGenerator: string;
    jsonWorkbench: string;
  };
  header: {
    primaryNav: string;
    whatsNew: string;
    whatsNewTitle: string;
    whatsNewSubtitle: string;
    latest: string;
    contact: string;
    menu: string;
    openMenu: string;
    appearance: string;
    lightMode: string;
    darkMode: string;
    light: string;
    dark: string;
    apiLangGroup: string;
    english: string;
    persian: string;
    github: string;
    githubStars: string;
  };
  home: {
    tagline: string;
    taglineNote: string;
    resourcesTitle: string;
    resourcesBlurb: string;
    searchLabel: string;
    searchPlaceholder: string;
    temporaryCtaTitle: string;
    temporaryCtaBody: string;
    temporaryCtaLink: string;
  };
  notFound: {
    title: string;
    body: string;
    home: string;
    docs: string;
  };
  blog: {
    title: string;
    description: string;
    all: string;
    emptyTitle: string;
    emptyBody: string;
    emptyCategoryTitle: string;
    emptyCategoryBody: string;
    readingTime: string;
    previousPage: string;
    nextPage: string;
    pageStatus: string;
    paginationNav: string;
    categoriesNav: string;
    backToBlog: string;
    previousArticle: string;
    nextArticle: string;
    relatedArticles: string;
    categories: {
      news: string;
      "mock-data": string;
      json: string;
      api: string;
      frontend: string;
    };
  };
  contact: {
    title: string;
    intro: string;
    name: string;
    email: string;
    topic: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    chooseTopic: string;
    pickTopic: string;
    topics: Record<string, string>;
  };
  docs: {
    title: string;
    navLabel: string;
    intro: string;
    toc: {
      intro: string;
      whatsNew: string;
      temporary: string;
      generator: string;
      imageGenerator: string;
      jsonWorkbench: string;
      sharedData: string;
      language: string;
      resources: string;
      openapi: string;
      requests: string;
      errors: string;
      rateLimit: string;
      reset: string;
    };
    whatsNewTitle: string;
    whatsNewBlurb: string;
    temporaryTitle: string;
    temporaryBody: string;
    temporaryBullets: string[];
    temporaryLimitsTitle: string;
    temporaryLimitsBullets: string[];
    generatorTitle: string;
    generatorBody: string;
    generatorBullets: string[];
    imageGeneratorTitle: string;
    imageGeneratorBody: string;
    imageGeneratorBullets: string[];
    jsonWorkbenchTitle: string;
    jsonWorkbenchBody: string;
    jsonWorkbenchBullets: string[];
    sharedDataTitle: string;
    sharedDataBody: string;
    languageTitle: string;
    languageBody: string;
    languageBullets: string[];
    resourcesTitle: string;
    resourcesBlurb: string;
    colResource: string;
    colBasePath: string;
    colStatus: string;
    colDocs: string;
    statusLive: string;
    statusDev: string;
    statusSoon: string;
    openapiTitle: string;
    openapiBody: string;
    download: string;
    requestsTitle: string;
    requestsBody: string;
    errorsTitle: string;
    errorsBody: string;
    rateLimitTitle: string;
    rateLimitBody: string;
    resetTitle: string;
    resetBody: string;
    resetPanel: {
      intro: string;
      placeholder: string;
      button: string;
      resetting: string;
      needSecret: string;
      confirm: string;
      networkError: string;
      donePrefix: string;
    };
    colIndex: string;
  };
  resourceDocs: {
    endpoints: string;
    queryParams: string;
    examples: string;
    response: string;
    tryExample: string;
    preview: string;
    playground: string;
    backToResources: string;
  };
  playground: {
    title: string;
    blurb: string;
    resource: string;
    action: string;
    send: string;
    sending: string;
    response: string;
    request: string;
    body: string;
    query: string;
    headers: string;
    correct: string;
    wrong: string;
    password: string;
    user: string;
    pickUser: string;
    loadError: string;
    emptyResponse: string;
    startHint: string;
    types: string;
    json: string;
  };
  temporary: {
    title: string;
    blurb: string;
    privacyNote: string;
    jsonLabel: string;
    durationLabel: string;
    duration1h: string;
    duration6h: string;
    duration12h: string;
    duration24h: string;
    checkJson: string;
    jsonValid: string;
    jsonHint: string;
    create: string;
    creating: string;
    acceptFix: string;
    rejectFix: string;
    fixedPreview: string;
    myApis: string;
    emptyList: string;
    copyUrl: string;
    delete: string;
    deleteAll: string;
    deleting: string;
    confirmDelete: string;
    confirmDeleteBody: string;
    confirmDeleteAll: string;
    confirmDeleteAllBody: string;
    cancel: string;
    limitReached: string;
    limitReachedBody: string;
    createdTitle: string;
    openApi: string;
    slotsLabel: string;
    maxActive: string;
    sampleJson: string;
    issues: {
      EMPTY: string;
      INVALID_JSON: string;
      TOO_LARGE: string;
      NOT_OBJECT_OR_ARRAY: string;
      TOO_DEEP: string;
      ARRAY_TOO_LONG: string;
      TOO_MANY_KEYS: string;
      UNSAFE_KEY: string;
      AUTO_FIXED: string;
    };
  };
  imageGenerator: {
    title: string;
    blurb: string;
    modeSvg: string;
    modeReal: string;
    width: string;
    height: string;
    generate: string;
    generating: string;
    yourUrl: string;
    preview: string;
    useInProject: string;
    tabUrl: string;
    tabHtml: string;
    tabCss: string;
    tabJs: string;
    tabCurl: string;
    readySizes: string;
    sizes: {
      avatar: string;
      thumbnail: string;
      profile: string;
      square: string;
      post: string;
      cover: string;
      banner: string;
      story: string;
    };
  };
  jsonWorkbench: {
    title: string;
    blurb: string;
    toolNavLabel: string;
    source: {
      title: string;
      hint: string;
      sample: string;
      valid: string;
      needJson: string;
      fixFirst: string;
      pickAction: string;
      useResult: string;
      diffHint: string;
      escapedInput: string;
      schemaInput: string;
      fromSchemaNote: string;
    };
    categories: {
      core: string;
      transform: string;
      utility: string;
    };
    labels: {
      input: string;
      output: string;
      tree: string;
      matches: string;
      jsonA: string;
      jsonB: string;
      diffResult: string;
      jsonpath: string;
      result: string;
    };
    actions: {
      format: string;
      minify: string;
      showTree: string;
      search: string;
      clearSearch: string;
      replace: string;
      replaceAll: string;
      prevMatch: string;
      nextMatch: string;
      compare: string;
      run: string;
      runPath: string;
      toTypescript: string;
      toZod: string;
      toSchema: string;
      swapDirection: string;
      sortKeys: string;
      removeEmpty: string;
      flatten: string;
      unflatten: string;
      escape: string;
      unescape: string;
      repair: string;
      fromSchema: string;
      extractKeys: string;
      extractValues: string;
      pick: string;
      omit: string;
      compareStructure: string;
      clear: string;
      expandAll: string;
      collapseAll: string;
      copyPath: string;
      copyValue: string;
    };
    errors: {
      empty: string;
      invalid: string;
      unexpectedEnd: string;
      unexpectedToken: string;
      expectedPropertyName: string;
      expectedCommaOrBrace: string;
      expectedCommaOrBracket: string;
      expectedColon: string;
      unterminatedString: string;
      badControlChar: string;
      badEscape: string;
      trailingChar: string;
      objectKeyExpected: string;
      unexpectedCharacter: string;
      invalidCharacter: string;
      invalidUnicode: string;
      couldNotRepair: string;
      atLineColumn: string;
      atLine: string;
      atPosition: string;
    };
    types: {
      object: string;
      array: string;
      string: string;
      number: string;
      boolean: string;
      null: string;
    };
    validate: {
      idleHint: string;
      validTitle: string;
      validBody: string;
      invalidTitle: string;
    };
    tree: {
      idleTitle: string;
      idleBody: string;
      errorTitle: string;
      errorBody: string;
    };
    search: {
      query: string;
      replaceWith: string;
      matchCount: string;
      noMatches: string;
      noMatchesBody: string;
      idleTitle: string;
      idleBody: string;
      errorTitle: string;
      errorBody: string;
      kindKey: string;
      kindValue: string;
      activeHint: string;
      replacedCount: string;
    };
    diff: {
      idleTitle: string;
      idleBody: string;
      identical: string;
      added: string;
      removed: string;
      changed: string;
      sideEmpty: string;
      emptyA: string;
      emptyB: string;
      bothInvalid: string;
    };
    jsonpath: {
      whatIs: string;
      hintTitle: string;
      hintBody: string;
      idleTitle: string;
      idleBody: string;
      errorTitle: string;
      errorBody: string;
      noResults: string;
      emptyPath: string;
    };
    transform: {
      tsIdleTitle: string;
      tsIdleBody: string;
      zodIdleTitle: string;
      zodIdleBody: string;
      schemaExplain: string;
      schemaUse: string;
      schemaIdleTitle: string;
      schemaIdleBody: string;
      yamlIdleTitle: string;
      yamlIdleBody: string;
      yamlToJsonIdle: string;
      yamlApplied: string;
      csvIdleTitle: string;
      csvIdleBodyJson: string;
      csvIdleBodyCsv: string;
      csvToJsonIdle: string;
      csvApplied: string;
      csvUnsupported: string;
    };
    utilities: {
      sortAsc: string;
      sortDesc: string;
      sortIdleTitle: string;
      sortIdleBody: string;
      sortApplied: string;
      removeOptions: string;
      removeNull: string;
      removeEmptyString: string;
      removeEmptyArray: string;
      removeEmptyObject: string;
      removeNullLabel: string;
      removeEmptyStringLabel: string;
      removeEmptyArrayLabel: string;
      removeEmptyObjectLabel: string;
      removePreserveHint: string;
      removeIdleTitle: string;
      removeIdleBody: string;
      nestedLabel: string;
      flatLabel: string;
      flattenHint: string;
      flattenUse: string;
      flattenIdleTitle: string;
      flattenIdleBody: string;
      flattenApplied: string;
      unflattenHint: string;
      unflattenUse: string;
      unflattenIdleTitle: string;
      unflattenIdleBody: string;
      escapeIdleTitle: string;
      escapeIdleBody: string;
      escapeHint: string;
      escapeUse: string;
      unescapeIdleTitle: string;
      unescapeIdleBody: string;
      repairHint: string;
      repairUse: string;
      repairAlreadyValid: string;
      repairFormatted: string;
      repairReady: string;
      repairApplied: string;
      repairAppliedToSource: string;
      repairFailedTitle: string;
      repairFailedAt: string;
      repairPreview: string;
      repairFixes: {
        "trailing-commas": string;
        "single-quotes": string;
        "smart-quotes": string;
        "unquoted-keys": string;
        "missing-commas": string;
        "missing-brackets": string;
        comments: string;
        "code-fence": string;
        "python-literals": string;
        "js-undefined": string;
        jsonp: string;
        "escaped-string": string;
        mongodb: string;
        ndjson: string;
        ellipsis: string;
        "string-concat": string;
        whitespace: string;
        truncated: string;
        "mid-edit-junk": string;
      };
      repairIdleTitle: string;
      repairIdleBody: string;
      fromSchemaHint: string;
      fromSchemaIdleTitle: string;
      fromSchemaIdleBody: string;
      extractHint: string;
      extractIdleTitle: string;
      extractIdleBody: string;
      extractKeysHint: string;
      extractKeysIdleTitle: string;
      extractKeysIdleBody: string;
      extractValuesHint: string;
      extractValuesIdleTitle: string;
      extractValuesIdleBody: string;
      fieldsLabel: string;
      fieldsClickHint: string;
      fieldsSelectAll: string;
      fieldsClear: string;
      fieldsEmpty: string;
      pickHint: string;
      pickIdleTitle: string;
      pickIdleBody: string;
      omitHint: string;
      omitIdleTitle: string;
      omitIdleBody: string;
      compareHint: string;
      compareUse: string;
      compareBack: string;
      compareIdleTitle: string;
      compareIdleBody: string;
      compareIdentical: string;
      compareMissing: string;
      compareExtra: string;
      compareType: string;
    };
    empty: {
      formatTitle: string;
      formatBody: string;
    };
    soon: {
      badge: string;
      title: string;
      body: string;
    };
    tools: {
      format: string;
      minify: string;
      validate: string;
      tree: string;
      search: string;
      diff: string;
      jsonpath: string;
      convert: string;
      toTypescript: string;
      toZod: string;
      toSchema: string;
      yaml: string;
      csv: string;
      sortKeys: string;
      removeEmpty: string;
      flatten: string;
      unflatten: string;
      escape: string;
      unescape: string;
      repair: string;
      extract: string;
      extractKeys: string;
      extractValues: string;
      pick: string;
      omit: string;
      compareStructure: string;
    };
  };
  generator: {
    title: string;
    subtitle: string;
    chooseType: string;
    searchPlaceholder: string;
    noTopics: string;
    fieldsLegend: string;
    moreFields: string;
    lessFields: string;
    optionalFields: string;
    records: string;
    customQty: string;
    country: string;
    countrySearch: string;
    selectPlaceholder: string;
    outputMode: string;
    modePayload: string;
    modeApi: string;
    modePayloadHint: string;
    modeApiHint: string;
    jsonType: string;
    viewJson: string;
    viewType: string;
    generate: string;
    generating: string;
    generateAgain: string;
    refresh: string;
    generated: string;
    download: string;
    createApi: string;
    createSuccess: string;
    createBlockedArray: string;
    createBlockedSize: string;
    openTemporary: string;
    emptyTitle: string;
    emptyBody: string;
    duration1h: string;
    duration6h: string;
    duration12h: string;
    duration24h: string;
    countries: Record<string, string>;
    categories: Record<string, string>;
    fields: Record<string, string>;
    topics: Record<
      string,
      {
        name: string;
        description: string;
        preview?: { line1: string; line2: string; line3?: string };
      }
    >;
    errors: {
      pickTopic: string;
      INVALID_TOPIC: string;
      INVALID_FIELDS: string;
      INVALID_QUANTITY: string;
      INVALID_COUNTRY: string;
      GENERATE_FAILED: string;
      DOWNLOAD_FAILED: string;
      CREATE_FAILED: string;
      LIMIT_REACHED: string;
      RATE_LIMITED: string;
    };
  };
  preview: {
    docs: string;
    playground: string;
    blurb: string;
    blurbFaHint: string;
    backToResource: string;
    search: string;
    create: string;
    edit: string;
    delete: string;
    save: string;
    saving: string;
    deleting: string;
    cancel: string;
    fillSample: string;
    noRecords: string;
    loading: string;
    confirmDelete: string;
    confirmDeleteBody: string;
    networkError: string;
    authDemoPassword: string;
    username: string;
    password: string;
    login: string;
    loginSuccess: string;
    logout: string;
    getMe: string;
    token: string;
    user: string;
    loginFirst: string;
    createdAt: string;
    fieldLabels: Record<string, string>;
    roleLabels: Record<string, string>;
  };
  changelog: Record<
    string,
    {
      title: string;
      summary: string;
      details: string[];
      /** Short line for the header bell menu */
      teaser?: string;
      /** Optional URL / hint under the teaser */
      hint?: string;
      /** Optional status chip in What's new (e.g. In development) */
      badge?: string;
    }
  >;
  catalog: Record<string, { title: string; summary: string }>;
};

export const de: Messages = {
  common: {
    home: "Startseite",
    docs: "Dokumentation",
    playground: "Playground",
    contact: "Kontakt",
    preview: "Vorschau",
    search: "Suchen",
    loading: "Wird geladen…",
    save: "Speichern",
    saving: "Wird gespeichert…",
    cancel: "Abbrechen",
    create: "Erstellen",
    edit: "Bearbeiten",
    delete: "Löschen",
    searchPlaceholder: "APIs durchsuchen…",
    noResults: "Keine Treffer",
    new: "Neu",
    inDevelopment: "In Entwicklung",
    actions: "Aktionen",
    copy: "Kopieren",
    copied: "Kopiert",
    live: "Live",
    open: "Öffnen",
    tryIt: "Ausprobieren",
    learnMore: "Mehr erfahren",
    back: "Zurück",
    close: "Schließen",
    yes: "Ja",
    no: "Nein",
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    send: "Senden",
    sending: "Wird gesendet…",
    networkError: "Netzwerkfehler",
    temporary: "Temporäre API",
    temporaryBadge: "Sofort",
    generator: "Generator",
    imageGenerator: "Bilder",
    jsonWorkbench: "JSON-Werkbank",
  },
  header: {
    primaryNav: "Hauptnavigation",
    whatsNew: "Neuigkeiten",
    whatsNewTitle: "Neuigkeiten",
    whatsNewSubtitle: "Aktuelle Updates und Features",
    latest: "Aktuell",
    contact: "Über",
    menu: "Menü",
    openMenu: "Menü öffnen",
    appearance: "Darstellung",
    lightMode: "Zum hellen Modus wechseln",
    darkMode: "Zum dunklen Modus wechseln",
    light: "Hell",
    dark: "Dunkel",
    apiLangGroup: "Sprache",
    english: "English",
    persian: "فارسی",
    github: "GitHub",
    githubStars: "GitHub — Projekt mit einem Stern markieren",
  },
  home: {
    tagline:
      "Kostenlose Mock-REST-APIs mit echtem JSON. Prototypen bauen, Auth testen und echte Endpunkte aufrufen — ganz ohne eigenes Backend.",
    taglineNote: "",
    resourcesTitle: "Ressourcen",
    resourcesBlurb:
      "Zehn aktive REST-APIs mit Dokumentation und Beispielen. In Produktion werden Demo-Daten gemeinsam genutzt.",
    searchLabel: "APIs und Endpunkte durchsuchen",
    searchPlaceholder: "Nach users, posts, auth suchen…",
    temporaryCtaTitle: "Temporäre API",
    temporaryCtaBody:
      "JSON einfügen und eine kurzlebige API anlegen — oder direkt über den Mock-Daten-Generator veröffentlichen. Den Link wie ein Passwort behandeln — bis zu 5 aktive gleichzeitig pro Browser.",
    temporaryCtaLink: "Temporäre API erstellen",
  },
  notFound: {
    title: "Seite nicht gefunden",
    body: "Diese URL gehört nicht zu MockData. Zurück zur Startseite oder in die Dokumentation.",
    home: "Startseite",
    docs: "Dokumentation",
  },
  blog: {
    title: "Blog",
    description:
      "Guides und Notizen zu Mock-Daten, JSON, APIs und Frontend-Workflows — für alle, die mit MockData entwickeln.",
    all: "Alle",
    emptyTitle: "Keine Beiträge",
    emptyBody: "Veröffentlichte Artikel erscheinen hier. Schau bald wieder vorbei.",
    emptyCategoryTitle: "Keine Beiträge",
    emptyCategoryBody: "Teste eine andere Kategorie oder zeige alle Beiträge an.",
    readingTime: "{n} Min. Lesezeit",
    previousPage: "Vorherige",
    nextPage: "Nächste",
    pageStatus: "Seite {page} von {total}",
    paginationNav: "Seitennavigation",
    categoriesNav: "Kategorien",
    backToBlog: "Blog",
    previousArticle: "Vorheriger",
    nextArticle: "Nächster",
    relatedArticles: "Passende Artikel",
    categories: {
      news: "Neuigkeiten",
      "mock-data": "Mock-Daten",
      json: "JSON",
      api: "API",
      frontend: "Frontend",
    },
  },
  contact: {
    title: "Kontakt",
    intro:
      "Fragen, Feedback oder Ideen? Schreib uns eine kurze Nachricht direkt ins Postfach. Alternativ erreichst du uns per E-Mail unter",
    name: "Name",
    email: "E-Mail",
    topic: "Thema",
    message: "Nachricht",
    send: "Nachricht senden",
    sending: "Wird gesendet…",
    success: "Nachricht gesendet. Danke — wir melden uns.",
    chooseTopic: "Wähle aus, worum es geht.",
    pickTopic: "Wobei können wir helfen?",
    topics: {
      question: "Eine Frage stellen",
      bug: "Bug melden",
      feature: "Feature vorschlagen",
      other: "Sonstiges",
    },
  },
  docs: {
    title: "Dokumentation",
    navLabel: "Docs",
    intro:
      "MockData liefert fingierte REST-Ressourcen als JSON. Nutze die öffentlichen Ressourcen nach Belieben, teste den Login mit Auth, starte Live-Requests im Playground, generiere Datensätze unter /generator, hole Platzhalterbilder unter /image-generator, öffne die JSON Workbench unter /json oder veröffentliche deine eigene temporäre API. In Produktion nutzen Katalog-Ressourcen eine gemeinsame Datenbank — siehe Geteilte Daten.",
    toc: {
      intro: "Einführung",
      whatsNew: "Neuigkeiten",
      temporary: "Temporäre API",
      generator: "Mock-Daten-Generator",
      imageGenerator: "Bildgenerator",
      jsonWorkbench: "JSON-Werkbank",
      sharedData: "Geteilte Daten",
      language: "Sprache",
      resources: "Ressourcen",
      openapi: "OpenAPI",
      requests: "Requests",
      errors: "Fehler",
      rateLimit: "Rate-Limits",
      reset: "Demo-Daten zurücksetzen",
    },
    whatsNewTitle: "Neuigkeiten",
    whatsNewBlurb:
      "Neue Entwickler-Features von aktuell bis älter. Klicke auf eine Karte für Details. Dieselbe Liste findest du oben über das Glocken-Symbol.",
    temporaryTitle: "Temporäre API",
    temporaryBody:
      "Du brauchst einen Wegwerf-REST-Endpunkt mit eigenem JSON? Temporäre APIs sind vom geteilten Katalog getrennt. Füge dein JSON ein, wähle die Laufzeit und erhalte eine öffentliche URL unter /api/t/… Du kannst auch direkt aus dem Mock-Daten-Generator über API erstellen veröffentlichen.",
    temporaryBullets: [
      "Kein Account nötig — direkt im Browser unter /temporary anlegen (oder über API erstellen in /generator).",
      "Laufzeiten: 1, 6, 12 oder 24 Stunden (Standard: 12 Std.).",
      "Rufe die öffentliche URL /api/t/… mit GET, POST, PATCH und DELETE wie eine normale Collection oder ein Dokument auf.",
      "Behandle den Link wie ein Passwort: Wer den Link kennt, kann Daten bis zum Ablauf lesen und ändern.",
      "Nach Ablauf einer API liefern Requests HTTP 410.",
    ],
    temporaryLimitsTitle: "Limits für temporäre APIs",
    temporaryLimitsBullets: [
      "Maximal 5 aktive temporäre APIs gleichzeitig pro Browser.",
      "Maximal 20 Erstellungen pro IP innerhalb eines gleitenden Zeitfensters von einer Stunde (darüber HTTP 429).",
      "JSON-Payload von maximal 64 KB.",
      "Maximale Verschachtelungstiefe 8; Arrays bis 500 Einträge; Objekte bis 200 Keys.",
      "Das globale /api-Limit greift weiterhin (ca. 60 Requests pro IP und Minute).",
    ],
    generatorTitle: "Mock-Daten-Generator",
    generatorBody:
      "Erzeuge realistisches JSON für dein Frontend ohne handgeschriebene Mocks. Läuft komplett im Browser. Wähle Datentyp, Felder und Anzahl — danach kopieren, herunterladen oder als temporäre API veröffentlichen.",
    generatorBullets: [
      "Öffne /generator — Personen, E-Commerce, Content, Medien, Business und Standortdaten.",
      "Wähle zwischen POST-Body (ohne id und Timestamps) oder API-Datensatz (id + createdAt + updatedAt).",
      "Die Sprache FA nutzt lokale persische Pakete; EN nutzt englische Pakete aus verschiedenen Ländern.",
      "Generiere bis zu 1.000 Datensätze; API erstellen folgt den Temporär-Limits (500 Einträge / 64 KB).",
      "Auswahlen und Ergebnisse bleiben beim Navigieren in der App erhalten (werden bei einem vollen Seiten-Reload geleert).",
    ],
    imageGeneratorTitle: "Bildgenerator",
    imageGeneratorBody:
      "Du brauchst eine Platzhalter-Bild-URL fürs Frontend? Nutze MockData-SVGs oder zufällige echte Fotos (über Picsum-Weiterleitung). Lege Breite und Höhe fest, kopiere den Link und nutze ihn in img, CSS oder jedem Bildfeld.",
    imageGeneratorBullets: [
      "Öffne /image-generator — SVG-Platzhalter oder echte Fotos.",
      "Öffentliches URL-Format: /image/{width}/{height} für SVG; hänge ?type=real für Fotos an.",
      "Standardmäßig zufällig. Der optionale Parameter ?seed= behält dieselben SVG-Farben oder dasselbe echte Foto bei.",
      "Fertige Formate für Avatar, Thumbnail, Profil, Beitrag, Cover, Banner und Story.",
    ],
    jsonWorkbenchTitle: "JSON Workbench",
    jsonWorkbenchBody:
      "JSON Workbench (in Entwicklung): ein zentraler Bereich im Browser für die tägliche Arbeit mit JSON beim UI-Bau — formatieren, vergleichen, suchen und umwandeln, ohne MockData zu verlassen.",
    jsonWorkbenchBullets: [
      "Öffne die JSON Workbench unter /json und wähle ein Tool — die Ansicht wechselt sofort (teilbar über ?tool=).",
      "Core: Formatieren, Baumansicht, Suchen, JSONPath und Struktur vergleichen.",
      "Transformieren: TypeScript, Zod, JSON Schema, YAML und CSV.",
      "Utilities: Keys sortieren, leere Werte entfernen, flachklopfen, escapen/reparieren, pick/omit und mehr.",
      "Läuft in deinem Browser — dein JSON wird an keinen Server gesendet.",
      "Noch in Entwicklung — weitere Tools und Feinschliff folgen.",
    ],
    sharedDataTitle: "Geteilte Daten",
    sharedDataBody:
      "Alle Besucher teilen sich dieselbe Live-Datenbank. Erstellen, Ändern und Löschen sind real und für alle sichtbar. In Produktion werden die Ausgangsdaten einmal täglich über GET /api/cron/reset zurückgesetzt. Ideal für Prototypen und Demos — nicht für dauerhafte Daten.",
    languageTitle: "Sprache",
    languageBody:
      "Standardmäßig erscheinen alle Ressourcentexte auf Englisch. Übergib lang=fa für persische Antworten mit iranischen Namen, Usernames, E-Mails, Telefonnummern und Texten. Cookies oder der Accept-Language-Header werden nicht ausgewertet — nur der Query-Parameter. Über den Sprachumschalter oben (English | فارسی) lässt sich das auch für Playground und Vorschau setzen.",
    languageBullets: [
      "Beispiel: GET /api/users?lang=fa",
      "FA-Antworten enthalten Content-Language: fa und ein font-Objekt (Vazirmatn) fürs Rendering.",
      "Mit فارسی oben wechselt die Oberfläche auf RTL und ergänzt lang=fa im Playground.",
    ],
    resourcesTitle: "Ressourcen",
    resourcesBlurb:
      "Aktive Endpunkte, die du sofort aufrufen kannst, plus ein kurzer Ausblick auf kommende Funktionen.",
    colResource: "Ressource",
    colBasePath: "Basispfad",
    colStatus: "Status",
    colDocs: "Docs",
    statusLive: "Live",
    statusDev: "In Entwicklung",
    statusSoon: "Demnächst",
    openapiTitle: "OpenAPI",
    openapiBody:
      "Maschinenlesbare Spezifikation aller aktiven Endpunkte (Auth, Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, Countries und Admin-Reset). Importierbar in Postman, Swagger UI oder KI-Tools.",
    download: "Download",
    requestsTitle: "Requests",
    requestsBody:
      "Listen liefern data + pagination. Einzelne Einträge liefern { data }.",
    errorsTitle: "Fehler",
    errorsBody:
      "Fehler liefern ein error-Objekt. Statuscodes: 400 Validierung, 401 nicht autorisiert, 404 nicht gefunden, 429 Rate-Limit überschritten, 500 Server. Mit ?status=500 (400–599) lässt sich in UI-Demos gezielt ein Fehler provozieren.",
    rateLimitTitle: "Rate-Limits",
    rateLimitBody:
      "Damit die Demo für alle fair bleibt, darf jede IP /api/* etwa {limit} Mal pro Minute aufrufen. Darüber erhältst du HTTP 429 (Too Many Requests). Die Antwort enthält außerdem X-RateLimit-Header mit den verbleibenden Aufrufen.",
    resetTitle: "Demo-Daten zurücksetzen",
    resetBody:
      "Alle nutzen dieselbe Demo-Datenbank. In der Live-Umgebung wird der Seed automatisch alle 24 Stunden neu eingespielt. Mit dem Admin-Secret kannst du die Seed-Tabellen über das Formular unten sofort leeren und neu befüllen.",
    resetPanel: {
      intro:
        "Gib das Admin-Secret ein, um die Demo-Tabellen zu leeren und den Standard-Seed neu zu laden.",
      placeholder: "Admin-Secret",
      button: "Jetzt zurücksetzen",
      resetting: "Wird zurückgesetzt…",
      needSecret: "Bitte zuerst das Admin-Secret eingeben.",
      confirm:
        "Dadurch werden die Seed-Tabellen geleert und die Standarddaten neu geladen. Fortfahren?",
      networkError: "Netzwerkfehler. Läuft der Server?",
      donePrefix: "Reset abgeschlossen",
    },
    colIndex: "#",
  },
  resourceDocs: {
    endpoints: "Endpunkte",
    queryParams: "Query-Parameter",
    examples: "Beispiele",
    response: "Antwort",
    tryExample: "Testen",
    preview: "Vorschau",
    playground: "Playground",
    backToResources: "Zurück zu den Ressourcen",
  },
  playground: {
    title: "Playground",
    blurb:
      "Schicke echte Requests an MockData-APIs. Prüfe das JSON im Browser — dein letzter Request pro Ressource bleibt während der Session erhalten.",
    resource: "Ressource",
    action: "Aktion",
    send: "Senden",
    sending: "Wird gesendet…",
    response: "Antwort",
    request: "Request",
    body: "Body",
    query: "Query",
    headers: "Headers",
    correct: "Gültig",
    wrong: "Ungültig",
    password: "Passwort",
    user: "Nutzer",
    pickUser: "Nutzer wählen",
    loadError: "Auswahloptionen konnten nicht geladen werden",
    emptyResponse: "Noch keine Antwort",
    startHint: "Wähle eine Ressource und sende einen Request zum Starten.",
    types: "TS",
    json: "JSON",
  },
  temporary: {
    title: "Temporäre API",
    blurb: "JSON einfügen und eine kurzlebige API anlegen.",
    privacyNote:
      "Behandle den Link wie ein Passwort. Bis zum Ablauf kann jeder mit dem Link Daten lesen und ändern. Bis zu 5 aktive gleichzeitig pro Browser.",
    jsonLabel: "JSON",
    durationLabel: "Laufzeit",
    duration1h: "1 Stunde",
    duration6h: "6 Stunden",
    duration12h: "12 Stunden",
    duration24h: "24 Stunden",
    checkJson: "Prüfen",
    jsonValid: "Sieht gut aus — bereit zum Erstellen.",
    jsonHint: "Jederzeit prüfen oder direkt erstellen.",
    create: "API erstellen",
    creating: "Wird erstellt…",
    acceptFix: "Fix übernehmen & erstellen",
    rejectFix: "Weiter bearbeiten",
    fixedPreview: "Wir haben ein paar Probleme behoben. Prüfen und erstellen.",
    myApis: "Meine APIs",
    emptyList: "Noch keine aktive API.",
    copyUrl: "Kopieren",
    delete: "Löschen",
    deleteAll: "Alle löschen",
    deleting: "…",
    confirmDelete: "Diese API löschen?",
    confirmDeleteBody: "Die URL funktioniert dann sofort nicht mehr.",
    confirmDeleteAll: "Alle APIs löschen?",
    confirmDeleteAllBody: "Alle URLs in dieser Liste funktionieren dann sofort nicht mehr.",
    cancel: "Abbrechen",
    limitReached: "Limit von 5 APIs erreicht.",
    limitReachedBody: "Lösche unten eine API oder warte, bis eine abläuft.",
    createdTitle: "Erstellt",
    openApi: "Öffnen",
    slotsLabel: "{n} / 5",
    maxActive: "",
    sampleJson: `[
  { "id": "1", "firstName": "Hannah", "lastName": "Weber", "role": "admin" },
  { "id": "2", "firstName": "Leon", "lastName": "Becker", "role": "member" },
  { "id": "3", "firstName": "Mia", "lastName": "Hoffmann", "role": "member" }
]`,
    issues: {
      EMPTY: "Füge ein JSON-Objekt oder -Array ein.",
      INVALID_JSON: "Ungültiges JSON — prüfe Kommas, Anführungszeichen sowie Klammern.",
      TOO_LARGE: "JSON ist zu groß (max. {max} KB).",
      NOT_OBJECT_OR_ARRAY: "Die Wurzel muss ein Objekt { } oder Array [ ] sein.",
      TOO_DEEP: "Zu tief verschachtelt (max. Tiefe {max}).",
      ARRAY_TOO_LONG: "Array ist zu lang (max. {max} Einträge).",
      TOO_MANY_KEYS: "Zu viele Keys in einem Objekt (max. {max}).",
      UNSAFE_KEY: "Der unsichere Key „{key}“ ist nicht erlaubt.",
      AUTO_FIXED: "Nachgestellte Kommas oder unsichere Keys wurden entfernt.",
    },
  },
  imageGenerator: {
    title: "Bildgenerator",
    blurb:
      "Für Projektbilder kannst du MockData-SVGs oder zufällige echte Fotos in eigenen Maßen nutzen. Setze die Bild-URL direkt in ein img-Tag, ins CSS oder in jedes Bildfeld.",
    modeSvg: "SVG",
    modeReal: "Echtes Foto",
    width: "Breite",
    height: "Höhe",
    generate: "Generieren",
    generating: "Wird generiert…",
    yourUrl: "Deine API-URL",
    preview: "Vorschau",
    useInProject: "Im Projekt verwenden",
    tabUrl: "URL",
    tabHtml: "HTML",
    tabCss: "CSS",
    tabJs: "JavaScript",
    tabCurl: "cURL",
    readySizes: "Fertige Größen",
    sizes: {
      avatar: "Avatar",
      thumbnail: "Thumbnail",
      profile: "Profil",
      square: "Quadrat",
      post: "Beitrag",
      cover: "Cover",
      banner: "Banner",
      story: "Story",
    },
  },
  jsonWorkbench: {
    title: "JSON Workbench",
    blurb:
      "JSON einmal einfügen. Danach Aktion wählen — formatieren, suchen, umwandeln und mehr, ohne neu einzufügen.",
    toolNavLabel: "Workbench-Tools",
    source: {
      title: "Dein JSON",
      hint: "Einmal hier einfügen. Jede Aktion unten nutzt dieses Dokument.",
      sample: "Beispiel laden",
      valid: "Gültiges JSON.",
      needJson: "Füge links zuerst dein JSON ein.",
      fixFirst: "Behebe den JSON-Fehler in Dein JSON und versuche es erneut.",
      pickAction: "Was möchtest du tun?",
      useResult: "Als JSON übernehmen",
      diffHint: "Dein JSON ist Seite A. Füge unten das andere Dokument als B ein.",
      escapedInput: "Escapeter String",
      schemaInput: "JSON Schema",
      fromSchemaNote:
        "Füge unten ein JSON Schema ein — erzeugt ein Beispieldokument, das du in Dein JSON übernehmen kannst.",
    },
    categories: {
      core: "Core",
      transform: "Transformieren",
      utility: "Utilities",
    },
    labels: {
      input: "Eingabe",
      output: "Ausgabe",
      tree: "Baum",
      matches: "Treffer",
      jsonA: "JSON A",
      jsonB: "JSON B",
      diffResult: "Diff-Ergebnis",
      jsonpath: "JSONPath",
      result: "Ergebnis ({count})",
    },
    actions: {
      format: "Formatieren",
      minify: "Minifizieren",
      showTree: "Baum anzeigen",
      search: "Suchen",
      clearSearch: "Suche leeren",
      replace: "Ersetzen",
      replaceAll: "Alle ersetzen",
      prevMatch: "Vorheriger Treffer",
      nextMatch: "Nächster Treffer",
      compare: "Vergleichen",
      run: "Ausführen",
      runPath: "Ausführen",
      toTypescript: "Types generieren",
      toZod: "Zod generieren",
      toSchema: "Schema generieren",
      swapDirection: "Richtung tauschen",
      sortKeys: "Keys sortieren",
      removeEmpty: "Leere entfernen",
      flatten: "Flachklopfen",
      unflatten: "Verschachteln",
      escape: "Escapen",
      unescape: "Unescapen",
      repair: "Reparieren",
      fromSchema: "Beispiel erzeugen",
      extractKeys: "Keys extrahieren",
      extractValues: "Werte extrahieren",
      pick: "Felder auswählen",
      omit: "Felder ausschließen",
      compareStructure: "Struktur vergleichen",
      clear: "Leeren",
      expandAll: "Alle aufklappen",
      collapseAll: "Alle zuklappen",
      copyPath: "Pfad kopieren",
      copyValue: "Wert kopieren",
    },
    errors: {
      empty: "Füge zuerst JSON ein.",
      invalid: "Ungültiges JSON.",
      unexpectedEnd: "Unerwartetes Ende des JSON.",
      unexpectedToken: "Unerwartetes Token: {token}",
      expectedPropertyName: "Eigenschaftsname in doppelten Anführungszeichen erwartet.",
      expectedCommaOrBrace: "„,“ oder „}“ nach einem Eigenschaftswert erwartet.",
      expectedCommaOrBracket: "„,“ oder „]“ nach einem Array-Element erwartet.",
      expectedColon: "„:“ nach dem Eigenschaftsnamen erwartet.",
      unterminatedString: "Nicht abgeschlossener String.",
      badControlChar: "Ungültiges Steuerzeichen innerhalb eines Strings.",
      badEscape: "Ungültige Escape-Sequenz innerhalb eines Strings.",
      trailingChar: "Unerwartete Zeichen nach dem JSON-Wert.",
      objectKeyExpected: "Objekt-Key erwartet.",
      unexpectedCharacter: "Unerwartetes Zeichen: {char}",
      invalidCharacter: "Ungültiges Zeichen: {char}",
      invalidUnicode: "Ungültiger Unicode-Escape: {chars}",
      couldNotRepair: "Dieses JSON konnte nicht repariert werden.",
      atLineColumn: "Zeile {line}, Spalte {column}",
      atLine: "Zeile {line}",
      atPosition: "Position {position}",
    },
    types: {
      object: "Objekt",
      array: "Array",
      string: "String",
      number: "Zahl",
      boolean: "Boolean",
      null: "null",
    },
    validate: {
      idleHint: "JSON einfügen und prüfen. Es wird nur die Standard-JSON-Syntax validiert.",
      validTitle: "Gültiges JSON",
      validBody: "Wurzeltyp: {type}",
      invalidTitle: "Ungültiges JSON",
    },
    tree: {
      idleTitle: "Der Baum erscheint hier",
      idleBody: "Füge links JSON ein und klicke auf Baum anzeigen.",
      errorTitle: "Baum kann nicht erstellt werden",
      errorBody: "Behebe zuerst den JSON-Fehler und versuche es erneut.",
    },
    search: {
      query: "Suchen",
      replaceWith: "Ersetzen durch",
      matchCount: "{current} von {total}",
      noMatches: "Keine Treffer",
      noMatchesBody: "Nichts in Keys oder Werten hat zur Suche gepasst.",
      idleTitle: "Treffer erscheinen hier",
      idleBody: "Suchbegriff eingeben und auf Suchen klicken. Durchsucht Keys und Werte.",
      errorTitle: "Suche nicht möglich",
      errorBody: "Behebe zuerst den JSON-Fehler und suche erneut.",
      kindKey: "Key",
      kindValue: "Wert",
      activeHint: "{kind} · {path}",
      replacedCount: "{count} Treffer ersetzt.",
    },
    diff: {
      idleTitle: "Das Diff erscheint hier",
      idleBody: "Füge JSON A und JSON B ein und starte den Vergleich.",
      identical: "Keine Unterschiede — beide Dokumente haben dieselbe Struktur.",
      added: "Hinzugefügt / in B",
      removed: "Entfernt / in A",
      changed: "Geändert",
      sideEmpty: "Auf dieser Seite steht nichts.",
      emptyA: "JSON A ist leer.",
      emptyB: "JSON B ist leer.",
      bothInvalid: "Sowohl JSON A als auch JSON B sind ungültig.",
    },
    jsonpath: {
      whatIs:
        "JSONPath extrahiert Werte aus verschachteltem JSON — ähnlich wie ein CSS-Selektor für Daten. Klicke unten auf ein Beispiel.",
      hintTitle: "Syntax",
      hintBody: `$              Wurzel
.users         Eigenschaft
[*]            Alle Array-Einträge
[0]            Erster Eintrag`,
      idleTitle: "Das Ergebnis erscheint hier",
      idleBody: "Pfad eingeben und Abfrage ausführen.",
      errorTitle: "Abfrage kann nicht ausgeführt werden",
      errorBody: "Korrigiere den Fehler im JSON oder Pfad und versuche es erneut.",
      noResults: "Keine Treffer für diesen Pfad.",
      emptyPath: "Bitte einen JSONPath-Ausdruck eingeben.",
    },
    transform: {
      tsIdleTitle: "TypeScript-Code erscheint hier",
      tsIdleBody: "JSON einfügen und Types generieren.",
      zodIdleTitle: "Zod-Schema erscheint hier",
      zodIdleBody: "JSON einfügen und ein Zod-Schema generieren.",
      schemaExplain: "JSON ↔ Schema",
      schemaUse:
        "Leite ein JSON Schema aus Dein JSON ab oder gehe den umgekehrten Weg für ein Beispieldokument aus einem Schema.",
      schemaIdleTitle: "JSON Schema erscheint hier",
      schemaIdleBody: "JSON einfügen und ein Schema generieren.",
      yamlIdleTitle: "YAML erscheint hier",
      yamlIdleBody: "Dein JSON wird live in YAML umgewandelt.",
      yamlToJsonIdle: "Oben YAML einfügen — wird zu Dein JSON.",
      yamlApplied: "Umgewandelt — Dein JSON wurde aktualisiert.",
      csvIdleTitle: "CSV erscheint hier",
      csvIdleBodyJson:
        "Wandelt Dein JSON um — ein einzelnes Objekt, ein Array aus Objekten oder ein Objekt mit einer Tabelle darin.",
      csvIdleBodyCsv: "CSV mit Kopfzeile einfügen und in JSON umwandeln.",
      csvToJsonIdle: "Oben CSV einfügen — wird zu Dein JSON.",
      csvApplied: "Umgewandelt — Dein JSON wurde aktualisiert.",
      csvUnsupported: "Dieses JSON lässt sich nicht in CSV umwandeln.",
    },
    utilities: {
      sortAsc: "A → Z",
      sortDesc: "Z → A",
      sortIdleTitle: "Bereit zum Sortieren",
      sortIdleBody: "Wähle A→Z oder Z→A — sortierte Keys erscheinen in der Ausgabe.",
      sortApplied: "Keys sortiert — siehe Ausgabe unten.",
      removeOptions: "Diese Werte entfernen",
      removeNull: "null",
      removeEmptyString: '""',
      removeEmptyArray: "[]",
      removeEmptyObject: "{}",
      removeNullLabel: "null-Werte",
      removeEmptyStringLabel: "leere Strings",
      removeEmptyArrayLabel: "leere Arrays",
      removeEmptyObjectLabel: "leere Objekte",
      removePreserveHint: "false und 0 bleiben immer erhalten.",
      removeIdleTitle: "Bereinigtes JSON erscheint hier",
      removeIdleBody: "Auswählen, was entfernt werden soll, und ausführen.",
      nestedLabel: "Verschachtelt",
      flatLabel: "Flach",
      flattenHint: "Wandelt verschachtelte Objekte in Punkt-Keys um — z. B. address.city und skills.0.",
      flattenUse:
        "Praktisch für Tabellen, .env-Dateien, Suchindizes oder APIs, die nur flache Key/Value-Maps akzeptieren.",
      flattenIdleTitle: "Bereit zum Flachklopfen",
      flattenIdleBody: "Verschachtelte Keys werden in der Ausgabe zu Punktpfaden.",
      flattenApplied: "Flachgeklopft — siehe Ausgabe unten.",
      unflattenHint: "Punktpfade bauen wieder Objekte auf; Zahlensegmente bauen wieder Arrays auf.",
      unflattenUse:
        "Nützlich, wenn du flache Keys hast (user.name, skills.0) und verschachteltes JSON zurückbrauchst.",
      unflattenIdleTitle: "Verschachteltes JSON erscheint hier",
      unflattenIdleBody: "Objekt mit Punktpfaden einfügen und verschachteln.",
      escapeIdleTitle: "Escapeter String erscheint hier",
      escapeIdleBody: "Dein JSON wird für die Verwendung innerhalb eines Strings escaped.",
      escapeHint:
        "Verwandelt dein JSON in einen einzelnen escapeten String — Anführungszeichen und Zeilenumbrüche werden zu \" / \n, damit es in einen anderen String oder eine Config passt.",
      escapeUse:
        "Hilfreich, um JSON in Code, Umgebungsvariablen oder Logs einzubetten, ohne äußere Anführungszeichen zu sprengen.",
      unescapeIdleTitle: "JSON erscheint hier",
      unescapeIdleBody: "Escapeten JSON-String einfügen und unescapen.",
      repairHint:
        "Mehrstufige Reparatur für kaputtes, abgeschnittenes, kommentiertes oder halbfertiges JSON.",
      repairUse:
        "Korrigiert Anführungszeichen, Kommas und Klammern; entfernt Kommentare und Codeblöcke; verarbeitet Python-/JS-Literale, JSONP, MongoDB-Typen, NDJSON, abgeschnittene Dokumente und Tippfehler zwischendurch.",
      repairAlreadyValid: "War schon gültig. Nur formatiert.",
      repairFormatted: "Formatiert.",
      repairReady: "Lässt sich reparieren.",
      repairApplied: "Repariert.",
      repairAppliedToSource: "In Dein JSON übernommen.",
      repairFailedTitle: "Konnte nicht vollständig repariert werden",
      repairFailedAt: "{message} (Zeile {line}, Spalte {column})",
      repairPreview: "Repariert",
      repairFixes: {
        "trailing-commas": "Nachgestellte Kommas",
        "single-quotes": "Einfache Anführungszeichen",
        "smart-quotes": "Typografische Anführungszeichen",
        "unquoted-keys": "Keys ohne Anführungszeichen",
        "missing-commas": "Fehlende Kommas",
        "missing-brackets": "Fehlende Klammern",
        comments: "Kommentare",
        "code-fence": "Codeblock",
        "python-literals": "Python-Literale",
        "js-undefined": "undefined → null",
        jsonp: "JSONP-Wrapper",
        "escaped-string": "Escapeter JSON-String",
        mongodb: "MongoDB-Typen",
        ndjson: "NDJSON → Array",
        ellipsis: "Auslassungspunkte",
        "string-concat": "String-Verkettung",
        whitespace: "Leerzeichen / Formatierung",
        truncated: "Abgeschnitten / unvollständig",
        "mid-edit-junk": "Reste beim Tippen",
      },
      repairIdleTitle: "Repariertes JSON erscheint hier",
      repairIdleBody:
        "Kaputten Text oder Fast-JSON in Dein JSON einfügen — die Reparatur läuft live in der Ausgabe.",
      fromSchemaHint:
        "Schema → Beispiel-JSON aus type, properties, required, items, enum und default.",
      fromSchemaIdleTitle: "Beispiel-JSON erscheint hier",
      fromSchemaIdleBody: "Unten ein JSON Schema einfügen und ein Beispiel erzeugen.",
      extractHint:
        "Liefert Paare aus Blattpfad und Wert — z. B. { path: \"address.city\", value: \"Berlin\" }.",
      extractIdleTitle: "Keys und Werte erscheinen hier",
      extractIdleBody: "Oben Felder auswählen, um Pfade und Werte zu extrahieren.",
      extractKeysHint: "Liefert verschachtelte Key-Pfade in Punktnotation (Arrays als .0).",
      extractKeysIdleTitle: "Keys erscheinen hier",
      extractKeysIdleBody: "JSON einfügen und Keys extrahieren.",
      extractValuesHint: "Sammelt Blattwerte (Primitive und null) rekursiv ein.",
      extractValuesIdleTitle: "Werte erscheinen hier",
      extractValuesIdleBody: "JSON einfügen und Werte extrahieren.",
      fieldsLabel: "Felder aus Dein JSON",
      fieldsClickHint:
        "Pfade anklicken zum Auswählen — kein Tippen nötig. Verschachtelte Pfade nutzen Punkte.",
      fieldsSelectAll: "Alle auswählen",
      fieldsClear: "Leeren",
      fieldsEmpty: "Dieses JSON hat keine auswählbaren Felder.",
      pickHint: "Nur gewählte Felder behalten — klicke unten auf die Felder.",
      pickIdleTitle: "Ergebnis erscheint hier",
      pickIdleBody: "",
      omitHint: "Gewählte Felder entfernen — klicke unten auf die Felder.",
      omitIdleTitle: "Ergebnis erscheint hier",
      omitIdleBody: "",
      compareHint: "Zwei JSON-Dokumente nebeneinander einfügen. Nur Struktur — Werte werden ignoriert.",
      compareUse:
        "Fehlende Keys leuchten rot in A, zusätzliche Keys grün in B und Typabweichungen bernsteinfarben auf beiden Seiten.",
      compareBack: "Zurück zur Workbench",
      compareIdleTitle: "Beide JSON-Dokumente einfügen",
      compareIdleBody: "Links und rechts JSON hinzufügen, um die Struktur zu vergleichen.",
      compareIdentical: "Gleiche Struktur — Types und Keys stimmen überein.",
      compareMissing: "Fehlend (nur in A)",
      compareExtra: "Zusätzlich (nur in B)",
      compareType: "Typabweichung",
    },
    empty: {
      formatTitle: "Formatiertes JSON erscheint hier",
      formatBody: "Links JSON einfügen und auf Formatieren klicken.",
    },
    soon: {
      badge: "Demnächst",
      title: "{tool} folgt in Kürze",
      body: "Dieses Tool ist als Vorschau auf die komplette Workbench gelistet und wird in einem späteren Schritt freigeschaltet.",
    },
    tools: {
      format: "Formatieren",
      minify: "Minifizieren",
      validate: "Validieren",
      tree: "Baumansicht",
      search: "Suchen",
      diff: "Diff",
      jsonpath: "JSONPath",
      convert: "Konvertieren",
      toTypescript: "TypeScript",
      toZod: "Zod",
      toSchema: "JSON Schema",
      yaml: "YAML",
      csv: "CSV",
      sortKeys: "Keys sortieren",
      removeEmpty: "Leere entfernen",
      flatten: "Flachklopfen",
      unflatten: "Verschachteln",
      escape: "Escapen",
      unescape: "Unescapen",
      repair: "Reparieren",
      extract: "Keys und Werte extrahieren",
      extractKeys: "Keys extrahieren",
      extractValues: "Werte extrahieren",
      pick: "Pick",
      omit: "Omit",
      compareStructure: "Struktur vergleichen",
    },
  },
  generator: {
    title: "Mock-Daten-Generator",
    subtitle: "Realistische Daten für deine Frontend-Projekte erzeugen.",
    chooseType: "Datentypen",
    searchPlaceholder: "Daten durchsuchen…",
    noTopics: "Keine passenden Datentypen gefunden.",
    fieldsLegend: "Felder",
    moreFields: "Mehr Felder",
    lessFields: "Optionale ausblenden",
    optionalFields: "Optionale Felder",
    records: "Datensätze",
    customQty: "Eigene Anzahl",
    country: "Land",
    countrySearch: "Länder suchen…",
    selectPlaceholder: "Datentyp wählen…",
    outputMode: "Ausgabeformat",
    modePayload: "POST-Body",
    modeApi: "API-Datensatz",
    modePayloadHint: "Ohne id und Timestamps — bereit für einen POST-Request beim Anlegen.",
    modeApiHint: "Enthält id, createdAt und updatedAt wie eine gespeicherte Zeile in der API.",
    jsonType: "JSON",
    viewJson: "JSON",
    viewType: "TS",
    generate: "{n} Datensätze generieren",
    generating: "Generiere {n} Datensätze…",
    generateAgain: "Erneut generieren",
    refresh: "Neu generieren",
    generated: "{n} Datensätze generiert",
    download: "Download",
    createApi: "API erstellen",
    createSuccess: "Temporäre API erstellt.",
    createBlockedArray:
      "Temporäre APIs erlauben bis zu 500 Einträge. Verringere die Anzahl zum Veröffentlichen.",
    createBlockedSize:
      "Dieses JSON überschreitet das Limit für temporäre APIs (64 KB). Verringere die Anzahl oder entferne Felder.",
    openTemporary: "In Temporäre API verwalten",
    emptyTitle: "Datentyp wählen",
    emptyBody: "Wähle oben einen Typ aus, um realistische Daten zu generieren.",
    duration1h: "1 Std.",
    duration6h: "6 Std.",
    duration12h: "12 Std.",
    duration24h: "24 Std.",
    countries: {
      all: "Alle Länder",
      IR: "Iran",
      DE: "Deutschland",
      US: "USA",
      GB: "Großbritannien",
      FR: "Frankreich",
      NL: "Niederlande",
      JP: "Japan",
      CA: "Kanada",
    },
    categories: {
      people: "Personen",
      ecommerce: "E-Commerce",
      content: "Content",
      media: "Medien",
      business: "Business",
      location: "Standort",
    },
    fields: {
      id: "id",
      name: "Name",
      username: "Username",
      email: "E-Mail",
      avatar: "Avatar",
      phone: "Telefon",
      company: "Unternehmen",
      location: "Standort",
      age: "Alter",
      role: "Rolle",
      jobTitle: "Jobtitel",
      department: "Abteilung",
      bio: "Bio",
      website: "Website",
      createdAt: "Erstellt am",
      updatedAt: "Aktualisiert am",
      hiredAt: "Eingestellt am",
      ordersCount: "Anzahl Bestellungen",
      totalSpent: "Gesamtausgaben",
      postsCount: "Anzahl Beiträge",
      price: "Preis",
      image: "Bild",
      category: "Kategorie",
      description: "Beschreibung",
      brand: "Marke",
      stock: "Bestand",
      rating: "Bewertung",
      sku: "SKU",
      colors: "Farben",
      orderId: "Bestell-ID",
      customer: "Kunde",
      items: "Artikel",
      total: "Gesamt",
      status: "Status",
      orderDate: "Bestelldatum",
      paymentStatus: "Zahlungsstatus",
      shippingAddress: "Lieferadresse",
      user: "Nutzer",
      comment: "Kommentar",
      post: "Beitrag",
      date: "Datum",
      product: "Produkt",
      title: "Titel",
      verified: "Verifiziert",
      helpful: "Hilfreich",
      slug: "Slug",
      parentCategory: "Übergeordnete Kategorie",
      productCount: "Anzahl Produkte",
      quantity: "Menge",
      discount: "Rabatt",
      code: "Code",
      type: "Typ",
      expiresAt: "Läuft ab am",
      minimumOrder: "Mindestbestellwert",
      usageLimit: "Nutzungslimit",
      active: "Aktiv",
      amount: "Betrag",
      currency: "Währung",
      paymentMethod: "Zahlungsart",
      transactionId: "Transaktions-ID",
      order: "Bestellung",
      carrier: "Versanddienstleister",
      trackingNumber: "Sendungsnummer",
      estimatedDelivery: "Voraussichtliche Lieferung",
      body: "Inhalt",
      author: "Autor",
      tags: "Tags",
      publishedAt: "Veröffentlicht am",
      likes: "Likes",
      views: "Aufrufe",
      replies: "Antworten",
      attachments: "Anhänge",
      actionUrl: "Aktions-URL",
      sender: "Absender",
      receiver: "Empfänger",
      message: "Nachricht",
      read: "Gelesen",
      artist: "Interpret",
      cover: "Cover",
      year: "Jahr",
      genre: "Genre",
      tracks: "Tracks",
      album: "Album",
      duration: "Dauer",
      poster: "Poster",
      director: "Regie",
      language: "Sprache",
      plays: "Wiedergaben",
      label: "Label",
      pages: "Seiten",
      isbn: "ISBN",
      instructor: "Dozent",
      level: "Niveau",
      lessons: "Lektionen",
      students: "Teilnehmende",
      employees: "Mitarbeitende",
      logo: "Logo",
      industry: "Branche",
      salary: "Gehalt",
      experience: "Erfahrung",
      remote: "Remote",
      founded: "Gegründet",
      postedAt: "Eingestellt am",
      capacity: "Kapazität",
      capital: "Hauptstadt",
      flag: "Flagge",
      region: "Region / Bundesland",
      population: "Einwohnerzahl",
      street: "Straße",
      postalCode: "PLZ",
      latitude: "Breitengrad",
      longitude: "Längengrad",
      country: "Land",
      city: "Stadt",
      notes: "Notizen",
      team: "Team",
      joinedAt: "Dabei seit",
      skills: "Skills",
      specialty: "Fachgebiet",
      hospital: "Klinik",
      licenseNumber: "Zulassungsnummer",
      yearsExperience: "Berufsjahre",
      bloodType: "Blutgruppe",
      diagnosis: "Diagnose",
      doctor: "Ärztin / Arzt",
      admittedAt: "Aufgenommen am",
      vehicleType: "Fahrzeugtyp",
      plateNumber: "Kennzeichen",
      tripsCount: "Anzahl Fahrten",
      roomNumber: "Zimmernummer",
      checkIn: "Check-in",
      checkOut: "Check-out",
      nights: "Nächte",
      followers: "Follower",
      following: "Folgt",
      grade: "Klasse / Jahrgang",
      school: "Schule",
      gpa: "Notenschnitt",
      major: "Studiengang",
      enrollmentYear: "Immatrikulationsjahr",
      subject: "Fach",
      classesCount: "Anzahl Kurse",
      invoiceNumber: "Rechnungsnummer",
      issueDate: "Ausstellungsdatum",
      dueDate: "Fälligkeitsdatum",
      tax: "Steuer",
      itemsCount: "Anzahl Positionen",
      target: "Ziel",
      targetType: "Zieltyp",
      reaction: "Reaktion",
      color: "Farbe",
      thumbnail: "Thumbnail",
      channel: "Kanal",
      url: "URL",
      width: "Breite",
      height: "Höhe",
      alt: "Alt-Text",
      photographer: "Fotograf",
      host: "Host",
      episodes: "Folgen",
      subscribers: "Abonnenten",
      owner: "Verantwortlich",
      public: "Öffentlich",
      progress: "Fortschritt",
      teamSize: "Teamgröße",
      budget: "Budget",
      startDate: "Startdatum",
      membersCount: "Anzahl Mitglieder",
      focus: "Schwerpunkt",
      countriesCount: "Anzahl Länder",
      areaKm2: "Fläche (km²)",
      timezone: "Zeitzone",
      terminals: "Terminals",
      altitude: "Höhe",
      accuracy: "Genauigkeit",
    },
    topics: {
      users: {
        name: "Nutzer",
        description: "Nutzerprofile für Apps und Dashboards",
        preview: {
          line1: "Hannah Weber",
          line2: "@hannah.w · hannah@mail.test",
          line3: "Berlin",
        },
      },
      customers: {
        name: "Kunden",
        description: "Käufer und Account-Kontakte",
        preview: {
          line1: "Leon Becker",
          line2: "leon@demo.dev",
          line3: "+49 170 1234567",
        },
      },
      employees: {
        name: "Mitarbeitende",
        description: "Teammitglieder mit Jobtiteln und Abteilungen",
        preview: {
          line1: "Mia Hoffmann",
          line2: "Frontend-Entwicklerin",
          line3: "Engineering · Acme",
        },
      },
      authors: {
        name: "Autorinnen & Autoren",
        description: "Schreibende und Content-Creators",
        preview: {
          line1: "Jonas Fischer",
          line2: "Schreibt über Produktdesign.",
        },
      },
      contacts: {
        name: "Kontakte",
        description: "CRM-Kontakte und Unternehmensbezüge",
        preview: {
          line1: "Lea Schäfer",
          line2: "lea@acme.test · Acme",
        },
      },
      "team-members": {
        name: "Teammitglieder",
        description: "Leute aus Produkt- und Engineering-Teams",
        preview: {
          line1: "Paul Richter",
          line2: "Tech Lead · Engineering",
        },
      },
      doctors: {
        name: "Ärzte & Ärztinnen",
        description: "Medizinisches Personal mit Fachgebiet und Klinik",
        preview: {
          line1: "Dr. Clara Neumann",
          line2: "Kardiologie · Charité",
        },
      },
      patients: {
        name: "Patienten",
        description: "Akte mit Diagnose und Blutgruppe",
        preview: {
          line1: "Finn Schwarz",
          line2: "A+ · Bluthochdruck",
        },
      },
      drivers: {
        name: "Fahrerinnen & Fahrer",
        description: "Flottenfahrer mit Fahrzeug und Bewertung",
        preview: {
          line1: "Tim Braun",
          line2: "Limousine · ★ 4,8",
        },
      },
      guests: {
        name: "Hotelgäste",
        description: "Hotelgäste mit Zimmernummer und Aufenthaltsstatus",
        preview: {
          line1: "Emma Zimmermann",
          line2: "Zimmer 412 · eingecheckt",
        },
      },
      profiles: {
        name: "Profile",
        description: "Social-Profile mit Followern und Bio",
        preview: {
          line1: "Sophia Krüger",
          line2: "@sophiakrueger · 12,4 Tsd. Follower",
        },
      },
      "girl-students": {
        name: "Schülerinnen",
        description: "Schülerinnen mit Jahrgang und Schule",
        preview: {
          line1: "Lina Hartmann",
          line2: "11. Klasse · Goethe-Gymnasium",
        },
      },
      "boy-students": {
        name: "Schüler",
        description: "Schüler mit Jahrgang und Schule",
        preview: {
          line1: "Noah Lange",
          line2: "9. Klasse · Schiller-Schule",
        },
      },
      teachers: {
        name: "Lehrkräfte",
        description: "Lehrkräfte mit Fach und Schule",
        preview: {
          line1: "Katrin Vogel",
          line2: "Mathematik · Lessing-Gymnasium",
        },
      },
      products: {
        name: "Produkte",
        description: "Shop-Artikel und Preise",
        preview: {
          line1: "Kabelloser Kopfhörer",
          line2: "129,90 € · Elektronik",
          line3: "★★★★☆",
        },
      },
      orders: {
        name: "Bestellungen",
        description: "Bestellungen mit Artikeln und Status",
        preview: {
          line1: "Bestellung #10482",
          line2: "3 Artikel · 214,90 €",
          line3: "Zugestellt",
        },
      },
      reviews: {
        name: "Bewertungen",
        description: "Kundenbewertungen und Rezensionen",
        preview: {
          line1: "★★★★★ Top Produkt",
          line2: "Sehr praktisch und leicht bedienbar.",
        },
      },
      categories: {
        name: "Kategorien",
        description: "Produktkatalog-Gruppen",
        preview: { line1: "Elektronik", line2: "elektronik" },
      },
      "cart-items": {
        name: "Warenkorb-Artikel",
        description: "Artikel im Warenkorb",
        preview: { line1: "Smartwatch", line2: "2 × 199 € · 398 €" },
      },
      coupons: {
        name: "Gutscheincodes",
        description: "Rabattcodes und Bedingungen",
        preview: { line1: "WILLKOMMEN10", line2: "10 % · läuft ab am 01.12.2026" },
      },
      payments: {
        name: "Zahlungen",
        description: "Zahlungsversuche und Zahlungsarten",
        preview: { line1: "84,50 € EUR", line2: "Karte · bezahlt" },
      },
      shipments: {
        name: "Sendungen",
        description: "Versanddienstleister und Tracking-Status",
        preview: { line1: "BEST-10482 · DHL", line2: "Unterwegs" },
      },
      invoices: {
        name: "Rechnungen",
        description: "Rechnungsdokumente mit Beträgen und Fälligkeit",
        preview: { line1: "RE-10482", line2: "1.250 € · bezahlt" },
      },
      brands: {
        name: "Marken",
        description: "Shop-Marken mit Logos und Katalogen",
        preview: { line1: "Acme", line2: "acme · 128 Produkte" },
      },
      posts: {
        name: "Beiträge",
        description: "Blogartikel und Feed-Posts",
        preview: { line1: "Auf Tempo ausgelegt", line2: "Von Sophia Krüger" },
      },
      comments: {
        name: "Kommentare",
        description: "Antworten auf Beiträge oder Produkte",
        preview: {
          line1: "Hat sehr geholfen — danke!",
          line2: "Max · 12 Likes",
        },
      },
      messages: {
        name: "Nachrichten",
        description: "Unterhaltungen im Postfach-Stil",
        preview: {
          line1: "Schaffst du den letzten Entwurf?",
          line2: "Mia → Leon",
        },
      },
      notifications: {
        name: "Benachrichtigungen",
        description: "Hinweise und Updates in der App",
        preview: { line1: "Neuer Kommentar", line2: "Info · vor 2 Std." },
      },
      tags: {
        name: "Tags",
        description: "Content-Tags mit Slugs und Anzahl",
        preview: { line1: "typescript", line2: "142 Beiträge" },
      },
      "content-categories": {
        name: "Content-Kategorien",
        description: "Redaktionelle Kategorien für Beiträge",
        preview: { line1: "Tutorials", line2: "tutorials · 86 Beiträge" },
      },
      likes: {
        name: "Likes",
        description: "Reaktionen auf Beiträge und Kommentare",
        preview: { line1: "Sophia gefiel ein Beitrag", line2: "Beitrag · love" },
      },
      albums: {
        name: "Alben",
        description: "Musik-Alben mit Cover",
        preview: {
          line1: "Random Access Memories",
          line2: "Daft Punk",
          line3: "2013 · 13 Tracks",
        },
      },
      songs: {
        name: "Songs",
        description: "Titel mit Laufzeit und Interpret",
        preview: { line1: "Nachtfahrt", line2: "3:42 · Electronic" },
      },
      movies: {
        name: "Filme",
        description: "Filme mit Poster und Bewertung",
        preview: { line1: "Nachtkurs", line2: "2021 · ★ 8,2" },
      },
      books: {
        name: "Bücher",
        description: "Titel mit Autoren und Covern",
        preview: { line1: "Interfaces gestalten", line2: "Jonas Fischer · 2019" },
      },
      videos: {
        name: "Videos",
        description: "Videoclips mit Dauer und Aufrufen",
        preview: {
          line1: "Dashboard in 10 Minuten bauen",
          line2: "12:40 · 84 Tsd. Aufrufe",
        },
      },
      images: {
        name: "Bilder",
        description: "Fotos mit Maßen und Tags",
        preview: { line1: "Morgenlicht", line2: "1280×720" },
      },
      podcasts: {
        name: "Podcasts",
        description: "Sendungen mit Hosts und Folgenanzahl",
        preview: { line1: "Code & Kaffee", line2: "48 Folgen · Tech" },
      },
      playlists: {
        name: "Playlists",
        description: "Tracklisten mit Erstellern und Genres",
        preview: { line1: "Deep Focus", line2: "32 Tracks · Electronic" },
      },
      companies: {
        name: "Unternehmen",
        description: "Organisationen und Branchen",
        preview: { line1: "Acme Corp", line2: "Technologie · Berlin" },
      },
      jobs: {
        name: "Jobs",
        description: "Stellenangebote mit Ort und Arbeitsmodell",
        preview: {
          line1: "Frontend-Entwickler",
          line2: "Google · München · Vollzeit",
        },
      },
      courses: {
        name: "Kurse",
        description: "Lerninhalte und Dozenten",
        preview: { line1: "React Grundlagen", line2: "Fortgeschritten · 12 Std." },
      },
      events: {
        name: "Events",
        description: "Meetups und Konferenzen",
        preview: { line1: "Frontend Meetup", line2: "Hamburg · Workshop" },
      },
      projects: {
        name: "Projekte",
        description: "Vorhaben mit Fortschritt und Budget",
        preview: { line1: "Dashboard-Redesign", line2: "in_arbeit · 72 %" },
      },
      teams: {
        name: "Teams",
        description: "Unternehmensteams mit Leads und Größe",
        preview: { line1: "Produkt-Squad", line2: "8 Mitglieder · Engineering" },
      },
      continents: {
        name: "Kontinente",
        description: "Kontinente mit Codes und Kennzahlen",
        preview: { line1: "Europa", line2: "EU · 44 Länder" },
      },
      countries: {
        name: "Länder",
        description: "Ländernamen, Codes und Flaggen",
        preview: { line1: "Deutschland", line2: "DE · Berlin" },
      },
      cities: {
        name: "Städte",
        description: "Städte mit Bundesland und Land",
        preview: { line1: "Köln", line2: "Deutschland · Nordrhein-Westfalen" },
      },
      addresses: {
        name: "Adressen",
        description: "Stimmige vollständige Adressen",
        preview: {
          line1: "Torstraße 112",
          line2: "10119 Berlin, Deutschland",
        },
      },
      regions: {
        name: "Regionen",
        description: "Bundesländer, Regionen und Provinzen",
        preview: { line1: "Bayern", line2: "Deutschland · München" },
      },
      neighborhoods: {
        name: "Stadtteile",
        description: "Stadtteile und Viertel",
        preview: { line1: "Kreuzberg", line2: "Berlin · 10997" },
      },
      airports: {
        name: "Flughäfen",
        description: "Flughäfen mit IATA-Codes und Städten",
        preview: { line1: "Frankfurt am Main", line2: "FRA · Deutschland" },
      },
      coordinates: {
        name: "Koordinaten",
        description: "Breitengrad, Längengrad und Ortsangaben",
        preview: {
          line1: "52.520008, 13.404954",
          line2: "Berlin · Deutschland",
        },
      },
    },
    errors: {
      pickTopic: "Wähle zuerst einen Datentyp aus.",
      INVALID_TOPIC: "Unbekannter Datentyp.",
      INVALID_FIELDS: "Wähle mindestens ein Feld aus.",
      INVALID_QUANTITY: "Die Anzahl muss zwischen 1 und 1000 liegen.",
      INVALID_COUNTRY: "Ungültiges Land.",
      GENERATE_FAILED: "Daten konnten nicht generiert werden. Bitte erneut versuchen.",
      DOWNLOAD_FAILED: "Download fehlgeschlagen. Bitte erneut versuchen.",
      CREATE_FAILED: "Temporäre API konnte nicht erstellt werden.",
      LIMIT_REACHED: "Limit für temporäre APIs erreicht (5 aktiv). Lösche zuerst eine.",
      RATE_LIMITED: "Zu viele Erstellungen in kurzer Zeit. Bitte später erneut versuchen.",
    },
  },
  preview: {
    docs: "Docs",
    playground: "Playground",
    blurb: "Eine schlichte Oberfläche zum Testen dieser API.",
    blurbFaHint: "",
    backToResource: "Zurück zu {name}",
    search: "Suchen",
    create: "Erstellen",
    edit: "Bearbeiten",
    delete: "Löschen",
    save: "Speichern",
    saving: "Wird gespeichert…",
    deleting: "Wird gelöscht…",
    cancel: "Abbrechen",
    fillSample: "Beispiel ausfüllen",
    noRecords: "Keine Einträge",
    loading: "Wird geladen…",
    confirmDelete: "Löschen?",
    confirmDeleteBody: "Dieser Eintrag wird dauerhaft entfernt.",
    networkError: "Netzwerkfehler",
    authDemoPassword: "Das Demo-Passwort für jeden Start-Nutzer lautet",
    username: "Username",
    password: "Passwort",
    login: "Anmelden",
    loginSuccess: "Erfolgreich angemeldet.",
    logout: "Abmelden",
    getMe: "GET /me",
    token: "Token",
    user: "Nutzer",
    loginFirst: "Melde dich zuerst an, um ein Token zu erhalten",
    createdAt: "Hinzugefügt",
    fieldLabels: {
      name: "Name",
      username: "Username",
      email: "E-Mail",
      avatarUrl: "Avatar-URL",
      role: "Rolle",
      city: "Stadt",
      country: "Land",
      company: "Unternehmen",
      title: "Titel",
      body: "Inhalt",
      published: "Veröffentlicht",
      userId: "Nutzer-ID",
      postId: "Beitrags-ID",
      albumId: "Album-ID",
      url: "URL",
      thumbnailUrl: "Thumbnail-URL",
      completed: "Erledigt",
      description: "Beschreibung",
      price: "Preis",
      stock: "Bestand",
      category: "Kategorie",
      imageUrl: "Bild-URL",
      message: "Nachricht",
      type: "Typ",
      read: "Gelesen",
      code: "Code",
      capital: "Hauptstadt",
      region: "Region",
      population: "Einwohnerzahl",
      currency: "Währung",
      flagUrl: "Flaggen-URL",
    },
    roleLabels: {
      admin: "admin",
      member: "member",
      guest: "guest",
    },
  },
  changelog: {
    "2026-09-19-json-workbench": {
      title: "JSON Workbench",
      teaser: "In Entwicklung — JSON formatieren, vergleichen und umwandeln",
      hint: "/json — Tool wählen, Ansicht wechselt sofort",
      badge: "In Entwicklung",
      summary:
        "JSON Workbench ist in Entwicklung: ein Bereich im Browser zum Formatieren, Strukturvergleichen, Suchen und Umwandeln von JSON — inklusive TypeScript, Zod, YAML, CSV und Utilities.",
      details: [
        "Öffne JSON Workbench unter /json und wähle ein Tool — die Ansicht wechselt sofort (Direktlink mit ?tool=).",
        "Core: Formatieren, Baum, Suchen, JSONPath und Struktur vergleichen.",
        "Transformieren: Konvertierungen zu TypeScript, Zod, JSON Schema, YAML und CSV.",
        "Utilities: Keys sortieren, leere Werte entfernen, flachklopfen, escapen, reparieren, pick/omit und mehr.",
        "Laufend in Entwicklung — weitere Tools und Verfeinerungen folgen.",
      ],
    },
    "2026-09-19-image-generator": {
      title: "Bildgenerator",
      teaser: "Platzhalterbilder per URL",
      hint: "/image-generator — SVG oder echtes Foto, Link kopieren",
      summary:
        "Platzhalterbilder per URL — MockData-SVG oder echte Fotos über Picsum, mit fertigen Größen für Avatare, Beiträge und Banner.",
      details: [
        "Öffne /image-generator für SVG oder echtes Foto, lege Breite/Höhe fest und kopiere eine fertige URL.",
        "Öffentliche URLs sind standardmäßig zufällig: /image/{w}/{h} für SVG; hänge ?type=real für Fotos an.",
        "Der optionale Parameter ?seed= behält dieselben SVG-Farben oder dasselbe echte Foto bei.",
        "Nutze den Link in img, CSS oder jedem Bildfeld — kein Upload nötig.",
      ],
    },
    "2026-09-17-generator": {
      title: "Mock-Daten-Generator",
      teaser: "Realistisches JSON in Sekunden",
      hint: "/generator — Typ wählen, generieren, kopieren oder API erstellen klicken",
      summary:
        "Erzeuge realistisches JSON fürs Frontend — Typ, Felder und Anzahl wählen, dann kopieren, herunterladen oder als temporäre API veröffentlichen.",
      details: [
        "Öffne /generator für Personen, E-Commerce, Content, Medien, Business und Standortdaten.",
        "POST-Body vs. API-Datensatz; die FA-Oberfläche nutzt lokale persische Pakete.",
        "Generiere bis zu 1.000 Datensätze im Browser; API erstellen nutzt die Temporär-Limits (500 / 64 KB).",
        "Auswahlen und Ergebnisse bleiben während der SPA-Navigation erhalten (werden bei vollem Reload geleert).",
      ],
    },
    "2026-09-16-temporary": {
      title: "Temporäre API",
      teaser: "Dein JSON, kurzlebige URL",
      hint: "/temporary — JSON einfügen und öffentlichen REST-Link erhalten",
      summary:
        "Füge dein eigenes JSON ein und erhalte eine kurzlebige öffentliche REST-URL — ohne Account, bis zu 5 aktive APIs pro Browser.",
      details: [
        "Unter /temporary anlegen: Laufzeit (1 Std., 6 Std., 12 Std. oder 24 Std.) wählen und veröffentlichen.",
        "Öffentliche URL /api/t/… normal mit GET, POST, PATCH und DELETE aufrufen.",
        "Bis zu 5 aktive APIs pro Browser; bis zu 20 Erstellungen pro IP und Stunde.",
        "Den Link wie ein Passwort behandeln — wer den Link hat, kann Daten bis zum Ablauf lesen und ändern.",
      ],
    },
    "2026-09-15-preview": {
      title: "Vorschau",
      teaser: "Beispiel-Oberflächen für jede Ressource",
      hint: "/preview/users — Erstellen, Bearbeiten und Löschen im Browser testen",
      summary:
        "Live-Beispiel-UIs für Users, Posts, Auth und jede Ressource — direkt gegen die echte API erstellen, bearbeiten und löschen.",
      details: [
        "Jede Ressourcen-Doc-Seite bietet einen Vorschau-Button für eine Mini-App auf Basis echter Endpunkte.",
        "Einträge auflisten, suchen, blättern, erstellen, bearbeiten und löschen — auf derselben geteilten Demo-DB.",
        "Die Auth-Vorschau enthält ein Login-Formular (Passwort ist immer password) und GET /me mit Token.",
        "Über den Sprachumschalter oben lassen sich bei Bedarf persische Beispieldaten laden.",
      ],
    },
    "2026-09-14-lang-fa": {
      title: "Persische Daten (?lang=fa)",
      teaser: "Persische Beispieldatensätze",
      hint: "/api/users?lang=fa — hänge lang=fa an einen Query an für persischen Text",
      summary:
        "Erhalte iranische Namen, Usernames, Telefonnummern und Beispieltexte, indem du ?lang=fa an einen Endpunkt anhängst.",
      details: [
        "Englisch bleibt Standard. Nur der Query-Parameter lang=fa schaltet den Text um — kein Cookie oder Accept-Language.",
        "FA-Antworten liefern Content-Language: fa und ein font-Objekt für Vazirmatn beim Rendern.",
        "Funktioniert bei Listen- und Detailrouten sowie beim Login mit persischen Usernames.",
        "Mit فارسی oben wird lang=fa im Playground ergänzt.",
      ],
    },
    "2026-09-12-playground": {
      title: "Playground",
      teaser: "APIs direkt im Browser aufrufen",
      hint: "/playground — Requests senden und JSON prüfen",
      summary:
        "Aktive Endpunkte im Browser aufrufen, erfolgreiche oder fehlgeschlagene Logins testen und JSON-Antworten prüfen.",
      details: [
        "Ressource und Aktion wählen, Query-Parameter oder JSON-Body anpassen und Request senden.",
        "Auth-Login bietet Gültig / Ungültig-Shortcuts für schnelle 200- vs. 401-Tests.",
        "Antworten zeigen Statuscode, gut lesbares JSON und Paginierung, falls die Route sie liefert.",
        "Request-UI und letzte Antworten bleiben pro Ressource bei SPA-Navigation erhalten (Reload setzt zurück).",
      ],
    },
    "2026-09-10-auth": {
      title: "Mock-Auth",
      teaser: "Login und Bearer-Tokens",
      hint: "/api/auth/login — Passwort ist immer password",
      summary:
        "Schicke POST an /api/auth/login mit einem Start-Nutzer und Passwort → erhalte ein Bearer-Token für /me.",
      details: [
        "Jeder Start-Nutzer nutzt dasselbe Mock-Passwort: password.",
        "Gültiger Login liefert ein fingiertes Bearer-Token und ein user-Objekt (id, name, username, email, role).",
        "Falsches Passwort oder unbekannter Nutzer liefert 401 mit klarem Fehler-Payload.",
        "Sende Authorization: Bearer <token> an GET /api/auth/me, um den aktuellen Nutzer abzurufen.",
      ],
    },
    "2026-09-08-resources": {
      title: "Live-REST-Ressourcen",
      teaser: "Users, Posts und mehr — volles CRUD",
      hint: "/docs#resources — Liste aktiver APIs",
      summary:
        "Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications und Countries — volles CRUD mit Paginierung.",
      details: [
        "Standard-Listenformat: { data, pagination } mit page, limit, total und totalPages.",
        "Unterstützt Query-Parameter für Suche, Sortierung, Filter, künstliche Verzögerung und erzwungene Fehlerstatus.",
        "Geteilte Produktionsdatenbank wird täglich zurückgesetzt — gut für Demos, nicht für dauerhafte Speicherung.",
        "Maschinenlesbarer Katalog unter /openapi.json für Postman, Swagger und KI-Tools.",
      ],
    },
  },
  catalog: {
    auth: {
      title: "Auth",
      summary:
        "Fingierter Login mit Username/Passwort. Gültige Zugangsdaten liefern ein Bearer-Token; ungültige liefern 401.",
    },
    users: {
      title: "Users",
      summary: "Mock-User-CRUD mit Suche, Rollenfiltern und Paginierung.",
    },
    posts: {
      title: "Posts",
      summary: "Blogartige Beiträge verknüpft mit Nutzern, inklusive Tags und Veröffentlichungsstatus.",
    },
    comments: {
      title: "Comments",
      summary: "Kommentare zu Beiträgen — Name, E-Mail und Inhalt.",
    },
    albums: {
      title: "Albums",
      summary: "Fotoalben verknüpft mit Nutzern. Fotos referenzieren albumId.",
    },
    photos: {
      title: "Photos",
      summary: "Albumfotos mit url und thumbnailUrl.",
    },
    todos: {
      title: "Todos",
      summary: "Einfache Aufgaben mit Erledigt-Status, verknüpft mit Nutzern.",
    },
    products: {
      title: "Products",
      summary: "Katalogartikel mit Preis, Bestand, Kategorie und imageUrl.",
    },
    notifications: {
      title: "Notifications",
      summary: "Nutzerbenachrichtigungen mit Typ und Gelesen-Status.",
    },
    countries: {
      title: "Countries",
      summary: "Ländereinträge mit ISO-Code, Region, Einwohnerzahl und Flagge.",
    },
  },
};

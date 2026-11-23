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

export const it: Messages = {
  common: {
    home: "Home",
    docs: "Documentazione",
    playground: "Playground",
    contact: "Contatti",
    preview: "Anteprima",
    search: "Cerca",
    loading: "Caricamento…",
    save: "Salva",
    saving: "Salvataggio…",
    cancel: "Annulla",
    create: "Crea",
    edit: "Modifica",
    delete: "Elimina",
    searchPlaceholder: "Cerca API…",
    noResults: "Nessun risultato trovato",
    new: "Novità",
    inDevelopment: "In sviluppo",
    actions: "Azioni",
    copy: "Copia",
    copied: "Copiato",
    live: "Attivo",
    open: "Apri",
    tryIt: "Provalo",
    learnMore: "Scopri di più",
    back: "Indietro",
    close: "Chiudi",
    yes: "Sì",
    no: "No",
    name: "Nome",
    email: "Email",
    message: "Messaggio",
    send: "Invia",
    sending: "Invio…",
    networkError: "Errore di rete",
    temporary: "API temporanee",
    temporaryBadge: "Subito pronte",
    generator: "Generatore dati",
    imageGenerator: "Generatore immagini",
    jsonWorkbench: "Area di lavoro JSON",
  },
  header: {
    primaryNav: "Navigazione principale",
    whatsNew: "Novità",
    whatsNewTitle: "Novità",
    whatsNewSubtitle: "Ultime funzionalità e aggiornamenti",
    latest: "Più recenti",
    contact: "Info e contatti",
    menu: "Menu",
    openMenu: "Apri menu",
    appearance: "Aspetto",
    lightMode: "Passa alla modalità chiara",
    darkMode: "Passa alla modalità scura",
    light: "Chiaro",
    dark: "Scuro",
    apiLangGroup: "Lingua",
    english: "English",
    persian: "فارسی",
    github: "GitHub",
    githubStars: "GitHub — Metti una stella al repository",
  },
  home: {
    tagline:
      "API REST mock gratuite con JSON realistici pronti all'uso. Sviluppa prototipi, testa l'autenticazione e integra i tuoi endpoint senza dover configurare subito un backend.",
    taglineNote: "",
    resourcesTitle: "Risorse",
    resourcesBlurb:
      "Dieci API REST pronte all'uso con documentazione ed esempi. In produzione utilizzano un database demo condiviso.",
    searchLabel: "Cerca API ed endpoint",
    searchPlaceholder: "Cerca users, posts, auth…",
    temporaryCtaTitle: "API temporanee",
    temporaryCtaBody:
      "Crea un'API temporanea incollando un JSON o pubblicando direttamente dal generatore. Tratta l'URL come una password. Puoi mantenere fino a 5 API temporanee attive per browser.",
    temporaryCtaLink: "Crea API temporanea",
  },
  notFound: {
    title: "Pagina non trovata",
    body: "La pagina che cerchi non esiste su MockData. Torna alla home oppure consulta la documentazione.",
    home: "Home",
    docs: "Documentazione",
  },
  blog: {
    title: "Blog",
    description:
      "Guide, approfondimenti e articoli su dati mock, JSON, API e workflow di sviluppo frontend.",
    all: "Tutti",
    emptyTitle: "Nessun articolo pubblicato",
    emptyBody: "I nuovi articoli appariranno qui non appena pubblicati. Torna a trovarci più tardi.",
    emptyCategoryTitle: "Nessun articolo in questa categoria",
    emptyCategoryBody: "Seleziona un'altra categoria oppure visualizza tutti gli articoli.",
    readingTime: "{n} min di lettura",
    previousPage: "Precedente",
    nextPage: "Successiva",
    pageStatus: "Pagina {page} di {total}",
    paginationNav: "Paginazione",
    categoriesNav: "Categorie blog",
    backToBlog: "Blog",
    previousArticle: "Articolo precedente",
    nextArticle: "Articolo successivo",
    relatedArticles: "Articoli correlati",
    categories: {
      news: "Novità",
      "mock-data": "Dati mock",
      json: "JSON",
      api: "API",
      frontend: "Frontend",
    },
  },
  contact: {
    title: "Contatti",
    intro:
      "Hai domande, segnalazioni o idee da condividere? Scrivici un messaggio qui oppure mandaci un'email a:",
    name: "Nome",
    email: "Email",
    topic: "Argomento",
    message: "Messaggio",
    send: "Invia messaggio",
    sending: "Invio…",
    success: "Messaggio inviato. Grazie per il tuo feedback, ti risponderemo al più presto.",
    chooseTopic: "Scegli un argomento per il messaggio.",
    pickTopic: "Come possiamo aiutarti?",
    topics: {
      question: "Domanda",
      bug: "Segnalazione bug",
      feature: "Richiesta funzionalità",
      other: "Altro",
    },
  },
  docs: {
    title: "Documentazione",
    navLabel: "Indice documentazione",
    intro:
      "MockData espone risorse REST mock in formato JSON. Puoi chiamare gli endpoint pubblici, testare il login, inviare richieste dal Playground, creare dataset in /generator, generare immagini segnaposto in /image-generator, usare JSON Workbench in /json e pubblicare API temporanee. Le risorse del catalogo di produzione usano un database condiviso (vedi Dati condivisi per i dettagli).",
    toc: {
      intro: "Introduzione",
      whatsNew: "Novità",
      temporary: "API temporanee",
      generator: "Generatore dati",
      imageGenerator: "Generatore immagini",
      jsonWorkbench: "Area di lavoro JSON",
      sharedData: "Dati condivisi",
      language: "Lingua",
      resources: "Risorse",
      openapi: "OpenAPI",
      requests: "Richieste",
      errors: "Errori",
      rateLimit: "Rate limit",
      reset: "Reset dati",
    },
    whatsNewTitle: "Novità",
    whatsNewBlurb:
      "Le ultime funzionalità per gli sviluppatori, ordinate dalla più recente. Clicca su una scheda per leggere i dettagli; puoi aprire lo stesso elenco anche dall'icona a campanella in alto.",
    temporaryTitle: "API temporanee",
    temporaryBody:
      "Ti serve un endpoint REST usa e getta con il tuo JSON? Le API temporanee restano separate dal catalogo condiviso: incolla un JSON e scegli la durata per ottenere un URL pubblico /api/t/…, oppure pubblicalo direttamente da 'Crea API' nel generatore.",
    temporaryBullets: [
      "Creale direttamente dal browser su /temporary senza registrazione (disponibile anche da 'Crea API' in /generator).",
      "Scegli una durata tra 1 ora, 6 ore, 12 ore o 24 ore (impostazione predefinita: 12 ore).",
      "Invia richieste GET, POST, PATCH e DELETE al tuo URL /api/t/… proprio come con collezioni e documenti.",
      "Conserva l'URL come una password: fino alla scadenza chiunque disponga del link può leggere e modificare i dati.",
      "Le richieste inviate a un'API temporanea scaduta restituiscono HTTP 410.",
    ],
    temporaryLimitsTitle: "Limiti delle API temporanee",
    temporaryLimitsBullets: [
      "Massimo 5 API temporanee attive contemporaneamente per browser.",
      "Fino a 20 API create per IP in una finestra mobile di 1 ora (HTTP 429 in caso di superamento).",
      "Dimensione massima del payload JSON: 64 KB.",
      "Profondità massima di annidamento pari a 8 livelli, fino a 500 elementi per array e fino a 200 chiavi per oggetto.",
      "Si applica anche il rate limit globale su /api (circa 60 richieste al minuto per IP).",
    ],
    generatorTitle: "Generatore dati",
    generatorBody:
      "Genera JSON realistici per lo sviluppo frontend senza scrivere dati a mano. Tutto avviene nel browser e puoi copiare, scaricare o pubblicare il risultato come API temporanea.",
    generatorBullets: [
      "Apri /generator e scegli tra categorie come Persone, E-commerce, Contenuti, Media, Business e Località.",
      "Passa dal formato corpo POST (senza id e timestamp) al formato record API (con id, createdAt e updatedAt).",
      "Usa dati locali in persiano per FA e dati in inglese di più Paesi per EN.",
      "Genera fino a 1.000 record alla volta nel browser. 'Crea API' rispetta i limiti delle API temporanee (500 record / 64 KB).",
      "Le selezioni e i risultati restano salvati mentre navighi tra le pagine (si azzerano con un ricaricamento completo).",
    ],
    imageGeneratorTitle: "Generatore immagini",
    imageGeneratorBody:
      "Crea su richiesta URL di immagini segnaposto per le tue interfacce. Scegli tra grafiche SVG MockData o foto casuali tramite Picsum, imposta larghezza e altezza e copia l'URL per tag img, CSS o campi immagine.",
    imageGeneratorBullets: [
      "Scegli tra immagini SVG o foto reali su /image-generator.",
      "Formato URL pubblico: /image/{width}/{height} per SVG oppure aggiungi ?type=real per le foto.",
      "Per impostazione predefinita restituisce un risultato casuale, oppure puoi passare un ?seed= qualsiasi per mantenere palette SVG o foto coerenti.",
      "Include dimensioni predefinite pronte all'uso per avatar, miniature, profili, post, copertine, banner e storie.",
    ],
    jsonWorkbenchTitle: "JSON Workbench",
    jsonWorkbenchBody:
      "JSON Workbench (in sviluppo) è una suite di strumenti per formattare, confrontare, cercare e convertire JSON direttamente nel browser mentre sviluppi le tue schermate.",
    jsonWorkbenchBullets: [
      "Apri JSON Workbench su /json e seleziona uno strumento per cambiare vista all'istante (supporta anche ?tool=).",
      "Strumenti principali: Formatta, Vista ad albero, Cerca, JSONPath e Confronta struttura.",
      "Conversioni: TypeScript, Zod, JSON Schema, YAML e CSV.",
      "Utility: Ordina chiavi, Rimuovi vuoti, Appiattisci (Flatten), Escape/Ripara, Estrai/Escludi campi e altro.",
      "Funziona interamente nel browser: i tuoi JSON non vengono inviati al server.",
      "È in fase di sviluppo attivo: continueremo ad aggiungere strumenti e miglioramenti.",
    ],
    sharedDataTitle: "Dati condivisi",
    sharedDataBody:
      "Tutti gli utenti condividono lo stesso database live: ciò che crei, modifichi o elimini è subito visibile anche agli altri. In produzione il database viene ripristinato ai dati iniziali ogni giorno tramite GET /api/cron/reset. È ideale per prototipi e demo, ma non va usato per dati persistenti o sensibili.",
    languageTitle: "Lingua",
    languageBody:
      "Per impostazione predefinita tutti i testi delle risorse vengono restituiti in inglese. Aggiungi il parametro di query lang=fa per ottenere nomi, username, email, numeri di telefono e frasi localizzati in persiano. Non vengono letti cookie né intestazioni Accept-Language: conta solo il parametro di query. Cambiare il selettore lingua nell'intestazione (English | فارسی) aggiorna anche Playground e Anteprime.",
    languageBullets: [
      "Esempio: GET /api/users?lang=fa",
      "Le risposte FA includono Content-Language: fa e un oggetto font per il rendering (Vazirmatn).",
      "Selezionando فارسی nell'intestazione, l'interfaccia passa a destra-sinistra (RTL) e anche il Playground aggiunge automaticamente lang=fa.",
    ],
    resourcesTitle: "Risorse",
    resourcesBlurb:
      "Elenco degli endpoint attualmente disponibili e delle prossime funzionalità in arrivo.",
    colResource: "Risorsa",
    colBasePath: "Percorso base",
    colStatus: "Stato",
    colDocs: "Documentazione",
    statusLive: "Attivo",
    statusDev: "In sviluppo",
    statusSoon: "In arrivo",
    openapiTitle: "OpenAPI",
    openapiBody:
      "Specifica leggibile dalle macchine per tutti gli endpoint disponibili (Auth, Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, Countries e reset admin). Puoi importarla in Postman, Swagger UI o strumenti AI.",
    download: "Scarica",
    requestsTitle: "Richieste",
    requestsBody:
      "Gli endpoint di collezione restituiscono data e pagination, mentre le risorse singole restituiscono { data }.",
    errorsTitle: "Errori",
    errorsBody:
      "Le risposte di errore includono un oggetto error. I codici principali sono 400 per richieste non valide, 401 per autenticazione mancante o errata, 404 per risorsa non trovata, 429 per superamento del rate limit e 500 per errori server. Per testare la gestione errori lato client puoi aggiungere ?status=500 (intervallo 400–599) e simulare il codice desiderato.",
    rateLimitTitle: "Rate limit",
    rateLimitBody:
      "Per garantire un servizio stabile a tutti, le richieste verso /api/* sono limitate a circa {limit} al minuto per IP. Se superi il limite riceverai HTTP 429 (Too Many Requests) e potrai controllare la quota residua nelle intestazioni X-RateLimit.",
    resetTitle: "Reset dati",
    resetBody:
      "Tutti gli utenti condividono lo stesso database demo. In produzione i dati vengono ripristinati ogni 24 ore, ma se hai la chiave amministratore puoi svuotare subito le tabelle demo e ricaricare i dati iniziali dal pannello qui sotto.",
    resetPanel: {
      intro: "Inserisci la chiave amministratore per svuotare le tabelle demo e ripristinare i dati iniziali.",
      placeholder: "Chiave amministratore",
      button: "Ripristina ora",
      resetting: "Ripristino…",
      needSecret: "Inserisci una chiave amministratore.",
      confirm: "Svuotare le tabelle demo e ricaricare i dati iniziali?",
      networkError: "Errore di rete. Verifica che il server sia avviato.",
      donePrefix: "Ripristinato",
    },
    colIndex: "#",
  },
  resourceDocs: {
    endpoints: "Endpoint",
    queryParams: "Parametri di query",
    examples: "Esempi di richiesta",
    response: "Esempio di risposta",
    tryExample: "Prova",
    preview: "Anteprima",
    playground: "Playground",
    backToResources: "Torna alle risorse",
  },
  playground: {
    title: "Playground",
    blurb:
      "Invia richieste reali alle API MockData e ispeziona le risposte JSON direttamente nel browser. L'ultima richiesta per ciascuna risorsa resta salvata durante la sessione.",
    resource: "Risorsa",
    action: "Azione",
    send: "Invia",
    sending: "Invio…",
    response: "Risposta",
    request: "Richiesta",
    body: "Body",
    query: "Query",
    headers: "Headers",
    correct: "Credenziali valide",
    wrong: "Credenziali errate",
    password: "Password",
    user: "Utente",
    pickUser: "Scegli utente",
    loadError: "Impossibile caricare le opzioni",
    emptyResponse: "Nessuna risposta al momento",
    startHint: "Scegli una risorsa e invia una richiesta per iniziare.",
    types: "TS",
    json: "JSON",
  },
  temporary: {
    title: "API temporanee",
    blurb: "Incolla un JSON e crea subito un'API temporanea.",
    privacyNote:
      "Tratta l'URL come una password: fino alla scadenza chiunque conosca il link può leggere e aggiornare i dati. Massimo 5 API temporanee attive per browser.",
    jsonLabel: "JSON",
    durationLabel: "Durata",
    duration1h: "1 ora",
    duration6h: "6 ore",
    duration12h: "12 ore",
    duration24h: "24 ore",
    checkJson: "Controlla JSON",
    jsonValid: "Tutto a posto. Puoi procedere alla creazione.",
    jsonHint: "Puoi verificarlo prima oppure crearlo direttamente.",
    create: "Crea API",
    creating: "Creazione…",
    acceptFix: "Applica correzione e crea",
    rejectFix: "Continua a modificare",
    fixedPreview: "Abbiamo corretto automaticamente alcuni problemi. Controlla l'anteprima per creare.",
    myApis: "Le mie API temporanee",
    emptyList: "Nessuna API temporanea attiva al momento.",
    copyUrl: "Copia",
    delete: "Elimina",
    deleteAll: "Elimina tutto",
    deleting: "…",
    confirmDelete: "Eliminare questa API?",
    confirmDeleteBody: "L'URL smetterà subito di funzionare.",
    confirmDeleteAll: "Eliminare tutte le API?",
    confirmDeleteAllBody: "Tutti gli URL nell'elenco smetteranno subito di funzionare.",
    cancel: "Annulla",
    limitReached: "Limite di 5 API raggiunto.",
    limitReachedBody: "Elimina una voce dall'elenco qui sotto oppure attendi la scadenza.",
    createdTitle: "API creata",
    openApi: "Apri",
    slotsLabel: "{n} / 5",
    maxActive: "",
    sampleJson: `[
  { "id": "1", "firstName": "Lorenzo", "lastName": "Rossi", "role": "admin" },
  { "id": "2", "firstName": "Giulia", "lastName": "Bianchi", "role": "member" },
  { "id": "3", "firstName": "Matteo", "lastName": "Esposito", "role": "member" }
]`,
    issues: {
      EMPTY: "Incolla un oggetto o un array JSON.",
      INVALID_JSON: "JSON non valido. Controlla virgole, virgolette, parentesi quadre e graffe.",
      TOO_LARGE: "Il JSON supera la dimensione massima consentita ({max} KB).",
      NOT_OBJECT_OR_ARRAY: "Il livello principale deve essere un oggetto { } o un array [ ].",
      TOO_DEEP: "Annidamento troppo profondo (massimo {max} livelli).",
      ARRAY_TOO_LONG: "L'array supera la lunghezza massima consentita ({max} elementi).",
      TOO_MANY_KEYS: "Troppe chiavi in un singolo oggetto (massimo {max}).",
      UNSAFE_KEY: "La chiave non sicura '{key}' non è consentita.",
      AUTO_FIXED: "Rimossi eventuali caratteri non sicuri o virgole finali in eccesso.",
    },
  },
  imageGenerator: {
    title: "Generatore immagini",
    blurb:
      "Genera su richiesta immagini segnaposto per i tuoi progetti. Copia gli URL di grafiche SVG MockData o foto casuali per tag img, CSS o campi immagine.",
    modeSvg: "SVG",
    modeReal: "Foto",
    width: "Larghezza",
    height: "Altezza",
    generate: "Genera URL",
    generating: "Generazione…",
    yourUrl: "URL API generato",
    preview: "Anteprima",
    useInProject: "Usa nel progetto",
    tabUrl: "URL",
    tabHtml: "HTML",
    tabCss: "CSS",
    tabJs: "JavaScript",
    tabCurl: "cURL",
    readySizes: "Formati pronti",
    sizes: {
      avatar: "Avatar",
      thumbnail: "Miniatura",
      profile: "Profilo",
      square: "Quadrato",
      post: "Post",
      cover: "Copertina",
      banner: "Banner",
      story: "Storia",
    },
  },
  jsonWorkbench: {
    title: "JSON Workbench",
    blurb:
      "Incolla il tuo JSON una sola volta e passa da una funzione all'altra — formattazione, ricerca, conversioni e altro — senza doverlo reincollare ogni volta.",
    toolNavLabel: "Strumenti Workbench",
    source: {
      title: "JSON sorgente",
      hint: "Incollalo qui una volta: tutti gli strumenti lavoreranno su questo JSON.",
      sample: "Carica esempio",
      valid: "JSON valido.",
      needJson: "Incolla prima un JSON a sinistra.",
      fixFirst: "Correggi prima l'errore di sintassi nel JSON sorgente.",
      pickAction: "Quale operazione vuoi eseguire?",
      useResult: "Usa nel JSON sorgente",
      diffHint: "Il JSON sorgente è il lato A; incolla qui sotto il JSON B da confrontare.",
      escapedInput: "Stringa con escape",
      schemaInput: "JSON Schema",
      fromSchemaNote:
        "Incolla qui sotto un JSON Schema per generare un JSON di esempio e applicarlo al JSON sorgente.",
    },
    categories: {
      core: "Base",
      transform: "Trasforma",
      utility: "Utility",
    },
    labels: {
      input: "Input",
      output: "Output",
      tree: "Albero",
      matches: "Corrispondenze",
      jsonA: "JSON A",
      jsonB: "JSON B",
      diffResult: "Differenze",
      jsonpath: "JSONPath",
      result: "Risultato ({count})",
    },
    actions: {
      format: "Formatta",
      minify: "Compatta",
      showTree: "Mostra albero",
      search: "Cerca",
      clearSearch: "Pulisci ricerca",
      replace: "Sostituisci",
      replaceAll: "Sostituisci tutto",
      prevMatch: "Precedente",
      nextMatch: "Successiva",
      compare: "Confronta",
      run: "Esegui",
      runPath: "Esegui path",
      toTypescript: "Converti in TypeScript",
      toZod: "Converti in Zod",
      toSchema: "Converti in Schema",
      swapDirection: "Inverti direzione",
      sortKeys: "Ordina chiavi",
      removeEmpty: "Rimuovi vuoti",
      flatten: "Appiattisci",
      unflatten: "Ripristina annidamento",
      escape: "Applica escape",
      unescape: "Rimuovi escape",
      repair: "Ripara JSON",
      fromSchema: "Genera esempio",
      extractKeys: "Estrai chiavi",
      extractValues: "Estrai valori",
      pick: "Seleziona chiavi",
      omit: "Escludi chiavi",
      compareStructure: "Confronta struttura",
      clear: "Pulisci",
      expandAll: "Espandi tutto",
      collapseAll: "Comprimi tutto",
      copyPath: "Copia path",
      copyValue: "Copia valore",
    },
    errors: {
      empty: "Incolla un JSON.",
      invalid: "JSON non valido.",
      unexpectedEnd: "Il JSON termina all'improvviso.",
      unexpectedToken: "Token imprevisto: {token}",
      expectedPropertyName: "I nomi delle proprietà devono essere racchiusi tra virgolette doppie.",
      expectedCommaOrBrace: "Dopo il valore è atteso ',' oppure '}'.",
      expectedCommaOrBracket: "Dopo l'elemento dell'array è atteso ',' oppure ']'.",
      expectedColon: "Dopo il nome della proprietà è atteso ':'.",
      unterminatedString: "Stringa non chiusa.",
      badControlChar: "La stringa contiene un carattere di controllo non valido.",
      badEscape: "Sequenza di escape non valida nella stringa.",
      trailingChar: "Sono presenti caratteri extra dopo il valore JSON.",
      objectKeyExpected: "Qui è attesa una chiave di oggetto.",
      unexpectedCharacter: "Carattere imprevisto: {char}",
      invalidCharacter: "Carattere non valido: {char}",
      invalidUnicode: "Escape Unicode non valido: {chars}",
      couldNotRepair: "Impossibile riparare automaticamente questo JSON.",
      atLineColumn: "riga {line}, colonna {column}",
      atLine: "riga {line}",
      atPosition: "posizione {position}",
    },
    types: {
      object: "oggetto",
      array: "array",
      string: "stringa",
      number: "numero",
      boolean: "booleano",
      null: "null",
    },
    validate: {
      idleHint: "Incolla un JSON per verificarne la sintassi JSON standard.",
      validTitle: "JSON valido",
      validBody: "Tipo radice: {type}",
      invalidTitle: "JSON non valido",
    },
    tree: {
      idleTitle: "L'albero apparirà qui",
      idleBody: "Incolla un JSON a sinistra e premi Mostra albero.",
      errorTitle: "Impossibile mostrare l'albero",
      errorBody: "Correggi gli errori di sintassi nel JSON e riprova.",
    },
    search: {
      query: "Cerca",
      replaceWith: "Sostituisci con",
      matchCount: "{current} di {total}",
      noMatches: "Nessuna corrispondenza",
      noMatchesBody: "Nessuna chiave o valore corrisponde alla ricerca.",
      idleTitle: "I risultati di ricerca appariranno qui",
      idleBody: "Inserisci un termine e premi Cerca per cercare sia tra le chiavi che tra i valori.",
      errorTitle: "Impossibile eseguire la ricerca",
      errorBody: "Correggi gli errori di sintassi nel JSON prima di cercare.",
      kindKey: "chiave",
      kindValue: "valore",
      activeHint: "{kind} · {path}",
      replacedCount: "Sostituite {count} occorrenze.",
    },
    diff: {
      idleTitle: "Le differenze appariranno qui",
      idleBody: "Inserisci sia JSON A che JSON B per confrontarli.",
      identical: "Nessuna differenza. I due documenti hanno stessa struttura e stessi valori.",
      added: "Aggiunto / solo in B",
      removed: "Rimosso / solo in A",
      changed: "Modificato",
      sideEmpty: "Questo lato è vuoto.",
      emptyA: "JSON A è vuoto.",
      emptyB: "JSON B è vuoto.",
      bothInvalid: "Sia JSON A che JSON B non sono validi.",
    },
    jsonpath: {
      whatIs:
        "JSONPath ti permette di estrarre valori precisi da un JSON annidato — un po' come i selettori CSS per i dati. Clicca su un esempio qui sotto per compilarlo.",
      hintTitle: "Guida sintassi",
      hintBody: `$              documento radice
.users         nome proprietà
[*]            tutti gli elementi dell'array
[0]            primo elemento dell'array`,
      idleTitle: "I risultati della query appariranno qui",
      idleBody: "Inserisci un'espressione di percorso ed esegui.",
      errorTitle: "Impossibile eseguire la query",
      errorBody: "Correggi l'errore nel JSON o nel percorso e riprova.",
      noResults: "Nessun elemento corrisponde a questo percorso.",
      emptyPath: "Inserisci un'espressione JSONPath.",
    },
    transform: {
      tsIdleTitle: "I tipi TypeScript appariranno qui",
      tsIdleBody: "Incolla un JSON per generare le definizioni di tipo TypeScript.",
      zodIdleTitle: "Lo schema Zod apparirà qui",
      zodIdleBody: "Incolla un JSON per generare uno schema Zod.",
      schemaExplain: "JSON ↔ Schema",
      schemaUse:
        "Genera un JSON Schema dal JSON sorgente oppure crea un JSON di esempio a partire da uno Schema.",
      schemaIdleTitle: "Il JSON Schema apparirà qui",
      schemaIdleBody: "Incolla un JSON per generare il JSON Schema.",
      yamlIdleTitle: "L'output YAML apparirà qui",
      yamlIdleBody: "Il JSON sorgente viene convertito in YAML.",
      yamlToJsonIdle: "Incolla del YAML qui sopra per convertirlo nel JSON sorgente.",
      yamlApplied: "Convertito e aggiornato nel JSON sorgente.",
      csvIdleTitle: "L'output CSV apparirà qui",
      csvIdleBodyJson:
        "Converte un singolo oggetto, un array di oggetti o un oggetto contenente una lista dal JSON sorgente in CSV.",
      csvIdleBodyCsv: "Incolla un CSV con riga di intestazione per convertirlo in JSON.",
      csvToJsonIdle: "Incolla del CSV qui sopra per convertirlo nel JSON sorgente.",
      csvApplied: "Convertito e aggiornato nel JSON sorgente.",
      csvUnsupported: "Questa struttura JSON non può essere convertita in CSV.",
    },
    utilities: {
      sortAsc: "A → Z",
      sortDesc: "Z → A",
      sortIdleTitle: "Pronto per l'ordinamento",
      sortIdleBody: "Scegli A → Z o Z → A per vedere le chiavi ordinate nell'output.",
      sortApplied: "Chiavi ordinate. Controlla l'output qui sotto.",
      removeOptions: "Tipi di valori vuoti da rimuovere",
      removeNull: "null",
      removeEmptyString: '""',
      removeEmptyArray: "[]",
      removeEmptyObject: "{}",
      removeNullLabel: "null",
      removeEmptyStringLabel: "stringhe vuote",
      removeEmptyArrayLabel: "array vuoti",
      removeEmptyObjectLabel: "oggetti vuoti",
      removePreserveHint: "false e 0 vengono mantenuti e non vengono rimossi.",
      removeIdleTitle: "Il JSON ripulito apparirà qui",
      removeIdleBody: "Scegli quali elementi rimuovere ed esegui.",
      nestedLabel: "Annidato",
      flatLabel: "Appiattito",
      flattenHint: "Converte oggetti annidati in chiavi separate da punto (es. address.city, skills.0).",
      flattenUse:
        "Utile per esportare in fogli di calcolo, file .env, indici di ricerca o API che accettano solo coppie chiave-valore piatte.",
      flattenIdleTitle: "Pronto per l'appiattimento",
      flattenIdleBody: "Le chiavi annidate verranno convertite in percorsi separati da punto nell'output.",
      flattenApplied: "JSON appiattito. Controlla l'output qui sotto.",
      unflattenHint: "Riporta i percorsi separati da punto a oggetti annidati e converte i segmenti numerici in array.",
      unflattenUse:
        "Ideale per ricostruire un JSON annidato partendo da chiavi piatte come user.name o skills.0.",
      unflattenIdleTitle: "Il JSON annidato apparirà qui",
      unflattenIdleBody: "Incolla un oggetto con percorsi separati da punto per ripristinare l'annidamento.",
      escapeIdleTitle: "La stringa con escape apparirà qui",
      escapeIdleBody: "Il JSON verrà sottoposto a escape per essere inserito in letterali di stringa o simili.",
      escapeHint:
        `Converte il JSON in un'unica stringa con escape: virgolette e a capo diventano \\" / \\n così puoi inserirlo in sicurezza dentro un'altra stringa.`,
      escapeUse:
        "Comodo quando incorpori un JSON nel codice, nelle variabili d'ambiente o nei log senza rompere le virgolette esterne.",
      unescapeIdleTitle: "Il JSON senza escape apparirà qui",
      unescapeIdleBody: "Incolla una stringa JSON con escape per riportarla al JSON originale.",
      repairHint:
        "Ripara automaticamente in più passaggi JSON rotti, troncati, con commenti o lasciati a metà.",
      repairUse:
        "Gestisce virgolette, virgole e parentesi mancanti, commenti e blocchi di codice, letterali Python/JS, JSONP, tipi MongoDB, NDJSON, troncamenti e residui di digitazione.",
      repairAlreadyValid: "Il JSON era già valido: è stata applicata solo la formattazione.",
      repairFormatted: "Formattato.",
      repairReady: "Riparazione automatica disponibile.",
      repairApplied: "Riparato.",
      repairAppliedToSource: "Applicato al JSON sorgente.",
      repairFailedTitle: "Impossibile completare la riparazione",
      repairFailedAt: "{message} ({line}:{column})",
      repairPreview: "Anteprima riparazione",
      repairFixes: {
        "trailing-commas": "virgole finali",
        "single-quotes": "virgolette singole",
        "smart-quotes": "virgolette tipografiche",
        "unquoted-keys": "chiavi senza virgolette",
        "missing-commas": "virgole mancanti",
        "missing-brackets": "parentesi mancanti",
        comments: "commenti",
        "code-fence": "blocchi di codice",
        "python-literals": "letterali Python",
        "js-undefined": "undefined → null",
        jsonp: "wrapper JSONP",
        "escaped-string": "stringa JSON con escape",
        mongodb: "tipi MongoDB",
        ndjson: "NDJSON → array",
        ellipsis: "puntini di sospensione (…)",
        "string-concat": "concatenazione stringhe",
        whitespace: "spazi e a capo",
        truncated: "troncato / incompleto",
        "mid-edit-junk": "residui durante la modifica",
      },
      repairIdleTitle: "Il JSON riparato apparirà qui",
      repairIdleBody:
        "Incolla del testo incompleto o simile a JSON nel JSON sorgente per vedere il risultato riparato.",
      fromSchemaHint:
        "Genera un JSON di esempio da un JSON Schema usando type, properties, required, items, enum e default.",
      fromSchemaIdleTitle: "Il JSON di esempio apparirà qui",
      fromSchemaIdleBody: "Incolla un JSON Schema qui sotto per generare un esempio.",
      extractHint:
        'Restituisce coppie di percorso foglia e valore (es. { path: "address.city", value: "Milano" }).',
      extractIdleTitle: "Le chiavi e i valori estratti appariranno qui",
      extractIdleBody: "Seleziona dei campi qui sopra per estrarre coppie percorso-valore.",
      extractKeysHint: "Elenca le chiavi annidate come percorsi separati da punto (indici array come .0).",
      extractKeysIdleTitle: "Le chiavi estratte appariranno qui",
      extractKeysIdleBody: "Incolla un JSON per estrarre tutte le chiavi.",
      extractValuesHint: "Raccoglie tutti i valori foglia (primitivi e null).",
      extractValuesIdleTitle: "I valori estratti appariranno qui",
      extractValuesIdleBody: "Incolla un JSON per estrarre tutti i valori.",
      fieldsLabel: "Campi nel JSON sorgente",
      fieldsClickHint:
        "Clicca su un percorso per selezionarlo. I livelli annidati sono separati da punto.",
      fieldsSelectAll: "Seleziona tutto",
      fieldsClear: "Deseleziona",
      fieldsEmpty: "Nessun campo selezionabile in questo JSON.",
      pickHint: "Mantiene solo i campi selezionati. Clicca sull'elenco qui sotto per sceglierli.",
      pickIdleTitle: "Il risultato apparirà qui",
      pickIdleBody: "",
      omitHint: "Rimuove i campi selezionati. Clicca sull'elenco qui sotto per sceglierli.",
      omitIdleTitle: "Il risultato apparirà qui",
      omitIdleBody: "",
      compareHint: "Confronta due documenti JSON affiancati in base alla struttura, ignorando le differenze di valore.",
      compareUse:
        "Le chiavi mancanti in A sono in rosso, quelle aggiunte in B in verde e i tipi diversi tra i due lati in ambra.",
      compareBack: "Torna al Workbench",
      compareIdleTitle: "Inserisci due documenti JSON",
      compareIdleBody: "Compila entrambi i lati per confrontarne la struttura.",
      compareIdentical: "Strutture identiche: stesse chiavi e stessi tipi di dato.",
      compareMissing: "Chiavi mancanti (solo in A)",
      compareExtra: "Chiavi aggiunte (solo in B)",
      compareType: "Tipi non corrispondenti",
    },
    empty: {
      formatTitle: "Il JSON formattato apparirà qui",
      formatBody: "Incolla un JSON a sinistra e premi Formatta.",
    },
    soon: {
      badge: "In arrivo",
      title: "{tool} sarà disponibile presto",
      body: "Questo strumento fa parte dell'anteprima completa del Workbench e verrà aggiunto nei prossimi aggiornamenti.",
    },
    tools: {
      format: "Formatta",
      minify: "Compatta",
      validate: "Valida",
      tree: "Albero",
      search: "Cerca",
      diff: "Diff",
      jsonpath: "JSONPath",
      convert: "Converti",
      toTypescript: "TypeScript",
      toZod: "Zod",
      toSchema: "JSON Schema",
      yaml: "YAML",
      csv: "CSV",
      sortKeys: "Ordina chiavi",
      removeEmpty: "Rimuovi vuoti",
      flatten: "Appiattisci",
      unflatten: "Ripristina annidamento",
      escape: "Applica escape",
      unescape: "Rimuovi escape",
      repair: "Ripara",
      extract: "Estrai chiavi e valori",
      extractKeys: "Estrai chiavi",
      extractValues: "Estrai valori",
      pick: "Seleziona chiavi",
      omit: "Escludi chiavi",
      compareStructure: "Confronta struttura",
    },
  },
  generator: {
    title: "Generatore dati",
    subtitle: "Crea rapidamente dati di test realistici per lo sviluppo frontend.",
    chooseType: "Tipo di dati",
    searchPlaceholder: "Cerca tipo di dati…",
    noTopics: "Nessun tipo di dati corrispondente.",
    fieldsLegend: "Campi",
    moreFields: "Mostra altri campi",
    lessFields: "Nascondi campi opzionali",
    optionalFields: "Campi opzionali",
    records: "Record",
    customQty: "Personalizzato",
    country: "Paese",
    countrySearch: "Cerca Paese…",
    selectPlaceholder: "Seleziona un tipo di dati…",
    outputMode: "Modalità output",
    modePayload: "Body POST",
    modeApi: "Record API",
    modePayloadHint: "Senza id e timestamp: ideale per il body POST di creazione di una risorsa.",
    modeApiHint: "Include id, createdAt e updatedAt per assomigliare a un record API salvato.",
    jsonType: "JSON",
    viewJson: "JSON",
    viewType: "TS",
    generate: "Genera {n}",
    generating: "Generazione di {n}…",
    generateAgain: "Genera di nuovo",
    refresh: "Rigenera",
    generated: "Generati {n}",
    download: "Scarica",
    createApi: "Crea API",
    createSuccess: "API temporanea creata.",
    createBlockedArray:
      "Le API temporanee supportano fino a 500 record. Riduci la quantità e riprova.",
    createBlockedSize:
      "La dimensione del JSON supera il limite delle API temporanee (64 KB). Riduci il numero di record o di campi.",
    openTemporary: "Gestisci in API temporanee",
    emptyTitle: "Scegli un tipo di dati",
    emptyBody: "Seleziona un tipo di dati qui sopra per generare record di test realistici.",
    duration1h: "1 ora",
    duration6h: "6 ore",
    duration12h: "12 ore",
    duration24h: "24 ore",
    countries: {
      all: "Tutti i Paesi",
      IR: "Iran",
      DE: "Germania",
      US: "Stati Uniti",
      GB: "Regno Unito",
      FR: "Francia",
      NL: "Paesi Bassi",
      JP: "Giappone",
      CA: "Canada",
    },
    categories: {
      people: "Persone",
      ecommerce: "E-commerce",
      content: "Contenuti",
      media: "Media",
      business: "Business",
      location: "Località",
    },
    fields: {
      id: "id",
      name: "nome",
      username: "username",
      email: "email",
      avatar: "avatar",
      phone: "telefono",
      company: "azienda",
      location: "posizione",
      age: "età",
      role: "ruolo",
      jobTitle: "ruolo lavorativo",
      department: "reparto",
      bio: "biografia",
      website: "sito web",
      createdAt: "data creazione",
      updatedAt: "data aggiornamento",
      hiredAt: "data assunzione",
      ordersCount: "numero ordini",
      totalSpent: "spesa totale",
      postsCount: "numero post",
      price: "prezzo",
      image: "immagine",
      category: "categoria",
      description: "descrizione",
      brand: "brand",
      stock: "disponibilità",
      rating: "valutazione",
      sku: "SKU",
      colors: "colori",
      orderId: "ID ordine",
      customer: "cliente",
      items: "articoli",
      total: "totale",
      status: "stato",
      orderDate: "data ordine",
      paymentStatus: "stato pagamento",
      shippingAddress: "indirizzo di spedizione",
      user: "utente",
      comment: "commento",
      post: "post",
      date: "data",
      product: "prodotto",
      title: "titolo",
      verified: "verificato",
      helpful: "voti utili",
      slug: "slug",
      parentCategory: "categoria padre",
      productCount: "numero prodotti",
      quantity: "quantità",
      discount: "sconto",
      code: "codice",
      type: "tipo",
      expiresAt: "scadenza",
      minimumOrder: "ordine minimo",
      usageLimit: "limite utilizzi",
      active: "attivo",
      amount: "importo",
      currency: "valuta",
      paymentMethod: "metodo di pagamento",
      transactionId: "ID transazione",
      order: "ordine",
      carrier: "corriere",
      trackingNumber: "codice tracciamento",
      estimatedDelivery: "consegna prevista",
      body: "testo",
      author: "autore",
      tags: "tag",
      publishedAt: "data pubblicazione",
      likes: "mi piace",
      views: "visualizzazioni",
      replies: "risposte",
      attachments: "allegati",
      actionUrl: "URL azione",
      sender: "mittente",
      receiver: "destinatario",
      message: "messaggio",
      read: "letto",
      artist: "artista",
      cover: "copertina",
      year: "anno",
      genre: "genere",
      tracks: "tracce",
      album: "album",
      duration: "durata",
      poster: "locandina",
      director: "regista",
      language: "lingua",
      plays: "riproduzioni",
      label: "etichetta",
      pages: "pagine",
      isbn: "ISBN",
      instructor: "docente",
      level: "livello",
      lessons: "lezioni",
      students: "studenti",
      employees: "dipendenti",
      logo: "logo",
      industry: "settore",
      salary: "retribuzione",
      experience: "esperienza",
      remote: "da remoto",
      founded: "anno fondazione",
      postedAt: "data pubblicazione",
      capacity: "capienza",
      capital: "capitale",
      flag: "bandiera",
      region: "regione",
      population: "popolazione",
      street: "via e civico",
      postalCode: "CAP",
      latitude: "latitudine",
      longitude: "longitudine",
      country: "Paese",
      city: "città",
      notes: "note",
      team: "team",
      joinedAt: "data ingresso",
      skills: "competenze",
      specialty: "specializzazione",
      hospital: "ospedale",
      licenseNumber: "numero licenza",
      yearsExperience: "anni di esperienza",
      bloodType: "gruppo sanguigno",
      diagnosis: "diagnosi",
      doctor: "medico",
      admittedAt: "data ricovero",
      vehicleType: "tipo veicolo",
      plateNumber: "targa",
      tripsCount: "numero corse",
      roomNumber: "numero camera",
      checkIn: "check-in",
      checkOut: "check-out",
      nights: "notti",
      followers: "follower",
      following: "seguiti",
      grade: "classe",
      school: "scuola",
      gpa: "media voti",
      major: "indirizzo di studi",
      enrollmentYear: "anno iscrizione",
      subject: "materia",
      classesCount: "numero classi",
      invoiceNumber: "numero fattura",
      issueDate: "data emissione",
      dueDate: "data scadenza",
      tax: "imposta",
      itemsCount: "numero voci",
      target: "destinazione",
      targetType: "tipo destinazione",
      reaction: "reazione",
      color: "colore",
      thumbnail: "miniatura",
      channel: "canale",
      url: "URL",
      width: "larghezza",
      height: "altezza",
      alt: "testo alternativo",
      photographer: "fotografo",
      host: "conduttore",
      episodes: "episodi",
      subscribers: "iscritti",
      owner: "proprietario",
      public: "pubblico",
      progress: "avanzamento",
      teamSize: "dimensione team",
      budget: "budget",
      startDate: "data inizio",
      membersCount: "numero membri",
      focus: "ambito principale",
      countriesCount: "numero Paesi",
      areaKm2: "superficie (km²)",
      timezone: "fuso orario",
      terminals: "terminal",
      altitude: "altitudine",
      accuracy: "precisione",
    },
    topics: {
      users: {
        name: "Utenti",
        description: "Profili utente per app e dashboard gestionali",
        preview: {
          line1: "Lorenzo Rossi",
          line2: "@lorenzo_rossi · lorenzo@mail.test",
          line3: "Milano",
        },
      },
      customers: {
        name: "Clienti",
        description: "Contatti e anagrafica per acquirenti e account",
        preview: {
          line1: "Giulia Bianchi",
          line2: "giulia@demo.dev",
          line3: "+39 340 123 4567",
        },
      },
      employees: {
        name: "Dipendenti",
        description: "Membri del team con ruolo e reparto",
        preview: {
          line1: "Matteo Esposito",
          line2: "Frontend Engineer",
          line3: "Ingegneria · Acme",
        },
      },
      authors: {
        name: "Autori",
        description: "Redattori e creator per articoli e blog",
        preview: {
          line1: "Chiara Romano",
          line2: "Scrivo di product design e UX.",
        },
      },
      contacts: {
        name: "Contatti",
        description: "Referenti e aziende per CRM e rubrica",
        preview: {
          line1: "Alessandro Conti",
          line2: "alessandro@acme.test · Acme",
        },
      },
      "team-members": {
        name: "Membri del team",
        description: "Componenti di squadre prodotto e sviluppo",
        preview: {
          line1: "Martina Ferrari",
          line2: "Tech Lead · Piattaforma",
        },
      },
      doctors: {
        name: "Medici",
        description: "Personale sanitario con specializzazione e struttura",
        preview: {
          line1: "Dott. Davide Ricci",
          line2: "Cardiologia · Ospedale San Marco",
        },
      },
      patients: {
        name: "Pazienti",
        description: "Schede cliniche con diagnosi e gruppo sanguigno",
        preview: {
          line1: "Sofia Greco",
          line2: "A+ · Ipertensione",
        },
      },
      drivers: {
        name: "Autisti",
        description: "Conducenti per mobilità e trasporti con veicolo e valutazione",
        preview: {
          line1: "Simone Barbieri",
          line2: "Berlina · ★ 4.8",
        },
      },
      guests: {
        name: "Ospiti",
        description: "Clienti di hotel con numero camera e stato del soggiorno",
        preview: {
          line1: "Elena Moretti",
          line2: "Camera 412 · In struttura",
        },
      },
      profiles: {
        name: "Profili",
        description: "Profili social con follower e biografia",
        preview: {
          line1: "Federico Lombardi",
          line2: "@fede_lombardi · 12K follower",
        },
      },
      "girl-students": {
        name: "Studentesse",
        description: "Profili di studentesse con classe e istituto",
        preview: {
          line1: "Alice Colombo",
          line2: "4ª superiore · Liceo Galileo",
        },
      },
      "boy-students": {
        name: "Studenti",
        description: "Profili di studenti con classe e istituto",
        preview: {
          line1: "Tommaso Marino",
          line2: "3ª media · Scuola Media Dante",
        },
      },
      teachers: {
        name: "Insegnanti",
        description: "Docenti con materia insegnata e scuola",
        preview: {
          line1: "Francesca Riva",
          line2: "Matematica · Liceo Volta",
        },
      },
      products: {
        name: "Prodotti",
        description: "Articoli e prezzi per cataloghi e-commerce",
        preview: {
          line1: "Cuffie wireless con cancellazione del rumore",
          line2: "149,00 € · Gadget",
          line3: "★★★★☆",
        },
      },
      orders: {
        name: "Ordini",
        description: "Ordini d'acquisto con riepilogo articoli e stato",
        preview: {
          line1: "Ordine #10482",
          line2: "3 articoli · 249,00 €",
          line3: "Consegnato",
        },
      },
      reviews: {
        name: "Recensioni",
        description: "Valutazioni a stelle e commenti sui prodotti",
        preview: {
          line1: "★★★★★ Ottimo acquisto",
          line2: "Materiali solidi e uso intuitivo.",
        },
      },
      categories: {
        name: "Categorie",
        description: "Categorie per cataloghi e store online",
        preview: { line1: "Gadget", line2: "gadgets" },
      },
      "cart-items": {
        name: "Articoli nel carrello",
        description: "Prodotti aggiunti al carrello acquisti",
        preview: { line1: "Smartwatch", line2: "2 × 199,00 € · 398,00 €" },
      },
      coupons: {
        name: "Coupon",
        description: "Codici sconto e condizioni di utilizzo",
        preview: { line1: "WELCOME10", line2: "10% di sconto · scade 2026-12-01" },
      },
      payments: {
        name: "Pagamenti",
        description: "Transazioni con importo e metodo di pagamento",
        preview: { line1: "68,00 € EUR", line2: "Carta di credito · Pagato" },
      },
      shipments: {
        name: "Spedizioni",
        description: "Stato di consegna e corriere assegnato",
        preview: { line1: "ORD-10482 · BRT", line2: "In transito" },
      },
      invoices: {
        name: "Fatture",
        description: "Documenti fiscali con importo e scadenza",
        preview: { line1: "FT-10482", line2: "1.280,00 € · Pagata" },
      },
      brands: {
        name: "Brand",
        description: "Marche con logo e numero di prodotti",
        preview: { line1: "Acme", line2: "acme · 128 prodotti" },
      },
      posts: {
        name: "Post",
        description: "Articoli di blog e aggiornamenti del feed",
        preview: { line1: "Progettare interfacce essenziali", line2: "di Chiara Romano" },
      },
      comments: {
        name: "Commenti",
        description: "Commenti e risposte su articoli o prodotti",
        preview: {
          line1: "Spiegazione chiarissima!",
          line2: "chiara · 12 mi piace",
        },
      },
      messages: {
        name: "Messaggi",
        description: "Messaggi di chat e conversazioni dirette",
        preview: {
          line1: "Riesci a dare un'occhiata all'ultima bozza?",
          line2: "Matteo Esposito → Giulia Bianchi",
        },
      },
      notifications: {
        name: "Notifiche",
        description: "Avvisi e riepiloghi in-app per gli utenti",
        preview: { line1: "Nuovo commento ricevuto", line2: "Attività · 2 ore fa" },
      },
      tags: {
        name: "Tag",
        description: "Etichette con slug e conteggio contenuti",
        preview: { line1: "typescript", line2: "142 post" },
      },
      "content-categories": {
        name: "Categorie contenuti",
        description: "Categorie per organizzare articoli e guide",
        preview: { line1: "Tutorial", line2: "tutorials · 86 post" },
      },
      likes: {
        name: "Mi piace",
        description: "Interazioni di gradimento su post e commenti",
        preview: { line1: "Federico Lombardi ha messo mi piace", line2: "Post · Mi piace" },
      },
      albums: {
        name: "Album",
        description: "Album musicali con copertina e tracklist",
        preview: {
          line1: "Random Access Memories",
          line2: "Daft Punk",
          line3: "2013 · 13 brani",
        },
      },
      songs: {
        name: "Brani",
        description: "Tracce audio con durata e artista",
        preview: { line1: "Midnight Cruise", line2: "3:42 · Elettronica" },
      },
      movies: {
        name: "Film",
        description: "Schede film con locandina e valutazione",
        preview: { line1: "Late Night Express", line2: "2021 · ★ 8.2" },
      },
      books: {
        name: "Libri",
        description: "Volumi con autore e immagine di copertina",
        preview: { line1: "Appunti di design delle interfacce", line2: "Chiara Romano · 2019" },
      },
      videos: {
        name: "Video",
        description: "Contenuti video con durata e visualizzazioni",
        preview: {
          line1: "Creare una dashboard in 10 minuti",
          line2: "12:40 · 84K visualizzazioni",
        },
      },
      images: {
        name: "Immagini",
        description: "Asset immagine con risoluzione e tag",
        preview: { line1: "Tramonto sui tetti", line2: "1280×720" },
      },
      podcasts: {
        name: "Podcast",
        description: "Programmi audio con conduttore ed episodi",
        preview: { line1: "Codice e caffè", line2: "48 episodi · Tech" },
      },
      playlists: {
        name: "Playlist",
        description: "Raccolte di brani con curatore e genere",
        preview: { line1: "Focus al lavoro", line2: "32 brani · Elettronica" },
      },
      companies: {
        name: "Aziende",
        description: "Schede aziendali e settore di attività",
        preview: { line1: "Acme S.r.l.", line2: "Software · Milano" },
      },
      jobs: {
        name: "Offerte di lavoro",
        description: "Posizioni aperte con sede e inquadramento",
        preview: {
          line1: "Frontend Engineer",
          line2: "Google · Milano · Tempo pieno",
        },
      },
      courses: {
        name: "Corsi",
        description: "Percorsi formativi con programma e docente",
        preview: { line1: "React nella pratica", line2: "Intermedio · 12 ore" },
      },
      events: {
        name: "Eventi",
        description: "Meetup, conferenze e appuntamenti",
        preview: { line1: "Meetup Frontend", line2: "Milano · Workshop" },
      },
      projects: {
        name: "Progetti",
        description: "Iniziative con stato di avanzamento e budget",
        preview: { line1: "Restyling dashboard analytics", line2: "In corso · 72%" },
      },
      teams: {
        name: "Team",
        description: "Squadre interne con referente e numero membri",
        preview: { line1: "Team Prodotto", line2: "8 membri · Sviluppo" },
      },
      continents: {
        name: "Continenti",
        description: "Continenti con codice e dati statistici",
        preview: { line1: "Europa", line2: "EU · 44 Paesi" },
      },
      countries: {
        name: "Paesi",
        description: "Paesi con nome, codice ISO e bandiera",
        preview: { line1: "Italia", line2: "IT · Roma" },
      },
      cities: {
        name: "Città",
        description: "Città collegate a regioni e Paesi",
        preview: { line1: "Bologna", line2: "Italia · Emilia-Romagna" },
      },
      addresses: {
        name: "Indirizzi",
        description: "Indirizzi per spedizioni e sedi operative",
        preview: {
          line1: "Via Tortona 31",
          line2: "20144 Milano MI",
        },
      },
      regions: {
        name: "Regioni",
        description: "Aree geografiche e regioni amministrative",
        preview: { line1: "Lombardia", line2: "Italia · Milano" },
      },
      neighborhoods: {
        name: "Quartieri",
        description: "Zone e quartieri all'interno di una città",
        preview: { line1: "Navigli", line2: "Milano · 20143" },
      },
      airports: {
        name: "Aeroporti",
        description: "Aeroporti con codice IATA e città servita",
        preview: { line1: "Aeroporto di Milano Malpensa", line2: "MXP · Italia" },
      },
      coordinates: {
        name: "Coordinate",
        description: "Latitudine, longitudine e note sul punto",
        preview: {
          line1: "45.464211, 9.191383",
          line2: "Milano · Italia",
        },
      },
    },
    errors: {
      pickTopic: "Seleziona prima un tipo di dati.",
      INVALID_TOPIC: "Tipo di dati non riconosciuto.",
      INVALID_FIELDS: "Seleziona almeno un campo.",
      INVALID_QUANTITY: "La quantità deve essere compresa tra 1 e 1000.",
      INVALID_COUNTRY: "Paese non valido.",
      GENERATE_FAILED: "Impossibile generare i dati. Riprova tra poco.",
      DOWNLOAD_FAILED: "Download non riuscito. Riprova tra poco.",
      CREATE_FAILED: "Impossibile creare l'API temporanea.",
      LIMIT_REACHED: "Hai raggiunto il limite di 5 API temporanee. Elimina una voce esistente.",
      RATE_LIMITED: "Troppe richieste in poco tempo. Riprova tra qualche istante.",
    },
  },
  preview: {
    docs: "Documentazione",
    playground: "Playground",
    blurb: "Una vista rapida per provare come si comporta questa API.",
    blurbFaHint: "",
    backToResource: "Torna a {name}",
    search: "Cerca",
    create: "Crea",
    edit: "Modifica",
    delete: "Elimina",
    save: "Salva",
    saving: "Salvataggio…",
    deleting: "Eliminazione…",
    cancel: "Annulla",
    fillSample: "Compila esempio",
    noRecords: "Nessun record trovato",
    loading: "Caricamento…",
    confirmDelete: "Eliminare questo record?",
    confirmDeleteBody: "Questa azione non può essere annullata.",
    networkError: "Errore di rete",
    authDemoPassword: "Tutti gli utenti iniziali usano la stessa password demo:",
    username: "Username",
    password: "Password",
    login: "Accedi",
    loginSuccess: "Accesso effettuato.",
    logout: "Esci",
    getMe: "GET /me",
    token: "Token",
    user: "Utente",
    loginFirst: "Effettua prima l'accesso per ottenere un token",
    createdAt: "Creato il",
    fieldLabels: {
      name: "Nome",
      username: "Username",
      email: "Email",
      avatarUrl: "URL avatar",
      role: "Ruolo",
      city: "Città",
      country: "Paese",
      company: "Azienda",
      title: "Titolo",
      body: "Testo",
      published: "Pubblicato",
      userId: "ID utente",
      postId: "ID post",
      albumId: "ID album",
      url: "URL",
      thumbnailUrl: "URL miniatura",
      completed: "Completato",
      description: "Descrizione",
      price: "Prezzo",
      stock: "Disponibilità",
      category: "Categoria",
      imageUrl: "URL immagine",
      message: "Messaggio",
      type: "Tipo",
      read: "Letto",
      code: "Codice",
      capital: "Capitale",
      region: "Regione",
      population: "Popolazione",
      currency: "Valuta",
      flagUrl: "URL bandiera",
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
      teaser: "In sviluppo — strumenti per formattare, confrontare e convertire JSON",
      hint: "/json — seleziona uno strumento per cambiare vista",
      badge: "In sviluppo",
      summary:
        "JSON Workbench (in sviluppo) è una suite nel browser per formattare JSON, confrontare strutture, cercare e convertire dati. Supporta TypeScript, Zod, YAML, CSV e numerose utility.",
      details: [
        "Apri JSON Workbench su /json e scegli uno strumento per passare subito alla relativa vista (supporta anche ?tool=).",
        "Strumenti base: Formatta, Albero, Cerca, JSONPath e Confronta struttura.",
        "Conversioni: TypeScript, Zod, JSON Schema, YAML e CSV.",
        "Utility: Ordina chiavi, Rimuovi vuoti, Appiattisci, Escape, Ripara JSON, Seleziona/Escludi chiavi e altro.",
        "È in sviluppo attivo: continueremo ad aggiungere strumenti e miglioramenti nei prossimi rilasci.",
      ],
    },
    "2026-09-19-image-generator": {
      title: "Generatore immagini",
      teaser: "URL di immagini segnaposto generati su richiesta",
      hint: "/image-generator — scegli SVG o Foto e copia l'URL",
      summary:
        "Genera immagini segnaposto tramite URL parametrizzati. Supporta grafiche SVG MockData e foto Picsum, con formati predefiniti per avatar, post, banner e altro.",
      details: [
        "Scegli SVG o Foto su /image-generator, imposta larghezza e altezza e copia l'URL.",
        "Gli URL pubblici restituiscono un'immagine casuale per impostazione predefinita: usa /image/{w}/{h} per SVG o ?type=real per le foto.",
        "Aggiungi un parametro ?seed= qualsiasi per mantenere sempre la stessa palette SVG o la stessa foto.",
        "Copia l'URL direttamente in tag img, regole CSS o campi immagine.",
      ],
    },
    "2026-09-17-generator": {
      title: "Generatore dati",
      teaser: "JSON realistici pronti in pochi secondi",
      hint: "/generator — scegli un tipo di dati per generare, copiare o creare un'API",
      summary:
        "Crea JSON realistici per il frontend in pochi istanti. Scegli tipo di dati, campi e quantità, poi copia, scarica o pubblica come API temporanea.",
      details: [
        "Genera dati per Persone, E-commerce, Contenuti, Media, Business e Località su /generator.",
        "Supporta il formato body POST e il formato record API, con dati locali in persiano per FA.",
        "Genera fino a 1.000 record alla volta nel browser; 'Crea API' segue i limiti delle API temporanee (500 record / 64 KB).",
        "Le impostazioni scelte e i dati generati restano salvati mentre navighi tra le pagine (si azzerano al ricaricamento).",
      ],
    },
    "2026-09-16-temporary": {
      title: "API temporanee",
      teaser: "Incolla un JSON e ottieni un URL REST usa e getta",
      hint: "/temporary — incolla JSON per creare un URL REST pubblico",
      summary:
        "Crea endpoint REST pubblici temporanei incollando qualsiasi JSON. Non serve registrarsi e puoi mantenere fino a 5 API attive per browser.",
      details: [
        "Creale su /temporary scegliendo una durata tra 1 ora, 6 ore, 12 ore o 24 ore.",
        "Usa GET, POST, PATCH e DELETE sul tuo URL /api/t/… proprio come con qualsiasi altro endpoint.",
        "Fino a 5 API attive per browser e fino a 20 creazioni per IP ogni ora.",
        "Tratta l'URL come una password: fino alla scadenza chiunque abbia il link può leggere e aggiornare i dati.",
      ],
    },
    "2026-09-15-preview": {
      title: "Anteprime risorse",
      teaser: "Interfacce di esempio collegate alle API",
      hint: "/preview/users — prova le operazioni CRUD nel browser",
      summary:
        "Aggiunte interfacce essenziali collegate alle API reali per risorse come Users, Posts e Auth.",
      details: [
        "Apri l'anteprima collegata alle API live dalla scheda di documentazione di ciascuna risorsa.",
        "Prova lettura, ricerca, paginazione, creazione, modifica ed eliminazione sui dati demo condivisi.",
        "L'anteprima Auth include un form di accesso (password fissa: password) e chiamate GET /me autenticate con token.",
        "Carica i dati di esempio in persiano quando necessario tramite il selettore lingua nell'intestazione.",
      ],
    },
    "2026-09-14-lang-fa": {
      title: "Dati in persiano (?lang=fa)",
      teaser: "Dataset di esempio localizzato in persiano",
      hint: "/api/users?lang=fa — aggiungi lang=fa per ottenere dati in persiano",
      summary:
        "Aggiungi ?lang=fa a qualsiasi endpoint per ricevere nomi, username, numeri di telefono e testi di esempio in persiano.",
      details: [
        "L'inglese resta la lingua predefinita; la selezione avviene solo tramite parametro di query lang=fa (senza cookie o Accept-Language).",
        "Le risposte FA includono Content-Language: fa e le informazioni sul font Vazirmatn per il rendering.",
        "Supporta elenchi, dettagli singoli e login con username in persiano.",
        "Scegliendo فارسی nell'intestazione, anche il Playground aggiunge automaticamente lang=fa.",
      ],
    },
    "2026-09-12-playground": {
      title: "Playground",
      teaser: "Chiama le API direttamente dal browser",
      hint: "/playground — invia richieste e ispeziona il JSON",
      summary:
        "Invia richieste API direttamente dal browser, testa login riusciti o non riusciti e visualizza risposte JSON formattate.",
      details: [
        "Scegli risorsa e azione, modifica parametri di query o body JSON e invia la richiesta.",
        "Confronta facilmente risposte 200 e 401 per il login Auth usando i pulsanti Credenziali valide / Credenziali errate.",
        "Visualizza codice di stato HTTP, JSON formattato e metadati di paginazione per le collezioni.",
        "Le richieste per risorsa e l'ultima risposta restano in memoria durante la navigazione (si azzerano al ricaricamento).",
      ],
    },
    "2026-09-10-auth": {
      title: "Mock Auth",
      teaser: "Login e autenticazione con token Bearer",
      hint: "/api/auth/login — la password è sempre password",
      summary:
        "Invia in POST un utente iniziale e la password a /api/auth/login per ottenere un token Bearer utilizzabile con /me.",
      details: [
        "Tutti gli utenti iniziali condividono la password demo password.",
        "In caso di successo viene restituito un token Bearer mock insieme all'oggetto user (id, name, username, email, role).",
        "Password errate o utenti inesistenti restituiscono 401 con una struttura di errore chiara.",
        "Invia il token nell'intestazione Authorization: Bearer <token> verso GET /api/auth/me per leggere l'utente corrente.",
      ],
    },
    "2026-09-08-resources": {
      title: "Risorse REST live",
      teaser: "CRUD completo su Users, Posts e altre risorse",
      hint: "/docs#resources — consulta l'elenco degli endpoint disponibili",
      summary:
        "Disponibili Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications e Countries con CRUD completo e paginazione.",
      details: [
        "Gli elenchi paginati usano la forma { data, pagination } con page, limit, total e totalPages.",
        "Supporta parametri di query per ricerca, ordinamento, filtri, latenza simulata e codici di errore forzati.",
        "Il database condiviso di produzione si azzera ogni giorno: usalo per demo e test, non per conservare dati permanenti.",
        "Scarica la specifica leggibile dalle macchine da /openapi.json per Postman, Swagger o strumenti AI.",
      ],
    },
  },
  catalog: {
    auth: {
      title: "Auth",
      summary:
        "Endpoint di login mock basato su username e password. Restituisce un token Bearer se valido oppure 401 se non autorizzato.",
    },
    users: {
      title: "Users",
      summary: "API CRUD mock per gli utenti con ricerca, filtro per ruolo e paginazione.",
    },
    posts: {
      title: "Posts",
      summary: "Post di blog collegati agli utenti, con supporto a tag e stato di pubblicazione.",
    },
    comments: {
      title: "Comments",
      summary: "Commenti associati ai post, completi di nome, email e testo.",
    },
    albums: {
      title: "Albums",
      summary: "Album collegati agli utenti; le foto fanno riferimento all'album tramite albumId.",
    },
    photos: {
      title: "Photos",
      summary: "Immagini all'interno di un album, con campi url e thumbnailUrl.",
    },
    todos: {
      title: "Todos",
      summary: "Attività semplici collegate agli utenti con stato di completamento.",
    },
    products: {
      title: "Products",
      summary: "Catalogo prodotti con prezzo, disponibilità, categoria e imageUrl.",
    },
    notifications: {
      title: "Notifications",
      summary: "Notifiche per gli utenti con tipologia e stato di lettura.",
    },
    countries: {
      title: "Countries",
      summary: "Dati sui Paesi con codici ISO, regione, popolazione e bandiera.",
    },
  },
};

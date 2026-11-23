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

export const nl: Messages = {
  common: {
    home: "Home",
    docs: "Documentatie",
    playground: "Playground",
    contact: "Contact",
    preview: "Voorbeeld",
    search: "Zoeken",
    loading: "Laden…",
    save: "Opslaan",
    saving: "Opslaan…",
    cancel: "Annuleren",
    create: "Aanmaken",
    edit: "Bewerken",
    delete: "Verwijderen",
    searchPlaceholder: "Zoek API's…",
    noResults: "Geen resultaten gevonden",
    new: "Nieuw",
    inDevelopment: "In ontwikkeling",
    actions: "Acties",
    copy: "Kopiëren",
    copied: "Gekopieerd",
    live: "Live",
    open: "Openen",
    tryIt: "Probeer het",
    learnMore: "Meer informatie",
    back: "Terug",
    close: "Sluiten",
    yes: "Ja",
    no: "Nee",
    name: "Naam",
    email: "E-mail",
    message: "Bericht",
    send: "Versturen",
    sending: "Versturen…",
    networkError: "Netwerkfout",
    temporary: "Tijdelijke API's",
    temporaryBadge: "Direct klaar",
    generator: "Datagenerator",
    imageGenerator: "Afbeeldingsgenerator",
    jsonWorkbench: "JSON-werkruimte",
  },
  header: {
    primaryNav: "Hoofdnavigatie",
    whatsNew: "Wat is nieuw",
    whatsNewTitle: "Wat is nieuw",
    whatsNewSubtitle: "Nieuwste functies en updates",
    latest: "Nieuwste",
    contact: "Info & contact",
    menu: "Menu",
    openMenu: "Menu openen",
    appearance: "Weergave",
    lightMode: "Schakel over naar lichte modus",
    darkMode: "Schakel over naar donkere modus",
    light: "Licht",
    dark: "Donker",
    apiLangGroup: "Taal",
    english: "English",
    persian: "فارسی",
    github: "GitHub",
    githubStars: "GitHub — Geef de repository een ster",
  },
  home: {
    tagline:
      "Gratis REST mock-API's met realistische JSON om direct mee aan de slag te gaan. Bouw prototypes, test authenticatie en koppel endpoints zonder eerst een backend op te zetten.",
    taglineNote: "",
    resourcesTitle: "Resources",
    resourcesBlurb:
      "Tien kant-en-klare REST API's met documentatie en voorbeelden. In productie draaien ze op een gedeelde demodatabase.",
    searchLabel: "Zoek API's en endpoints",
    searchPlaceholder: "Zoek op users, posts, auth…",
    temporaryCtaTitle: "Tijdelijke API's",
    temporaryCtaBody:
      "Maak een tijdelijke API aan door JSON te plakken of rechtstreeks vanuit de generator. Behandel de URL als een wachtwoord. Je kunt maximaal 5 actieve tijdelijke API's per browser bewaren.",
    temporaryCtaLink: "Tijdelijke API maken",
  },
  notFound: {
    title: "Pagina niet gevonden",
    body: "De pagina die je zoekt bestaat niet op MockData. Ga terug naar de homepagina of bekijk de documentatie.",
    home: "Home",
    docs: "Documentatie",
  },
  blog: {
    title: "Blog",
    description:
      "Handleidingen, inzichten en artikelen over mockdata, JSON, API's en frontend-workflows.",
    all: "Alles",
    emptyTitle: "Nog geen artikelen gepubliceerd",
    emptyBody: "Zodra er nieuwe artikelen verschijnen, zie je ze hier. Kom later nog eens terug.",
    emptyCategoryTitle: "Geen artikelen in deze categorie",
    emptyCategoryBody: "Kies een andere categorie of bekijk alle artikelen.",
    readingTime: "{n} min leestijd",
    previousPage: "Vorige",
    nextPage: "Volgende",
    pageStatus: "Pagina {page} van {total}",
    paginationNav: "Paginanavigatie",
    categoriesNav: "Blogcategorieën",
    backToBlog: "Blog",
    previousArticle: "Vorig artikel",
    nextArticle: "Volgend artikel",
    relatedArticles: "Gerelateerde artikelen",
    categories: {
      news: "Nieuws",
      "mock-data": "Mockdata",
      json: "JSON",
      api: "API",
      frontend: "Frontend",
    },
  },
  contact: {
    title: "Contact",
    intro:
      "Heb je een vraag, feedback of een goed idee? Stuur hier een bericht of mail ons rechtstreeks via:",
    name: "Naam",
    email: "E-mail",
    topic: "Onderwerp",
    message: "Bericht",
    send: "Bericht versturen",
    sending: "Versturen…",
    success: "Je bericht is verstuurd. Bedankt voor je reactie — we nemen snel contact op.",
    chooseTopic: "Kies een onderwerp voor je bericht.",
    pickTopic: "Waar gaat je bericht over?",
    topics: {
      question: "Vraag",
      bug: "Bug melden",
      feature: "Functieverzoek",
      other: "Overig",
    },
  },
  docs: {
    title: "Documentatie",
    navLabel: "Documentatie-inhoud",
    intro:
      "MockData biedt JSON-gestuurde mock REST-resources. Je kunt publieke endpoints aanroepen, inlogflows testen, verzoeken sturen vanuit de Playground, datasets genereren in /generator, tijdelijke afbeeldingen maken in /image-generator, JSON Workbench gebruiken in /json en tijdelijke API's opzetten. Resources uit de productiecatalogus gebruiken een gedeelde database (zie Gedeelde data voor meer informatie).",
    toc: {
      intro: "Introductie",
      whatsNew: "Wat is nieuw",
      temporary: "Tijdelijke API's",
      generator: "Datagenerator",
      imageGenerator: "Afbeeldingsgenerator",
      jsonWorkbench: "JSON-werkruimte",
      sharedData: "Gedeelde data",
      language: "Taal",
      resources: "Resources",
      openapi: "OpenAPI",
      requests: "Verzoeken",
      errors: "Fouten",
      rateLimit: "Rate limit",
      reset: "Data resetten",
    },
    whatsNewTitle: "Wat is nieuw",
    whatsNewBlurb:
      "De belangrijkste updates voor ontwikkelaars op volgorde van verschijnen. Klik op een kaart voor details; je opent dezelfde lijst ook via het belicoon bovenin.",
    temporaryTitle: "Tijdelijke API's",
    temporaryBody:
      "Heb je een tijdelijk REST-endpoint nodig met je eigen JSON? Tijdelijke API's staan los van de gedeelde catalogus: plak JSON en kies een verloopduur om een publieke /api/t/… URL te krijgen, of maak er direct een via 'API maken' in de generator.",
    temporaryBullets: [
      "Maak er een in de browser op /temporary zonder account (ook beschikbaar via 'API maken' op /generator).",
      "Kies uit een verloopduur van 1 uur, 6 uur, 12 uur of 24 uur (standaard: 12 uur).",
      "Stuur GET-, POST-, PATCH- en DELETE-verzoeken naar je /api/t/… URL, net als bij collecties en documenten.",
      "Beheer de URL als een wachtwoord: tot de verloopdatum kan iedereen met de link de data lezen en aanpassen.",
      "Verzoeken naar een verlopen tijdelijke API geven HTTP 410 terug.",
    ],
    temporaryLimitsTitle: "Limieten voor tijdelijke API's",
    temporaryLimitsBullets: [
      "Maximaal 5 actieve tijdelijke API's tegelijk per browser.",
      "Tot 20 aangemaakte API's per IP binnen een voortschrijdend venster van 1 uur (HTTP 429 bij overschrijding).",
      "Maximale JSON-payloadgrootte is 64 KB.",
      "Maximaal 8 niveaus geneste data, tot 500 items per array en tot 200 sleutels per object.",
      "De algemene /api-rate limit (ongeveer 60 verzoeken per minuut per IP) geldt eveneens.",
    ],
    generatorTitle: "Datagenerator",
    generatorBody:
      "Genereer realistische JSON voor frontendontwikkeling zonder zelf voorbeelddata te hoeven intypen. Alles draait in de browser; je kunt de data kopiëren, downloaden of direct omzetten in een tijdelijke API.",
    generatorBullets: [
      "Ga naar /generator en kies uit categorieën als Personen, E-commerce, Content, Media, Business en Locatie.",
      "Wissel tussen het POST-bodyformaat (zonder id en timestamps) en het API-recordformaat (met id, createdAt en updatedAt).",
      "Gebruik lokale Perzische data voor FA en Engelstalige data uit meerdere landen voor EN.",
      "Genereer tot 1.000 records per keer in de browser. 'API maken' volgt de limieten van tijdelijke API's (500 records / 64 KB).",
      "Keuzes en gegenereerde resultaten blijven bewaard terwijl je door de app navigeert (en resetten bij een volledige paginaverversing).",
    ],
    imageGeneratorTitle: "Afbeeldingsgenerator",
    imageGeneratorBody:
      "Maak op aanvraag URL's voor tijdelijke afbeeldingen voor je UI. Kies tussen MockData SVG's of willekeurige foto's via Picsum, stel breedte en hoogte in en kopieer de URL voor img-tags, CSS of afbeeldingsvelden.",
    imageGeneratorBullets: [
      "Kies op /image-generator tussen SVG-afbeeldingen of echte foto's.",
      "Publiek URL-formaat: /image/{width}/{height} voor SVG, of voeg ?type=real toe voor foto's.",
      "Standaard krijg je een willekeurig resultaat, of geef een willekeurige ?seed= mee om dezelfde SVG-kleuren of foto te behouden.",
      "Inclusief handige standaardformaten voor avatars, thumbnails, profielen, posts, covers, banners en stories.",
    ],
    jsonWorkbenchTitle: "JSON Workbench",
    jsonWorkbenchBody:
      "JSON Workbench (in ontwikkeling) is een set tools om JSON te formatteren, vergelijken, doorzoeken en converteren in de browser terwijl je schermen bouwt.",
    jsonWorkbenchBullets: [
      "Open JSON Workbench op /json en kies een tool om direct te wisselen (ondersteunt ook ?tool=).",
      "Kerntools: Formatteren, Boomweergave, Zoeken, JSONPath en Structuur vergelijken.",
      "Conversietools: TypeScript, Zod, JSON Schema, YAML en CSV.",
      "Utilities: Sleutels sorteren, Lege waarden verwijderen, Flatten, Escapen/Repareren, Velden kiezen/uitsluiten en meer.",
      "Draait volledig in de browser — je JSON wordt niet naar de server gestuurd.",
      "Wordt actief verder ontwikkeld; er komen nog meer tools en verbeteringen aan.",
    ],
    sharedDataTitle: "Gedeelde data",
    sharedDataBody:
      "Alle gebruikers werken in dezelfde live database: wat je aanmaakt, bewerkt of verwijdert is direct voor iedereen zichtbaar. In productie wordt de database dagelijks teruggezet naar de begindata via GET /api/cron/reset. Geschikt voor prototypes en demo's, maar niet voor permanente of gevoelige gegevens.",
    languageTitle: "Taal",
    languageBody:
      "Standaard worden alle resourceteksten in het Engels teruggegeven. Voeg de queryparameter lang=fa toe om namen, gebruikersnamen, e-mailadressen, telefoonnummers en zinnen in het Perzisch te ontvangen. Cookies en Accept-Language-headers worden niet gebruikt — alleen de queryparameter. Als je bovenin van taal wisselt (English | فارسی), past de Playground en Voorbeeldweergave zich ook aan.",
    languageBullets: [
      "Voorbeeld: GET /api/users?lang=fa",
      "FA-responses bevatten Content-Language: fa en een font-object voor weergave (Vazirmatn).",
      "Met فارسی geselecteerd bovenin schakelt de layout over naar rechts-naar-links (RTL) en voegt de Playground automatisch lang=fa toe.",
    ],
    resourcesTitle: "Resources",
    resourcesBlurb:
      "Een overzicht van de endpoints die nu live staan en functies die binnenkort volgen.",
    colResource: "Resource",
    colBasePath: "Basispad",
    colStatus: "Status",
    colDocs: "Docs",
    statusLive: "Live",
    statusDev: "In ontwikkeling",
    statusSoon: "Binnenkort",
    openapiTitle: "OpenAPI",
    openapiBody:
      "Machinaal leesbare specificatie voor alle beschikbare endpoints (Auth, Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, Countries en admin-reset). Geschikt om te importeren in Postman, Swagger UI of AI-tools.",
    download: "Downloaden",
    requestsTitle: "Verzoeken",
    requestsBody:
      "Collectie-endpoints geven data en pagination terug; individuele resources geven { data } terug.",
    errorsTitle: "Fouten",
    errorsBody:
      "Foutresponses bevatten een error-object. Veelvoorkomende statuscodes zijn 400 voor ongeldige verzoeken, 401 voor ontbrekende of onjuiste authenticatie, 404 voor niet-gevonden items, 429 bij te veel verzoeken en 500 voor serverfouten. Om foutafhandeling in je client te testen kun je ?status=500 (bereik 400–599) toevoegen om die statuscode te simuleren.",
    rateLimitTitle: "Rate limit",
    rateLimitBody:
      "Om de service voor iedereen betrouwbaar te houden zijn /api/*-verzoeken begrensd tot ongeveer {limit} per minuut per IP. Bij overschrijding volgt HTTP 429 (Too Many Requests); via de X-RateLimit-headers zie je hoeveel ruimte er nog over is.",
    resetTitle: "Data resetten",
    resetBody:
      "Alle bezoekers delen dezelfde demodatabase. In productie wordt deze elke 24 uur teruggezet, maar met de admin-secret kun je hieronder de demotabellen leegmaken en opnieuw vullen met de begindata.",
    resetPanel: {
      intro: "Vul de admin-secret in om de demotabellen te resetten en opnieuw te vullen met begindata.",
      placeholder: "Admin-secret",
      button: "Nu resetten",
      resetting: "Resetten…",
      needSecret: "Vul eerst een admin-secret in.",
      confirm: "Demotabellen resetten en opnieuw vullen met begindata?",
      networkError: "Netwerkfout. Controleer of de server draait.",
      donePrefix: "Gereset",
    },
    colIndex: "#",
  },
  resourceDocs: {
    endpoints: "Endpoints",
    queryParams: "Queryparameters",
    examples: "Voorbeeldverzoeken",
    response: "Voorbeeldresponse",
    tryExample: "Uitproberen",
    preview: "Voorbeeld",
    playground: "Playground",
    backToResources: "Terug naar resources",
  },
  playground: {
    title: "Playground",
    blurb:
      "Stuur echte verzoeken naar MockData-API's en bekijk de JSON-responses direct in je browser. Je laatste verzoek per resource blijft bewaard tijdens het navigeren.",
    resource: "Resource",
    action: "Actie",
    send: "Versturen",
    sending: "Versturen…",
    response: "Response",
    request: "Verzoek",
    body: "Body",
    query: "Query",
    headers: "Headers",
    correct: "Geldige inloggegevens",
    wrong: "Ongeldige inloggegevens",
    password: "Wachtwoord",
    user: "Gebruiker",
    pickUser: "Kies een gebruiker",
    loadError: "Kon opties niet laden",
    emptyResponse: "Nog geen response",
    startHint: "Kies een resource en verstuur een verzoek om te beginnen.",
    types: "TS",
    json: "JSON",
  },
  temporary: {
    title: "Tijdelijke API's",
    blurb: "Plak JSON en maak razendsnel een tijdelijke API aan.",
    privacyNote:
      "Beheer de URL als een wachtwoord: tot de verloopdatum kan iedereen met de link de data lezen en bewerken. Maximaal 5 actieve tijdelijke API's per browser.",
    jsonLabel: "JSON",
    durationLabel: "Geldigheidsduur",
    duration1h: "1 uur",
    duration6h: "6 uur",
    duration12h: "12 uur",
    duration24h: "24 uur",
    checkJson: "Controleer JSON",
    jsonValid: "Ziet er goed uit. Je kunt de API aanmaken.",
    jsonHint: "Je kunt de JSON eerst controleren of direct aanmaken.",
    create: "API maken",
    creating: "Aanmaken…",
    acceptFix: "Correctie toepassen en aanmaken",
    rejectFix: "Verder bewerken",
    fixedPreview: "We hebben enkele problemen automatisch hersteld. Controleer en maak aan.",
    myApis: "Mijn tijdelijke API's",
    emptyList: "Je hebt nog geen actieve tijdelijke API's.",
    copyUrl: "Kopiëren",
    delete: "Verwijderen",
    deleteAll: "Alles verwijderen",
    deleting: "…",
    confirmDelete: "Deze API verwijderen?",
    confirmDeleteBody: "Deze URL werkt daarna direct niet meer.",
    confirmDeleteAll: "Alle API's verwijderen?",
    confirmDeleteAllBody: "Alle URL's in deze lijst werken daarna direct niet meer.",
    cancel: "Annuleren",
    limitReached: "Limiet van 5 API's bereikt.",
    limitReachedBody: "Verwijder een API uit de lijst hieronder of wacht tot er een verloopt.",
    createdTitle: "API aangemaakt",
    openApi: "Openen",
    slotsLabel: "{n} / 5",
    maxActive: "",
    sampleJson: `[
  { "id": "1", "firstName": "Daan", "lastName": "de Vries", "role": "admin" },
  { "id": "2", "firstName": "Emma", "lastName": "Bakker", "role": "member" },
  { "id": "3", "firstName": "Noah", "lastName": "Jansen", "role": "member" }
]`,
    issues: {
      EMPTY: "Plak een JSON-object of -array.",
      INVALID_JSON: "Ongeldige JSON. Controleer komma's, aanhalingstekens en haakjes.",
      TOO_LARGE: "De JSON is groter dan het maximum ({max} KB).",
      NOT_OBJECT_OR_ARRAY: "Het topniveau moet een object { } of een array [ ] zijn.",
      TOO_DEEP: "Te veel geneste niveaus (maximaal {max}).",
      ARRAY_TOO_LONG: "De array is langer dan toegestaan (maximaal {max} items).",
      TOO_MANY_KEYS: "Te veel sleutels in één object (maximaal {max}).",
      UNSAFE_KEY: "De onveilige sleutel '{key}' is niet toegestaan.",
      AUTO_FIXED: "Overbodige afsluitkomma's of onveilige sleutels zijn opgeschoond.",
    },
  },
  imageGenerator: {
    title: "Afbeeldingsgenerator",
    blurb:
      "Maak op aanvraag tijdelijke afbeeldingen voor je projecten. Kopieer URL's van MockData SVG's of willekeurige foto's voor img-tags, CSS of afbeeldingsvelden.",
    modeSvg: "SVG",
    modeReal: "Foto",
    width: "Breedte",
    height: "Hoogte",
    generate: "Genereer URL",
    generating: "Genereren…",
    yourUrl: "Gegenereerde API-URL",
    preview: "Voorbeeld",
    useInProject: "Gebruiken in project",
    tabUrl: "URL",
    tabHtml: "HTML",
    tabCss: "CSS",
    tabJs: "JavaScript",
    tabCurl: "cURL",
    readySizes: "Standaardformaten",
    sizes: {
      avatar: "Avatar",
      thumbnail: "Thumbnail",
      profile: "Profiel",
      square: "Vierkant",
      post: "Post",
      cover: "Cover",
      banner: "Banner",
      story: "Story",
    },
  },
  jsonWorkbench: {
    title: "JSON Workbench",
    blurb:
      "Plak je JSON één keer en wissel tussen formatteren, zoeken, converteren en meer zonder steeds opnieuw te plakken.",
    toolNavLabel: "Workbench-tools",
    source: {
      title: "Bron-JSON",
      hint: "Plak hier één keer — alle tools gebruiken deze JSON.",
      sample: "Voorbeeld laden",
      valid: "Geldige JSON.",
      needJson: "Plak links eerst een JSON.",
      fixFirst: "Los eerst de syntaxfout in de bron-JSON op.",
      pickAction: "Welke actie wil je uitvoeren?",
      useResult: "Gebruik in bron-JSON",
      diffHint: "De bron-JSON is kant A; plak hieronder JSON B om te vergelijken.",
      escapedInput: "Ge-escapete string",
      schemaInput: "JSON Schema",
      fromSchemaNote:
        "Plak hieronder een JSON Schema om voorbeeld-JSON te genereren en toe te passen op de bron-JSON.",
    },
    categories: {
      core: "Basis",
      transform: "Omzetten",
      utility: "Utility",
    },
    labels: {
      input: "Input",
      output: "Output",
      tree: "Boom",
      matches: "Treffers",
      jsonA: "JSON A",
      jsonB: "JSON B",
      diffResult: "Verschillen",
      jsonpath: "JSONPath",
      result: "Resultaat ({count})",
    },
    actions: {
      format: "Formatteren",
      minify: "Minimaliseren",
      showTree: "Boom tonen",
      search: "Zoeken",
      clearSearch: "Zoekopdracht wissen",
      replace: "Vervangen",
      replaceAll: "Alles vervangen",
      prevMatch: "Vorige",
      nextMatch: "Volgende",
      compare: "Vergelijken",
      run: "Uitvoeren",
      runPath: "Pad uitvoeren",
      toTypescript: "Omzetten naar TypeScript",
      toZod: "Omzetten naar Zod",
      toSchema: "Omzetten naar Schema",
      swapDirection: "Richting wisselen",
      sortKeys: "Sleutels sorteren",
      removeEmpty: "Lege waarden verwijderen",
      flatten: "Flatten",
      unflatten: "Unflatten",
      escape: "Escapen",
      unescape: "Unescapen",
      repair: "JSON repareren",
      fromSchema: "Voorbeeld genereren",
      extractKeys: "Sleutels extraheren",
      extractValues: "Waarden extraheren",
      pick: "Velden kiezen",
      omit: "Velden uitsluiten",
      compareStructure: "Structuur vergelijken",
      clear: "Wissen",
      expandAll: "Alles uitklappen",
      collapseAll: "Alles inklappen",
      copyPath: "Pad kopiëren",
      copyValue: "Waarde kopiëren",
    },
    errors: {
      empty: "Plak een JSON.",
      invalid: "Ongeldige JSON.",
      unexpectedEnd: "De JSON eindigt onverwacht.",
      unexpectedToken: "Onverwachte token: {token}",
      expectedPropertyName: "Eigenschapsnamen moeten tussen dubbele aanhalingstekens staan.",
      expectedCommaOrBrace: "Na de waarde wordt ',' of '}' verwacht.",
      expectedCommaOrBracket: "Na het array-element wordt ',' of ']' verwacht.",
      expectedColon: "Na de eigenschapsnaam wordt ':' verwacht.",
      unterminatedString: "Niet-afgesloten string.",
      badControlChar: "De string bevat een ongeldig stuurteken.",
      badEscape: "Ongeldige escape-reeks in de string.",
      trailingChar: "Er staan extra tekens na de JSON-waarde.",
      objectKeyExpected: "Hier wordt een objectsleutel verwacht.",
      unexpectedCharacter: "Onverwacht teken: {char}",
      invalidCharacter: "Ongeldig teken: {char}",
      invalidUnicode: "Ongeldige Unicode-escape: {chars}",
      couldNotRepair: "Deze JSON kon niet automatisch worden gerepareerd.",
      atLineColumn: "regel {line}, kolom {column}",
      atLine: "regel {line}",
      atPosition: "positie {position}",
    },
    types: {
      object: "object",
      array: "array",
      string: "string",
      number: "nummer",
      boolean: "boolean",
      null: "null",
    },
    validate: {
      idleHint: "Plak JSON om te controleren op geldige standaardsyntaxis.",
      validTitle: "Geldige JSON",
      validBody: "Root-type: {type}",
      invalidTitle: "Ongeldige JSON",
    },
    tree: {
      idleTitle: "De boom verschijnt hier",
      idleBody: "Plak links een JSON en klik op Boom tonen.",
      errorTitle: "Kan boom niet tonen",
      errorBody: "Los de syntaxfouten in de JSON op en probeer het opnieuw.",
    },
    search: {
      query: "Zoeken",
      replaceWith: "Vervangen door",
      matchCount: "{current} van {total}",
      noMatches: "Geen treffers",
      noMatchesBody: "Geen sleutel of waarde komt overeen met je zoekopdracht.",
      idleTitle: "Zoekresultaten verschijnen hier",
      idleBody: "Vul een zoekterm in en klik op Zoeken om sleutels en waarden te doorzoeken.",
      errorTitle: "Kan niet zoeken",
      errorBody: "Los de syntaxfouten in de JSON op voordat je zoekt.",
      kindKey: "sleutel",
      kindValue: "waarde",
      activeHint: "{kind} · {path}",
      replacedCount: "{count} items vervangen.",
    },
    diff: {
      idleTitle: "Verschillen verschijnen hier",
      idleBody: "Vul zowel JSON A als JSON B in om ze te vergelijken.",
      identical: "Geen verschillen. Beide documenten hebben dezelfde structuur en waarden.",
      added: "Toegevoegd / alleen in B",
      removed: "Verwijderd / alleen in A",
      changed: "Gewijzigd",
      sideEmpty: "Deze kant is leeg.",
      emptyA: "JSON A is leeg.",
      emptyB: "JSON B is leeg.",
      bothInvalid: "Zowel JSON A als JSON B is ongeldig.",
    },
    jsonpath: {
      whatIs:
        "Met JSONPath haal je gerichte waarden uit geneste JSON — vergelijkbaar met CSS-selectors voor data. Klik hieronder op een voorbeeld om het in te vullen.",
      hintTitle: "Syntaxoverzicht",
      hintBody: `$              rootdocument
.users         eigenschapsnaam
[*]            alle elementen in een array
[0]            eerste element in een array`,
      idleTitle: "Queryresultaten verschijnen hier",
      idleBody: "Vul een padexpressie in en voer deze uit.",
      errorTitle: "Kan query niet uitvoeren",
      errorBody: "Herstel de fout in de JSON of het pad en probeer het opnieuw.",
      noResults: "Geen enkel item komt overeen met dit pad.",
      emptyPath: "Vul een JSONPath-expressie in.",
    },
    transform: {
      tsIdleTitle: "TypeScript-types verschijnen hier",
      tsIdleBody: "Plak JSON om TypeScript-typedefinities te genereren.",
      zodIdleTitle: "Zod-schema verschijnt hier",
      zodIdleBody: "Plak JSON om een Zod-schema te genereren.",
      schemaExplain: "JSON ↔ Schema",
      schemaUse:
        "Genereer een JSON Schema vanuit de bron-JSON of maak voorbeeld-JSON vanuit een schema.",
      schemaIdleTitle: "JSON Schema verschijnt hier",
      schemaIdleBody: "Plak JSON om een JSON Schema te genereren.",
      yamlIdleTitle: "YAML-output verschijnt hier",
      yamlIdleBody: "De bron-JSON wordt omgezet naar YAML.",
      yamlToJsonIdle: "Plak hierboven YAML om dit om te zetten naar de bron-JSON.",
      yamlApplied: "Omgezet en bijgewerkt in de bron-JSON.",
      csvIdleTitle: "CSV-output verschijnt hier",
      csvIdleBodyJson:
        "Zet een los object, een array van objecten of een object met een lijst uit de bron-JSON om naar CSV.",
      csvIdleBodyCsv: "Plak CSV met een kopregel om dit om te zetten naar JSON.",
      csvToJsonIdle: "Plak hierboven CSV om dit om te zetten naar de bron-JSON.",
      csvApplied: "Omgezet en bijgewerkt in de bron-JSON.",
      csvUnsupported: "Deze JSON-structuur kan niet worden omgezet naar CSV.",
    },
    utilities: {
      sortAsc: "A → Z",
      sortDesc: "Z → A",
      sortIdleTitle: "Klaar om te sorteren",
      sortIdleBody: "Kies A → Z of Z → A om gesorteerde sleutels in de output te zien.",
      sortApplied: "Sleutels gesorteerd. Bekijk de output hieronder.",
      removeOptions: "Welke lege waarden verwijderen",
      removeNull: "null",
      removeEmptyString: '""',
      removeEmptyArray: "[]",
      removeEmptyObject: "{}",
      removeNullLabel: "null",
      removeEmptyStringLabel: "lege strings",
      removeEmptyArrayLabel: "lege arrays",
      removeEmptyObjectLabel: "lege objecten",
      removePreserveHint: "false en 0 blijven behouden en worden niet verwijderd.",
      removeIdleTitle: "Opgeschoonde JSON verschijnt hier",
      removeIdleBody: "Kies wat je wilt verwijderen en voer de actie uit.",
      nestedLabel: "Genest",
      flatLabel: "Plat",
      flattenHint: "Zet geneste objecten om naar puntgescheiden sleutels (bijv. address.city, skills.0).",
      flattenUse:
        "Handig voor exports naar spreadsheets, .env-bestanden, zoekindexen of API's die alleen platte sleutel-waardeparen verwachten.",
      flattenIdleTitle: "Klaar om te flattenen",
      flattenIdleBody: "Geneste sleutels verschijnen in de output als puntgescheiden paden.",
      flattenApplied: "Geflattened. Bekijk de output hieronder.",
      unflattenHint: "Zet puntgescheiden paden weer om naar geneste objecten en numerieke segmenten naar arrays.",
      unflattenUse:
        "Handig om platte sleutels zoals user.name of skills.0 terug te zetten naar geneste JSON.",
      unflattenIdleTitle: "Geneste JSON verschijnt hier",
      unflattenIdleBody: "Plak een object met puntpaden om de geneste structuur te herstellen.",
      escapeIdleTitle: "Ge-escapete string verschijnt hier",
      escapeIdleBody: "JSON wordt ge-escapet zodat je het veilig in een stringliteral kunt plaatsen.",
      escapeHint:
        'Zet JSON om naar één ge-escapete string waarbij aanhalingstekens en nieuwe regels " en  worden, zodat het veilig binnen een andere string past.',
      escapeUse:
        "Fijn wanneer je JSON in code, omgevingsvariabelen of logs stopt zonder buitenste aanhalingstekens te breken.",
      unescapeIdleTitle: "JSON zonder escapes verschijnt hier",
      unescapeIdleBody: "Plak een ge-escapete JSON-string om de oorspronkelijke JSON terug te krijgen.",
      repairHint:
        "Repareert kapotte, afgebroken, becommentarieerde of half-afgemaakte JSON in meerdere stappen.",
      repairUse:
        "Herstelt ontbrekende aanhalingstekens, komma's en haken, commentaar en codeblokken, Python/JS-literals, JSONP, MongoDB-types, NDJSON, afbrekingen en tikresten.",
      repairAlreadyValid: "De JSON was al geldig; alleen de opmaak is bijgewerkt.",
      repairFormatted: "Opgemaakt.",
      repairReady: "Automatisch herstel beschikbaar.",
      repairApplied: "Gerepareerd.",
      repairAppliedToSource: "Toegepast op de bron-JSON.",
      repairFailedTitle: "Kon niet volledig worden gerepareerd",
      repairFailedAt: "{message} ({line}:{column})",
      repairPreview: "Voorbeeld van herstel",
      repairFixes: {
        "trailing-commas": "afsluitkomma's",
        "single-quotes": "enkele aanhalingstekens",
        "smart-quotes": "krul-aanhalingstekens",
        "unquoted-keys": "sleutels zonder aanhalingstekens",
        "missing-commas": "ontbrekende komma's",
        "missing-brackets": "ontbrekende haakjes",
        comments: "commentaar",
        "code-fence": "codeblokken",
        "python-literals": "Python-literals",
        "js-undefined": "undefined → null",
        jsonp: "JSONP-wrapper",
        "escaped-string": "ge-escapete JSON-string",
        mongodb: "MongoDB-types",
        ndjson: "NDJSON → array",
        ellipsis: "beletselteken (…)",
        "string-concat": "stringconcatenatie",
        whitespace: "spaties en regeleinden",
        truncated: "afgebroken / onvolledig",
        "mid-edit-junk": "tikresten tijdens bewerken",
      },
      repairIdleTitle: "Gerepareerde JSON verschijnt hier",
      repairIdleBody:
        "Plak onvolledige tekst of JSON-achtige data in de bron-JSON om het herstelde resultaat te zien.",
      fromSchemaHint:
        "Maakt voorbeeld-JSON vanuit een JSON Schema op basis van type, properties, required, items, enum en default.",
      fromSchemaIdleTitle: "Voorbeeld-JSON verschijnt hier",
      fromSchemaIdleBody: "Plak hieronder een JSON Schema om een voorbeeld te genereren.",
      extractHint:
        'Haalt bladpaden en waarden op (bijv. { path: "address.city", value: "Amsterdam" }).',
      extractIdleTitle: "Geëxtraheerde sleutels en waarden verschijnen hier",
      extractIdleBody: "Kies hierboven velden om pad- en waardeparen te extraheren.",
      extractKeysHint: "Toont geneste sleutels als puntgescheiden paden (array-indexen als .0).",
      extractKeysIdleTitle: "Geëxtraheerde sleutels verschijnen hier",
      extractKeysIdleBody: "Plak JSON om alle sleutels te extraheren.",
      extractValuesHint: "Verzamelt alle bladwaarden (primitieven en null).",
      extractValuesIdleTitle: "Geëxtraheerde waarden verschijnen hier",
      extractValuesIdleBody: "Plak JSON om alle waarden te extraheren.",
      fieldsLabel: "Velden in bron-JSON",
      fieldsClickHint:
        "Klik op een pad om te selecteren. Geneste eigenschappen zijn puntgescheiden.",
      fieldsSelectAll: "Alles selecteren",
      fieldsClear: "Selectie wissen",
      fieldsEmpty: "Geen selecteerbare velden in deze JSON.",
      pickHint: "Behoudt alleen de gekozen velden. Klik hieronder in de lijst om te selecteren.",
      pickIdleTitle: "Het resultaat verschijnt hier",
      pickIdleBody: "",
      omitHint: "Laat de gekozen velden weg. Klik hieronder in de lijst om te selecteren.",
      omitIdleTitle: "Het resultaat verschijnt hier",
      omitIdleBody: "",
      compareHint: "Vergelijkt twee JSON-documenten naast elkaar op structuur, los van waardeverschillen.",
      compareUse:
        "Sleutels die ontbreken in A staan in rood, toegevoegde sleutels in B in groen en afwijkende types in amber.",
      compareBack: "Terug naar Workbench",
      compareIdleTitle: "Vul twee JSON-documenten in",
      compareIdleBody: "Vul beide kanten in om de structuren te vergelijken.",
      compareIdentical: "Structuren zijn gelijk: dezelfde sleutels en datatypes.",
      compareMissing: "Ontbrekende sleutels (alleen in A)",
      compareExtra: "Toegevoegde sleutels (alleen in B)",
      compareType: "Afwijkend type",
    },
    empty: {
      formatTitle: "Geformatteerde JSON verschijnt hier",
      formatBody: "Plak links een JSON en klik op Formatteren.",
    },
    soon: {
      badge: "Binnenkort",
      title: "{tool} komt binnenkort beschikbaar",
      body: "Deze tool maakt deel uit van het volledige Workbench-overzicht en wordt in een volgende update toegevoegd.",
    },
    tools: {
      format: "Formatteren",
      minify: "Minimaliseren",
      validate: "Valideren",
      tree: "Boom",
      search: "Zoeken",
      diff: "Diff",
      jsonpath: "JSONPath",
      convert: "Converteren",
      toTypescript: "TypeScript",
      toZod: "Zod",
      toSchema: "JSON Schema",
      yaml: "YAML",
      csv: "CSV",
      sortKeys: "Sleutels sorteren",
      removeEmpty: "Lege waarden verwijderen",
      flatten: "Flatten",
      unflatten: "Unflatten",
      escape: "Escapen",
      unescape: "Unescapen",
      repair: "Repareren",
      extract: "Sleutels & waarden",
      extractKeys: "Sleutels extraheren",
      extractValues: "Waarden extraheren",
      pick: "Velden kiezen",
      omit: "Velden uitsluiten",
      compareStructure: "Structuur vergelijken",
    },
  },
  generator: {
    title: "Datagenerator",
    subtitle: "Maak snel realistische testdata voor frontendontwikkeling.",
    chooseType: "Datatype",
    searchPlaceholder: "Zoek datatype…",
    noTopics: "Geen overeenkomend datatype gevonden.",
    fieldsLegend: "Velden",
    moreFields: "Meer velden tonen",
    lessFields: "Optionele velden verbergen",
    optionalFields: "Optionele velden",
    records: "Records",
    customQty: "Aangepast",
    country: "Land",
    countrySearch: "Zoek land…",
    selectPlaceholder: "Kies een datatype…",
    outputMode: "Outputformaat",
    modePayload: "POST-body",
    modeApi: "API-record",
    modePayloadHint: "Zonder id en timestamps — handig voor de POST-body bij het aanmaken van een item.",
    modeApiHint: "Bevat id, createdAt en updatedAt zoals een opgeslagen API-record.",
    jsonType: "JSON",
    viewJson: "JSON",
    viewType: "TS",
    generate: "Genereer {n}",
    generating: "{n} genereren…",
    generateAgain: "Opnieuw genereren",
    refresh: "Vernieuwen",
    generated: "{n} gegenereerd",
    download: "Downloaden",
    createApi: "API maken",
    createSuccess: "Tijdelijke API aangemaakt.",
    createBlockedArray:
      "Tijdelijke API's ondersteunen maximaal 500 records. Verlaag het aantal en probeer het opnieuw.",
    createBlockedSize:
      "De JSON-grootte overschrijdt de limiet voor tijdelijke API's (64 KB). Gebruik minder records of velden.",
    openTemporary: "Beheren in Tijdelijke API's",
    emptyTitle: "Kies een datatype",
    emptyBody: "Selecteer hierboven een datatype om realistische testrecords te genereren.",
    duration1h: "1 uur",
    duration6h: "6 uur",
    duration12h: "12 uur",
    duration24h: "24 uur",
    countries: {
      all: "Alle landen",
      IR: "Iran",
      DE: "Duitsland",
      US: "Verenigde Staten",
      GB: "Verenigd Koninkrijk",
      FR: "Frankrijk",
      NL: "Nederland",
      JP: "Japan",
      CA: "Canada",
    },
    categories: {
      people: "Personen",
      ecommerce: "E-commerce",
      content: "Content",
      media: "Media",
      business: "Business",
      location: "Locatie",
    },
    fields: {
      id: "id",
      name: "naam",
      username: "gebruikersnaam",
      email: "e-mail",
      avatar: "avatar",
      phone: "telefoonnummer",
      company: "bedrijf",
      location: "locatie",
      age: "leeftijd",
      role: "rol",
      jobTitle: "functie",
      department: "afdeling",
      bio: "bio",
      website: "website",
      createdAt: "aangemaakt op",
      updatedAt: "bijgewerkt op",
      hiredAt: "in dienst sinds",
      ordersCount: "aantal bestellingen",
      totalSpent: "totaal besteed",
      postsCount: "aantal posts",
      price: "prijs",
      image: "afbeelding",
      category: "categorie",
      description: "beschrijving",
      brand: "merk",
      stock: "voorraad",
      rating: "beoordeling",
      sku: "SKU",
      colors: "kleuren",
      orderId: "bestel-ID",
      customer: "klant",
      items: "artikelen",
      total: "totaal",
      status: "status",
      orderDate: "besteldatum",
      paymentStatus: "betaalstatus",
      shippingAddress: "afleveradres",
      user: "gebruiker",
      comment: "reactie",
      post: "post",
      date: "datum",
      product: "product",
      title: "titel",
      verified: "geverifieerd",
      helpful: "nuttig",
      slug: "slug",
      parentCategory: "bovenliggende categorie",
      productCount: "aantal producten",
      quantity: "aantal",
      discount: "korting",
      code: "code",
      type: "type",
      expiresAt: "vervalt op",
      minimumOrder: "minimale bestelwaarde",
      usageLimit: "gebruikslimiet",
      active: "actief",
      amount: "bedrag",
      currency: "valuta",
      paymentMethod: "betaalmethode",
      transactionId: "transactie-ID",
      order: "bestelling",
      carrier: "vervoerder",
      trackingNumber: "track-and-tracecode",
      estimatedDelivery: "verwachte levering",
      body: "tekst",
      author: "auteur",
      tags: "tags",
      publishedAt: "gepubliceerd op",
      likes: "likes",
      views: "weergaven",
      replies: "reacties",
      attachments: "bijlagen",
      actionUrl: "actie-URL",
      sender: "afzender",
      receiver: "ontvanger",
      message: "bericht",
      read: "gelezen",
      artist: "artiest",
      cover: "cover",
      year: "jaar",
      genre: "genre",
      tracks: "nummers",
      album: "album",
      duration: "duur",
      poster: "poster",
      director: "regisseur",
      language: "taal",
      plays: "keer afgespeeld",
      label: "label",
      pages: "pagina's",
      isbn: "ISBN",
      instructor: "docent",
      level: "niveau",
      lessons: "lessen",
      students: "studenten",
      employees: "medewerkers",
      logo: "logo",
      industry: "branche",
      salary: "salaris",
      experience: "ervaring",
      remote: "remote",
      founded: "opgericht in",
      postedAt: "geplaatst op",
      capacity: "capaciteit",
      capital: "hoofdstad",
      flag: "vlag",
      region: "regio",
      population: "inwoners",
      street: "straat en huisnummer",
      postalCode: "postcode",
      latitude: "breedtegraad",
      longitude: "lengtegraad",
      country: "land",
      city: "stad",
      notes: "notities",
      team: "team",
      joinedAt: "aangesloten op",
      skills: "skills",
      specialty: "specialisatie",
      hospital: "ziekenhuis",
      licenseNumber: "licentienummer",
      yearsExperience: "jaren ervaring",
      bloodType: "bloedgroep",
      diagnosis: "diagnose",
      doctor: "arts",
      admittedAt: "opgenomen op",
      vehicleType: "voertuigtype",
      plateNumber: "kenteken",
      tripsCount: "aantal ritten",
      roomNumber: "kamernummer",
      checkIn: "inchecken",
      checkOut: "uitchecken",
      nights: "nachten",
      followers: "volgers",
      following: "volgend",
      grade: "leerjaar",
      school: "school",
      gpa: "gemiddeld cijfer",
      major: "studierichting",
      enrollmentYear: "inschrijfjaar",
      subject: "vak",
      classesCount: "aantal klassen",
      invoiceNumber: "factuurnummer",
      issueDate: "factuurdatum",
      dueDate: "vervaldatum",
      tax: "btw",
      itemsCount: "aantal items",
      target: "doel",
      targetType: "doeltype",
      reaction: "reactie",
      color: "kleur",
      thumbnail: "thumbnail",
      channel: "kanaal",
      url: "URL",
      width: "breedte",
      height: "hoogte",
      alt: "alt-tekst",
      photographer: "fotograaf",
      host: "host",
      episodes: "afleveringen",
      subscribers: "abonnees",
      owner: "eigenaar",
      public: "openbaar",
      progress: "voortgang",
      teamSize: "teamgrootte",
      budget: "budget",
      startDate: "startdatum",
      membersCount: "aantal leden",
      focus: "focus",
      countriesCount: "aantal landen",
      areaKm2: "oppervlakte (km²)",
      timezone: "tijdzone",
      terminals: "terminals",
      altitude: "hoogte",
      accuracy: "nauwkeurigheid",
    },
    topics: {
      users: {
        name: "Gebruikers",
        description: "Gebruikersprofielen voor apps en dashboards",
        preview: {
          line1: "Daan de Vries",
          line2: "@daan_devries · daan@mail.test",
          line3: "Amsterdam",
        },
      },
      customers: {
        name: "Klanten",
        description: "Contactgegevens van kopers en accounts",
        preview: {
          line1: "Emma Bakker",
          line2: "emma@demo.dev",
          line3: "06-12345678",
        },
      },
      employees: {
        name: "Medewerkers",
        description: "Teamleden met functie en afdeling",
        preview: {
          line1: "Noah Jansen",
          line2: "Frontend Engineer",
          line3: "Engineering · Acme",
        },
      },
      authors: {
        name: "Auteurs",
        description: "Schrijvers en creators voor artikelen",
        preview: {
          line1: "Lotte van Dijk",
          line2: "Schrijft over productdesign en UX.",
        },
      },
      contacts: {
        name: "Contactpersonen",
        description: "Contactpersonen en bedrijven voor CRM",
        preview: {
          line1: "Sem Vermeulen",
          line2: "sem@acme.test · Acme",
        },
      },
      "team-members": {
        name: "Teamleden",
        description: "Leden van product- en ontwikkelteams",
        preview: {
          line1: "Fenna Visser",
          line2: "Tech Lead · Platform",
        },
      },
      doctors: {
        name: "Artsen",
        description: "Medisch personeel met specialisatie en ziekenhuis",
        preview: {
          line1: "Dr. Bram Smit",
          line2: "Cardiologie · Amstelziekenhuis",
        },
      },
      patients: {
        name: "Patiënten",
        description: "Patiëntgegevens met diagnose en bloedgroep",
        preview: {
          line1: "Tess de Boer",
          line2: "A+ · Hypertensie",
        },
      },
      drivers: {
        name: "Chauffeurs",
        description: "Bestuurders voor vervoer met voertuig en score",
        preview: {
          line1: "Milan Kuijpers",
          line2: "Sedan · ★ 4.8",
        },
      },
      guests: {
        name: "Gasten",
        description: "Hotelgasten met kamernummer en verblijfsstatus",
        preview: {
          line1: "Saar Hendriks",
          line2: "Kamer 412 · Ingecheckt",
        },
      },
      profiles: {
        name: "Profielen",
        description: "Social profielen met volgers en bio",
        preview: {
          line1: "Lucas Peeters",
          line2: "@lucas_peeters · 12K volgers",
        },
      },
      "girl-students": {
        name: "Scholieressen",
        description: "Leerlingprofielen van meisjes met leerjaar en school",
        preview: {
          line1: "Sophie Willems",
          line2: "4 vwo · Kennemer Lyceum",
        },
      },
      "boy-students": {
        name: "Scholieren",
        description: "Leerlingprofielen van jongens met leerjaar en school",
        preview: {
          line1: "Luuk van Leeuwen",
          line2: "3 mavo · Lorentz College",
        },
      },
      teachers: {
        name: "Docenten",
        description: "Docenten met vak en school",
        preview: {
          line1: "Noor Dekker",
          line2: "Wiskunde · Spinoza Lyceum",
        },
      },
      products: {
        name: "Producten",
        description: "Webshopartikelen met prijs en info",
        preview: {
          line1: "Draadloze noise-cancelling koptelefoon",
          line2: "€ 149,00 · Gadgets",
          line3: "★★★★☆",
        },
      },
      orders: {
        name: "Bestellingen",
        description: "Besteloverzichten met items en status",
        preview: {
          line1: "Bestelling #10482",
          line2: "3 artikelen · € 249,00",
          line3: "Bezorgd",
        },
      },
      reviews: {
        name: "Reviews",
        description: "Sterrenbeoordelingen en klantreviews",
        preview: {
          line1: "★★★★★ Erg tevreden mee",
          line2: "Degelijke kwaliteit en makkelijk in gebruik.",
        },
      },
      categories: {
        name: "Categorieën",
        description: "Cataloguscategorieën voor webshops",
        preview: { line1: "Gadgets", line2: "gadgets" },
      },
      "cart-items": {
        name: "Winkelwagenitems",
        description: "Artikelen in een winkelwagen",
        preview: { line1: "Smartwatch", line2: "2 × € 199,00 · € 398,00" },
      },
      coupons: {
        name: "Kortingscodes",
        description: "Actiecodes en voorwaarden",
        preview: { line1: "WELCOME10", line2: "10% korting · vervalt 2026-12-01" },
      },
      payments: {
        name: "Betalingen",
        description: "Betalingen met bedrag en betaalmethode",
        preview: { line1: "€ 68,00 EUR", line2: "Creditcard · Betaald" },
      },
      shipments: {
        name: "Zendingen",
        description: "Leverstatus en pakketvervoerder",
        preview: { line1: "ORD-10482 · PostNL", line2: "Onderweg" },
      },
      invoices: {
        name: "Facturen",
        description: "Facturen met bedrag en vervaldatum",
        preview: { line1: "FAC-10482", line2: "€ 1.280,00 · Betaald" },
      },
      brands: {
        name: "Merken",
        description: "Merken met logo en aantal producten",
        preview: { line1: "Acme", line2: "acme · 128 producten" },
      },
      posts: {
        name: "Posts",
        description: "Blogartikelen en feedberichten",
        preview: { line1: "Rustige UI's ontwerpen", line2: "door Lotte van Dijk" },
      },
      comments: {
        name: "Reacties",
        description: "Reacties op posts en producten",
        preview: {
          line1: "Helder en concreet uitgelegd!",
          line2: "lotte · 12 likes",
        },
      },
      messages: {
        name: "Berichten",
        description: "Chat- en privéberichten",
        preview: {
          line1: "Kun je nog even naar de nieuwste versie kijken?",
          line2: "Noah Jansen → Emma Bakker",
        },
      },
      notifications: {
        name: "Meldingen",
        description: "In-app meldingen en updates",
        preview: { line1: "Nieuwe reactie ontvangen", line2: "Community · 2 uur geleden" },
      },
      tags: {
        name: "Tags",
        description: "Labels met slug en aantal posts",
        preview: { line1: "typescript", line2: "142 posts" },
      },
      "content-categories": {
        name: "Contentcategorieën",
        description: "Categorieën voor artikelen en handleidingen",
        preview: { line1: "Tutorials", line2: "tutorials · 86 posts" },
      },
      likes: {
        name: "Likes",
        description: "Likes op posts en reacties",
        preview: { line1: "Lucas Peeters vindt dit leuk", line2: "Post · Like" },
      },
      albums: {
        name: "Albums",
        description: "Muziekalbums met cover en nummers",
        preview: {
          line1: "Random Access Memories",
          line2: "Daft Punk",
          line3: "2013 · 13 nummers",
        },
      },
      songs: {
        name: "Nummers",
        description: "Audiotracks met lengte en artiest",
        preview: { line1: "Midnight Cruise", line2: "3:42 · Electronic" },
      },
      movies: {
        name: "Films",
        description: "Filmtitels met poster en score",
        preview: { line1: "Late Night Express", line2: "2021 · ★ 8.2" },
      },
      books: {
        name: "Boeken",
        description: "Boeken met auteur en omslagafbeelding",
        preview: { line1: "Notities over interface-ontwerp", line2: "Lotte van Dijk · 2019" },
      },
      videos: {
        name: "Video's",
        description: "Video's met duur en weergaven",
        preview: {
          line1: "In 10 minuten een dashboard bouwen",
          line2: "12:40 · 84K weergaven",
        },
      },
      images: {
        name: "Afbeeldingen",
        description: "Beeldassets met resolutie en tags",
        preview: { line1: "Zonsondergang aan de gracht", line2: "1280×720" },
      },
      podcasts: {
        name: "Podcasts",
        description: "Shows met host en aantal afleveringen",
        preview: { line1: "Code en koffie", line2: "48 afl. · Tech" },
      },
      playlists: {
        name: "Playlists",
        description: "Afspeellijsten met samensteller en genre",
        preview: { line1: "Geconcentreerd werken", line2: "32 nummers · Electronic" },
      },
      companies: {
        name: "Bedrijven",
        description: "Bedrijfsprofielen en branches",
        preview: { line1: "Acme B.V.", line2: "Software · Amsterdam" },
      },
      jobs: {
        name: "Vacatures",
        description: "Functies met standplaats en dienstverband",
        preview: {
          line1: "Frontend Engineer",
          line2: "Google · Amsterdam · Fulltime",
        },
      },
      courses: {
        name: "Cursussen",
        description: "Trainingen met programma en docent",
        preview: { line1: "Praktisch React", line2: "Gemiddeld · 12 uur" },
      },
      events: {
        name: "Events",
        description: "Meetups, conferenties en bijeenkomsten",
        preview: { line1: "Frontend Meetup", line2: "Amsterdam · Workshop" },
      },
      projects: {
        name: "Projecten",
        description: "Projecten met voortgang en budget",
        preview: { line1: "Vernieuwing analytics-dashboard", line2: "Bezig · 72%" },
      },
      teams: {
        name: "Teams",
        description: "Interne teams met lead en omvang",
        preview: { line1: "Productteam", line2: "8 leden · Engineering" },
      },
      continents: {
        name: "Continenten",
        description: "Continenten met code en kerncijfers",
        preview: { line1: "Europa", line2: "EU · 44 landen" },
      },
      countries: {
        name: "Landen",
        description: "Landen met naam, code en vlag",
        preview: { line1: "Nederland", line2: "NL · Amsterdam" },
      },
      cities: {
        name: "Steden",
        description: "Steden gekoppeld aan regio's en landen",
        preview: { line1: "Utrecht", line2: "Nederland · Utrecht" },
      },
      addresses: {
        name: "Adressen",
        description: "Bezorg- en kantooradressen",
        preview: {
          line1: "Keizersgracht 420",
          line2: "1016 EY Amsterdam",
        },
      },
      regions: {
        name: "Regio's",
        description: "Gebieden en provincies",
        preview: { line1: "Noord-Holland", line2: "Nederland · Haarlem" },
      },
      neighborhoods: {
        name: "Wijken",
        description: "Buurten en wijken binnen een stad",
        preview: { line1: "De Pijp", line2: "Amsterdam · 1072" },
      },
      airports: {
        name: "Luchthavens",
        description: "Luchthavens met code en stad",
        preview: { line1: "Amsterdam Airport Schiphol", line2: "AMS · Nederland" },
      },
      coordinates: {
        name: "Coördinaten",
        description: "Breedtegraad, lengtegraad en locatie-info",
        preview: {
          line1: "52.367573, 4.904139",
          line2: "Amsterdam · Nederland",
        },
      },
    },
    errors: {
      pickTopic: "Kies eerst een datatype.",
      INVALID_TOPIC: "Onbekend datatype.",
      INVALID_FIELDS: "Kies ten minste één veld.",
      INVALID_QUANTITY: "Het aantal moet tussen 1 en 1000 liggen.",
      INVALID_COUNTRY: "Ongeldig land.",
      GENERATE_FAILED: "Kon geen data genereren. Probeer het zo opnieuw.",
      DOWNLOAD_FAILED: "Downloaden mislukt. Probeer het zo opnieuw.",
      CREATE_FAILED: "Kon geen tijdelijke API aanmaken.",
      LIMIT_REACHED: "Je hebt het maximum van 5 tijdelijke API's bereikt. Verwijder er eerst een.",
      RATE_LIMITED: "Te veel verzoeken achter elkaar. Probeer het over een moment opnieuw.",
    },
  },
  preview: {
    docs: "Documentatie",
    playground: "Playground",
    blurb: "Een compact overzicht om te zien hoe deze API in de praktijk werkt.",
    blurbFaHint: "",
    backToResource: "Terug naar {name}",
    search: "Zoeken",
    create: "Nieuw item",
    edit: "Bewerken",
    delete: "Verwijderen",
    save: "Opslaan",
    saving: "Opslaan…",
    deleting: "Verwijderen…",
    cancel: "Annuleren",
    fillSample: "Voorbeeld invullen",
    noRecords: "Geen records gevonden",
    loading: "Laden…",
    confirmDelete: "Dit record verwijderen?",
    confirmDeleteBody: "Dit kan niet ongedaan worden gemaakt.",
    networkError: "Netwerkfout",
    authDemoPassword: "Alle standaardgebruikers gebruiken hetzelfde demowachtwoord:",
    username: "Gebruikersnaam",
    password: "Wachtwoord",
    login: "Inloggen",
    loginSuccess: "Ingelogd.",
    logout: "Uitloggen",
    getMe: "GET /me",
    token: "Token",
    user: "Gebruiker",
    loginFirst: "Log eerst in om een token op te halen",
    createdAt: "Aangemaakt op",
    fieldLabels: {
      name: "Naam",
      username: "Gebruikersnaam",
      email: "E-mail",
      avatarUrl: "Avatar-URL",
      role: "Rol",
      city: "Stad",
      country: "Land",
      company: "Bedrijf",
      title: "Titel",
      body: "Tekst",
      published: "Gepubliceerd",
      userId: "Gebruikers-ID",
      postId: "Post-ID",
      albumId: "Album-ID",
      url: "URL",
      thumbnailUrl: "Thumbnail-URL",
      completed: "Afgerond",
      description: "Beschrijving",
      price: "Prijs",
      stock: "Voorraad",
      category: "Categorie",
      imageUrl: "Afbeeldings-URL",
      message: "Bericht",
      type: "Type",
      read: "Gelezen",
      code: "Code",
      capital: "Hoofdstad",
      region: "Regio",
      population: "Inwoners",
      currency: "Valuta",
      flagUrl: "Vlag-URL",
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
      teaser: "In ontwikkeling — tools voor formatteren, vergelijken en converteren",
      hint: "/json — kies een tool om van weergave te wisselen",
      badge: "In ontwikkeling",
      summary:
        "JSON Workbench (in ontwikkeling) is een browsertool voor het formatteren van JSON, vergelijken van structuren, zoeken en converteren. Ondersteunt TypeScript, Zod, YAML, CSV en handige utilities.",
      details: [
        "Open JSON Workbench op /json en kies een tool om direct te wisselen (ondersteunt ook ?tool=).",
        "Basistools: Formatteren, Boom, Zoeken, JSONPath en Structuur vergelijken.",
        "Conversies: TypeScript, Zod, JSON Schema, YAML en CSV.",
        "Utilities: Sleutels sorteren, Lege waarden verwijderen, Flatten, Escapen, Repareren, Velden kiezen/uitsluiten en meer.",
        "Nog in actieve ontwikkeling; we blijven nieuwe tools en verbeteringen toevoegen.",
      ],
    },
    "2026-09-19-image-generator": {
      title: "Afbeeldingsgenerator",
      teaser: "URL's voor tijdelijke afbeeldingen op aanvraag",
      hint: "/image-generator — kies SVG of Foto en kopieer de URL",
      summary:
        "Genereer tijdelijke afbeeldingen via URL-parameters. Ondersteunt MockData SVG's en Picsum-foto's, met kant-en-klare formaten voor avatars, posts, banners en meer.",
      details: [
        "Kies SVG of Foto op /image-generator, stel breedte en hoogte in en kopieer de URL.",
        "Publieke URL's geven standaard een willekeurige afbeelding: gebruik /image/{w}/{h} voor SVG of ?type=real voor foto's.",
        "Geef een willekeurige ?seed= op om steeds dezelfde SVG-kleuren of foto te behouden.",
        "Plak de URL direct in een img-tag, CSS of afbeeldingsveld.",
      ],
    },
    "2026-09-17-generator": {
      title: "Datagenerator",
      teaser: "Realistische JSON in enkele seconden",
      hint: "/generator — kies een datatype om te genereren, kopiëren of een API te maken",
      summary:
        "Maak snel realistische JSON voor je frontend. Kies een datatype, velden en aantal en kopieer, download of publiceer het als tijdelijke API.",
      details: [
        "Genereer data voor Personen, E-commerce, Content, Media, Business en Locatie op /generator.",
        "Ondersteunt POST-body- en API-recordvormen, met lokale Perzische data voor FA.",
        "Genereer tot 1.000 records per keer in de browser; 'API maken' volgt de limieten van tijdelijke API's (500 records / 64 KB).",
        "Keuzes en gegenereerde data blijven bewaard tijdens het navigeren (en resetten bij een paginaverversing).",
      ],
    },
    "2026-09-16-temporary": {
      title: "Tijdelijke API's",
      teaser: "Plak JSON en krijg een tijdelijke REST-URL",
      hint: "/temporary — plak JSON om een publieke REST-URL te maken",
      summary:
        "Maak tijdelijke publieke REST-endpoints aan door JSON te plakken. Geen account nodig; maximaal 5 actieve API's per browser.",
      details: [
        "Maak er een op /temporary met een geldigheidsduur van 1 uur, 6 uur, 12 uur of 24 uur.",
        "Gebruik GET, POST, PATCH en DELETE op je /api/t/… URL, net als op andere endpoints.",
        "Maximaal 5 actieve API's per browser en tot 20 aanvragen per IP per uur.",
        "Beheer de URL als een wachtwoord: tot de verloopdatum kan iedereen met de link de data lezen en aanpassen.",
      ],
    },
    "2026-09-15-preview": {
      title: "Resourcevoorbeelden",
      teaser: "Lichtgewicht UI's gekoppeld aan de API's",
      hint: "/preview/users — test CRUD-acties in de browser",
      summary:
        "Eenvoudige voorbeeldschermen gekoppeld aan echte API's voor resources als Users, Posts en Auth.",
      details: [
        "Open het live voorbeeld vanuit de documentatiepagina van een resource.",
        "Probeer lezen, zoeken, pagineren, aanmaken, bewerken en verwijderen op de gedeelde demodata.",
        "Het Auth-voorbeeld bevat een inlogformulier (vast wachtwoord: password) en GET /me-verzoeken met token.",
        "Laad desgewenst Perzische voorbeelddata via de taalkiezer bovenin.",
      ],
    },
    "2026-09-14-lang-fa": {
      title: "Perzische data (?lang=fa)",
      teaser: "Gelokaliseerde voorbeelddata in het Perzisch",
      hint: "/api/users?lang=fa — voeg lang=fa toe voor Perzische data",
      summary:
        "Voeg ?lang=fa toe aan een endpoint voor lokale Perzische namen, gebruikersnamen, telefoonnummers en teksten.",
      details: [
        "Engels blijft de standaardtaal; schakelen gaat uitsluitend via de queryparameter lang=fa (zonder cookies of Accept-Language).",
        "FA-responses bevatten Content-Language: fa en informatie over het Vazirmatn-lettertype.",
        "Ondersteunt lijsten, losse items en inloggen met Perzische gebruikersnamen.",
        "Als je bovenin فارسی kiest, voegt de Playground ook automatisch lang=fa toe.",
      ],
    },
    "2026-09-12-playground": {
      title: "Playground",
      teaser: "Roep API's direct aan vanuit je browser",
      hint: "/playground — verstuur verzoeken en bekijk JSON",
      summary:
        "Stuur API-verzoeken direct vanuit de browser, test geslaagde en mislukte logins en bekijk opgemaakte JSON-responses.",
      details: [
        "Kies resource en actie, pas queryparameters of de JSON-body aan en verstuur.",
        "Vergelijk eenvoudig 200- en 401-responses bij Auth-login met de knoppen Geldige inloggegevens / Ongeldige inloggegevens.",
        "Bekijk HTTP-statuscodes, opgemaakte JSON en paginatiegegevens voor collecties.",
        "Verzoeken per resource en de laatste response blijven bewaard tijdens het navigeren (reset bij verversen).",
      ],
    },
    "2026-09-10-auth": {
      title: "Mock Auth",
      teaser: "Inloggen en authenticatie met Bearer-tokens",
      hint: "/api/auth/login — het wachtwoord is altijd password",
      summary:
        "Stuur een standaardgebruiker en wachtwoord als POST naar /api/auth/login om een Bearer-token te krijgen voor /me.",
      details: [
        "Alle standaardgebruikers delen het demowachtwoord password.",
        "Bij succes krijg je een mock Bearer-token en het user-object (id, name, username, email, role).",
        "Een onjuist wachtwoord of onbekende gebruiker geeft 401 met een duidelijke foutstructuur.",
        "Stuur het token mee in Authorization: Bearer <token> naar GET /api/auth/me om de huidige gebruiker op te halen.",
      ],
    },
    "2026-09-08-resources": {
      title: "Live REST-resources",
      teaser: "Volledige CRUD op Users, Posts en meer",
      hint: "/docs#resources — bekijk de beschikbare endpoints",
      summary:
        "Beschikbare resources zijn Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications en Countries met volledige CRUD en paginatie.",
      details: [
        "Gepagineerde lijsten gebruiken { data, pagination } met page, limit, total en totalPages.",
        "Ondersteunt queryparameters voor zoeken, sorteren, filteren, gesimuleerde vertraging en geforceerde foutcodes.",
        "De gedeelde productiedatabase wordt dagelijks gereset — gebruik deze voor demo's en tests, niet voor blijvende opslag.",
        "Download de machinaal leesbare specificatie op /openapi.json voor Postman, Swagger of AI-tools.",
      ],
    },
  },
  catalog: {
    auth: {
      title: "Auth",
      summary:
        "Mock login-endpoint met gebruikersnaam en wachtwoord. Geeft een Bearer-token bij succes of 401 bij ongeautoriseerde toegang.",
    },
    users: {
      title: "Users",
      summary: "Mock CRUD-API voor gebruikers met zoeken, filteren op rol en paginatie.",
    },
    posts: {
      title: "Posts",
      summary: "Blogposts gekoppeld aan gebruikers, met ondersteuning voor tags en publicatiestatus.",
    },
    comments: {
      title: "Comments",
      summary: "Reacties op posts met naam, e-mail en tekst.",
    },
    albums: {
      title: "Albums",
      summary: "Albums gekoppeld aan gebruikers; foto's verwijzen via albumId naar een album.",
    },
    photos: {
      title: "Photos",
      summary: "Afbeeldingen binnen een album met velden voor url en thumbnailUrl.",
    },
    todos: {
      title: "Todos",
      summary: "Eenvoudige taken gekoppeld aan gebruikers met een afrondingsstatus.",
    },
    products: {
      title: "Products",
      summary: "Productcatalogus met prijs, voorraad, categorie en imageUrl.",
    },
    notifications: {
      title: "Notifications",
      summary: "Gebruikersmeldingen met type en leesstatus.",
    },
    countries: {
      title: "Countries",
      summary: "Landendata met ISO-codes, regio, inwonertal en vlag.",
    },
  },
};

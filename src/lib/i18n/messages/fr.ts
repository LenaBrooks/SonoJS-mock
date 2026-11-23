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

export const fr: Messages = {
  common: {
    home: "Accueil",
    docs: "Documentation",
    playground: "Playground",
    contact: "Contact",
    preview: "Aperçu",
    search: "Rechercher",
    loading: "Chargement…",
    save: "Enregistrer",
    saving: "Enregistrement…",
    cancel: "Annuler",
    create: "Créer",
    edit: "Modifier",
    delete: "Supprimer",
    searchPlaceholder: "Rechercher des API…",
    noResults: "Aucun résultat",
    new: "Nouveau",
    inDevelopment: "En développement",
    actions: "Actions",
    copy: "Copier",
    copied: "Copié",
    live: "En ligne",
    open: "Ouvrir",
    tryIt: "Tester",
    learnMore: "En savoir plus",
    back: "Retour",
    close: "Fermer",
    yes: "Oui",
    no: "Non",
    name: "Nom",
    email: "E-mail",
    message: "Message",
    send: "Envoyer",
    sending: "Envoi…",
    networkError: "Erreur réseau",
    temporary: "API éphémère",
    temporaryBadge: "Instantanée",
    generator: "Générateur",
    imageGenerator: "Images",
    jsonWorkbench: "Atelier JSON",
  },
  header: {
    primaryNav: "Navigation principale",
    whatsNew: "Nouveautés",
    whatsNewTitle: "Nouveautés",
    whatsNewSubtitle: "Dernières mises à jour et fonctionnalités",
    latest: "À la une",
    contact: "À propos",
    menu: "Menu",
    openMenu: "Ouvrir le menu",
    appearance: "Apparence",
    lightMode: "Passer au thème clair",
    darkMode: "Passer au thème sombre",
    light: "Clair",
    dark: "Sombre",
    apiLangGroup: "Langue",
    english: "English",
    persian: "فارسی",
    github: "GitHub",
    githubStars: "GitHub — mettre une étoile au dépôt",
  },
  home: {
    tagline:
      "Des API REST fictives et gratuites avec du vrai JSON. Prototypez vos interfaces, testez l'authentification et appelez de vrais endpoints — sans monter de backend.",
    taglineNote: "",
    resourcesTitle: "Ressources",
    resourcesBlurb:
      "Dix API REST actives avec documentation et exemples. Données de démo partagées en production.",
    searchLabel: "Rechercher des API et des endpoints",
    searchPlaceholder: "Rechercher users, posts, auth…",
    temporaryCtaTitle: "API éphémère",
    temporaryCtaBody:
      "Collez votre JSON et créez une API temporaire — ou publiez directement depuis le Générateur de données fictives. Traitez le lien comme un mot de passe — jusqu'à 5 actives à la fois par navigateur.",
    temporaryCtaLink: "Créer une API éphémère",
  },
  notFound: {
    title: "Page introuvable",
    body: "Cette URL ne fait pas partie de MockData. Retournez à l'accueil ou consultez la documentation.",
    home: "Accueil",
    docs: "Documentation",
  },
  blog: {
    title: "Blog",
    description:
      "Guides et notes sur les données fictives, le JSON, les API et les workflows frontend — écrits pour celles et ceux qui construisent avec MockData.",
    all: "Tout",
    emptyTitle: "Aucun article",
    emptyBody: "Les articles publiés apparaîtront ici. Revenez bientôt.",
    emptyCategoryTitle: "Aucun article",
    emptyCategoryBody: "Essayez une autre catégorie ou affichez tous les articles.",
    readingTime: "{n} min de lecture",
    previousPage: "Précédente",
    nextPage: "Suivante",
    pageStatus: "Page {page} sur {total}",
    paginationNav: "Pagination",
    categoriesNav: "Catégories",
    backToBlog: "Blog",
    previousArticle: "Précédent",
    nextArticle: "Suivant",
    relatedArticles: "Articles similaires",
    categories: {
      news: "Actus",
      "mock-data": "Données fictives",
      json: "JSON",
      api: "API",
      frontend: "Frontend",
    },
  },
  contact: {
    title: "Contactez-nous",
    intro:
      "Une question, un retour ou une idée ? Envoyez un court message directement dans notre boîte de réception. Vous pouvez aussi écrire à",
    name: "Nom",
    email: "E-mail",
    topic: "Sujet",
    message: "Message",
    send: "Envoyer le message",
    sending: "Envoi…",
    success: "Message envoyé. Merci — on revient vers vous rapidement.",
    chooseTopic: "Précisez votre demande.",
    pickTopic: "Comment peut-on vous aider ?",
    topics: {
      question: "Poser une question",
      bug: "Signaler un bug",
      feature: "Suggérer une fonctionnalité",
      other: "Autre demande",
    },
  },
  docs: {
    title: "Documentation",
    navLabel: "Docs",
    intro:
      "MockData fournit des ressources REST fictives au format JSON. Utilisez les ressources publiques à votre guise, testez la connexion avec Auth, lancez des appels en direct dans le Playground, générez des jeux de données dans /generator, récupérez des images d'appoint dans /image-generator, ouvrez le JSON Workbench sur /json ou publiez votre propre API éphémère. En production, les ressources du catalogue reposent sur une base partagée unique — voir Données partagées.",
    toc: {
      intro: "Introduction",
      whatsNew: "Nouveautés",
      temporary: "API éphémère",
      generator: "Générateur de données fictives",
      imageGenerator: "Générateur d'images",
      jsonWorkbench: "Atelier JSON",
      sharedData: "Données partagées",
      language: "Langue",
      resources: "Ressources",
      openapi: "OpenAPI",
      requests: "Requêtes",
      errors: "Erreurs",
      rateLimit: "Limites de débit",
      reset: "Réinitialiser les données de démo",
    },
    whatsNewTitle: "Nouveautés",
    whatsNewBlurb:
      "Les dernières fonctionnalités ajoutées pour les devs, de la plus récente à la plus ancienne. Cliquez sur une carte pour voir les détails. La même liste est accessible via l'icône cloche en haut.",
    temporaryTitle: "API éphémère",
    temporaryBody:
      "Besoin d'un endpoint REST jetable avec votre propre JSON ? Les API éphémères sont isolées du catalogue partagé. Collez votre JSON, choisissez la durée de vie et obtenez une URL publique sous /api/t/… Vous pouvez aussi publier directement depuis le Générateur de données fictives via Créer une API.",
    temporaryBullets: [
      "Sans inscription — créez depuis /temporary dans votre navigateur (ou avec Créer une API dans /generator).",
      "Durées disponibles : 1, 6, 12 ou 24 heures (12 h par défaut).",
      "Appelez l'URL publique /api/t/… en GET, POST, PATCH et DELETE comme une collection ou un document standard.",
      "Traitez le lien comme un mot de passe : toute personne disposant du lien peut lire et modifier les données jusqu'à l'expiration.",
      "Une fois l'API expirée, les requêtes renvoient HTTP 410.",
    ],
    temporaryLimitsTitle: "Limites de l'API éphémère",
    temporaryLimitsBullets: [
      "Jusqu'à 5 API éphémères actives à la fois par navigateur.",
      "Jusqu'à 20 créations par IP sur une fenêtre glissante d'une heure (HTTP 429 au-delà).",
      "Charge utile JSON de 64 Ko maximum.",
      "Profondeur d'imbrication max de 8 ; tableaux jusqu'à 500 éléments ; objets jusqu'à 200 clés.",
      "La limite globale sur /api s'applique toujours (environ 60 requêtes par IP et par minute).",
    ],
    generatorTitle: "Générateur de données fictives",
    generatorBody:
      "Générez du JSON réaliste pour votre front sans écrire de mocks à la main. Exécution 100 % côté client. Choisissez le type de données, les champs et la quantité, puis copiez, téléchargez ou publiez en API éphémère.",
    generatorBullets: [
      "Ouvrez /generator — profils, e-commerce, contenu, médias, business et géolocalisation.",
      "Choisissez entre un corps de POST (sans id ni horodatages) ou un enregistrement d'API (id + createdAt + updatedAt).",
      "La langue FA utilise des jeux locaux en persan ; EN utilise des jeux en anglais issus de plusieurs pays.",
      "Générez jusqu'à 1 000 enregistrements ; Créer une API suit les limites d'Éphémère (500 éléments / 64 Ko).",
      "Sélections et résultats restent conservés lors de la navigation dans l'app (effacés lors d'un rechargement complet de la page).",
    ],
    imageGeneratorTitle: "Générateur d'images",
    imageGeneratorBody:
      "Besoin d'une URL d'image d'appoint pour votre front ? Utilisez des placeholders SVG MockData ou des photos réelles aléatoires (via redirection Picsum). Définissez largeur et hauteur, copiez le lien et intégrez-le dans une balise img, du CSS ou n'importe quel champ image.",
    imageGeneratorBullets: [
      "Ouvrez /image-generator — placeholders SVG ou photos réelles.",
      "Format d'URL publique : /image/{width}/{height} pour le SVG ; ajoutez ?type=real pour les photos.",
      "Aléatoire par défaut. Le paramètre optionnel ?seed= conserve les mêmes couleurs SVG ou la même photo réelle.",
      "Formats prêts à l'emploi pour avatar, vignette, profil, publication, couverture, bannière et story.",
    ],
    jsonWorkbenchTitle: "JSON Workbench",
    jsonWorkbenchBody:
      "JSON Workbench (en développement) : un espace unique dans le navigateur pour manipuler du JSON au quotidien pendant que vous intégrez vos interfaces — formater, comparer, rechercher et convertir sans quitter MockData.",
    jsonWorkbenchBullets: [
      "Ouvrez JSON Workbench sur /json et choisissez un outil — la vue s'adapte aussitôt (partageable via ?tool=).",
      "Fondamentaux : Formater, Arborescence, Rechercher, JSONPath et Comparer la structure.",
      "Transformer : TypeScript, Zod, JSON Schema, YAML et CSV.",
      "Utilitaires : trier les clés, supprimer les vides, aplatir, échapper/réparer, extraire/filtrer et plus encore.",
      "Tourne dans votre navigateur — votre JSON n'est envoyé sur aucun serveur.",
      "Toujours en cours d'évolution — d'autres outils et améliorations arrivent.",
    ],
    sharedDataTitle: "Données partagées",
    sharedDataBody:
      "Tous les visiteurs partagent la même base en direct. Les créations, modifications et suppressions sont réelles et visibles par tous. En production, les données initiales sont réinitialisées automatiquement une fois par jour via GET /api/cron/reset. Pratique pour prototyper et faire des démos — à éviter pour stocker des données à conserver.",
    languageTitle: "Langue",
    languageBody:
      "Par défaut, tous les textes des ressources sont en anglais. Passez lang=fa pour obtenir des réponses en persan avec noms, identifiants, e-mails, téléphones et textes iraniens. Ni cookie ni en-tête Accept-Language n'est utilisé — uniquement le query param. Le sélecteur de langue du site (English | فارسی) applique aussi ce choix dans le Playground et l'Aperçu.",
    languageBullets: [
      "Exemple : GET /api/users?lang=fa",
      "Les réponses en FA incluent Content-Language: fa et un objet font (Vazirmatn) pour l'affichage.",
      "Choisir فارسی dans l'en-tête passe l'interface en RTL et ajoute lang=fa dans le Playground.",
    ],
    resourcesTitle: "Ressources",
    resourcesBlurb:
      "Les endpoints actifs prêts à être appelés dès maintenant, ainsi qu'un aperçu des prochaines étapes.",
    colResource: "Ressource",
    colBasePath: "Chemin de base",
    colStatus: "Statut",
    colDocs: "Docs",
    statusLive: "En ligne",
    statusDev: "En développement",
    statusSoon: "Bientôt disponible",
    openapiTitle: "OpenAPI",
    openapiBody:
      "Spécification lisible par machine de tous les endpoints actifs (Auth, Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, Countries et reset admin). Importez-la dans Postman, Swagger UI ou vos outils IA.",
    download: "Télécharger",
    requestsTitle: "Requêtes",
    requestsBody:
      "Les collections renvoient data + pagination. Les ressources unitaires renvoient { data }.",
    errorsTitle: "Erreurs",
    errorsBody:
      "Les échecs renvoient un objet error. Statuts : 400 validation, 401 non authentifié, 404 introuvable, 429 trop de requêtes, 500 serveur. Ajoutez ?status=500 (400–599) pour forcer une erreur lors d'une démo UI.",
    rateLimitTitle: "Limites de débit",
    rateLimitBody:
      "Pour préserver l'accès de chacun à la démo, chaque IP peut appeler /api/* environ {limit} fois par minute. Au-delà, vous recevez HTTP 429 (trop de requêtes). La réponse inclut également des en-têtes X-RateLimit indiquant le quota restant.",
    resetTitle: "Réinitialiser les données de démo",
    resetBody:
      "Tout le monde partage la même base de démonstration. En production, les données reviennent automatiquement à leur jeu initial toutes les 24 heures. Si vous disposez de la clé admin, vous pouvez vider et recharger ces données immédiatement avec le formulaire ci-dessous.",
    resetPanel: {
      intro:
        "Saisissez la clé admin pour vider les tables de démo et recharger les données initiales.",
      placeholder: "Clé admin",
      button: "Réinitialiser maintenant",
      resetting: "Réinitialisation…",
      needSecret: "Saisissez d'abord la clé admin.",
      confirm:
        "Cette action va vider les tables de démo et recharger les données initiales. Continuer ?",
      networkError: "Erreur réseau. Le serveur est-il démarré ?",
      donePrefix: "Réinitialisation terminée",
    },
    colIndex: "#",
  },
  resourceDocs: {
    endpoints: "Endpoints",
    queryParams: "Paramètres de requête",
    examples: "Exemples",
    response: "Réponse",
    tryExample: "Tester",
    preview: "Aperçu",
    playground: "Playground",
    backToResources: "Retour aux ressources",
  },
  playground: {
    title: "Playground",
    blurb:
      "Envoyez de vraies requêtes vers les API MockData. Inspectez le JSON dans votre navigateur — votre dernière requête par ressource est conservée pendant votre navigation.",
    resource: "Ressource",
    action: "Action",
    send: "Envoyer",
    sending: "Envoi…",
    response: "Réponse",
    request: "Requête",
    body: "Corps",
    query: "Query",
    headers: "En-têtes",
    correct: "Valide",
    wrong: "Invalide",
    password: "Mot de passe",
    user: "Utilisateur",
    pickUser: "Choisir un utilisateur",
    loadError: "Impossible de charger les options de sélection",
    emptyResponse: "Aucune réponse pour le moment",
    startHint: "Choisissez une ressource et envoyez une requête pour démarrer.",
    types: "TS",
    json: "JSON",
  },
  temporary: {
    title: "API éphémère",
    blurb: "Collez votre JSON et créez une API temporaire.",
    privacyNote:
      "Traitez le lien comme un mot de passe. Jusqu'à son expiration, toute personne ayant le lien peut lire et modifier les données. Jusqu'à 5 actives à la fois par navigateur.",
    jsonLabel: "JSON",
    durationLabel: "Durée",
    duration1h: "1 heure",
    duration6h: "6 heures",
    duration12h: "12 heures",
    duration24h: "24 heures",
    checkJson: "Valider",
    jsonValid: "Tout est bon — prêt à créer.",
    jsonHint: "Validez quand vous voulez ou créez directement.",
    create: "Créer l'API",
    creating: "Création…",
    acceptFix: "Appliquer la correction et créer",
    rejectFix: "Continuer l'édition",
    fixedPreview: "Quelques problèmes ont été corrigés. Vérifiez puis créez.",
    myApis: "Mes API",
    emptyList: "Aucune API active pour l'instant.",
    copyUrl: "Copier",
    delete: "Supprimer",
    deleteAll: "Tout supprimer",
    deleting: "…",
    confirmDelete: "Supprimer cette API ?",
    confirmDeleteBody: "L'URL cessera immédiatement de fonctionner.",
    confirmDeleteAll: "Supprimer toutes les API ?",
    confirmDeleteAllBody: "Toutes les URL de cette liste cesseront immédiatement de fonctionner.",
    cancel: "Annuler",
    limitReached: "Limite de 5 API atteinte.",
    limitReachedBody: "Supprimez-en une dans la liste ci-dessous ou attendez l'expiration d'une API.",
    createdTitle: "Créée",
    openApi: "Ouvrir",
    slotsLabel: "{n} / 5",
    maxActive: "",
    sampleJson: `[
  { "id": "1", "firstName": "Camille", "lastName": "Laurent", "role": "admin" },
  { "id": "2", "firstName": "Lucas", "lastName": "Bernard", "role": "member" },
  { "id": "3", "firstName": "Chloé", "lastName": "Petit", "role": "member" }
]`,
    issues: {
      EMPTY: "Collez un objet ou un tableau JSON.",
      INVALID_JSON: "JSON invalide — vérifiez les virgules, guillemets, crochets et accolades.",
      TOO_LARGE: "Le JSON est trop volumineux ({max} Ko max).",
      NOT_OBJECT_OR_ARRAY: "La racine doit être un objet { } ou un tableau [ ].",
      TOO_DEEP: "Imbrication trop profonde (profondeur max : {max}).",
      ARRAY_TOO_LONG: "Le tableau est trop long ({max} éléments max).",
      TOO_MANY_KEYS: "Trop de clés dans un même objet ({max} max).",
      UNSAFE_KEY: "La clé non autorisée « {key} » est interdite.",
      AUTO_FIXED: "Les virgules finales ou clés non autorisées ont été retirées.",
    },
  },
  imageGenerator: {
    title: "Générateur d'images",
    blurb:
      "Pour vos visuels projet, utilisez des SVG MockData ou des photos réelles aléatoires aux dimensions de votre choix. Glissez l'URL directement dans une balise img, votre CSS ou n'importe quel champ image.",
    modeSvg: "SVG",
    modeReal: "Photo réelle",
    width: "Largeur",
    height: "Hauteur",
    generate: "Générer",
    generating: "Génération…",
    yourUrl: "Votre URL d'API",
    preview: "Aperçu",
    useInProject: "Intégrer dans votre projet",
    tabUrl: "URL",
    tabHtml: "HTML",
    tabCss: "CSS",
    tabJs: "JavaScript",
    tabCurl: "cURL",
    readySizes: "Formats prêts à l'emploi",
    sizes: {
      avatar: "Avatar",
      thumbnail: "Vignette",
      profile: "Profil",
      square: "Carré",
      post: "Publication",
      cover: "Couverture",
      banner: "Bannière",
      story: "Story",
    },
  },
  jsonWorkbench: {
    title: "JSON Workbench",
    blurb:
      "Collez votre JSON une seule fois. Choisissez ensuite l'action voulue — formater, rechercher, convertir et plus encore, sans re-coller.",
    toolNavLabel: "Outils du workbench",
    source: {
      title: "Votre JSON",
      hint: "Collez-le ici une fois. Chaque outil ci-dessous travaille sur ce document.",
      sample: "Charger un exemple",
      valid: "JSON valide.",
      needJson: "Collez d'abord votre JSON à gauche.",
      fixFirst: "Corrigez l'erreur JSON dans Votre JSON puis réessayez.",
      pickAction: "Que souhaitez-vous faire ?",
      useResult: "Utiliser comme JSON",
      diffHint: "Votre JSON est le côté A. Collez l'autre document ci-dessous en tant que B.",
      escapedInput: "Chaîne échappée",
      schemaInput: "JSON Schema",
      fromSchemaNote:
        "Collez un JSON Schema ci-dessous — cela génère un document exemple à envoyer dans Votre JSON.",
    },
    categories: {
      core: "Essentiels",
      transform: "Transformer",
      utility: "Utilitaires",
    },
    labels: {
      input: "Entrée",
      output: "Sortie",
      tree: "Arborescence",
      matches: "Résultats",
      jsonA: "JSON A",
      jsonB: "JSON B",
      diffResult: "Différences",
      jsonpath: "JSONPath",
      result: "Résultat ({count})",
    },
    actions: {
      format: "Formater",
      minify: "Minifier",
      showTree: "Afficher l'arbre",
      search: "Rechercher",
      clearSearch: "Effacer la recherche",
      replace: "Remplacer",
      replaceAll: "Tout remplacer",
      prevMatch: "Occurrence précédente",
      nextMatch: "Occurrence suivante",
      compare: "Comparer",
      run: "Exécuter",
      runPath: "Exécuter",
      toTypescript: "Générer types",
      toZod: "Générer Zod",
      toSchema: "Générer schema",
      swapDirection: "Inverser",
      sortKeys: "Trier les clés",
      removeEmpty: "Supprimer les vides",
      flatten: "Aplatir",
      unflatten: "Désaplatir",
      escape: "Échapper",
      unescape: "Déséchapper",
      repair: "Réparer",
      fromSchema: "Générer exemple",
      extractKeys: "Extraire les clés",
      extractValues: "Extraire les valeurs",
      pick: "Garder des champs",
      omit: "Exclure des champs",
      compareStructure: "Comparer la structure",
      clear: "Effacer",
      expandAll: "Tout déplier",
      collapseAll: "Tout replier",
      copyPath: "Copier le chemin",
      copyValue: "Copier la valeur",
    },
    errors: {
      empty: "Collez d'abord du JSON.",
      invalid: "JSON invalide.",
      unexpectedEnd: "Fin de JSON inattendue.",
      unexpectedToken: "Jeton inattendu : {token}",
      expectedPropertyName: "Nom de propriété attendu entre guillemets doubles.",
      expectedCommaOrBrace: "« , » ou « } » attendu après la valeur d'une propriété.",
      expectedCommaOrBracket: "« , » ou « ] » attendu après un élément du tableau.",
      expectedColon: "« : » attendu après le nom de propriété.",
      unterminatedString: "Chaîne non terminée.",
      badControlChar: "Caractère de contrôle invalide dans une chaîne.",
      badEscape: "Séquence d'échappement invalide dans une chaîne.",
      trailingChar: "Caractères inattendus après la valeur JSON.",
      objectKeyExpected: "Clé d'objet attendue.",
      unexpectedCharacter: "Caractère inattendu : {char}",
      invalidCharacter: "Caractère invalide : {char}",
      invalidUnicode: "Échappement Unicode invalide : {chars}",
      couldNotRepair: "Impossible de réparer ce JSON.",
      atLineColumn: "ligne {line}, colonne {column}",
      atLine: "ligne {line}",
      atPosition: "position {position}",
    },
    types: {
      object: "objet",
      array: "tableau",
      string: "chaîne",
      number: "nombre",
      boolean: "booléen",
      null: "null",
    },
    validate: {
      idleHint: "Collez votre JSON et validez. Seule la syntaxe JSON standard est contrôlée.",
      validTitle: "JSON valide",
      validBody: "Type racine : {type}",
      invalidTitle: "JSON invalide",
    },
    tree: {
      idleTitle: "L'arborescence s'affichera ici",
      idleBody: "Collez votre JSON à gauche et cliquez sur Afficher l'arbre.",
      errorTitle: "Impossible de construire l'arbre",
      errorBody: "Corrigez d'abord l'erreur JSON puis réessayez.",
    },
    search: {
      query: "Rechercher",
      replaceWith: "Remplacer par",
      matchCount: "{current} sur {total}",
      noMatches: "Aucune correspondance",
      noMatchesBody: "Aucun résultat pour cette recherche dans les clés ou les valeurs.",
      idleTitle: "Les correspondances s'afficheront ici",
      idleBody: "Saisissez un terme et cliquez sur Rechercher. Cherche dans les clés et les valeurs.",
      errorTitle: "Recherche impossible",
      errorBody: "Corrigez d'abord l'erreur JSON puis relancez la recherche.",
      kindKey: "Clé",
      kindValue: "Valeur",
      activeHint: "{kind} · {path}",
      replacedCount: "{count} occurrence(s) remplacée(s).",
    },
    diff: {
      idleTitle: "Le diff s'affichera ici",
      idleBody: "Collez JSON A et JSON B puis lancez la comparaison.",
      identical: "Aucune différence — les deux documents ont la même structure.",
      added: "Ajouté / dans B",
      removed: "Supprimé / dans A",
      changed: "Modifié",
      sideEmpty: "Rien de ce côté.",
      emptyA: "JSON A est vide.",
      emptyB: "JSON B est vide.",
      bothInvalid: "JSON A et JSON B sont tous deux invalides.",
    },
    jsonpath: {
      whatIs:
        "JSONPath extrait des valeurs dans un JSON imbriqué — un peu comme un sélecteur CSS pour vos données. Cliquez sur un exemple ci-dessous.",
      hintTitle: "Syntaxe",
      hintBody: `$              Racine
.users         Propriété
[*]            Tous les éléments du tableau
[0]            Premier élément`,
      idleTitle: "Le résultat s'affichera ici",
      idleBody: "Saisissez un chemin et exécutez la requête.",
      errorTitle: "Impossible d'exécuter la requête",
      errorBody: "Corrigez l'erreur dans le JSON ou le chemin puis réessayez.",
      noResults: "Aucun résultat pour ce chemin.",
      emptyPath: "Saisissez une expression JSONPath.",
    },
    transform: {
      tsIdleTitle: "Le code TypeScript s'affichera ici",
      tsIdleBody: "Collez votre JSON et générez les types.",
      zodIdleTitle: "Le schéma Zod s'affichera ici",
      zodIdleBody: "Collez votre JSON et générez un schéma Zod.",
      schemaExplain: "JSON ↔ Schema",
      schemaUse:
        "Déduisez un JSON Schema depuis Votre JSON, ou inversez le sens pour créer un exemple à partir d'un schéma.",
      schemaIdleTitle: "Le JSON Schema s'affichera ici",
      schemaIdleBody: "Collez votre JSON et générez un schéma.",
      yamlIdleTitle: "Le YAML s'affichera ici",
      yamlIdleBody: "Votre JSON est converti en YAML en direct.",
      yamlToJsonIdle: "Collez du YAML ci-dessus — il alimentera Votre JSON.",
      yamlApplied: "Converti — Votre JSON a été mis à jour.",
      csvIdleTitle: "Le CSV s'affichera ici",
      csvIdleBodyJson:
        "Convertit Votre JSON — un objet unique, un tableau d'objets ou un objet contenant une liste.",
      csvIdleBodyCsv: "Collez un CSV avec ligne d'en-tête pour le convertir en JSON.",
      csvToJsonIdle: "Collez du CSV ci-dessus — il alimentera Votre JSON.",
      csvApplied: "Converti — Votre JSON a été mis à jour.",
      csvUnsupported: "Impossible de convertir ce JSON en CSV.",
    },
    utilities: {
      sortAsc: "A → Z",
      sortDesc: "Z → A",
      sortIdleTitle: "Prêt pour le tri",
      sortIdleBody: "Choisissez A→Z ou Z→A — les clés triées apparaîtront en sortie.",
      sortApplied: "Clés triées — voir la sortie ci-dessous.",
      removeOptions: "Supprimer ces éléments",
      removeNull: "null",
      removeEmptyString: '""',
      removeEmptyArray: "[]",
      removeEmptyObject: "{}",
      removeNullLabel: "valeurs null",
      removeEmptyStringLabel: "chaînes vides",
      removeEmptyArrayLabel: "tableaux vides",
      removeEmptyObjectLabel: "objets vides",
      removePreserveHint: "false et 0 sont toujours conservés.",
      removeIdleTitle: "Le JSON nettoyé s'affichera ici",
      removeIdleBody: "Choisissez ce qu'il faut supprimer et exécutez.",
      nestedLabel: "Imbriqué",
      flatLabel: "À plat",
      flattenHint: "Transforme les objets imbriqués en clés séparées par des points — ex. : address.city et skills.0.",
      flattenUse:
        "Pratique pour les tableurs, fichiers .env, index de recherche ou API n'acceptant que des paires clé/valeur à plat.",
      flattenIdleTitle: "Prêt à aplatir",
      flattenIdleBody: "Les clés imbriquées deviendront des chemins à points en sortie.",
      flattenApplied: "Aplati — voir la sortie ci-dessous.",
      unflattenHint: "Les chemins avec points reforment des objets ; les segments numériques reforment des tableaux.",
      unflattenUse:
        "Utile quand vous avez des clés à plat (user.name, skills.0) et devez retrouver un JSON imbriqué.",
      unflattenIdleTitle: "Le JSON imbriqué s'affichera ici",
      unflattenIdleBody: "Collez un objet avec des chemins à points et désaplatissez.",
      escapeIdleTitle: "La chaîne échappée s'affichera ici",
      escapeIdleBody: "Votre JSON sera échappé pour être inséré dans une chaîne.",
      escapeHint:
        "Transforme votre JSON en une chaîne échappée sur une ligne — guillemets et sauts de ligne deviennent \" / \n pour tenir dans une autre chaîne ou configuration.",
      escapeUse:
        "Pratique pour embarquer du JSON dans du code, des variables d'environnement ou des logs sans casser les guillemets externes.",
      unescapeIdleTitle: "Le JSON s'affichera ici",
      unescapeIdleBody: "Collez une chaîne JSON échappée et déséchappez.",
      repairHint:
        "Réparation multi-passes pour JSON cassé, tronqué, commenté ou en cours d'édition.",
      repairUse:
        "Corrige guillemets, virgules, crochets et accolades ; supprime commentaires et blocs de code ; gère littéraux Python/JS, JSONP, types MongoDB, NDJSON, documents tronqués et résidus de frappe.",
      repairAlreadyValid: "Déjà valide. Simplement formaté.",
      repairFormatted: "Formaté.",
      repairReady: "Corrections appliquées.",
      repairApplied: "Corrigé.",
      repairAppliedToSource: "Appliqué à Votre JSON.",
      repairFailedTitle: "Réparation incomplète",
      repairFailedAt: "{message} (ligne {line}, colonne {column})",
      repairPreview: "Réparé",
      repairFixes: {
        "trailing-commas": "Virgules finales",
        "single-quotes": "Guillemets simples",
        "smart-quotes": "Guillemets courbes",
        "unquoted-keys": "Clés sans guillemets",
        "missing-commas": "Virgules manquantes",
        "missing-brackets": "Crochets/accolades manquants",
        comments: "Commentaires",
        "code-fence": "Bloc de code",
        "python-literals": "Littéraux Python",
        "js-undefined": "undefined → null",
        jsonp: "Enveloppe JSONP",
        "escaped-string": "Chaîne JSON échappée",
        mongodb: "Types MongoDB",
        ndjson: "NDJSON → tableau",
        ellipsis: "Points de suspension",
        "string-concat": "Concaténation de chaînes",
        whitespace: "Espaces / mise en forme",
        truncated: "Tronqué / incomplet",
        "mid-edit-junk": "Résidus en cours d'édition",
      },
      repairIdleTitle: "Le JSON réparé s'affichera ici",
      repairIdleBody:
        "Collez du texte cassé ou quasi-JSON dans Votre JSON — la réparation s'affiche en direct en sortie.",
      fromSchemaHint:
        "Schéma → JSON exemple à partir de type, properties, required, items, enum et default.",
      fromSchemaIdleTitle: "Le JSON exemple s'affichera ici",
      fromSchemaIdleBody: "Collez un JSON Schema ci-dessous et générez un exemple.",
      extractHint:
        "Renvoie des paires chemin feuille + valeur — ex. : { path: \"address.city\", value: \"Paris\" }.",
      extractIdleTitle: "Clés et valeurs s'afficheront ici",
      extractIdleBody: "Sélectionnez des champs ci-dessus pour extraire chemins et valeurs.",
      extractKeysHint: "Renvoie les chemins de clés imbriquées en notation pointée (tableaux en .0).",
      extractKeysIdleTitle: "Les clés s'afficheront ici",
      extractKeysIdleBody: "Collez votre JSON et extrayez les clés.",
      extractValuesHint: "Collecte les valeurs terminales (primitifs et null) en profondeur.",
      extractValuesIdleTitle: "Les valeurs s'afficheront ici",
      extractValuesIdleBody: "Collez votre JSON et extrayez les valeurs.",
      fieldsLabel: "Champs de Votre JSON",
      fieldsClickHint:
        "Cliquez sur les chemins pour sélectionner — sans rien taper. Les chemins imbriqués utilisent le point.",
      fieldsSelectAll: "Tout sélectionner",
      fieldsClear: "Effacer",
      fieldsEmpty: "Ce JSON ne contient aucun champ sélectionnable.",
      pickHint: "Ne conservez que les champs choisis — cliquez sur les champs ci-dessous.",
      pickIdleTitle: "Le résultat s'affichera ici",
      pickIdleBody: "",
      omitHint: "Retirez les champs choisis — cliquez sur les champs ci-dessous.",
      omitIdleTitle: "Le résultat s'affichera ici",
      omitIdleBody: "",
      compareHint: "Collez deux documents JSON côte à côte. Structure uniquement — les valeurs sont ignorées.",
      compareUse:
        "Clés manquantes en rouge dans A, clés ajoutées en vert dans B et écarts de type en ambre des deux côtés.",
      compareBack: "Retour au workbench",
      compareIdleTitle: "Collez deux documents JSON",
      compareIdleBody: "Ajoutez du JSON à gauche et à droite pour comparer leur structure.",
      compareIdentical: "Structure identique — types et clés concordent.",
      compareMissing: "Manquantes (uniquement dans A)",
      compareExtra: "Ajoutées (uniquement dans B)",
      compareType: "Type différent",
    },
    empty: {
      formatTitle: "Le JSON formaté s'affichera ici",
      formatBody: "Collez votre JSON à gauche et cliquez sur Formater.",
    },
    soon: {
      badge: "Bientôt disponible",
      title: "{tool} arrive bientôt",
      body: "Cet outil est affiché pour vous donner une vue d'ensemble complète du workbench. Il sera disponible dans une prochaine version.",
    },
    tools: {
      format: "Formater",
      minify: "Minifier",
      validate: "Valider",
      tree: "Arborescence",
      search: "Rechercher",
      diff: "Diff",
      jsonpath: "JSONPath",
      convert: "Convertir",
      toTypescript: "TypeScript",
      toZod: "Zod",
      toSchema: "JSON Schema",
      yaml: "YAML",
      csv: "CSV",
      sortKeys: "Trier les clés",
      removeEmpty: "Supprimer les vides",
      flatten: "Aplatir",
      unflatten: "Désaplatir",
      escape: "Échapper",
      unescape: "Déséchapper",
      repair: "Réparer",
      extract: "Extraire clés et valeurs",
      extractKeys: "Extraire les clés",
      extractValues: "Extraire les valeurs",
      pick: "Garder des champs",
      omit: "Exclure des champs",
      compareStructure: "Comparer la structure",
    },
  },
  generator: {
    title: "Générateur de données fictives",
    subtitle: "Générez des données réalistes pour vos projets frontend.",
    chooseType: "Types de données",
    searchPlaceholder: "Rechercher des données…",
    noTopics: "Aucun type de données correspondant.",
    fieldsLegend: "Champs",
    moreFields: "Plus de champs",
    lessFields: "Masquer les optionnels",
    optionalFields: "Champs optionnels",
    records: "Enregistrements",
    customQty: "Personnalisé",
    country: "Pays",
    countrySearch: "Rechercher un pays…",
    selectPlaceholder: "Choisissez un type de données…",
    outputMode: "Format de sortie",
    modePayload: "Corps de POST",
    modeApi: "Enregistrement API",
    modePayloadHint: "Sans id ni horodatages — prêt pour un POST de création.",
    modeApiHint: "Inclut id, createdAt et updatedAt comme une ligne enregistrée en API.",
    jsonType: "JSON",
    viewJson: "JSON",
    viewType: "TS",
    generate: "Générer {n} enregistrements",
    generating: "Génération de {n} enregistrements…",
    generateAgain: "Régénérer",
    refresh: "Générer à nouveau",
    generated: "{n} enregistrements générés",
    download: "Télécharger",
    createApi: "Créer une API",
    createSuccess: "API éphémère créée.",
    createBlockedArray:
      "L'API éphémère accepte jusqu'à 500 enregistrements. Réduisez la quantité pour publier.",
    createBlockedSize:
      "Ce JSON dépasse la limite de l'API éphémère (64 Ko). Réduisez la quantité ou retirez des champs.",
    openTemporary: "Gérer dans Éphémère",
    emptyTitle: "Choisissez un type de données",
    emptyBody: "Sélectionnez un type ci-dessus pour générer des données réalistes.",
    duration1h: "1 h",
    duration6h: "6 h",
    duration12h: "12 h",
    duration24h: "24 h",
    countries: {
      all: "Tous les pays",
      IR: "Iran",
      DE: "Allemagne",
      US: "États-Unis",
      GB: "Royaume-Uni",
      FR: "France",
      NL: "Pays-Bas",
      JP: "Japon",
      CA: "Canada",
    },
    categories: {
      people: "Personnes",
      ecommerce: "E-commerce",
      content: "Contenu",
      media: "Médias",
      business: "Entreprise",
      location: "Géolocalisation",
    },
    fields: {
      id: "id",
      name: "Nom",
      username: "Identifiant",
      email: "E-mail",
      avatar: "Avatar",
      phone: "Téléphone",
      company: "Entreprise",
      location: "Localisation",
      age: "Âge",
      role: "Rôle",
      jobTitle: "Poste",
      department: "Service",
      bio: "Bio",
      website: "Site web",
      createdAt: "Créé le",
      updatedAt: "Mis à jour le",
      hiredAt: "Embauché le",
      ordersCount: "Nombre de commandes",
      totalSpent: "Total dépensé",
      postsCount: "Nombre d'articles",
      price: "Prix",
      image: "Image",
      category: "Catégorie",
      description: "Description",
      brand: "Marque",
      stock: "Stock",
      rating: "Note",
      sku: "SKU",
      colors: "Couleurs",
      orderId: "N° de commande",
      customer: "Client",
      items: "Articles",
      total: "Total",
      status: "Statut",
      orderDate: "Date de commande",
      paymentStatus: "Statut du paiement",
      shippingAddress: "Adresse de livraison",
      user: "Utilisateur",
      comment: "Commentaire",
      post: "Article",
      date: "Date",
      product: "Produit",
      title: "Titre",
      verified: "Vérifié",
      helpful: "Utile",
      slug: "Slug",
      parentCategory: "Catégorie parente",
      productCount: "Nombre de produits",
      quantity: "Quantité",
      discount: "Remise",
      code: "Code",
      type: "Type",
      expiresAt: "Expire le",
      minimumOrder: "Commande minimum",
      usageLimit: "Limite d'utilisation",
      active: "Actif",
      amount: "Montant",
      currency: "Devise",
      paymentMethod: "Moyen de paiement",
      transactionId: "ID de transaction",
      order: "Commande",
      carrier: "Transporteur",
      trackingNumber: "N° de suivi",
      estimatedDelivery: "Livraison estimée",
      body: "Contenu",
      author: "Auteur",
      tags: "Tags",
      publishedAt: "Publié le",
      likes: "J'aime",
      views: "Vues",
      replies: "Réponses",
      attachments: "Pièces jointes",
      actionUrl: "URL d'action",
      sender: "Expéditeur",
      receiver: "Destinataire",
      message: "Message",
      read: "Lu",
      artist: "Artiste",
      cover: "Pochette",
      year: "Année",
      genre: "Genre",
      tracks: "Pistes",
      album: "Album",
      duration: "Durée",
      poster: "Affiche",
      director: "Réalisation",
      language: "Langue",
      plays: "Écoutes",
      label: "Label",
      pages: "Pages",
      isbn: "ISBN",
      instructor: "Formateur",
      level: "Niveau",
      lessons: "Leçons",
      students: "Étudiants",
      employees: "Effectif",
      logo: "Logo",
      industry: "Secteur",
      salary: "Salaire",
      experience: "Expérience",
      remote: "Télétravail",
      founded: "Fondée en",
      postedAt: "Publié le",
      capacity: "Capacité",
      capital: "Capitale",
      flag: "Drapeau",
      region: "Région / État / Province",
      population: "Population",
      street: "Rue",
      postalCode: "Code postal",
      latitude: "Latitude",
      longitude: "Longitude",
      country: "Pays",
      city: "Ville",
      notes: "Notes",
      team: "Équipe",
      joinedAt: "Arrivé le",
      skills: "Compétences",
      specialty: "Spécialité",
      hospital: "Hôpital",
      licenseNumber: "N° d'inscription",
      yearsExperience: "Années d'expérience",
      bloodType: "Groupe sanguin",
      diagnosis: "Diagnostic",
      doctor: "Médecin",
      admittedAt: "Admis le",
      vehicleType: "Type de véhicule",
      plateNumber: "Immatriculation",
      tripsCount: "Nombre de trajets",
      roomNumber: "Chambre",
      checkIn: "Arrivée",
      checkOut: "Départ",
      nights: "Nuits",
      followers: "Abonnés",
      following: "Abonnements",
      grade: "Niveau",
      school: "Établissement",
      gpa: "Moyenne",
      major: "Spécialité",
      enrollmentYear: "Année d'inscription",
      subject: "Matière",
      classesCount: "Nombre de cours",
      invoiceNumber: "N° de facture",
      issueDate: "Date d'émission",
      dueDate: "Date d'échéance",
      tax: "TVA / Taxes",
      itemsCount: "Nombre d'éléments",
      target: "Cible",
      targetType: "Type de cible",
      reaction: "Réaction",
      color: "Couleur",
      thumbnail: "Vignette",
      channel: "Chaîne",
      url: "URL",
      width: "Largeur",
      height: "Hauteur",
      alt: "Texte alternatif",
      photographer: "Photographe",
      host: "Animateur",
      episodes: "Épisodes",
      subscribers: "Abonnés",
      owner: "Responsable",
      public: "Public",
      progress: "Avancement",
      teamSize: "Taille de l'équipe",
      budget: "Budget",
      startDate: "Date de début",
      membersCount: "Nombre de membres",
      focus: "Axe",
      countriesCount: "Nombre de pays",
      areaKm2: "Superficie (km²)",
      timezone: "Fuseau horaire",
      terminals: "Terminaux",
      altitude: "Altitude",
      accuracy: "Précision",
    },
    topics: {
      users: {
        name: "Utilisateurs",
        description: "Profils d'utilisateurs pour applis et tableaux de bord",
        preview: {
          line1: "Camille Laurent",
          line2: "@camille.l · camille@mail.test",
          line3: "Paris",
        },
      },
      customers: {
        name: "Clients",
        description: "Acheteurs et contacts de compte",
        preview: {
          line1: "Lucas Bernard",
          line2: "lucas@demo.dev",
          line3: "+33 6 12 34 56 78",
        },
      },
      employees: {
        name: "Employés",
        description: "Membres d'équipe avec postes et services",
        preview: {
          line1: "Manon Moreau",
          line2: "Développeuse Frontend",
          line3: "Ingénierie · Acme",
        },
      },
      authors: {
        name: "Auteurs",
        description: "Rédacteurs et créateurs de contenu",
        preview: {
          line1: "Antoine Lefèvre",
          line2: "Écrit sur le design produit.",
        },
      },
      contacts: {
        name: "Contacts",
        description: "Contacts type CRM et rattachements société",
        preview: {
          line1: "Élodie Girard",
          line2: "elodie@acme.test · Acme",
        },
      },
      "team-members": {
        name: "Membres d'équipe",
        description: "Collaborateurs produit et ingénierie",
        preview: {
          line1: "Hugo Mercier",
          line2: "tech lead · Ingénierie",
        },
      },
      doctors: {
        name: "Médecins",
        description: "Praticiens avec spécialité et hôpital",
        preview: {
          line1: "Dr Claire Rousseau",
          line2: "Cardiologie · Hôpital Saint-Louis",
        },
      },
      patients: {
        name: "Patients",
        description: "Dossiers avec diagnostic et groupe sanguin",
        preview: {
          line1: " Maxime Durand",
          line2: "A+ · Hypertension",
        },
      },
      drivers: {
        name: "Chauffeurs",
        description: "Conducteurs de flotte avec véhicule et note",
        preview: {
          line1: "Julien Bonnet",
          line2: "berline · ★ 4,8",
        },
      },
      guests: {
        name: "Clients hôtel",
        description: "Occupants d'hôtel avec chambre et statut du séjour",
        preview: {
          line1: "Léa Fournier",
          line2: "Chambre 412 · en séjour",
        },
      },
      profiles: {
        name: "Profils",
        description: "Profils sociaux avec abonnés et bio",
        preview: {
          line1: "Inès Dubois",
          line2: "@inesdubois · 12,4 k abonnés",
        },
      },
      "girl-students": {
        name: "Élèves (filles)",
        description: "Élèves filles avec niveau et établissement",
        preview: {
          line1: "Zoé Lambert",
          line2: "1re · Lycée Henri-IV",
        },
      },
      "boy-students": {
        name: "Élèves (garçons)",
        description: "Élèves garçons avec niveau et établissement",
        preview: {
          line1: "Nathan Roux",
          line2: "3e · Collège Victor-Hugo",
        },
      },
      teachers: {
        name: "Enseignants",
        description: "Professeurs avec matière et établissement",
        preview: {
          line1: "Pauline Blanc",
          line2: "Mathématiques · Lycée Montaigne",
        },
      },
      products: {
        name: "Produits",
        description: "Articles boutique et prix",
        preview: {
          line1: "Casque audio sans fil",
          line2: "129,90 € · Électronique",
          line3: "★★★★☆",
        },
      },
      orders: {
        name: "Commandes",
        description: "Commandes d'achat avec articles et statut",
        preview: {
          line1: "Commande #10482",
          line2: "3 articles · 214,90 €",
          line3: "Livré",
        },
      },
      reviews: {
        name: "Avis",
        description: "Notes et commentaires clients",
        preview: {
          line1: "★★★★★ Super produit",
          line2: "Pratique et facile à prendre en main.",
        },
      },
      categories: {
        name: "Catégories",
        description: "Rayons du catalogue produits",
        preview: { line1: "Électronique", line2: "electronique" },
      },
      "cart-items": {
        name: "Articles du panier",
        description: "Articles ajoutés à un panier d'achat",
        preview: { line1: "Montre connectée", line2: "2 × 199 € · 398 €" },
      },
      coupons: {
        name: "Codes promo",
        description: "Codes de réduction et conditions",
        preview: { line1: "BIENVENUE10", line2: "10 % · expire le 01/12/2026" },
      },
      payments: {
        name: "Paiements",
        description: "Tentatives de règlement et moyens utilisés",
        preview: { line1: "84,50 € EUR", line2: "carte · payé" },
      },
      shipments: {
        name: "Expéditions",
        description: "Transporteurs et suivi de livraison",
        preview: { line1: "CMD-10482 · Colissimo", line2: "En transit" },
      },
      invoices: {
        name: "Factures",
        description: "Documents de facturation avec montants et échéances",
        preview: { line1: "FAC-10482", line2: "1 250 € · payée" },
      },
      brands: {
        name: "Marques",
        description: "Marques boutique avec logos et catalogues",
        preview: { line1: "Acme", line2: "acme · 128 produits" },
      },
      posts: {
        name: "Articles",
        description: "Articles de blog et publications de flux",
        preview: { line1: "Concevoir pour la rapidité", line2: "Par Inès Dubois" },
      },
      comments: {
        name: "Commentaires",
        description: "Réponses sur des articles ou produits",
        preview: {
          line1: "Très utile, merci !",
          line2: "Arthur · 12 j'aime",
        },
      },
      messages: {
        name: "Messages",
        description: "Échanges type messagerie",
        preview: {
          line1: "Tu peux relire le dernier brouillon ?",
          line2: "Manon → Lucas",
        },
      },
      notifications: {
        name: "Notifications",
        description: "Alertes et résumés dans l'application",
        preview: { line1: "Nouveau commentaire", line2: "info · il y a 2 h" },
      },
      tags: {
        name: "Tags",
        description: "Tags éditoriaux avec slugs et compteurs",
        preview: { line1: "typescript", line2: "142 articles" },
      },
      "content-categories": {
        name: "Catégories éditoriales",
        description: "Rubriques éditoriales pour les articles",
        preview: { line1: "Tutoriels", line2: "tutoriels · 86 articles" },
      },
      likes: {
        name: "Mentions J'aime",
        description: "Réactions sur des articles et commentaires",
        preview: { line1: "Inès a aimé un article", line2: "article · j'adore" },
      },
      albums: {
        name: "Albums",
        description: "Albums musicaux avec pochette",
        preview: {
          line1: "Random Access Memories",
          line2: "Daft Punk",
          line3: "2013 · 13 pistes",
        },
      },
      songs: {
        name: "Morceaux",
        description: "Titres avec durée et artiste",
        preview: { line1: "Nuit sur le périph", line2: "3:42 · Électro" },
      },
      movies: {
        name: "Films",
        description: "Films avec affiche et note",
        preview: { line1: "Circuit de nuit", line2: "2021 · ★ 8,2" },
      },
      books: {
        name: "Livres",
        description: "Ouvrages avec auteurs et couvertures",
        preview: { line1: "Concevoir des interfaces", line2: "Antoine Lefèvre · 2019" },
      },
      videos: {
        name: "Vidéos",
        description: "Vidéos avec durée et vues",
        preview: {
          line1: "Monter un dashboard en 10 minutes",
          line2: "12:40 · 84 k vues",
        },
      },
      images: {
        name: "Images",
        description: "Photos avec dimensions et tags",
        preview: { line1: "Lumière du matin", line2: "1280×720" },
      },
      podcasts: {
        name: "Podcasts",
        description: "Émissions avec animateurs et nombre d'épisodes",
        preview: { line1: "Code & Café", line2: "48 épisodes · Tech" },
      },
      playlists: {
        name: "Playlists",
        description: "Listes de lecture avec créateurs et genres",
        preview: { line1: "Focus Profond", line2: "32 pistes · Électro" },
      },
      companies: {
        name: "Entreprises",
        description: "Organisations et secteurs d'activité",
        preview: { line1: "Acme Corp", line2: "Technologie · Paris" },
      },
      jobs: {
        name: "Offres d'emploi",
        description: "Postes ouverts avec lieu et type de contrat",
        preview: {
          line1: "Développeur Frontend",
          line2: "Google · Paris · Temps plein",
        },
      },
      courses: {
        name: "Formations",
        description: "Parcours de formation et formateurs",
        preview: { line1: "Les bases de React", line2: "Intermédiaire · 12 h" },
      },
      events: {
        name: "Événements",
        description: "Meetups et conférences",
        preview: { line1: "Frontend Meetup", line2: "Paris · Atelier" },
      },
      projects: {
        name: "Projets",
        description: "Projets avec avancement et budget",
        preview: { line1: "Refonte du dashboard", line2: "en_cours · 72 %" },
      },
      teams: {
        name: "Équipes",
        description: "Équipes de l'entreprise avec responsables et effectifs",
        preview: { line1: "Squad produit", line2: "8 membres · Ingénierie" },
      },
      continents: {
        name: "Continents",
        description: "Continents du monde avec codes et statistiques",
        preview: { line1: "Europe", line2: "EU · 44 pays" },
      },
      countries: {
        name: "Pays",
        description: "Noms de pays, codes et drapeaux",
        preview: { line1: "France", line2: "FR · Paris" },
      },
      cities: {
        name: "Villes",
        description: "Villes avec région et pays",
        preview: { line1: "Lyon", line2: "France · Auvergne-Rhône-Alpes" },
      },
      addresses: {
        name: "Adresses",
        description: "Adresses postales complètes et cohérentes",
        preview: {
          line1: "24 Rue de Rivoli",
          line2: "75004 Paris, France",
        },
      },
      regions: {
        name: "Régions",
        description: "Régions, États et provinces",
        preview: { line1: "Île-de-France", line2: "France · Paris" },
      },
      neighborhoods: {
        name: "Quartiers",
        description: "Quartiers et zones urbaines",
        preview: { line1: "Le Marais", line2: "Paris · 75004" },
      },
      airports: {
        name: "Aéroports",
        description: "Aéroports avec codes IATA et villes",
        preview: { line1: "Paris Charles-de-Gaulle", line2: "CDG · France" },
      },
      coordinates: {
        name: "Coordonnées GPS",
        description: "Latitude, longitude et libellés de lieu",
        preview: {
          line1: "48.856614, 2.352222",
          line2: "Paris · France",
        },
      },
    },
    errors: {
      pickTopic: "Choisissez d'abord un type de données.",
      INVALID_TOPIC: "Type de données inconnu.",
      INVALID_FIELDS: "Sélectionnez au moins un champ.",
      INVALID_QUANTITY: "La quantité doit être comprise entre 1 et 1000.",
      INVALID_COUNTRY: "Pays invalide.",
      GENERATE_FAILED: "Impossible de générer les données. Réessayez.",
      DOWNLOAD_FAILED: "Échec du téléchargement. Réessayez.",
      CREATE_FAILED: "Impossible de créer l'API éphémère.",
      LIMIT_REACHED: "Limite d'API éphémères atteinte (5 actives). Supprimez-en une d'abord.",
      RATE_LIMITED: "Trop de créations en peu de temps. Réessayez plus tard.",
    },
  },
  preview: {
    docs: "Docs",
    playground: "Playground",
    blurb: "Une interface simple pour tester cette API.",
    blurbFaHint: "",
    backToResource: "Retour à {name}",
    search: "Rechercher",
    create: "Créer",
    edit: "Modifier",
    delete: "Supprimer",
    save: "Enregistrer",
    saving: "Enregistrement…",
    deleting: "Suppression…",
    cancel: "Annuler",
    fillSample: "Remplir un exemple",
    noRecords: "Aucun enregistrement",
    loading: "Chargement…",
    confirmDelete: "Supprimer ?",
    confirmDeleteBody: "Cet élément sera supprimé définitivement.",
    networkError: "Erreur réseau",
    authDemoPassword: "Le mot de passe de démo pour tout utilisateur initial est",
    username: "Identifiant",
    password: "Mot de passe",
    login: "Connexion",
    loginSuccess: "Connexion réussie.",
    logout: "Déconnexion",
    getMe: "GET /me",
    token: "Token",
    user: "Utilisateur",
    loginFirst: "Connectez-vous d'abord pour obtenir un token",
    createdAt: "Ajouté le",
    fieldLabels: {
      name: "Nom",
      username: "Identifiant",
      email: "E-mail",
      avatarUrl: "URL de l'avatar",
      role: "Rôle",
      city: "Ville",
      country: "Pays",
      company: "Entreprise",
      title: "Titre",
      body: "Contenu",
      published: "Publié",
      userId: "ID utilisateur",
      postId: "ID article",
      albumId: "ID album",
      url: "URL",
      thumbnailUrl: "URL de la vignette",
      completed: "Terminée",
      description: "Description",
      price: "Prix",
      stock: "Stock",
      category: "Catégorie",
      imageUrl: "URL de l'image",
      message: "Message",
      type: "Type",
      read: "Lu",
      code: "Code",
      capital: "Capitale",
      region: "Région",
      population: "Population",
      currency: "Devise",
      flagUrl: "URL du drapeau",
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
      teaser: "En développement — formater, comparer et transformer du JSON",
      hint: "/json — choisissez un outil, la vue se met à jour aussitôt",
      badge: "En développement",
      summary:
        "JSON Workbench est en développement : un espace tout-en-un dans le navigateur pour formater, comparer la structure, rechercher et transformer du JSON — avec TypeScript, Zod, YAML, CSV et des utilitaires.",
      details: [
        "Ouvrez JSON Workbench sur /json et choisissez un outil — la vue s'adapte aussitôt (lien direct via ?tool=).",
        "Fondamentaux : Formater, Arborescence, Rechercher, JSONPath et Comparer la structure.",
        "Transformer : conversions vers TypeScript, Zod, JSON Schema, YAML et CSV.",
        "Utilitaires : trier les clés, nettoyer les valeurs vides, aplatir, échapper, réparer, garder/exclure des champs et plus.",
        "Toujours en cours d'évolution — d'autres outils et ajustements arrivent progressivement.",
      ],
    },
    "2026-09-19-image-generator": {
      title: "Générateur d'images",
      teaser: "Images d'appoint par URL",
      hint: "/image-generator — SVG ou photo réelle, copiez le lien",
      summary:
        "Images d'appoint par URL — SVG MockData ou photos réelles via Picsum, avec des formats prêts pour avatars, publications et bannières.",
      details: [
        "Ouvrez /image-generator pour choisir SVG ou image réelle, régler largeur/hauteur et copier une URL prête à l'emploi.",
        "Les URL publiques sont aléatoires par défaut : /image/{w}/{h} pour le SVG ; ajoutez ?type=real pour des photos.",
        "Le paramètre optionnel ?seed= conserve les mêmes couleurs SVG ou la même photo réelle.",
        "Intégrez le lien dans img, votre CSS ou tout champ image — aucun upload requis.",
      ],
    },
    "2026-09-17-generator": {
      title: "Générateur de données fictives",
      teaser: "Du JSON réaliste en quelques secondes",
      hint: "/generator — choisissez un type, générez, copiez ou cliquez sur Créer une API",
      summary:
        "Générez du JSON réaliste pour le front — choisissez le type, les champs et la quantité, puis copiez, téléchargez ou publiez en API éphémère.",
      details: [
        "Ouvrez /generator pour des données personnes, e-commerce, contenu, médias, entreprise et géolocalisation.",
        "Formats corps de POST vs enregistrement API ; l'interface FA utilise des jeux locaux en persan.",
        "Générez jusqu'à 1 000 enregistrements dans le navigateur ; Créer une API suit les limites d'Éphémère (500 / 64 Ko).",
        "Sélections et résultats restent conservés lors de la navigation SPA (effacés au rechargement complet de la page).",
      ],
    },
    "2026-09-16-temporary": {
      title: "API éphémère",
      teaser: "Votre JSON, une URL temporaire",
      hint: "/temporary — collez votre JSON et obtenez un lien REST public",
      summary:
        "Collez votre propre JSON et obtenez une URL REST publique temporaire — sans inscription, jusqu'à 5 API actives par navigateur.",
      details: [
        "Créez sur /temporary : choisissez une durée (1 h, 6 h, 12 h ou 24 h) et publiez.",
        "Appelez l'URL publique /api/t/… avec des requêtes GET, POST, PATCH et DELETE standards.",
        "Jusqu'à 5 API actives par navigateur ; jusqu'à 20 créations par IP et par heure.",
        "Traitez le lien comme un mot de passe — quiconque possède le lien peut lire et modifier les données jusqu'à expiration.",
      ],
    },
    "2026-09-15-preview": {
      title: "Aperçu",
      teaser: "Interfaces exemples pour chaque ressource",
      hint: "/preview/users — testez création, modification et suppression dans le navigateur",
      summary:
        "Interfaces exemples en direct pour Users, Posts, Auth et toutes les ressources — créez, modifiez et supprimez directement sur la vraie API.",
      details: [
        "Chaque page doc de ressource propose un bouton Aperçu ouvrant une mini-interface connectée aux vrais endpoints.",
        "Listez, recherchez, paginez, créez, modifiez et supprimez des entrées — sur la même base de démo partagée.",
        "L'aperçu Auth inclut un formulaire de connexion fonctionnel (le mot de passe est toujours password) et GET /me avec le token.",
        "Utilisez le sélecteur de langue en haut pour charger des données exemples en persan si besoin.",
      ],
    },
    "2026-09-14-lang-fa": {
      title: "Données en persan (?lang=fa)",
      teaser: "Jeux de données exemples en persan",
      hint: "/api/users?lang=fa — ajoutez lang=fa à n'importe quelle requête pour du texte en persan",
      summary:
        "Obtenez noms, identifiants, téléphones et textes exemples iraniens en ajoutant ?lang=fa à n'importe quel endpoint.",
      details: [
        "L'anglais reste le choix par défaut. Seul le query param lang=fa change la langue — sans cookie ni Accept-Language.",
        "Les réponses en FA incluent Content-Language: fa et un objet font pointant vers Vazirmatn pour l'affichage.",
        "Fonctionne sur les routes de liste et de détail, ainsi que pour la connexion avec des identifiants en persan.",
        "Choisir فارسی dans l'en-tête ajoute lang=fa dans le Playground.",
      ],
    },
    "2026-09-12-playground": {
      title: "Playground",
      teaser: "Appelez les API directement dans le navigateur",
      hint: "/playground — envoyez des requêtes et inspectez le JSON",
      summary:
        "Appelez les endpoints actifs dans le navigateur, testez connexion réussie ou refusée et inspectez les réponses JSON.",
      details: [
        "Choisissez une ressource et une action, modifiez query params ou corps JSON, puis envoyez la requête.",
        "La connexion Auth propose des raccourcis Valide / Invalide pour tester 200 vs 401 en un clic.",
        "Les réponses affichent le statut HTTP, un JSON lisible et la pagination lorsque la route en renvoie.",
        "L'état de requête et les dernières réponses restent mémorisés par ressource pendant la navigation SPA (réinitialisés au rechargement).",
      ],
    },
    "2026-09-10-auth": {
      title: "Auth fictive",
      teaser: "Connexion et tokens Bearer",
      hint: "/api/auth/login — le mot de passe est toujours password",
      summary:
        "Envoyez un POST sur /api/auth/login avec n'importe quel utilisateur initial et son mot de passe → récupérez un token Bearer pour /me.",
      details: [
        "Chaque utilisateur initial partage le mot de passe de démo : password.",
        "Une connexion valide renvoie un token Bearer fictif et un objet user (id, name, username, email, role).",
        "Un mauvais mot de passe ou un utilisateur inconnu renvoie 401 avec un payload d'erreur explicite.",
        "Envoyez Authorization: Bearer <token> sur GET /api/auth/me pour récupérer l'utilisateur connecté.",
      ],
    },
    "2026-09-08-resources": {
      title: "Ressources REST actives",
      teaser: "Users, posts et plus — CRUD complet",
      hint: "/docs#resources — liste des API actives",
      summary:
        "Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications et Countries — CRUD complet avec pagination.",
      details: [
        "Format de liste standard : { data, pagination } avec page, limit, total et totalPages.",
        "Prise en charge des query params de recherche, tri, filtres, délai simulé et code d'erreur forcé.",
        "La base partagée de production est réinitialisée chaque jour — idéale pour les démos, pas pour un stockage durable.",
        "Catalogue lisible par machine disponible sur /openapi.json pour Postman, Swagger et les outils IA.",
      ],
    },
  },
  catalog: {
    auth: {
      title: "Auth",
      summary:
        "Authentification fictive par identifiant/mot de passe. Des identifiants valides renvoient un token Bearer ; invalides, un 401.",
    },
    users: {
      title: "Users",
      summary: "CRUD d'utilisateurs fictifs avec recherche, filtres par rôle et pagination.",
    },
    posts: {
      title: "Posts",
      summary: "Articles type blog liés aux utilisateurs, avec tags et statut de publication.",
    },
    comments: {
      title: "Comments",
      summary: "Commentaires liés aux articles — nom, e-mail et contenu.",
    },
    albums: {
      title: "Albums",
      summary: "Albums photos liés aux utilisateurs. Les photos référencent albumId.",
    },
    photos: {
      title: "Photos",
      summary: "Photos d'album avec url et thumbnailUrl.",
    },
    todos: {
      title: "Todos",
      summary: "Tâches simples avec indicateur de complétion, liées aux utilisateurs.",
    },
    products: {
      title: "Products",
      summary: "Articles de catalogue avec prix, stock, catégorie et imageUrl.",
    },
    notifications: {
      title: "Notifications",
      summary: "Notifications utilisateur avec type et état de lecture.",
    },
    countries: {
      title: "Countries",
      summary: "Fiches pays avec code ISO, région, population et drapeau.",
    },
  },
};

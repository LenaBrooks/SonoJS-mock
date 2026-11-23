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

export const es: Messages = {
  common: {
    home: "Inicio",
    docs: "Documentación",
    playground: "Playground",
    contact: "Contacto",
    preview: "Vista previa",
    search: "Buscar",
    loading: "Cargando…",
    save: "Guardar",
    saving: "Guardando…",
    cancel: "Cancelar",
    create: "Crear",
    edit: "Editar",
    delete: "Eliminar",
    searchPlaceholder: "Buscar APIs…",
    noResults: "Sin resultados",
    new: "Nuevo",
    inDevelopment: "En desarrollo",
    actions: "Acciones",
    copy: "Copiar",
    copied: "Copiado",
    live: "Activa",
    open: "Abrir",
    tryIt: "Probar",
    learnMore: "Más información",
    back: "Volver",
    close: "Cerrar",
    yes: "Sí",
    no: "No",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Mensaje",
    send: "Enviar",
    sending: "Enviando…",
    networkError: "Error de red",
    temporary: "API temporal",
    temporaryBadge: "Al instante",
    generator: "Generador",
    imageGenerator: "Imágenes",
    jsonWorkbench: "Taller JSON",
  },
  header: {
    primaryNav: "Navegación principal",
    whatsNew: "Novedades",
    whatsNewTitle: "Novedades",
    whatsNewSubtitle: "Últimas mejoras y funciones",
    latest: "Último",
    contact: "Acerca de",
    menu: "Menú",
    openMenu: "Abrir menú",
    appearance: "Apariencia",
    lightMode: "Cambiar a modo claro",
    darkMode: "Cambiar a modo oscuro",
    light: "Claro",
    dark: "Oscuro",
    apiLangGroup: "Idioma",
    english: "English",
    persian: "فارسی",
    github: "GitHub",
    githubStars: "GitHub — dale una estrella al proyecto",
  },
  home: {
    tagline:
      "APIs REST ficticias y gratuitas con JSON en tiempo real. Prototipa interfaces, prueba autenticación y haz peticiones a endpoints reales sin configurar ningún backend.",
    taglineNote: "",
    resourcesTitle: "Recursos",
    resourcesBlurb:
      "Diez APIs REST activas con documentación y ejemplos. Datos de demostración compartidos en producción.",
    searchLabel: "Buscar APIs y endpoints",
    searchPlaceholder: "Buscar usuarios, entradas, auth…",
    temporaryCtaTitle: "API temporal",
    temporaryCtaBody:
      "Pega tu JSON y crea una API efímera, o publícala desde el generador de datos ficticios. Trata el enlace como una contraseña: hasta 5 activas a la vez por navegador.",
    temporaryCtaLink: "Crear una API temporal",
  },
  notFound: {
    title: "Página no encontrada",
    body: "Esa URL no forma parte de MockData. Vuelve al inicio o consulta la documentación.",
    home: "Inicio",
    docs: "Documentación",
  },
  blog: {
    title: "Blog",
    description:
      "Guías y apuntes sobre datos ficticios, JSON, APIs y flujos de desarrollo frontend, escritos para quienes crean productos con MockData.",
    all: "Todo",
    emptyTitle: "Sin publicaciones",
    emptyBody: "Los artículos publicados aparecerán aquí. Vuelve pronto.",
    emptyCategoryTitle: "Sin publicaciones",
    emptyCategoryBody: "Prueba con otra categoría o explora todos los artículos.",
    readingTime: "{n} min de lectura",
    previousPage: "Anterior",
    nextPage: "Siguiente",
    pageStatus: "Página {page} de {total}",
    paginationNav: "Paginación",
    categoriesNav: "Categorías",
    backToBlog: "Blog",
    previousArticle: "Anterior",
    nextArticle: "Siguiente",
    relatedArticles: "Artículos relacionados",
    categories: {
      news: "Novedades",
      "mock-data": "Datos ficticios",
      json: "JSON",
      api: "API",
      frontend: "Frontend",
    },
  },
  contact: {
    title: "Contacta con nosotros",
    intro:
      "¿Dudas, sugerencias o ideas? Envíanos un mensaje breve y llegará directo a nuestra bandeja de entrada. También puedes escribirnos a",
    name: "Nombre",
    email: "Correo electrónico",
    topic: "Asunto",
    message: "Mensaje",
    send: "Enviar mensaje",
    sending: "Enviando…",
    success: "Mensaje enviado. ¡Gracias! Te responderemos pronto.",
    chooseTopic: "Selecciona el motivo de tu consulta.",
    pickTopic: "¿En qué podemos ayudarte?",
    topics: {
      question: "Tengo una duda",
      bug: "Informar de un error",
      feature: "Proponer una mejora",
      other: "Otro motivo",
    },
  },
  docs: {
    title: "Documentación",
    navLabel: "Documentación",
    intro:
      "MockData ofrece recursos REST ficticios en formato JSON. Usa los recursos públicos libremente, prueba el inicio de sesión con Auth, lanza peticiones reales en el Playground, genera datos de prueba en /generator, obtén imágenes de relleno en /image-generator, abre el Taller JSON en /json o publica tu propia API temporal. En producción se utiliza una única base de datos compartida para los recursos del catálogo — consulta Datos compartidos.",
    toc: {
      intro: "Introducción",
      whatsNew: "Novedades",
      temporary: "API temporal",
      generator: "Generador de datos ficticios",
      imageGenerator: "Generador de imágenes",
      jsonWorkbench: "Taller JSON",
      sharedData: "Datos compartidos",
      language: "Idioma",
      resources: "Recursos",
      openapi: "OpenAPI",
      requests: "Peticiones",
      errors: "Errores",
      rateLimit: "Límites de peticiones",
      reset: "Restablecer datos de prueba",
    },
    whatsNewTitle: "Novedades",
    whatsNewBlurb:
      "Funciones lanzadas para desarrolladores, ordenadas de más reciente a más antigua. Haz clic en una tarjeta para ver los detalles. Tienes esta misma lista en el icono de la campana de la cabecera.",
    temporaryTitle: "API temporal",
    temporaryBody:
      "¿Necesitas un endpoint REST desechable con tu propio JSON? Las APIs temporales son independientes del catálogo compartido. Pega tu JSON, elige cuánto tiempo estará activo y obtén una URL pública en /api/t/… También puedes publicarla desde el generador de datos ficticios mediante Crear API.",
    temporaryBullets: [
      "Sin registro: créala desde /temporary en el navegador (o con Crear API en /generator).",
      "Duración a elegir: 1, 6, 12 o 24 horas (12 h por defecto).",
      "Haz peticiones GET, POST, PATCH y DELETE a la URL pública /api/t/… como en cualquier colección o documento.",
      "Trata el enlace como una contraseña: quien lo tenga podrá leer y modificar los datos hasta que caduque.",
      "Cuando una API caduca, las peticiones devuelven HTTP 410.",
    ],
    temporaryLimitsTitle: "Límites de la API temporal",
    temporaryLimitsBullets: [
      "Hasta 5 APIs temporales activas a la vez por navegador.",
      "Hasta 20 creaciones por IP cada hora móvil (HTTP 429 si superas el límite).",
      "Tamaño máximo del JSON: 64 KB.",
      "Profundidad máxima de anidación: 8 niveles; arrays de hasta 500 elementos; objetos de hasta 200 claves.",
      "Se mantiene el límite global de /api (unas 60 peticiones por minuto e IP).",
    ],
    generatorTitle: "Generador de datos ficticios",
    generatorBody:
      "Genera JSON realista para tus interfaces sin escribir fixtures a mano. Funciona íntegramente en el navegador. Elige un tipo de dato, los campos y la cantidad, y luego copia, descarga o publica mediante una API temporal.",
    generatorBullets: [
      "Abre /generator: tipos de personas, comercio electrónico, contenido, multimedia, empresa y ubicación.",
      "Elige entre cuerpo POST (sin id ni marcas de tiempo) o registro de API (id + createdAt + updatedAt).",
      "El idioma FA usa paquetes locales en persa; EN utiliza paquetes en inglés de varios países.",
      "Genera hasta 1.000 registros; Crear API está limitado por las restricciones temporales (500 elementos / 64 KB).",
      "Las selecciones y resultados se conservan al navegar por la web (se limpian al recargar la página completa).",
    ],
    imageGeneratorTitle: "Generador de imágenes",
    imageGeneratorBody:
      "¿Necesitas una URL de imagen provisional para maquetar? Usa marcadores SVG de MockData o fotos reales aleatorias (mediante redirección a Picsum). Indica ancho y alto, copia el enlace y pégalo en img, CSS o cualquier campo de imagen.",
    imageGeneratorBullets: [
      "Abre /image-generator: marcadores SVG o fotos reales.",
      "Formato de URL pública: /image/{width}/{height} para SVG; añade ?type=real para fotos.",
      "Aleatoria por defecto. El parámetro opcional ?seed= mantiene siempre los mismos colores SVG o la misma foto real.",
      "Tamaños listos para avatar, miniatura, perfil, publicación, portada, banner e historia.",
    ],
    jsonWorkbenchTitle: "Taller JSON",
    jsonWorkbenchBody:
      "Taller JSON (en desarrollo): un espacio único en el navegador para trabajar con JSON en el día a día mientras desarrollas interfaces: formatea, compara, busca y convierte sin salir de MockData.",
    jsonWorkbenchBullets: [
      "Abre el Taller JSON en /json y elige una herramienta: el espacio de trabajo se actualiza al instante (compártelo con ?tool=).",
      "Principal: Formatear, Vista de árbol, Buscar, JSONPath y Comparar estructura.",
      "Transformar: TypeScript, Zod, JSON Schema, YAML y CSV.",
      "Utilidades: ordenar claves, eliminar valores vacíos, aplanar, escapar/reparar, seleccionar/omitir campos y más.",
      "Se ejecuta en tu navegador: el JSON no se envía a ningún servidor.",
      "Sigue evolucionando: iremos añadiendo más herramientas y mejoras.",
    ],
    sharedDataTitle: "Datos compartidos",
    sharedDataBody:
      "Todos los visitantes comparten la misma base de datos en vivo. Las altas, modificaciones y borrados son reales y visibles para todo el mundo. En producción, los datos iniciales se restablecen automáticamente una vez al día mediante GET /api/cron/reset. Úsalo para prototipos y demostraciones, nunca para guardar información que necesites conservar.",
    languageTitle: "Idioma",
    languageBody:
      "Todos los textos de los recursos están en inglés por defecto. Pasa lang=fa para recibir respuestas en persa con nombres, usuarios, correos, teléfonos y textos iraníes. No se utilizan cookies ni la cabecera Accept-Language, solo el parámetro de consulta. El selector de idioma del sitio (English | فارسی) también aplica esta preferencia en Playground y Vista previa.",
    languageBullets: [
      "Ejemplo: GET /api/users?lang=fa",
      "Las respuestas en FA incluyen Content-Language: fa y un objeto font (Vazirmatn) para su renderizado.",
      "Al elegir فارسی en la cabecera, la interfaz cambia a RTL y añade lang=fa en el Playground.",
    ],
    resourcesTitle: "Recursos",
    resourcesBlurb:
      "Endpoints activos que puedes consultar hoy mismo, junto con una breve hoja de ruta de lo que está por venir.",
    colResource: "Recurso",
    colBasePath: "Ruta base",
    colStatus: "Estado",
    colDocs: "Documentación",
    statusLive: "Activa",
    statusDev: "En desarrollo",
    statusSoon: "Próximamente",
    openapiTitle: "OpenAPI",
    openapiBody:
      "Catálogo legible por máquina de todos los endpoints activos (Auth, Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, Countries y restablecimiento de administración). Impórtalo en Postman, Swagger UI o herramientas de IA.",
    download: "Descargar",
    requestsTitle: "Peticiones",
    requestsBody:
      "Los listados devuelven data + pagination. Los elementos individuales devuelven { data }.",
    errorsTitle: "Errores",
    errorsBody:
      "Los fallos devuelven un objeto error. Códigos de estado: 400 validación, 401 no autorizado, 404 no encontrado, 429 límite de peticiones alcanzado, 500 error del servidor. Pasa ?status=500 (400–599) para forzar un error en tus demostraciones de interfaz.",
    rateLimitTitle: "Límites de peticiones",
    rateLimitBody:
      "Para garantizar un uso justo para todos, cada IP puede llamar a /api/* unas {limit} veces por minuto. Si superas ese umbral recibirás un HTTP 429 (demasiadas peticiones). La respuesta incluye además cabeceras X-RateLimit para que sepas cuántas llamadas te quedan.",
    resetTitle: "Restablecer datos de prueba",
    resetBody:
      "Todos compartimos la misma base de datos de demostración. En el entorno en vivo, los datos vuelven a su estado inicial cada 24 horas de forma automática. Si dispones de la clave de administración, puedes vaciar y recargar los datos iniciales al instante con el siguiente formulario.",
    resetPanel: {
      intro:
        "Introduce la clave de administración para vaciar las tablas de prueba y recargar los datos por defecto.",
      placeholder: "Clave de administración",
      button: "Restablecer ahora",
      resetting: "Restableciendo…",
      needSecret: "Introduce primero la clave de administración.",
      confirm:
        "Esta acción vaciará las tablas de prueba y recargará los datos por defecto. ¿Continuar?",
      networkError: "Error de red. ¿Está el servidor en marcha?",
      donePrefix: "Restablecimiento completado",
    },
    colIndex: "#",
  },
  resourceDocs: {
    endpoints: "Endpoints",
    queryParams: "Parámetros de consulta",
    examples: "Ejemplos",
    response: "Respuesta",
    tryExample: "Probar",
    preview: "Vista previa",
    playground: "Playground",
    backToResources: "Volver a recursos",
  },
  playground: {
    title: "Playground",
    blurb:
      "Envía peticiones reales contra las APIs de MockData. Inspecciona el JSON en el navegador: tu última petición por recurso se conserva mientras navegas por el sitio.",
    resource: "Recurso",
    action: "Acción",
    send: "Enviar",
    sending: "Enviando…",
    response: "Respuesta",
    request: "Petición",
    body: "Cuerpo",
    query: "Consulta",
    headers: "Cabeceras",
    correct: "Correcta",
    wrong: "Incorrecta",
    password: "Contraseña",
    user: "Usuario",
    pickUser: "Elige un usuario",
    loadError: "No se pudieron cargar las opciones del selector",
    emptyResponse: "Aún no hay respuesta",
    startHint: "Elige un recurso y envía una petición para empezar.",
    types: "TS",
    json: "JSON",
  },
  temporary: {
    title: "API temporal",
    blurb: "Pega tu JSON y crea una API efímera.",
    privacyNote:
      "Trata el enlace como una contraseña. Hasta que caduque, cualquiera que lo tenga podrá leer y modificar los datos. Hasta 5 activas a la vez por navegador.",
    jsonLabel: "JSON",
    durationLabel: "Duración",
    duration1h: "1 hora",
    duration6h: "6 horas",
    duration12h: "12 horas",
    duration24h: "24 horas",
    checkJson: "Comprobar",
    jsonValid: "Perfecto: listo para crear.",
    jsonHint: "Compruébalo cuando quieras o créala directamente.",
    create: "Crear API",
    creating: "Creando…",
    acceptFix: "Aplicar corrección y crear",
    rejectFix: "Seguir editando",
    fixedPreview: "Hemos corregido algunos fallos. Revísalo y crea la API.",
    myApis: "Mis APIs",
    emptyList: "Aún no tienes APIs activas.",
    copyUrl: "Copiar",
    delete: "Eliminar",
    deleteAll: "Eliminar todas",
    deleting: "…",
    confirmDelete: "¿Eliminar esta API?",
    confirmDeleteBody: "La URL dejará de funcionar de inmediato.",
    confirmDeleteAll: "¿Eliminar todas las APIs?",
    confirmDeleteAllBody: "Todas las URLs de esta lista dejarán de funcionar de inmediato.",
    cancel: "Cancelar",
    limitReached: "Has alcanzado el límite de 5 APIs.",
    limitReachedBody: "Elimina alguna de la lista inferior o espera a que caduque.",
    createdTitle: "Creada",
    openApi: "Abrir",
    slotsLabel: "{n} / 5",
    maxActive: "",
    sampleJson: `[
  { "id": "1", "firstName": "Lucía", "lastName": "Navarro", "role": "admin" },
  { "id": "2", "firstName": "Javier", "lastName": "Ortega", "role": "member" },
  { "id": "3", "firstName": "Elena", "lastName": "Serrano", "role": "member" }
]`,
    issues: {
      EMPTY: "Pega un objeto o un array JSON.",
      INVALID_JSON: "JSON no válido: revisa las comas, comillas y llaves.",
      TOO_LARGE: "El JSON es demasiado grande (máx. {max} KB).",
      NOT_OBJECT_OR_ARRAY: "La raíz debe ser un objeto { } o un array [ ].",
      TOO_DEEP: "Anidación excesiva (profundidad máx. {max}).",
      ARRAY_TOO_LONG: "El array es demasiado largo (máx. {max} elementos).",
      TOO_MANY_KEYS: "Demasiadas claves en un mismo objeto (máx. {max}).",
      UNSAFE_KEY: "La clave no segura «{key}» no está permitida.",
      AUTO_FIXED: "Se han eliminado comas finales o claves no seguras.",
    },
  },
  imageGenerator: {
    title: "Generador de imágenes",
    blurb:
      "Para tus proyectos puedes usar SVGs de MockData o fotos reales aleatorias con dimensiones personalizadas. Inserta el enlace directamente en una etiqueta img, en CSS o en cualquier campo de imagen.",
    modeSvg: "SVG",
    modeReal: "Imagen real",
    width: "Ancho",
    height: "Alto",
    generate: "Generar",
    generating: "Generando…",
    yourUrl: "Tu URL de API",
    preview: "Vista previa",
    useInProject: "Úsala en tu proyecto",
    tabUrl: "URL",
    tabHtml: "HTML",
    tabCss: "CSS",
    tabJs: "JavaScript",
    tabCurl: "cURL",
    readySizes: "Tamaños predefinidos",
    sizes: {
      avatar: "Avatar",
      thumbnail: "Miniatura",
      profile: "Perfil",
      square: "Cuadrada",
      post: "Publicación",
      cover: "Portada",
      banner: "Banner",
      story: "Historia",
    },
  },
  jsonWorkbench: {
    title: "Taller JSON",
    blurb:
      "Pega tu JSON una sola vez y elige qué quieres hacer: formatear, buscar, convertir y mucho más sin volver a pegarlo.",
    toolNavLabel: "Herramientas del taller",
    source: {
      title: "Tu JSON",
      hint: "Pégalo aquí una vez. Todas las acciones siguientes usan este documento.",
      sample: "Cargar ejemplo",
      valid: "El JSON es válido.",
      needJson: "Pega primero tu JSON a la izquierda.",
      fixFirst: "Corrige el error de sintaxis en Tu JSON e inténtalo de nuevo.",
      pickAction: "¿Qué quieres hacer?",
      useResult: "Usar como JSON",
      diffHint: "Tu JSON es el lado A. Pega el otro documento abajo como B.",
      escapedInput: "Cadena escapada",
      schemaInput: "JSON Schema",
      fromSchemaNote:
        "Pega un JSON Schema abajo para generar un documento de ejemplo que podrás llevar a Tu JSON.",
    },
    categories: {
      core: "Principal",
      transform: "Transformar",
      utility: "Utilidades",
    },
    labels: {
      input: "Entrada",
      output: "Salida",
      tree: "Árbol",
      matches: "Coincidencias",
      jsonA: "JSON A",
      jsonB: "JSON B",
      diffResult: "Diferencias",
      jsonpath: "JSONPath",
      result: "Resultado ({count})",
    },
    actions: {
      format: "Formatear",
      minify: "Minificar",
      showTree: "Ver árbol",
      search: "Buscar",
      clearSearch: "Limpiar búsqueda",
      replace: "Reemplazar",
      replaceAll: "Reemplazar todo",
      prevMatch: "Coincidencia anterior",
      nextMatch: "Siguiente coincidencia",
      compare: "Comparar",
      run: "Ejecutar",
      runPath: "Ejecutar",
      toTypescript: "Generar tipos",
      toZod: "Generar Zod",
      toSchema: "Generar esquema",
      swapDirection: "Invertir",
      sortKeys: "Ordenar claves",
      removeEmpty: "Eliminar vacíos",
      flatten: "Aplanar",
      unflatten: "Desaplanar",
      escape: "Escapar",
      unescape: "Desescapar",
      repair: "Reparar",
      fromSchema: "Generar ejemplo",
      extractKeys: "Extraer claves",
      extractValues: "Extraer valores",
      pick: "Seleccionar campos",
      omit: "Omitir campos",
      compareStructure: "Comparar estructura",
      clear: "Limpiar",
      expandAll: "Expandir todo",
      collapseAll: "Contraer todo",
      copyPath: "Copiar ruta",
      copyValue: "Copiar valor",
    },
    errors: {
      empty: "Pega algo de JSON primero.",
      invalid: "JSON no válido.",
      unexpectedEnd: "Final inesperado del JSON.",
      unexpectedToken: "Token inesperado: {token}",
      expectedPropertyName: "Se esperaba un nombre de propiedad entre comillas dobles.",
      expectedCommaOrBrace: "Se esperaba ',' o '}' después del valor de una propiedad.",
      expectedCommaOrBracket: "Se esperaba ',' o ']' después de un elemento del array.",
      expectedColon: "Se esperaba ':' después del nombre de una propiedad.",
      unterminatedString: "Cadena sin cerrar.",
      badControlChar: "Carácter de control no válido en una cadena.",
      badEscape: "Secuencia de escape no válida en una cadena.",
      trailingChar: "Caracteres inesperados después del valor JSON.",
      objectKeyExpected: "Se esperaba la clave de un objeto.",
      unexpectedCharacter: "Carácter inesperado: {char}",
      invalidCharacter: "Carácter no válido: {char}",
      invalidUnicode: "Escape Unicode no válido: {chars}",
      couldNotRepair: "No se pudo reparar este JSON.",
      atLineColumn: "línea {line}, columna {column}",
      atLine: "línea {line}",
      atPosition: "posición {position}",
    },
    types: {
      object: "objeto",
      array: "array",
      string: "cadena",
      number: "número",
      boolean: "booleano",
      null: "null",
    },
    validate: {
      idleHint: "Pega un JSON y valídalo. Solo se comprueba la sintaxis estándar de JSON.",
      validTitle: "JSON válido",
      validBody: "Tipo raíz: {type}",
      invalidTitle: "JSON no válido",
    },
    tree: {
      idleTitle: "El árbol aparecerá aquí",
      idleBody: "Pega un JSON a la izquierda y pulsa Ver árbol.",
      errorTitle: "No se puede generar el árbol",
      errorBody: "Corrige primero el error del JSON e inténtalo de nuevo.",
    },
    search: {
      query: "Buscar",
      replaceWith: "Reemplazar por",
      matchCount: "{current} de {total}",
      noMatches: "Sin coincidencias",
      noMatchesBody: "No hay coincidencias para esa búsqueda ni en claves ni en valores.",
      idleTitle: "Las coincidencias aparecerán aquí",
      idleBody: "Escribe un término y pulsa Buscar. Busca tanto en claves como en valores.",
      errorTitle: "No se puede buscar",
      errorBody: "Corrige primero el error del JSON y vuelve a buscar.",
      kindKey: "Clave",
      kindValue: "Valor",
      activeHint: "{kind} · {path}",
      replacedCount: "Se han reemplazado {count} coincidencia(s).",
    },
    diff: {
      idleTitle: "Las diferencias aparecerán aquí",
      idleBody: "Pega el JSON A y el JSON B, y luego compáralos.",
      identical: "Sin diferencias: ambos documentos tienen una estructura idéntica.",
      added: "Añadido / en B",
      removed: "Eliminado / en A",
      changed: "Modificado",
      sideEmpty: "No hay contenido en este lado.",
      emptyA: "El JSON A está vacío.",
      emptyB: "El JSON B está vacío.",
      bothInvalid: "Tanto el JSON A como el JSON B son inválidos.",
    },
    jsonpath: {
      whatIs:
        "JSONPath extrae valores de un JSON anidado, como un selector CSS para datos. Haz clic en un ejemplo de abajo.",
      hintTitle: "Sintaxis",
      hintBody: `$              Raíz
.users         Propiedad
[*]            Todos los elementos del array
[0]            Primer elemento`,
      idleTitle: "El resultado aparecerá aquí",
      idleBody: "Introduce una ruta y ejecuta la consulta.",
      errorTitle: "No se puede ejecutar la consulta",
      errorBody: "Corrige el error en el JSON o en la ruta e inténtalo de nuevo.",
      noResults: "Sin resultados para esta ruta.",
      emptyPath: "Introduce una expresión JSONPath.",
    },
    transform: {
      tsIdleTitle: "El código TypeScript aparecerá aquí",
      tsIdleBody: "Pega un JSON y genera sus tipos.",
      zodIdleTitle: "El esquema Zod aparecerá aquí",
      zodIdleBody: "Pega un JSON y genera un esquema de Zod.",
      schemaExplain: "JSON ↔ Schema",
      schemaUse:
        "Infiere un JSON Schema a partir de Tu JSON, o invierte el sentido para generar un documento de ejemplo desde un esquema.",
      schemaIdleTitle: "El JSON Schema aparecerá aquí",
      schemaIdleBody: "Pega un JSON y genera su esquema.",
      yamlIdleTitle: "El YAML aparecerá aquí",
      yamlIdleBody: "Tu JSON se convierte a YAML en tiempo real.",
      yamlToJsonIdle: "Pega YAML arriba para convertirlo en Tu JSON.",
      yamlApplied: "Convertido: se ha actualizado Tu JSON.",
      csvIdleTitle: "El CSV aparecerá aquí",
      csvIdleBodyJson:
        "Convierte Tu JSON: un objeto único, un array de objetos o un objeto que envuelva una tabla.",
      csvIdleBodyCsv: "Pega un CSV con fila de cabecera y conviértelo a JSON.",
      csvToJsonIdle: "Pega CSV arriba para convertirlo en Tu JSON.",
      csvApplied: "Convertido: se ha actualizado Tu JSON.",
      csvUnsupported: "No se ha podido convertir este JSON a CSV.",
    },
    utilities: {
      sortAsc: "A → Z",
      sortDesc: "Z → A",
      sortIdleTitle: "Listo para ordenar",
      sortIdleBody: "Elige A→Z o Z→A: las claves ordenadas aparecerán en la salida.",
      sortApplied: "Claves ordenadas: revisa la salida abajo.",
      removeOptions: "Eliminar estos valores",
      removeNull: "null",
      removeEmptyString: '""',
      removeEmptyArray: "[]",
      removeEmptyObject: "{}",
      removeNullLabel: "valores null",
      removeEmptyStringLabel: "cadenas vacías",
      removeEmptyArrayLabel: "arrays vacíos",
      removeEmptyObjectLabel: "objetos vacíos",
      removePreserveHint: "Los valores false y 0 se conservan siempre.",
      removeIdleTitle: "El JSON limpio aparecerá aquí",
      removeIdleBody: "Elige qué quieres eliminar y ejecuta la acción.",
      nestedLabel: "Anidado",
      flatLabel: "Plano",
      flattenHint: "Convierte objetos anidados en claves con puntos — p. ej. address.city y skills.0.",
      flattenUse:
        "Muy práctico para hojas de cálculo, archivos .env, índices de búsqueda o APIs que solo aceptan pares clave/valor planos.",
      flattenIdleTitle: "Listo para aplanar",
      flattenIdleBody: "Las claves anidadas pasan a ser rutas con puntos en la salida.",
      flattenApplied: "Aplanado: revisa la salida abajo.",
      unflattenHint: "Las rutas con puntos reconstruyen objetos; los segmentos numéricos reconstruyen arrays.",
      unflattenUse:
        "Úsalo cuando tengas claves planas (user.name, skills.0) y necesites recuperar el JSON anidado.",
      unflattenIdleTitle: "El JSON anidado aparecerá aquí",
      unflattenIdleBody: "Pega un objeto con rutas planas y desaplánalo.",
      escapeIdleTitle: "La cadena escapada aparecerá aquí",
      escapeIdleBody: "Tu JSON se escapará para poder usarlo dentro de una cadena.",
      escapeHint:
        "Convierte tu JSON en una única cadena escapada: las comillas y saltos de línea pasan a \u0022 / \n para incrustarlo dentro de otra cadena o configuración.",
      escapeUse:
        "Ideal para incrustar JSON en código, variables de entorno o registros sin romper las comillas exteriores.",
      unescapeIdleTitle: "El JSON aparecerá aquí",
      unescapeIdleBody: "Pega una cadena JSON escapada y desescápala.",
      repairHint:
        "Reparación en varias pasadas para JSON roto, truncado, con comentarios o a medio editar.",
      repairUse:
        "Corrige comillas, comas y llaves; elimina comentarios y bloques de código; admite literales de Python/JS, JSONP, tipos de MongoDB, NDJSON, documentos truncados y restos de edición.",
      repairAlreadyValid: "Ya estaba correcto. Simplemente se ha formateado.",
      repairFormatted: "Formateado.",
      repairReady: "Hemos corregido todo lo posible.",
      repairApplied: "Corregido.",
      repairAppliedToSource: "Aplicado a Tu JSON.",
      repairFailedTitle: "No se pudo reparar por completo",
      repairFailedAt: "{message} (línea {line}, columna {column})",
      repairPreview: "Reparado",
      repairFixes: {
        "trailing-commas": "Comas finales",
        "single-quotes": "Comillas simples",
        "smart-quotes": "Comillas tipográficas",
        "unquoted-keys": "Claves sin comillas",
        "missing-commas": "Comas que faltaban",
        "missing-brackets": "Llaves o corchetes sin cerrar",
        comments: "Comentarios",
        "code-fence": "Bloque de código Markdown",
        "python-literals": "Literales de Python",
        "js-undefined": "undefined → null",
        jsonp: "Envoltorio JSONP",
        "escaped-string": "Cadena JSON escapada",
        mongodb: "Tipos de MongoDB",
        ndjson: "NDJSON → array",
        ellipsis: "Puntos suspensivos",
        "string-concat": "Concatenación de cadenas",
        whitespace: "Espacios / formato",
        truncated: "Truncado / incompleto",
        "mid-edit-junk": "Restos de edición",
      },
      repairIdleTitle: "El JSON reparado aparecerá aquí",
      repairIdleBody:
        "Pega texto roto o casi JSON en Tu JSON: la reparación se ejecuta en vivo en la salida.",
      fromSchemaHint:
        "Esquema → JSON de ejemplo a partir de type, properties, required, items, enum y default.",
      fromSchemaIdleTitle: "El JSON de ejemplo aparecerá aquí",
      fromSchemaIdleBody: "Pega un JSON Schema abajo y genera un ejemplo.",
      extractHint:
        'Devuelve pares de ruta final + valor juntos — p. ej. { path: "address.city", value: "Madrid" }.',
      extractIdleTitle: "Las claves y valores aparecerán aquí",
      extractIdleBody: "Selecciona campos arriba para extraer sus rutas y valores.",
      extractKeysHint: "Devuelve las rutas de claves anidadas con notación de puntos (arrays como .0).",
      extractKeysIdleTitle: "Las claves aparecerán aquí",
      extractKeysIdleBody: "Pega un JSON y extrae sus claves.",
      extractValuesHint: "Recopila los valores finales (primitivos y null) en profundidad.",
      extractValuesIdleTitle: "Los valores aparecerán aquí",
      extractValuesIdleBody: "Pega un JSON y extrae sus valores.",
      fieldsLabel: "Campos de Tu JSON",
      fieldsClickHint:
        "Haz clic en las rutas para seleccionarlas, sin escribir nada. Las rutas anidadas usan notación de puntos.",
      fieldsSelectAll: "Seleccionar todo",
      fieldsClear: "Limpiar",
      fieldsEmpty: "Este JSON no tiene campos seleccionables.",
      pickHint: "Conserva solo los campos que elijas: haz clic en los campos de abajo.",
      pickIdleTitle: "El resultado aparecerá aquí",
      pickIdleBody: "",
      omitHint: "Elimina los campos que elijas: haz clic en los campos de abajo.",
      omitIdleTitle: "El resultado aparecerá aquí",
      omitIdleBody: "",
      compareHint: "Pega dos documentos JSON en paralelo. Solo estructura: los valores se ignoran.",
      compareUse:
        "Las claves ausentes se marcan en rojo en A, las añadidas en verde en B y las diferencias de tipo en ámbar en ambos.",
      compareBack: "Volver al taller",
      compareIdleTitle: "Pega ambos documentos JSON",
      compareIdleBody: "Añade JSON a izquierda y derecha para comparar su estructura.",
      compareIdentical: "Misma estructura: los tipos y las claves coinciden.",
      compareMissing: "Faltan (solo en A)",
      compareExtra: "Añadidos (solo en B)",
      compareType: "Tipo distinto",
    },
    empty: {
      formatTitle: "El JSON formateado aparecerá aquí",
      formatBody: "Pega un JSON a la izquierda y pulsa Formatear.",
    },
    soon: {
      badge: "Próximamente",
      title: "{tool} llegará muy pronto",
      body: "Esta herramienta aparece listada para que veas el taller al completo. Se activará en una próxima fase.",
    },
    tools: {
      format: "Formatear",
      minify: "Minificar",
      validate: "Validar",
      tree: "Vista de árbol",
      search: "Buscar",
      diff: "Diferencias",
      jsonpath: "JSONPath",
      convert: "Convertir",
      toTypescript: "TypeScript",
      toZod: "Zod",
      toSchema: "JSON Schema",
      yaml: "YAML",
      csv: "CSV",
      sortKeys: "Ordenar claves",
      removeEmpty: "Eliminar vacíos",
      flatten: "Aplanar",
      unflatten: "Desaplanar",
      escape: "Escapar",
      unescape: "Desescapar",
      repair: "Reparar",
      extract: "Extraer claves y valores",
      extractKeys: "Extraer claves",
      extractValues: "Extraer valores",
      pick: "Seleccionar",
      omit: "Omitir",
      compareStructure: "Comparar estructura",
    },
  },
  generator: {
    title: "Generador de datos ficticios",
    subtitle: "Genera datos realistas para tus proyectos frontend.",
    chooseType: "Tipos de datos",
    searchPlaceholder: "Buscar datos…",
    noTopics: "No hay tipos de datos que coincidan.",
    fieldsLegend: "Campos",
    moreFields: "Más campos",
    lessFields: "Ocultar opcionales",
    optionalFields: "Campos opcionales",
    records: "Registros",
    customQty: "Personalizado",
    country: "País",
    countrySearch: "Buscar países…",
    selectPlaceholder: "Elige un tipo de dato…",
    outputMode: "Formato de salida",
    modePayload: "Cuerpo POST",
    modeApi: "Registro de API",
    modePayloadHint: "Sin id ni marcas de tiempo: listo para enviar en un POST de creación.",
    modeApiHint: "Incluye id, createdAt y updatedAt como una fila almacenada en la API.",
    jsonType: "JSON",
    viewJson: "JSON",
    viewType: "TS",
    generate: "Generar {n} registros",
    generating: "Generando {n} registros…",
    generateAgain: "Volver a generar",
    refresh: "Regenerar",
    generated: "{n} registros generados",
    download: "Descargar",
    createApi: "Crear API",
    createSuccess: "API temporal creada.",
    createBlockedArray:
      "La API temporal admite hasta 500 registros. Reduce la cantidad para publicarla.",
    createBlockedSize:
      "Este JSON supera el límite de la API temporal (64 KB). Reduce la cantidad o quita campos.",
    openTemporary: "Gestionar en Temporales",
    emptyTitle: "Elige un tipo de dato",
    emptyBody: "Selecciona una opción arriba para empezar a generar datos realistas.",
    duration1h: "1 h",
    duration6h: "6 h",
    duration12h: "12 h",
    duration24h: "24 h",
    countries: {
      all: "Todos los países",
      IR: "Irán",
      DE: "Alemania",
      US: "Estados Unidos",
      GB: "Reino Unido",
      FR: "Francia",
      NL: "Países Bajos",
      JP: "Japón",
      CA: "Canadá",
    },
    categories: {
      people: "Personas",
      ecommerce: "Comercio electrónico",
      content: "Contenido",
      media: "Multimedia",
      business: "Empresa",
      location: "Ubicación",
    },
    fields: {
      id: "id",
      name: "Nombre",
      username: "Nombre de usuario",
      email: "Correo electrónico",
      avatar: "Avatar",
      phone: "Teléfono",
      company: "Empresa",
      location: "Ubicación",
      age: "Edad",
      role: "Rol",
      jobTitle: "Puesto",
      department: "Departamento",
      bio: "Biografía",
      website: "Sitio web",
      createdAt: "Fecha de creación",
      updatedAt: "Última actualización",
      hiredAt: "Fecha de contratación",
      ordersCount: "Número de pedidos",
      totalSpent: "Total gastado",
      postsCount: "Número de publicaciones",
      price: "Precio",
      image: "Imagen",
      category: "Categoría",
      description: "Descripción",
      brand: "Marca",
      stock: "Stock",
      rating: "Valoración",
      sku: "SKU",
      colors: "Colores",
      orderId: "ID de pedido",
      customer: "Cliente",
      items: "Artículos",
      total: "Total",
      status: "Estado",
      orderDate: "Fecha del pedido",
      paymentStatus: "Estado del pago",
      shippingAddress: "Dirección de envío",
      user: "Usuario",
      comment: "Comentario",
      post: "Publicación",
      date: "Fecha",
      product: "Producto",
      title: "Título",
      verified: "Verificado",
      helpful: "Votos útiles",
      slug: "Slug",
      parentCategory: "Categoría superior",
      productCount: "Número de productos",
      quantity: "Cantidad",
      discount: "Descuento",
      code: "Código",
      type: "Tipo",
      expiresAt: "Caduca el",
      minimumOrder: "Pedido mínimo",
      usageLimit: "Límite de uso",
      active: "Activo",
      amount: "Importe",
      currency: "Divisa",
      paymentMethod: "Método de pago",
      transactionId: "ID de transacción",
      order: "Pedido",
      carrier: "Transportista",
      trackingNumber: "Número de seguimiento",
      estimatedDelivery: "Entrega estimada",
      body: "Cuerpo",
      author: "Autor",
      tags: "Etiquetas",
      publishedAt: "Fecha de publicación",
      likes: "Me gusta",
      views: "Visualizaciones",
      replies: "Respuestas",
      attachments: "Adjuntos",
      actionUrl: "URL de acción",
      sender: "Remitente",
      receiver: "Destinatario",
      message: "Mensaje",
      read: "Leído",
      artist: "Artista",
      cover: "Portada",
      year: "Año",
      genre: "Género",
      tracks: "Pistas",
      album: "Álbum",
      duration: "Duración",
      poster: "Cartel",
      director: "Director",
      language: "Idioma",
      plays: "Reproducciones",
      label: "Sello discográfico",
      pages: "Páginas",
      isbn: "ISBN",
      instructor: "Instructor",
      level: "Nivel",
      lessons: "Lecciones",
      students: "Alumnos",
      employees: "Empleados",
      logo: "Logotipo",
      industry: "Sector",
      salary: "Salario",
      experience: "Experiencia",
      remote: "En remoto",
      founded: "Año de fundación",
      postedAt: "Publicado el",
      capacity: "Aforo",
      capital: "Capital",
      flag: "Bandera",
      region: "Comunidad / Provincia / Región",
      population: "Población",
      street: "Calle",
      postalCode: "Código postal",
      latitude: "Latitud",
      longitude: "Longitud",
      country: "País",
      city: "Ciudad",
      notes: "Notas",
      team: "Equipo",
      joinedAt: "Fecha de incorporación",
      skills: "Habilidades",
      specialty: "Especialidad",
      hospital: "Hospital",
      licenseNumber: "Número de colegiado",
      yearsExperience: "Años de experiencia",
      bloodType: "Grupo sanguíneo",
      diagnosis: "Diagnóstico",
      doctor: "Médico",
      admittedAt: "Fecha de ingreso",
      vehicleType: "Tipo de vehículo",
      plateNumber: "Matrícula",
      tripsCount: "Número de viajes",
      roomNumber: "Número de habitación",
      checkIn: "Entrada",
      checkOut: "Salida",
      nights: "Noches",
      followers: "Seguidores",
      following: "Siguiendo",
      grade: "Curso",
      school: "Centro educativo",
      gpa: "Nota media",
      major: "Grado / Especialidad",
      enrollmentYear: "Año de matriculación",
      subject: "Asignatura",
      classesCount: "Número de clases",
      invoiceNumber: "Número de factura",
      issueDate: "Fecha de emisión",
      dueDate: "Fecha de vencimiento",
      tax: "Impuestos",
      itemsCount: "Número de artículos",
      target: "Destino",
      targetType: "Tipo de destino",
      reaction: "Reacción",
      color: "Color",
      thumbnail: "Miniatura",
      channel: "Canal",
      url: "URL",
      width: "Ancho",
      height: "Alto",
      alt: "Texto alternativo",
      photographer: "Fotógrafo",
      host: "Presentador",
      episodes: "Episodios",
      subscribers: "Suscriptores",
      owner: "Propietario",
      public: "Pública",
      progress: "Progreso",
      teamSize: "Tamaño del equipo",
      budget: "Presupuesto",
      startDate: "Fecha de inicio",
      membersCount: "Número de miembros",
      focus: "Enfoque",
      countriesCount: "Número de países",
      areaKm2: "Superficie (km²)",
      timezone: "Zona horaria",
      terminals: "Terminales",
      altitude: "Altitud",
      accuracy: "Precisión",
    },
    topics: {
      users: {
        name: "Usuarios",
        description: "Perfiles de personas para aplicaciones y paneles",
        preview: {
          line1: "Laura Mendoza",
          line2: "@lauram · laura@mail.test",
          line3: "Madrid",
        },
      },
      customers: {
        name: "Clientes",
        description: "Compradores y contactos de cuenta",
        preview: {
          line1: "Alejandro Ruiz",
          line2: "alejandro@demo.dev",
          line3: "+34 612 345 678",
        },
      },
      employees: {
        name: "Empleados",
        description: "Miembros de equipo con puesto y departamento",
        preview: {
          line1: "Marta Soler",
          line2: "Desarrolladora Frontend",
          line3: "Ingeniería · Acme",
        },
      },
      authors: {
        name: "Autores",
        description: "Redactores y creadores de contenido",
        preview: {
          line1: "Daniel Vega",
          line2: "Escribe sobre diseño de producto.",
        },
      },
      contacts: {
        name: "Contactos",
        description: "Contactos tipo CRM y vínculos con empresas",
        preview: {
          line1: "Nora Blanco",
          line2: "nora@acme.test · Acme",
        },
      },
      "team-members": {
        name: "Miembros de equipo",
        description: "Personas en equipos de producto e ingeniería",
        preview: {
          line1: "Samuel Ortiz",
          line2: "responsable · Ingeniería",
        },
      },
      doctors: {
        name: "Médicos",
        description: "Facultativos con especialidad y hospital",
        preview: {
          line1: "Dra. Carmen Pardo",
          line2: "Cardiología · Hospital General",
        },
      },
      patients: {
        name: "Pacientes",
        description: "Historiales médicos con diagnóstico y grupo sanguíneo",
        preview: {
          line1: "Omar Hassan",
          line2: "A+ · Hipertensión",
        },
      },
      drivers: {
        name: "Conductores",
        description: "Conductores de flota con vehículo y valoración",
        preview: {
          line1: "Carlos Alonso",
          line2: "berlina · ★ 4,8",
        },
      },
      guests: {
        name: "Huéspedes",
        description: "Huéspedes de hotel con habitación y estado de estancia",
        preview: {
          line1: "Elena Rossi",
          line2: "Habitación 412 · alojada",
        },
      },
      profiles: {
        name: "Perfiles",
        description: "Perfiles sociales con seguidores y biografía",
        preview: {
          line1: "Alba Gil",
          line2: "@albagil · 12,4 mil seguidores",
        },
      },
      "girl-students": {
        name: "Alumnas",
        description: "Estudiantes mujeres con curso y centro educativo",
        preview: {
          line1: "Sofía Morales",
          line2: "1.º Bachillerato · IES Cervantes",
        },
      },
      "boy-students": {
        name: "Alumnos",
        description: "Estudiantes varones con curso y centro educativo",
        preview: {
          line1: "Hugo Martín",
          line2: "4.º ESO · Colegio San Agustín",
        },
      },
      teachers: {
        name: "Docentes",
        description: "Profesores con asignatura y centro educativo",
        preview: {
          line1: "Emma Navarro",
          line2: "Matemáticas · Colegio El Roble",
        },
      },
      products: {
        name: "Productos",
        description: "Artículos de tienda y precios",
        preview: {
          line1: "Auriculares inalámbricos",
          line2: "89,99 € · Electrónica",
          line3: "★★★★☆",
        },
      },
      orders: {
        name: "Pedidos",
        description: "Pedidos de compra con artículos y estado",
        preview: {
          line1: "Pedido #10482",
          line2: "3 artículos · 129,90 €",
          line3: "Entregado",
        },
      },
      reviews: {
        name: "Reseñas",
        description: "Valoraciones y opiniones de clientes",
        preview: {
          line1: "★★★★★ Gran producto",
          line2: "Muy práctico y fácil de usar.",
        },
      },
      categories: {
        name: "Categorías",
        description: "Agrupaciones del catálogo de productos",
        preview: { line1: "Electrónica", line2: "electronica" },
      },
      "cart-items": {
        name: "Artículos del carrito",
        description: "Líneas de producto en un carrito de compra",
        preview: { line1: "Reloj inteligente", line2: "2 × 129 € · 258 €" },
      },
      coupons: {
        name: "Cupones",
        description: "Códigos de descuento y condiciones",
        preview: { line1: "BIENVENIDA10", line2: "10 % · caduca el 01-12-2026" },
      },
      payments: {
        name: "Pagos",
        description: "Intentos de pago y métodos utilizados",
        preview: { line1: "84,50 € EUR", line2: "tarjeta · pagado" },
      },
      shipments: {
        name: "Envíos",
        description: "Transportistas y estado de seguimiento",
        preview: { line1: "ORD-10482 · DHL", line2: "En reparto" },
      },
      invoices: {
        name: "Facturas",
        description: "Documentos de facturación con importes y vencimientos",
        preview: { line1: "FAC-10482", line2: "420 € · pagada" },
      },
      brands: {
        name: "Marcas",
        description: "Marcas de tienda con logotipos y catálogos",
        preview: { line1: "Acme", line2: "acme · 128 productos" },
      },
      posts: {
        name: "Publicaciones",
        description: "Entradas de blog y muros de actividad",
        preview: { line1: "Diseñar para la velocidad", line2: "Por Alba Gil" },
      },
      comments: {
        name: "Comentarios",
        description: "Respuestas en publicaciones y productos",
        preview: {
          line1: "Esto me ha ayudado muchísimo, ¡gracias!",
          line2: "Lucas · 12 me gusta",
        },
      },
      messages: {
        name: "Mensajes",
        description: "Conversaciones estilo bandeja de entrada",
        preview: {
          line1: "¿Puedes revisar el último borrador?",
          line2: "Sara → Amir",
        },
      },
      notifications: {
        name: "Notificaciones",
        description: "Alertas y resúmenes dentro de la app",
        preview: { line1: "Nuevo comentario", line2: "info · hace 2 h" },
      },
      tags: {
        name: "Etiquetas",
        description: "Etiquetas de contenido con slugs y contadores",
        preview: { line1: "typescript", line2: "142 publicaciones" },
      },
      "content-categories": {
        name: "Categorías de contenido",
        description: "Secciones editoriales para publicaciones",
        preview: { line1: "Tutoriales", line2: "tutoriales · 86 publicaciones" },
      },
      likes: {
        name: "Me gusta",
        description: "Reacciones en publicaciones y comentarios",
        preview: { line1: "A Alba le gustó una publicación", line2: "publicación · me encanta" },
      },
      albums: {
        name: "Álbumes",
        description: "Álbumes musicales con carátula",
        preview: {
          line1: "Random Access Memories",
          line2: "Daft Punk",
          line3: "2013 · 13 pistas",
        },
      },
      songs: {
        name: "Canciones",
        description: "Pistas con duración y artista",
        preview: { line1: "Ruta de medianoche", line2: "3:42 · Electrónica" },
      },
      movies: {
        name: "Películas",
        description: "Largometrajes con cartel y puntuación",
        preview: { line1: "Circuito nocturno", line2: "2021 · ★ 8,2" },
      },
      books: {
        name: "Libros",
        description: "Títulos con autores y portadas",
        preview: { line1: "Diseño de interfaces", line2: "Daniel Vega · 2019" },
      },
      videos: {
        name: "Vídeos",
        description: "Clips de vídeo con duración y visualizaciones",
        preview: {
          line1: "Crea un panel en 10 minutos",
          line2: "12:40 · 84 mil visualizaciones",
        },
      },
      images: {
        name: "Imágenes",
        description: "Fotografías con dimensiones y etiquetas",
        preview: { line1: "Luz de la mañana", line2: "1280×720" },
      },
      podcasts: {
        name: "Pódcasts",
        description: "Programas con presentadores y número de episodios",
        preview: { line1: "Código y Café", line2: "48 episodios · Tecnología" },
      },
      playlists: {
        name: "Listas de reproducción",
        description: "Listas de canciones con propietarios y géneros",
        preview: { line1: "Concentración total", line2: "32 pistas · Electrónica" },
      },
      companies: {
        name: "Empresas",
        description: "Organizaciones y sectores de actividad",
        preview: { line1: "Acme Corp", line2: "Tecnología · Madrid" },
      },
      jobs: {
        name: "Ofertas de empleo",
        description: "Vacantes con ubicación y jornada",
        preview: {
          line1: "Desarrollador Frontend",
          line2: "Google · Madrid · Jornada completa",
        },
      },
      courses: {
        name: "Cursos",
        description: "Contenidos formativos e instructores",
        preview: { line1: "Fundamentos de React", line2: "Intermedio · 12 h" },
      },
      events: {
        name: "Eventos",
        description: "Encuentros y conferencias",
        preview: { line1: "Encuentro Frontend", line2: "Madrid · Taller" },
      },
      projects: {
        name: "Proyectos",
        description: "Líneas de trabajo con progreso y presupuesto",
        preview: { line1: "Rediseño del panel", line2: "en_curso · 72 %" },
      },
      teams: {
        name: "Equipos",
        description: "Equipos de empresa con responsables y tamaño",
        preview: { line1: "Squad de producto", line2: "8 miembros · Ingeniería" },
      },
      continents: {
        name: "Continentes",
        description: "Continentes del mundo con códigos y estadísticas",
        preview: { line1: "Europa", line2: "EU · 44 países" },
      },
      countries: {
        name: "Países",
        description: "Nombres de países, códigos y banderas",
        preview: { line1: "España", line2: "ES · Madrid" },
      },
      cities: {
        name: "Ciudades",
        description: "Ciudades con región y país",
        preview: { line1: "Valencia", line2: "España · Comunidad Valenciana" },
      },
      addresses: {
        name: "Direcciones",
        description: "Direcciones postales coherentes a nivel de calle",
        preview: {
          line1: "Calle de Alcalá, 12",
          line2: "Madrid, Comunidad de Madrid, España",
        },
      },
      regions: {
        name: "Regiones",
        description: "Comunidades autónomas, provincias y regiones",
        preview: { line1: "Andalucía", line2: "España · Sevilla" },
      },
      neighborhoods: {
        name: "Barrios",
        description: "Distritos urbanos y zonas locales",
        preview: { line1: "Malasaña", line2: "Madrid · Comunidad de Madrid" },
      },
      airports: {
        name: "Aeropuertos",
        description: "Aeropuertos con códigos IATA y ciudades",
        preview: { line1: "Madrid-Barajas", line2: "MAD · España" },
      },
      coordinates: {
        name: "Coordenadas geográficas",
        description: "Latitud, longitud y etiquetas de lugar",
        preview: {
          line1: "40.416775, -3.703790",
          line2: "Madrid · España",
        },
      },
    },
    errors: {
      pickTopic: "Elige primero un tipo de dato.",
      INVALID_TOPIC: "Tipo de dato desconocido.",
      INVALID_FIELDS: "Selecciona al menos un campo.",
      INVALID_QUANTITY: "La cantidad debe estar entre 1 y 1000.",
      INVALID_COUNTRY: "País no válido.",
      GENERATE_FAILED: "No se pudieron generar los datos. Inténtalo de nuevo.",
      DOWNLOAD_FAILED: "Error en la descarga. Inténtalo de nuevo.",
      CREATE_FAILED: "No se pudo crear la API temporal.",
      LIMIT_REACHED: "Has alcanzado el límite de APIs temporales (5 activas). Elimina una primero.",
      RATE_LIMITED: "Demasiadas creaciones seguidas. Inténtalo más tarde.",
    },
  },
  preview: {
    docs: "Documentación",
    playground: "Playground",
    blurb: "Una interfaz sencilla para probar esta API.",
    blurbFaHint: "",
    backToResource: "Volver a {name}",
    search: "Buscar",
    create: "Crear",
    edit: "Editar",
    delete: "Eliminar",
    save: "Guardar",
    saving: "Guardando…",
    deleting: "Eliminando…",
    cancel: "Cancelar",
    fillSample: "Rellenar con datos de ejemplo",
    noRecords: "Sin registros",
    loading: "Cargando…",
    confirmDelete: "¿Eliminar?",
    confirmDeleteBody: "Este elemento se eliminará de forma permanente.",
    networkError: "Error de red",
    authDemoPassword: "La contraseña de demostración para todos los usuarios iniciales es",
    username: "Nombre de usuario",
    password: "Contraseña",
    login: "Iniciar sesión",
    loginSuccess: "Has iniciado sesión correctamente.",
    logout: "Cerrar sesión",
    getMe: "GET /me",
    token: "Token",
    user: "Usuario",
    loginFirst: "Inicia sesión primero para obtener un token",
    createdAt: "Añadido",
    fieldLabels: {
      name: "Nombre",
      username: "Nombre de usuario",
      email: "Correo electrónico",
      avatarUrl: "URL del avatar",
      role: "Rol",
      city: "Ciudad",
      country: "País",
      company: "Empresa",
      title: "Título",
      body: "Cuerpo",
      published: "Publicado",
      userId: "ID de usuario",
      postId: "ID de publicación",
      albumId: "ID de álbum",
      url: "URL",
      thumbnailUrl: "URL de miniatura",
      completed: "Completada",
      description: "Descripción",
      price: "Precio",
      stock: "Stock",
      category: "Categoría",
      imageUrl: "URL de imagen",
      message: "Mensaje",
      type: "Tipo",
      read: "Leída",
      code: "Código",
      capital: "Capital",
      region: "Región",
      population: "Población",
      currency: "Divisa",
      flagUrl: "URL de bandera",
    },
    roleLabels: {
      admin: "administrador",
      member: "miembro",
      guest: "invitado",
    },
  },
  changelog: {
    "2026-09-19-json-workbench": {
      title: "Taller JSON",
      teaser: "En desarrollo — formatea, compara y transforma JSON",
      hint: "/json — elige una herramienta y el espacio se actualiza al instante",
      badge: "En desarrollo",
      summary:
        "El Taller JSON está en desarrollo: un espacio único en el navegador para formatear, comparar estructuras, buscar y transformar JSON, además de TypeScript, Zod, YAML, CSV y utilidades.",
      details: [
        "Abre el Taller JSON en /json y elige una herramienta: el espacio de trabajo se actualiza al instante (enlace directo con ?tool=).",
        "Principal: Formatear, Árbol, Buscar, JSONPath y Comparar estructura.",
        "Transformar: conversiones a TypeScript, Zod, JSON Schema, YAML y CSV.",
        "Utilidades: ordenar claves, limpiar valores vacíos, aplanar, escapar, reparar, seleccionar/omitir y más.",
        "Seguimos mejorándolo: pronto llegarán nuevas herramientas y ajustes.",
      ],
    },
    "2026-09-19-image-generator": {
      title: "Generador de imágenes",
      teaser: "Imágenes de relleno mediante URL",
      hint: "/image-generator — SVG o foto real, copia el enlace",
      summary:
        "Imágenes provisionales por URL: SVG de MockData o fotos reales mediante Picsum, con tamaños listos para avatares, publicaciones y banners.",
      details: [
        "Abre /image-generator para elegir SVG o imagen real, definir ancho y alto y copiar una URL lista para usar.",
        "Las URLs públicas son aleatorias por defecto: /image/{w}/{h} para SVG; añade ?type=real para fotos.",
        "El parámetro opcional ?seed= fija siempre los mismos colores SVG o la misma foto real.",
        "Pega el enlace en img, CSS o cualquier campo de imagen sin tener que subir archivos.",
      ],
    },
    "2026-09-17-generator": {
      title: "Generador de datos ficticios",
      teaser: "JSON realista en segundos",
      hint: "/generator — elige un tipo, genera, copia o pulsa Crear API",
      summary:
        "Genera JSON realista para tus interfaces: elige tipo, campos y cantidad, y luego copia, descarga o publica mediante API temporal.",
      details: [
        "Abre /generator para obtener datos de personas, comercio electrónico, contenido, multimedia, empresa y ubicación.",
        "Formatos de cuerpo POST frente a registro de API; la interfaz FA usa paquetes locales en persa.",
        "Genera hasta 1.000 registros en el navegador; Crear API aplica los límites temporales (500 / 64 KB).",
        "Las selecciones y resultados se conservan al navegar por la SPA (se limpian al recargar la página).",
      ],
    },
    "2026-09-16-temporary": {
      title: "API temporal",
      teaser: "Tu propio JSON en una URL efímera",
      hint: "/temporary — pega un JSON y obtén un enlace REST público",
      summary:
        "Pega tu propio JSON y obtén una URL REST pública de corta duración: sin cuenta y hasta 5 APIs activas por navegador.",
      details: [
        "Créala desde /temporary: elige su duración (1 h, 6 h, 12 h o 24 h) y publícala.",
        "Haz peticiones GET, POST, PATCH y DELETE normales a la URL pública /api/t/…",
        "Hasta 5 APIs activas por navegador y hasta 20 creaciones por IP cada hora.",
        "Trata el enlace como una contraseña: quien lo tenga podrá leer y modificar los datos hasta que caduque.",
      ],
    },
    "2026-09-15-preview": {
      title: "Vista previa",
      teaser: "Interfaces de ejemplo para cada recurso",
      hint: "/preview/users — prueba a crear, editar y eliminar en el navegador",
      summary:
        "Interfaces interactivas en vivo para Usuarios, Publicaciones, Auth y todos los recursos: crea, edita y elimina contra la API real.",
      details: [
        "Cada página de documentación de un recurso incluye un botón Vista previa que abre una pequeña app sobre los endpoints reales.",
        "Lista, busca, pagina, crea, edita y elimina filas sobre la misma base de datos compartida de demostración.",
        "La vista previa de Auth incluye un formulario de inicio de sesión funcional (la contraseña es siempre password) y GET /me con el token.",
        "Usa el selector de idioma de la cabecera para cargar datos de ejemplo en persa cuando lo necesites.",
      ],
    },
    "2026-09-14-lang-fa": {
      title: "Datos en persa (?lang=fa)",
      teaser: "Datos de ejemplo en persa",
      hint: "/api/users?lang=fa — añade lang=fa a cualquier consulta para obtener textos en persa",
      summary:
        "Obtén nombres, usuarios, teléfonos y textos de ejemplo iraníes añadiendo ?lang=fa a cualquier endpoint.",
      details: [
        "El inglés sigue siendo el idioma por defecto. Solo el parámetro lang=fa cambia el texto, sin cookies ni Accept-Language.",
        "Las respuestas en FA incluyen Content-Language: fa y un objeto font apuntando a Vazirmatn para su renderizado.",
        "Funciona tanto en listados como en rutas de detalle, además de en el inicio de sesión con usuarios en persa.",
        "Al elegir فارسی en la cabecera se añade lang=fa automáticamente en el Playground.",
      ],
    },
    "2026-09-12-playground": {
      title: "Playground",
      teaser: "Llama a las APIs desde el navegador",
      hint: "/playground — envía peticiones e inspecciona el JSON",
      summary:
        "Lanza peticiones a endpoints activos desde el navegador, prueba inicios de sesión válidos o fallidos e inspecciona las respuestas JSON.",
      details: [
        "Elige un recurso y una acción, edita los parámetros de consulta o el cuerpo JSON y envía la petición.",
        "El inicio de sesión de Auth incluye preajustes de contraseña correcta e incorrecta para probar rápidamente respuestas 200 frente a 401.",
        "Las respuestas muestran el código de estado, JSON bien formateado y paginación cuando la ruta la devuelve.",
        "El estado de la petición y las últimas respuestas se conservan por recurso al navegar por la SPA (se limpian al recargar).",
      ],
    },
    "2026-09-10-auth": {
      title: "Autenticación simulada",
      teaser: "Inicio de sesión y tokens Bearer",
      hint: "/api/auth/login — la contraseña es siempre password",
      summary:
        "Haz POST a /api/auth/login con cualquier usuario inicial y contraseña para obtener un token Bearer para /me.",
      details: [
        "Todos los usuarios iniciales comparten la contraseña de prueba: password.",
        "Un inicio de sesión correcto devuelve un token Bearer simulado y un objeto user (id, name, username, email, role).",
        "Una contraseña incorrecta o un usuario inexistente devuelve un 401 con un mensaje de error claro.",
        "Envía Authorization: Bearer <token> a GET /api/auth/me para consultar el usuario actual.",
      ],
    },
    "2026-09-08-resources": {
      title: "Recursos REST activos",
      teaser: "Usuarios, publicaciones y más — CRUD completo",
      hint: "/docs#resources — listado de APIs activas",
      summary:
        "Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications y Countries: CRUD completo con paginación.",
      details: [
        "Estructura estándar de listado: { data, pagination } con page, limit, total y totalPages.",
        "Compatibilidad con búsqueda, ordenación, filtros, retardo artificial y parámetros para forzar códigos de error.",
        "La base de datos compartida de producción se restablece a diario: ideal para demos, no para almacenamiento permanente.",
        "Catálogo legible por máquina en /openapi.json para Postman, Swagger y herramientas de IA.",
      ],
    },
  },
  catalog: {
    auth: {
      title: "Auth",
      summary:
        "Inicio de sesión simulado con usuario y contraseña. Las credenciales válidas devuelven un token Bearer; las incorrectas devuelven 401.",
    },
    users: {
      title: "Users",
      summary: "CRUD de usuarios ficticios con búsqueda, filtros por rol y paginación.",
    },
    posts: {
      title: "Posts",
      summary: "Publicaciones tipo blog vinculadas a usuarios, con etiquetas y estado de publicación.",
    },
    comments: {
      title: "Comments",
      summary: "Comentarios en publicaciones: nombre, correo electrónico y cuerpo.",
    },
    albums: {
      title: "Albums",
      summary: "Álbumes de fotos vinculados a usuarios. Las fotos hacen referencia a albumId.",
    },
    photos: {
      title: "Photos",
      summary: "Fotos de álbumes con url y thumbnailUrl.",
    },
    todos: {
      title: "Todos",
      summary: "Tareas sencillas con indicador de completado, vinculadas a usuarios.",
    },
    products: {
      title: "Products",
      summary: "Artículos de catálogo con precio, stock, categoría e imageUrl.",
    },
    notifications: {
      title: "Notifications",
      summary: "Notificaciones de usuario con tipo e indicador de lectura.",
    },
    countries: {
      title: "Countries",
      summary: "Registros de países con código ISO, región, población y bandera.",
    },
  },
};

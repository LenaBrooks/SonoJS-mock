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

export const uk: Messages = {
  common: {
    home: "Головна",
    docs: "Документація",
    playground: "Playground",
    contact: "Контакти",
    preview: "Прев'ю",
    search: "Пошук",
    loading: "Завантаження…",
    save: "Зберегти",
    saving: "Збереження…",
    cancel: "Скасувати",
    create: "Створити",
    edit: "Редагувати",
    delete: "Видалити",
    searchPlaceholder: "Пошук API…",
    noResults: "Нічого не знайдено",
    new: "Нове",
    inDevelopment: "У розробці",
    actions: "Дії",
    copy: "Копіювати",
    copied: "Скопійовано",
    live: "Працює",
    open: "Відкрити",
    tryIt: "Спробувати",
    learnMore: "Докладніше",
    back: "Назад",
    close: "Закрити",
    yes: "Так",
    no: "Ні",
    name: "Ім'я",
    email: "Email",
    message: "Повідомлення",
    send: "Надіслати",
    sending: "Надсилання…",
    networkError: "Помилка мережі",
    temporary: "Тимчасові API",
    temporaryBadge: "Миттєвий старт",
    generator: "Генератор даних",
    imageGenerator: "Генератор зображень",
    jsonWorkbench: "Робоча область JSON",
  },
  header: {
    primaryNav: "Основна навігація",
    whatsNew: "Що нового",
    whatsNewTitle: "Що нового",
    whatsNewSubtitle: "Свіжі функції та оновлення",
    latest: "Останнє",
    contact: "Про проєкт та контакти",
    menu: "Меню",
    openMenu: "Відкрити меню",
    appearance: "Вигляд",
    lightMode: "Увімкнути світлу тему",
    darkMode: "Увімкнути темну тему",
    light: "Світла",
    dark: "Темна",
    apiLangGroup: "Мова",
    english: "English",
    persian: "فارسی",
    github: "GitHub",
    githubStars: "GitHub — поставити зірку репозиторію",
  },
  home: {
    tagline:
      "Безкоштовні REST mock API з реалістичним JSON. Створюйте прототипи без бекенду, тестуйте автентифікацію та підключайте ендпоінти одразу.",
    taglineNote: "",
    resourcesTitle: "Ресурси",
    resourcesBlurb:
      "Десять готових REST API з документацією та прикладами. У продакшені використовується спільна демо-база.",
    searchLabel: "Пошук API та ендпоінтів",
    searchPlaceholder: "Пошук за users, posts, auth…",
    temporaryCtaTitle: "Тимчасові API",
    temporaryCtaBody:
      "Створіть тимчасовий API зі вставленого JSON або прямо в генераторі. Зберігайте посилання як пароль. До 5 активних тимчасових API на браузер.",
    temporaryCtaLink: "Створити тимчасовий API",
  },
  notFound: {
    title: "Сторінку не знайдено",
    body: "Такої сторінки на MockData немає. Поверніться на головну або відкрийте документацію.",
    home: "Головна",
    docs: "Документація",
  },
  blog: {
    title: "Блог",
    description:
      "Нотатки та гайди про мок-дані, JSON, API та фронтенд-розробку.",
    all: "Усі",
    emptyTitle: "Статей поки немає",
    emptyBody: "Нові публікації з'являться тут пізніше — загляньте ще раз.",
    emptyCategoryTitle: "У цій категорії порожньо",
    emptyCategoryBody: "Оберіть іншу категорію або перегляньте всі статті.",
    readingTime: "{n} хв читання",
    previousPage: "Назад",
    nextPage: "Далі",
    pageStatus: "Сторінка {page} з {total}",
    paginationNav: "Навігація по сторінках",
    categoriesNav: "Категорії блогу",
    backToBlog: "Блог",
    previousArticle: "Попередня стаття",
    nextArticle: "Наступна стаття",
    relatedArticles: "Схожі статті",
    categories: {
      news: "Новини",
      "mock-data": "Мок-дані",
      json: "JSON",
      api: "API",
      frontend: "Фронтенд",
    },
  },
  contact: {
    title: "Контакти",
    intro:
      "Маєте запитання, відгук чи ідею? Напишіть через форму нижче або надішліть листа напряму:",
    name: "Ім'я",
    email: "Email",
    topic: "Тема",
    message: "Повідомлення",
    send: "Надіслати",
    sending: "Надсилання…",
    success: "Повідомлення надіслано. Дякуємо за зворотний зв'язок — найближчим часом відповімо.",
    chooseTopic: "Оберіть тему повідомлення.",
    pickTopic: "Про що хочете написати?",
    topics: {
      question: "Запитання",
      bug: "Повідомлення про баг",
      feature: "Пропозиція функції",
      other: "Інше",
    },
  },
  docs: {
    title: "Документація",
    navLabel: "Зміст документації",
    intro:
      "MockData надає mock REST-ресурси у форматі JSON. Ви можете викликати відкриті ендпоінти, перевіряти сценарії входу, надсилати запити в Playground, генерувати набори даних у /generator, створювати заглушки зображень у /image-generator, працювати з JSON Workbench на /json та запускати тимчасові API. Ресурси з продакшн-каталогу використовують спільну базу даних (детальніше див. у розділі «Спільні дані»).",
    toc: {
      intro: "Вступ",
      whatsNew: "Що нового",
      temporary: "Тимчасові API",
      generator: "Генератор даних",
      imageGenerator: "Генератор зображень",
      jsonWorkbench: "Робоча область JSON",
      sharedData: "Спільні дані",
      language: "Мова",
      resources: "Ресурси",
      openapi: "OpenAPI",
      requests: "Запити",
      errors: "Помилки",
      rateLimit: "Ліміт запитів",
      reset: "Скидання даних",
    },
    whatsNewTitle: "Що нового",
    whatsNewBlurb:
      "Ключові оновлення для розробників від найновіших до давніших. Натисніть на картку для деталей — той самий список доступний за іконкою дзвіночка вгорі.",
    temporaryTitle: "Тимчасові API",
    temporaryBody:
      "Потрібен тимчасовий REST-ендпоінт із власним JSON? Тимчасові API працюють окремо від спільного каталогу: вставте JSON і оберіть термін дії, щоб отримати публічну адресу /api/t/…, або створіть API напряму через «Створити API» в генераторі.",
    temporaryBullets: [
      "Створюйте в браузері на /temporary без реєстрації (також відкривається через «Створити API» на сторінці /generator).",
      "Оберіть термін дії: 1 година, 6 годин, 12 годин або 24 години (типово — 12 годин).",
      "Надсилайте GET, POST, PATCH та DELETE на /api/t/… — для колекції та окремих записів.",
      "Ставтеся до посилання як до пароля: доки воно не прострочене, будь-хто з посиланням може читати та змінювати дані.",
      "Запити до прострочених тимчасових API повертають HTTP 410.",
    ],
    temporaryLimitsTitle: "Обмеження тимчасових API",
    temporaryLimitsBullets: [
      "Не більше 5 активних тимчасових API одночасно на один браузер.",
      "Не більше 20 створень API з однієї IP-адреси за ковзну годину (при перевищенні — HTTP 429).",
      "Максимальний розмір JSON-пейлоаду — 64 КБ.",
      "До 8 рівнів вкладеності, до 500 елементів у масиві та до 200 ключів в об'єкті.",
      "Тут також діє загальний ліміт /api (близько 60 запитів за хвилину з однієї IP-адреси).",
    ],
    generatorTitle: "Генератор даних",
    generatorBody:
      "Генеруйте реалістичний JSON для фронтенду без ручного заповнення прикладів. Усе працює в браузері — дані можна скопіювати, завантажити або перетворити на тимчасовий API.",
    generatorBullets: [
      "Перейдіть на /generator та оберіть тему з категорій: Люди, E-commerce, Контент, Медіа, Бізнес і Локації.",
      "Перемикайтеся між форматом тіла POST (без id та часових міток) і записом API (з id, createdAt та updatedAt).",
      "Використовуйте локалізовані перські дані для FA або англійські дані з різних країн для EN.",
      "Генеруйте до 1 000 записів за раз у браузері. «Створити API» враховує ліміти тимчасових API (500 записів / 64 КБ).",
      "Вибір і згенеровані дані зберігаються під час переходів у застосунку (скидаються при повному оновленні сторінки).",
    ],
    imageGeneratorTitle: "Генератор зображень",
    imageGeneratorBody:
      "Створюйте посилання на зображення-заглушки на запит для ваших інтерфейсів. Оберіть SVG від MockData або випадкові фото з Picsum, задайте ширину й висоту та скопіюйте URL для тегів img, CSS або полів зображень.",
    imageGeneratorBullets: [
      "На /image-generator оберіть SVG-графіку або реальні фотографії.",
      "Загальний формат URL: /image/{width}/{height} для SVG і додайте ?type=real для фото.",
      "Типово повертається випадковий варіант; передайте довільний ?seed=, щоб зберегти ті самі кольори SVG або фото.",
      "Є готові пресети розмірів для аватара, прев'ю, профілю, поста, обкладинки, банера та сторіс.",
    ],
    jsonWorkbenchTitle: "JSON Workbench",
    jsonWorkbenchBody:
      "JSON Workbench (у розробці) — набір інструментів у браузері для форматування, порівняння, пошуку та конвертації JSON під час роботи над інтерфейсами.",
    jsonWorkbenchBullets: [
      "Відкрийте JSON Workbench на /json та оберіть інструмент для миттєвого перемикання (підтримується параметр ?tool=).",
      "Базові інструменти: Форматувати, Дерево, Пошук, JSONPath і Порівняти структуру.",
      "Конвертери: TypeScript, Zod, JSON Schema, YAML та CSV.",
      "Утиліти: Сортувати ключі, Видалити порожнє, Розгорнути/Згорнути, Екранувати/Полагодити, Вибрати/Виключити поля та інші.",
      "Працює повністю в браузері — ваш JSON не надсилається на сервер.",
      "Активно розвивається — нові інструменти та покращення з'являться в наступних оновленнях.",
    ],
    sharedDataTitle: "Спільні дані",
    sharedDataBody:
      "Усі користувачі працюють з однією живою базою даних: усе, що ви створюєте, змінюєте або видаляєте, одразу видно іншим. У продакшені база скидається до початкових даних щодня за GET /api/cron/reset. Підходить для прототипів і демо, але не для постійних чи чутливих даних.",
    languageTitle: "Мова",
    languageBody:
      "Типово тексти ресурсів повертаються англійською. Додайте query-параметр lang=fa, щоб отримувати імена, логіни, email, телефони та фрази перською. Cookies і заголовки Accept-Language не використовуються — враховується лише параметр запиту. Перемикання мови у верхній панелі (English | فارسی) також підлаштовує Playground і Прев'ю.",
    languageBullets: [
      "Приклад: GET /api/users?lang=fa",
      "Відповіді для FA містять Content-Language: fa та підказку шрифту (Vazirmatn).",
      "Коли вгорі обрано فارسی, розкладка перемикається справа наліво (RTL), а Playground автоматично додає lang=fa.",
    ],
    resourcesTitle: "Ресурси",
    resourcesBlurb:
      "Короткий огляд доступних зараз ендпоінтів і найближчих можливостей.",
    colResource: "Ресурс",
    colBasePath: "Базовий шлях",
    colStatus: "Статус",
    colDocs: "Документація",
    statusLive: "Працює",
    statusDev: "У розробці",
    statusSoon: "Незабаром",
    openapiTitle: "OpenAPI",
    openapiBody:
      "Машинозчитувана специфікація для всіх поточних ендпоінтів (Auth, Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, Countries та скидання для адміністраторів). Зручно імпортувати в Postman, Swagger UI або ШІ-інструменти.",
    download: "Завантажити",
    requestsTitle: "Запити",
    requestsBody:
      "Ендпоінти колекцій повертають data та pagination; окремі записи повертають { data }.",
    errorsTitle: "Помилки",
    errorsBody:
      "Відповіді з помилками містять об'єкт error. Поширені коди статусу: 400 для некоректних запитів, 401 за відсутності або помилки автентифікації, 404 якщо запис не знайдено, 429 при перевищенні ліміту та 500 за помилок сервера. Щоб перевірити обробку помилок на клієнті, додайте ?status=500 (з діапазону 400–599) та зімітуйте потрібний код.",
    rateLimitTitle: "Ліміт запитів",
    rateLimitBody:
      "Щоб сервіс залишався стабільним для всіх, запити до /api/* обмежено приблизно {limit} запитами за хвилину з однієї IP-адреси. При перевищенні повертається HTTP 429 (Too Many Requests); залишок ліміту можна відстежувати в заголовках X-RateLimit.",
    resetTitle: "Скидання даних",
    resetBody:
      "Усі відвідувачі користуються однією демо-базою. У продакшені вона скидається кожні 24 години, але ви можете очистити та заново заповнити демо-таблиці початковими даними нижче, вказавши ключ адміністратора.",
    resetPanel: {
      intro: "Введіть ключ адміністратора, щоб скинути та заново заповнити демо-таблиці.",
      placeholder: "Ключ адміністратора",
      button: "Скинути зараз",
      resetting: "Скидання…",
      needSecret: "Спочатку введіть ключ адміністратора.",
      confirm: "Скинути та заново заповнити демо-таблиці початковими даними?",
      networkError: "Помилка мережі. Перевірте, що сервер запущено.",
      donePrefix: "Скинуто",
    },
    colIndex: "#",
  },
  resourceDocs: {
    endpoints: "Ендпоінти",
    queryParams: "Query-параметри",
    examples: "Приклади запитів",
    response: "Приклад відповіді",
    tryExample: "Перевірити",
    preview: "Прев'ю",
    playground: "Playground",
    backToResources: "До списку ресурсів",
  },
  playground: {
    title: "Playground",
    blurb:
      "Надсилайте реальні запити до MockData API та переглядайте JSON-відповіді просто в браузері. Останній запит для кожного ресурсу зберігається під час переходів між сторінками.",
    resource: "Ресурс",
    action: "Дія",
    send: "Надіслати",
    sending: "Надсилання…",
    response: "Відповідь",
    request: "Запит",
    body: "Тіло",
    query: "Query",
    headers: "Заголовки",
    correct: "Правильні дані",
    wrong: "Неправильні дані",
    password: "Пароль",
    user: "Користувач",
    pickUser: "Оберіть користувача",
    loadError: "Не вдалося завантажити варіанти",
    emptyResponse: "Відповіді поки немає",
    startHint: "Оберіть ресурс і надішліть запит.",
    types: "TS",
    json: "JSON",
  },
  temporary: {
    title: "Тимчасові API",
    blurb: "Вставте JSON і запустіть тимчасовий API за кілька секунд.",
    privacyNote:
      "Зберігайте посилання як пароль: доки воно не прострочене, будь-хто з посиланням може читати та змінювати дані. До 5 активних тимчасових API на браузер.",
    jsonLabel: "JSON",
    durationLabel: "Термін дії",
    duration1h: "1 година",
    duration6h: "6 годин",
    duration12h: "12 годин",
    duration24h: "24 години",
    checkJson: "Перевірити JSON",
    jsonValid: "Усе гаразд — можна створювати API.",
    jsonHint: "Спочатку перевірте JSON або одразу створіть API.",
    create: "Створити API",
    creating: "Створення…",
    acceptFix: "Застосувати виправлення та створити",
    rejectFix: "Продовжити редагування",
    fixedPreview: "Ми автоматично виправили частину проблем. Перевірте та створіть.",
    myApis: "Мої тимчасові API",
    emptyList: "Активних тимчасових API поки немає.",
    copyUrl: "Копіювати",
    delete: "Видалити",
    deleteAll: "Видалити всі",
    deleting: "…",
    confirmDelete: "Видалити цей API?",
    confirmDeleteBody: "Це посилання перестане працювати.",
    confirmDeleteAll: "Видалити всі API?",
    confirmDeleteAllBody: "Усі посилання з цього списку перестануть працювати.",
    cancel: "Скасувати",
    limitReached: "Досягнуто ліміту у 5 API.",
    limitReachedBody: "Видаліть один із API нижче або дочекайтеся завершення терміну.",
    createdTitle: "API створено",
    openApi: "Відкрити",
    slotsLabel: "{n} з 5",
    maxActive: "",
    sampleJson: `[
  { "id": "1", "firstName": "Олександр", "lastName": "Коваленко", "role": "admin" },
  { "id": "2", "firstName": "Софія", "lastName": "Ткаченко", "role": "member" },
  { "id": "3", "firstName": "Максим", "lastName": "Бондаренко", "role": "member" }
]`,
    issues: {
      EMPTY: "Вставте JSON-об'єкт або масив.",
      INVALID_JSON: "Некоректний JSON. Перевірте коми, лапки та дужки.",
      TOO_LARGE: "Розмір JSON перевищує ліміт ({max} КБ).",
      NOT_OBJECT_OR_ARRAY: "На верхньому рівні має бути об'єкт { } або масив [ ].",
      TOO_DEEP: "Занадто глибока вкладеність (максимум {max}).",
      ARRAY_TOO_LONG: "Масив довший за дозволений (максимум {max} елементів).",
      TOO_MANY_KEYS: "Занадто багато ключів в одному об'єкті (максимум {max}).",
      UNSAFE_KEY: "Небезпечний ключ «{key}» не дозволяється.",
      AUTO_FIXED: "Прибрано зайві коми в кінці або небезпечні ключі.",
    },
  },
  imageGenerator: {
    title: "Генератор зображень",
    blurb:
      "Створюйте зображення-заглушки на запит для проєктів. Копіюйте посилання на SVG від MockData або випадкові фото для тегів img, CSS чи полів зображень.",
    modeSvg: "SVG",
    modeReal: "Фото",
    width: "Ширина",
    height: "Висота",
    generate: "Згенерувати URL",
    generating: "Генерація…",
    yourUrl: "Ваш URL API",
    preview: "Прев'ю",
    useInProject: "Використати в проєкті",
    tabUrl: "URL",
    tabHtml: "HTML",
    tabCss: "CSS",
    tabJs: "JavaScript",
    tabCurl: "cURL",
    readySizes: "Готові розміри",
    sizes: {
      avatar: "Аватар",
      thumbnail: "Прев'ю",
      profile: "Профіль",
      square: "Квадрат",
      post: "Пост",
      cover: "Обкладинка",
      banner: "Банер",
      story: "Сторіс",
    },
  },
  jsonWorkbench: {
    title: "JSON Workbench",
    blurb:
      "Вставте JSON один раз і перемикайтеся між форматуванням, пошуком, конвертацією та іншими інструментами без повторного вставлення.",
    toolNavLabel: "Інструменти Workbench",
    source: {
      title: "Вихідний JSON",
      hint: "Вставте сюди один раз — усі інструменти візьмуть цей JSON.",
      sample: "Завантажити приклад",
      valid: "Валідний JSON.",
      needJson: "Спочатку вставте JSON ліворуч.",
      fixFirst: "Спочатку виправте синтаксичну помилку у вихідному JSON.",
      pickAction: "Що хочете зробити?",
      useResult: "Підставити у вихідний JSON",
      diffHint: "Вихідний JSON — це сторона А; вставте JSON Б нижче для порівняння.",
      escapedInput: "Екранований рядок",
      schemaInput: "JSON Schema",
      fromSchemaNote:
        "Вставте JSON Schema нижче, щоб згенерувати приклад JSON та застосувати до вихідного.",
    },
    categories: {
      core: "Основне",
      transform: "Конвертація",
      utility: "Утиліти",
    },
    labels: {
      input: "Ввід",
      output: "Вивід",
      tree: "Дерево",
      matches: "Збіги",
      jsonA: "JSON А",
      jsonB: "JSON Б",
      diffResult: "Відмінності",
      jsonpath: "JSONPath",
      result: "Результат ({count})",
    },
    actions: {
      format: "Форматувати",
      minify: "Стиснути",
      showTree: "Показати дерево",
      search: "Знайти",
      clearSearch: "Очистити пошук",
      replace: "Замінити",
      replaceAll: "Замінити все",
      prevMatch: "Назад",
      nextMatch: "Далі",
      compare: "Порівняти",
      run: "Запустити",
      runPath: "Виконати шлях",
      toTypescript: "У TypeScript",
      toZod: "У Zod",
      toSchema: "У Schema",
      swapDirection: "Поміняти напрямок",
      sortKeys: "Сортувати ключі",
      removeEmpty: "Видалити порожнє",
      flatten: "Розгорнути",
      unflatten: "Згорнути в об'єкт",
      escape: "Екранувати",
      unescape: "Зняти екранування",
      repair: "Полагодити JSON",
      fromSchema: "Згенерувати приклад",
      extractKeys: "Витягти ключі",
      extractValues: "Витягти значення",
      pick: "Обрати поля",
      omit: "Виключити поля",
      compareStructure: "Порівняти структуру",
      clear: "Очистити",
      expandAll: "Розгорнути все",
      collapseAll: "Згорнути все",
      copyPath: "Копіювати шлях",
      copyValue: "Копіювати значення",
    },
    errors: {
      empty: "Вставте JSON.",
      invalid: "Некоректний JSON.",
      unexpectedEnd: "Неочікуваний кінець JSON.",
      unexpectedToken: "Неочікуваний токен: {token}",
      expectedPropertyName: "Імена властивостей мають бути у подвійних лапках.",
      expectedCommaOrBrace: "Після значення очікується ',' або '}'.",
      expectedCommaOrBracket: "Після елемента масиву очікується ',' або ']'.",
      expectedColon: "Після імені властивості очікується ':'.",
      unterminatedString: "Незакритий рядок.",
      badControlChar: "Рядок містить недопустимий керівний символ.",
      badEscape: "Некоректна escape-послідовність у рядку.",
      trailingChar: "Після значення JSON є зайві символи.",
      objectKeyExpected: "Тут очікується ключ об'єкта.",
      unexpectedCharacter: "Неочікуваний символ: {char}",
      invalidCharacter: "Недопустимий символ: {char}",
      invalidUnicode: "Некоректний Unicode escape: {chars}",
      couldNotRepair: "Не вдалося автоматично полагодити цей JSON.",
      atLineColumn: "рядок {line}, стовпець {column}",
      atLine: "рядок {line}",
      atPosition: "позиція {position}",
    },
    types: {
      object: "об'єкт",
      array: "масив",
      string: "рядок",
      number: "число",
      boolean: "логічний",
      null: "null",
    },
    validate: {
      idleHint: "Вставте JSON, щоб перевірити відповідність стандартному синтаксису.",
      validTitle: "Валідний JSON",
      validBody: "Кореневий тип: {type}",
      invalidTitle: "Некоректний JSON",
    },
    tree: {
      idleTitle: "Тут з'явиться дерево",
      idleBody: "Вставте JSON ліворуч і натисніть «Показати дерево».",
      errorTitle: "Не вдалося побудувати дерево",
      errorBody: "Виправте синтаксичні помилки в JSON і спробуйте знову.",
    },
    search: {
      query: "Знайти",
      replaceWith: "Замінити на",
      matchCount: "{current} з {total}",
      noMatches: "Збігів немає",
      noMatchesBody: "За вашим запитом нічого не знайдено у ключах і значеннях.",
      idleTitle: "Тут з'являться результати пошуку",
      idleBody: "Введіть запит для пошуку за ключами та значеннями й натисніть «Знайти».",
      errorTitle: "Пошук недоступний",
      errorBody: "Перед пошуком виправте синтаксичні помилки в JSON.",
      kindKey: "ключ",
      kindValue: "значення",
      activeHint: "{kind} · {path}",
      replacedCount: "Замінено елементів: {count}.",
    },
    diff: {
      idleTitle: "Тут з'являться відмінності",
      idleBody: "Заповніть обидва поля — JSON А та JSON Б — для порівняння.",
      identical: "Відмінностей немає. Структура та значення обох документів збігаються.",
      added: "Додано / є лише в Б",
      removed: "Видалено / є лише в А",
      changed: "Змінено",
      sideEmpty: "Цей бік порожній.",
      emptyA: "JSON А порожній.",
      emptyB: "JSON Б порожній.",
      bothInvalid: "Обидва документи — JSON А та JSON Б — некоректні.",
    },
    jsonpath: {
      whatIs:
        "JSONPath дозволяє вибирати потрібні значення з вкладеного JSON — подібно до CSS-селекторів для даних. Натисніть на приклад нижче, щоб підставити вираз.",
      hintTitle: "Шпаргалка із синтаксису",
      hintBody: `$              кореневий документ
.users         ім'я властивості
[*]            усі елементи масиву
[0]            перший елемент масиву`,
      idleTitle: "Тут з'являться результати запиту",
      idleBody: "Введіть вираз шляху та запустіть перевірку.",
      errorTitle: "Не вдалося виконати запит",
      errorBody: "Виправте помилку в JSON або шляху та спробуйте знову.",
      noResults: "За цим шляхом нічого не знайдено.",
      emptyPath: "Введіть вираз JSONPath.",
    },
    transform: {
      tsIdleTitle: "Тут з'являться типи TypeScript",
      tsIdleBody: "Вставте JSON, щоб згенерувати типи TypeScript.",
      zodIdleTitle: "Тут з'явиться схема Zod",
      zodIdleBody: "Вставте JSON, щоб згенерувати схему Zod.",
      schemaExplain: "JSON ↔ Schema",
      schemaUse:
        "Сформуйте JSON Schema з вихідного JSON або згенеруйте приклад JSON за схемою.",
      schemaIdleTitle: "Тут з'явиться JSON Schema",
      schemaIdleBody: "Вставте JSON, щоб згенерувати JSON Schema.",
      yamlIdleTitle: "Тут з'явиться YAML",
      yamlIdleBody: "Вихідний JSON перетворюється у формат YAML.",
      yamlToJsonIdle: "Вставте YAML вище, щоб конвертувати у вихідний JSON.",
      yamlApplied: "Конвертовано та застосовано до вихідного JSON.",
      csvIdleTitle: "Тут з'явиться CSV",
      csvIdleBodyJson:
        "Перетворіть один об'єкт, масив об'єктів або об'єкт зі списком із вихідного JSON у CSV.",
      csvIdleBodyCsv: "Вставте CSV із рядком заголовків, щоб конвертувати в JSON.",
      csvToJsonIdle: "Вставте CSV вище, щоб конвертувати у вихідний JSON.",
      csvApplied: "Конвертовано та застосовано до вихідного JSON.",
      csvUnsupported: "Таку структуру JSON не можна подати у вигляді CSV.",
    },
    utilities: {
      sortAsc: "А → Я",
      sortDesc: "Я → А",
      sortIdleTitle: "Готово до сортування",
      sortIdleBody: "Оберіть А → Я або Я → А, щоб побачити відсортовані ключі у виводі.",
      sortApplied: "Ключі відсортовано. Перегляньте результат нижче.",
      removeOptions: "Які порожні значення видаляти",
      removeNull: "null",
      removeEmptyString: '""',
      removeEmptyArray: "[]",
      removeEmptyObject: "{}",
      removeNullLabel: "null",
      removeEmptyStringLabel: "порожні рядки",
      removeEmptyArrayLabel: "порожні масиви",
      removeEmptyObjectLabel: "порожні об'єкти",
      removePreserveHint: "Значення false і 0 зберігаються та не видаляються.",
      removeIdleTitle: "Тут з'явиться очищений JSON",
      removeIdleBody: "Оберіть, що потрібно видалити, і запустіть обробку.",
      nestedLabel: "Вкладений",
      flatLabel: "Плаский",
      flattenHint: "Перетворює вкладені об'єкти на ключі через крапку (наприклад, address.city, skills.0).",
      flattenUse:
        "Зручно при вивантаженні в таблиці, .env, пошукові індекси або API, яким потрібен плаский словник.",
      flattenIdleTitle: "Готово до розгортання",
      flattenIdleBody: "Вкладені ключі з'являться у виводі як шляхи через крапку.",
      flattenApplied: "Розгорнуто. Перегляньте результат нижче.",
      unflattenHint: "Збирає шляхи через крапку назад у вкладені об'єкти, а числові сегменти — у масиви.",
      unflattenUse:
        "Корисно, коли пласкі ключі на кшталт user.name або skills.0 потрібно повернути у звичайний вкладений JSON.",
      unflattenIdleTitle: "Тут з'явиться вкладений JSON",
      unflattenIdleBody: "Вставте об'єкт із ключами через крапку, щоб відновити вкладеність.",
      escapeIdleTitle: "Тут з'явиться екранований рядок",
      escapeIdleBody: "JSON екранується так, щоб його можна було безпечно вставити у рядковий літерал.",
      escapeHint:
        'Перетворює JSON на один екранований рядок, де лапки й переноси рядків стають " та , щоб безпечно вкласти його в інший рядок.',
      escapeUse:
        "Стане в пригоді при вставці JSON у код, змінні середовища або логи без поломки зовнішніх лапок.",
      unescapeIdleTitle: "Тут з'явиться JSON без екранування",
      unescapeIdleBody: "Вставте екранований JSON-рядок, щоб відновити вихідний JSON.",
      repairHint:
        "Покроково лагодить битий, обрізаний, з коментарями або недописаний під час редагування JSON.",
      repairUse:
        "Виправляє висячі коми, пропущені лапки, коми та дужки, коментарі, блоки коду, літерали Python/JS, JSONP, типи MongoDB, NDJSON, обривки та сліди редагування.",
      repairAlreadyValid: "JSON уже був валідним — оновлено лише форматування.",
      repairFormatted: "Відформатовано.",
      repairReady: "Автовідновлення готове.",
      repairApplied: "Полагоджено.",
      repairAppliedToSource: "Застосовано до вихідного JSON.",
      repairFailedTitle: "Не вдалося повністю полагодити",
      repairFailedAt: "{message} ({line}:{column})",
      repairPreview: "Прев'ю виправлень",
      repairFixes: {
        "trailing-commas": "висячі коми",
        "single-quotes": "одинарні лапки",
        "smart-quotes": "фігурні лапки",
        "unquoted-keys": "ключі без лапок",
        "missing-commas": "пропущені коми",
        "missing-brackets": "незакриті дужки",
        comments: "коментарі",
        "code-fence": "блоки коду",
        "python-literals": "літерали Python",
        "js-undefined": "undefined → null",
        jsonp: "обгортка JSONP",
        "escaped-string": "екранований JSON-рядок",
        mongodb: "типи MongoDB",
        ndjson: "NDJSON → масив",
        ellipsis: "три крапки (…)",
        "string-concat": "конкатенація рядків",
        whitespace: "пробіли та переноси рядків",
        truncated: "обрізання / неповний ввід",
        "mid-edit-junk": "артефакти редагування",
      },
      repairIdleTitle: "Тут з'явиться відновлений JSON",
      repairIdleBody:
        "Вставте неповний фрагмент або JSON-подібні дані у вихідний JSON, щоб побачити результат.",
      fromSchemaHint:
        "Генерує приклад JSON за JSON Schema на основі type, properties, required, items, enum та default.",
      fromSchemaIdleTitle: "Тут з'явиться приклад JSON",
      fromSchemaIdleBody: "Вставте JSON Schema нижче, щоб згенерувати приклад.",
      extractHint:
        'Витягує листкові шляхи та значення (наприклад, { path: "address.city", value: "Київ" }).',
      extractIdleTitle: "Тут з'являться витягнуті ключі та значення",
      extractIdleBody: "Оберіть поля вище, щоб отримати пари шлях і значення.",
      extractKeysHint: "Показує вкладені ключі шляхами через крапку (індекси масивів — як .0).",
      extractKeysIdleTitle: "Тут з'являться витягнуті ключі",
      extractKeysIdleBody: "Вставте JSON, щоб зібрати всі ключі.",
      extractValuesHint: "Збирає всі листкові значення (примітиви та null).",
      extractValuesIdleTitle: "Тут з'являться витягнуті значення",
      extractValuesIdleBody: "Вставте JSON, щоб зібрати всі значення.",
      fieldsLabel: "Поля з вихідного JSON",
      fieldsClickHint:
        "Натисніть на шлях, щоб обрати. Вкладені властивості розділяються крапкою.",
      fieldsSelectAll: "Обрати всі",
      fieldsClear: "Зняти вибір",
      fieldsEmpty: "У цьому JSON немає полів для вибору.",
      pickHint: "Залишає лише обрані поля. Натискайте на шляхи у списку нижче.",
      pickIdleTitle: "Тут з'явиться результат",
      pickIdleBody: "",
      omitHint: "Видаляє обрані поля. Натискайте на шляхи у списку нижче.",
      omitIdleTitle: "Тут з'явиться результат",
      omitIdleBody: "",
      compareHint: "Порівнює два JSON-документи за структурою поруч, без урахування різниці у значеннях.",
      compareUse:
        "Ключі, яких немає в А, підсвічуються червоним, додані в Б — зеленим, а розбіжності за типами — жовтим.",
      compareBack: "Назад у Workbench",
      compareIdleTitle: "Вкажіть два JSON-документи",
      compareIdleBody: "Заповніть обидва боки, щоб порівняти їхню структуру.",
      compareIdentical: "Структури збігаються: ті самі ключі та типи даних.",
      compareMissing: "Відсутні ключі (лише в А)",
      compareExtra: "Додані ключі (лише в Б)",
      compareType: "Різний тип",
    },
    empty: {
      formatTitle: "Тут з'явиться відформатований JSON",
      formatBody: "Вставте JSON ліворуч і натисніть «Форматувати».",
    },
    soon: {
      badge: "Незабаром",
      title: "{tool} з'явиться незабаром",
      body: "Цей інструмент входить до дорожньої карти Workbench і вийде в наступних оновленнях.",
    },
    tools: {
      format: "Форматувати",
      minify: "Стиснути",
      validate: "Перевірити",
      tree: "Дерево",
      search: "Пошук",
      diff: "Різниця",
      jsonpath: "JSONPath",
      convert: "Конвертувати",
      toTypescript: "TypeScript",
      toZod: "Zod",
      toSchema: "JSON Schema",
      yaml: "YAML",
      csv: "CSV",
      sortKeys: "Сортувати ключі",
      removeEmpty: "Видалити порожнє",
      flatten: "Розгорнути",
      unflatten: "Згорнути в об'єкт",
      escape: "Екранувати",
      unescape: "Зняти екранування",
      repair: "Полагодити",
      extract: "Ключі та значення",
      extractKeys: "Витягти ключі",
      extractValues: "Витягти значення",
      pick: "Обрати поля",
      omit: "Виключити поля",
      compareStructure: "Порівняти структуру",
    },
  },
  generator: {
    title: "Генератор даних",
    subtitle: "Швидко генеруйте реалістичні тестові дані для фронтенду.",
    chooseType: "Тип даних",
    searchPlaceholder: "Пошук типу даних…",
    noTopics: "Відповідних типів даних не знайдено.",
    fieldsLegend: "Поля",
    moreFields: "Показати більше полів",
    lessFields: "Приховати необов'язкові поля",
    optionalFields: "Необов'язкові поля",
    records: "Кількість записів",
    customQty: "Своя",
    country: "Країна",
    countrySearch: "Пошук країни…",
    selectPlaceholder: "Оберіть тип даних…",
    outputMode: "Формат виводу",
    modePayload: "Тіло POST",
    modeApi: "Запис API",
    modePayloadHint: "Без id та часових міток — зручно для POST-запиту на створення.",
    modeApiHint: "Містить id, createdAt та updatedAt — як збережений запис API.",
    jsonType: "JSON",
    viewJson: "JSON",
    viewType: "TS",
    generate: "Згенерувати {n}",
    generating: "Генерація {n}…",
    generateAgain: "Згенерувати знову",
    refresh: "Оновити",
    generated: "Згенеровано: {n}",
    download: "Завантажити",
    createApi: "Створити API",
    createSuccess: "Тимчасовий API створено.",
    createBlockedArray:
      "Тимчасові API підтримують до 500 записів. Зменште кількість і спробуйте ще раз.",
    createBlockedSize:
      "Розмір JSON перевищує ліміт тимчасових API (64 КБ). Оберіть менше записів або полів.",
    openTemporary: "Відкрити у Тимчасових API",
    emptyTitle: "Оберіть тип даних",
    emptyBody: "Оберіть тему вище, щоб згенерувати реалістичні тестові записи.",
    duration1h: "1 година",
    duration6h: "6 годин",
    duration12h: "12 годин",
    duration24h: "24 години",
    countries: {
      all: "Усі країни",
      IR: "Іран",
      DE: "Німеччина",
      US: "США",
      GB: "Велика Британія",
      FR: "Франція",
      NL: "Нідерланди",
      JP: "Японія",
      CA: "Канада",
    },
    categories: {
      people: "Люди",
      ecommerce: "E-commerce",
      content: "Контент",
      media: "Медіа",
      business: "Бізнес",
      location: "Локації",
    },
    fields: {
      id: "id",
      name: "ім'я",
      username: "логін",
      email: "email",
      avatar: "аватар",
      phone: "телефон",
      company: "компанія",
      location: "локація",
      age: "вік",
      role: "роль",
      jobTitle: "посада",
      department: "відділ",
      bio: "про себе",
      website: "сайт",
      createdAt: "дата створення",
      updatedAt: "дата оновлення",
      hiredAt: "дата найму",
      ordersCount: "кількість замовлень",
      totalSpent: "сума покупок",
      postsCount: "кількість постів",
      price: "ціна",
      image: "зображення",
      category: "категорія",
      description: "опис",
      brand: "бренд",
      stock: "залишок",
      rating: "рейтинг",
      sku: "SKU",
      colors: "кольори",
      orderId: "номер замовлення",
      customer: "покупець",
      items: "позиції",
      total: "разом",
      status: "статус",
      orderDate: "дата замовлення",
      paymentStatus: "статус оплати",
      shippingAddress: "адреса доставки",
      user: "користувач",
      comment: "коментар",
      post: "пост",
      date: "дата",
      product: "товар",
      title: "заголовок",
      verified: "підтверджено",
      helpful: "корисно",
      slug: "слаг",
      parentCategory: "батьківська категорія",
      productCount: "кількість товарів",
      quantity: "кількість",
      discount: "знижка",
      code: "код",
      type: "тип",
      expiresAt: "діє до",
      minimumOrder: "мінімальне замовлення",
      usageLimit: "ліміт використань",
      active: "активний",
      amount: "сума",
      currency: "валюта",
      paymentMethod: "спосіб оплати",
      transactionId: "ID транзакції",
      order: "замовлення",
      carrier: "служба доставки",
      trackingNumber: "трек-номер",
      estimatedDelivery: "очікувана доставка",
      body: "текст",
      author: "автор",
      tags: "теги",
      publishedAt: "дата публікації",
      likes: "лайки",
      views: "перегляди",
      replies: "відповіді",
      attachments: "вкладення",
      actionUrl: "посилання дії",
      sender: "відправник",
      receiver: "отримувач",
      message: "повідомлення",
      read: "прочитано",
      artist: "виконавець",
      cover: "обкладинка",
      year: "рік",
      genre: "жанр",
      tracks: "треки",
      album: "альбом",
      duration: "тривалість",
      poster: "постер",
      director: "режисер",
      language: "мова",
      plays: "прослуховування",
      label: "лейбл",
      pages: "сторінок",
      isbn: "ISBN",
      instructor: "викладач",
      level: "рівень",
      lessons: "уроки",
      students: "студенти",
      employees: "співробітники",
      logo: "логотип",
      industry: "галузь",
      salary: "зарплата",
      experience: "досвід",
      remote: "віддалено",
      founded: "рік заснування",
      postedAt: "опубліковано",
      capacity: "місткість",
      capital: "столиця",
      flag: "прапор",
      region: "регіон",
      population: "населення",
      street: "вулиця та будинок",
      postalCode: "поштовий індекс",
      latitude: "широта",
      longitude: "довгота",
      country: "країна",
      city: "місто",
      notes: "нотатки",
      team: "команда",
      joinedAt: "дата приєднання",
      skills: "навички",
      specialty: "спеціалізація",
      hospital: "клініка",
      licenseNumber: "номер ліцензії",
      yearsExperience: "стаж (років)",
      bloodType: "група крові",
      diagnosis: "діагноз",
      doctor: "лікар",
      admittedAt: "дата надходження",
      vehicleType: "тип авто",
      plateNumber: "держномер",
      tripsCount: "поїздок",
      roomNumber: "номер кімнати",
      checkIn: "заїзд",
      checkOut: "виїзд",
      nights: "ночей",
      followers: "підписники",
      following: "підписки",
      grade: "клас",
      school: "школа",
      gpa: "середній бал",
      major: "напрям",
      enrollmentYear: "рік вступу",
      subject: "предмет",
      classesCount: "кількість класів",
      invoiceNumber: "номер рахунку",
      issueDate: "дата виставлення",
      dueDate: "термін оплати",
      tax: "ПДВ",
      itemsCount: "кількість позицій",
      target: "ціль",
      targetType: "тип цілі",
      reaction: "реакція",
      color: "колір",
      thumbnail: "прев'ю",
      channel: "канал",
      url: "URL",
      width: "ширина",
      height: "висота",
      alt: "alt-текст",
      photographer: "фотограф",
      host: "ведучий",
      episodes: "випуски",
      subscribers: "підписники",
      owner: "власник",
      public: "публічний",
      progress: "прогрес",
      teamSize: "розмір команди",
      budget: "бюджет",
      startDate: "дата старту",
      membersCount: "учасників",
      focus: "фокус",
      countriesCount: "кількість країн",
      areaKm2: "площа (км²)",
      timezone: "часовий пояс",
      terminals: "термінали",
      altitude: "висота",
      accuracy: "точність",
    },
    topics: {
      users: {
        name: "Користувачі",
        description: "Профілі користувачів для застосунків та адмінок",
        preview: {
          line1: "Олександр Коваленко",
          line2: "@oleksandr_kovalenko · oleksandr@mail.test",
          line3: "Київ",
        },
      },
      customers: {
        name: "Покупці",
        description: "Контакти та дані акаунтів покупців",
        preview: {
          line1: "Софія Ткаченко",
          line2: "sofiia@demo.dev",
          line3: "+380 (67) 555-01-42",
        },
      },
      employees: {
        name: "Співробітники",
        description: "Учасники команди з посадами та відділами",
        preview: {
          line1: "Максим Бондаренко",
          line2: "Frontend-розробник",
          line3: "Розробка · Acme",
        },
      },
      authors: {
        name: "Автори",
        description: "Автори статей і творці контенту",
        preview: {
          line1: "Анастасія Мельник",
          line2: "Пише про продуктовий дизайн і UX.",
        },
      },
      contacts: {
        name: "Контакти",
        description: "Контакти та компанії для CRM",
        preview: {
          line1: "Артем Шевченко",
          line2: "artem@acme.test · Acme",
        },
      },
      "team-members": {
        name: "Учасники команди",
        description: "Учасники продуктових та інженерних команд",
        preview: {
          line1: "Катерина Кравченко",
          line2: "Техлід · Платформа",
        },
      },
      doctors: {
        name: "Лікарі",
        description: "Фахівці зі спеціалізацією та клінікою",
        preview: {
          line1: "Д-р Дмитро Бойко",
          line2: "Кардіологія · Міська клініка № 1",
        },
      },
      patients: {
        name: "Пацієнти",
        description: "Картки пацієнтів із діагнозом та групою крові",
        preview: {
          line1: "Вікторія Савченко",
          line2: "A+ · Гіпертонія",
        },
      },
      drivers: {
        name: "Водії",
        description: "Водії сервісів поїздок із типом авто та рейтингом",
        preview: {
          line1: "Назар Руденко",
          line2: "Седан · ★ 4,8",
        },
      },
      guests: {
        name: "Гості",
        description: "Гості готелю з номером кімнати та статусом заїзду",
        preview: {
          line1: "Марія Мороз",
          line2: "Кімната 412 · Заселилася",
        },
      },
      profiles: {
        name: "Профілі",
        description: "Соціальні профілі з підписниками та біо",
        preview: {
          line1: "Богдан Лисенко",
          line2: "@bohdan_lysenko · 12 тис. підписників",
        },
      },
      "girl-students": {
        name: "Ученицi",
        description: "Профілі школярок із класом та школою",
        preview: {
          line1: "Злата Поліщук",
          line2: "10-А клас · Ліцей № 15",
        },
      },
      "boy-students": {
        name: "Учнi",
        description: "Профілі школярів із класом та школою",
        preview: {
          line1: "Тимофій Гриценко",
          line2: "9-Б клас · Гімназія № 7",
        },
      },
      teachers: {
        name: "Вчителі",
        description: "Викладачі з предметом та школою",
        preview: {
          line1: "Олена Марченко",
          line2: "Математика · Школа № 24",
        },
      },
      products: {
        name: "Товари",
        description: "Товари магазину з ціною та характеристиками",
        preview: {
          line1: "Бездротові навушники із шумозаглушенням",
          line2: "4 990 грн · Електроніка",
          line3: "★★★★☆",
        },
      },
      orders: {
        name: "Замовлення",
        description: "Замовлення з позиціями та статусом виконання",
        preview: {
          line1: "Замовлення #10482",
          line2: "3 товари · 7 450 грн",
          line3: "Доставлено",
        },
      },
      reviews: {
        name: "Відгуки",
        description: "Оцінки в зірках і коментарі покупців",
        preview: {
          line1: "★★★★★ Чудова покупка",
          line2: "Акуратне складання та зручно користуватися.",
        },
      },
      categories: {
        name: "Категорії",
        description: "Категорії каталогу для магазинів",
        preview: { line1: "Електроніка", line2: "electronics" },
      },
      "cart-items": {
        name: "Товари в кошику",
        description: "Позиції в кошику покупця",
        preview: { line1: "Смарт-годинник", line2: "2 × 3 290 грн · 6 580 грн" },
      },
      coupons: {
        name: "Промокоди",
        description: "Коди знижок і правила застосування",
        preview: { line1: "PRYVET10", line2: "Знижка 10% · до 2026-12-01" },
      },
      payments: {
        name: "Платежі",
        description: "Оплати із сумою та способом розрахунку",
        preview: { line1: "1 850,00 UAH", line2: "Банківська картка · Оплачено" },
      },
      shipments: {
        name: "Доставки",
        description: "Статус відправлення та служба доставки",
        preview: { line1: "ZAM-10482 · Нова Пошта", line2: "У дорозі" },
      },
      invoices: {
        name: "Рахунки",
        description: "Рахунки до оплати із сумою та строком",
        preview: { line1: "RKH-10482", line2: "32 000 грн · Оплачено" },
      },
      brands: {
        name: "Бренди",
        description: "Бренди з логотипом і кількістю товарів",
        preview: { line1: "Acme", line2: "acme · 128 товарів" },
      },
      posts: {
        name: "Пости",
        description: "Статті блогу та дописи у стрічці",
        preview: { line1: "Проєктуємо прості інтерфейси", line2: "авторка Анастасія Мельник" },
      },
      comments: {
        name: "Коментарі",
        description: "Коментарі до постів і товарів",
        preview: {
          line1: "Дуже чітко та по суті!",
          line2: "anastasiia · 12 лайків",
        },
      },
      messages: {
        name: "Повідомлення",
        description: "Повідомлення в чатах та особистому листуванні",
        preview: {
          line1: "Можеш глянути свіжу збірку?",
          line2: "Максим Бондаренко → Софія Ткаченко",
        },
      },
      notifications: {
        name: "Сповіщення",
        description: "Сповіщення в застосунку та оновлення",
        preview: { line1: "Новий коментар", line2: "Спільнота · 2 год тому" },
      },
      tags: {
        name: "Теги",
        description: "Теги зі слагом і лічильником публікацій",
        preview: { line1: "typescript", line2: "142 пости" },
      },
      "content-categories": {
        name: "Рубрики контенту",
        description: "Розділи для статей і посібників",
        preview: { line1: "Гайди", line2: "guides · 86 постів" },
      },
      likes: {
        name: "Лайки",
        description: "Позначки «Подобається» до постів і коментарів",
        preview: { line1: "Богдан Лисенко вподобав пост", line2: "Пост · Лайк" },
      },
      albums: {
        name: "Альбоми",
        description: "Музичні альбоми з обкладинкою та треками",
        preview: {
          line1: "Random Access Memories",
          line2: "Daft Punk",
          line3: "2013 · 13 треків",
        },
      },
      songs: {
        name: "Треки",
        description: "Аудіокомпозиції з тривалістю та виконавцем",
        preview: { line1: "Midnight Cruise", line2: "3:42 · Електроніка" },
      },
      movies: {
        name: "Фільми",
        description: "Фільми з постером і рейтингом",
        preview: { line1: "Late Night Express", line2: "2021 · ★ 8,2" },
      },
      books: {
        name: "Книги",
        description: "Книги з автором та обкладинкою",
        preview: { line1: "Нотатки про інтерфейси", line2: "Анастасія Мельник · 2019" },
      },
      videos: {
        name: "Відео",
        description: "Відеоролики з тривалістю та переглядами",
        preview: {
          line1: "Збираємо адмінку за 10 хвилин",
          line2: "12:40 · 84 тис. переглядів",
        },
      },
      images: {
        name: "Зображення",
        description: "Графіка з роздільною здатністю та тегами",
        preview: { line1: "Захід сонця над Дніпром", line2: "1280×720" },
      },
      podcasts: {
        name: "Подкасти",
        description: "Шоу з ведучим та кількістю випусків",
        preview: { line1: "Код і кава", line2: "48 вип. · Технології" },
      },
      playlists: {
        name: "Плейлисти",
        description: "Добірки треків з автором і жанром",
        preview: { line1: "Фокус", line2: "32 треки · Електроніка" },
      },
      companies: {
        name: "Компанії",
        description: "Профілі компаній і галузі",
        preview: { line1: "ТОВ «Акме»", line2: "IT · Київ" },
      },
      jobs: {
        name: "Вакансії",
        description: "Позиції з локацією та форматом роботи",
        preview: {
          line1: "Frontend-розробник",
          line2: "Google · Київ · Повна зайнятість",
        },
      },
      courses: {
        name: "Курси",
        description: "Навчальні курси з програмою та викладачем",
        preview: { line1: "React на практиці", line2: "Середній · 12 год" },
      },
      events: {
        name: "Події",
        description: "Мітапи, конференції та воркшопи",
        preview: { line1: "Frontend Мітап", line2: "Київ · Воркшоп" },
      },
      projects: {
        name: "Проєкти",
        description: "Проєкти з прогресом і бюджетом",
        preview: { line1: "Редизайн аналітики", line2: "У роботі · 72%" },
      },
      teams: {
        name: "Команди",
        description: "Внутрішні команди з лідом і складом",
        preview: { line1: "Команда продукту", line2: "8 осіб · Розробка" },
      },
      continents: {
        name: "Континенти",
        description: "Частини світу з кодом і базовою статистикою",
        preview: { line1: "Європа", line2: "EU · 44 країни" },
      },
      countries: {
        name: "Країни",
        description: "Країни з назвою, кодом і прапором",
        preview: { line1: "Україна", line2: "UA · Київ" },
      },
      cities: {
        name: "Міста",
        description: "Міста з прив'язкою до регіону та країни",
        preview: { line1: "Львів", line2: "Україна · Західний регіон" },
      },
      addresses: {
        name: "Адреси",
        description: "Адреси доставки та офісів",
        preview: {
          line1: "вул. Хрещатик, буд. 22",
          line2: "01001 Київ, Україна",
        },
      },
      regions: {
        name: "Регіони",
        description: "Географічні регіони та області",
        preview: { line1: "Київська область", line2: "Україна · Київ" },
      },
      neighborhoods: {
        name: "Райони",
        description: "Міські райони та мікрорайони",
        preview: { line1: "Поділ", line2: "Київ · 04070" },
      },
      airports: {
        name: "Аеропорти",
        description: "Аеропорти з кодом і містом",
        preview: { line1: "Бориспіль", line2: "KBP · Україна" },
      },
      coordinates: {
        name: "Координати",
        description: "Широта, довгота та геодані",
        preview: {
          line1: "50.450100, 30.523400",
          line2: "Київ · Україна",
        },
      },
    },
    errors: {
      pickTopic: "Спочатку оберіть тип даних.",
      INVALID_TOPIC: "Невідомий тип даних.",
      INVALID_FIELDS: "Оберіть принаймні одне поле.",
      INVALID_QUANTITY: "Кількість має бути від 1 до 1000.",
      INVALID_COUNTRY: "Некоректна країна.",
      GENERATE_FAILED: "Не вдалося згенерувати дані. Спробуйте трохи пізніше.",
      DOWNLOAD_FAILED: "Не вдалося завантажити файл. Спробуйте трохи пізніше.",
      CREATE_FAILED: "Не вдалося створити тимчасовий API.",
      LIMIT_REACHED: "Досягнуто ліміту у 5 тимчасових API. Спочатку видаліть один.",
      RATE_LIMITED: "Забагато запитів. Спробуйте трохи пізніше.",
    },
  },
  preview: {
    docs: "Документація",
    playground: "Playground",
    blurb: "Невеликий інтерфейс, який показує, як цей API працює на практиці.",
    blurbFaHint: "",
    backToResource: "Назад до ресурсу {name}",
    search: "Пошук",
    create: "Створити",
    edit: "Редагувати",
    delete: "Видалити",
    save: "Зберегти",
    saving: "Збереження…",
    deleting: "Видалення…",
    cancel: "Скасувати",
    fillSample: "Підставити приклад",
    noRecords: "Записів немає",
    loading: "Завантаження…",
    confirmDelete: "Видалити цей запис?",
    confirmDeleteBody: "Цю дію не можна скасувати.",
    networkError: "Помилка мережі",
    authDemoPassword: "У всіх стандартних користувачів єдиний демо-пароль:",
    username: "Логін",
    password: "Пароль",
    login: "Увійти",
    loginSuccess: "Ви увійшли в акаунт.",
    logout: "Вийти",
    getMe: "GET /me",
    token: "Токен",
    user: "Користувач",
    loginFirst: "Спочатку увійдіть, щоб отримати токен",
    createdAt: "Створено",
    fieldLabels: {
      name: "Ім'я",
      username: "Логін",
      email: "Email",
      avatarUrl: "URL аватара",
      role: "Роль",
      city: "Місто",
      country: "Країна",
      company: "Компанія",
      title: "Заголовок",
      body: "Текст",
      published: "Опубліковано",
      userId: "ID користувача",
      postId: "ID поста",
      albumId: "ID альбому",
      url: "URL",
      thumbnailUrl: "URL прев'ю",
      completed: "Виконано",
      description: "Опис",
      price: "Ціна",
      stock: "Залишок",
      category: "Категорія",
      imageUrl: "URL зображення",
      message: "Повідомлення",
      type: "Тип",
      read: "Прочитано",
      code: "Код",
      capital: "Столиця",
      region: "Регіон",
      population: "Населення",
      currency: "Валюта",
      flagUrl: "URL прапора",
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
      teaser: "У розробці — інструменти форматування, порівняння та конвертації",
      hint: "/json — оберіть інструмент для перемикання вигляду",
      badge: "У розробці",
      summary:
        "JSON Workbench (у розробці) — інструмент у браузері для форматування JSON, порівняння структур, пошуку та конвертації. Підтримує TypeScript, Zod, YAML, CSV та утиліти.",
      details: [
        "Відкрийте JSON Workbench на /json та оберіть інструмент для швидкого перемикання (підтримується параметр ?tool=).",
        "Базові інструменти: Форматувати, Дерево, Пошук, JSONPath і Порівняти структуру.",
        "Конвертери: TypeScript, Zod, JSON Schema, YAML та CSV.",
        "Утиліти: Сортувати ключі, Видалити порожнє, Розгорнути, Екранувати, Полагодити, Обрати/Виключити поля та інші.",
        "Продукт активно розвивається — нові інструменти та покращення з'являться в наступних оновленнях.",
      ],
    },
    "2026-09-19-image-generator": {
      title: "Генератор зображень",
      teaser: "Посилання на зображення-заглушки на запит",
      hint: "/image-generator — оберіть SVG або Фото та скопіюйте URL",
      summary:
        "Генеруйте зображення-заглушки за допомогою параметрів URL. Підтримує SVG від MockData та фото з Picsum, а також пресети для аватарів, постів, банерів та інших форматів.",
      details: [
        "На /image-generator оберіть SVG або Фото, задайте ширину й висоту та скопіюйте URL.",
        "Публічні посилання типово повертають випадкове зображення: використовуйте /image/{w}/{h} для SVG або ?type=real для фото.",
        "Передайте довільний ?seed=, щоб зберегти ті самі кольори SVG або фото.",
        "Вставте URL напряму в тег img, CSS або поле зображення.",
      ],
    },
    "2026-09-17-generator": {
      title: "Генератор даних",
      teaser: "Реалістичний JSON за кілька секунд",
      hint: "/generator — оберіть тему, щоб згенерувати, скопіювати або створити API",
      summary:
        "Швидко генеруйте реалістичний JSON для фронтенду. Оберіть тему, поля та кількість записів — потім скопіюйте, завантажте або опублікуйте як тимчасовий API.",
      details: [
        "Генеруйте дані на /generator у категоріях «Люди», «E-commerce», «Контент», «Медіа», «Бізнес» і «Локації».",
        "Підтримує формати тіла POST і запису API; для FA доступні локалізовані перські дані.",
        "Генерує до 1 000 записів за раз у браузері; «Створити API» враховує ліміти тимчасових API (500 записів / 64 КБ).",
        "Вибір і згенеровані дані зберігаються під час переходів (скидаються при оновленні сторінки).",
      ],
    },
    "2026-09-16-temporary": {
      title: "Тимчасові API",
      teaser: "Вставте JSON і отримайте тимчасовий REST URL",
      hint: "/temporary — вставте JSON, щоб створити публічний REST URL",
      summary:
        "Створюйте тимчасові публічні REST-ендпоінти зі вставленого JSON. Без реєстрації; до 5 активних API на браузер.",
      details: [
        "Створюйте на /temporary з терміном дії 1 година, 6 годин, 12 годин або 24 години.",
        "Використовуйте GET, POST, PATCH та DELETE на /api/t/… так само, як для інших ресурсів.",
        "До 5 активних API на браузер і до 20 створень на годину з однієї IP-адреси.",
        "Ставтеся до посилання як до пароля: доки воно не прострочене, будь-хто з посиланням може читати та змінювати дані.",
      ],
    },
    "2026-09-15-preview": {
      title: "Прев'ю ресурсів",
      teaser: "Невеликі екрани, підключені до API",
      hint: "/preview/users — протестуйте CRUD просто в браузері",
      summary:
        "Прості демо-екрани для ресурсів на кшталт Users, Posts та Auth, що працюють поверх реальних API.",
      details: [
        "Відкрийте живе прев'ю зі сторінки документації ресурсу.",
        "Перевірте читання, пошук, пагінацію, створення, редагування та видалення на спільній демо-базі.",
        "Прев'ю Auth містить форму входу (єдиний пароль: password) та запити GET /me з токеном.",
        "За потреби перемкніть мову вгорі, щоб підставити перські дані.",
      ],
    },
    "2026-09-14-lang-fa": {
      title: "Перські дані (?lang=fa)",
      teaser: "Локалізовані тестові дані перською мовою",
      hint: "/api/users?lang=fa — додайте lang=fa для даних перською",
      summary:
        "Додайте ?lang=fa до ендпоінта, щоб отримувати імена, логіни, телефони та тексти перською мовою.",
      details: [
        "Типово використовується англійська; мова задається лише через query-параметр lang=fa (без cookies та Accept-Language).",
        "Відповіді для FA містять Content-Language: fa та підказку шрифту Vazirmatn.",
        "Працює для списків, окремих записів і входу з перськими логінами.",
        "Коли вгорі обрано فارسی, Playground також автоматично додає lang=fa.",
      ],
    },
    "2026-09-12-playground": {
      title: "Playground",
      teaser: "Викликайте API просто в браузері",
      hint: "/playground — надсилайте запити та дивіться JSON",
      summary:
        "Надсилайте API-запити просто в браузері, перевіряйте успішні та неуспішні входи й дивіться відформатований JSON.",
      details: [
        "Оберіть ресурс і дію, відредагуйте query-параметри або JSON-тіло та надішліть запит.",
        "Для входу в Auth зручно порівнювати відповіді 200 і 401 кнопками «Правильні дані» та «Неправильні дані».",
        "Дивіться HTTP-статуси, відформатований JSON і метадані пагінації колекцій.",
        "Запити за ресурсами та остання відповідь зберігаються під час переходів (скидаються при оновленні сторінки).",
      ],
    },
    "2026-09-10-auth": {
      title: "Mock Auth",
      teaser: "Вхід та автентифікація за Bearer-токеном",
      hint: "/api/auth/login — пароль завжди password",
      summary:
        "Надішліть POST на /api/auth/login з обліковими даними демо-користувача та паролем, щоб отримати Bearer-токен для /me.",
      details: [
        "У всіх стандартних користувачів спільний демо-пароль password.",
        "При успіху повертається mock Bearer-токен та об'єкт user (id, name, username, email, role).",
        "Неправильний пароль або невідомий користувач повертають 401 зі зрозумілим описом помилки.",
        "Передайте токен у заголовку Authorization: Bearer <token> у запиті GET /api/auth/me, щоб отримати поточного користувача.",
      ],
    },
    "2026-09-08-resources": {
      title: "Живі REST-ресурси",
      teaser: "Повний CRUD для Users, Posts та інших сутностей",
      hint: "/docs#resources — перегляньте доступні ендпоінти",
      summary:
        "Серед доступних ресурсів — Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications та Countries із підтримкою повного CRUD і пагінації.",
      details: [
        "Списки з пагінацією повертають { data, pagination } з полями page, limit, total та totalPages.",
        "Підтримуються query-параметри для пошуку, сортування, фільтрації, штучної затримки та примусового коду помилки.",
        "Спільна продакшн-база скидається щодня — використовуйте її для демо та тестів, а не для постійного зберігання.",
        "Завантажте машинозчитувану специфікацію на /openapi.json для Postman, Swagger або ШІ-інструментів.",
      ],
    },
  },
  catalog: {
    auth: {
      title: "Auth",
      summary:
        "Mock-ендпоінт входу за логіном і паролем. При успіху повертає Bearer-токен, при помилці доступу — 401.",
    },
    users: {
      title: "Users",
      summary: "Mock CRUD API користувачів із пошуком, фільтрацією за роллю та пагінацією.",
    },
    posts: {
      title: "Posts",
      summary: "Публікації, пов'язані з користувачами, з підтримкою тегів і статусу публікації.",
    },
    comments: {
      title: "Comments",
      summary: "Коментарі до постів із полями імені, email та тексту.",
    },
    albums: {
      title: "Albums",
      summary: "Альбоми користувачів; фотографії посилаються на альбом через albumId.",
    },
    photos: {
      title: "Photos",
      summary: "Зображення всередині альбомів із полями url та thumbnailUrl.",
    },
    todos: {
      title: "Todos",
      summary: "Прості завдання, прив'язані до користувачів, зі статусом виконання.",
    },
    products: {
      title: "Products",
      summary: "Каталог товарів із ціною, залишком, категорією та imageUrl.",
    },
    notifications: {
      title: "Notifications",
      summary: "Сповіщення користувачів із типом та статусом прочитання.",
    },
    countries: {
      title: "Countries",
      summary: "Дані про країни з кодами ISO, регіоном, населенням та прапором.",
    },
  },
};

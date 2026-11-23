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

export const ru: Messages = {
  common: {
    home: "Главная",
    docs: "Документация",
    playground: "Playground",
    contact: "Контакты",
    preview: "Превью",
    search: "Поиск",
    loading: "Загрузка…",
    save: "Сохранить",
    saving: "Сохранение…",
    cancel: "Отмена",
    create: "Создать",
    edit: "Редактировать",
    delete: "Удалить",
    searchPlaceholder: "Поиск API…",
    noResults: "Ничего не найдено",
    new: "Новое",
    inDevelopment: "В разработке",
    actions: "Действия",
    copy: "Копировать",
    copied: "Скопировано",
    live: "Работает",
    open: "Открыть",
    tryIt: "Попробовать",
    learnMore: "Подробнее",
    back: "Назад",
    close: "Закрыть",
    yes: "Да",
    no: "Нет",
    name: "Имя",
    email: "Email",
    message: "Сообщение",
    send: "Отправить",
    sending: "Отправка…",
    networkError: "Ошибка сети",
    temporary: "Временные API",
    temporaryBadge: "Быстрый старт",
    generator: "Генератор данных",
    imageGenerator: "Генератор картинок",
    jsonWorkbench: "Рабочая область JSON",
  },
  header: {
    primaryNav: "Основная навигация",
    whatsNew: "Что нового",
    whatsNewTitle: "Что нового",
    whatsNewSubtitle: "Свежие функции и обновления",
    latest: "Последнее",
    contact: "О проекте и контакты",
    menu: "Меню",
    openMenu: "Открыть меню",
    appearance: "Оформление",
    lightMode: "Включить светлую тему",
    darkMode: "Включить тёмную тему",
    light: "Светлая",
    dark: "Тёмная",
    apiLangGroup: "Язык",
    english: "English",
    persian: "فارسی",
    github: "GitHub",
    githubStars: "GitHub — поставить звезду репозиторию",
  },
  home: {
    tagline:
      "Бесплатные REST mock API с реалистичным JSON. Собирайте прототипы без бэкенда, тестируйте авторизацию и подключайте эндпоинты сразу.",
    taglineNote: "",
    resourcesTitle: "Ресурсы",
    resourcesBlurb:
      "Десять готовых REST API с документацией и примерами. В продакшене используется общая демо-база.",
    searchLabel: "Поиск API и эндпоинтов",
    searchPlaceholder: "Поиск по users, posts, auth…",
    temporaryCtaTitle: "Временные API",
    temporaryCtaBody:
      "Создайте временный API из вставленного JSON или прямо в генераторе. Берегите ссылку как пароль. До 5 активных временных API на браузер.",
    temporaryCtaLink: "Создать временный API",
  },
  notFound: {
    title: "Страница не найдена",
    body: "Такой страницы на MockData нет. Вернитесь на главную или откройте документацию.",
    home: "Главная",
    docs: "Документация",
  },
  blog: {
    title: "Блог",
    description:
      "Заметки и гайды про мок-данные, JSON, API и фронтенд-разработку.",
    all: "Все",
    emptyTitle: "Статей пока нет",
    emptyBody: "Новые публикации появятся здесь позже — загляните ещё раз.",
    emptyCategoryTitle: "В этой категории пусто",
    emptyCategoryBody: "Выберите другую категорию или посмотрите все статьи.",
    readingTime: "{n} мин чтения",
    previousPage: "Назад",
    nextPage: "Далее",
    pageStatus: "Страница {page} из {total}",
    paginationNav: "Навигация по страницам",
    categoriesNav: "Категории блога",
    backToBlog: "Блог",
    previousArticle: "Предыдущая статья",
    nextArticle: "Следующая статья",
    relatedArticles: "Похожие статьи",
    categories: {
      news: "Новости",
      "mock-data": "Мок-данные",
      json: "JSON",
      api: "API",
      frontend: "Фронтенд",
    },
  },
  contact: {
    title: "Контакты",
    intro:
      "Есть вопрос, отзыв или идея? Напишите через форму ниже или отправьте письмо напрямую:",
    name: "Имя",
    email: "Email",
    topic: "Тема",
    message: "Сообщение",
    send: "Отправить",
    sending: "Отправка…",
    success: "Сообщение отправлено. Спасибо за обратную связь — скоро ответим.",
    chooseTopic: "Выберите тему сообщения.",
    pickTopic: "О чём хотите написать?",
    topics: {
      question: "Вопрос",
      bug: "Сообщение об ошибке",
      feature: "Предложение фичи",
      other: "Другое",
    },
  },
  docs: {
    title: "Документация",
    navLabel: "Содержание документации",
    intro:
      "MockData предоставляет mock REST-ресурсы в формате JSON. Вы можете вызывать открытые эндпоинты, проверять сценарии входа, отправлять запросы в Playground, генерировать наборы данных в /generator, создавать заглушки изображений в /image-generator, работать с JSON Workbench на /json и запускать временные API. Ресурсы из продакшен-каталога используют общую базу данных (подробнее см. раздел «Общие данные»).",
    toc: {
      intro: "Введение",
      whatsNew: "Что нового",
      temporary: "Временные API",
      generator: "Генератор данных",
      imageGenerator: "Генератор картинок",
      jsonWorkbench: "Рабочая область JSON",
      sharedData: "Общие данные",
      language: "Язык",
      resources: "Ресурсы",
      openapi: "OpenAPI",
      requests: "Запросы",
      errors: "Ошибки",
      rateLimit: "Лимит запросов",
      reset: "Сброс данных",
    },
    whatsNewTitle: "Что нового",
    whatsNewBlurb:
      "Ключевые обновления для разработчиков от новых к ранним. Нажмите на карточку для подробностей — тот же список доступен по иконке колокольчика сверху.",
    temporaryTitle: "Временные API",
    temporaryBody:
      "Нужен временный REST-эндпоинт со своим JSON? Временные API работают отдельно от общего каталога: вставьте JSON и выберите срок жизни, чтобы получить публичный адрес /api/t/…, либо создайте API напрямую через «Создать API» в генераторе.",
    temporaryBullets: [
      "Создавайте в браузере на /temporary без регистрации (также открывается через «Создать API» на странице /generator).",
      "Выберите срок действия: 1 час, 6 часов, 12 часов или 24 часа (по умолчанию — 12 часов).",
      "Отправляйте GET, POST, PATCH и DELETE на /api/t/… — для коллекции и отдельных записей.",
      "Относитесь к ссылке как к паролю: пока она не истекла, любой обладатель ссылки может читать и менять данные.",
      "Запросы к истёкшим временным API возвращают HTTP 410.",
    ],
    temporaryLimitsTitle: "Ограничения временных API",
    temporaryLimitsBullets: [
      "Не более 5 активных временных API одновременно на один браузер.",
      "Не более 20 созданий API с одного IP за скользящий час (при превышении — HTTP 429).",
      "Максимальный размер JSON-пейлоада — 64 КБ.",
      "До 8 уровней вложенности, до 500 элементов в массиве и до 200 ключей в объекте.",
      "Здесь также действует общий лимит /api (около 60 запросов в минуту с одного IP).",
    ],
    generatorTitle: "Генератор данных",
    generatorBody:
      "Генерируйте реалистичный JSON для фронтенда без ручного заполнения примеров. Всё работает в браузере — данные можно скопировать, скачать или превратить во временный API.",
    generatorBullets: [
      "Перейдите на /generator и выберите тему из категорий: Люди, E-commerce, Контент, Медиа, Бизнес и Локации.",
      "Переключайтесь между форматом тела POST (без id и временных меток) и записью API (с id, createdAt и updatedAt).",
      "Используйте локализованные персидские данные для FA или английские данные из разных стран для EN.",
      "Генерируйте до 1 000 записей за раз в браузере. «Создать API» учитывает лимиты временных API (500 записей / 64 КБ).",
      "Выбор и сгенерированные данные сохраняются при переходах внутри приложения (сбрасываются при полном обновлении страницы).",
    ],
    imageGeneratorTitle: "Генератор картинок",
    imageGeneratorBody:
      "Создавайте ссылки на картинки-заглушки по запросу для ваших интерфейсов. Выберите SVG от MockData или случайные фото с Picsum, задайте ширину и высоту и скопируйте URL для тегов img, CSS или полей изображений.",
    imageGeneratorBullets: [
      "На /image-generator выберите SVG-графику или реальные фотографии.",
      "Общий формат URL: /image/{width}/{height} для SVG и добавьте ?type=real для фото.",
      "По умолчанию возвращается случайный вариант; передайте произвольный ?seed=, чтобы сохранить те же цвета SVG или фото.",
      "Есть готовые пресеты размеров для аватара, превью, профиля, поста, обложки, баннера и сторис.",
    ],
    jsonWorkbenchTitle: "JSON Workbench",
    jsonWorkbenchBody:
      "JSON Workbench (в разработке) — набор инструментов в браузере для форматирования, сравнения, поиска и конвертации JSON во время работы над интерфейсами.",
    jsonWorkbenchBullets: [
      "Откройте JSON Workbench на /json и выберите инструмент для мгновенного переключения (поддерживается параметр ?tool=).",
      "Базовые инструменты: Форматировать, Дерево, Поиск, JSONPath и Сравнить структуру.",
      "Конвертеры: TypeScript, Zod, JSON Schema, YAML и CSV.",
      "Утилиты: Сортировать ключи, Удалить пустое, Развернуть/Свернуть, Экранировать/Починить, Выбрать/Исключить поля и другие.",
      "Работает полностью в браузере — ваш JSON не отправляется на сервер.",
      "Активно развивается — новые инструменты и улучшения появятся в следующих обновлениях.",
    ],
    sharedDataTitle: "Общие данные",
    sharedDataBody:
      "Все пользователи работают с одной живой базой данных: всё, что вы создаёте, меняете или удаляете, сразу видно остальным. В продакшене база сбрасывается к исходным данным раз в сутки по GET /api/cron/reset. Подходит для прототипов и демо, но не для постоянных или чувствительных данных.",
    languageTitle: "Язык",
    languageBody:
      "По умолчанию тексты ресурсов возвращаются на английском. Добавьте query-параметр lang=fa, чтобы получать имена, логины, email, телефоны и фразы на персидском. Cookies и заголовки Accept-Language не используются — учитывается только параметр запроса. Переключение языка в шапке (English | فارسی) также подстраивает Playground и Превью.",
    languageBullets: [
      "Пример: GET /api/users?lang=fa",
      "Ответы для FA содержат Content-Language: fa и подсказку шрифта (Vazirmatn).",
      "Когда сверху выбрано فارسی, раскладка переключается справа налево (RTL), а Playground автоматически добавляет lang=fa.",
    ],
    resourcesTitle: "Ресурсы",
    resourcesBlurb:
      "Сводка по доступным сейчас эндпоинтам и ближайшим возможностям.",
    colResource: "Ресурс",
    colBasePath: "Базовый путь",
    colStatus: "Статус",
    colDocs: "Документация",
    statusLive: "Работает",
    statusDev: "В разработке",
    statusSoon: "Скоро",
    openapiTitle: "OpenAPI",
    openapiBody:
      "Машиночитаемая спецификация для всех текущих эндпоинтов (Auth, Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, Countries и сброса для админов). Удобно импортировать в Postman, Swagger UI или ИИ-инструменты.",
    download: "Скачать",
    requestsTitle: "Запросы",
    requestsBody:
      "Эндпоинты коллекций возвращают data и pagination; отдельные записи возвращают { data }.",
    errorsTitle: "Ошибки",
    errorsBody:
      "Ответы с ошибками содержат объект error. Частые коды состояния: 400 для некорректных запросов, 401 при отсутствии или ошибке авторизации, 404 если запись не найдена, 429 при превышении лимита и 500 при ошибках сервера. Чтобы проверить обработку ошибок на клиенте, добавьте ?status=500 (из диапазона 400–599) и сымитируйте нужный код.",
    rateLimitTitle: "Лимит запросов",
    rateLimitBody:
      "Чтобы сервис оставался стабильным для всех, запросы к /api/* ограничены примерно {limit} запросами в минуту с одного IP. При превышении возвращается HTTP 429 (Too Many Requests); остаток лимита можно смотреть в заголовках X-RateLimit.",
    resetTitle: "Сброс данных",
    resetBody:
      "Все посетители делят одну демо-базу. В продакшене она сбрасывается каждые 24 часа, но вы можете очистить и заново заполнить демо-таблицы исходными данными ниже, указав ключ администратора.",
    resetPanel: {
      intro: "Введите ключ администратора, чтобы сбросить и заново заполнить демо-таблицы.",
      placeholder: "Ключ администратора",
      button: "Сбросить сейчас",
      resetting: "Сброс…",
      needSecret: "Сначала введите ключ администратора.",
      confirm: "Сбросить и заново заполнить демо-таблицы исходными данными?",
      networkError: "Ошибка сети. Проверьте, что сервер запущен.",
      donePrefix: "Сброшено",
    },
    colIndex: "#",
  },
  resourceDocs: {
    endpoints: "Эндпоинты",
    queryParams: "Query-параметры",
    examples: "Примеры запросов",
    response: "Пример ответа",
    tryExample: "Проверить",
    preview: "Превью",
    playground: "Playground",
    backToResources: "К списку ресурсов",
  },
  playground: {
    title: "Playground",
    blurb:
      "Отправляйте реальные запросы к MockData API и изучайте JSON-ответы прямо в браузере. Последний запрос для каждого ресурса сохраняется при переходах по страницам.",
    resource: "Ресурс",
    action: "Действие",
    send: "Отправить",
    sending: "Отправка…",
    response: "Ответ",
    request: "Запрос",
    body: "Тело",
    query: "Query",
    headers: "Заголовки",
    correct: "Верные данные",
    wrong: "Неверные данные",
    password: "Пароль",
    user: "Пользователь",
    pickUser: "Выберите пользователя",
    loadError: "Не удалось загрузить варианты",
    emptyResponse: "Ответа пока нет",
    startHint: "Выберите ресурс и отправьте запрос.",
    types: "TS",
    json: "JSON",
  },
  temporary: {
    title: "Временные API",
    blurb: "Вставьте JSON и поднимите временный API за пару секунд.",
    privacyNote:
      "Берегите ссылку как пароль: пока она не истекла, любой обладатель ссылки может читать и менять данные. До 5 активных временных API на браузер.",
    jsonLabel: "JSON",
    durationLabel: "Срок действия",
    duration1h: "1 час",
    duration6h: "6 часов",
    duration12h: "12 часов",
    duration24h: "24 часа",
    checkJson: "Проверить JSON",
    jsonValid: "Всё в порядке — можно создавать API.",
    jsonHint: "Сначала проверьте JSON или сразу создайте API.",
    create: "Создать API",
    creating: "Создание…",
    acceptFix: "Применить правку и создать",
    rejectFix: "Продолжить редактирование",
    fixedPreview: "Мы автоматически исправили часть проблем. Проверьте и создайте.",
    myApis: "Мои временные API",
    emptyList: "Активных временных API пока нет.",
    copyUrl: "Копировать",
    delete: "Удалить",
    deleteAll: "Удалить все",
    deleting: "…",
    confirmDelete: "Удалить этот API?",
    confirmDeleteBody: "Эта ссылка перестанет работать.",
    confirmDeleteAll: "Удалить все API?",
    confirmDeleteAllBody: "Все ссылки из этого списка перестанут работать.",
    cancel: "Отмена",
    limitReached: "Достигнут лимит в 5 API.",
    limitReachedBody: "Удалите один из API ниже или дождитесь истечения срока.",
    createdTitle: "API создан",
    openApi: "Открыть",
    slotsLabel: "{n} из 5",
    maxActive: "",
    sampleJson: `[
  { "id": "1", "firstName": "Артём", "lastName": "Волков", "role": "admin" },
  { "id": "2", "firstName": "Дарья", "lastName": "Соколова", "role": "member" },
  { "id": "3", "firstName": "Максим", "lastName": "Морозов", "role": "member" }
]`,
    issues: {
      EMPTY: "Вставьте JSON-объект или массив.",
      INVALID_JSON: "Некорректный JSON. Проверьте запятые, кавычки и скобки.",
      TOO_LARGE: "Размер JSON превышает лимит ({max} КБ).",
      NOT_OBJECT_OR_ARRAY: "На верхнем уровне должен быть объект { } или массив [ ].",
      TOO_DEEP: "Слишком глубокая вложенность (максимум {max}).",
      ARRAY_TOO_LONG: "Массив длиннее допустимого (максимум {max} элементов).",
      TOO_MANY_KEYS: "Слишком много ключей в одном объекте (максимум {max}).",
      UNSAFE_KEY: "Небезопасный ключ «{key}» не допускается.",
      AUTO_FIXED: "Убраны лишние запятые в конце или небезопасные ключи.",
    },
  },
  imageGenerator: {
    title: "Генератор картинок",
    blurb:
      "Генерируйте картинки-заглушки по запросу для проектов. Копируйте ссылки на SVG от MockData или случайные фото для тегов img, CSS или полей изображений.",
    modeSvg: "SVG",
    modeReal: "Фото",
    width: "Ширина",
    height: "Высота",
    generate: "Сгенерировать URL",
    generating: "Генерация…",
    yourUrl: "Ваш URL API",
    preview: "Превью",
    useInProject: "Использовать в проекте",
    tabUrl: "URL",
    tabHtml: "HTML",
    tabCss: "CSS",
    tabJs: "JavaScript",
    tabCurl: "cURL",
    readySizes: "Готовые размеры",
    sizes: {
      avatar: "Аватар",
      thumbnail: "Превью",
      profile: "Профиль",
      square: "Квадрат",
      post: "Пост",
      cover: "Обложка",
      banner: "Баннер",
      story: "Сторис",
    },
  },
  jsonWorkbench: {
    title: "JSON Workbench",
    blurb:
      "Вставьте JSON один раз и переключайтесь между форматированием, поиском, конвертацией и другими инструментами без повторной вставки.",
    toolNavLabel: "Инструменты Workbench",
    source: {
      title: "Исходный JSON",
      hint: "Вставьте сюда один раз — все инструменты возьмут этот JSON.",
      sample: "Загрузить пример",
      valid: "Валидный JSON.",
      needJson: "Сначала вставьте JSON слева.",
      fixFirst: "Сначала исправьте синтаксическую ошибку в исходном JSON.",
      pickAction: "Что хотите сделать?",
      useResult: "Подставить в исходный JSON",
      diffHint: "Исходный JSON — это сторона А; вставьте JSON Б ниже для сравнения.",
      escapedInput: "Экранированная строка",
      schemaInput: "JSON Schema",
      fromSchemaNote:
        "Вставьте JSON Schema ниже, чтобы сгенерировать пример JSON и применить к исходному.",
    },
    categories: {
      core: "Основное",
      transform: "Конвертация",
      utility: "Утилиты",
    },
    labels: {
      input: "Ввод",
      output: "Вывод",
      tree: "Дерево",
      matches: "Совпадения",
      jsonA: "JSON А",
      jsonB: "JSON Б",
      diffResult: "Различия",
      jsonpath: "JSONPath",
      result: "Результат ({count})",
    },
    actions: {
      format: "Форматировать",
      minify: "Сжать",
      showTree: "Показать дерево",
      search: "Найти",
      clearSearch: "Очистить поиск",
      replace: "Заменить",
      replaceAll: "Заменить всё",
      prevMatch: "Назад",
      nextMatch: "Далее",
      compare: "Сравнить",
      run: "Запустить",
      runPath: "Выполнить путь",
      toTypescript: "В TypeScript",
      toZod: "В Zod",
      toSchema: "В Schema",
      swapDirection: "Поменять направление",
      sortKeys: "Сортировать ключи",
      removeEmpty: "Удалить пустое",
      flatten: "Развернуть",
      unflatten: "Свернуть в объект",
      escape: "Экранировать",
      unescape: "Снять экранирование",
      repair: "Починить JSON",
      fromSchema: "Сгенерировать пример",
      extractKeys: "Извлечь ключи",
      extractValues: "Извлечь значения",
      pick: "Выбрать поля",
      omit: "Исключить поля",
      compareStructure: "Сравнить структуру",
      clear: "Очистить",
      expandAll: "Развернуть всё",
      collapseAll: "Свернуть всё",
      copyPath: "Копировать путь",
      copyValue: "Копировать значение",
    },
    errors: {
      empty: "Вставьте JSON.",
      invalid: "Некорректный JSON.",
      unexpectedEnd: "Неожиданный конец JSON.",
      unexpectedToken: "Неожиданный токен: {token}",
      expectedPropertyName: "Имена свойств должны быть в двойных кавычках.",
      expectedCommaOrBrace: "После значения ожидается ',' или '}'.",
      expectedCommaOrBracket: "После элемента массива ожидается ',' или ']'.",
      expectedColon: "После имени свойства ожидается ':'.",
      unterminatedString: "Незакрытая строка.",
      badControlChar: "Строка содержит недопустимый управляющий символ.",
      badEscape: "Некорректная escape-последовательность в строке.",
      trailingChar: "После значения JSON есть лишние символы.",
      objectKeyExpected: "Здесь ожидается ключ объекта.",
      unexpectedCharacter: "Неожиданный символ: {char}",
      invalidCharacter: "Недопустимый символ: {char}",
      invalidUnicode: "Некорректный Unicode escape: {chars}",
      couldNotRepair: "Не удалось автоматически починить этот JSON.",
      atLineColumn: "строка {line}, столбец {column}",
      atLine: "строка {line}",
      atPosition: "позиция {position}",
    },
    types: {
      object: "объект",
      array: "массив",
      string: "строка",
      number: "число",
      boolean: "логический",
      null: "null",
    },
    validate: {
      idleHint: "Вставьте JSON, чтобы проверить соответствие стандартному синтаксису.",
      validTitle: "Валидный JSON",
      validBody: "Корневой тип: {type}",
      invalidTitle: "Некорректный JSON",
    },
    tree: {
      idleTitle: "Здесь появится дерево",
      idleBody: "Вставьте JSON слева и нажмите «Показать дерево».",
      errorTitle: "Не удалось построить дерево",
      errorBody: "Исправьте синтаксические ошибки в JSON и попробуйте снова.",
    },
    search: {
      query: "Найти",
      replaceWith: "Заменить на",
      matchCount: "{current} из {total}",
      noMatches: "Совпадений нет",
      noMatchesBody: "По вашему запросу ничего не найдено в ключах и значениях.",
      idleTitle: "Здесь появятся результаты поиска",
      idleBody: "Введите запрос для поиска по ключам и значениям и нажмите «Найти».",
      errorTitle: "Поиск недоступен",
      errorBody: "Перед поиском исправьте синтаксические ошибки в JSON.",
      kindKey: "ключ",
      kindValue: "значение",
      activeHint: "{kind} · {path}",
      replacedCount: "Заменено элементов: {count}.",
    },
    diff: {
      idleTitle: "Здесь появятся различия",
      idleBody: "Заполните оба поля — JSON А и JSON Б — для сравнения.",
      identical: "Различий нет. Структура и значения обоих документов совпадают.",
      added: "Добавлено / есть только в Б",
      removed: "Удалено / есть только в А",
      changed: "Изменено",
      sideEmpty: "Эта сторона пуста.",
      emptyA: "JSON А пуст.",
      emptyB: "JSON Б пуст.",
      bothInvalid: "Оба документа — JSON А и JSON Б — некорректны.",
    },
    jsonpath: {
      whatIs:
        "JSONPath позволяет выбирать нужные значения из вложенного JSON — похоже на CSS-селекторы для данных. Нажмите на пример ниже, чтобы подставить выражение.",
      hintTitle: "Шпаргалка по синтаксису",
      hintBody: `$              корневой документ
.users         имя свойства
[*]            все элементы массива
[0]            первый элемент массива`,
      idleTitle: "Здесь появятся результаты запроса",
      idleBody: "Введите выражение пути и запустите проверку.",
      errorTitle: "Не удалось выполнить запрос",
      errorBody: "Исправьте ошибку в JSON или пути и попробуйте снова.",
      noResults: "По этому пути ничего не найдено.",
      emptyPath: "Введите выражение JSONPath.",
    },
    transform: {
      tsIdleTitle: "Здесь появятся типы TypeScript",
      tsIdleBody: "Вставьте JSON, чтобы сгенерировать типы TypeScript.",
      zodIdleTitle: "Здесь появится схема Zod",
      zodIdleBody: "Вставьте JSON, чтобы сгенерировать схему Zod.",
      schemaExplain: "JSON ↔ Schema",
      schemaUse:
        "Сформируйте JSON Schema из исходного JSON или сгенерируйте пример JSON по схеме.",
      schemaIdleTitle: "Здесь появится JSON Schema",
      schemaIdleBody: "Вставьте JSON, чтобы сгенерировать JSON Schema.",
      yamlIdleTitle: "Здесь появится YAML",
      yamlIdleBody: "Исходный JSON преобразуется в формат YAML.",
      yamlToJsonIdle: "Вставьте YAML выше, чтобы конвертировать в исходный JSON.",
      yamlApplied: "Конвертировано и применено к исходному JSON.",
      csvIdleTitle: "Здесь появится CSV",
      csvIdleBodyJson:
        "Преобразуйте один объект, массив объектов или объект со списком из исходного JSON в CSV.",
      csvIdleBodyCsv: "Вставьте CSV со строкой заголовков, чтобы конвертировать в JSON.",
      csvToJsonIdle: "Вставьте CSV выше, чтобы конвертировать в исходный JSON.",
      csvApplied: "Конвертировано и применено к исходному JSON.",
      csvUnsupported: "Такую структуру JSON нельзя представить в виде CSV.",
    },
    utilities: {
      sortAsc: "А → Я",
      sortDesc: "Я → А",
      sortIdleTitle: "Готово к сортировке",
      sortIdleBody: "Выберите А → Я или Я → А, чтобы увидеть отсортированные ключи в выводе.",
      sortApplied: "Ключи отсортированы. Посмотрите результат ниже.",
      removeOptions: "Какие пустые значения удалять",
      removeNull: "null",
      removeEmptyString: '""',
      removeEmptyArray: "[]",
      removeEmptyObject: "{}",
      removeNullLabel: "null",
      removeEmptyStringLabel: "пустые строки",
      removeEmptyArrayLabel: "пустые массивы",
      removeEmptyObjectLabel: "пустые объекты",
      removePreserveHint: "Значения false и 0 сохраняются и не удаляются.",
      removeIdleTitle: "Здесь появится очищенный JSON",
      removeIdleBody: "Выберите, что нужно удалить, и запустите обработку.",
      nestedLabel: "Вложенный",
      flatLabel: "Плоский",
      flattenHint: "Превращает вложенные объекты в ключи через точку (например, address.city, skills.0).",
      flattenUse:
        "Удобно при выгрузке в таблицы, .env, поисковые индексы или API, которым нужен плоский словарь.",
      flattenIdleTitle: "Готово к разворачиванию",
      flattenIdleBody: "Вложенные ключи появятся в выводе как пути через точку.",
      flattenApplied: "Развёрнуто. Посмотрите результат ниже.",
      unflattenHint: "Собирает пути через точку обратно во вложенные объекты, а числовые сегменты — в массивы.",
      unflattenUse:
        "Полезно, когда плоские ключи вроде user.name или skills.0 нужно вернуть в обычный вложенный JSON.",
      unflattenIdleTitle: "Здесь появится вложенный JSON",
      unflattenIdleBody: "Вставьте объект с ключами через точку, чтобы восстановить вложенность.",
      escapeIdleTitle: "Здесь появится экранированная строка",
      escapeIdleBody: "JSON экранируется так, чтобы его можно было безопасно вставить в строковый литерал.",
      escapeHint:
        'Превращает JSON в одну экранированную строку, где кавычки и переносы строк становятся " и , чтобы безопасно вложить его в другую строку.',
      escapeUse:
        "Пригодится при вставке JSON в код, переменные окружения или логи без поломки внешних кавычек.",
      unescapeIdleTitle: "Здесь появится JSON без экранирования",
      unescapeIdleBody: "Вставьте экранированную JSON-строку, чтобы восстановить исходный JSON.",
      repairHint:
        "Пошагово чинит битый, обрезанный, с комментариями или недописанный во время правки JSON.",
      repairUse:
        "Исправляет висячие запятые, пропущенные кавычки, запятые и скобки, комментарии, блоки кода, литералы Python/JS, JSONP, типы MongoDB, NDJSON, обрывки и следы редактирования.",
      repairAlreadyValid: "JSON уже был валиден — обновлено только форматирование.",
      repairFormatted: "Отформатировано.",
      repairReady: "Автовосстановление готово.",
      repairApplied: "Починено.",
      repairAppliedToSource: "Применено к исходному JSON.",
      repairFailedTitle: "Не удалось полностью починить",
      repairFailedAt: "{message} ({line}:{column})",
      repairPreview: "Предпросмотр исправлений",
      repairFixes: {
        "trailing-commas": "висячие запятые",
        "single-quotes": "одинарные кавычки",
        "smart-quotes": "фигурные кавычки",
        "unquoted-keys": "ключи без кавычек",
        "missing-commas": "пропущенные запятые",
        "missing-brackets": "незакрытые скобки",
        comments: "комментарии",
        "code-fence": "блоки кода",
        "python-literals": "литералы Python",
        "js-undefined": "undefined → null",
        jsonp: "обёртка JSONP",
        "escaped-string": "экранированная JSON-строка",
        mongodb: "типы MongoDB",
        ndjson: "NDJSON → массив",
        ellipsis: "многоточие (…)",
        "string-concat": "конкатенация строк",
        whitespace: "пробелы и переносы строк",
        truncated: "обрезка / неполный ввод",
        "mid-edit-junk": "артефакты редактирования",
      },
      repairIdleTitle: "Здесь появится восстановленный JSON",
      repairIdleBody:
        "Вставьте неполный фрагмент или JSON-подобные данные в исходный JSON, чтобы увидеть результат.",
      fromSchemaHint:
        "Генерирует пример JSON по JSON Schema на основе type, properties, required, items, enum и default.",
      fromSchemaIdleTitle: "Здесь появится пример JSON",
      fromSchemaIdleBody: "Вставьте JSON Schema ниже, чтобы сгенерировать пример.",
      extractHint:
        'Извлекает листовые пути и значения (например, { path: "address.city", value: "Москва" }).',
      extractIdleTitle: "Здесь появятся извлечённые ключи и значения",
      extractIdleBody: "Выберите поля выше, чтобы получить пары путь и значение.",
      extractKeysHint: "Показывает вложенные ключи путями через точку (индексы массивов — как .0).",
      extractKeysIdleTitle: "Здесь появятся извлечённые ключи",
      extractKeysIdleBody: "Вставьте JSON, чтобы собрать все ключи.",
      extractValuesHint: "Собирает все листовые значения (примитивы и null).",
      extractValuesIdleTitle: "Здесь появятся извлечённые значения",
      extractValuesIdleBody: "Вставьте JSON, чтобы собрать все значения.",
      fieldsLabel: "Поля из исходного JSON",
      fieldsClickHint:
        "Нажмите на путь, чтобы выбрать. Вложенные свойства разделяются точкой.",
      fieldsSelectAll: "Выбрать все",
      fieldsClear: "Снять выбор",
      fieldsEmpty: "В этом JSON нет полей для выбора.",
      pickHint: "Оставляет только выбранные поля. Нажимайте на пути в списке ниже.",
      pickIdleTitle: "Здесь появится результат",
      pickIdleBody: "",
      omitHint: "Удаляет выбранные поля. Нажимайте на пути в списке ниже.",
      omitIdleTitle: "Здесь появится результат",
      omitIdleBody: "",
      compareHint: "Сравнивает два JSON-документа по структуре рядом, без учёта разницы в значениях.",
      compareUse:
        "Ключи, которых нет в А, подсвечиваются красным, добавленные в Б — зелёным, а расхождения по типам — жёлтым.",
      compareBack: "Назад в Workbench",
      compareIdleTitle: "Укажите два JSON-документа",
      compareIdleBody: "Заполните обе стороны, чтобы сравнить их структуру.",
      compareIdentical: "Структуры совпадают: те же ключи и типы данных.",
      compareMissing: "Отсутствующие ключи (только в А)",
      compareExtra: "Добавленные ключи (только в Б)",
      compareType: "Разный тип",
    },
    empty: {
      formatTitle: "Здесь появится отформатированный JSON",
      formatBody: "Вставьте JSON слева и нажмите «Форматировать».",
    },
    soon: {
      badge: "Скоро",
      title: "{tool} появится скоро",
      body: "Этот инструмент входит в дорожную карту Workbench и выйдет в следующих обновлениях.",
    },
    tools: {
      format: "Форматировать",
      minify: "Сжать",
      validate: "Проверить",
      tree: "Дерево",
      search: "Поиск",
      diff: "Разница",
      jsonpath: "JSONPath",
      convert: "Конвертировать",
      toTypescript: "TypeScript",
      toZod: "Zod",
      toSchema: "JSON Schema",
      yaml: "YAML",
      csv: "CSV",
      sortKeys: "Сортировать ключи",
      removeEmpty: "Удалить пустое",
      flatten: "Развернуть",
      unflatten: "Свернуть в объект",
      escape: "Экранировать",
      unescape: "Снять экранирование",
      repair: "Починить",
      extract: "Ключи и значения",
      extractKeys: "Извлечь ключи",
      extractValues: "Извлечь значения",
      pick: "Выбрать поля",
      omit: "Исключить поля",
      compareStructure: "Сравнить структуру",
    },
  },
  generator: {
    title: "Генератор данных",
    subtitle: "Быстро генерируйте реалистичные тестовые данные для фронтенда.",
    chooseType: "Тип данных",
    searchPlaceholder: "Поиск типа данных…",
    noTopics: "Подходящих типов данных не найдено.",
    fieldsLegend: "Поля",
    moreFields: "Показать больше полей",
    lessFields: "Скрыть необязательные поля",
    optionalFields: "Необязательные поля",
    records: "Количество записей",
    customQty: "Своё",
    country: "Страна",
    countrySearch: "Поиск страны…",
    selectPlaceholder: "Выберите тип данных…",
    outputMode: "Формат вывода",
    modePayload: "Тело POST",
    modeApi: "Запись API",
    modePayloadHint: "Без id и временных меток — удобно для POST-запроса на создание.",
    modeApiHint: "Включает id, createdAt и updatedAt — как сохранённая запись API.",
    jsonType: "JSON",
    viewJson: "JSON",
    viewType: "TS",
    generate: "Сгенерировать {n}",
    generating: "Генерация {n}…",
    generateAgain: "Сгенерировать заново",
    refresh: "Обновить",
    generated: "Сгенерировано: {n}",
    download: "Скачать",
    createApi: "Создать API",
    createSuccess: "Временный API создан.",
    createBlockedArray:
      "Временные API поддерживают до 500 записей. Уменьшите количество и попробуйте снова.",
    createBlockedSize:
      "Размер JSON превышает лимит временных API (64 КБ). Выберите меньше записей или полей.",
    openTemporary: "Открыть во Временных API",
    emptyTitle: "Выберите тип данных",
    emptyBody: "Выберите тему выше, чтобы сгенерировать реалистичные тестовые записи.",
    duration1h: "1 час",
    duration6h: "6 часов",
    duration12h: "12 часов",
    duration24h: "24 часа",
    countries: {
      all: "Все страны",
      IR: "Иран",
      DE: "Германия",
      US: "США",
      GB: "Великобритания",
      FR: "Франция",
      NL: "Нидерланды",
      JP: "Япония",
      CA: "Канада",
    },
    categories: {
      people: "Люди",
      ecommerce: "E-commerce",
      content: "Контент",
      media: "Медиа",
      business: "Бизнес",
      location: "Локации",
    },
    fields: {
      id: "id",
      name: "имя",
      username: "логин",
      email: "email",
      avatar: "аватар",
      phone: "телефон",
      company: "компания",
      location: "локация",
      age: "возраст",
      role: "роль",
      jobTitle: "должность",
      department: "отдел",
      bio: "о себе",
      website: "сайт",
      createdAt: "дата создания",
      updatedAt: "дата обновления",
      hiredAt: "дата найма",
      ordersCount: "число заказов",
      totalSpent: "сумма покупок",
      postsCount: "число постов",
      price: "цена",
      image: "изображение",
      category: "категория",
      description: "описание",
      brand: "бренд",
      stock: "остаток",
      rating: "рейтинг",
      sku: "SKU",
      colors: "цвета",
      orderId: "номер заказа",
      customer: "покупатель",
      items: "позиции",
      total: "итого",
      status: "статус",
      orderDate: "дата заказа",
      paymentStatus: "статус оплаты",
      shippingAddress: "адрес доставки",
      user: "пользователь",
      comment: "комментарий",
      post: "пост",
      date: "дата",
      product: "товар",
      title: "заголовок",
      verified: "подтверждено",
      helpful: "полезно",
      slug: "слаг",
      parentCategory: "родительская категория",
      productCount: "число товаров",
      quantity: "количество",
      discount: "скидка",
      code: "код",
      type: "тип",
      expiresAt: "действует до",
      minimumOrder: "минимальный заказ",
      usageLimit: "лимит использований",
      active: "активен",
      amount: "сумма",
      currency: "валюта",
      paymentMethod: "способ оплаты",
      transactionId: "ID транзакции",
      order: "заказ",
      carrier: "служба доставки",
      trackingNumber: "трек-номер",
      estimatedDelivery: "ожидаемая доставка",
      body: "текст",
      author: "автор",
      tags: "теги",
      publishedAt: "дата публикации",
      likes: "лайки",
      views: "просмотры",
      replies: "ответы",
      attachments: "вложения",
      actionUrl: "ссылка действия",
      sender: "отправитель",
      receiver: "получатель",
      message: "сообщение",
      read: "прочитано",
      artist: "исполнитель",
      cover: "обложка",
      year: "год",
      genre: "жанр",
      tracks: "треки",
      album: "альбом",
      duration: "длительность",
      poster: "постер",
      director: "режиссёр",
      language: "язык",
      plays: "прослушивания",
      label: "лейбл",
      pages: "страниц",
      isbn: "ISBN",
      instructor: "преподаватель",
      level: "уровень",
      lessons: "уроки",
      students: "студенты",
      employees: "сотрудники",
      logo: "логотип",
      industry: "отрасль",
      salary: "зарплата",
      experience: "опыт",
      remote: "удалённо",
      founded: "год основания",
      postedAt: "опубликовано",
      capacity: "вместимость",
      capital: "столица",
      flag: "флаг",
      region: "регион",
      population: "население",
      street: "улица и дом",
      postalCode: "индекс",
      latitude: "широта",
      longitude: "долгота",
      country: "страна",
      city: "город",
      notes: "заметки",
      team: "команда",
      joinedAt: "дата вступления",
      skills: "навыки",
      specialty: "специализация",
      hospital: "клиника",
      licenseNumber: "номер лицензии",
      yearsExperience: "стаж (лет)",
      bloodType: "группа крови",
      diagnosis: "диагноз",
      doctor: "врач",
      admittedAt: "дата поступления",
      vehicleType: "тип авто",
      plateNumber: "госномер",
      tripsCount: "поездок",
      roomNumber: "номер комнаты",
      checkIn: "заезд",
      checkOut: "выезд",
      nights: "ночей",
      followers: "подписчики",
      following: "подписки",
      grade: "класс",
      school: "школа",
      gpa: "средний балл",
      major: "направление",
      enrollmentYear: "год поступления",
      subject: "предмет",
      classesCount: "число классов",
      invoiceNumber: "номер счёта",
      issueDate: "дата выставления",
      dueDate: "срок оплаты",
      tax: "НДС",
      itemsCount: "число позиций",
      target: "цель",
      targetType: "тип цели",
      reaction: "реакция",
      color: "цвет",
      thumbnail: "превью",
      channel: "канал",
      url: "URL",
      width: "ширина",
      height: "высота",
      alt: "alt-текст",
      photographer: "фотограф",
      host: "ведущий",
      episodes: "выпуски",
      subscribers: "подписчики",
      owner: "владелец",
      public: "публичный",
      progress: "прогресс",
      teamSize: "размер команды",
      budget: "бюджет",
      startDate: "дата старта",
      membersCount: "участников",
      focus: "фокус",
      countriesCount: "число стран",
      areaKm2: "площадь (км²)",
      timezone: "часовой пояс",
      terminals: "терминалы",
      altitude: "высота",
      accuracy: "точность",
    },
    topics: {
      users: {
        name: "Пользователи",
        description: "Профили пользователей для приложений и админок",
        preview: {
          line1: "Артём Волков",
          line2: "@artem_volkov · artem@mail.test",
          line3: "Москва",
        },
      },
      customers: {
        name: "Покупатели",
        description: "Контакты и данные аккаунтов покупателей",
        preview: {
          line1: "Дарья Соколова",
          line2: "darya@demo.dev",
          line3: "+7 (926) 555-01-42",
        },
      },
      employees: {
        name: "Сотрудники",
        description: "Члены команды с должностями и отделами",
        preview: {
          line1: "Максим Морозов",
          line2: "Frontend-разработчик",
          line3: "Разработка · Acme",
        },
      },
      authors: {
        name: "Авторы",
        description: "Авторы статей и создатели контента",
        preview: {
          line1: "Анна Смирнова",
          line2: "Пишет о продуктовом дизайне и UX.",
        },
      },
      contacts: {
        name: "Контакты",
        description: "Контакты и компании для CRM",
        preview: {
          line1: "Илья Кузнецов",
          line2: "ilya@acme.test · Acme",
        },
      },
      "team-members": {
        name: "Участники команды",
        description: "Участники продуктовых и инженерных команд",
        preview: {
          line1: "Екатерина Попова",
          line2: "Техлид · Платформа",
        },
      },
      doctors: {
        name: "Врачи",
        description: "Специалисты со специализацией и клиникой",
        preview: {
          line1: "Д-р Михаил Лебедев",
          line2: "Кардиология · Городская клиника № 1",
        },
      },
      patients: {
        name: "Пациенты",
        description: "Карты пациентов с диагнозом и группой крови",
        preview: {
          line1: "София Новикова",
          line2: "A+ · Гипертония",
        },
      },
      drivers: {
        name: "Водители",
        description: "Водители сервисов поездок с типом авто и рейтингом",
        preview: {
          line1: "Никита Орлов",
          line2: "Седан · ★ 4,8",
        },
      },
      guests: {
        name: "Гости",
        description: "Гости отеля с номером комнаты и статусом заезда",
        preview: {
          line1: "Полина Андреева",
          line2: "Номер 412 · Заселилась",
        },
      },
      profiles: {
        name: "Профили",
        description: "Социальные профили с подписчиками и био",
        preview: {
          line1: "Кирилл Макаров",
          line2: "@kirill_makarov · 12 тыс. подписчиков",
        },
      },
      "girl-students": {
        name: "Ученицы",
        description: "Профили школьниц с классом и школой",
        preview: {
          line1: "Виктория Зайцева",
          line2: "10 «А» · Лицей № 15",
        },
      },
      "boy-students": {
        name: "Ученики",
        description: "Профили школьников с классом и школой",
        preview: {
          line1: "Егор Соловьёв",
          line2: "9 «Б» · Гимназия № 7",
        },
      },
      teachers: {
        name: "Учителя",
        description: "Преподаватели с предметом и школой",
        preview: {
          line1: "Ольга Борисова",
          line2: "Математика · Школа № 24",
        },
      },
      products: {
        name: "Товары",
        description: "Товары магазина с ценой и характеристиками",
        preview: {
          line1: "Беспроводные наушники с шумоподавлением",
          line2: "12 990 ₽ · Электроника",
          line3: "★★★★☆",
        },
      },
      orders: {
        name: "Заказы",
        description: "Заказы с позициями и статусом выполнения",
        preview: {
          line1: "Заказ #10482",
          line2: "3 товара · 18 450 ₽",
          line3: "Доставлен",
        },
      },
      reviews: {
        name: "Отзывы",
        description: "Оценки в звёздах и комментарии покупателей",
        preview: {
          line1: "★★★★★ Отличная покупка",
          line2: "Аккуратная сборка и удобно пользоваться.",
        },
      },
      categories: {
        name: "Категории",
        description: "Категории каталога для магазинов",
        preview: { line1: "Электроника", line2: "electronics" },
      },
      "cart-items": {
        name: "Товары в корзине",
        description: "Позиции в корзине покупателя",
        preview: { line1: "Смарт-часы", line2: "2 × 8 990 ₽ · 17 980 ₽" },
      },
      coupons: {
        name: "Промокоды",
        description: "Коды скидок и правила применения",
        preview: { line1: "PRIVET10", line2: "Скидка 10% · до 2026-12-01" },
      },
      payments: {
        name: "Платежи",
        description: "Оплаты с суммой и способом расчёта",
        preview: { line1: "4 850,00 RUB", line2: "Банковская карта · Оплачено" },
      },
      shipments: {
        name: "Доставки",
        description: "Статус отправки и служба доставки",
        preview: { line1: "ZAK-10482 · СДЭК", line2: "В пути" },
      },
      invoices: {
        name: "Счета",
        description: "Счета на оплату с суммой и сроком",
        preview: { line1: "SCH-10482", line2: "84 000 ₽ · Оплачен" },
      },
      brands: {
        name: "Бренды",
        description: "Бренды с логотипом и количеством товаров",
        preview: { line1: "Acme", line2: "acme · 128 товаров" },
      },
      posts: {
        name: "Посты",
        description: "Статьи блога и записи в ленте",
        preview: { line1: "Проектируем простые интерфейсы", line2: "автор Анна Смирнова" },
      },
      comments: {
        name: "Комментарии",
        description: "Комментарии к постам и товарам",
        preview: {
          line1: "Очень чётко и по делу!",
          line2: "anna · 12 лайков",
        },
      },
      messages: {
        name: "Сообщения",
        description: "Сообщения в чатах и личной переписке",
        preview: {
          line1: "Можешь глянуть свежую сборку?",
          line2: "Максим Морозов → Дарья Соколова",
        },
      },
      notifications: {
        name: "Уведомления",
        description: "Уведомления в приложении и обновления",
        preview: { line1: "Новый комментарий", line2: "Сообщество · 2 ч назад" },
      },
      tags: {
        name: "Теги",
        description: "Теги со слагом и счётчиком публикаций",
        preview: { line1: "typescript", line2: "142 поста" },
      },
      "content-categories": {
        name: "Рубрики контента",
        description: "Разделы для статей и руководств",
        preview: { line1: "Гайды", line2: "guides · 86 постов" },
      },
      likes: {
        name: "Лайки",
        description: "Отметки «Нравится» к постам и комментариям",
        preview: { line1: "Кирилл Макаров оценил пост", line2: "Пост · Лайк" },
      },
      albums: {
        name: "Альбомы",
        description: "Музыкальные альбомы с обложкой и треками",
        preview: {
          line1: "Random Access Memories",
          line2: "Daft Punk",
          line3: "2013 · 13 треков",
        },
      },
      songs: {
        name: "Треки",
        description: "Аудиокомпозиции с длительностью и исполнителем",
        preview: { line1: "Midnight Cruise", line2: "3:42 · Электроника" },
      },
      movies: {
        name: "Фильмы",
        description: "Фильмы с постером и рейтингом",
        preview: { line1: "Late Night Express", line2: "2021 · ★ 8,2" },
      },
      books: {
        name: "Книги",
        description: "Книги с автором и обложкой",
        preview: { line1: "Заметки об интерфейсах", line2: "Анна Смирнова · 2019" },
      },
      videos: {
        name: "Видео",
        description: "Видеоролики с длительностью и просмотрами",
        preview: {
          line1: "Собираем админку за 10 минут",
          line2: "12:40 · 84 тыс. просмотров",
        },
      },
      images: {
        name: "Изображения",
        description: "Графика с разрешением и тегами",
        preview: { line1: "Закат над рекой", line2: "1280×720" },
      },
      podcasts: {
        name: "Подкасты",
        description: "Шоу с ведущим и числом выпусков",
        preview: { line1: "Код и кофе", line2: "48 вып. · Технологии" },
      },
      playlists: {
        name: "Плейлисты",
        description: "Подборки треков с автором и жанром",
        preview: { line1: "Фокус", line2: "32 трека · Электроника" },
      },
      companies: {
        name: "Компании",
        description: "Профили компаний и отрасли",
        preview: { line1: "ООО «Акме»", line2: "IT · Москва" },
      },
      jobs: {
        name: "Вакансии",
        description: "Позиции с локацией и форматом работы",
        preview: {
          line1: "Frontend-разработчик",
          line2: "Google · Москва · Полный день",
        },
      },
      courses: {
        name: "Курсы",
        description: "Обучающие курсы с программой и преподавателем",
        preview: { line1: "React на практике", line2: "Средний · 12 ч" },
      },
      events: {
        name: "События",
        description: "Митапы, конференции и воркшопы",
        preview: { line1: "Frontend Митап", line2: "Москва · Воркшоп" },
      },
      projects: {
        name: "Проекты",
        description: "Проекты с прогрессом и бюджетом",
        preview: { line1: "Редизайн аналитики", line2: "В работе · 72%" },
      },
      teams: {
        name: "Команды",
        description: "Внутренние команды с лидом и составом",
        preview: { line1: "Команда продукта", line2: "8 чел. · Разработка" },
      },
      continents: {
        name: "Континенты",
        description: "Части света с кодом и базовой статистикой",
        preview: { line1: "Европа", line2: "EU · 44 страны" },
      },
      countries: {
        name: "Страны",
        description: "Страны с названием, кодом и флагом",
        preview: { line1: "Россия", line2: "RU · Москва" },
      },
      cities: {
        name: "Города",
        description: "Города с привязкой к региону и стране",
        preview: { line1: "Санкт-Петербург", line2: "Россия · Северо-Запад" },
      },
      addresses: {
        name: "Адреса",
        description: "Адреса доставки и офисов",
        preview: {
          line1: "ул. Тверская, д. 12",
          line2: "125009 Москва, Россия",
        },
      },
      regions: {
        name: "Регионы",
        description: "Географические регионы и области",
        preview: { line1: "Центральный округ", line2: "Россия · Москва" },
      },
      neighborhoods: {
        name: "Районы",
        description: "Городские районы и кварталы",
        preview: { line1: "Хамовники", line2: "Москва · 119048" },
      },
      airports: {
        name: "Аэропорты",
        description: "Аэропорты с кодом и городом",
        preview: { line1: "Шереметьево", line2: "SVO · Россия" },
      },
      coordinates: {
        name: "Координаты",
        description: "Широта, долгота и геоданные",
        preview: {
          line1: "55.755826, 37.617300",
          line2: "Москва · Россия",
        },
      },
    },
    errors: {
      pickTopic: "Сначала выберите тип данных.",
      INVALID_TOPIC: "Неизвестный тип данных.",
      INVALID_FIELDS: "Выберите хотя бы одно поле.",
      INVALID_QUANTITY: "Количество должно быть от 1 до 1000.",
      INVALID_COUNTRY: "Некорректная страна.",
      GENERATE_FAILED: "Не удалось сгенерировать данные. Попробуйте чуть позже.",
      DOWNLOAD_FAILED: "Не удалось скачать файл. Попробуйте чуть позже.",
      CREATE_FAILED: "Не удалось создать временный API.",
      LIMIT_REACHED: "Достигнут лимит в 5 временных API. Сначала удалите один.",
      RATE_LIMITED: "Слишком много запросов. Попробуйте чуть позже.",
    },
  },
  preview: {
    docs: "Документация",
    playground: "Playground",
    blurb: "Небольшой интерфейс, показывающий, как этот API работает на практике.",
    blurbFaHint: "",
    backToResource: "Назад к ресурсу {name}",
    search: "Поиск",
    create: "Создать",
    edit: "Редактировать",
    delete: "Удалить",
    save: "Сохранить",
    saving: "Сохранение…",
    deleting: "Удаление…",
    cancel: "Отмена",
    fillSample: "Подставить пример",
    noRecords: "Записей нет",
    loading: "Загрузка…",
    confirmDelete: "Удалить эту запись?",
    confirmDeleteBody: "Это действие нельзя отменить.",
    networkError: "Ошибка сети",
    authDemoPassword: "У всех стандартных пользователей единый демо-пароль:",
    username: "Логин",
    password: "Пароль",
    login: "Войти",
    loginSuccess: "Вы вошли в аккаунт.",
    logout: "Выйти",
    getMe: "GET /me",
    token: "Токен",
    user: "Пользователь",
    loginFirst: "Сначала войдите, чтобы получить токен",
    createdAt: "Создано",
    fieldLabels: {
      name: "Имя",
      username: "Логин",
      email: "Email",
      avatarUrl: "URL аватара",
      role: "Роль",
      city: "Город",
      country: "Страна",
      company: "Компания",
      title: "Заголовок",
      body: "Текст",
      published: "Опубликовано",
      userId: "ID пользователя",
      postId: "ID поста",
      albumId: "ID альбома",
      url: "URL",
      thumbnailUrl: "URL превью",
      completed: "Выполнено",
      description: "Описание",
      price: "Цена",
      stock: "Остаток",
      category: "Категория",
      imageUrl: "URL картинки",
      message: "Сообщение",
      type: "Тип",
      read: "Прочитано",
      code: "Код",
      capital: "Столица",
      region: "Регион",
      population: "Население",
      currency: "Валюта",
      flagUrl: "URL флага",
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
      teaser: "В разработке — инструменты форматирования, сравнения и конвертации",
      hint: "/json — выберите инструмент для переключения вида",
      badge: "В разработке",
      summary:
        "JSON Workbench (в разработке) — инструмент в браузере для форматирования JSON, сравнения структур, поиска и конвертации. Поддерживает TypeScript, Zod, YAML, CSV и утилиты.",
      details: [
        "Откройте JSON Workbench на /json и выберите инструмент для быстрого переключения (поддерживается параметр ?tool=).",
        "Базовые инструменты: Форматировать, Дерево, Поиск, JSONPath и Сравнить структуру.",
        "Конвертеры: TypeScript, Zod, JSON Schema, YAML и CSV.",
        "Утилиты: Сортировать ключи, Удалить пустое, Развернуть, Экранировать, Починить, Выбрать/Исключить поля и другие.",
        "Продукт активно развивается — новые инструменты и улучшения появятся в следующих обновлениях.",
      ],
    },
    "2026-09-19-image-generator": {
      title: "Генератор картинок",
      teaser: "Ссылки на картинки-заглушки по запросу",
      hint: "/image-generator — выберите SVG или Фото и скопируйте URL",
      summary:
        "Генерируйте картинки-заглушки с помощью параметров URL. Поддерживает SVG от MockData и фото с Picsum, а также пресеты для аватаров, постов, баннеров и других форматов.",
      details: [
        "На /image-generator выберите SVG или Фото, задайте ширину и высоту и скопируйте URL.",
        "Публичные ссылки по умолчанию возвращают случайное изображение: используйте /image/{w}/{h} для SVG или ?type=real для фото.",
        "Передайте произвольный ?seed=, чтобы сохранить те же цвета SVG или фото.",
        "Вставьте URL напрямую в тег img, CSS или поле изображения.",
      ],
    },
    "2026-09-17-generator": {
      title: "Генератор данных",
      teaser: "Реалистичный JSON за пару секунд",
      hint: "/generator — выберите тему, чтобы сгенерировать, скопировать или создать API",
      summary:
        "Быстро генерируйте реалистичный JSON для фронтенда. Выберите тему, поля и количество записей — затем скопируйте, скачайте или опубликуйте как временный API.",
      details: [
        "Генерируйте данные на /generator в категориях «Люди», «E-commerce», «Контент», «Медиа», «Бизнес» и «Локации».",
        "Поддерживает форматы тела POST и записи API; для FA доступны локализованные персидские данные.",
        "Генерирует до 1 000 записей за раз в браузере; «Создать API» соблюдает лимиты временных API (500 записей / 64 КБ).",
        "Выбор и сгенерированные данные сохраняются при переходах (сбрасываются при обновлении страницы).",
      ],
    },
    "2026-09-16-temporary": {
      title: "Временные API",
      teaser: "Вставьте JSON и получите временный REST URL",
      hint: "/temporary — вставьте JSON, чтобы создать публичный REST URL",
      summary:
        "Создавайте временные публичные REST-эндпоинты из вставленного JSON. Без регистрации; до 5 активных API на браузер.",
      details: [
        "Создавайте на /temporary со сроком жизни 1 час, 6 часов, 12 часов или 24 часа.",
        "Используйте GET, POST, PATCH и DELETE на /api/t/… так же, как для других ресурсов.",
        "До 5 активных API на браузер и до 20 созданий в час с одного IP.",
        "Относитесь к ссылке как к паролю: пока она не истекла, любой обладатель ссылки может читать и менять данные.",
      ],
    },
    "2026-09-15-preview": {
      title: "Превью ресурсов",
      teaser: "Небольшие экраны, подключённые к API",
      hint: "/preview/users — протестируйте CRUD прямо в браузере",
      summary:
        "Простые демо-экраны для ресурсов вроде Users, Posts и Auth, работающие поверх реальных API.",
      details: [
        "Откройте живое превью со страницы документации ресурса.",
        "Проверьте чтение, поиск, пагинацию, создание, редактирование и удаление на общей демо-базе.",
        "Превью Auth включает форму входа (единый пароль: password) и запросы GET /me с токеном.",
        "При необходимости переключите язык сверху, чтобы подставить персидские данные.",
      ],
    },
    "2026-09-14-lang-fa": {
      title: "Персидские данные (?lang=fa)",
      teaser: "Локализованные тестовые данные на персидском",
      hint: "/api/users?lang=fa — добавьте lang=fa для данных на персидском",
      summary:
        "Добавьте ?lang=fa к эндпоинту, чтобы получать имена, логины, телефоны и тексты на персидском языке.",
      details: [
        "По умолчанию используется английский; язык задаётся только через query-параметр lang=fa (без cookies и Accept-Language).",
        "Ответы для FA включают Content-Language: fa и подсказку шрифта Vazirmatn.",
        "Работает для списков, отдельных записей и входа с персидскими логинами.",
        "Когда сверху выбрано فارسی, Playground также автоматически добавляет lang=fa.",
      ],
    },
    "2026-09-12-playground": {
      title: "Playground",
      teaser: "Вызывайте API прямо в браузере",
      hint: "/playground — отправляйте запросы и смотрите JSON",
      summary:
        "Отправляйте API-запросы прямо в браузере, проверяйте успешные и неуспешные входы и смотрите отформатированный JSON.",
      details: [
        "Выберите ресурс и действие, отредактируйте query-параметры или JSON-тело и отправьте запрос.",
        "Для входа в Auth удобно сравнивать ответы 200 и 401 кнопками «Верные данные» и «Неверные данные».",
        "Смотрите HTTP-статусы, форматированный JSON и метаданные пагинации коллекций.",
        "Запросы по ресурсам и последний ответ сохраняются при переходах (сбрасываются при обновлении страницы).",
      ],
    },
    "2026-09-10-auth": {
      title: "Mock Auth",
      teaser: "Вход и аутентификация по Bearer-токену",
      hint: "/api/auth/login — пароль всегда password",
      summary:
        "Отправьте POST на /api/auth/login с учётными данными демо-пользователя и паролем, чтобы получить Bearer-токен для /me.",
      details: [
        "У всех стандартных пользователей общий демо-пароль password.",
        "При успехе возвращается mock Bearer-токен и объект user (id, name, username, email, role).",
        "Неверный пароль или неизвестный пользователь возвращают 401 с понятным описанием ошибки.",
        "Передайте токен в заголовке Authorization: Bearer <token> в запросе GET /api/auth/me, чтобы получить текущего пользователя.",
      ],
    },
    "2026-09-08-resources": {
      title: "Живые REST-ресурсы",
      teaser: "Полный CRUD для Users, Posts и других сущностей",
      hint: "/docs#resources — посмотрите доступные эндпоинты",
      summary:
        "Среди доступных ресурсов — Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications и Countries с поддержкой полного CRUD и пагинации.",
      details: [
        "Списки с пагинацией возвращают { data, pagination } с полями page, limit, total и totalPages.",
        "Поддерживаются query-параметры для поиска, сортировки, фильтрации, искусственной задержки и принудительного кода ошибки.",
        "Общая продакшен-база сбрасывается каждый день — используйте её для демо и тестов, а не для постоянного хранения.",
        "Скачайте машиночитаемую спецификацию на /openapi.json для Postman, Swagger или ИИ-инструментов.",
      ],
    },
  },
  catalog: {
    auth: {
      title: "Auth",
      summary:
        "Mock-эндпоинт входа по логину и паролю. При успехе возвращает Bearer-токен, при ошибке доступа — 401.",
    },
    users: {
      title: "Users",
      summary: "Mock CRUD API пользователей с поиском, фильтрацией по роли и пагинацией.",
    },
    posts: {
      title: "Posts",
      summary: "Публикации, связанные с пользователями, с поддержкой тегов и статуса публикации.",
    },
    comments: {
      title: "Comments",
      summary: "Комментарии к постам с полями имени, email и текста.",
    },
    albums: {
      title: "Albums",
      summary: "Альбомы пользователей; фотографии ссылаются на альбом через albumId.",
    },
    photos: {
      title: "Photos",
      summary: "Изображения внутри альбомов с полями url и thumbnailUrl.",
    },
    todos: {
      title: "Todos",
      summary: "Простые задачи, привязанные к пользователям, со статусом выполнения.",
    },
    products: {
      title: "Products",
      summary: "Каталог товаров с ценой, остатком, категорией и imageUrl.",
    },
    notifications: {
      title: "Notifications",
      summary: "Уведомления пользователей с типом и статусом прочтения.",
    },
    countries: {
      title: "Countries",
      summary: "Данные о странах с кодами ISO, регионом, населением и флагом.",
    },
  },
};

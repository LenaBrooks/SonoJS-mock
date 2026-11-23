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

export const ar: Messages = {
  common: {
    home: "الرئيسية",
    docs: "التوثيق",
    playground: "Playground",
    contact: "تواصل معنا",
    preview: "معاينة",
    search: "بحث",
    loading: "جارٍ التحميل…",
    save: "حفظ",
    saving: "جارٍ الحفظ…",
    cancel: "إلغاء",
    create: "إنشاء",
    edit: "تعديل",
    delete: "حذف",
    searchPlaceholder: "ابحث في API…",
    noResults: "لا توجد نتائج",
    new: "جديد",
    inDevelopment: "قيد التطوير",
    actions: "إجراءات",
    copy: "نسخ",
    copied: "تم النسخ",
    live: "متاح",
    open: "فتح",
    tryIt: "جرّب الآن",
    learnMore: "اعرف المزيد",
    back: "رجوع",
    close: "إغلاق",
    yes: "نعم",
    no: "لا",
    name: "الاسم",
    email: "البريد الإلكتروني",
    message: "الرسالة",
    send: "إرسال",
    sending: "جارٍ الإرسال…",
    networkError: "خطأ في الشبكة",
    temporary: "واجهات مؤقتة",
    temporaryBadge: "بدء سريع",
    generator: "مولّد البيانات",
    imageGenerator: "مولّد الصور",
    jsonWorkbench: "ورشة JSON",
  },
  header: {
    primaryNav: "التنقل الرئيسي",
    whatsNew: "ما الجديد",
    whatsNewTitle: "ما الجديد",
    whatsNewSubtitle: "أحدث المزايا والتحديثات",
    latest: "الأحدث",
    contact: "عن المشروع والتواصل",
    menu: "القائمة",
    openMenu: "فتح القائمة",
    appearance: "المظهر",
    lightMode: "تفعيل الوضع الفاتح",
    darkMode: "تفعيل الوضع الداكن",
    light: "فاتح",
    dark: "داكن",
    apiLangGroup: "اللغة",
    english: "English",
    persian: "فارسی",
    github: "GitHub",
    githubStars: "GitHub — منح نجمة للمستودع",
  },
  home: {
    tagline:
      "واجهات REST mock API مجانية ببيانات JSON واقعية. ابنِ النماذج الأولية دون خادم خلفي، واختبر المصادقة، واربط نقاط النهاية فورًا.",
    taglineNote: "",
    resourcesTitle: "الموارد",
    resourcesBlurb:
      "عشرة موارد REST API جاهزة مع توثيق وأمثلة. تستخدم بيئة الإنتاج قاعدة بيانات تجريبية مشتركة.",
    searchLabel: "البحث في واجهات API ونقاط النهاية",
    searchPlaceholder: "ابحث عن users، posts، auth…",
    temporaryCtaTitle: "الواجهات المؤقتة",
    temporaryCtaBody:
      "أنشئ واجهة API مؤقتة من نص JSON ملصوق أو مباشرة من المولّد. تعامل مع الرابط ككلمة مرور. حتى 5 واجهات مؤقتة نشطة لكل متصفح.",
    temporaryCtaLink: "إنشاء واجهة مؤقتة",
  },
  notFound: {
    title: "الصفحة غير موجودة",
    body: "هذه الصفحة غير متوفرة في MockData. عد إلى الصفحة الرئيسية أو افتح التوثيق.",
    home: "الرئيسية",
    docs: "التوثيق",
  },
  blog: {
    title: "المدونة",
    description:
      "مقالات وأدلة حول البيانات الوهمية وJSON وواجهات API وتطوير الواجهات الأمامية.",
    all: "الكل",
    emptyTitle: "لا توجد مقالات بعد",
    emptyBody: "ستُضاف مقالات جديدة هنا لاحقًا — يُرجى العودة قريبًا.",
    emptyCategoryTitle: "هذا التصنيف فارغ",
    emptyCategoryBody: "اختر تصنيفًا آخر أو استعرض جميع المقالات.",
    readingTime: "{n} د قراءة",
    previousPage: "السابق",
    nextPage: "التالي",
    pageStatus: "صفحة {page} من {total}",
    paginationNav: "التنقل بين الصفحات",
    categoriesNav: "تصنيفات المدونة",
    backToBlog: "المدونة",
    previousArticle: "المقال السابق",
    nextArticle: "المقال التالي",
    relatedArticles: "مقالات ذات صلة",
    categories: {
      news: "أخبار",
      "mock-data": "بيانات وهمية",
      json: "JSON",
      api: "API",
      frontend: "الواجهة الأمامية",
    },
  },
  contact: {
    title: "تواصل معنا",
    intro:
      "هل لديك سؤال أو ملاحظة أو فكرة؟ راسلنا عبر النموذج أدناه أو أرسل بريدًا إلكترونيًا مباشرة:",
    name: "الاسم",
    email: "البريد الإلكتروني",
    topic: "الموضوع",
    message: "الرسالة",
    send: "إرسال",
    sending: "جارٍ الإرسال…",
    success: "تم إرسال رسالتك. شكرًا لتواصلك معنا — سنرد عليك قريبًا.",
    chooseTopic: "يرجى اختيار موضوع الرسالة.",
    pickTopic: "ما موضوع رسالتك؟",
    topics: {
      question: "سؤال",
      bug: "الإبلاغ عن خطأ",
      feature: "اقتراح ميزة",
      other: "أخرى",
    },
  },
  docs: {
    title: "التوثيق",
    navLabel: "جدول محتويات التوثيق",
    intro:
      "توفّر MockData موارد REST وهمية بصيغة JSON. يمكنك استدعاء نقاط النهاية المفتوحة، واختبار تدفقات تسجيل الدخول، وإرسال الطلبات في Playground، وتوليد مجموعات البيانات في /generator، وإنشاء صور نائبة في /image-generator، واستخدام JSON Workbench في /json، وتشغيل واجهات مؤقتة. تستخدم موارد كتالوج الإنتاج قاعدة بيانات مشتركة (راجع قسم «البيانات المشتركة» لمزيد من التفاصيل).",
    toc: {
      intro: "مقدمة",
      whatsNew: "ما الجديد",
      temporary: "الواجهات المؤقتة",
      generator: "مولّد البيانات",
      imageGenerator: "مولّد الصور",
      jsonWorkbench: "ورشة JSON",
      sharedData: "البيانات المشتركة",
      language: "اللغة",
      resources: "الموارد",
      openapi: "OpenAPI",
      requests: "الطلبات",
      errors: "الأخطاء",
      rateLimit: "حد المعدّل",
      reset: "إعادة ضبط البيانات",
    },
    whatsNewTitle: "ما الجديد",
    whatsNewBlurb:
      "أبرز التحديثات للمطورين من الأحدث إلى الأقدم. انقر على أي بطاقة لعرض التفاصيل — وتتوفر القائمة نفسها من أيقونة الجرس في الأعلى.",
    temporaryTitle: "الواجهات المؤقتة",
    temporaryBody:
      "هل تحتاج إلى نقطة نهاية REST مؤقتة ببيانات JSON الخاصة بك؟ تعمل الواجهات المؤقتة بمعزل عن الكتالوج المشترك: الصق JSON واختر مدة الصلاحية للحصول على عنوان عام /api/t/…، أو أنشئ واجهة مباشرة عبر «إنشاء API» في المولّد.",
    temporaryBullets: [
      "أنشئها في المتصفح عبر /temporary دون تسجيل حساب (وتُفتح أيضًا من «إنشاء API» في صفحة /generator).",
      "اختر مدة الصلاحية: ساعة واحدة أو 6 ساعات أو 12 ساعة أو 24 ساعة (الافتراضي 12 ساعة).",
      "أرسل طلبات GET وPOST وPATCH وDELETE إلى /api/t/… للمجموعة والسجلات الفردية.",
      "تعامل مع الرابط ككلمة مرور: طالما لم تنتهِ صلاحيته، يمكن لأي شخص يملك الرابط قراءة البيانات وتعديلها.",
      "تُعيد الطلبات المرسلة إلى الواجهات المؤقتة المنتهية الصلاحية رمز HTTP 410.",
    ],
    temporaryLimitsTitle: "حدود الواجهات المؤقتة",
    temporaryLimitsBullets: [
      "بحد أقصى 5 واجهات مؤقتة نشطة في الوقت نفسه لكل متصفح.",
      "بحد أقصى 20 عملية إنشاء واجهة من عنوان IP واحد خلال ساعة متحركة (يُرجع HTTP 429 عند التجاوز).",
      "الحد الأقصى لحجم حمولة JSON هو 64 كيلوبايت.",
      "حتى 8 مستويات تداخل، وحتى 500 عنصر في المصفوفة، وحتى 200 مفتاح في الكائن الواحد.",
      "يُطبَّق أيضًا حد معدّل /api العام (حوالي 60 طلبًا في الدقيقة لكل عنوان IP).",
    ],
    generatorTitle: "مولّد البيانات",
    generatorBody:
      "ولّد بيانات JSON واقعية للواجهة الأمامية دون كتابة أمثلة يدويًا. يعمل كل شيء في المتصفح ويمكنك نسخ البيانات أو تنزيلها أو تحويلها إلى واجهة API مؤقتة.",
    generatorBullets: [
      "انتقل إلى /generator واختر موضوعًا ضمن فئات: الأشخاص، التجارة الإلكترونية، المحتوى، الوسائط، الأعمال، والمواقع.",
      "بدّل بين تنسيق جسم POST (بدون id وطوابع زمنية) وسجل API (مع id وcreatedAt وupdatedAt).",
      "استخدم بيانات فارسية مترجمة لـ FA أو بيانات إنجليزية من دول متعددة لـ EN.",
      "ولّد حتى 1,000 سجل دفعة واحدة في المتصفح. يراعي خيار «إنشاء API» حدود الواجهات المؤقتة (500 سجل / 64 كيلوبايت).",
      "تبقى اختياراتك والبيانات المولّدة محفوظة أثناء التنقل داخل التطبيق (وتُعاد ضبطها عند إعادة تحميل الصفحة بالكامل).",
    ],
    imageGeneratorTitle: "مولّد الصور",
    imageGeneratorBody:
      "أنشئ روابط صور نائبة حسب الطلب لواجهاتك. اختر صور SVG من MockData أو صورًا عشوائية من Picsum، وحدد العرض والارتفاع، وانسخ الرابط لاستخدامه في وسوم img أو CSS أو حقول الصور.",
    imageGeneratorBullets: [
      "في /image-generator اختر بين رسومات SVG أو الصور الفوتوغرافية الحقيقية.",
      "صيغة الرابط العامة هي /image/{width}/{height} لـ SVG مع إضافة ?type=real للصور الفوتوغرافية.",
      "يُرجع الرابط خيارًا عشوائيًا افتراضيًا؛ مرّر قيمة ?seed= مخصصة للحفاظ على ألوان SVG أو الصورة نفسها.",
      "تتوفر مقاسات جاهزة للصورة الرمزية، والصورة المصغّرة، والملف الشخصي، والمنشور، والغلاف، والبانر، والستوري.",
    ],
    jsonWorkbenchTitle: "JSON Workbench",
    jsonWorkbenchBody:
      "أداة JSON Workbench (قيد التطوير) هي مجموعة أدوات في المتصفح لتنسيق JSON ومقارنته والبحث فيه وتحويله أثناء بناء الواجهات.",
    jsonWorkbenchBullets: [
      "افتح JSON Workbench في /json واختر أداة للتبديل الفوري (يدعم المعامل ?tool=).",
      "الأدوات الأساسية: تنسيق، شجرة، بحث، JSONPath، ومقارنة البنية.",
      "المحولات: TypeScript وZod وJSON Schema وYAML وCSV.",
      "الأدوات المساعدة: فرز المفاتيح، إزالة الفارغ، تسطيح/تجميع، ترميز/إصلاح، اختيار/استبعاد الحقول، وغيرها.",
      "يعمل بالكامل داخل المتصفح — لا يتم إرسال JSON الخاص بك إلى الخادم.",
      "قيد التطوير النشط — ستُضاف أدوات وتحسينات جديدة في الإصدارات القادمة.",
    ],
    sharedDataTitle: "البيانات المشتركة",
    sharedDataBody:
      "يعمل جميع المستخدمين على قاعدة بيانات حية واحدة: أي شيء تنشئه أو تعدّله أو تحذفه يظهر فورًا للآخرين. في الإنتاج، تُعاد ضبط قاعدة البيانات إلى بياناتها الأولية يوميًا عبر GET /api/cron/reset. مناسب للنماذج الأولية والعروض التجريبية وليس للبيانات الدائمة أو الحساسة.",
    languageTitle: "اللغة",
    languageBody:
      "تُعاد نصوص الموارد باللغة الإنجليزية افتراضيًا. أضف معامل الاستعلام lang=fa للحصول على الأسماء وأسماء المستخدمين والبريد الإلكتروني وأرقام الهواتف والعبارات باللغة الفارسية. لا تُستخدم ملفات تعريف الارتباط أو ترويسة Accept-Language — يُعتمد معامل الاستعلام فقط. كما يضبط تبديل اللغة في الشريط العلوي (English | فارسی) كلًا من Playground والمعاينة.",
    languageBullets: [
      "مثال: GET /api/users?lang=fa",
      "تتضمن استجابات FA الترويسة Content-Language: fa وتلميح الخط (Vazirmatn).",
      "عند اختيار فارسی في الأعلى، يتحول الاتجاه إلى من اليمين إلى اليسار (RTL) ويضيف Playground المعامل lang=fa تلقائيًا.",
    ],
    resourcesTitle: "الموارد",
    resourcesBlurb:
      "نظرة عامة على نقاط النهاية المتاحة حاليًا والمزايا القادمة قريبًا.",
    colResource: "المورد",
    colBasePath: "المسار الأساسي",
    colStatus: "الحالة",
    colDocs: "التوثيق",
    statusLive: "متاح",
    statusDev: "قيد التطوير",
    statusSoon: "قريبًا",
    openapiTitle: "OpenAPI",
    openapiBody:
      "مواصفة قابلة للقراءة آليًا لجميع نقاط النهاية الحالية (Auth وUsers وPosts وComments وAlbums وPhotos وTodos وProducts وNotifications وCountries وإعادة الضبط للمشرفين). مثالية للاستيراد إلى Postman أو Swagger UI أو أدوات الذكاء الاصطناعي.",
    download: "تنزيل",
    requestsTitle: "الطلبات",
    requestsBody:
      "تُعيد نقاط نهاية المجموعات data وpagination؛ بينما تُعيد السجلات الفردية { data }.",
    errorsTitle: "الأخطاء",
    errorsBody:
      "تحتوي استجابات الأخطاء على كائن error. تشمل رموز الحالة الشائعة 400 للطلبات غير الصالحة، و401 عند غياب المصادقة أو فشلها، و404 إذا لم يُعثر على السجل، و429 عند تجاوز حد المعدّل، و500 لأخطاء الخادم. لاختبار معالجة الأخطاء في العميل، أضف ?status=500 (من النطاق 400–599) لمحاكاة الرمز المطلوب.",
    rateLimitTitle: "حد المعدّل",
    rateLimitBody:
      "للحفاظ على استقرار الخدمة للجميع، تقتصر طلبات /api/* على نحو {limit} طلب في الدقيقة لكل عنوان IP. عند التجاوز يُعاد HTTP 429 (Too Many Requests)؛ ويمكنك متابعة الرصيد المتبقي عبر ترويسات X-RateLimit.",
    resetTitle: "إعادة ضبط البيانات",
    resetBody:
      "يشترك جميع الزوار في قاعدة البيانات التجريبية نفسها. تُعاد ضبطها في الإنتاج كل 24 ساعة، ولكن يمكنك تفريغ جداول العرض وإعادة تعبئتها ببيانات البذور أدناه باستخدام مفتاح المشرف.",
    resetPanel: {
      intro: "أدخل مفتاح المشرف لإعادة ضبط جداول العرض وإعادة تعبئتها ببيانات البذور.",
      placeholder: "مفتاح المشرف",
      button: "إعادة الضبط الآن",
      resetting: "جارٍ إعادة الضبط…",
      needSecret: "أدخل مفتاح المشرف أولًا.",
      confirm: "هل تريد إعادة ضبط جداول العرض وإعادة تعبئتها ببيانات البذور؟",
      networkError: "خطأ في الشبكة. تأكد من أن الخادم قيد التشغيل.",
      donePrefix: "تمت إعادة الضبط",
    },
    colIndex: "#",
  },
  resourceDocs: {
    endpoints: "نقاط النهاية",
    queryParams: "معاملات الاستعلام",
    examples: "أمثلة الطلبات",
    response: "مثال الاستجابة",
    tryExample: "جرّب",
    preview: "معاينة",
    playground: "Playground",
    backToResources: "العودة إلى الموارد",
  },
  playground: {
    title: "Playground",
    blurb:
      "أرسل طلبات حقيقية إلى MockData API واستعرض استجابات JSON مباشرة في المتصفح. يُحفظ آخر طلب لكل مورد أثناء التنقل بين الصفحات.",
    resource: "المورد",
    action: "الإجراء",
    send: "إرسال",
    sending: "جارٍ الإرسال…",
    response: "الاستجابة",
    request: "الطلب",
    body: "الجسم",
    query: "Query",
    headers: "الترويسات",
    correct: "بيانات صحيحة",
    wrong: "بيانات خاطئة",
    password: "كلمة المرور",
    user: "المستخدم",
    pickUser: "اختر مستخدمًا",
    loadError: "تعذّر تحميل الخيارات",
    emptyResponse: "لا توجد استجابة بعد",
    startHint: "اختر موردًا وأرسل طلبًا.",
    types: "TS",
    json: "JSON",
  },
  temporary: {
    title: "الواجهات المؤقتة",
    blurb: "الصق JSON وشغّل واجهة API مؤقتة خلال ثوانٍ.",
    privacyNote:
      "تعامل مع الرابط ككلمة مرور: طالما لم تنتهِ صلاحيته، يمكن لأي شخص يملك الرابط قراءة البيانات وتعديلها. حتى 5 واجهات مؤقتة نشطة لكل متصفح.",
    jsonLabel: "JSON",
    durationLabel: "المدة",
    duration1h: "ساعة واحدة",
    duration6h: "6 ساعات",
    duration12h: "12 ساعة",
    duration24h: "24 ساعة",
    checkJson: "فحص JSON",
    jsonValid: "كل شيء جاهز — يمكنك إنشاء واجهة API.",
    jsonHint: "افحص JSON أولًا أو أنشئ واجهة API مباشرة.",
    create: "إنشاء API",
    creating: "جارٍ الإنشاء…",
    acceptFix: "تطبيق الإصلاح والإنشاء",
    rejectFix: "متابعة التعديل",
    fixedPreview: "أصلحنا بعض المشكلات تلقائيًا. راجع النتيجة ثم أنشئ الواجهة.",
    myApis: "واجهاتي المؤقتة",
    emptyList: "لا توجد واجهات مؤقتة نشطة بعد.",
    copyUrl: "نسخ",
    delete: "حذف",
    deleteAll: "حذف الكل",
    deleting: "…",
    confirmDelete: "هل تريد حذف واجهة API هذه؟",
    confirmDeleteBody: "سيتوقف هذا الرابط عن العمل.",
    confirmDeleteAll: "هل تريد حذف جميع الواجهات؟",
    confirmDeleteAllBody: "ستتوقف جميع الروابط في هذه القائمة عن العمل.",
    cancel: "إلغاء",
    limitReached: "تم بلوغ الحد الأقصى وهو 5 واجهات.",
    limitReachedBody: "احذف إحدى الواجهات أدناه أو انتظر حتى تنتهي صلاحيتها.",
    createdTitle: "تم إنشاء API",
    openApi: "فتح",
    slotsLabel: "{n} من 5",
    maxActive: "",
    sampleJson: `[
  { "id": "1", "firstName": "طارق", "lastName": "المنصور", "role": "admin" },
  { "id": "2", "firstName": "سارة", "lastName": "الحسن", "role": "member" },
  { "id": "3", "firstName": "عمر", "lastName": "الخالدي", "role": "member" }
]`,
    issues: {
      EMPTY: "الصق كائن أو مصفوفة JSON.",
      INVALID_JSON: "JSON غير صالح. تحقّق من الفواصل وعلامات التنصيص والأقواس.",
      TOO_LARGE: "حجم JSON يتجاوز الحد المسموح ({max} كيلوبايت).",
      NOT_OBJECT_OR_ARRAY: "يجب أن يكون المستوى الأعلى كائنًا { } أو مصفوفة [ ].",
      TOO_DEEP: "التداخل عميق جدًا (الحد الأقصى {max}).",
      ARRAY_TOO_LONG: "المصفوفة أطول من المسموح (الحد الأقصى {max} عنصر).",
      TOO_MANY_KEYS: "عدد المفاتيح كبير جدًا في كائن واحد (الحد الأقصى {max}).",
      UNSAFE_KEY: "المفتاح غير الآمن «{key}» غير مسموح به.",
      AUTO_FIXED: "تمت إزالة الفواصل الزائدة في النهاية أو المفاتيح غير الآمنة.",
    },
  },
  imageGenerator: {
    title: "مولّد الصور",
    blurb:
      "أنشئ صورًا نائبة حسب الطلب للمشاريع. انسخ روابط SVG من MockData أو الصور العشوائية لاستخدامها في وسوم img أو CSS أو حقول الصور.",
    modeSvg: "SVG",
    modeReal: "صورة حقيقية",
    width: "العرض",
    height: "الارتفاع",
    generate: "توليد الرابط",
    generating: "جارٍ التوليد…",
    yourUrl: "رابط API الخاص بك",
    preview: "معاينة",
    useInProject: "الاستخدام في المشروع",
    tabUrl: "URL",
    tabHtml: "HTML",
    tabCss: "CSS",
    tabJs: "JavaScript",
    tabCurl: "cURL",
    readySizes: "مقاسات جاهزة",
    sizes: {
      avatar: "صورة رمزية",
      thumbnail: "مصغّرة",
      profile: "ملف شخصي",
      square: "مربع",
      post: "منشور",
      cover: "غلاف",
      banner: "بانر",
      story: "ستوري",
    },
  },
  jsonWorkbench: {
    title: "JSON Workbench",
    blurb:
      "الصق JSON مرة واحدة وتنقّل بين التنسيق والبحث والتحويل وغيرها من الأدوات دون لصقه من جديد.",
    toolNavLabel: "أدوات Workbench",
    source: {
      title: "JSON المصدر",
      hint: "الصقه هنا مرة واحدة — وستأخذ جميع الأدوات هذا JSON.",
      sample: "تحميل مثال",
      valid: "JSON صالح.",
      needJson: "الصق JSON أولًا على اليسار.",
      fixFirst: "أصلح خطأ الصياغة في JSON المصدر أولًا.",
      pickAction: "ماذا تريد أن تفعل؟",
      useResult: "اعتماد النتيجة كـ JSON المصدر",
      diffHint: "JSON المصدر هو الطرف أ؛ الصق JSON ب أدناه للمقارنة.",
      escapedInput: "سلسلة مُرمّزة (Escaped)",
      schemaInput: "JSON Schema",
      fromSchemaNote:
        "الصق JSON Schema أدناه لتوليد مثال JSON وتطبيقه على المصدر.",
    },
    categories: {
      core: "أساسي",
      transform: "تحويل",
      utility: "أدوات مساعدة",
    },
    labels: {
      input: "الإدخال",
      output: "الإخراج",
      tree: "الشجرة",
      matches: "التطابقات",
      jsonA: "JSON أ",
      jsonB: "JSON ب",
      diffResult: "الفروق",
      jsonpath: "JSONPath",
      result: "النتيجة ({count})",
    },
    actions: {
      format: "تنسيق",
      minify: "ضغط",
      showTree: "إظهار الشجرة",
      search: "بحث",
      clearSearch: "مسح البحث",
      replace: "استبدال",
      replaceAll: "استبدال الكل",
      prevMatch: "السابق",
      nextMatch: "التالي",
      compare: "مقارنة",
      run: "تشغيل",
      runPath: "تنفيذ المسار",
      toTypescript: "إلى TypeScript",
      toZod: "إلى Zod",
      toSchema: "إلى Schema",
      swapDirection: "عكس الاتجاه",
      sortKeys: "فرز المفاتيح",
      removeEmpty: "إزالة الفارغ",
      flatten: "تسطيح",
      unflatten: "إعادة التداخل",
      escape: "ترميز (Escape)",
      unescape: "فك الترميز (Unescape)",
      repair: "إصلاح JSON",
      fromSchema: "توليد مثال",
      extractKeys: "استخراج المفاتيح",
      extractValues: "استخراج القيم",
      pick: "اختيار الحقول",
      omit: "استبعاد الحقول",
      compareStructure: "مقارنة البنية",
      clear: "مسح",
      expandAll: "توسيع الكل",
      collapseAll: "طي الكل",
      copyPath: "نسخ المسار",
      copyValue: "نسخ القيمة",
    },
    errors: {
      empty: "الصق JSON.",
      invalid: "JSON غير صالح.",
      unexpectedEnd: "نهاية غير متوقعة لـ JSON.",
      unexpectedToken: "رمز غير متوقع: {token}",
      expectedPropertyName: "يجب أن تكون أسماء الخصائص محاطة بعلامتي تنصيص مزدوجتين.",
      expectedCommaOrBrace: "يُتوقع ',' أو '}' بعد القيمة.",
      expectedCommaOrBracket: "يُتوقع ',' أو ']' بعد عنصر المصفوفة.",
      expectedColon: "يُتوقع ':' بعد اسم الخاصية.",
      unterminatedString: "سلسلة نصية غير مغلقة.",
      badControlChar: "تحتوي السلسلة النصية على محرف تحكم غير صالح.",
      badEscape: "تسلسل escape غير صالح داخل السلسلة النصية.",
      trailingChar: "توجد محارف زائدة بعد قيمة JSON.",
      objectKeyExpected: "يُتوقع مفتاح كائن هنا.",
      unexpectedCharacter: "محرف غير متوقع: {char}",
      invalidCharacter: "محرف غير صالح: {char}",
      invalidUnicode: "ترميز Unicode escape غير صالح: {chars}",
      couldNotRepair: "تعذّر إصلاح هذا JSON تلقائيًا.",
      atLineColumn: "السطر {line}، العمود {column}",
      atLine: "السطر {line}",
      atPosition: "الموضع {position}",
    },
    types: {
      object: "كائن",
      array: "مصفوفة",
      string: "نص",
      number: "رقم",
      boolean: "منطقي",
      null: "null",
    },
    validate: {
      idleHint: "الصق JSON للتحقق من توافقه مع الصياغة القياسية.",
      validTitle: "JSON صالح",
      validBody: "النوع الجذري: {type}",
      invalidTitle: "JSON غير صالح",
    },
    tree: {
      idleTitle: "ستظهر الشجرة هنا",
      idleBody: "الصق JSON على اليسار ثم انقر على «إظهار الشجرة».",
      errorTitle: "تعذّر بناء الشجرة",
      errorBody: "أصلح أخطاء الصياغة في JSON وحاول مرة أخرى.",
    },
    search: {
      query: "بحث",
      replaceWith: "استبدال بـ",
      matchCount: "{current} من {total}",
      noMatches: "لا توجد تطابقات",
      noMatchesBody: "لم يتم العثور على نتائج مطابقة لبحثك في المفاتيح والقيم.",
      idleTitle: "ستظهر نتائج البحث هنا",
      idleBody: "أدخل عبارة للبحث في المفاتيح والقيم ثم انقر على «بحث».",
      errorTitle: "البحث غير متاح",
      errorBody: "أصلح أخطاء الصياغة في JSON قبل البحث.",
      kindKey: "مفتاح",
      kindValue: "قيمة",
      activeHint: "{kind} · {path}",
      replacedCount: "تم استبدال {count} عنصر.",
    },
    diff: {
      idleTitle: "ستظهر الفروق هنا",
      idleBody: "املأ كلا الجانبين — JSON أ وJSON ب — للمقارنة.",
      identical: "لا توجد فروق. تتطابق بنية وقيم المستندين.",
      added: "مضاف / موجود في ب فقط",
      removed: "محذوف / موجود في أ فقط",
      changed: "متغيّر",
      sideEmpty: "هذا الجانب فارغ.",
      emptyA: "JSON أ فارغ.",
      emptyB: "JSON ب فارغ.",
      bothInvalid: "كلا المستندين — JSON أ وJSON ب — غير صالحين.",
    },
    jsonpath: {
      whatIs:
        "يتيح لك JSONPath استخلاص قيم محددة من JSON المتداخل — بأسلوب يشبه محددات CSS للبيانات. انقر على مثال أدناه لإدراج التعبير.",
      hintTitle: "مرجع سريع للصياغة",
      hintBody: `$              المستند الجذري
.users         اسم الخاصية
[*]            جميع عناصر المصفوفة
[0]            العنصر الأول في المصفوفة`,
      idleTitle: "ستظهر نتائج الاستعلام هنا",
      idleBody: "أدخل تعبير المسار ثم شغّل الاستعلام.",
      errorTitle: "تعذّر تشغيل الاستعلام",
      errorBody: "أصلح الخطأ في JSON أو المسار وحاول مرة أخرى.",
      noResults: "لم يُعثر على نتائج لهذا المسار.",
      emptyPath: "أدخل تعبير JSONPath.",
    },
    transform: {
      tsIdleTitle: "ستظهر أنواع TypeScript هنا",
      tsIdleBody: "الصق JSON لتوليد أنواع TypeScript.",
      zodIdleTitle: "سيظهر مخطط Zod هنا",
      zodIdleBody: "الصق JSON لتوليد مخطط Zod.",
      schemaExplain: "JSON ↔ Schema",
      schemaUse:
        "ولّد JSON Schema من JSON المصدر، أو أنشئ مثال JSON من مخطط.",
      schemaIdleTitle: "سيظهر JSON Schema هنا",
      schemaIdleBody: "الصق JSON لتوليد JSON Schema.",
      yamlIdleTitle: "سيظهر YAML هنا",
      yamlIdleBody: "يتم تحويل JSON المصدر إلى تنسيق YAML.",
      yamlToJsonIdle: "الصق YAML أعلاه لتحويله إلى JSON المصدر.",
      yamlApplied: "تم التحويل وتطبيقه على JSON المصدر.",
      csvIdleTitle: "سيظهر CSV هنا",
      csvIdleBodyJson:
        "حوّل كائنًا واحدًا أو مصفوفة كائنات أو كائنًا يحتوي على قائمة من JSON المصدر إلى CSV.",
      csvIdleBodyCsv: "الصق CSV مع صف العناوين لتحويله إلى JSON.",
      csvToJsonIdle: "الصق CSV أعلاه لتحويله إلى JSON المصدر.",
      csvApplied: "تم التحويل وتطبيقه على JSON المصدر.",
      csvUnsupported: "لا يمكن تمثيل بنية JSON هذه كـ CSV.",
    },
    utilities: {
      sortAsc: "أ ← ي",
      sortDesc: "ي ← أ",
      sortIdleTitle: "جاهز للفرز",
      sortIdleBody: "اختر أ ← ي أو ي ← أ لمعاينة المفاتيح المفروزة في المخرجات.",
      sortApplied: "تم فرز المفاتيح. راجع النتيجة أدناه.",
      removeOptions: "القيم الفارغة المطلوب إزالتها",
      removeNull: "null",
      removeEmptyString: '""',
      removeEmptyArray: "[]",
      removeEmptyObject: "{}",
      removeNullLabel: "null",
      removeEmptyStringLabel: "السلاسل الفارغة",
      removeEmptyArrayLabel: "المصفوفات الفارغة",
      removeEmptyObjectLabel: "الكائنات الفارغة",
      removePreserveHint: "تُحفظ قيم false و0 ولا تُزال.",
      removeIdleTitle: "سيظهر JSON المنقّى هنا",
      removeIdleBody: "اختر ما تريد إزالته ثم شغّل العملية.",
      nestedLabel: "متداخل",
      flatLabel: "مسطّح",
      flattenHint: "يحوّل الكائنات المتداخلة إلى مفاتيح مفصولة بنقاط (مثل address.city وskills.0).",
      flattenUse:
        "مفيد عند التصدير إلى جداول البيانات أو ملفات .env أو فهارس البحث أو واجهات API التي تتطلب قاموسًا مسطّحًا.",
      flattenIdleTitle: "جاهز للتسطيح",
      flattenIdleBody: "ستظهر المفاتيح المتداخلة كمسارات مفصولة بنقاط في المخرجات.",
      flattenApplied: "تم التسطيح. راجع النتيجة أدناه.",
      unflattenHint: "يعيد تجميع المسارات المفصولة بنقاط إلى كائنات متداخلة، والمقاطع الرقمية إلى مصفوفات.",
      unflattenUse:
        "مفيد عندما تحتاج إلى إعادة مفاتيح مسطّحة مثل user.name أو skills.0 إلى JSON متداخل عادي.",
      unflattenIdleTitle: "سيظهر JSON المتداخل هنا",
      unflattenIdleBody: "الصق كائنًا بمفاتيح مفصولة بنقاط لاستعادة التداخل.",
      escapeIdleTitle: "ستظهر السلسلة المُرمّزة هنا",
      escapeIdleBody: "يتم ترميز JSON بحيث يمكن تضمينه بأمان داخل نص برمجي.",
      escapeHint:
        'يحوّل JSON إلى سلسلة نصية واحدة مُرمّزة تصبح فيها علامات التنصيص والأسطر الجديدة " و  لتضمينه بأمان داخل نص آخر.',
      escapeUse:
        "مفيد عند لصق JSON داخل شيفرة برمجية أو متغيرات بيئة أو سجلات دون كسر علامات التنصيص الخارجية.",
      unescapeIdleTitle: "سيظهر JSON غير المُرمّز هنا",
      unescapeIdleBody: "الصق سلسلة JSON مُرمّزة لاستعادة JSON الأصلي.",
      repairHint:
        "يصلح خطوة بخطوة JSON التالف أو المقتطع أو المحتوي على تعليقات أو غير المكتمل أثناء التعديل.",
      repairUse:
        "يعالج الفواصل الزائدة في النهاية، وعلامات التنصيص والفواصل والأقواس المفقودة، والتعليقات، وكتل الشيفرة، وحرفيات Python/JS، وJSONP، وأنواع MongoDB، وNDJSON، والمقاطع المبتورة، وآثار التعديل.",
      repairAlreadyValid: "كان JSON صالحًا بالفعل — تم تحديث التنسيق فقط.",
      repairFormatted: "تم التنسيق.",
      repairReady: "الإصلاح التلقائي جاهز.",
      repairApplied: "تم الإصلاح.",
      repairAppliedToSource: "تم التطبيق على JSON المصدر.",
      repairFailedTitle: "تعذّر الإصلاح الكامل",
      repairFailedAt: "{message} ({line}:{column})",
      repairPreview: "معاينة الإصلاحات",
      repairFixes: {
        "trailing-commas": "فواصل زائدة في النهاية",
        "single-quotes": "علامات تنصيص مفردة",
        "smart-quotes": "علامات تنصيص ذكية",
        "unquoted-keys": "مفاتيح بلا علامات تنصيص",
        "missing-commas": "فواصل مفقودة",
        "missing-brackets": "أقواس غير مغلقة",
        comments: "تعليقات",
        "code-fence": "كتل شيفرة",
        "python-literals": "حرفيات Python",
        "js-undefined": "undefined ← null",
        jsonp: "غلاف JSONP",
        "escaped-string": "سلسلة JSON مُرمّزة",
        mongodb: "أنواع MongoDB",
        ndjson: "NDJSON ← مصفوفة",
        ellipsis: "علامة حذف (…)",
        "string-concat": "دمج السلاسل النصية",
        whitespace: "المسافات والأسطر الجديدة",
        truncated: "اقتطاع / إدخال غير مكتمل",
        "mid-edit-junk": "بقايا أثناء التعديل",
      },
      repairIdleTitle: "سيظهر JSON المُصلح هنا",
      repairIdleBody:
        "الصق مقطعًا غير مكتمل أو بيانات شبيهة بـ JSON في JSON المصدر لمعاينة النتيجة.",
      fromSchemaHint:
        "يولّد مثال JSON من JSON Schema استنادًا إلى type وproperties وrequired وitems وenum وdefault.",
      fromSchemaIdleTitle: "سيظهر مثال JSON هنا",
      fromSchemaIdleBody: "الصق JSON Schema أدناه لتوليد مثال.",
      extractHint:
        'يستخرج المسارات الطرفية وقيمها (مثل { path: "address.city", value: "الرياض" }).',
      extractIdleTitle: "ستظهر المفاتيح والقيم المستخرجة هنا",
      extractIdleBody: "اختر الحقول أعلاه للحصول على أزواج المسار والقيمة.",
      extractKeysHint: "يعرض المفاتيح المتداخلة كمسارات مفصولة بنقاط (وفهارس المصفوفات مثل .0).",
      extractKeysIdleTitle: "ستظهر المفاتيح المستخرجة هنا",
      extractKeysIdleBody: "الصق JSON لجمع جميع المفاتيح.",
      extractValuesHint: "يجمع جميع القيم الطرفية (البدائية وnull).",
      extractValuesIdleTitle: "ستظهر القيم المستخرجة هنا",
      extractValuesIdleBody: "الصق JSON لجمع جميع القيم.",
      fieldsLabel: "حقول من JSON المصدر",
      fieldsClickHint:
        "انقر على مسار لتحديده. تُفصل الخصائص المتداخلة بنقطة.",
      fieldsSelectAll: "تحديد الكل",
      fieldsClear: "إلغاء التحديد",
      fieldsEmpty: "لا توجد حقول قابلة للتحديد في هذا JSON.",
      pickHint: "يبقي الحقول المحددة فقط. انقر على المسارات في القائمة أدناه.",
      pickIdleTitle: "ستظهر النتيجة هنا",
      pickIdleBody: "",
      omitHint: "يزيل الحقول المحددة. انقر على المسارات في القائمة أدناه.",
      omitIdleTitle: "ستظهر النتيجة هنا",
      omitIdleBody: "",
      compareHint: "يقارن بنيتي مستندَي JSON جنبًا إلى جنب دون النظر إلى اختلاف القيم.",
      compareUse:
        "تُبرز المفاتيح المفقودة في أ باللون الأحمر، والمضافة في ب باللون الأخضر، واختلافات الأنواع باللون الأصفر.",
      compareBack: "العودة إلى Workbench",
      compareIdleTitle: "أدخل مستندَي JSON",
      compareIdleBody: "املأ كلا الجانبين لمقارنة بنيتيهما.",
      compareIdentical: "البنيتان متطابقتان: المفاتيح وأنواع البيانات نفسها.",
      compareMissing: "مفاتيح مفقودة (في أ فقط)",
      compareExtra: "مفاتيح مضافة (في ب فقط)",
      compareType: "نوع مختلف",
    },
    empty: {
      formatTitle: "سيظهر JSON المنسّق هنا",
      formatBody: "الصق JSON على اليسار ثم انقر على «تنسيق».",
    },
    soon: {
      badge: "قريبًا",
      title: "سيتوفر {tool} قريبًا",
      body: "هذه الأداة ضمن خارطة طريق Workbench وستصل في تحديث قادم.",
    },
    tools: {
      format: "تنسيق",
      minify: "ضغط",
      validate: "تحقق",
      tree: "الشجرة",
      search: "بحث",
      diff: "الفروق",
      jsonpath: "JSONPath",
      convert: "تحويل",
      toTypescript: "TypeScript",
      toZod: "Zod",
      toSchema: "JSON Schema",
      yaml: "YAML",
      csv: "CSV",
      sortKeys: "فرز المفاتيح",
      removeEmpty: "إزالة الفارغ",
      flatten: "تسطيح",
      unflatten: "إعادة التداخل",
      escape: "ترميز (Escape)",
      unescape: "فك الترميز (Unescape)",
      repair: "إصلاح",
      extract: "المفاتيح والقيم",
      extractKeys: "استخراج المفاتيح",
      extractValues: "استخراج القيم",
      pick: "اختيار الحقول",
      omit: "استبعاد الحقول",
      compareStructure: "مقارنة البنية",
    },
  },
  generator: {
    title: "مولّد البيانات",
    subtitle: "ولّد بيانات اختبار واقعية للواجهة الأمامية بسرعة.",
    chooseType: "نوع البيانات",
    searchPlaceholder: "ابحث عن نوع بيانات…",
    noTopics: "لا توجد أنواع بيانات مطابقة.",
    fieldsLegend: "الحقول",
    moreFields: "عرض المزيد من الحقول",
    lessFields: "إخفاء الحقول الاختيارية",
    optionalFields: "حقول اختيارية",
    records: "عدد السجلات",
    customQty: "مخصص",
    country: "الدولة",
    countrySearch: "ابحث عن دولة…",
    selectPlaceholder: "اختر نوع بيانات…",
    outputMode: "وضع الإخراج",
    modePayload: "جسم POST",
    modeApi: "سجل API",
    modePayloadHint: "بدون id وطوابع زمنية — مناسب لطلبات إنشاء POST.",
    modeApiHint: "يتضمن id وcreatedAt وupdatedAt — مثل سجل API محفوظ.",
    jsonType: "JSON",
    viewJson: "JSON",
    viewType: "TS",
    generate: "توليد {n}",
    generating: "جارٍ توليد {n}…",
    generateAgain: "توليد مرة أخرى",
    refresh: "تحديث",
    generated: "تم التوليد: {n}",
    download: "تنزيل",
    createApi: "إنشاء API",
    createSuccess: "تم إنشاء واجهة API المؤقتة.",
    createBlockedArray:
      "تدعم الواجهات المؤقتة حتى 500 سجل. قلّل العدد وحاول مجددًا.",
    createBlockedSize:
      "يتجاوز حجم JSON حد الواجهات المؤقتة (64 كيلوبايت). اختر عددًا أقل من السجلات أو الحقول.",
    openTemporary: "فتح في الواجهات المؤقتة",
    emptyTitle: "اختر نوع بيانات",
    emptyBody: "اختر موضوعًا أعلاه لتوليد سجلات اختبار واقعية.",
    duration1h: "ساعة واحدة",
    duration6h: "6 ساعات",
    duration12h: "12 ساعة",
    duration24h: "24 ساعة",
    countries: {
      all: "جميع الدول",
      IR: "إيران",
      DE: "ألمانيا",
      US: "الولايات المتحدة",
      GB: "المملكة المتحدة",
      FR: "فرنسا",
      NL: "هولندا",
      JP: "اليابان",
      CA: "كندا",
    },
    categories: {
      people: "الأشخاص",
      ecommerce: "التجارة الإلكترونية",
      content: "المحتوى",
      media: "الوسائط",
      business: "الأعمال",
      location: "المواقع",
    },
    fields: {
      id: "id",
      name: "الاسم",
      username: "اسم المستخدم",
      email: "البريد الإلكتروني",
      avatar: "الصورة الرمزية",
      phone: "الهاتف",
      company: "الشركة",
      location: "الموقع",
      age: "العمر",
      role: "الدور",
      jobTitle: "المسمى الوظيفي",
      department: "القسم",
      bio: "نبذة",
      website: "الموقع الإلكتروني",
      createdAt: "تاريخ الإنشاء",
      updatedAt: "تاريخ التحديث",
      hiredAt: "تاريخ التعيين",
      ordersCount: "عدد الطلبات",
      totalSpent: "إجمالي الإنفاق",
      postsCount: "عدد المنشورات",
      price: "السعر",
      image: "الصورة",
      category: "الفئة",
      description: "الوصف",
      brand: "العلامة التجارية",
      stock: "المخزون",
      rating: "التقييم",
      sku: "SKU",
      colors: "الألوان",
      orderId: "رقم الطلب",
      customer: "العميل",
      items: "العناصر",
      total: "الإجمالي",
      status: "الحالة",
      orderDate: "تاريخ الطلب",
      paymentStatus: "حالة الدفع",
      shippingAddress: "عنوان الشحن",
      user: "المستخدم",
      comment: "تعليق",
      post: "منشور",
      date: "التاريخ",
      product: "المنتج",
      title: "العنوان",
      verified: "موثّق",
      helpful: "مفيد",
      slug: "المعرّف النصي (slug)",
      parentCategory: "الفئة الرئيسية",
      productCount: "عدد المنتجات",
      quantity: "الكمية",
      discount: "الخصم",
      code: "الرمز",
      type: "النوع",
      expiresAt: "ينتهي في",
      minimumOrder: "الحد الأدنى للطلب",
      usageLimit: "حد الاستخدام",
      active: "نشط",
      amount: "المبلغ",
      currency: "العملة",
      paymentMethod: "طريقة الدفع",
      transactionId: "معرّف العملية",
      order: "الطلب",
      carrier: "شركة الشحن",
      trackingNumber: "رقم التتبع",
      estimatedDelivery: "التسليم المتوقع",
      body: "المحتوى",
      author: "الكاتب",
      tags: "الوسوم",
      publishedAt: "تاريخ النشر",
      likes: "الإعجابات",
      views: "المشاهدات",
      replies: "الردود",
      attachments: "المرفقات",
      actionUrl: "رابط الإجراء",
      sender: "المرسل",
      receiver: "المستلم",
      message: "الرسالة",
      read: "مقروء",
      artist: "الفنان",
      cover: "الغلاف",
      year: "السنة",
      genre: "النوع الفني",
      tracks: "المقاطع",
      album: "الألبوم",
      duration: "المدة",
      poster: "الملصق",
      director: "المخرج",
      language: "اللغة",
      plays: "مرات التشغيل",
      label: "شركة الإنتاج",
      pages: "الصفحات",
      isbn: "ISBN",
      instructor: "المدرّس",
      level: "المستوى",
      lessons: "الدروس",
      students: "الطلاب",
      employees: "الموظفون",
      logo: "الشعار",
      industry: "القطاع",
      salary: "الراتب",
      experience: "الخبرة",
      remote: "عن بُعد",
      founded: "سنة التأسيس",
      postedAt: "تاريخ النشر",
      capacity: "السعة",
      capital: "العاصمة",
      flag: "العلم",
      region: "المنطقة",
      population: "عدد السكان",
      street: "الشارع",
      postalCode: "الرمز البريدي",
      latitude: "خط العرض",
      longitude: "خط الطول",
      country: "الدولة",
      city: "المدينة",
      notes: "ملاحظات",
      team: "الفريق",
      joinedAt: "تاريخ الانضمام",
      skills: "المهارات",
      specialty: "التخصص",
      hospital: "المستشفى",
      licenseNumber: "رقم الترخيص",
      yearsExperience: "سنوات الخبرة",
      bloodType: "فصيلة الدم",
      diagnosis: "التشخيص",
      doctor: "الطبيب",
      admittedAt: "تاريخ الدخول",
      vehicleType: "نوع المركبة",
      plateNumber: "رقم اللوحة",
      tripsCount: "عدد الرحلات",
      roomNumber: "رقم الغرفة",
      checkIn: "تسجيل الوصول",
      checkOut: "تسجيل المغادرة",
      nights: "الليالي",
      followers: "المتابعون",
      following: "يتابع",
      grade: "الصف",
      school: "المدرسة",
      gpa: "المعدل التراكمي",
      major: "التخصص",
      enrollmentYear: "سنة الالتحاق",
      subject: "المادة",
      classesCount: "عدد الصفوف",
      invoiceNumber: "رقم الفاتورة",
      issueDate: "تاريخ الإصدار",
      dueDate: "تاريخ الاستحقاق",
      tax: "الضريبة",
      itemsCount: "عدد العناصر",
      target: "الهدف",
      targetType: "نوع الهدف",
      reaction: "التفاعل",
      color: "اللون",
      thumbnail: "مصغّرة",
      channel: "القناة",
      url: "URL",
      width: "العرض",
      height: "الارتفاع",
      alt: "النص البديل (alt)",
      photographer: "المصوّر",
      host: "المقدّم",
      episodes: "الحلقات",
      subscribers: "المشتركون",
      owner: "المالك",
      public: "عام",
      progress: "التقدّم",
      teamSize: "حجم الفريق",
      budget: "الميزانية",
      startDate: "تاريخ البدء",
      membersCount: "عدد الأعضاء",
      focus: "التركيز",
      countriesCount: "عدد الدول",
      areaKm2: "المساحة (كم²)",
      timezone: "المنطقة الزمنية",
      terminals: "المحطات",
      altitude: "الارتفاع",
      accuracy: "الدقة",
    },
    topics: {
      users: {
        name: "المستخدمون",
        description: "ملفات تعريف المستخدمين للتطبيقات ولوحات التحكم",
        preview: {
          line1: "طارق المنصور",
          line2: "@tareq_almansoor · tareq@mail.test",
          line3: "الرياض",
        },
      },
      customers: {
        name: "العملاء",
        description: "جهات اتصال العملاء وبيانات حساباتهم",
        preview: {
          line1: "سارة الحسن",
          line2: "sarah@demo.dev",
          line3: "+966 50 555 0142",
        },
      },
      employees: {
        name: "الموظفون",
        description: "أعضاء الفريق مع المسميات الوظيفية والأقسام",
        preview: {
          line1: "عمر الخالدي",
          line2: "مطور واجهات أمامية",
          line3: "الهندسة · Acme",
        },
      },
      authors: {
        name: "الكتّاب",
        description: "كتّاب المقالات وصنّاع المحتوى",
        preview: {
          line1: "ليلى الزهراني",
          line2: "تكتب عن تصميم المنتجات وتجربة المستخدم.",
        },
      },
      contacts: {
        name: "جهات الاتصال",
        description: "جهات اتصال وشركات لأنظمة CRM",
        preview: {
          line1: "كريم الدوسري",
          line2: "kareem@acme.test · Acme",
        },
      },
      "team-members": {
        name: "أعضاء الفريق",
        description: "أعضاء فرق المنتجات والهندسة",
        preview: {
          line1: "نورة القحطاني",
          line2: "قائدة تقنية · المنصة",
        },
      },
      doctors: {
        name: "الأطباء",
        description: "أخصائيون مع التخصص والمستشفى",
        preview: {
          line1: "د. يوسف الشمري",
          line2: "طب القلب · مستشفى المدينة العام",
        },
      },
      patients: {
        name: "المرضى",
        description: "سجلات المرضى مع التشخيص وفصيلة الدم",
        preview: {
          line1: "مريم العتيبي",
          line2: "A+ · ارتفاع ضغط الدم",
        },
      },
      drivers: {
        name: "السائقون",
        description: "سائقو تطبيقات النقل مع نوع المركبة والتقييم",
        preview: {
          line1: "زيد السبيعي",
          line2: "سيدان · ★ 4.8",
        },
      },
      guests: {
        name: "النزلاء",
        description: "نزلاء الفنادق مع رقم الغرفة وحالة الوصول",
        preview: {
          line1: "دانة الحربي",
          line2: "غرفة 412 · مسجّلة الوصول",
        },
      },
      profiles: {
        name: "الملفات الشخصية",
        description: "ملفات اجتماعية مع المتابعين والنبذة",
        preview: {
          line1: "فهد المطيري",
          line2: "@fahad_almutairi · 12 ألف متابع",
        },
      },
      "girl-students": {
        name: "الطالبات",
        description: "ملفات الطالبات مع الصف والمدرسة",
        preview: {
          line1: "جنى الغامدي",
          line2: "الصف العاشر · ثانوية النخبة 15",
        },
      },
      "boy-students": {
        name: "الطلاب",
        description: "ملفات الطلاب مع الصف والمدرسة",
        preview: {
          line1: "آدم المالكي",
          line2: "الصف التاسع · مدرسة الأمل 7",
        },
      },
      teachers: {
        name: "المعلمون",
        description: "المعلمون مع المادة والمدرسة",
        preview: {
          line1: "هدى الرشيد",
          line2: "الرياضيات · مدرسة الفاروق 24",
        },
      },
      products: {
        name: "المنتجات",
        description: "منتجات المتجر مع السعر والمواصفات",
        preview: {
          line1: "سماعات لاسلكية بعزل الضوضاء",
          line2: "499 ر.س · إلكترونيات",
          line3: "★★★★☆",
        },
      },
      orders: {
        name: "الطلبات",
        description: "طلبات الشراء مع العناصر وحالة التنفيذ",
        preview: {
          line1: "طلب #10482",
          line2: "3 عناصر · 840 ر.س",
          line3: "تم التسليم",
        },
      },
      reviews: {
        name: "التقييمات",
        description: "تقييمات النجوم ومراجعات العملاء",
        preview: {
          line1: "★★★★★ تجربة ممتازة",
          line2: "جودة تصنيع عالية وسهولة في الاستخدام.",
        },
      },
      categories: {
        name: "الفئات",
        description: "فئات الكتالوج للمتاجر الإلكترونية",
        preview: { line1: "إلكترونيات", line2: "electronics" },
      },
      "cart-items": {
        name: "عناصر السلة",
        description: "المنتجات المضافة في سلة التسوق",
        preview: { line1: "ساعة ذكية", line2: "2 × 350 ر.س · 700 ر.س" },
      },
      coupons: {
        name: "الكوبونات",
        description: "رموز الخصم وقواعد صلاحيتها",
        preview: { line1: "MARHABA10", line2: "خصم 10% · حتى 2026-12-01" },
      },
      payments: {
        name: "المدفوعات",
        description: "عمليات الدفع مع المبلغ وطريقة السداد",
        preview: { line1: "250.00 SAR", line2: "بطاقة بنكية · مدفوع" },
      },
      shipments: {
        name: "الشحنات",
        description: "حالة الشحن وشركة التوصيل",
        preview: { line1: "SHP-10482 · أرامكس", line2: "قيد التوصيل" },
      },
      invoices: {
        name: "الفواتير",
        description: "فواتير الدفع مع المبلغ وتاريخ الاستحقاق",
        preview: { line1: "INV-10482", line2: "3,200 ر.س · مدفوعة" },
      },
      brands: {
        name: "العلامات التجارية",
        description: "العلامات التجارية مع الشعار وعدد المنتجات",
        preview: { line1: "Acme", line2: "acme · 128 منتجًا" },
      },
      posts: {
        name: "المنشورات",
        description: "مقالات المدونة وتدوينات الخلاصة",
        preview: { line1: "تصميم واجهات واضحة وبسيطة", line2: "بقلم ليلى الزهراني" },
      },
      comments: {
        name: "التعليقات",
        description: "تعليقات على المنشورات والمنتجات",
        preview: {
          line1: "شرح واضح ومباشر جدًا!",
          line2: "layla · 12 إعجابًا",
        },
      },
      messages: {
        name: "الرسائل",
        description: "رسائل الدردشة والمحادثات المباشرة",
        preview: {
          line1: "هل يمكنك مراجعة النسخة التجريبية الأخيرة؟",
          line2: "عمر الخالدي ← سارة الحسن",
        },
      },
      notifications: {
        name: "الإشعارات",
        description: "إشعارات التطبيق والتنبيهات",
        preview: { line1: "تعليق جديد", line2: "المجتمع · منذ ساعتين" },
      },
      tags: {
        name: "الوسوم",
        description: "وسوم مع المعرّف النصي وعدد المنشورات",
        preview: { line1: "typescript", line2: "142 منشورًا" },
      },
      "content-categories": {
        name: "تصنيفات المحتوى",
        description: "أقسام المقالات والأدلة الإرشادية",
        preview: { line1: "أدلة", line2: "guides · 86 منشورًا" },
      },
      likes: {
        name: "الإعجابات",
        description: "تفاعلات الإعجاب على المنشورات والتعليقات",
        preview: { line1: "أعجب فهد المطيري بالمنشور", line2: "منشور · إعجاب" },
      },
      albums: {
        name: "الألبومات",
        description: "ألبومات موسيقية مع الغلاف والمقاطع",
        preview: {
          line1: "Random Access Memories",
          line2: "Daft Punk",
          line3: "2013 · 13 مقطعًا",
        },
      },
      songs: {
        name: "المقاطع الصوتية",
        description: "مقاطع صوتية مع المدة والفنان",
        preview: { line1: "Midnight Cruise", line2: "3:42 · إلكترونية" },
      },
      movies: {
        name: "الأفلام",
        description: "أفلام مع الملصق والتقييم",
        preview: { line1: "Late Night Express", line2: "2021 · ★ 8.2" },
      },
      books: {
        name: "الكتب",
        description: "كتب مع المؤلف والغلاف",
        preview: { line1: "خواطر في تصميم الواجهات", line2: "ليلى الزهراني · 2019" },
      },
      videos: {
        name: "الفيديوهات",
        description: "مقاطع فيديو مع المدة والمشاهدات",
        preview: {
          line1: "بناء لوحة تحكم في 10 دقائق",
          line2: "12:40 · 84 ألف مشاهدة",
        },
      },
      images: {
        name: "الصور",
        description: "رسوميات مع الأبعاد والوسوم",
        preview: { line1: "غروب على الكورنيش", line2: "1280×720" },
      },
      podcasts: {
        name: "البودكاست",
        description: "برامج صوتية مع المقدّم وعدد الحلقات",
        preview: { line1: "كود وقهوة", line2: "48 حلقة · تقنية" },
      },
      playlists: {
        name: "قوائم التشغيل",
        description: "قوائم مقاطع مع المنشئ والنوع",
        preview: { line1: "تركيز", line2: "32 مقطعًا · إلكترونية" },
      },
      companies: {
        name: "الشركات",
        description: "ملفات الشركات والقطاعات",
        preview: { line1: "شركة أكمي", line2: "تقنية المعلومات · دبي" },
      },
      jobs: {
        name: "الوظائف",
        description: "وظائف شاغرة مع الموقع ونوع الدوام",
        preview: {
          line1: "مطور واجهات أمامية",
          line2: "Google · دبي · دوام كامل",
        },
      },
      courses: {
        name: "الدورات التدريبية",
        description: "دورات تعليمية مع المنهج والمدرّس",
        preview: { line1: "React بشكل عملي", line2: "متوسط · 12 ساعة" },
      },
      events: {
        name: "الفعاليات",
        description: "لقاءات ومؤتمرات وورش عمل",
        preview: { line1: "ملتقى الواجهات الأمامية", line2: "الرياض · ورشة عمل" },
      },
      projects: {
        name: "المشاريع",
        description: "مشاريع مع نسبة التقدّم والميزانية",
        preview: { line1: "إعادة تصميم التحليلات", line2: "قيد التنفيذ · 72%" },
      },
      teams: {
        name: "الفرق",
        description: "فرق داخلية مع القائد وعدد الأعضاء",
        preview: { line1: "فريق المنتج", line2: "8 أعضاء · الهندسة" },
      },
      continents: {
        name: "القارات",
        description: "قارات العالم مع الرمز وإحصاءات أساسية",
        preview: { line1: "آسيا", line2: "AS · 48 دولة" },
      },
      countries: {
        name: "الدول",
        description: "دول مع الاسم والرمز والعلم",
        preview: { line1: "المملكة العربية السعودية", line2: "SA · الرياض" },
      },
      cities: {
        name: "المدن",
        description: "مدن مرتبطة بالمنطقة والدولة",
        preview: { line1: "عمّان", line2: "الأردن · الوسط" },
      },
      addresses: {
        name: "العناوين",
        description: "عناوين الشحن والمكاتب",
        preview: {
          line1: "شارع الملك فهد، 120",
          line2: "12211 الرياض، المملكة العربية السعودية",
        },
      },
      regions: {
        name: "المناطق",
        description: "مناطق ومحافظات جغرافية",
        preview: { line1: "منطقة الرياض", line2: "المملكة العربية السعودية · الرياض" },
      },
      neighborhoods: {
        name: "الأحياء",
        description: "أحياء ومناطق حضرية",
        preview: { line1: "العليا", line2: "الرياض · 12221" },
      },
      airports: {
        name: "المطارات",
        description: "مطارات مع الرمز والمدينة",
        preview: { line1: "مطار الملك خالد الدولي", line2: "RUH · المملكة العربية السعودية" },
      },
      coordinates: {
        name: "الإحداثيات",
        description: "خط العرض وخط الطول وبيانات الموقع",
        preview: {
          line1: "24.713552, 46.675296",
          line2: "الرياض · المملكة العربية السعودية",
        },
      },
    },
    errors: {
      pickTopic: "اختر نوع بيانات أولًا.",
      INVALID_TOPIC: "نوع البيانات غير معروف.",
      INVALID_FIELDS: "اختر حقلًا واحدًا على الأقل.",
      INVALID_QUANTITY: "يجب أن يكون العدد بين 1 و1000.",
      INVALID_COUNTRY: "الدولة غير صالحة.",
      GENERATE_FAILED: "تعذّر توليد البيانات. حاول مرة أخرى بعد قليل.",
      DOWNLOAD_FAILED: "تعذّر تنزيل الملف. حاول مرة أخرى بعد قليل.",
      CREATE_FAILED: "تعذّر إنشاء واجهة API المؤقتة.",
      LIMIT_REACHED: "تم بلوغ الحد الأقصى وهو 5 واجهات مؤقتة. احذف واحدة أولًا.",
      RATE_LIMITED: "طلبات كثيرة جدًا. حاول مرة أخرى بعد قليل.",
    },
  },
  preview: {
    docs: "التوثيق",
    playground: "Playground",
    blurb: "واجهة بسيطة توضّح كيف تعمل هذه الواجهة عمليًا.",
    blurbFaHint: "",
    backToResource: "العودة إلى {name}",
    search: "بحث",
    create: "إنشاء",
    edit: "تعديل",
    delete: "حذف",
    save: "حفظ",
    saving: "جارٍ الحفظ…",
    deleting: "جارٍ الحذف…",
    cancel: "إلغاء",
    fillSample: "تعبئة مثال",
    noRecords: "لا توجد سجلات",
    loading: "جارٍ التحميل…",
    confirmDelete: "هل تريد حذف هذا السجل؟",
    confirmDeleteBody: "لا يمكن التراجع عن هذا الإجراء.",
    networkError: "خطأ في الشبكة",
    authDemoPassword: "يستخدم جميع المستخدمين القياسيين كلمة المرور التجريبية الموحدة:",
    username: "اسم المستخدم",
    password: "كلمة المرور",
    login: "تسجيل الدخول",
    loginSuccess: "تم تسجيل الدخول بنجاح.",
    logout: "تسجيل الخروج",
    getMe: "GET /me",
    token: "الرمز (Token)",
    user: "المستخدم",
    loginFirst: "سجّل الدخول أولًا للحصول على الرمز",
    createdAt: "تاريخ الإنشاء",
    fieldLabels: {
      name: "الاسم",
      username: "اسم المستخدم",
      email: "البريد الإلكتروني",
      avatarUrl: "رابط الصورة الرمزية",
      role: "الدور",
      city: "المدينة",
      country: "الدولة",
      company: "الشركة",
      title: "العنوان",
      body: "المحتوى",
      published: "منشور",
      userId: "معرّف المستخدم",
      postId: "معرّف المنشور",
      albumId: "معرّف الألبوم",
      url: "URL",
      thumbnailUrl: "رابط المصغّرة",
      completed: "مكتمل",
      description: "الوصف",
      price: "السعر",
      stock: "المخزون",
      category: "الفئة",
      imageUrl: "رابط الصورة",
      message: "الرسالة",
      type: "النوع",
      read: "مقروء",
      code: "الرمز",
      capital: "العاصمة",
      region: "المنطقة",
      population: "عدد السكان",
      currency: "العملة",
      flagUrl: "رابط العلم",
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
      teaser: "قيد التطوير — أدوات التنسيق والمقارنة والتحويل",
      hint: "/json — اختر أداة للتبديل بين العروض",
      badge: "قيد التطوير",
      summary:
        "أداة JSON Workbench (قيد التطوير) هي أداة في المتصفح لتنسيق JSON ومقارنة البنى والبحث والتحويل. تدعم TypeScript وZod وYAML وCSV والأدوات المساعدة.",
      details: [
        "افتح JSON Workbench في /json واختر أداة للتبديل الفوري (يدعم المعامل ?tool=).",
        "الأدوات الأساسية: تنسيق، شجرة، بحث، JSONPath، ومقارنة البنية.",
        "المحولات: TypeScript وZod وJSON Schema وYAML وCSV.",
        "الأدوات المساعدة: فرز المفاتيح، إزالة الفارغ، تسطيح، ترميز، إصلاح، اختيار/استبعاد الحقول، وغيرها.",
        "المنتج قيد التطوير النشط — ستُضاف أدوات وتحسينات جديدة في الإصدارات القادمة.",
      ],
    },
    "2026-09-19-image-generator": {
      title: "مولّد الصور",
      teaser: "روابط صور نائبة حسب الطلب",
      hint: "/image-generator — اختر SVG أو صورة حقيقية وانسخ الرابط",
      summary:
        "أنشئ صورًا نائبة عبر معاملات الرابط. يدعم رسومات SVG من MockData وصور Picsum، مع مقاسات جاهزة للصور الرمزية والمنشورات والبانرات وغيرها.",
      details: [
        "في /image-generator اختر SVG أو صورة حقيقية، وحدد العرض والارتفاع، وانسخ الرابط.",
        "تُرجع الروابط العامة صورة عشوائية افتراضيًا: استخدم /image/{w}/{h} لـ SVG أو ?type=real للصور الفوتوغرافية.",
        "مرّر قيمة ?seed= مخصصة للحفاظ على ألوان SVG أو الصورة نفسها.",
        "الصق الرابط مباشرة في وسم img أو CSS أو حقل صورة.",
      ],
    },
    "2026-09-17-generator": {
      title: "مولّد البيانات",
      teaser: "بيانات JSON واقعية خلال ثوانٍ",
      hint: "/generator — اختر موضوعًا للتوليد أو النسخ أو إنشاء API",
      summary:
        "ولّد بيانات JSON واقعية للواجهة الأمامية بسرعة. اختر الموضوع والحقول وعدد السجلات — ثم انسخها أو نزّلها أو أنشئ واجهة API مؤقتة منها.",
      details: [
        "ولّد البيانات في /generator ضمن فئات «الأشخاص» و«التجارة الإلكترونية» و«المحتوى» و«الوسائط» و«الأعمال» و«المواقع».",
        "يدعم تنسيقي جسم POST وسجل API؛ وتتوفر بيانات فارسية مترجمة لـ FA.",
        "يولّد حتى 1,000 سجل دفعة واحدة في المتصفح؛ ويراعي «إنشاء API» حدود الواجهات المؤقتة (500 سجل / 64 كيلوبايت).",
        "تبقى اختياراتك والبيانات المولّدة محفوظة أثناء التنقل (وتُعاد ضبطها عند إعادة تحميل الصفحة).",
      ],
    },
    "2026-09-16-temporary": {
      title: "الواجهات المؤقتة",
      teaser: "الصق JSON واحصل على رابط REST مؤقت",
      hint: "/temporary — الصق JSON لإنشاء رابط REST عام",
      summary:
        "أنشئ نقاط نهاية REST عامة ومؤقتة من JSON ملصوق. دون تسجيل حساب؛ حتى 5 واجهات نشطة لكل متصفح.",
      details: [
        "أنشئها في /temporary بمدة صلاحية ساعة واحدة أو 6 ساعات أو 12 ساعة أو 24 ساعة.",
        "استخدم GET وPOST وPATCH وDELETE على /api/t/… تمامًا كما تفعل مع الموارد الأخرى.",
        "حتى 5 واجهات نشطة لكل متصفح وحتى 20 عملية إنشاء في الساعة لكل عنوان IP.",
        "تعامل مع الرابط ككلمة مرور: طالما لم تنتهِ صلاحيته، يمكن لأي شخص يملك الرابط قراءة البيانات وتعديلها.",
      ],
    },
    "2026-09-15-preview": {
      title: "معاينة الموارد",
      teaser: "واجهات بسيطة متصلة بـ API",
      hint: "/preview/users — اختبر عمليات CRUD مباشرة في المتصفح",
      summary:
        "شاشات تجريبية بسيطة لموارد مثل Users وPosts وAuth تعمل فوق واجهات API الحقيقية.",
      details: [
        "افتح المعاينة المباشرة من صفحة توثيق المورد.",
        "اختبر القراءة والبحث والترقيم والإنشاء والتعديل والحذف على قاعدة البيانات التجريبية المشتركة.",
        "تتضمن معاينة Auth نموذج تسجيل دخول (كلمة المرور الموحدة: password) وطلبات GET /me مع الرمز.",
        "بدّل اللغة من الأعلى عند الحاجة لإدراج بيانات فارسية.",
      ],
    },
    "2026-09-14-lang-fa": {
      title: "بيانات فارسية (?lang=fa)",
      teaser: "بيانات اختبار مترجمة باللغة الفارسية",
      hint: "/api/users?lang=fa — أضف lang=fa للحصول على بيانات فارسية",
      summary:
        "أضف ?lang=fa إلى نقطة النهاية للحصول على الأسماء وأسماء المستخدمين وأرقام الهواتف والنصوص باللغة الفارسية.",
      details: [
        "الإنجليزية هي اللغة الافتراضية؛ وتُحدَّد اللغة عبر معامل الاستعلام lang=fa فقط (دون cookies أو Accept-Language).",
        "تتضمن استجابات FA الترويسة Content-Language: fa وتلميح الخط Vazirmatn.",
        "يعمل مع القوائم والسجلات الفردية وتسجيل الدخول بأسماء مستخدم فارسية.",
        "عند اختيار فارسی في الأعلى، يضيف Playground المعامل lang=fa تلقائيًا أيضًا.",
      ],
    },
    "2026-09-12-playground": {
      title: "Playground",
      teaser: "استدعِ واجهات API مباشرة في المتصفح",
      hint: "/playground — أرسل الطلبات واستعرض JSON",
      summary:
        "أرسل طلبات API مباشرة في المتصفح، واختبر تسجيل الدخول الناجح والفاشل، واستعرض JSON منسّقًا.",
      details: [
        "اختر المورد والإجراء، وعدّل معاملات الاستعلام أو جسم JSON، ثم أرسل الطلب.",
        "في Auth، قارن بين استجابتي 200 و401 بسهولة عبر زري «بيانات صحيحة» و«بيانات خاطئة».",
        "اطّلع على رموز حالة HTTP وJSON المنسّق وبيانات ترقيم المجموعات.",
        "تبقى طلبات الموارد وآخر استجابة محفوظة أثناء التنقل (وتُعاد ضبطها عند إعادة تحميل الصفحة).",
      ],
    },
    "2026-09-10-auth": {
      title: "Mock Auth",
      teaser: "تسجيل الدخول والمصادقة عبر Bearer Token",
      hint: "/api/auth/login — كلمة المرور دائمًا password",
      summary:
        "أرسل طلب POST إلى /api/auth/login مع بيانات مستخدم تجريبي وكلمة المرور للحصول على Bearer Token لاستخدامه مع /me.",
      details: [
        "يستخدم جميع المستخدمين القياسيين كلمة المرور التجريبية الموحدة password.",
        "عند النجاح، يُرجع mock Bearer Token وكائن user يحتوي على (id وname وusername وemail وrole).",
        "تُرجع كلمة المرور الخاطئة أو المستخدم غير المعروف رمز 401 مع رسالة خطأ واضحة.",
        "مرّر الرمز في ترويسة Authorization: Bearer <token> عند طلب GET /api/auth/me للحصول على المستخدم الحالي.",
      ],
    },
    "2026-09-08-resources": {
      title: "موارد REST الحية",
      teaser: "عمليات CRUD كاملة لـ Users وPosts وغيرها",
      hint: "/docs#resources — استعرض نقاط النهاية المتاحة",
      summary:
        "تشمل الموارد المتاحة Users وPosts وComments وAlbums وPhotos وTodos وProducts وNotifications وCountries مع دعم كامل لعمليات CRUD والترقيم.",
      details: [
        "تُعيد القوائم المرقّمة { data, pagination } مع الحقول page وlimit وtotal وtotalPages.",
        "تتوفر معاملات استعلام للبحث والفرز والتصفية والتأخير الاصطناعي وفرض رمز خطأ.",
        "تُعاد ضبط قاعدة بيانات الإنتاج المشتركة يوميًا — استخدمها للعروض والاختبارات وليس للتخزين الدائم.",
        "نزّل المواصفة القابلة للقراءة آليًا من /openapi.json لاستخدامها مع Postman أو Swagger أو أدوات الذكاء الاصطناعي.",
      ],
    },
  },
  catalog: {
    auth: {
      title: "المصادقة",
      summary:
        "نقطة نهاية وهمية لتسجيل الدخول باسم المستخدم وكلمة المرور. تُرجع Bearer Token عند النجاح و401 عند فشل الوصول.",
    },
    users: {
      title: "المستخدمون",
      summary: "واجهة CRUD وهمية للمستخدمين مع البحث والتصفية حسب الدور والترقيم.",
    },
    posts: {
      title: "المنشورات",
      summary: "منشورات مرتبطة بالمستخدمين مع دعم الوسوم وحالة النشر.",
    },
    comments: {
      title: "التعليقات",
      summary: "تعليقات على المنشورات تتضمن الاسم والبريد الإلكتروني والنص.",
    },
    albums: {
      title: "الألبومات",
      summary: "ألبومات المستخدمين؛ وترتبط الصور بالألبوم عبر albumId.",
    },
    photos: {
      title: "الصور",
      summary: "صور داخل الألبومات تتضمن حقلي url وthumbnailUrl.",
    },
    todos: {
      title: "المهام",
      summary: "مهام بسيطة مرتبطة بالمستخدمين مع حالة الإنجاز.",
    },
    products: {
      title: "المنتجات",
      summary: "كتالوج منتجات يتضمن السعر والمخزون والفئة وimageUrl.",
    },
    notifications: {
      title: "الإشعارات",
      summary: "إشعارات المستخدمين مع النوع وحالة القراءة.",
    },
    countries: {
      title: "الدول",
      summary: "بيانات الدول مع رموز ISO والمنطقة وعدد السكان والعلم.",
    },
  },
};

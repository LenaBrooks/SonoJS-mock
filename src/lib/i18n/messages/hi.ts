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

export const hi: Messages = {
  common: {
    home: "होम",
    docs: "डॉक्यूमेंटेशन",
    playground: "Playground",
    contact: "संपर्क करें",
    preview: "प्रीव्यू",
    search: "खोजें",
    loading: "लोड हो रहा है…",
    save: "सेव करें",
    saving: "सेव हो रहा है…",
    cancel: "रद्द करें",
    create: "बनाएं",
    edit: "संपादित करें",
    delete: "हटाएं",
    searchPlaceholder: "API खोजें…",
    noResults: "कोई परिणाम नहीं मिला",
    new: "नया",
    inDevelopment: "डेवलपमेंट में",
    actions: "एक्शन",
    copy: "कॉपी करें",
    copied: "कॉपी हो गया",
    live: "लाइव",
    open: "खोलें",
    tryIt: "आज़माएं",
    learnMore: "और जानें",
    back: "वापस",
    close: "बंद करें",
    yes: "हाँ",
    no: "नहीं",
    name: "नाम",
    email: "ईमेल",
    message: "मैसेज",
    send: "भेजें",
    sending: "भेजा जा रहा है…",
    networkError: "नेटवर्क में समस्या आई",
    temporary: "अस्थायी API",
    temporaryBadge: "त्वरित शुरुआत",
    generator: "डेटा जनरेटर",
    imageGenerator: "इमेज जनरेटर",
    jsonWorkbench: "JSON कार्यक्षेत्र",
  },
  header: {
    primaryNav: "मुख्य नेविगेशन",
    whatsNew: "नया क्या है",
    whatsNewTitle: "नया क्या है",
    whatsNewSubtitle: "ताज़ा फीचर्स और अपडेट्स",
    latest: "ताज़ा अपडेट",
    contact: "परिचय और संपर्क",
    menu: "मेनू",
    openMenu: "मेनू खोलें",
    appearance: "थीम",
    lightMode: "लाइट मोड चालू करें",
    darkMode: "डार्क मोड चालू करें",
    light: "लाइट",
    dark: "डार्क",
    apiLangGroup: "भाषा",
    english: "English",
    persian: "فارسی",
    github: "GitHub",
    githubStars: "GitHub — रेपो को स्टार दें",
  },
  home: {
    tagline:
      "असली जैसा लगने वाला JSON डेटा देने वाले मुफ़्त REST mock API। बिना बैकएंड के प्रोटोटाइप बनाएं, ऑथेंटिकेशन टेस्ट करें और तुरंत एंडपॉइंट्स जोड़ें।",
    taglineNote: "",
    resourcesTitle: "रिसोर्सेज़",
    resourcesBlurb:
      "डॉक्यूमेंटेशन और उदाहरणों के साथ 10 तैयार REST API रिसोर्सेज़। प्रोडक्शन में एक शेयर्ड डेमो डेटाबेस इस्तेमाल होता है।",
    searchLabel: "API और एंडपॉइंट्स खोजें",
    searchPlaceholder: "users, posts, auth खोजें…",
    temporaryCtaTitle: "अस्थायी API",
    temporaryCtaBody:
      "पेस्ट किए गए JSON या जनरेटर से सीधे अस्थायी API बनाएं। URL को पासवर्ड की तरह संभालें। हर ब्राउज़र में एक साथ 5 अस्थायी API चल सकते हैं।",
    temporaryCtaLink: "अस्थायी API बनाएं",
  },
  notFound: {
    title: "पेज नहीं मिला",
    body: "यह पेज MockData पर मौजूद नहीं है। होम पर जाएं या डॉक्यूमेंटेशन खोलें।",
    home: "होम",
    docs: "डॉक्यूमेंटेशन",
  },
  blog: {
    title: "ब्लॉग",
    description:
      "मॉक डेटा, JSON, APIs और फ्रंटएंड डेवलपमेंट से जुड़े लेख और गाइड्स।",
    all: "सभी",
    emptyTitle: "अभी कोई लेख नहीं है",
    emptyBody: "नए लेख जल्द ही प्रकाशित किए जाएंगे — कृपया बाद में देखें।",
    emptyCategoryTitle: "यह कैटेगरी खाली है",
    emptyCategoryBody: "कोई दूसरी कैटेगरी चुनें या सभी लेख देखें।",
    readingTime: "{n} मिनट में पढ़ें",
    previousPage: "पिछला",
    nextPage: "अगला",
    pageStatus: "पेज {page} / {total}",
    paginationNav: "पेज नेविगेशन",
    categoriesNav: "ब्लॉग कैटेगरीज़",
    backToBlog: "ब्लॉग",
    previousArticle: "पिछला लेख",
    nextArticle: "अगला लेख",
    relatedArticles: "संबंधित लेख",
    categories: {
      news: "ख़बरें",
      "mock-data": "मॉक डेटा",
      json: "JSON",
      api: "API",
      frontend: "फ्रंटएंड",
    },
  },
  contact: {
    title: "संपर्क करें",
    intro:
      "कोई सवाल, फ़ीडबैक या नया आइडिया है? नीचे दिए गए फ़ॉर्म से मैसेज भेजें या सीधे ईमेल करें:",
    name: "नाम",
    email: "ईमेल",
    topic: "विषय",
    message: "मैसेज",
    send: "भेजें",
    sending: "भेजा जा रहा है…",
    success: "आपका मैसेज भेज दिया गया है। संपर्क करने के लिए धन्यवाद — हम जल्द ही जवाब देंगे।",
    chooseTopic: "कृपया एक विषय चुनें।",
    pickTopic: "आपका मैसेज किस बारे में है?",
    topics: {
      question: "सवाल",
      bug: "बग रिपोर्ट",
      feature: "फीचर सुझाव",
      other: "अन्य",
    },
  },
  docs: {
    title: "डॉक्यूमेंटेशन",
    navLabel: "डॉक्यूमेंटेशन इंडेक्स",
    intro:
      "MockData JSON फ़ॉर्मेट में मॉक REST रिसोर्सेज़ देता है। आप खुले एंडपॉइंट्स कॉल कर सकते हैं, लॉगिन फ़्लो टेस्ट कर सकते हैं, Playground में रिक्वेस्ट भेज सकते हैं, /generator में डेटासेट बना सकते हैं, /image-generator में प्लेसहोल्डर इमेजेज़ जनरेट कर सकते हैं, /json में JSON Workbench इस्तेमाल कर सकते हैं और अस्थायी API चला सकते हैं। प्रोडक्शन कैटलॉग रिसोर्सेज़ एक शेयर्ड डेटाबेस पर चलते हैं (अधिक जानकारी के लिए «शेयर्ड डेटा» सेक्शन देखें)।",
    toc: {
      intro: "परिचय",
      whatsNew: "नया क्या है",
      temporary: "अस्थायी API",
      generator: "डेटा जनरेटर",
      imageGenerator: "इमेज जनरेटर",
      jsonWorkbench: "JSON कार्यक्षेत्र",
      sharedData: "शेयर्ड डेटा",
      language: "भाषा",
      resources: "रिसोर्सेज़",
      openapi: "OpenAPI",
      requests: "रिक्वेस्ट्स",
      errors: "एरर्स",
      rateLimit: "रेट लिमिट",
      reset: "डेटा रीसेट करें",
    },
    whatsNewTitle: "नया क्या है",
    whatsNewBlurb:
      "डेवलपर्स के लिए सबसे नए से पुराने अपडेट्स। विवरण देखने के लिए किसी भी कार्ड पर क्लिक करें — यही सूची ऊपर बेल आइकन में भी उपलब्ध है।",
    temporaryTitle: "अस्थायी API",
    temporaryBody:
      "अपने खुद के JSON डेटा के साथ अस्थायी REST एंडपॉइंट चाहिए? अस्थायी API शेयर्ड कैटलॉग से अलग चलते हैं: अपना JSON पेस्ट करें और एक्सपायरी अवधि चुनकर /api/t/… का पब्लिक URL पाएं, या जनरेटर में «API बनाएं» से सीधे तैयार करें।",
    temporaryBullets: [
      "ब्राउज़र में /temporary पर बिना लॉगिन के बनाएं (/generator के «API बनाएं» से भी खुलता है)।",
      "एक्सपायरी चुनें: 1 घंटा, 6 घंटे, 12 घंटे या 24 घंटे (डिफ़ॉल्ट 12 घंटे)।",
      "कलेक्शन और इंडिविजुअल रिकॉर्ड्स के लिए /api/t/… पर GET, POST, PATCH और DELETE रिक्वेस्ट भेजें।",
      "URL को पासवर्ड की तरह संभालें: एक्सपायर होने तक जिसके पास भी यह लिंक है, वह डेटा पढ़ और बदल सकता है।",
      "एक्सपायर हो चुके अस्थायी API पर भेजी गई रिक्वेस्ट्स HTTP 410 लौटाती हैं।",
    ],
    temporaryLimitsTitle: "अस्थायी API की सीमाएं",
    temporaryLimitsBullets: [
      "प्रति ब्राउज़र अधिकतम 5 सक्रिय अस्थायी API।",
      "एक IP से रोलिंग 1 घंटे में अधिकतम 20 API क्रिएशन (सीमा पार होने पर HTTP 429 मिलता है)।",
      "JSON पेलोड का अधिकतम साइज़ 64 KB है।",
      "अधिकतम 8 नेस्टिंग लेवल, 500 ऐरे आइटम्स और प्रति ऑब्जेक्ट 200 कीज़।",
      "ग्लोबल /api रेट लिमिट भी लागू होती है (प्रति IP लगभग 60 रिक्वेस्ट्स प्रति मिनट)।",
    ],
    generatorTitle: "डेटा जनरेटर",
    generatorBody:
      "बिना हाथ से सैंपल लिखे फ्रंटएंड के लिए रियलिस्टिक JSON डेटा तैयार करें। सब कुछ ब्राउज़र में चलता है और आप डेटा कॉपी, डाउनलोड या अस्थायी API में बदल सकते हैं।",
    generatorBullets: [
      "/generator पर जाएं और People, E-Commerce, Content, Media, Business और Location कैटेगरीज़ में से कोई टॉपिक चुनें।",
      "POST पेलोड फ़ॉर्मेट (बिना id और टाइमस्टैम्प्स के) और API रिकॉर्ड (id, createdAt, updatedAt के साथ) के बीच स्विच करें।",
      "FA के लिए लोकलाइज़्ड फ़ारसी डेटा या EN के लिए कई देशों का अंग्रेज़ी डेटा इस्तेमाल करें।",
      "ब्राउज़र में एक साथ 1,000 रिकॉर्ड्स तक जनरेट करें; «API बनाएं» अस्थायी API की सीमाओं (500 रिकॉर्ड्स / 64 KB) का पालन करता है।",
      "ऐप के भीतर नेविगेट करने पर आपकी चुनी हुई सेटिंग्स और जनरेटेड डेटा बना रहता है (पूरा पेज रीलोड करने पर रीसेट होता है)।",
    ],
    imageGeneratorTitle: "इमेज जनरेटर",
    imageGeneratorBody:
      "अपने इंटरफ़ेस के लिए कस्टम प्लेसहोल्डर इमेज URLs जनरेट करें। MockData SVG या Picsum रैंडम इमेज चुनें, चौड़ाई व ऊंचाई सेट करें और <img>, CSS या इमेज फ़ील्ड्स में इस्तेमाल करने के लिए URL कॉपी करें।",
    imageGeneratorBullets: [
      "/image-generator में SVG ग्राफ़िक्स या असली फ़ोटोग्राफ़्स में से चुनें।",
      "पब्लिक URL फ़ॉर्मेट SVG के लिए /image/{width}/{height} है, और फ़ोटोज़ के लिए ?type=real जोड़ें।",
      "डिफ़ॉल्ट रूप से यह रैंडम विकल्प देता है; एक ही SVG रंग या फ़ोटो बनाए रखने के लिए कस्टम ?seed= पास करें।",
      "Avatar, Thumbnail, Profile, Square, Post, Cover, Banner और Story के लिए तैयार साइज़ मौजूद हैं।",
    ],
    jsonWorkbenchTitle: "JSON Workbench",
    jsonWorkbenchBody:
      "JSON Workbench (डेवलपमेंट में) इंटरफ़ेस बनाते समय JSON को फ़ॉर्मेट करने, तुलना करने, खोजने और कन्वर्ट करने के लिए ब्राउज़र में चलने वाला टूलकिट है।",
    jsonWorkbenchBullets: [
      "/json में JSON Workbench खोलें और तुरंत व्यू बदलने के लिए कोई टूल चुनें (?tool= पैरामीटर समर्थित है)।",
      "Core टूल्स: Format, Tree, Search, JSONPath और Compare Structure।",
      "Converters: TypeScript, Zod, JSON Schema, YAML और CSV।",
      "Utilities: Sort Keys, Remove Empty, Flatten/Unflatten, Escape/Repair, Pick/Omit फ़ील्ड्स और अन्य।",
      "पूरी तरह ब्राउज़र में चलता है — आपका JSON सर्वर पर नहीं भेजा जाता।",
      "सक्रिय डेवलपमेंट में — आने वाले अपडेट्स में और टूल्स व सुधार जोड़े जाएंगे।",
    ],
    sharedDataTitle: "शेयर्ड डेटा",
    sharedDataBody:
      "सभी यूज़र्स एक ही लाइव डेटाबेस पर काम करते हैं: आप जो भी बनाते, बदलते या हटाते हैं, वह तुरंत दूसरों को भी दिखता है। प्रोडक्शन में डेटाबेस रोज़ाना GET /api/cron/reset के ज़रिए शुरुआती डेटा पर रीसेट होता है। यह प्रोटोटाइप और डेमो के लिए सही है, परमानेंट या संवेदनशील डेटा के लिए नहीं।",
    languageTitle: "भाषा",
    languageBody:
      "डिफ़ॉल्ट रूप से रिसोर्स टेक्स्ट अंग्रेज़ी में आता है। फ़ारसी नाम, यूज़रनेम, ईमेल, फ़ोन नंबर और वाक्यांश पाने के लिए क्वेरी पैरामीटर lang=fa जोड़ें। Cookies या Accept-Language हेडर इस्तेमाल नहीं होते — केवल क्वेरी पैरामीटर काम करता है। टॉप बार में भाषा स्विचर (English | فارسی) से Playground और Preview दोनों सेट होते हैं।",
    languageBullets: [
      "उदाहरण: GET /api/users?lang=fa",
      "FA रिस्पॉन्स में Content-Language: fa हेडर और फ़ॉन्ट हिंट (Vazirmatn) शामिल होता है।",
      "ऊपर فارسی चुनने पर दिशा राइट-टू-लेफ़्ट (RTL) हो जाती है और Playground अपने आप lang=fa जोड़ देता है।",
    ],
    resourcesTitle: "रिसोर्सेज़",
    resourcesBlurb:
      "अभी उपलब्ध एंडपॉइंट्स और जल्द आने वाले फीचर्स की झलक।",
    colResource: "रिसोर्स",
    colBasePath: "बेस पाथ",
    colStatus: "स्टेटस",
    colDocs: "डॉक्यूमेंटेशन",
    statusLive: "लाइव",
    statusDev: "डेवलपमेंट में",
    statusSoon: "जल्द आ रहा है",
    openapiTitle: "OpenAPI",
    openapiBody:
      "मौजूदा सभी एंडपॉइंट्स (Auth, Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, Countries और एडमिन रीसेट) के लिए मशीन-रीडेबल स्पेसिफ़िकेशन। Postman, Swagger UI या AI टूल्स में इंपोर्ट करने के लिए बेहतरीन।",
    download: "डाउनलोड करें",
    requestsTitle: "रिक्वेस्ट्स",
    requestsBody:
      "कलेक्शन एंडपॉइंट्स data और pagination लौटाते हैं; वहीं सिंगल रिकॉर्ड्स { data } लौटाते हैं।",
    errorsTitle: "एरर्स",
    errorsBody:
      "एरर रिस्पॉन्स में एक error ऑब्जेक्ट होता है। आम स्टेटस कोड्स में अमान्य रिक्वेस्ट के लिए 400, ऑथ न होने या फ़ेल होने पर 401, रिकॉर्ड न मिलने पर 404, रेट लिमिट पार होने पर 429 और सर्वर एरर के लिए 500 शामिल हैं। क्लाइंट में एरर हैंडलिंग टेस्ट करने के लिए ?status=500 (400–599 के बीच) जोड़कर कोड सिम्युलेट करें।",
    rateLimitTitle: "रेट लिमिट",
    rateLimitBody:
      "सभी के लिए सेवा स्थिर रखने के लिए /api/* रिक्वेस्ट्स प्रति IP लगभग {limit} प्रति मिनट तक सीमित हैं। सीमा पार होने पर HTTP 429 (Too Many Requests) आता है; आप X-RateLimit हेडर्स से बचा हुआ कोटा देख सकते हैं।",
    resetTitle: "डेटा रीसेट करें",
    resetBody:
      "सभी विज़िटर्स एक ही डेमो डेटाबेस शेयर करते हैं। प्रोडक्शन में यह हर 24 घंटे में रीसेट होता है, लेकिन आप एडमिन सीक्रेट देकर नीचे डेमो टेबल्स को साफ़ कर सीड डेटा से दोबारा भर सकते हैं।",
    resetPanel: {
      intro: "डेमो टेबल्स को रीसेट कर सीड डेटा से दोबारा भरने के लिए एडमिन सीक्रेट डालें।",
      placeholder: "एडमिन सीक्रेट",
      button: "अभी रीसेट करें",
      resetting: "रीसेट हो रहा है…",
      needSecret: "पहले एडमिन सीक्रेट डालें।",
      confirm: "क्या आप वाकई डेमो टेबल्स को रीसेट कर सीड डेटा से दोबारा भरना चाहते हैं?",
      networkError: "नेटवर्क में समस्या आई। कृपया जांचें कि सर्वर चल रहा है।",
      donePrefix: "रीसेट पूरा हुआ",
    },
    colIndex: "#",
  },
  resourceDocs: {
    endpoints: "एंडपॉइंट्स",
    queryParams: "क्वेरी पैरामीटर्स",
    examples: "रिक्वेस्ट उदाहरण",
    response: "उदाहरण रिस्पॉन्स",
    tryExample: "आज़माएं",
    preview: "प्रीव्यू",
    playground: "Playground",
    backToResources: "रिसोर्सेज़ पर वापस जाएं",
  },
  playground: {
    title: "Playground",
    blurb:
      "MockData API पर असली रिक्वेस्ट्स भेजें और ब्राउज़र में तुरंत JSON रिस्पॉन्स देखें। नेविगेट करते समय हर रिसोर्स की आख़िरी रिक्वेस्ट सेव रहती है।",
    resource: "रिसोर्स",
    action: "एक्शन",
    send: "भेजें",
    sending: "भेजा जा रहा है…",
    response: "रिस्पॉन्स",
    request: "रिक्वेस्ट",
    body: "बॉडी",
    query: "Query",
    headers: "हेडर्स",
    correct: "सही क्रेडेंशियल्स",
    wrong: "ग़लत क्रेडेंशियल्स",
    password: "पासवर्ड",
    user: "यूज़र",
    pickUser: "एक यूज़र चुनें",
    loadError: "विकल्प लोड नहीं हो सके",
    emptyResponse: "अभी कोई रिस्पॉन्स नहीं आया",
    startHint: "कोई रिसोर्स चुनें और रिक्वेस्ट भेजें।",
    types: "TS",
    json: "JSON",
  },
  temporary: {
    title: "अस्थायी API",
    blurb: "JSON पेस्ट करें और कुछ ही सेकंड में अस्थायी API चलाएं।",
    privacyNote:
      "URL को पासवर्ड की तरह संभालें: एक्सपायर होने तक जिसके पास भी यह लिंक है, वह डेटा पढ़ और बदल सकता है। हर ब्राउज़र में एक साथ 5 अस्थायी API चल सकते हैं।",
    jsonLabel: "JSON",
    durationLabel: "अवधि",
    duration1h: "1 घंटा",
    duration6h: "6 घंटे",
    duration12h: "12 घंटे",
    duration24h: "24 घंटे",
    checkJson: "JSON जांचें",
    jsonValid: "सब ठीक है — आप API बना सकते हैं।",
    jsonHint: "पहले JSON जांचें या सीधे API बनाएं।",
    create: "API बनाएं",
    creating: "बनाया जा रहा है…",
    acceptFix: "फ़िक्स लागू करें और बनाएं",
    rejectFix: "एडिट जारी रखें",
    fixedPreview: "हमने कुछ समस्याएं अपने आप ठीक कर दी हैं। नतीजा देखें और फिर बनाएं।",
    myApis: "मेरे अस्थायी API",
    emptyList: "अभी कोई सक्रिय अस्थायी API नहीं है।",
    copyUrl: "कॉपी करें",
    delete: "हटाएं",
    deleteAll: "सभी हटाएं",
    deleting: "…",
    confirmDelete: "क्या आप इस API को हटाना चाहते हैं?",
    confirmDeleteBody: "यह लिंक काम करना बंद कर देगा।",
    confirmDeleteAll: "क्या आप सभी API हटाना चाहते हैं?",
    confirmDeleteAllBody: "इस सूची के सभी लिंक्स काम करना बंद कर देंगे।",
    cancel: "रद्द करें",
    limitReached: "अधिकतम 5 API की सीमा पूरी हो गई है।",
    limitReachedBody: "नीचे से कोई API हटाएं या उसके एक्सपायर होने का इंतज़ार करें।",
    createdTitle: "API बन गया",
    openApi: "खोलें",
    slotsLabel: "5 में से {n}",
    maxActive: "",
    sampleJson: `[
  { "id": "1", "firstName": "आरव", "lastName": "शर्मा", "role": "admin" },
  { "id": "2", "firstName": "अनन्या", "lastName": "पटेल", "role": "member" },
  { "id": "3", "firstName": "रोहन", "lastName": "नायर", "role": "member" }
]`,
    issues: {
      EMPTY: "JSON ऑब्जेक्ट या ऐरे पेस्ट करें।",
      INVALID_JSON: "अमान्य JSON। कॉमा, कोट्स और ब्रैकेट्स जांचें।",
      TOO_LARGE: "JSON साइज़ अनुमति सीमा ({max} KB) से ज़्यादा है।",
      NOT_OBJECT_OR_ARRAY: "टॉप-लेवल { } ऑब्जेक्ट या [ ] ऐरे होना चाहिए।",
      TOO_DEEP: "नेस्टिंग बहुत गहरी है (अधिकतम {max})।",
      ARRAY_TOO_LONG: "ऐरे अनुमति लंबाई से बड़ा है (अधिकतम {max} आइटम्स)।",
      TOO_MANY_KEYS: "एक ही ऑब्जेक्ट में बहुत अधिक कीज़ हैं (अधिकतम {max})।",
      UNSAFE_KEY: "असुरक्षित की «{key}» की अनुमति नहीं है।",
      AUTO_FIXED: "आख़िर के फ़ालतू कॉमा या असुरक्षित कीज़ हटा दी गईं।",
    },
  },
  imageGenerator: {
    title: "इमेज जनरेटर",
    blurb:
      "प्रोजेक्ट्स के लिए कस्टम प्लेसहोल्डर इमेजेज़ बनाएं। <img>, CSS या इमेज फ़ील्ड्स में इस्तेमाल करने के लिए MockData SVG या रैंडम इमेज URLs कॉपी करें।",
    modeSvg: "SVG",
    modeReal: "असली फ़ोटो",
    width: "चौड़ाई",
    height: "ऊंचाई",
    generate: "URL जनरेट करें",
    generating: "जनरेट हो रहा है…",
    yourUrl: "आपका API URL",
    preview: "प्रीव्यू",
    useInProject: "प्रोजेक्ट में उपयोग करें",
    tabUrl: "URL",
    tabHtml: "HTML",
    tabCss: "CSS",
    tabJs: "JavaScript",
    tabCurl: "cURL",
    readySizes: "तैयार साइज़",
    sizes: {
      avatar: "अवतार",
      thumbnail: "थंबनेल",
      profile: "प्रोफ़ाइल",
      square: "स्क्वेयर",
      post: "पोस्ट",
      cover: "कवर",
      banner: "बैनर",
      story: "स्टोरी",
    },
  },
  jsonWorkbench: {
    title: "JSON Workbench",
    blurb:
      "JSON को एक बार पेस्ट करें और बार-बार पेस्ट किए बिना Format, Search, Convert और बाकी टूल्स के बीच स्विच करें।",
    toolNavLabel: "Workbench टूल्स",
    source: {
      title: "सोर्स JSON",
      hint: "यहाँ एक बार पेस्ट करें — सभी टूल्स यही JSON इस्तेमाल करेंगे।",
      sample: "सैंपल लोड करें",
      valid: "JSON मान्य है।",
      needJson: "पहले बाईं ओर JSON पेस्ट करें।",
      fixFirst: "पहले सोर्स JSON में सिंटैक्स एरर ठीक करें।",
      pickAction: "आप क्या करना चाहते हैं?",
      useResult: "नतीजे को सोर्स JSON बनाएं",
      diffHint: "सोर्स JSON साइड A है; तुलना के लिए नीचे JSON B पेस्ट करें।",
      escapedInput: "एस्केप्ड स्ट्रिंग",
      schemaInput: "JSON Schema",
      fromSchemaNote:
        "सैंपल JSON बनाने और उसे सोर्स पर लागू करने के लिए नीचे JSON Schema पेस्ट करें।",
    },
    categories: {
      core: "कोर",
      transform: "कन्वर्ज़न",
      utility: "यूटिलिटी",
    },
    labels: {
      input: "इनपुट",
      output: "आउटपुट",
      tree: "ट्री",
      matches: "मैचेज़",
      jsonA: "JSON A",
      jsonB: "JSON B",
      diffResult: "अंतर",
      jsonpath: "JSONPath",
      result: "नतीजा ({count})",
    },
    actions: {
      format: "फ़ॉर्मेट करें",
      minify: "मिनिफ़ाई करें",
      showTree: "ट्री दिखाएं",
      search: "खोजें",
      clearSearch: "खोज साफ़ करें",
      replace: "बदलें",
      replaceAll: "सभी बदलें",
      prevMatch: "पिछला",
      nextMatch: "अगला",
      compare: "तुलना करें",
      run: "चलाएं",
      runPath: "पाथ चलाएं",
      toTypescript: "TypeScript में बदलें",
      toZod: "Zod में बदलें",
      toSchema: "Schema में बदलें",
      swapDirection: "दिशा बदलें",
      sortKeys: "कीज़ सॉर्ट करें",
      removeEmpty: "खाली मान हटाएं",
      flatten: "फ़्लैटन करें",
      unflatten: "अनफ़्लैटन करें",
      escape: "एस्केप करें",
      unescape: "अनएस्केप करें",
      repair: "JSON रिपेयर करें",
      fromSchema: "सैंपल बनाएं",
      extractKeys: "कीज़ निकालें",
      extractValues: "वैल्यूज़ निकालें",
      pick: "फ़ील्ड्स चुनें",
      omit: "फ़ील्ड्स हटाएं",
      compareStructure: "स्ट्रक्चर तुलना करें",
      clear: "साफ़ करें",
      expandAll: "सभी फैलाएं",
      collapseAll: "सभी समेटें",
      copyPath: "पाथ कॉपी करें",
      copyValue: "वैल्यू कॉपी करें",
    },
    errors: {
      empty: "JSON पेस्ट करें।",
      invalid: "अमान्य JSON।",
      unexpectedEnd: "JSON का अप्रत्याशित अंत।",
      unexpectedToken: "अप्रत्याशित टोकन: {token}",
      expectedPropertyName: "प्रॉपर्टी नाम डबल कोट्स में होने चाहिए।",
      expectedCommaOrBrace: "वैल्यू के बाद ',' या '}' अपेक्षित है।",
      expectedCommaOrBracket: "ऐरे आइटम के बाद ',' या ']' अपेक्षित है।",
      expectedColon: "प्रॉपर्टी नाम के बाद ':' अपेक्षित है।",
      unterminatedString: "स्ट्रिंग बंद नहीं की गई है।",
      badControlChar: "स्ट्रिंग में अमान्य कंट्रोल कैरेक्टर है।",
      badEscape: "स्ट्रिंग के अंदर अमान्य एस्केप सीक्वेंस।",
      trailingChar: "JSON वैल्यू के बाद अतिरिक्त कैरेक्टर्स हैं।",
      objectKeyExpected: "यहाँ ऑब्जेक्ट की अपेक्षित है।",
      unexpectedCharacter: "अप्रत्याशित कैरेक्टर: {char}",
      invalidCharacter: "अमान्य कैरेक्टर: {char}",
      invalidUnicode: "अमान्य Unicode एस्केप: {chars}",
      couldNotRepair: "इस JSON को अपने आप रिपेयर नहीं किया जा सका।",
      atLineColumn: "लाइन {line}, कॉलम {column}",
      atLine: "लाइन {line}",
      atPosition: "पोजीशन {position}",
    },
    types: {
      object: "ऑब्जेक्ट",
      array: "ऐरे",
      string: "स्ट्रिंग",
      number: "नंबर",
      boolean: "बूलियन",
      null: "null",
    },
    validate: {
      idleHint: "मानक सिंटैक्स के लिए JSON जांचने हेतु पेस्ट करें।",
      validTitle: "मान्य JSON",
      validBody: "रूट टाइप: {type}",
      invalidTitle: "अमान्य JSON",
    },
    tree: {
      idleTitle: "ट्री यहाँ दिखेगा",
      idleBody: "बाईं ओर JSON पेस्ट करें और «ट्री दिखाएं» पर क्लिक करें।",
      errorTitle: "ट्री नहीं बन सका",
      errorBody: "JSON सिंटैक्स एरर ठीक करें और दोबारा कोशिश करें।",
    },
    search: {
      query: "खोजें",
      replaceWith: "इससे बदलें",
      matchCount: "{total} में से {current}",
      noMatches: "कोई मैच नहीं मिला",
      noMatchesBody: "कीज़ या वैल्यूज़ में आपकी खोज से मेल खाता कुछ नहीं मिला।",
      idleTitle: "खोज के नतीजे यहाँ दिखेंगे",
      idleBody: "कीज़ और वैल्यूज़ में खोजने के लिए टेक्स्ट डालें और «खोजें» पर क्लिक करें।",
      errorTitle: "खोज उपलब्ध नहीं है",
      errorBody: "खोजने से पहले JSON सिंटैक्स एरर ठीक करें।",
      kindKey: "की",
      kindValue: "वैल्यू",
      activeHint: "{kind} · {path}",
      replacedCount: "{count} आइटम बदले गए।",
    },
    diff: {
      idleTitle: "अंतर यहाँ दिखेगा",
      idleBody: "तुलना के लिए दोनों तरफ — JSON A और JSON B — भरें।",
      identical: "कोई अंतर नहीं है। दोनों डॉक्यूमेंट्स का स्ट्रक्चर और वैल्यूज़ एक जैसी हैं।",
      added: "जोड़ा गया / केवल B में है",
      removed: "हटाया गया / केवल A में है",
      changed: "बदला हुआ",
      sideEmpty: "यह हिस्सा खाली है।",
      emptyA: "JSON A खाली है।",
      emptyB: "JSON B खाली है।",
      bothInvalid: "दोनों — JSON A और JSON B — अमान्य हैं।",
    },
    jsonpath: {
      whatIs:
        "JSONPath की मदद से आप नेस्टेड JSON से खास वैल्यूज़ निकाल सकते हैं — बिल्कुल डेटा के लिए CSS सिलेक्टर की तरह। एक्सप्रेशन डालने के लिए नीचे किसी उदाहरण पर क्लिक करें।",
      hintTitle: "त्वरित सिंटैक्स गाइड",
      hintBody: `$              रूट डॉक्यूमेंट
.users         प्रॉपर्टी का नाम
[*]            ऐरे के सभी एलिमेंट्स
[0]            ऐरे का पहला एलिमेंट`,
      idleTitle: "क्वेरी के नतीजे यहाँ दिखेंगे",
      idleBody: "पाथ एक्सप्रेशन डालें और क्वेरी चलाएं।",
      errorTitle: "क्वेरी नहीं चल सकी",
      errorBody: "JSON या पाथ में मौजूद एरर ठीक करें और दोबारा कोशिश करें।",
      noResults: "इस पाथ के लिए कोई नतीजा नहीं मिला।",
      emptyPath: "JSONPath एक्सप्रेशन डालें।",
    },
    transform: {
      tsIdleTitle: "TypeScript टाइप्स यहाँ दिखेंगे",
      tsIdleBody: "TypeScript टाइप्स बनाने के लिए JSON पेस्ट करें।",
      zodIdleTitle: "Zod स्कीमा यहाँ दिखेगा",
      zodIdleBody: "Zod स्कीमा बनाने के लिए JSON पेस्ट करें।",
      schemaExplain: "JSON ↔ Schema",
      schemaUse:
        "सोर्स JSON से JSON Schema बनाएं या स्कीमा से सैंपल JSON जनरेट करें।",
      schemaIdleTitle: "JSON Schema यहाँ दिखेगा",
      schemaIdleBody: "JSON Schema बनाने के लिए JSON पेस्ट करें।",
      yamlIdleTitle: "YAML यहाँ दिखेगा",
      yamlIdleBody: "सोर्स JSON को YAML फ़ॉर्मेट में कन्वर्ट किया जा रहा है।",
      yamlToJsonIdle: "सोर्स JSON में कन्वर्ट करने के लिए ऊपर YAML पेस्ट करें।",
      yamlApplied: "कन्वर्ट हुआ और सोर्स JSON पर लागू किया गया।",
      csvIdleTitle: "CSV यहाँ दिखेगा",
      csvIdleBodyJson:
        "सोर्स JSON से किसी एक ऑब्जेक्ट, ऑब्जेक्ट्स के ऐरे या लिस्ट वाले ऑब्जेक्ट को CSV में बदलें।",
      csvIdleBodyCsv: "JSON में बदलने के लिए हेडर रो के साथ CSV पेस्ट करें।",
      csvToJsonIdle: "सोर्स JSON में बदलने के लिए ऊपर CSV पेस्ट करें।",
      csvApplied: "कन्वर्ट हुआ और सोर्स JSON पर लागू किया गया।",
      csvUnsupported: "इस JSON स्ट्रक्चर को CSV में नहीं बदला जा सकता।",
    },
    utilities: {
      sortAsc: "A → Z",
      sortDesc: "Z → A",
      sortIdleTitle: "सॉर्ट करने के लिए तैयार",
      sortIdleBody: "आउटपुट में सॉर्टेड कीज़ देखने के लिए A → Z या Z → A चुनें।",
      sortApplied: "कीज़ सॉर्ट हो गईं। नीचे नतीजा देखें।",
      removeOptions: "हटाने योग्य खाली वैल्यूज़",
      removeNull: "null",
      removeEmptyString: '""',
      removeEmptyArray: "[]",
      removeEmptyObject: "{}",
      removeNullLabel: "null",
      removeEmptyStringLabel: "खाली स्ट्रिंग्स",
      removeEmptyArrayLabel: "खाली ऐरेज़",
      removeEmptyObjectLabel: "खाली ऑब्जेक्ट्स",
      removePreserveHint: "false और 0 सुरक्षित रहते हैं और हटाए नहीं जाते।",
      removeIdleTitle: "साफ़ किया हुआ JSON यहाँ दिखेगा",
      removeIdleBody: "जो हटाना है उसे चुनें और चलाएं।",
      nestedLabel: "नेस्टेड",
      flatLabel: "फ़्लैट",
      flattenHint: "नेस्टेड ऑब्जेक्ट्स को डॉट-सेपरेटेड कीज़ में बदलता है (जैसे address.city, skills.0)।",
      flattenUse:
        "स्प्रेडशीट, .env फ़ाइलों, सर्च इंडेक्स या फ़्लैट डिक्शनरी चाहने वाले APIs में एक्सपोर्ट करते समय काम आता है।",
      flattenIdleTitle: "फ़्लैटन करने के लिए तैयार",
      flattenIdleBody: "आउटपुट में नेस्टेड कीज़ डॉट-सेपरेटेड पाथ के रूप में दिखेंगी।",
      flattenApplied: "फ़्लैटन हो गया। नीचे नतीजा देखें।",
      unflattenHint: "डॉट-सेपरेटेड पाथ्स को नेस्टेड ऑब्जेक्ट्स और नंबर वाले हिस्सों को ऐरेज़ में बदलता है।",
      unflattenUse:
        "जब आपको user.name या skills.0 जैसी फ़्लैट कीज़ को वापस सामान्य नेस्टेड JSON बनाना हो तो यह उपयोगी है।",
      unflattenIdleTitle: "नेस्टेड JSON यहाँ दिखेगा",
      unflattenIdleBody: "नेस्टेड स्ट्रक्चर वापस पाने के लिए डॉट-सेपरेटेड कीज़ वाला ऑब्जेक्ट पेस्ट करें।",
      escapeIdleTitle: "एस्केप्ड स्ट्रिंग यहाँ दिखेगी",
      escapeIdleBody: "JSON को एस्केप किया जा रहा है ताकि इसे किसी स्ट्रिंग लिटरल में सुरक्षित रखा जा सके।",
      escapeHint:
        'JSON को एक सिंगल एस्केप्ड स्ट्रिंग में बदलता है जहाँ कोट्स और नई लाइन्स " और  बन जाते हैं ताकि इसे दूसरे टेक्स्ट में सुरक्षित रखा जा सके।',
      escapeUse:
        "कोड, एनवायरनमेंट वेरिएबल्स या लॉग्स में JSON पेस्ट करते समय बाहरी कोट्स टूटने से बचाने के लिए उपयोगी।",
      unescapeIdleTitle: "अनएस्केप्ड JSON यहाँ दिखेगा",
      unescapeIdleBody: "असली JSON वापस पाने के लिए एस्केप्ड JSON स्ट्रिंग पेस्ट करें।",
      repairHint:
        "टूटे हुए, कटे हुए, कमेंट्स वाले या अधूरे टाइप किए गए JSON को स्टेप-बाय-स्टेप रिपेयर करता है।",
      repairUse:
        "आख़िर के फ़ालतू कॉमा, गायब कोट्स/कॉमा/ब्रैकेट्स, कमेंट्स, कोड फ़ेंस, Python/JS लिटरल्स, JSONP, MongoDB टाइप्स, NDJSON, कटे हुए हिस्सों और एडिट के बचे हुए निशानों को संभालता है।",
      repairAlreadyValid: "JSON पहले से ही मान्य था — केवल फ़ॉर्मेटिंग अपडेट की गई।",
      repairFormatted: "फ़ॉर्मेट हो गया।",
      repairReady: "ऑटो-रिपेयर तैयार है।",
      repairApplied: "रिपेयर हो गया।",
      repairAppliedToSource: "सोर्स JSON पर लागू किया गया।",
      repairFailedTitle: "पूरी तरह रिपेयर नहीं हो सका",
      repairFailedAt: "{message} ({line}:{column})",
      repairPreview: "रिपेयर का प्रीव्यू",
      repairFixes: {
        "trailing-commas": "आख़िर के फ़ालतू कॉमा",
        "single-quotes": "सिंगल कोट्स",
        "smart-quotes": "स्मार्ट कोट्स",
        "unquoted-keys": "बिना कोट्स वाली कीज़",
        "missing-commas": "छूटे हुए कॉमा",
        "missing-brackets": "खुले हुए ब्रैकेट्स",
        comments: "कमेंट्स",
        "code-fence": "कोड फ़ेंस",
        "python-literals": "Python लिटरल्स",
        "js-undefined": "undefined → null",
        jsonp: "JSONP रैपर",
        "escaped-string": "एस्केप्ड JSON स्ट्रिंग",
        mongodb: "MongoDB टाइप्स",
        ndjson: "NDJSON → ऐरे",
        ellipsis: "एलिप्सिस (…)",
        "string-concat": "स्ट्रिंग कॉन्कैटिनेशन",
        whitespace: "स्पेस और नई लाइन्स",
        truncated: "कटा हुआ / अधूरा इनपुट",
        "mid-edit-junk": "एडिट के बीच का जंक",
      },
      repairIdleTitle: "रिपेयर किया हुआ JSON यहाँ दिखेगा",
      repairIdleBody:
        "प्रीव्यू देखने के लिए सोर्स JSON में कोई अधूरा स्निपेट या JSON जैसा डेटा पेस्ट करें।",
      fromSchemaHint:
        "type, properties, required, items, enum और default के आधार पर JSON Schema से सैंपल JSON बनाता है।",
      fromSchemaIdleTitle: "सैंपल JSON यहाँ दिखेगा",
      fromSchemaIdleBody: "सैंपल बनाने के लिए नीचे JSON Schema पेस्ट करें।",
      extractHint:
        'लीफ़ पाथ्स और उनकी वैल्यूज़ निकालता है (जैसे { path: "address.city", value: "बेंगलुरु" })।',
      extractIdleTitle: "निकाली गई कीज़ और वैल्यूज़ यहाँ दिखेंगी",
      extractIdleBody: "पाथ-वैल्यू पेयर्स पाने के लिए ऊपर फ़ील्ड्स चुनें।",
      extractKeysHint: "नेस्टेड कीज़ को डॉट-सेपरेटेड पाथ्स के रूप में दिखाता है (और .0 जैसे ऐरे इंडेक्स)।",
      extractKeysIdleTitle: "निकाली गई कीज़ यहाँ दिखेंगी",
      extractKeysIdleBody: "सभी कीज़ इकट्ठा करने के लिए JSON पेस्ट करें।",
      extractValuesHint: "सभी लीफ़ वैल्यूज़ (प्रिमिटिव्स और null) इकट्ठा करता है।",
      extractValuesIdleTitle: "निकाली गई वैल्यूज़ यहाँ दिखेंगी",
      extractValuesIdleBody: "सभी वैल्यूज़ इकट्ठा करने के लिए JSON पेस्ट करें।",
      fieldsLabel: "सोर्स JSON से फ़ील्ड्स",
      fieldsClickHint:
        "चुनने के लिए किसी पाथ पर क्लिक करें। नेस्टेड प्रॉपर्टीज़ डॉट से अलग होती हैं।",
      fieldsSelectAll: "सभी चुनें",
      fieldsClear: "चयन हटाएं",
      fieldsEmpty: "इस JSON में चुनने के लिए कोई फ़ील्ड नहीं है।",
      pickHint: "केवल चुने हुए फ़ील्ड्स रखता है। नीचे सूची में पाथ्स पर क्लिक करें।",
      pickIdleTitle: "नतीजा यहाँ दिखेगा",
      pickIdleBody: "",
      omitHint: "चुने हुए फ़ील्ड्स हटाता है। नीचे सूची में पाथ्स पर क्लिक करें।",
      omitIdleTitle: "नतीजा यहाँ दिखेगा",
      omitIdleBody: "",
      compareHint: "वैल्यूज़ के अंतर को नज़रअंदाज़ कर दो JSON डॉक्यूमेंट्स के स्ट्रक्चर की साथ-साथ तुलना करता है।",
      compareUse:
        "A में गायब कीज़ लाल रंग में, B में जोड़ी गई कीज़ हरे रंग में और टाइप का अंतर पीले रंग में दिखता है।",
      compareBack: "Workbench पर वापस जाएं",
      compareIdleTitle: "दो JSON डॉक्यूमेंट्स डालें",
      compareIdleBody: "उनके स्ट्रक्चर की तुलना करने के लिए दोनों तरफ भरें।",
      compareIdentical: "स्ट्रक्चर एक जैसा है: कीज़ और डेटा टाइप्स समान हैं।",
      compareMissing: "गायब कीज़ (केवल A में)",
      compareExtra: "अतिरिक्त कीज़ (केवल B में)",
      compareType: "अलग टाइप",
    },
    empty: {
      formatTitle: "फ़ॉर्मेट किया हुआ JSON यहाँ दिखेगा",
      formatBody: "बाईं ओर JSON पेस्ट करें और «फ़ॉर्मेट करें» पर क्लिक करें।",
    },
    soon: {
      badge: "जल्द आ रहा है",
      title: "{tool} जल्द ही उपलब्ध होगा",
      body: "यह टूल Workbench के रोडमैप में है और अगले अपडेट में आएगा।",
    },
    tools: {
      format: "फ़ॉर्मेट",
      minify: "मिनिफ़ाई",
      validate: "वैलिडेट",
      tree: "ट्री",
      search: "खोज",
      diff: "अंतर",
      jsonpath: "JSONPath",
      convert: "कन्वर्ट",
      toTypescript: "TypeScript",
      toZod: "Zod",
      toSchema: "JSON Schema",
      yaml: "YAML",
      csv: "CSV",
      sortKeys: "कीज़ सॉर्ट करें",
      removeEmpty: "खाली मान हटाएं",
      flatten: "फ़्लैटन",
      unflatten: "अनफ़्लैटन",
      escape: "एस्केप",
      unescape: "अनएस्केप",
      repair: "रिपेयर",
      extract: "कीज़ और वैल्यूज़",
      extractKeys: "कीज़ निकालें",
      extractValues: "वैल्यूज़ निकालें",
      pick: "फ़ील्ड्स चुनें",
      omit: "फ़ील्ड्स हटाएं",
      compareStructure: "स्ट्रक्चर तुलना",
    },
  },
  generator: {
    title: "डेटा जनरेटर",
    subtitle: "फ्रंटएंड के लिए रियलिस्टिक टेस्ट डेटा तेज़ी से बनाएं।",
    chooseType: "डेटा टाइप चुनें",
    searchPlaceholder: "डेटा टाइप खोजें…",
    noTopics: "कोई मिलता-जुलता डेटा टाइप नहीं मिला।",
    fieldsLegend: "फ़ील्ड्स",
    moreFields: "और फ़ील्ड्स दिखाएं",
    lessFields: "वैकल्पिक फ़ील्ड्स छुपाएं",
    optionalFields: "वैकल्पिक फ़ील्ड्स",
    records: "रिकॉर्ड्स की संख्या",
    customQty: "कस्टम",
    country: "देश",
    countrySearch: "देश खोजें…",
    selectPlaceholder: "डेटा टाइप चुनें…",
    outputMode: "आउटपुट मोड",
    modePayload: "POST पेलोड",
    modeApi: "API रिकॉर्ड",
    modePayloadHint: "बिना id और टाइमस्टैम्प्स के — POST क्रिएट रिक्वेस्ट्स के लिए सही।",
    modeApiHint: "id, createdAt और updatedAt शामिल — सेव किए गए API रिकॉर्ड की तरह।",
    jsonType: "JSON",
    viewJson: "JSON",
    viewType: "TS",
    generate: "{n} बनाएं",
    generating: "{n} बनाए जा रहे हैं…",
    generateAgain: "दोबारा बनाएं",
    refresh: "रीफ़्रेश",
    generated: "बनाए गए: {n}",
    download: "डाउनलोड करें",
    createApi: "API बनाएं",
    createSuccess: "अस्थायी API बन गया है।",
    createBlockedArray:
      "अस्थायी API 500 रिकॉर्ड्स तक सपोर्ट करते हैं। संख्या कम करें और दोबारा कोशिश करें।",
    createBlockedSize:
      "JSON साइज़ अस्थायी API की सीमा (64 KB) से ज़्यादा है। कम रिकॉर्ड्स या फ़ील्ड्स चुनें।",
    openTemporary: "अस्थायी API में खोलें",
    emptyTitle: "डेटा टाइप चुनें",
    emptyBody: "रियलिस्टिक टेस्ट रिकॉर्ड्स बनाने के लिए ऊपर कोई टॉपिक चुनें।",
    duration1h: "1 घंटा",
    duration6h: "6 घंटे",
    duration12h: "12 घंटे",
    duration24h: "24 घंटे",
    countries: {
      all: "सभी देश",
      IR: "ईरान",
      DE: "जर्मनी",
      US: "संयुक्त राज्य अमेरिका",
      GB: "यूनाइटेड किंगडम",
      FR: "फ़्रांस",
      NL: "नीदरलैंड्स",
      JP: "जापान",
      CA: "कनाडा",
    },
    categories: {
      people: "लोग",
      ecommerce: "ई-कॉमर्स",
      content: "कंटेंट",
      media: "मीडिया",
      business: "बिज़नेस",
      location: "लोकेशन",
    },
    fields: {
      id: "id",
      name: "नाम",
      username: "यूज़रनेम",
      email: "ईमेल",
      avatar: "अवतार",
      phone: "फ़ोन",
      company: "कंपनी",
      location: "लोकेशन",
      age: "उम्र",
      role: "रोल",
      jobTitle: "पद",
      department: "डिपार्टमेंट",
      bio: "बायो",
      website: "वेबसाइट",
      createdAt: "बनने की तारीख",
      updatedAt: "अपडेट की तारीख",
      hiredAt: "जॉइनिंग तारीख",
      ordersCount: "ऑर्डर्स की संख्या",
      totalSpent: "कुल खर्च",
      postsCount: "पोस्ट्स की संख्या",
      price: "कीमत",
      image: "इमेज",
      category: "कैटेगरी",
      description: "विवरण",
      brand: "ब्रांड",
      stock: "स्टॉक",
      rating: "रेटिंग",
      sku: "SKU",
      colors: "रंग",
      orderId: "ऑर्डर ID",
      customer: "ग्राहक",
      items: "आइटम्स",
      total: "कुल राशि",
      status: "स्टेटस",
      orderDate: "ऑर्डर की तारीख",
      paymentStatus: "पेमेंट स्टेटस",
      shippingAddress: "शिपिंग पता",
      user: "यूज़र",
      comment: "कमेंट",
      post: "पोस्ट",
      date: "तारीख",
      product: "प्रोडक्ट",
      title: "शीर्षक",
      verified: "वेरिफ़ाइड",
      helpful: "उपयोगी",
      slug: "स्लग (slug)",
      parentCategory: "पैरेंट कैटेगरी",
      productCount: "प्रोडक्ट्स की संख्या",
      quantity: "मात्रा",
      discount: "छूट",
      code: "कोड",
      type: "प्रकार",
      expiresAt: "एक्सपायर होने की तारीख",
      minimumOrder: "न्यूनतम ऑर्डर",
      usageLimit: "इस्तेमाल की सीमा",
      active: "सक्रिय",
      amount: "राशि",
      currency: "मुद्रा",
      paymentMethod: "पेमेंट का तरीका",
      transactionId: "ट्रांज़ैक्शन ID",
      order: "ऑर्डर",
      carrier: "कूरियर पार्टनर",
      trackingNumber: "ट्रैकिंग नंबर",
      estimatedDelivery: "अनुमानित डिलीवरी",
      body: "कंटेंट",
      author: "लेखक",
      tags: "टैग्स",
      publishedAt: "प्रकाशित तारीख",
      likes: "लाइक्स",
      views: "व्यूज़",
      replies: "जवाब",
      attachments: "अटैचमेंट्स",
      actionUrl: "एक्शन URL",
      sender: "भेजने वाला",
      receiver: "प्राप्तकर्ता",
      message: "मैसेज",
      read: "पढ़ा गया",
      artist: "कलाकार",
      cover: "कवर",
      year: "साल",
      genre: "शैली",
      tracks: "ट्रैक्स",
      album: "एल्बम",
      duration: "अवधि",
      poster: "पोस्टर",
      director: "निर्देशक",
      language: "भाषा",
      plays: "प्लेज़",
      label: "लेबल",
      pages: "पेज",
      isbn: "ISBN",
      instructor: "इंस्ट्रक्टर",
      level: "लेवल",
      lessons: "लेसन",
      students: "छात्र",
      employees: "कर्मचारी",
      logo: "लोगो",
      industry: "उद्योग",
      salary: "सैलरी",
      experience: "अनुभव",
      remote: "रिमोट",
      founded: "स्थापना वर्ष",
      postedAt: "पोस्ट होने की तारीख",
      capacity: "क्षमता",
      capital: "राजधानी",
      flag: "झंडा",
      region: "क्षेत्र",
      population: "आबादी",
      street: "स्ट्रीट",
      postalCode: "पिन कोड",
      latitude: "अक्षांश (Latitude)",
      longitude: "देशांतर (Longitude)",
      country: "देश",
      city: "शहर",
      notes: "नोट्स",
      team: "टीम",
      joinedAt: "शामिल होने की तारीख",
      skills: "स्किल्स",
      specialty: "विशेषज्ञता",
      hospital: "अस्पताल",
      licenseNumber: "लाइसेंस नंबर",
      yearsExperience: "अनुभव के वर्ष",
      bloodType: "ब्लड ग्रुप",
      diagnosis: "निदान",
      doctor: "डॉक्टर",
      admittedAt: "भर्ती होने की तारीख",
      vehicleType: "वाहन का प्रकार",
      plateNumber: "नंबर प्लेट",
      tripsCount: "ट्रिप्स की संख्या",
      roomNumber: "रूम नंबर",
      checkIn: "चेक-इन",
      checkOut: "चेक-आउट",
      nights: "रातें",
      followers: "फ़ॉलोअर्स",
      following: "फ़ॉलोइंग",
      grade: "कक्षा / ग्रेड",
      school: "स्कूल",
      gpa: "GPA",
      major: "मुख्य विषय",
      enrollmentYear: "दाख़िला वर्ष",
      subject: "विषय",
      classesCount: "क्लासेस की संख्या",
      invoiceNumber: "इनवॉइस नंबर",
      issueDate: "जारी होने की तारीख",
      dueDate: "देय तारीख",
      tax: "टैक्स",
      itemsCount: "आइटम्स की संख्या",
      target: "टारगेट",
      targetType: "टारगेट का प्रकार",
      reaction: "रिएक्शन",
      color: "रंग",
      thumbnail: "थंबनेल",
      channel: "चैनल",
      url: "URL",
      width: "चौड़ाई",
      height: "ऊंचाई",
      alt: "ऑल्ट टेक्स्ट (alt)",
      photographer: "फ़ोटोग्राफ़र",
      host: "होस्ट",
      episodes: "एपिसोड्स",
      subscribers: "सब्सक्राइबर्स",
      owner: "ओनर",
      public: "पब्लिक",
      progress: "प्रगति",
      teamSize: "टीम साइज़",
      budget: "बजट",
      startDate: "शुरू होने की तारीख",
      membersCount: "सदस्यों की संख्या",
      focus: "मुख्य फोकस",
      countriesCount: "देशों की संख्या",
      areaKm2: "क्षेत्रफल (किमी²)",
      timezone: "टाइमज़ोन",
      terminals: "टर्मिनल्स",
      altitude: "ऊंचाई",
      accuracy: "सटीकता",
    },
    topics: {
      users: {
        name: "यूज़र्स",
        description: "ऐप्स और डैशबोर्ड्स के लिए यूज़र प्रोफ़ाइल",
        preview: {
          line1: "आरव शर्मा",
          line2: "@aarav_sharma · aarav@mail.test",
          line3: "बेंगलुरु",
        },
      },
      customers: {
        name: "ग्राहक",
        description: "ग्राहक संपर्क और अकाउंट विवरण",
        preview: {
          line1: "अनन्या पटेल",
          line2: "ananya@demo.dev",
          line3: "+91 98201 55501",
        },
      },
      employees: {
        name: "कर्मचारी",
        description: "पद और डिपार्टमेंट के साथ टीम सदस्य",
        preview: {
          line1: "रोहन नायर",
          line2: "फ्रंटएंड डेवलपर",
          line3: "इंजीनियरिंग · Acme",
        },
      },
      authors: {
        name: "लेखक",
        description: "आर्टिकल लेखक और कंटेंट क्रिएटर्स",
        preview: {
          line1: "मीरा अय्यर",
          line2: "प्रोडक्ट डिज़ाइन और UX पर लिखती हैं।",
        },
      },
      contacts: {
        name: "संपर्क",
        description: "CRM के लिए संपर्क और कंपनियां",
        preview: {
          line1: "विक्रम देशमुख",
          line2: "vikram@acme.test · Acme",
        },
      },
      "team-members": {
        name: "टीम सदस्य",
        description: "प्रोडक्ट और इंजीनियरिंग टीम के सदस्य",
        preview: {
          line1: "काव्या रेड्डी",
          line2: "टेक लीड · प्लेटफ़ॉर्म",
        },
      },
      doctors: {
        name: "डॉक्टर्स",
        description: "विशेषज्ञता और अस्पताल के साथ चिकित्सक",
        preview: {
          line1: "डॉ. सिद्धार्थ जोशी",
          line2: "कार्डियोलॉजी · सिटी जनरल हॉस्पिटल",
        },
      },
      patients: {
        name: "मरीज़",
        description: "निदान और ब्लड ग्रुप के साथ मरीज़ों के रिकॉर्ड",
        preview: {
          line1: "पूजा वर्मा",
          line2: "A+ · हाइपरटेंशन",
        },
      },
      drivers: {
        name: "ड्राइवर्स",
        description: "वाहन प्रकार और रेटिंग के साथ राइड ड्राइवर्स",
        preview: {
          line1: "अर्जुन यादव",
          line2: "सेडान · ★ 4.8",
        },
      },
      guests: {
        name: "मेहमान",
        description: "रूम नंबर और चेक-इन स्टेटस के साथ होटल गेस्ट्स",
        preview: {
          line1: "रिया कपूर",
          line2: "रूम 412 · चेक-इन",
        },
      },
      profiles: {
        name: "प्रोफ़ाइल्स",
        description: "फ़ॉलोअर्स और बायो के साथ सोशल प्रोफ़ाइल",
        preview: {
          line1: "कबीर मेहता",
          line2: "@kabir_mehta · 12K फ़ॉलोअर्स",
        },
      },
      "girl-students": {
        name: "छात्राएं",
        description: "कक्षा और स्कूल के साथ छात्राओं की प्रोफ़ाइल",
        preview: {
          line1: "ईशा गुप्ता",
          line2: "कक्षा 10 · सेंट जेवियर्स हाई स्कूल",
        },
      },
      "boy-students": {
        name: "छात्र",
        description: "कक्षा और स्कूल के साथ छात्रों की प्रोफ़ाइल",
        preview: {
          line1: "आदित्य कुलकर्णी",
          line2: "कक्षा 9 · मॉडर्न पब्लिक स्कूल",
        },
      },
      teachers: {
        name: "शिक्षक",
        description: "विषय और स्कूल के साथ शिक्षक",
        preview: {
          line1: "नेहा चतुर्वेदी",
          line2: "गणित · विद्या मंदिर सीनियर सेकेंडरी",
        },
      },
      products: {
        name: "प्रोडक्ट्स",
        description: "कीमत और स्पेसिफ़िकेशन के साथ स्टोर प्रोडक्ट्स",
        preview: {
          line1: "वायरलेस नॉइज़-कैंसलिंग हेडफ़ोन",
          line2: "₹2,499 · इलेक्ट्रॉनिक्स",
          line3: "★★★★☆",
        },
      },
      orders: {
        name: "ऑर्डर्स",
        description: "आइटम्स और फ़ुलफ़िलमेंट स्टेटस के साथ ग्राहक ऑर्डर्स",
        preview: {
          line1: "ऑर्डर #10482",
          line2: "3 आइटम्स · ₹3,840",
          line3: "डिलीवर हो गया",
        },
      },
      reviews: {
        name: "रिव्यूज़",
        description: "स्टार रेटिंग्स और ग्राहक समीक्षाएं",
        preview: {
          line1: "★★★★★ बेहतरीन अनुभव",
          line2: "मजबूत बिल्ड क्वालिटी और इस्तेमाल में बेहद आसान।",
        },
      },
      categories: {
        name: "कैटेगरीज़",
        description: "ई-कॉमर्स के लिए कैटलॉग कैटेगरीज़",
        preview: { line1: "इलेक्ट्रॉनिक्स", line2: "electronics" },
      },
      "cart-items": {
        name: "कार्ट आइटम्स",
        description: "शॉपिंग कार्ट में जोड़े गए प्रोडक्ट्स",
        preview: { line1: "स्मार्टवॉच", line2: "2 × ₹1,499 · ₹2,998" },
      },
      coupons: {
        name: "कूपन्स",
        description: "प्रोमो कोड्स और डिस्काउंट नियम",
        preview: { line1: "NAMASTE10", line2: "10% छूट · 2026-12-01 तक" },
      },
      payments: {
        name: "पेमेंट्स",
        description: "राशि और पेमेंट माध्यम के साथ ट्रांज़ैक्शन्स",
        preview: { line1: "₹1,250.00 INR", line2: "UPI · भुगतान सफल" },
      },
      shipments: {
        name: "शिपमेंट्स",
        description: "शिपिंग स्टेटस और कूरियर पार्टनर",
        preview: { line1: "SHP-10482 · Delhivery", line2: "रास्ते में है" },
      },
      invoices: {
        name: "इनवॉइसेस",
        description: "राशि और देय तारीख के साथ बिलिंग इनवॉइसेस",
        preview: { line1: "INV-10482", line2: "₹18,500 · भुगतान हो चुका" },
      },
      brands: {
        name: "ब्रांड्स",
        description: "लोगो और प्रोडक्ट काउंट के साथ ब्रांड्स",
        preview: { line1: "Acme", line2: "acme · 128 प्रोडक्ट्स" },
      },
      posts: {
        name: "पोस्ट्स",
        description: "ब्लॉग आर्टिकल्स और फ़ीड पोस्ट्स",
        preview: { line1: "साफ़ और सरल इंटरफ़ेस कैसे बनाएं", line2: "लेखक: मीरा अय्यर" },
      },
      comments: {
        name: "कमेंट्स",
        description: "पोस्ट्स और प्रोडक्ट्स पर कमेंट्स",
        preview: {
          line1: "बहुत स्पष्ट और समझने में आसान!",
          line2: "meera · 12 लाइक्स",
        },
      },
      messages: {
        name: "मैसेजेज़",
        description: "चैट और डायरेक्ट मैसेजिंग थ्रेड्स",
        preview: {
          line1: "क्या आप ताज़ा डेमो बिल्ड देख सकते हैं?",
          line2: "रोहन नायर → अनन्या पटेल",
        },
      },
      notifications: {
        name: "नोटिफ़िकेशन्स",
        description: "ऐप नोटिफ़िकेशन्स और अलर्ट्स",
        preview: { line1: "नया कमेंट", line2: "कम्युनिटी · 2 घंटे पहले" },
      },
      tags: {
        name: "टैग्स",
        description: "स्लग और पोस्ट काउंट के साथ टैग्स",
        preview: { line1: "typescript", line2: "142 पोस्ट्स" },
      },
      "content-categories": {
        name: "कंटेंट कैटेगरीज़",
        description: "आर्टिकल और गाइड सेक्शन्स",
        preview: { line1: "गाइड्स", line2: "guides · 86 पोस्ट्स" },
      },
      likes: {
        name: "लाइक्स",
        description: "पोस्ट्स और कमेंट्स पर लाइक रिएक्शन्स",
        preview: { line1: "कबीर मेहता ने पोस्ट लाइक किया", line2: "पोस्ट · लाइक" },
      },
      albums: {
        name: "एल्बम्स",
        description: "कवर और ट्रैक्स के साथ म्यूज़िक एल्बम्स",
        preview: {
          line1: "Random Access Memories",
          line2: "Daft Punk",
          line3: "2013 · 13 ट्रैक्स",
        },
      },
      songs: {
        name: "गाने",
        description: "अवधि और कलाकार के साथ ऑडियो ट्रैक्स",
        preview: { line1: "Midnight Cruise", line2: "3:42 · इलेक्ट्रॉनिक" },
      },
      movies: {
        name: "फ़िल्में",
        description: "पोस्टर और रेटिंग के साथ फ़िल्में",
        preview: { line1: "Late Night Express", line2: "2021 · ★ 8.2" },
      },
      books: {
        name: "किताबें",
        description: "लेखक और कवर के साथ किताबें",
        preview: { line1: "इंटरफ़ेस डिज़ाइन की बातें", line2: "मीरा अय्यर · 2019" },
      },
      videos: {
        name: "वीडियो",
        description: "अवधि और व्यूज़ के साथ वीडियो क्लिप्स",
        preview: {
          line1: "10 मिनट में डैशबोर्ड बनाएं",
          line2: "12:40 · 84K व्यूज़",
        },
      },
      images: {
        name: "इमेजेज़",
        description: "डाइमेंशन्स और टैग्स के साथ ग्राफ़िक्स",
        preview: { line1: "मरीन ड्राइव पर शाम", line2: "1280×720" },
      },
      podcasts: {
        name: "पॉडकास्ट्स",
        description: "होस्ट और एपिसोड काउंट के साथ शोज़",
        preview: { line1: "कोड और कॉफ़ी", line2: "48 एपिसोड्स · टेक" },
      },
      playlists: {
        name: "प्लेलिस्ट्स",
        description: "क्रिएटर और शैली के साथ ट्रैक लिस्ट्स",
        preview: { line1: "फ़ोकस", line2: "32 ट्रैक्स · इलेक्ट्रॉनिक" },
      },
      companies: {
        name: "कंपनियां",
        description: "कंपनी प्रोफ़ाइल और उद्योग",
        preview: { line1: "Acme Corp", line2: "IT सेवाएं · बेंगलुरु" },
      },
      jobs: {
        name: "जॉब्स",
        description: "लोकेशन और जॉब टाइप के साथ ओपन रोल्स",
        preview: {
          line1: "फ्रंटएंड डेवलपर",
          line2: "Google · बेंगलुरु · फ़ुल-टाइम",
        },
      },
      courses: {
        name: "कोर्सेज़",
        description: "सिलेबस और इंस्ट्रक्टर के साथ लर्निंग कोर्सेज़",
        preview: { line1: "प्रैक्टिकल React", line2: "इंटरमीडिएट · 12 घंटे" },
      },
      events: {
        name: "इवेंट्स",
        description: "मीटअप्स, कॉन्फ़्रेंस और वर्कशॉप्स",
        preview: { line1: "फ़्रंटएंड समिट", line2: "मुंबई · वर्कशॉप" },
      },
      projects: {
        name: "प्रोजेक्ट्स",
        description: "प्रगति और बजट के साथ प्रोजेक्ट्स",
        preview: { line1: "एनालिटिक्स रीडिज़ाइन", line2: "जारी है · 72%" },
      },
      teams: {
        name: "टीम्स",
        description: "लीड और मेंबर काउंट के साथ इंटरनल टीम्स",
        preview: { line1: "प्रोडक्ट टीम", line2: "8 सदस्य · इंजीनियरिंग" },
      },
      continents: {
        name: "महाद्वीप",
        description: "कोड और बुनियादी आंकड़ों के साथ विश्व महाद्वीप",
        preview: { line1: "एशिया", line2: "AS · 48 देश" },
      },
      countries: {
        name: "देश",
        description: "नाम, कोड और झंडे के साथ देश",
        preview: { line1: "भारत", line2: "IN · नई दिल्ली" },
      },
      cities: {
        name: "शहर",
        description: "क्षेत्र और देश से जुड़े शहर",
        preview: { line1: "पुणे", line2: "भारत · पश्चिम" },
      },
      addresses: {
        name: "पते",
        description: "शिपिंग और ऑफ़िस के पते",
        preview: {
          line1: "MG रोड, 42",
          line2: "560001 बेंगलुरु, कर्नाटक, भारत",
        },
      },
      regions: {
        name: "क्षेत्र / राज्य",
        description: "भौगोलिक क्षेत्र और राज्य",
        preview: { line1: "महाराष्ट्र", line2: "भारत · मुंबई" },
      },
      neighborhoods: {
        name: "इलाके",
        description: "शहरी इलाके और मोहल्ले",
        preview: { line1: "इंदिरानगर", line2: "बेंगलुरु · 560038" },
      },
      airports: {
        name: "एयरपोर्ट्स",
        description: "कोड और शहर के साथ एयरपोर्ट्स",
        preview: { line1: "इंदिरा गांधी इंटरनेशनल एयरपोर्ट", line2: "DEL · भारत" },
      },
      coordinates: {
        name: "कोऑर्डिनेट्स",
        description: "लैटीट्यूड, लोंगिट्यूड और लोकेशन डेटा",
        preview: {
          line1: "28.613939, 77.209021",
          line2: "नई दिल्ली · भारत",
        },
      },
    },
    errors: {
      pickTopic: "पहले एक डेटा टाइप चुनें।",
      INVALID_TOPIC: "अज्ञात डेटा टाइप।",
      INVALID_FIELDS: "कम से कम एक फ़ील्ड चुनें।",
      INVALID_QUANTITY: "संख्या 1 और 1000 के बीच होनी चाहिए।",
      INVALID_COUNTRY: "अमान्य देश।",
      GENERATE_FAILED: "डेटा जनरेट नहीं हो सका। कृपया थोड़ी देर बाद फिर कोशिश करें।",
      DOWNLOAD_FAILED: "फ़ाइल डाउनलोड नहीं हो सकी। कृपया थोड़ी देर बाद फिर कोशिश करें।",
      CREATE_FAILED: "अस्थायी API नहीं बन सका।",
      LIMIT_REACHED: "अधिकतम 5 अस्थायी API की सीमा पूरी हो गई है। पहले कोई एक हटाएं।",
      RATE_LIMITED: "बहुत अधिक रिक्वेस्ट्स भेजी गई हैं। कृपया थोड़ी देर बाद फिर कोशिश करें।",
    },
  },
  preview: {
    docs: "डॉक्यूमेंटेशन",
    playground: "Playground",
    blurb: "यह एक साधारण इंटरफ़ेस है जो दिखाता है कि यह API प्रैक्टिकल में कैसे काम करता है।",
    blurbFaHint: "",
    backToResource: "{name} पर वापस जाएं",
    search: "खोजें",
    create: "बनाएं",
    edit: "संपादित करें",
    delete: "हटाएं",
    save: "सेव करें",
    saving: "सेव हो रहा है…",
    deleting: "हटाया जा रहा है…",
    cancel: "रद्द करें",
    fillSample: "सैंपल भरें",
    noRecords: "कोई रिकॉर्ड नहीं मिला",
    loading: "लोड हो रहा है…",
    confirmDelete: "क्या आप इस रिकॉर्ड को हटाना चाहते हैं?",
    confirmDeleteBody: "इस एक्शन को वापस नहीं लिया जा सकता।",
    networkError: "नेटवर्क में समस्या आई",
    authDemoPassword: "सभी सामान्य यूज़र्स के लिए डेमो पासवर्ड एक ही है:",
    username: "यूज़रनेम",
    password: "पासवर्ड",
    login: "लॉगिन करें",
    loginSuccess: "सफलतापूर्वक लॉगिन हो गया।",
    logout: "लॉगआउट करें",
    getMe: "GET /me",
    token: "टोकन (Token)",
    user: "यूज़र",
    loginFirst: "टोकन पाने के लिए पहले लॉगिन करें",
    createdAt: "बनने की तारीख",
    fieldLabels: {
      name: "नाम",
      username: "यूज़रनेम",
      email: "ईमेल",
      avatarUrl: "अवतार URL",
      role: "रोल",
      city: "शहर",
      country: "देश",
      company: "कंपनी",
      title: "शीर्षक",
      body: "कंटेंट",
      published: "प्रकाशित",
      userId: "यूज़र ID",
      postId: "पोस्ट ID",
      albumId: "एल्बम ID",
      url: "URL",
      thumbnailUrl: "थंबनेल URL",
      completed: "पूरा हुआ",
      description: "विवरण",
      price: "कीमत",
      stock: "स्टॉक",
      category: "कैटेगरी",
      imageUrl: "इमेज URL",
      message: "मैसेज",
      type: "प्रकार",
      read: "पढ़ा गया",
      code: "कोड",
      capital: "राजधानी",
      region: "क्षेत्र",
      population: "आबादी",
      currency: "मुद्रा",
      flagUrl: "झंडे का URL",
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
      teaser: "डेवलपमेंट में — फ़ॉर्मेट, तुलना और कन्वर्ट टूल्स",
      hint: "/json — व्यू बदलने के लिए कोई टूल चुनें",
      badge: "डेवलपमेंट में",
      summary:
        "JSON Workbench (डेवलपमेंट में) JSON को फ़ॉर्मेट करने, स्ट्रक्चर तुलना करने, खोजने और कन्वर्ट करने के लिए ब्राउज़र में चलने वाला टूल है। इसमें TypeScript, Zod, YAML, CSV और यूटिलिटीज़ शामिल हैं।",
      details: [
        "/json में JSON Workbench खोलें और तुरंत व्यू बदलने के लिए कोई टूल चुनें (?tool= पैरामीटर समर्थित है)।",
        "Core टूल्स: Format, Tree, Search, JSONPath और Compare Structure।",
        "Converters: TypeScript, Zod, JSON Schema, YAML और CSV।",
        "Utilities: Sort Keys, Remove Empty, Flatten, Escape, Repair, Pick/Omit फ़ील्ड्स और अन्य।",
        "प्रोडक्ट सक्रिय डेवलपमेंट में है — आने वाले अपडेट्स में और टूल्स व सुधार जोड़े जाएंगे।",
      ],
    },
    "2026-09-19-image-generator": {
      title: "इमेज जनरेटर",
      teaser: "कस्टम प्लेसहोल्डर इमेज URLs",
      hint: "/image-generator — SVG या असली फ़ोटो चुनें और URL कॉपी करें",
      summary:
        "URL पैरामीटर्स से प्लेसहोल्डर इमेजेज़ बनाएं। इसमें MockData SVG और Picsum फ़ोटोज़ के साथ अवतार, पोस्ट, बैनर और अन्य के लिए तैयार साइज़ मिलते हैं।",
      details: [
        "/image-generator में SVG या असली फ़ोटो चुनें, चौड़ाई व ऊंचाई सेट करें और URL कॉपी करें।",
        "पब्लिक URLs डिफ़ॉल्ट रूप से रैंडम विकल्प देते हैं: SVG के लिए /image/{w}/{h} या फ़ोटोज़ के लिए ?type=real इस्तेमाल करें।",
        "एक ही SVG रंग या फ़ोटो बनाए रखने के लिए कस्टम ?seed= पास करें।",
        "URL को सीधे <img>, CSS या इमेज फ़ील्ड में पेस्ट करें।",
      ],
    },
    "2026-09-17-generator": {
      title: "डेटा जनरेटर",
      teaser: "कुछ सेकंड में रियलिस्टिक JSON डेटा",
      hint: "/generator — जनरेट, कॉपी या API बनाने के लिए टॉपिक चुनें",
      summary:
        "फ्रंटएंड के लिए रियलिस्टिक JSON डेटा तेज़ी से बनाएं। टॉपिक, फ़ील्ड्स और रिकॉर्ड्स की संख्या चुनें — फिर कॉपी करें, डाउनलोड करें या अस्थायी API बनाएं।",
      details: [
        "/generator में People, E-Commerce, Content, Media, Business और Location कैटेगरीज़ से डेटा बनाएं।",
        "POST पेलोड और API रिकॉर्ड दोनों फ़ॉर्मेट्स सपोर्टेड हैं; FA के लिए लोकलाइज़्ड फ़ारसी डेटा भी उपलब्ध है।",
        "ब्राउज़र में एक साथ 1,000 रिकॉर्ड्स तक जनरेट करें; «API बनाएं» अस्थायी API की सीमाओं (500 रिकॉर्ड्स / 64 KB) का पालन करता है।",
        "नेविगेट करने पर आपकी चुनी हुई सेटिंग्स और जनरेटेड डेटा बना रहता है (पेज रीलोड करने पर रीसेट होता है)।",
      ],
    },
    "2026-09-16-temporary": {
      title: "अस्थायी API",
      teaser: "JSON पेस्ट करें और अस्थायी REST URL पाएं",
      hint: "/temporary — पब्लिक REST URL बनाने के लिए JSON पेस्ट करें",
      summary:
        "पेस्ट किए गए JSON से पब्लिक और अस्थायी REST एंडपॉइंट्स बनाएं। बिना लॉगिन के; हर ब्राउज़र में एक साथ 5 API तक।",
      details: [
        "/temporary में 1 घंटा, 6 घंटे, 12 घंटे या 24 घंटे की अवधि के साथ बनाएं।",
        "बाकी रिसोर्सेज़ की तरह ही /api/t/… पर GET, POST, PATCH और DELETE इस्तेमाल करें।",
        "प्रति ब्राउज़र अधिकतम 5 सक्रिय API और प्रति IP प्रति घंटा अधिकतम 20 क्रिएशन।",
        "URL को पासवर्ड की तरह संभालें: एक्सपायर होने तक जिसके पास भी यह लिंक है, वह डेटा पढ़ और बदल सकता है।",
      ],
    },
    "2026-09-15-preview": {
      title: "रिसोर्स प्रीव्यू",
      teaser: "असली API से जुड़े साधारण इंटरफ़ेस",
      hint: "/preview/users — ब्राउज़र में सीधे CRUD आज़माएं",
      summary:
        "Users, Posts और Auth जैसे रिसोर्सेज़ के लिए आसान डेमो स्क्रीन जो असली API पर काम करती हैं।",
      details: [
        "किसी रिसोर्स के डॉक्यूमेंटेशन पेज से लाइव प्रीव्यू खोलें।",
        "शेयर्ड डेमो डेटाबेस पर रीड, सर्च, पेजिनेशन, क्रिएट, एडिट और डिलीट टेस्ट करें।",
        "Auth प्रीव्यू में लॉगिन फ़ॉर्म (साझा पासवर्ड: password) और टोकन के साथ GET /me रिक्वेस्ट्स शामिल हैं।",
        "ज़रूरत पड़ने पर फ़ारसी डेटा डालने के लिए ऊपर से भाषा बदलें।",
      ],
    },
    "2026-09-14-lang-fa": {
      title: "फ़ारसी डेटा (?lang=fa)",
      teaser: "लोकलाइज़्ड फ़ारसी टेस्ट डेटा",
      hint: "/api/users?lang=fa — फ़ारसी डेटा के लिए lang=fa जोड़ें",
      summary:
        "फ़ारसी में नाम, यूज़रनेम, फ़ोन नंबर और टेक्स्ट पाने के लिए एंडपॉइंट में ?lang=fa जोड़ें।",
      details: [
        "डिफ़ॉल्ट भाषा अंग्रेज़ी है; भाषा केवल क्वेरी पैरामीटर lang=fa से तय होती है (cookies या Accept-Language नहीं)।",
        "FA रिस्पॉन्स में Content-Language: fa हेडर और Vazirmatn फ़ॉन्ट हिंट शामिल होता है।",
        "लिस्ट्स, सिंगल रिकॉर्ड्स और फ़ारसी यूज़रनेम्स से लॉगिन के साथ काम करता है।",
        "ऊपर فارسی चुनने पर Playground भी अपने आप lang=fa जोड़ देता है।",
      ],
    },
    "2026-09-12-playground": {
      title: "Playground",
      teaser: "ब्राउज़र में सीधे API कॉल करें",
      hint: "/playground — रिक्वेस्ट्स भेजें और JSON देखें",
      summary:
        "ब्राउज़र में सीधे API रिक्वेस्ट्स भेजें, सफल और असफल लॉगिन टेस्ट करें और फ़ॉर्मेटेड JSON देखें।",
      details: [
        "रिसोर्स और एक्शन चुनें, क्वेरी पैरामीटर्स या JSON बॉडी बदलें और रिक्वेस्ट भेजें।",
        "Auth में «सही क्रेडेंशियल्स» और «ग़लत क्रेडेंशियल्स» बटन से 200 और 401 रिस्पॉन्स की आसानी से तुलना करें।",
        "HTTP स्टेटस कोड्स, फ़ॉर्मेटेड JSON और कलेक्शन पेजिनेशन देखें।",
        "नेविगेट करते समय रिसोर्स रिक्वेस्ट्स और आख़िरी रिस्पॉन्स सेव रहते हैं (पेज रीलोड करने पर रीसेट होते हैं)।",
      ],
    },
    "2026-09-10-auth": {
      title: "Mock Auth",
      teaser: "Bearer Token के साथ लॉगिन और ऑथेंटिकेशन",
      hint: "/api/auth/login — पासवर्ड हमेशा password होता है",
      summary:
        "/me के साथ इस्तेमाल करने के लिए Bearer Token पाने हेतु डेमो यूज़र क्रेडेंशियल्स और पासवर्ड के साथ /api/auth/login पर POST भेजें।",
      details: [
        "सभी सामान्य यूज़र्स के लिए साझा डेमो पासवर्ड password है।",
        "सफल होने पर यह मॉक Bearer Token और (id, name, username, email, role) वाला user ऑब्जेक्ट लौटाता है।",
        "ग़लत पासवर्ड या अज्ञात यूज़र पर स्पष्ट एरर मैसेज के साथ 401 मिलता है।",
        "मौजूदा यूज़र पाने के लिए GET /api/auth/me करते समय Authorization: Bearer <token> हेडर पास करें।",
      ],
    },
    "2026-09-08-resources": {
      title: "लाइव REST रिसोर्सेज़",
      teaser: "Users, Posts और अन्य के लिए पूरा CRUD",
      hint: "/docs#resources — उपलब्ध एंडपॉइंट्स देखें",
      summary:
        "पूरे CRUD और पेजिनेशन सपोर्ट के साथ Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications और Countries उपलब्ध हैं।",
      details: [
        "पेजिनेटेड लिस्ट्स { data, pagination } के साथ page, limit, total और totalPages लौटाती हैं।",
        "सर्च, सॉर्ट, फ़िल्टर, सिंथेटिक डिले और फ़ोर्स्ड एरर कोड के लिए क्वेरी पैरामीटर्स मौजूद हैं।",
        "शेयर्ड प्रोडक्शन डेटाबेस रोज़ाना रीसेट होता है — इसे डेमो और टेस्टिंग के लिए इस्तेमाल करें, परमानेंट स्टोरेज के लिए नहीं।",
        "Postman, Swagger या AI टूल्स में इस्तेमाल करने के लिए /openapi.json से मशीन-रीडेबल स्पेसिफ़िकेशन डाउनलोड करें।",
      ],
    },
  },
  catalog: {
    auth: {
      title: "Auth",
      summary:
        "यूज़रनेम और पासवर्ड से लॉगिन करने के लिए मॉक एंडपॉइंट। सफल होने पर Bearer Token और एक्सेस अस्वीकार होने पर 401 लौटाता है।",
    },
    users: {
      title: "Users",
      summary: "सर्च, रोल फ़िल्टर और पेजिनेशन के साथ मॉक यूज़र्स CRUD API।",
    },
    posts: {
      title: "Posts",
      summary: "टैग्स और पब्लिश स्टेटस सपोर्ट के साथ यूज़र्स से जुड़ी पोस्ट्स।",
    },
    comments: {
      title: "Comments",
      summary: "नाम, ईमेल और टेक्स्ट के साथ पोस्ट्स पर कमेंट्स।",
    },
    albums: {
      title: "Albums",
      summary: "यूज़र्स के एल्बम; फ़ोटोज़ albumId के ज़रिए एल्बम से जुड़ती हैं।",
    },
    photos: {
      title: "Photos",
      summary: "url और thumbnailUrl फ़ील्ड्स के साथ एल्बम फ़ोटोज़।",
    },
    todos: {
      title: "Todos",
      summary: "कम्प्लीशन स्टेटस के साथ यूज़र्स से जुड़े आसान टास्क्स।",
    },
    products: {
      title: "Products",
      summary: "कीमत, स्टॉक, कैटेगरी और imageUrl के साथ प्रोडक्ट कैटलॉग।",
    },
    notifications: {
      title: "Notifications",
      summary: "प्रकार और रीड स्टेटस के साथ यूज़र नोटिफ़िकेशन्स।",
    },
    countries: {
      title: "Countries",
      summary: "ISO कोड्स, क्षेत्र, आबादी और झंडे के साथ देश का डेटा।",
    },
  },
};

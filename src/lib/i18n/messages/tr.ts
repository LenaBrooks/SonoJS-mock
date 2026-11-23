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

export const tr: Messages = {
  common: {
    home: "Ana Sayfa",
    docs: "Dokümantasyon",
    playground: "Playground",
    contact: "İletişim",
    preview: "Önizleme",
    search: "Ara",
    loading: "Yükleniyor…",
    save: "Kaydet",
    saving: "Kaydediliyor…",
    cancel: "İptal",
    create: "Oluştur",
    edit: "Düzenle",
    delete: "Sil",
    searchPlaceholder: "API ara…",
    noResults: "Sonuç bulunamadı",
    new: "Yeni",
    inDevelopment: "Geliştirme aşamasında",
    actions: "İşlemler",
    copy: "Kopyala",
    copied: "Kopyalandı",
    live: "Yayında",
    open: "Aç",
    tryIt: "Dene",
    learnMore: "Daha fazla bilgi",
    back: "Geri",
    close: "Kapat",
    yes: "Evet",
    no: "Hayır",
    name: "Ad Soyad",
    email: "E-posta",
    message: "Mesaj",
    send: "Gönder",
    sending: "Gönderiliyor…",
    networkError: "Ağ hatası",
    temporary: "Geçici API'ler",
    temporaryBadge: "Hemen hazır",
    generator: "Veri Oluşturucu",
    imageGenerator: "Görsel Oluşturucu",
    jsonWorkbench: "JSON Çalışma Alanı",
  },
  header: {
    primaryNav: "Ana gezinme",
    whatsNew: "Yenilikler",
    whatsNewTitle: "Yenilikler",
    whatsNewSubtitle: "Son özellikler ve güncellemeler",
    latest: "En yeni",
    contact: "Hakkında ve iletişim",
    menu: "Menü",
    openMenu: "Menüyü aç",
    appearance: "Görünüm",
    lightMode: "Açık temaya geç",
    darkMode: "Koyu temaya geç",
    light: "Açık",
    dark: "Koyu",
    apiLangGroup: "Dil",
    english: "English",
    persian: "فارسی",
    github: "GitHub",
    githubStars: "GitHub — Depoya yıldız ver",
  },
  home: {
    tagline:
      "Hemen kullanabileceğin, gerçekçi JSON döndüren ücretsiz REST mock API'ler. Arka uç kurmadan prototip geliştir, kimlik doğrulamayı test et ve uç noktaları bağla.",
    taglineNote: "",
    resourcesTitle: "Kaynaklar",
    resourcesBlurb:
      "Dokümantasyonu ve örnekleri hazır on REST API. Üretim ortamında ortak bir demo veritabanı kullanır.",
    searchLabel: "API ve uç nokta ara",
    searchPlaceholder: "users, posts, auth ile ara…",
    temporaryCtaTitle: "Geçici API'ler",
    temporaryCtaBody:
      "JSON yapıştırarak veya doğrudan oluşturucu üzerinden geçici bir API oluştur. Bağlantıyı parola gibi koru. Tarayıcı başına en fazla 5 aktif geçici API saklayabilirsin.",
    temporaryCtaLink: "Geçici API oluştur",
  },
  notFound: {
    title: "Sayfa bulunamadı",
    body: "Aradığın sayfa MockData üzerinde mevcut değil. Ana sayfaya dönebilir veya dokümantasyona göz atabilirsin.",
    home: "Ana Sayfa",
    docs: "Dokümantasyon",
  },
  blog: {
    title: "Blog",
    description:
      "Mock veri, JSON, API'ler ve ön yüz geliştirme süreçlerine dair rehberler ve yazılar.",
    all: "Tümü",
    emptyTitle: "Henüz yayınlanmış yazı yok",
    emptyBody: "Yeni yazılar eklendiğinde burada görünecek. Daha sonra tekrar uğra.",
    emptyCategoryTitle: "Bu kategoride yazı yok",
    emptyCategoryBody: "Başka bir kategori seç veya tüm yazıları görüntüle.",
    readingTime: "{n} dk okuma",
    previousPage: "Önceki",
    nextPage: "Sonraki",
    pageStatus: "Sayfa {page} / {total}",
    paginationNav: "Sayfalama gezinmesi",
    categoriesNav: "Blog kategorileri",
    backToBlog: "Blog",
    previousArticle: "Önceki yazı",
    nextArticle: "Sonraki yazı",
    relatedArticles: "İlgili yazılar",
    categories: {
      news: "Haberler",
      "mock-data": "Mock Veri",
      json: "JSON",
      api: "API",
      frontend: "Frontend",
    },
  },
  contact: {
    title: "İletişim",
    intro:
      "Sorun, geri bildirimin veya önerin mi var? Buradan mesaj gönderebilir ya da doğrudan e-posta atabilirsin:",
    name: "Ad Soyad",
    email: "E-posta",
    topic: "Konu",
    message: "Mesaj",
    send: "Mesaj gönder",
    sending: "Gönderiliyor…",
    success: "Mesajın iletildi. Geri bildirimin için teşekkürler; en kısa sürede dönüş yapacağız.",
    chooseTopic: "Mesajın için bir konu seç.",
    pickTopic: "Mesajın neyle ilgili?",
    topics: {
      question: "Soru",
      bug: "Hata bildirimi",
      feature: "Özellik önerisi",
      other: "Diğer",
    },
  },
  docs: {
    title: "Dokümantasyon",
    navLabel: "Dokümantasyon içindekiler",
    intro:
      "MockData, JSON tabanlı mock REST kaynakları sunar. Açık uç noktaları çağırabilir, giriş akışlarını test edebilir, Playground üzerinden istek gönderebilir, /generator ile veri setleri oluşturabilir, /image-generator ile yer tutucu görseller üretebilir, /json üzerinde JSON Workbench'i kullanabilir ve geçici API'ler açabilirsin. Üretim kataloğundaki kaynaklar ortak veritabanı kullanır (ayrıntılar için Ortak Veri bölümüne bak).",
    toc: {
      intro: "Giriş",
      whatsNew: "Yenilikler",
      temporary: "Geçici API'ler",
      generator: "Veri Oluşturucu",
      imageGenerator: "Görsel Oluşturucu",
      jsonWorkbench: "JSON Çalışma Alanı",
      sharedData: "Ortak Veri",
      language: "Dil",
      resources: "Kaynaklar",
      openapi: "OpenAPI",
      requests: "İstekler",
      errors: "Hatalar",
      rateLimit: "İstek Sınırı",
      reset: "Veriyi Sıfırla",
    },
    whatsNewTitle: "Yenilikler",
    whatsNewBlurb:
      "Geliştiricilere yönelik öne çıkan güncellemeler en yeniden eskiye sıralanmıştır. Ayrıntılar için karta tıkla; aynı listeye üstteki zil simgesinden de ulaşabilirsin.",
    temporaryTitle: "Geçici API'ler",
    temporaryBody:
      "Kendi JSON verinle geçici bir REST uç noktasına mı ihtiyacın var? Geçici API'ler ortak katalogdan bağımsız çalışır; JSON yapıştırıp süre seçerek herkese açık bir /api/t/… adresi alabilir veya oluşturucudaki 'API Oluştur' ile doğrudan açabilirsin.",
    temporaryBullets: [
      "Hesap gerekmeden tarayıcıda /temporary üzerinden oluştur (/generator sayfasındaki 'API Oluştur' seçeneğiyle de açılır).",
      "1 saat, 6 saat, 12 saat veya 24 saat süre seçeneklerinden birini belirle (varsayılan: 12 saat).",
      "Koleksiyon ve kayıt uç noktaları gibi /api/t/… adresine GET, POST, PATCH ve DELETE istekleri gönder.",
      "Bağlantıyı parola gibi sakla; süresi dolana kadar bağlantıya sahip herkes veriyi okuyabilir ve güncelleyebilir.",
      "Süresi dolmuş geçici API'lere yapılan istekler HTTP 410 yanıtı döndürür.",
    ],
    temporaryLimitsTitle: "Geçici API limitleri",
    temporaryLimitsBullets: [
      "Tarayıcı başına aynı anda en fazla 5 aktif geçici API.",
      "1 saatlik kayan pencerede IP başına en fazla 20 API oluşturma (aşımda HTTP 429).",
      "Azami JSON yük boyutu 64 KB'dir.",
      "En fazla 8 iç içe seviye, dizide en fazla 500 öğe ve nesnede en fazla 200 anahtar.",
      "Genel /api istek sınırı (IP başına dakikada yaklaşık 60 istek) burada da geçerlidir.",
    ],
    generatorTitle: "Veri Oluşturucu",
    generatorBody:
      "Elle örnek veri yazmadan ön yüz geliştirme için gerçekçi JSON üret. Her şey tarayıcıda çalışır; veriyi kopyalayabilir, indirebilir veya doğrudan geçici API'ye dönüştürebilirsin.",
    generatorBullets: [
      "/generator sayfasına git ve Kişiler, E-Ticaret, İçerik, Medya, İş Dünyası ve Konum gibi kategorilerden seçim yap.",
      "POST gövde biçimi (id ve zaman damgaları olmadan) ile API kayıt biçimi (id, createdAt ve updatedAt ile) arasında geçiş yap.",
      "FA için yerel Farsça veriler, EN için ise çeşitli ülkelerden İngilizce veriler kullan.",
      "Tarayıcıda tek seferde 1.000 kayda kadar üret. 'API Oluştur' geçici API sınırlarına uyar (500 kayıt / 64 KB).",
      "Uygulama içinde gezinirken seçimler ve üretilen sonuçlar korunur (tam sayfa yenilemede sıfırlanır).",
    ],
    imageGeneratorTitle: "Görsel Oluşturucu",
    imageGeneratorBody:
      "Arayüzlerin için isteğe bağlı yer tutucu görsel URL'leri üret. MockData SVG'leri veya Picsum üzerinden rastgele fotoğraflar seç, genişlik ve yükseklik ayarla; img etiketleri, CSS veya görsel alanları için URL'yi kopyala.",
    imageGeneratorBullets: [
      "/image-generator üzerinde SVG görseller veya gerçek fotoğraflar arasında seçim yap.",
      "Genel URL biçimi: SVG için /image/{width}/{height}, fotoğraflar için ?type=real ekle.",
      "Varsayılan olarak rastgele sonuç döner; aynı SVG renklerini veya fotoğrafı korumak için rastgele bir ?seed= değeri ver.",
      "Avatar, küçük resim, profil, gönderi, kapak, banner ve hikaye için hazır boyutlar içerir.",
    ],
    jsonWorkbenchTitle: "JSON Workbench",
    jsonWorkbenchBody:
      "JSON Workbench (geliştirme aşamasında), ekran geliştirirken JSON biçimlendirme, karşılaştırma, arama ve dönüştürme işlemlerini tarayıcıda yapmanı sağlayan araç takımıdır.",
    jsonWorkbenchBullets: [
      "/json adresinde JSON Workbench'i aç ve anında geçiş yapmak için bir araç seç (?tool= parametresini de destekler).",
      "Temel araçlar: Biçimlendir, Ağaç Görünümü, Ara, JSONPath ve Yapıyı Karşılaştır.",
      "Dönüştürme araçları: TypeScript, Zod, JSON Schema, YAML ve CSV.",
      "Yardımcı araçlar: Anahtarları Sırala, Boş Değerleri Temizle, Düzleştir, Kaçış/Onar, Alan Seç/Hariç Tut ve daha fazlası.",
      "Tamamen tarayıcıda çalışır; JSON verin sunucuya gönderilmez.",
      "Aktif olarak geliştirilmektedir; yeni araçlar ve iyileştirmeler eklenmeye devam edecek.",
    ],
    sharedDataTitle: "Ortak Veri",
    sharedDataBody:
      "Tüm kullanıcılar aynı canlı veritabanı üzerinde çalışır: oluşturduğun, düzenlediğin veya sildiğin her şey anında herkesçe görünür. Üretim ortamında veritabanı GET /api/cron/reset ile her gün başlangıç verilerine sıfırlanır. Prototipler ve demolar için uygundur; kalıcı veya hassas veriler için uygun değildir.",
    languageTitle: "Dil",
    languageBody:
      "Varsayılan olarak tüm kaynak metinleri İngilizce döner. Ad, kullanıcı adı, e-posta, telefon numarası ve cümleleri Farsça almak için lang=fa sorgu parametresini ekle. Çerezler ve Accept-Language başlıkları kullanılmaz; yalnızca sorgu parametresi geçerlidir. Üst menüden dili değiştirirsen (English | فارسی) Playground ve Önizleme de buna uyum sağlar.",
    languageBullets: [
      "Örnek: GET /api/users?lang=fa",
      "FA yanıtları Content-Language: fa ve yazı tipi bilgileri (Vazirmatn) içerir.",
      "Üstte فارسی seçiliyken düzen sağdan sola (RTL) döner ve Playground otomatik olarak lang=fa ekler.",
    ],
    resourcesTitle: "Kaynaklar",
    resourcesBlurb:
      "Şu an yayında olan uç noktaların ve yakında eklenecek özelliklerin özeti.",
    colResource: "Kaynak",
    colBasePath: "Temel Yol",
    colStatus: "Durum",
    colDocs: "Dokümanlar",
    statusLive: "Yayında",
    statusDev: "Geliştirme aşamasında",
    statusSoon: "Yakında",
    openapiTitle: "OpenAPI",
    openapiBody:
      "Mevcut tüm uç noktalar (Auth, Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, Countries ve yönetici sıfırlama) için makine tarafından okunabilir belirtim. Postman, Swagger UI veya yapay zeka araçlarına içe aktarmaya uygundur.",
    download: "İndir",
    requestsTitle: "İstekler",
    requestsBody:
      "Koleksiyon uç noktaları data ve pagination döndürür; tekil kaynaklar { data } döndürür.",
    errorsTitle: "Hatalar",
    errorsBody:
      "Hata yanıtları bir error nesnesi içerir. Sık karşılaşılan durum kodları: geçersiz istekler için 400, eksik veya hatalı kimlik doğrulama için 401, bulunamayan kayıtlar için 404, yoğun isteklerde 429 ve sunucu hatalarında 500. İstemci tarafındaki hata yönetimini test etmek için ?status=500 (400–599 aralığında) ekleyerek bu durum kodunu simüle edebilirsin.",
    rateLimitTitle: "İstek Sınırı",
    rateLimitBody:
      "Hizmetin herkes için kararlı kalması adına /api/* istekleri IP başına dakikada yaklaşık {limit} istekle sınırlandırılmıştır. Aşıldığında HTTP 429 (Too Many Requests) döner; kalan kotayı X-RateLimit başlıklarından takip edebilirsin.",
    resetTitle: "Veriyi Sıfırla",
    resetBody:
      "Tüm ziyaretçiler aynı demo veritabanını paylaşır. Üretimde her 24 saatte bir sıfırlanır; ancak yönetici parolasıyla aşağıdan demo tablolarını temizleyip başlangıç verileriyle yeniden doldurabilirsin.",
    resetPanel: {
      intro: "Demo tablolarını sıfırlayıp başlangıç verileriyle yeniden doldurmak için yönetici parolasını gir.",
      placeholder: "Yönetici parolası",
      button: "Şimdi sıfırla",
      resetting: "Sıfırlanıyor…",
      needSecret: "Önce yönetici parolasını gir.",
      confirm: "Demo tablolar sıfırlanıp başlangıç verileriyle yeniden doldurulsun mu?",
      networkError: "Ağ hatası. Sunucunun çalıştığını kontrol et.",
      donePrefix: "Sıfırlandı",
    },
    colIndex: "#",
  },
  resourceDocs: {
    endpoints: "Uç Noktalar",
    queryParams: "Sorgu Parametreleri",
    examples: "Örnek İstekler",
    response: "Örnek Yanıt",
    tryExample: "Dene",
    preview: "Önizleme",
    playground: "Playground",
    backToResources: "Kaynaklara dön",
  },
  playground: {
    title: "Playground",
    blurb:
      "MockData API'lerine gerçek istekler gönder ve JSON yanıtlarını doğrudan tarayıcıda incele. Her kaynak için son isteğin sayfa geçişlerinde saklanır.",
    resource: "Kaynak",
    action: "İşlem",
    send: "Gönder",
    sending: "Gönderiliyor…",
    response: "Yanıt",
    request: "İstek",
    body: "Gövde",
    query: "Sorgu",
    headers: "Başlıklar",
    correct: "Geçerli bilgiler",
    wrong: "Hatalı bilgiler",
    password: "Parola",
    user: "Kullanıcı",
    pickUser: "Kullanıcı seç",
    loadError: "Seçenekler yüklenemedi",
    emptyResponse: "Henüz yanıt yok",
    startHint: "Başlamak için bir kaynak seç ve istek gönder.",
    types: "TS",
    json: "JSON",
  },
  temporary: {
    title: "Geçici API'ler",
    blurb: "JSON yapıştır ve saniyeler içinde geçici bir API oluştur.",
    privacyNote:
      "Bağlantıyı parola gibi koru: süresi dolana kadar bağlantıya sahip herkes veriyi okuyabilir ve düzenleyebilir. Tarayıcı başına en fazla 5 aktif geçici API.",
    jsonLabel: "JSON",
    durationLabel: "Geçerlilik süresi",
    duration1h: "1 saat",
    duration6h: "6 saat",
    duration12h: "12 saat",
    duration24h: "24 saat",
    checkJson: "JSON'u Kontrol Et",
    jsonValid: "Sorun görünmüyor. API'yi oluşturabilirsin.",
    jsonHint: "Önce JSON'u kontrol edebilir veya doğrudan oluşturabilirsin.",
    create: "API Oluştur",
    creating: "Oluşturuluyor…",
    acceptFix: "Düzeltmeyi uygula ve oluştur",
    rejectFix: "Düzenlemeye devam et",
    fixedPreview: "Bazı sorunları otomatik düzelttik. Kontrol edip oluştur.",
    myApis: "Geçici API'lerim",
    emptyList: "Henüz aktif geçici API'n yok.",
    copyUrl: "Kopyala",
    delete: "Sil",
    deleteAll: "Tümünü sil",
    deleting: "…",
    confirmDelete: "Bu API silinsin mi?",
    confirmDeleteBody: "Bu bağlantı artık çalışmayacak.",
    confirmDeleteAll: "Tüm API'ler silinsin mi?",
    confirmDeleteAllBody: "Bu listedeki tüm bağlantılar artık çalışmayacak.",
    cancel: "İptal",
    limitReached: "5 API sınırına ulaşıldı.",
    limitReachedBody: "Aşağıdaki listeden bir API sil veya süresinin dolmasını bekle.",
    createdTitle: "API oluşturuldu",
    openApi: "Aç",
    slotsLabel: "{n} / 5",
    maxActive: "",
    sampleJson: `[
  { "id": "1", "firstName": "Emre", "lastName": "Yılmaz", "role": "admin" },
  { "id": "2", "firstName": "Zeynep", "lastName": "Kaya", "role": "member" },
  { "id": "3", "firstName": "Mert", "lastName": "Demir", "role": "member" }
]`,
    issues: {
      EMPTY: "Bir JSON nesnesi veya dizisi yapıştır.",
      INVALID_JSON: "Geçersiz JSON. Virgülleri, tırnakları ve parantezleri kontrol et.",
      TOO_LARGE: "JSON boyutu üst sınırı ({max} KB) aşıyor.",
      NOT_OBJECT_OR_ARRAY: "En üst düzey bir { } nesnesi veya [ ] dizisi olmalıdır.",
      TOO_DEEP: "İç içe seviye sayısı çok fazla (en fazla {max}).",
      ARRAY_TOO_LONG: "Dizi izin verilen uzunluktan fazla (en fazla {max} öğe).",
      TOO_MANY_KEYS: "Tek nesnede çok fazla anahtar var (en fazla {max}).",
      UNSAFE_KEY: "Güvenli olmayan '{key}' anahtarına izin verilmiyor.",
      AUTO_FIXED: "Sondaki fazla virgüller veya güvenli olmayan anahtarlar temizlendi.",
    },
  },
  imageGenerator: {
    title: "Görsel Oluşturucu",
    blurb:
      "Projelerin için isteğe bağlı yer tutucu görseller üret. img etiketleri, CSS veya görsel alanları için MockData SVG'lerinin ya da rastgele fotoğrafların URL'lerini kopyala.",
    modeSvg: "SVG",
    modeReal: "Fotoğraf",
    width: "Genişlik",
    height: "Yükseklik",
    generate: "URL Oluştur",
    generating: "Oluşturuluyor…",
    yourUrl: "Oluşturulan API URL'si",
    preview: "Önizleme",
    useInProject: "Projede kullan",
    tabUrl: "URL",
    tabHtml: "HTML",
    tabCss: "CSS",
    tabJs: "JavaScript",
    tabCurl: "cURL",
    readySizes: "Hazır boyutlar",
    sizes: {
      avatar: "Avatar",
      thumbnail: "Küçük Resim",
      profile: "Profil",
      square: "Kare",
      post: "Gönderi",
      cover: "Kapak",
      banner: "Banner",
      story: "Hikaye",
    },
  },
  jsonWorkbench: {
    title: "JSON Workbench",
    blurb:
      "JSON'unu tek sefer yapıştır; yeniden yapıştırmadan biçimlendirme, arama, dönüştürme ve diğer araçlar arasında geçiş yap.",
    toolNavLabel: "Workbench araçları",
    source: {
      title: "Kaynak JSON",
      hint: "Buraya tek sefer yapıştır; tüm araçlar bu JSON'u kullanır.",
      sample: "Örnek yükle",
      valid: "Geçerli JSON.",
      needJson: "Önce sola bir JSON yapıştır.",
      fixFirst: "Önce kaynak JSON'daki sözdizimi hatasını düzelt.",
      pickAction: "Hangi işlemi yapmak istersin?",
      useResult: "Kaynak JSON'da kullan",
      diffHint: "Kaynak JSON A tarafıdır; karşılaştırmak için aşağıya JSON B'yi yapıştır.",
      escapedInput: "Kaçışlı metin",
      schemaInput: "JSON Schema",
      fromSchemaNote:
        "Örnek JSON üretip kaynak JSON'a uygulamak için aşağıya bir JSON Schema yapıştır.",
    },
    categories: {
      core: "Temel",
      transform: "Dönüştür",
      utility: "Yardımcı",
    },
    labels: {
      input: "Girdi",
      output: "Çıktı",
      tree: "Ağaç",
      matches: "Eşleşmeler",
      jsonA: "JSON A",
      jsonB: "JSON B",
      diffResult: "Farklar",
      jsonpath: "JSONPath",
      result: "Sonuç ({count})",
    },
    actions: {
      format: "Biçimlendir",
      minify: "Küçült",
      showTree: "Ağacı göster",
      search: "Ara",
      clearSearch: "Aramayı temizle",
      replace: "Değiştir",
      replaceAll: "Tümünü değiştir",
      prevMatch: "Önceki",
      nextMatch: "Sonraki",
      compare: "Karşılaştır",
      run: "Çalıştır",
      runPath: "Yolu çalıştır",
      toTypescript: "TypeScript'e Dönüştür",
      toZod: "Zod'a Dönüştür",
      toSchema: "Schema'ya Dönüştür",
      swapDirection: "Yönü değiştir",
      sortKeys: "Anahtarları Sırala",
      removeEmpty: "Boş Değerleri Temizle",
      flatten: "Düzleştir",
      unflatten: "İç İçe Yap",
      escape: "Kaçış Ekle",
      unescape: "Kaçışı Kaldır",
      repair: "JSON Onar",
      fromSchema: "Örnek Üret",
      extractKeys: "Anahtarları Çıkar",
      extractValues: "Değerleri Çıkar",
      pick: "Alan Seç",
      omit: "Alan Hariç Tut",
      compareStructure: "Yapıyı Karşılaştır",
      clear: "Temizle",
      expandAll: "Tümünü aç",
      collapseAll: "Tümünü kapat",
      copyPath: "Yolu kopyala",
      copyValue: "Değeri kopyala",
    },
    errors: {
      empty: "Bir JSON yapıştır.",
      invalid: "Geçersiz JSON.",
      unexpectedEnd: "JSON beklenmedik şekilde sona eriyor.",
      unexpectedToken: "Beklenmeyen belirteç: {token}",
      expectedPropertyName: "Özellik adları çift tırnak içinde olmalıdır.",
      expectedCommaOrBrace: "Değerden sonra ',' veya '}' bekleniyor.",
      expectedCommaOrBracket: "Dizi öğesinden sonra ',' veya ']' bekleniyor.",
      expectedColon: "Özellik adından sonra ':' bekleniyor.",
      unterminatedString: "Kapatılmamış metin.",
      badControlChar: "Metin geçersiz bir kontrol karakteri içeriyor.",
      badEscape: "Metinde geçersiz kaçış dizisi.",
      trailingChar: "JSON değerinden sonra fazladan karakterler var.",
      objectKeyExpected: "Burada bir nesne anahtarı bekleniyor.",
      unexpectedCharacter: "Beklenmeyen karakter: {char}",
      invalidCharacter: "Geçersiz karakter: {char}",
      invalidUnicode: "Geçersiz Unicode kaçışı: {chars}",
      couldNotRepair: "Bu JSON otomatik olarak onarılamadı.",
      atLineColumn: "satır {line}, sütun {column}",
      atLine: "satır {line}",
      atPosition: "konum {position}",
    },
    types: {
      object: "nesne",
      array: "dizi",
      string: "metin",
      number: "sayı",
      boolean: "mantıksal",
      null: "null",
    },
    validate: {
      idleHint: "Standart sözdizimine uygunluğunu doğrulamak için JSON yapıştır.",
      validTitle: "Geçerli JSON",
      validBody: "Kök türü: {type}",
      invalidTitle: "Geçersiz JSON",
    },
    tree: {
      idleTitle: "Ağaç burada görünecek",
      idleBody: "Sola bir JSON yapıştır ve Ağacı göster'e tıkla.",
      errorTitle: "Ağaç gösterilemiyor",
      errorBody: "JSON'daki sözdizimi hatalarını düzeltip tekrar dene.",
    },
    search: {
      query: "Ara",
      replaceWith: "Şununla değiştir",
      matchCount: "{current} / {total}",
      noMatches: "Eşleşme yok",
      noMatchesBody: "Aramanla eşleşen anahtar veya değer bulunamadı.",
      idleTitle: "Arama sonuçları burada görünecek",
      idleBody: "Anahtar ve değerlerde arama yapmak için bir ifade gir ve Ara'ya tıkla.",
      errorTitle: "Arama yapılamıyor",
      errorBody: "Aramadan önce JSON'daki sözdizimi hatalarını düzelt.",
      kindKey: "anahtar",
      kindValue: "değer",
      activeHint: "{kind} · {path}",
      replacedCount: "{count} öğe değiştirildi.",
    },
    diff: {
      idleTitle: "Farklar burada görünecek",
      idleBody: "Karşılaştırmak için hem JSON A hem de JSON B alanlarını doldur.",
      identical: "Fark yok. İki belgenin yapısı ve değerleri aynı.",
      added: "Eklendi / yalnızca B'de var",
      removed: "Kaldırıldı / yalnızca A'da var",
      changed: "Değiştirildi",
      sideEmpty: "Bu taraf boş.",
      emptyA: "JSON A boş.",
      emptyB: "JSON B boş.",
      bothInvalid: "Hem JSON A hem de JSON B geçersiz.",
    },
    jsonpath: {
      whatIs:
        "JSONPath, iç içe JSON verilerinden belirli değerleri seçmeni sağlar — veriler için CSS seçicilerine benzer. Doldurmak için aşağıdaki bir örneğe tıkla.",
      hintTitle: "Sözdizimi özeti",
      hintBody: `$              kök belge
.users         özellik adı
[*]            dizideki tüm öğeler
[0]            dizideki ilk öğe`,
      idleTitle: "Sorgu sonuçları burada görünecek",
      idleBody: "Bir yol ifadesi gir ve çalıştır.",
      errorTitle: "Sorgu çalıştırılamıyor",
      errorBody: "JSON'daki veya yoldaki hatayı düzeltip tekrar dene.",
      noResults: "Bu yolla eşleşen öğe bulunamadı.",
      emptyPath: "Bir JSONPath ifadesi gir.",
    },
    transform: {
      tsIdleTitle: "TypeScript türleri burada görünecek",
      tsIdleBody: "TypeScript tür tanımları üretmek için JSON yapıştır.",
      zodIdleTitle: "Zod şeması burada görünecek",
      zodIdleBody: "Bir Zod şeması üretmek için JSON yapıştır.",
      schemaExplain: "JSON ↔ Schema",
      schemaUse:
        "Kaynak JSON'dan bir JSON Schema üret veya bir şemadan örnek JSON oluştur.",
      schemaIdleTitle: "JSON Schema burada görünecek",
      schemaIdleBody: "JSON Schema üretmek için JSON yapıştır.",
      yamlIdleTitle: "YAML çıktısı burada görünecek",
      yamlIdleBody: "Kaynak JSON, YAML biçimine dönüştürülür.",
      yamlToJsonIdle: "Kaynak JSON'a dönüştürmek için yukarıya YAML yapıştır.",
      yamlApplied: "Dönüştürüldü ve kaynak JSON güncellendi.",
      csvIdleTitle: "CSV çıktısı burada görünecek",
      csvIdleBodyJson:
        "Kaynak JSON'daki tek nesneyi, nesne dizisini veya liste içeren nesneyi CSV'ye dönüştür.",
      csvIdleBodyCsv: "JSON'a dönüştürmek için başlık satırlı CSV yapıştır.",
      csvToJsonIdle: "Kaynak JSON'a dönüştürmek için yukarıya CSV yapıştır.",
      csvApplied: "Dönüştürüldü ve kaynak JSON güncellendi.",
      csvUnsupported: "Bu JSON yapısı CSV'ye dönüştürülemiyor.",
    },
    utilities: {
      sortAsc: "A → Z",
      sortDesc: "Z → A",
      sortIdleTitle: "Sıralamaya hazır",
      sortIdleBody: "Çıktıda sıralanmış anahtarları görmek için A → Z veya Z → A seç.",
      sortApplied: "Anahtarlar sıralandı. Aşağıdaki çıktıyı incele.",
      removeOptions: "Hangi boş değerler kaldırılsın",
      removeNull: "null",
      removeEmptyString: '""',
      removeEmptyArray: "[]",
      removeEmptyObject: "{}",
      removeNullLabel: "null",
      removeEmptyStringLabel: "boş metinler",
      removeEmptyArrayLabel: "boş diziler",
      removeEmptyObjectLabel: "boş nesneler",
      removePreserveHint: "false ve 0 değerleri korunur ve kaldırılmaz.",
      removeIdleTitle: "Temizlenmiş JSON burada görünecek",
      removeIdleBody: "Nelerin kaldırılacağını seç ve işlemi çalıştır.",
      nestedLabel: "İç içe",
      flatLabel: "Düz",
      flattenHint: "İç içe nesneleri noktalı anahtarlara dönüştürür (ör. address.city, skills.0).",
      flattenUse:
        "Tablolara, .env dosyalarına, arama dizinlerine veya yalnızca düz anahtar-değer çifti bekleyen API'lere aktarımda işe yarar.",
      flattenIdleTitle: "Düzleştirmeye hazır",
      flattenIdleBody: "İç içe anahtarlar çıktıda noktalı yollar olarak görünür.",
      flattenApplied: "Düzleştirildi. Aşağıdaki çıktıyı incele.",
      unflattenHint: "Noktalı yolları yeniden iç içe nesnelere, sayısal bölümleri ise dizilere dönüştürür.",
      unflattenUse:
        "user.name veya skills.0 gibi düz anahtarları yeniden iç içe JSON'a çevirmek için kullanışlıdır.",
      unflattenIdleTitle: "İç içe JSON burada görünecek",
      unflattenIdleBody: "İç içe yapıyı geri getirmek için noktalı yollara sahip bir nesne yapıştır.",
      escapeIdleTitle: "Kaçışlı metin burada görünecek",
      escapeIdleBody: "JSON, bir metin sabiti içinde güvenle yer alabilmesi için kaçış karakterleriyle işlenir.",
      escapeHint:
        `JSON'u tırnak ve satır sonlarının " ve \\n biçimine dönüştüğü tek bir kaçışlı metne çevirir; böylece başka bir metnin içinde güvenle kullanılabilir.`,
      escapeUse:
        "Dıştaki tırnakları bozmadan kod, ortam değişkeni veya günlük içine JSON yerleştirirken pratiktir.",
      unescapeIdleTitle: "Kaçışsız JSON burada görünecek",
      unescapeIdleBody: "Özgün JSON'u geri almak için kaçışlı bir JSON metni yapıştır.",
      repairHint:
        "Bozuk, yarım kalmış, yorumlu veya düzenleme sırasında eksik yazılmış JSON'u çok adımlı olarak onarır.",
      repairUse:
        "Eksik tırnak, virgül ve parantezleri, yorum ve kod bloklarını, Python/JS ifadelerini, JSONP'yi, MongoDB türlerini, NDJSON'i, kırpılmaları ve yazım kalıntılarını düzeltir.",
      repairAlreadyValid: "JSON zaten geçerliydi; yalnızca biçim güncellendi.",
      repairFormatted: "Biçimlendirildi.",
      repairReady: "Otomatik onarım hazır.",
      repairApplied: "Onarıldı.",
      repairAppliedToSource: "Kaynak JSON'a uygulandı.",
      repairFailedTitle: "Tam olarak onarılamadı",
      repairFailedAt: "{message} ({line}:{column})",
      repairPreview: "Onarım önizlemesi",
      repairFixes: {
        "trailing-commas": "sondaki virgüller",
        "single-quotes": "tek tırnaklar",
        "smart-quotes": "eğik tırnaklar",
        "unquoted-keys": "tırnaksız anahtarlar",
        "missing-commas": "eksik virgüller",
        "missing-brackets": "eksik parantezler",
        comments: "yorumlar",
        "code-fence": "kod blokları",
        "python-literals": "Python ifadeleri",
        "js-undefined": "undefined → null",
        jsonp: "JSONP sarmalayıcı",
        "escaped-string": "kaçışlı JSON metni",
        mongodb: "MongoDB türleri",
        ndjson: "NDJSON → dizi",
        ellipsis: "üç nokta (…)",
        "string-concat": "metin birleştirme",
        whitespace: "boşluk ve satır sonları",
        truncated: "yarım kalmış / kırpılmış",
        "mid-edit-junk": "düzenleme kalıntıları",
      },
      repairIdleTitle: "Onarılmış JSON burada görünecek",
      repairIdleBody:
        "Onarılmış sonucu görmek için kaynak JSON'a eksik metin veya JSON benzeri veri yapıştır.",
      fromSchemaHint:
        "type, properties, required, items, enum ve default alanlarına göre bir JSON Schema'dan örnek JSON üretir.",
      fromSchemaIdleTitle: "Örnek JSON burada görünecek",
      fromSchemaIdleBody: "Örnek üretmek için aşağıya bir JSON Schema yapıştır.",
      extractHint:
        'Yaprak yolları ve değerleri çıkarır (ör. { path: "address.city", value: "İstanbul" }).',
      extractIdleTitle: "Çıkarılan anahtar ve değerler burada görünecek",
      extractIdleBody: "Yol ve değer çiftleri çıkarmak için yukarıdan alan seç.",
      extractKeysHint: "İç içe anahtarları noktalı yol olarak gösterir (dizi dizinleri .0 biçiminde).",
      extractKeysIdleTitle: "Çıkarılan anahtarlar burada görünecek",
      extractKeysIdleBody: "Tüm anahtarları çıkarmak için JSON yapıştır.",
      extractValuesHint: "Tüm yaprak değerleri (ilkel türler ve null) toplar.",
      extractValuesIdleTitle: "Çıkarılan değerler burada görünecek",
      extractValuesIdleBody: "Tüm değerleri çıkarmak için JSON yapıştır.",
      fieldsLabel: "Kaynak JSON'daki alanlar",
      fieldsClickHint:
        "Seçmek için bir yola tıkla. İç içe özellikler noktayla ayrılır.",
      fieldsSelectAll: "Tümünü seç",
      fieldsClear: "Seçimi temizle",
      fieldsEmpty: "Bu JSON'da seçilebilir alan yok.",
      pickHint: "Yalnızca seçili alanları korur. Seçmek için aşağıdaki listeden tıkla.",
      pickIdleTitle: "Sonuç burada görünecek",
      pickIdleBody: "",
      omitHint: "Seçili alanları çıkarır. Seçmek için aşağıdaki listeden tıkla.",
      omitIdleTitle: "Sonuç burada görünecek",
      omitIdleBody: "",
      compareHint: "Değer farklarına bakmadan iki JSON belgesini yapısal olarak yan yana karşılaştırır.",
      compareUse:
        "A'da eksik anahtarlar kırmızı, B'ye eklenen anahtarlar yeşil ve farklılaşan türler kehribar renginde gösterilir.",
      compareBack: "Workbench'e dön",
      compareIdleTitle: "İki JSON belgesi gir",
      compareIdleBody: "Yapıları karşılaştırmak için her iki tarafı da doldur.",
      compareIdentical: "Yapılar aynı: aynı anahtarlar ve veri türleri.",
      compareMissing: "Eksik anahtarlar (yalnızca A'da)",
      compareExtra: "Eklenen anahtarlar (yalnızca B'de)",
      compareType: "Farklı tür",
    },
    empty: {
      formatTitle: "Biçimlendirilmiş JSON burada görünecek",
      formatBody: "Sola bir JSON yapıştır ve Biçimlendir'e tıkla.",
    },
    soon: {
      badge: "Yakında",
      title: "{tool} yakında eklenecek",
      body: "Bu araç kapsamlı Workbench yol haritasının bir parçasıdır ve sonraki güncellemelerde sunulacak.",
    },
    tools: {
      format: "Biçimlendir",
      minify: "Küçült",
      validate: "Doğrula",
      tree: "Ağaç",
      search: "Ara",
      diff: "Fark",
      jsonpath: "JSONPath",
      convert: "Dönüştür",
      toTypescript: "TypeScript",
      toZod: "Zod",
      toSchema: "JSON Schema",
      yaml: "YAML",
      csv: "CSV",
      sortKeys: "Anahtarları Sırala",
      removeEmpty: "Boş Değerleri Temizle",
      flatten: "Düzleştir",
      unflatten: "İç İçe Yap",
      escape: "Kaçış Ekle",
      unescape: "Kaçışı Kaldır",
      repair: "Onar",
      extract: "Anahtarlar ve Değerler",
      extractKeys: "Anahtarları Çıkar",
      extractValues: "Değerleri Çıkar",
      pick: "Alan Seç",
      omit: "Alan Hariç Tut",
      compareStructure: "Yapıyı Karşılaştır",
    },
  },
  generator: {
    title: "Veri Oluşturucu",
    subtitle: "Ön yüz geliştirme için hızlıca gerçekçi test verisi oluştur.",
    chooseType: "Veri türü",
    searchPlaceholder: "Veri türü ara…",
    noTopics: "Eşleşen veri türü bulunamadı.",
    fieldsLegend: "Alanlar",
    moreFields: "Daha fazla alan göster",
    lessFields: "İsteğe bağlı alanları gizle",
    optionalFields: "İsteğe bağlı alanlar",
    records: "Kayıt sayısı",
    customQty: "Özel",
    country: "Ülke",
    countrySearch: "Ülke ara…",
    selectPlaceholder: "Bir veri türü seç…",
    outputMode: "Çıktı biçimi",
    modePayload: "POST gövdesi",
    modeApi: "API kaydı",
    modePayloadHint: "id ve zaman damgaları olmadan — kayıt oluşturma POST gövdesi için uygundur.",
    modeApiHint: "Kaydedilmiş bir API kaydı gibi id, createdAt ve updatedAt alanlarını içerir.",
    jsonType: "JSON",
    viewJson: "JSON",
    viewType: "TS",
    generate: "{n} adet üret",
    generating: "{n} adet üretiliyor…",
    generateAgain: "Yeniden üret",
    refresh: "Yenile",
    generated: "{n} adet üretildi",
    download: "İndir",
    createApi: "API Oluştur",
    createSuccess: "Geçici API oluşturuldu.",
    createBlockedArray:
      "Geçici API'ler en fazla 500 kayıt destekler. Sayıyı azaltıp tekrar dene.",
    createBlockedSize:
      "JSON boyutu geçici API sınırını (64 KB) aşıyor. Daha az kayıt veya alan seç.",
    openTemporary: "Geçici API'lerde yönet",
    emptyTitle: "Bir veri türü seç",
    emptyBody: "Gerçekçi test kayıtları üretmek için yukarıdan bir veri türü seç.",
    duration1h: "1 saat",
    duration6h: "6 saat",
    duration12h: "12 saat",
    duration24h: "24 saat",
    countries: {
      all: "Tüm ülkeler",
      IR: "İran",
      DE: "Almanya",
      US: "Amerika Birleşik Devletleri",
      GB: "Birleşik Krallık",
      FR: "Fransa",
      NL: "Hollanda",
      JP: "Japonya",
      CA: "Kanada",
    },
    categories: {
      people: "Kişiler",
      ecommerce: "E-Ticaret",
      content: "İçerik",
      media: "Medya",
      business: "İş Dünyası",
      location: "Konum",
    },
    fields: {
      id: "id",
      name: "ad soyad",
      username: "kullanıcı adı",
      email: "e-posta",
      avatar: "avatar",
      phone: "telefon",
      company: "şirket",
      location: "konum",
      age: "yaş",
      role: "rol",
      jobTitle: "unvan",
      department: "departman",
      bio: "biyografi",
      website: "web sitesi",
      createdAt: "oluşturulma tarihi",
      updatedAt: "güncellenme tarihi",
      hiredAt: "işe giriş tarihi",
      ordersCount: "sipariş sayısı",
      totalSpent: "toplam harcama",
      postsCount: "gönderi sayısı",
      price: "fiyat",
      image: "görsel",
      category: "kategori",
      description: "açıklama",
      brand: "marka",
      stock: "stok",
      rating: "puan",
      sku: "SKU",
      colors: "renkler",
      orderId: "sipariş no",
      customer: "müşteri",
      items: "ürünler",
      total: "toplam",
      status: "durum",
      orderDate: "sipariş tarihi",
      paymentStatus: "ödeme durumu",
      shippingAddress: "teslimat adresi",
      user: "kullanıcı",
      comment: "yorum",
      post: "gönderi",
      date: "tarih",
      product: "ürün",
      title: "başlık",
      verified: "doğrulanmış",
      helpful: "faydalı",
      slug: "kısa ad",
      parentCategory: "üst kategori",
      productCount: "ürün sayısı",
      quantity: "adet",
      discount: "indirim",
      code: "kod",
      type: "tür",
      expiresAt: "son kullanma",
      minimumOrder: "alt sipariş tutarı",
      usageLimit: "kullanım limiti",
      active: "aktif",
      amount: "tutar",
      currency: "para birimi",
      paymentMethod: "ödeme yöntemi",
      transactionId: "işlem no",
      order: "sipariş",
      carrier: "kargo firması",
      trackingNumber: "kargo takip no",
      estimatedDelivery: "tahmini teslimat",
      body: "içerik",
      author: "yazar",
      tags: "etiketler",
      publishedAt: "yayın tarihi",
      likes: "beğeni",
      views: "görüntülenme",
      replies: "yanıtlar",
      attachments: "ekler",
      actionUrl: "aksiyon URL'si",
      sender: "gönderen",
      receiver: "alıcı",
      message: "mesaj",
      read: "okundu",
      artist: "sanatçı",
      cover: "kapak",
      year: "yıl",
      genre: "tür",
      tracks: "parçalar",
      album: "albüm",
      duration: "süre",
      poster: "afiş",
      director: "yönetmen",
      language: "dil",
      plays: "dinlenme",
      label: "plak şirketi",
      pages: "sayfa sayısı",
      isbn: "ISBN",
      instructor: "eğitmen",
      level: "seviye",
      lessons: "dersler",
      students: "öğrenciler",
      employees: "çalışanlar",
      logo: "logo",
      industry: "sektör",
      salary: "maaş",
      experience: "deneyim",
      remote: "uzaktan",
      founded: "kuruluş yılı",
      postedAt: "yayınlanma",
      capacity: "kapasite",
      capital: "başkent",
      flag: "bayrak",
      region: "bölge",
      population: "nüfus",
      street: "sokak ve no",
      postalCode: "posta kodu",
      latitude: "enlem",
      longitude: "boylam",
      country: "ülke",
      city: "şehir",
      notes: "notlar",
      team: "ekip",
      joinedAt: "katılım tarihi",
      skills: "yetenekler",
      specialty: "uzmanlık",
      hospital: "hastane",
      licenseNumber: "lisans no",
      yearsExperience: "deneyim yılı",
      bloodType: "kan grubu",
      diagnosis: "tanı",
      doctor: "doktor",
      admittedAt: "kabul tarihi",
      vehicleType: "araç tipi",
      plateNumber: "plaka",
      tripsCount: "yolculuk sayısı",
      roomNumber: "oda no",
      checkIn: "giriş",
      checkOut: "çıkış",
      nights: "gece",
      followers: "takipçi",
      following: "takip edilen",
      grade: "sınıf",
      school: "okul",
      gpa: "not ortalaması",
      major: "bölüm",
      enrollmentYear: "kayıt yılı",
      subject: "ders",
      classesCount: "sınıf sayısı",
      invoiceNumber: "fatura no",
      issueDate: "düzenleme tarihi",
      dueDate: "vade tarihi",
      tax: "KDV",
      itemsCount: "kalem sayısı",
      target: "hedef",
      targetType: "hedef türü",
      reaction: "tepki",
      color: "renk",
      thumbnail: "küçük resim",
      channel: "kanal",
      url: "URL",
      width: "genişlik",
      height: "yükseklik",
      alt: "alt metin",
      photographer: "fotoğrafçı",
      host: "sunucu",
      episodes: "bölümler",
      subscribers: "abone",
      owner: "sahibi",
      public: "herkese açık",
      progress: "ilerleme",
      teamSize: "ekip büyüklüğü",
      budget: "bütçe",
      startDate: "başlangıç tarihi",
      membersCount: "üye sayısı",
      focus: "odak",
      countriesCount: "ülke sayısı",
      areaKm2: "alan (km²)",
      timezone: "saat dilimi",
      terminals: "terminaller",
      altitude: "rakım",
      accuracy: "doğruluk",
    },
    topics: {
      users: {
        name: "Kullanıcılar",
        description: "Uygulamalar ve paneller için kullanıcı profilleri",
        preview: {
          line1: "Emre Yılmaz",
          line2: "@emre_yilmaz · emre@mail.test",
          line3: "İstanbul",
        },
      },
      customers: {
        name: "Müşteriler",
        description: "Alıcı ve hesap iletişim bilgileri",
        preview: {
          line1: "Zeynep Kaya",
          line2: "zeynep@demo.dev",
          line3: "0532 123 45 67",
        },
      },
      employees: {
        name: "Çalışanlar",
        description: "Unvan ve departman bilgilerine sahip ekip üyeleri",
        preview: {
          line1: "Mert Demir",
          line2: "Frontend Mühendisi",
          line3: "Mühendislik · Acme",
        },
      },
      authors: {
        name: "Yazarlar",
        description: "Yazı ve içerik üreticileri",
        preview: {
          line1: "Elif Şahin",
          line2: "Ürün tasarımı ve UX üzerine yazıyor.",
        },
      },
      contacts: {
        name: "Kişiler",
        description: "CRM için kişiler ve şirketler",
        preview: {
          line1: "Can Çelik",
          line2: "can@acme.test · Acme",
        },
      },
      "team-members": {
        name: "Ekip Üyeleri",
        description: "Ürün ve geliştirme ekibi üyeleri",
        preview: {
          line1: "Selin Arslan",
          line2: "Teknik Lider · Platform",
        },
      },
      doctors: {
        name: "Doktorlar",
        description: "Uzmanlık alanı ve hastane bilgili sağlık çalışanları",
        preview: {
          line1: "Dr. Kerem Aydın",
          line2: "Kardiyoloji · Boğaziçi Hastanesi",
        },
      },
      patients: {
        name: "Hastalar",
        description: "Tanı ve kan grubu içeren hasta kayıtları",
        preview: {
          line1: "Defne Öztürk",
          line2: "A+ · Hipertansiyon",
        },
      },
      drivers: {
        name: "Sürücüler",
        description: "Araç ve puan bilgili ulaşım sürücüleri",
        preview: {
          line1: "Burak Yıldız",
          line2: "Sedan · ★ 4,8",
        },
      },
      guests: {
        name: "Misafirler",
        description: "Oda numarası ve konaklama durumlu otel misafirleri",
        preview: {
          line1: "İrem Koç",
          line2: "Oda 412 · Giriş yapıldı",
        },
      },
      profiles: {
        name: "Profiller",
        description: "Takipçi ve biyografi içeren sosyal profiller",
        preview: {
          line1: "Kaan Aksoy",
          line2: "@kaan_aksoy · 12B takipçi",
        },
      },
      "girl-students": {
        name: "Kız Öğrenciler",
        description: "Sınıf ve okul bilgili kız öğrenci profilleri",
        preview: {
          line1: "Yağmur Korkmaz",
          line2: "10. Sınıf · Atatürk Anadolu Lisesi",
        },
      },
      "boy-students": {
        name: "Erkek Öğrenciler",
        description: "Sınıf ve okul bilgili erkek öğrenci profilleri",
        preview: {
          line1: "Arda Özdemir",
          line2: "9. Sınıf · Cumhuriyet Lisesi",
        },
      },
      teachers: {
        name: "Öğretmenler",
        description: "Ders ve okul bilgili öğretmenler",
        preview: {
          line1: "Deniz Polat",
          line2: "Matematik · Kadıköy Lisesi",
        },
      },
      products: {
        name: "Ürünler",
        description: "Fiyat ve detay içeren mağaza ürünleri",
        preview: {
          line1: "Kablosuz Gürültü Önleyici Kulaklık",
          line2: "4.290,00 TL · Elektronik",
          line3: "★★★★☆",
        },
      },
      orders: {
        name: "Siparişler",
        description: "Ürün kalemleri ve durum içeren sipariş özetleri",
        preview: {
          line1: "Sipariş #10482",
          line2: "3 ürün · 6.850,00 TL",
          line3: "Teslim edildi",
        },
      },
      reviews: {
        name: "Değerlendirmeler",
        description: "Yıldız puanları ve müşteri yorumları",
        preview: {
          line1: "★★★★★ Çok memnun kaldım",
          line2: "Malzeme kalitesi iyi ve kullanımı pratik.",
        },
      },
      categories: {
        name: "Kategoriler",
        description: "Mağazalar için katalog kategorileri",
        preview: { line1: "Elektronik", line2: "elektronik" },
      },
      "cart-items": {
        name: "Sepet Ürünleri",
        description: "Alışveriş sepetindeki ürünler",
        preview: { line1: "Akıllı Saat", line2: "2 × 5.490,00 TL · 10.980,00 TL" },
      },
      coupons: {
        name: "Kuponlar",
        description: "İndirim kodları ve kullanım kuralları",
        preview: { line1: "HOSGELDIN10", line2: "%10 indirim · bitiş 2026-12-01" },
      },
      payments: {
        name: "Ödemeler",
        description: "Tutar ve ödeme yöntemi içeren ödemeler",
        preview: { line1: "1.450,00 TRY", line2: "Kredi Kartı · Ödendi" },
      },
      shipments: {
        name: "Kargolar",
        description: "Teslimat durumu ve kargo firması",
        preview: { line1: "SIP-10482 · Yurtiçi Kargo", line2: "Dağıtımda" },
      },
      invoices: {
        name: "Faturalar",
        description: "Tutar ve vade tarihi içeren faturalar",
        preview: { line1: "FTR-10482", line2: "24.500,00 TL · Ödendi" },
      },
      brands: {
        name: "Markalar",
        description: "Logo ve ürün sayısı içeren markalar",
        preview: { line1: "Acme", line2: "acme · 128 ürün" },
      },
      posts: {
        name: "Gönderiler",
        description: "Blog yazıları ve akış paylaşımları",
        preview: { line1: "Sade arayüzler tasarlamak", line2: "yazan Elif Şahin" },
      },
      comments: {
        name: "Yorumlar",
        description: "Gönderilere ve ürünlere yapılan yorumlar",
        preview: {
          line1: "Net ve anlaşılır bir anlatım olmuş!",
          line2: "elif · 12 beğeni",
        },
      },
      messages: {
        name: "Mesajlar",
        description: "Sohbet ve doğrudan mesajlar",
        preview: {
          line1: "Son sürümü bir de sen kontrol edebilir misin?",
          line2: "Mert Demir → Zeynep Kaya",
        },
      },
      notifications: {
        name: "Bildirimler",
        description: "Uygulama içi bildirimler ve güncellemeler",
        preview: { line1: "Yeni yorum geldi", line2: "Topluluk · 2 saat önce" },
      },
      tags: {
        name: "Etiketler",
        description: "Kısa ad ve gönderi sayısı içeren etiketler",
        preview: { line1: "typescript", line2: "142 gönderi" },
      },
      "content-categories": {
        name: "İçerik Kategorileri",
        description: "Makale ve rehber kategorileri",
        preview: { line1: "Eğitimler", line2: "egitimler · 86 gönderi" },
      },
      likes: {
        name: "Beğeniler",
        description: "Gönderi ve yorum beğenileri",
        preview: { line1: "Kaan Aksoy bunu beğendi", line2: "Gönderi · Beğeni" },
      },
      albums: {
        name: "Albümler",
        description: "Kapak ve parça bilgili müzik albümleri",
        preview: {
          line1: "Random Access Memories",
          line2: "Daft Punk",
          line3: "2013 · 13 parça",
        },
      },
      songs: {
        name: "Şarkılar",
        description: "Süre ve sanatçı bilgili ses parçaları",
        preview: { line1: "Midnight Cruise", line2: "3:42 · Elektronik" },
      },
      movies: {
        name: "Filmler",
        description: "Afiş ve puan bilgili filmler",
        preview: { line1: "Late Night Express", line2: "2021 · ★ 8,2" },
      },
      books: {
        name: "Kitaplar",
        description: "Yazar ve kapak görselli kitaplar",
        preview: { line1: "Arayüz Tasarımı Notları", line2: "Elif Şahin · 2019" },
      },
      videos: {
        name: "Videolar",
        description: "Süre ve izlenme bilgili videolar",
        preview: {
          line1: "10 dakikada panel kurmak",
          line2: "12:40 · 84B görüntülenme",
        },
      },
      images: {
        name: "Görseller",
        description: "Çözünürlük ve etiketli görsel varlıklar",
        preview: { line1: "Boğaz'da gün batımı", line2: "1280×720" },
      },
      podcasts: {
        name: "Podcast'ler",
        description: "Sunucu ve bölüm sayılı yayınlar",
        preview: { line1: "Kod ve Kahve", line2: "48 blm. · Teknoloji" },
      },
      playlists: {
        name: "Çalma Listeleri",
        description: "Oluşturan ve tür bilgili listeler",
        preview: { line1: "Odaklanma Zamanı", line2: "32 parça · Elektronik" },
      },
      companies: {
        name: "Şirketler",
        description: "Şirket profilleri ve sektörler",
        preview: { line1: "Acme A.Ş.", line2: "Yazılım · İstanbul" },
      },
      jobs: {
        name: "İş İlanları",
        description: "Konum ve çalışma şekli içeren pozisyonlar",
        preview: {
          line1: "Frontend Mühendisi",
          line2: "Google · İstanbul · Tam Zamanlı",
        },
      },
      courses: {
        name: "Kurslar",
        description: "Müfredat ve eğitmen içeren eğitimler",
        preview: { line1: "Uygulamalı React", line2: "Orta · 12 saat" },
      },
      events: {
        name: "Etkinlikler",
        description: "Buluşmalar, konferanslar ve oturumlar",
        preview: { line1: "Frontend Buluşması", line2: "İstanbul · Atölye" },
      },
      projects: {
        name: "Projeler",
        description: "İlerleme ve bütçe bilgili projeler",
        preview: { line1: "Analitik paneli yenileme", line2: "Devam ediyor · %72" },
      },
      teams: {
        name: "Ekipler",
        description: "Lider ve büyüklük bilgili iç ekipler",
        preview: { line1: "Ürün Ekibi", line2: "8 üye · Mühendislik" },
      },
      continents: {
        name: "Kıtalar",
        description: "Kod ve temel istatistik içeren kıtalar",
        preview: { line1: "Avrupa", line2: "EU · 44 ülke" },
      },
      countries: {
        name: "Ülkeler",
        description: "Ad, kod ve bayrak içeren ülkeler",
        preview: { line1: "Türkiye", line2: "TR · Ankara" },
      },
      cities: {
        name: "Şehirler",
        description: "Bölge ve ülkelere bağlı şehirler",
        preview: { line1: "İzmir", line2: "Türkiye · Ege" },
      },
      addresses: {
        name: "Adresler",
        description: "Teslimat ve ofis adresleri",
        preview: {
          line1: "Bağdat Cad. No: 240",
          line2: "34728 Kadıköy / İstanbul",
        },
      },
      regions: {
        name: "Bölgeler",
        description: "Coğrafi bölgeler ve iller",
        preview: { line1: "Marmara", line2: "Türkiye · İstanbul" },
      },
      neighborhoods: {
        name: "Semtler",
        description: "Şehir içi mahalle ve semtler",
        preview: { line1: "Moda", line2: "Kadıköy · 34710" },
      },
      airports: {
        name: "Havalimanları",
        description: "Kod ve şehir bilgili havalimanları",
        preview: { line1: "İstanbul Havalimanı", line2: "IST · Türkiye" },
      },
      coordinates: {
        name: "Koordinatlar",
        description: "Enlem, boylam ve konum bilgileri",
        preview: {
          line1: "41.008238, 28.978359",
          line2: "İstanbul · Türkiye",
        },
      },
    },
    errors: {
      pickTopic: "Önce bir veri türü seç.",
      INVALID_TOPIC: "Bilinmeyen veri türü.",
      INVALID_FIELDS: "En az bir alan seç.",
      INVALID_QUANTITY: "Adet 1 ile 1000 arasında olmalıdır.",
      INVALID_COUNTRY: "Geçersiz ülke.",
      GENERATE_FAILED: "Veri oluşturulamadı. Birazdan tekrar dene.",
      DOWNLOAD_FAILED: "İndirme başarısız oldu. Birazdan tekrar dene.",
      CREATE_FAILED: "Geçici API oluşturulamadı.",
      LIMIT_REACHED: "Azami 5 geçici API sınırına ulaştın. Önce birini sil.",
      RATE_LIMITED: "Çok fazla istek gönderildi. Birazdan tekrar dene.",
    },
  },
  preview: {
    docs: "Dokümantasyon",
    playground: "Playground",
    blurb: "Bu API'nin pratikte nasıl çalıştığını gösteren sade bir arayüz.",
    blurbFaHint: "",
    backToResource: "{name} kaynağına dön",
    search: "Ara",
    create: "Yeni kayıt",
    edit: "Düzenle",
    delete: "Sil",
    save: "Kaydet",
    saving: "Kaydediliyor…",
    deleting: "Siliniyor…",
    cancel: "İptal",
    fillSample: "Örnek doldur",
    noRecords: "Kayıt bulunamadı",
    loading: "Yükleniyor…",
    confirmDelete: "Bu kayıt silinsin mi?",
    confirmDeleteBody: "Bu işlem geri alınamaz.",
    networkError: "Ağ hatası",
    authDemoPassword: "Tüm varsayılan kullanıcılar aynı demo parolasını kullanır:",
    username: "Kullanıcı adı",
    password: "Parola",
    login: "Giriş yap",
    loginSuccess: "Giriş yapıldı.",
    logout: "Çıkış yap",
    getMe: "GET /me",
    token: "Token",
    user: "Kullanıcı",
    loginFirst: "Token almak için önce giriş yap",
    createdAt: "Oluşturulma tarihi",
    fieldLabels: {
      name: "Ad Soyad",
      username: "Kullanıcı adı",
      email: "E-posta",
      avatarUrl: "Avatar URL'si",
      role: "Rol",
      city: "Şehir",
      country: "Ülke",
      company: "Şirket",
      title: "Başlık",
      body: "İçerik",
      published: "Yayında",
      userId: "Kullanıcı ID",
      postId: "Gönderi ID",
      albumId: "Albüm ID",
      url: "URL",
      thumbnailUrl: "Küçük Resim URL'si",
      completed: "Tamamlandı",
      description: "Açıklama",
      price: "Fiyat",
      stock: "Stok",
      category: "Kategori",
      imageUrl: "Görsel URL'si",
      message: "Mesaj",
      type: "Tür",
      read: "Okundu",
      code: "Kod",
      capital: "Başkent",
      region: "Bölge",
      population: "Nüfus",
      currency: "Para Birimi",
      flagUrl: "Bayrak URL'si",
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
      teaser: "Geliştirme aşamasında — biçimlendirme, karşılaştırma ve dönüştürme araçları",
      hint: "/json — görünümü değiştirmek için bir araç seç",
      badge: "Geliştirme aşamasında",
      summary:
        "JSON Workbench (geliştirme aşamasında), JSON biçimlendirme, yapı karşılaştırma, arama ve dönüştürme için tarayıcı tabanlı bir araçtır. TypeScript, Zod, YAML, CSV ve yardımcı araçları destekler.",
      details: [
        "/json adresinde JSON Workbench'i aç ve anında geçiş yapmak için bir araç seç (?tool= parametresini de destekler).",
        "Temel araçlar: Biçimlendir, Ağaç, Ara, JSONPath ve Yapıyı Karşılaştır.",
        "Dönüştürmeler: TypeScript, Zod, JSON Schema, YAML ve CSV.",
        "Yardımcılar: Anahtarları Sırala, Boş Değerleri Temizle, Düzleştir, Kaçış Ekle, Onar, Alan Seç/Hariç Tut ve daha fazlası.",
        "Hâlâ aktif olarak geliştiriliyor; yeni araçlar ve iyileştirmeler eklenmeye devam edecek.",
      ],
    },
    "2026-09-19-image-generator": {
      title: "Görsel Oluşturucu",
      teaser: "İsteğe bağlı yer tutucu görsel URL'leri",
      hint: "/image-generator — SVG veya Fotoğraf seç ve URL'yi kopyala",
      summary:
        "URL parametreleriyle yer tutucu görseller üret. MockData SVG'lerini ve Picsum fotoğraflarını destekler; avatar, gönderi, banner ve benzeri boyutlar için hazır seçenekler sunar.",
      details: [
        "/image-generator üzerinde SVG veya Fotoğraf seç, genişlik ve yüksekliği ayarla ve URL'yi kopyala.",
        "Genel URL'ler varsayılan olarak rastgele görsel döndürür: SVG için /image/{w}/{h} veya fotoğraflar için ?type=real kullan.",
        "Aynı SVG renklerini veya fotoğrafı korumak için rastgele bir ?seed= değeri ver.",
        "URL'yi doğrudan bir img etiketine, CSS'e veya görsel alanına yapıştır.",
      ],
    },
    "2026-09-17-generator": {
      title: "Veri Oluşturucu",
      teaser: "Saniyeler içinde gerçekçi JSON",
      hint: "/generator — üretmek, kopyalamak veya API açmak için bir veri türü seç",
      summary:
        "Ön yüzün için hızlıca gerçekçi JSON oluştur. Veri türünü, alanları ve adedi seç; kopyala, indir veya geçici API olarak yayınla.",
      details: [
        "/generator sayfasında Kişiler, E-Ticaret, İçerik, Medya, İş Dünyası ve Konum için veri üret.",
        "POST gövdesi ve API kaydı biçimlerini destekler; FA için yerel Farsça veri sunar.",
        "Tarayıcıda tek seferde 1.000 kayda kadar üret; 'API Oluştur' geçici API sınırlarına uyar (500 kayıt / 64 KB).",
        "Seçimler ve üretilen veriler gezinme sırasında korunur (sayfa yenilemede sıfırlanır).",
      ],
    },
    "2026-09-16-temporary": {
      title: "Geçici API'ler",
      teaser: "JSON yapıştır ve geçici bir REST URL'si al",
      hint: "/temporary — herkese açık REST URL'si oluşturmak için JSON yapıştır",
      summary:
        "JSON yapıştırarak geçici ve herkese açık REST uç noktaları oluştur. Hesap gerekmez; tarayıcı başına en fazla 5 aktif API.",
      details: [
        "/temporary üzerinden 1 saat, 6 saat, 12 saat veya 24 saat geçerlilik süresiyle oluştur.",
        "Diğer uç noktalar gibi /api/t/… adresinde GET, POST, PATCH ve DELETE kullan.",
        "Tarayıcı başına en fazla 5 aktif API ve IP başına saatte en fazla 20 istek.",
        "Bağlantıyı parola gibi koru; süresi dolana kadar bağlantıya sahip herkes veriyi okuyabilir ve değiştirebilir.",
      ],
    },
    "2026-09-15-preview": {
      title: "Kaynak Önizlemeleri",
      teaser: "API'lere bağlı hafif arayüzler",
      hint: "/preview/users — tarayıcıda CRUD işlemlerini test et",
      summary:
        "Users, Posts ve Auth gibi kaynaklar için gerçek API'lere bağlı basit örnek ekranlar.",
      details: [
        "Bir kaynağın doküman sayfasından canlı önizlemeyi aç.",
        "Ortak demo verileri üzerinde okuma, arama, sayfalama, oluşturma, düzenleme ve silme işlemlerini dene.",
        "Auth önizlemesi giriş formu (sabit parola: password) ve token ile GET /me istekleri içerir.",
        "İstersen üstteki dil seçiciden Farsça örnek veriler yükle.",
      ],
    },
    "2026-09-14-lang-fa": {
      title: "Farsça Veri (?lang=fa)",
      teaser: "Yerelleştirilmiş Farsça örnek veriler",
      hint: "/api/users?lang=fa — Farsça veri için lang=fa ekle",
      summary:
        "Yerel Farsça adlar, kullanıcı adları, telefon numaraları ve metinler almak için uç noktaya ?lang=fa ekle.",
      details: [
        "Varsayılan dil İngilizcedir; geçiş yalnızca lang=fa sorgu parametresiyle yapılır (çerez veya Accept-Language kullanılmaz).",
        "FA yanıtları Content-Language: fa ve Vazirmatn yazı tipi bilgisi içerir.",
        "Listeleri, tekil kayıtları ve Farsça kullanıcı adlarıyla giriş yapmayı destekler.",
        "Üstte فارسی seçildiğinde Playground da otomatik olarak lang=fa ekler.",
      ],
    },
    "2026-09-12-playground": {
      title: "Playground",
      teaser: "Doğrudan tarayıcıdan API çağır",
      hint: "/playground — istek gönder ve JSON incele",
      summary:
        "Doğrudan tarayıcıdan API istekleri gönder, başarılı ve hatalı girişleri test et ve biçimlendirilmiş JSON yanıtlarını gör.",
      details: [
        "Kaynak ve işlemi seç, sorgu parametrelerini veya JSON gövdesini düzenle ve gönder.",
        "Auth girişinde Geçerli bilgiler / Hatalı bilgiler düğmeleriyle 200 ve 401 yanıtlarını kolayca karşılaştır.",
        "HTTP durum kodlarını, biçimli JSON'u ve koleksiyon sayfalama bilgilerini incele.",
        "Kaynak bazlı istekler ve son yanıt gezinme boyunca saklanır (yenilemede sıfırlanır).",
      ],
    },
    "2026-09-10-auth": {
      title: "Mock Auth",
      teaser: "Bearer token ile giriş ve kimlik doğrulama",
      hint: "/api/auth/login — parola her zaman password",
      summary:
        "/me için Bearer token almak amacıyla /api/auth/login adresine POST ile varsayılan bir kullanıcı ve parola gönder.",
      details: [
        "Tüm varsayılan kullanıcılar ortak password demo parolasını kullanır.",
        "Başarılı istekte mock bir Bearer token ve user nesnesi (id, name, username, email, role) döner.",
        "Hatalı parola veya bilinmeyen kullanıcı, net bir hata yapısıyla 401 döndürür.",
        "Mevcut kullanıcıyı almak için token'ı GET /api/auth/me isteğinde Authorization: Bearer <token> başlığıyla gönder.",
      ],
    },
    "2026-09-08-resources": {
      title: "Canlı REST Kaynakları",
      teaser: "Users, Posts ve daha fazlasında tam CRUD",
      hint: "/docs#resources — mevcut uç noktaları incele",
      summary:
        "Mevcut kaynaklar arasında Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications ve Countries tam CRUD ve sayfalama desteğiyle yer alır.",
      details: [
        "Sayfalanmış listelerde page, limit, total ve totalPages içeren { data, pagination } yapısı kullanılır.",
        "Arama, sıralama, filtreleme, simüle edilmiş gecikme ve zorunlu hata kodu sorgu parametrelerini destekler.",
        "Ortak üretim veritabanı her gün sıfırlanır; demo ve test için kullan, kalıcı saklama için değil.",
        "Postman, Swagger veya yapay zeka araçları için makine tarafından okunabilir belirtimi /openapi.json adresinden indir.",
      ],
    },
  },
  catalog: {
    auth: {
      title: "Auth",
      summary:
        "Kullanıcı adı ve parola ile mock giriş uç noktası. Başarıda Bearer token, yetkisiz erişimde 401 döndürür.",
    },
    users: {
      title: "Users",
      summary: "Arama, role göre filtreleme ve sayfalama destekli mock kullanıcı CRUD API'si.",
    },
    posts: {
      title: "Posts",
      summary: "Kullanıcılarla ilişkili, etiket ve yayın durumu destekli blog yazıları.",
    },
    comments: {
      title: "Comments",
      summary: "Ad, e-posta ve içerik alanlarına sahip gönderi yorumları.",
    },
    albums: {
      title: "Albums",
      summary: "Kullanıcılara bağlı albümler; fotoğraflar albumId üzerinden bir albüme referans verir.",
    },
    photos: {
      title: "Photos",
      summary: "url ve thumbnailUrl alanlarına sahip albüm içi görseller.",
    },
    todos: {
      title: "Todos",
      summary: "Tamamlanma durumuna sahip, kullanıcılarla ilişkili basit görevler.",
    },
    products: {
      title: "Products",
      summary: "Fiyat, stok, kategori ve imageUrl alanlarına sahip ürün kataloğu.",
    },
    notifications: {
      title: "Notifications",
      summary: "Tür ve okunma durumuna sahip kullanıcı bildirimleri.",
    },
    countries: {
      title: "Countries",
      summary: "ISO kodları, bölge, nüfus ve bayrak bilgisi içeren ülke verileri.",
    },
  },
};

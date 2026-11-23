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

export const id: Messages = {
  common: {
    home: "Beranda",
    docs: "Dokumentasi",
    playground: "Playground",
    contact: "Kontak",
    preview: "Pratinjau",
    search: "Cari",
    loading: "Memuat…",
    save: "Simpan",
    saving: "Menyimpan…",
    cancel: "Batal",
    create: "Buat",
    edit: "Edit",
    delete: "Hapus",
    searchPlaceholder: "Cari API…",
    noResults: "Tidak ada hasil yang cocok",
    new: "Baru",
    inDevelopment: "Dalam pengembangan",
    actions: "Aksi",
    copy: "Salin",
    copied: "Tersalin",
    live: "Aktif",
    open: "Buka",
    tryIt: "Coba",
    learnMore: "Pelajari lebih lanjut",
    back: "Kembali",
    close: "Tutup",
    yes: "Ya",
    no: "Tidak",
    name: "Nama",
    email: "Email",
    message: "Pesan",
    send: "Kirim",
    sending: "Mengirim…",
    networkError: "Terjadi gangguan jaringan",
    temporary: "API Sementara",
    temporaryBadge: "Mulai cepat",
    generator: "Generator Data",
    imageGenerator: "Generator Gambar",
    jsonWorkbench: "Meja Kerja JSON",
  },
  header: {
    primaryNav: "Navigasi utama",
    whatsNew: "Apa yang baru",
    whatsNewTitle: "Apa yang baru",
    whatsNewSubtitle: "Fitur dan pembaruan terbaru",
    latest: "Pembaruan terbaru",
    contact: "Tentang & Kontak",
    menu: "Menu",
    openMenu: "Buka menu",
    appearance: "Tampilan",
    lightMode: "Aktifkan mode terang",
    darkMode: "Aktifkan mode gelap",
    light: "Terang",
    dark: "Gelap",
    apiLangGroup: "Bahasa",
    english: "English",
    persian: "فارسی",
    github: "GitHub",
    githubStars: "GitHub — Beri bintang pada repo",
  },
  home: {
    tagline:
      "REST mock API gratis dengan data JSON yang terasa nyata. Bangun prototipe tanpa backend, uji autentikasi, dan tambahkan endpoint secara instan.",
    taglineNote: "",
    resourcesTitle: "Resource",
    resourcesBlurb:
      "10 resource REST API siap pakai lengkap dengan dokumentasi dan contoh. Di lingkungan produksi, data memakai database demo bersama.",
    searchLabel: "Cari API dan endpoint",
    searchPlaceholder: "Cari users, posts, auth…",
    temporaryCtaTitle: "API Sementara",
    temporaryCtaBody:
      "Buat API sementara langsung dari JSON yang ditempel atau dari generator. Perlakukan URL seperti password. Maksimal 5 API sementara aktif per browser.",
    temporaryCtaLink: "Buat API sementara",
  },
  notFound: {
    title: "Halaman tidak ditemukan",
    body: "Halaman ini tidak tersedia di MockData. Kembali ke beranda atau buka dokumentasi.",
    home: "Beranda",
    docs: "Dokumentasi",
  },
  blog: {
    title: "Blog",
    description:
      "Artikel dan panduan seputar mock data, JSON, API, dan pengembangan frontend.",
    all: "Semua",
    emptyTitle: "Belum ada artikel",
    emptyBody: "Artikel baru akan segera terbit — silakan cek kembali nanti.",
    emptyCategoryTitle: "Kategori ini masih kosong",
    emptyCategoryBody: "Pilih kategori lain atau lihat semua artikel.",
    readingTime: "Waktu baca {n} menit",
    previousPage: "Sebelumnya",
    nextPage: "Berikutnya",
    pageStatus: "Halaman {page} dari {total}",
    paginationNav: "Navigasi halaman",
    categoriesNav: "Kategori blog",
    backToBlog: "Blog",
    previousArticle: "Artikel sebelumnya",
    nextArticle: "Artikel berikutnya",
    relatedArticles: "Artikel terkait",
    categories: {
      news: "Berita",
      "mock-data": "Mock data",
      json: "JSON",
      api: "API",
      frontend: "Frontend",
    },
  },
  contact: {
    title: "Hubungi Kami",
    intro:
      "Punya pertanyaan, masukan, atau ide fitur? Kirim pesan lewat formulir di bawah atau hubungi langsung via email:",
    name: "Nama",
    email: "Email",
    topic: "Topik",
    message: "Pesan",
    send: "Kirim",
    sending: "Mengirim…",
    success: "Pesan Anda sudah terkirim. Terima kasih telah menghubungi kami — kami akan segera membalas.",
    chooseTopic: "Silakan pilih salah satu topik.",
    pickTopic: "Tentang apa pesan Anda?",
    topics: {
      question: "Pertanyaan",
      bug: "Laporan bug",
      feature: "Saran fitur",
      other: "Lainnya",
    },
  },
  docs: {
    title: "Dokumentasi",
    navLabel: "Daftar isi dokumentasi",
    intro:
      "MockData menyediakan resource REST tiruan dalam format JSON. Anda bisa memanggil endpoint terbuka, menguji alur login, mengirim request di Playground, membuat dataset di /generator, menghasilkan gambar placeholder di /image-generator, memakai JSON Workbench di /json, serta menjalankan API sementara. Resource katalog di produksi berjalan di atas database bersama (lihat bagian «Data Bersama» untuk detailnya).",
    toc: {
      intro: "Pengantar",
      whatsNew: "Apa yang baru",
      temporary: "API Sementara",
      generator: "Generator Data",
      imageGenerator: "Generator Gambar",
      jsonWorkbench: "Meja Kerja JSON",
      sharedData: "Data Bersama",
      language: "Bahasa",
      resources: "Resource",
      openapi: "OpenAPI",
      requests: "Request",
      errors: "Error",
      rateLimit: "Rate Limit",
      reset: "Reset Data",
    },
    whatsNewTitle: "Apa yang baru",
    whatsNewBlurb:
      "Pembaruan dari yang terbaru hingga paling awal untuk developer. Klik kartu mana pun untuk melihat detailnya — daftar yang sama juga bisa diakses lewat ikon lonceng di atas.",
    temporaryTitle: "API Sementara",
    temporaryBody:
      "Butuh endpoint REST sementara dengan data JSON Anda sendiri? API sementara terpisah dari katalog bersama: tempel JSON Anda dan pilih masa berlaku untuk mendapatkan URL publik /api/t/…, atau buat langsung lewat tombol «Buat API» di generator.",
    temporaryBullets: [
      "Buat di browser pada /temporary tanpa perlu login (bisa juga dibuka lewat «Buat API» di /generator).",
      "Pilih durasi kedaluwarsa: 1 jam, 6 jam, 12 jam, atau 24 jam (default 12 jam).",
      "Kirim request GET, POST, PATCH, dan DELETE ke /api/t/… untuk koleksi maupun record per item.",
      "Perlakukan URL seperti password: siapa pun yang punya tautan ini bisa membaca dan mengubah data hingga masa berlakunya habis.",
      "Request ke API sementara yang sudah kedaluwarsa akan mengembalikan HTTP 410.",
    ],
    temporaryLimitsTitle: "Batasan API Sementara",
    temporaryLimitsBullets: [
      "Maksimal 5 API sementara aktif per browser.",
      "Maksimal 20 pembuatan API per 1 jam bergulir dari satu IP (melebihi batas akan memicu HTTP 429).",
      "Ukuran payload JSON maksimal 64 KB.",
      "Maksimal 8 tingkat nesting, 500 item array, dan 200 key per object.",
      "Rate limit global /api juga tetap berlaku (sekitar 60 request per menit per IP).",
    ],
    generatorTitle: "Generator Data",
    generatorBody:
      "Siapkan data JSON yang realistis untuk frontend tanpa menulis contoh secara manual. Semuanya berjalan di browser dan hasilnya bisa disalin, diunduh, atau dijadikan API sementara.",
    generatorBullets: [
      "Buka /generator dan pilih topik dari kategori People, E-Commerce, Content, Media, Business, atau Location.",
      "Beralih antara format POST payload (tanpa id dan timestamp) dan API record (lengkap dengan id, createdAt, dan updatedAt).",
      "Gunakan data bahasa Persia terlokalisasi untuk FA atau data bahasa Inggris lintas negara untuk EN.",
      "Hasilkan hingga 1.000 record sekaligus di browser; fitur «Buat API» mengikuti batas API sementara (500 record / 64 KB).",
      "Pengaturan pilihan dan data yang sudah dibuat tetap tersimpan saat berpindah halaman di aplikasi (akan direset jika halaman dimuat ulang penuh).",
    ],
    imageGeneratorTitle: "Generator Gambar",
    imageGeneratorBody:
      "Buat URL gambar placeholder kustom untuk antarmuka Anda. Pilih gambar SVG MockData atau foto acak Picsum, atur lebar dan tingginya, lalu salin URL untuk dipakai di <img>, CSS, atau field gambar.",
    imageGeneratorBullets: [
      "Pilih antara grafis SVG atau foto asli di /image-generator.",
      "Format URL publiknya adalah /image/{width}/{height} untuk SVG, atau tambahkan ?type=real untuk foto.",
      "Secara default hasilnya acak; kirim parameter kustom ?seed= agar warna SVG atau foto tetap konsisten.",
      "Tersedia ukuran siap pakai untuk Avatar, Thumbnail, Profile, Square, Post, Cover, Banner, dan Story.",
    ],
    jsonWorkbenchTitle: "JSON Workbench",
    jsonWorkbenchBody:
      "JSON Workbench (dalam pengembangan) adalah toolkit berbasis browser untuk memformat, membandingkan, mencari, dan mengonversi JSON saat membangun antarmuka.",
    jsonWorkbenchBullets: [
      "Buka JSON Workbench di /json lalu pilih tool untuk langsung mengganti tampilan (mendukung parameter ?tool=).",
      "Tool inti: Format, Tree, Search, JSONPath, dan Compare Structure.",
      "Converter: TypeScript, Zod, JSON Schema, YAML, dan CSV.",
      "Utilitas: Sort Keys, Remove Empty, Flatten/Unflatten, Escape/Repair, Pick/Omit field, dan lainnya.",
      "Berjalan sepenuhnya di browser — JSON Anda tidak dikirim ke server.",
      "Sedang dalam pengembangan aktif — tool dan penyempurnaan baru akan hadir di pembaruan berikutnya.",
    ],
    sharedDataTitle: "Data Bersama",
    sharedDataBody:
      "Semua pengguna memakai database live yang sama: setiap data yang Anda buat, ubah, atau hapus langsung terlihat oleh pengguna lain. Di produksi, database direset setiap hari ke data awal melalui GET /api/cron/reset. Cocok untuk prototipe dan demo, bukan untuk data permanen atau sensitif.",
    languageTitle: "Bahasa",
    languageBody:
      "Secara default, teks resource dikembalikan dalam bahasa Inggris. Tambahkan query parameter lang=fa untuk mendapatkan nama, username, email, nomor telepon, dan frasa bahasa Persia. Cookie atau header Accept-Language tidak dipakai — hanya query parameter yang berlaku. Pengalih bahasa di bilah atas (English | فارسی) mengatur Playground sekaligus Preview.",
    languageBullets: [
      "Contoh: GET /api/users?lang=fa",
      "Respons FA menyertakan header Content-Language: fa beserta petunjuk font (Vazirmatn).",
      "Memilih فارسی di atas akan mengubah arah teks menjadi kanan-ke-kiri (RTL) dan Playground otomatis menambahkan lang=fa.",
    ],
    resourcesTitle: "Resource",
    resourcesBlurb:
      "Gambaran endpoint yang sudah tersedia maupun yang segera hadir.",
    colResource: "Resource",
    colBasePath: "Base Path",
    colStatus: "Status",
    colDocs: "Dokumentasi",
    statusLive: "Aktif",
    statusDev: "Dalam pengembangan",
    statusSoon: "Segera hadir",
    openapiTitle: "OpenAPI",
    openapiBody:
      "Spesifikasi siap baca mesin untuk seluruh endpoint yang tersedia (Auth, Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, Countries, serta reset admin). Praktis diimpor ke Postman, Swagger UI, atau tool AI.",
    download: "Unduh",
    requestsTitle: "Request",
    requestsBody:
      "Endpoint koleksi mengembalikan data dan pagination; sementara record tunggal mengembalikan { data }.",
    errorsTitle: "Error",
    errorsBody:
      "Respons error berisi object error. Kode status umum meliputi 400 untuk request tidak valid, 401 saat belum terautentikasi atau gagal login, 404 jika record tidak ditemukan, 429 saat melewati rate limit, dan 500 untuk error server. Untuk menguji penanganan error di client, simulasikan kode dengan menambahkan ?status=500 (rentang 400–599).",
    rateLimitTitle: "Rate Limit",
    rateLimitBody:
      "Agar layanan tetap stabil bagi semua orang, request ke /api/* dibatasi sekitar {limit} per menit per IP. Jika batas terlampaui, server mengembalikan HTTP 429 (Too Many Requests); Anda bisa memantau sisa kuota lewat header X-RateLimit.",
    resetTitle: "Reset Data",
    resetBody:
      "Semua pengunjung memakai database demo yang sama. Di produksi, database direset otomatis setiap 24 jam, tetapi Anda juga bisa mengosongkan dan mengisi ulang tabel demo dengan seed data menggunakan secret admin di bawah ini.",
    resetPanel: {
      intro: "Masukkan secret admin untuk mereset dan mengisi ulang tabel demo dengan seed data.",
      placeholder: "Secret admin",
      button: "Reset sekarang",
      resetting: "Mereset…",
      needSecret: "Masukkan secret admin terlebih dahulu.",
      confirm: "Yakin ingin mereset dan mengisi ulang tabel demo dengan seed data?",
      networkError: "Terjadi gangguan jaringan. Pastikan server sedang berjalan.",
      donePrefix: "Reset selesai",
    },
    colIndex: "#",
  },
  resourceDocs: {
    endpoints: "Endpoint",
    queryParams: "Query Parameter",
    examples: "Contoh Request",
    response: "Contoh Respons",
    tryExample: "Coba",
    preview: "Pratinjau",
    playground: "Playground",
    backToResources: "Kembali ke daftar resource",
  },
  playground: {
    title: "Playground",
    blurb:
      "Kirim request sungguhan ke MockData API dan lihat respons JSON langsung di browser. Request terakhir tiap resource tetap tersimpan saat Anda berpindah halaman.",
    resource: "Resource",
    action: "Aksi",
    send: "Kirim",
    sending: "Mengirim…",
    response: "Respons",
    request: "Request",
    body: "Body",
    query: "Query",
    headers: "Header",
    correct: "Kredensial valid",
    wrong: "Kredensial salah",
    password: "Password",
    user: "User",
    pickUser: "Pilih user",
    loadError: "Gagal memuat opsi",
    emptyResponse: "Belum ada respons",
    startHint: "Pilih resource lalu kirim request.",
    types: "TS",
    json: "JSON",
  },
  temporary: {
    title: "API Sementara",
    blurb: "Tempel JSON dan jalankan API sementara dalam hitungan detik.",
    privacyNote:
      "Perlakukan URL seperti password: siapa pun yang punya tautan ini bisa membaca dan mengubah data hingga masa berlakunya habis. Maksimal 5 API sementara aktif per browser.",
    jsonLabel: "JSON",
    durationLabel: "Durasi",
    duration1h: "1 jam",
    duration6h: "6 jam",
    duration12h: "12 jam",
    duration24h: "24 jam",
    checkJson: "Cek JSON",
    jsonValid: "Sudah valid — API siap dibuat.",
    jsonHint: "Cek JSON dulu atau langsung buat API.",
    create: "Buat API",
    creating: "Membuat…",
    acceptFix: "Terapkan perbaikan & buat",
    rejectFix: "Lanjut edit",
    fixedPreview: "Kami memperbaiki beberapa masalah secara otomatis. Tinjau hasilnya lalu buat.",
    myApis: "API Sementara Saya",
    emptyList: "Belum ada API sementara yang aktif.",
    copyUrl: "Salin",
    delete: "Hapus",
    deleteAll: "Hapus semua",
    deleting: "…",
    confirmDelete: "Hapus API ini?",
    confirmDeleteBody: "Tautan ini tidak akan bisa dipakai lagi.",
    confirmDeleteAll: "Hapus semua API?",
    confirmDeleteAllBody: "Semua tautan pada daftar ini tidak akan bisa dipakai lagi.",
    cancel: "Batal",
    limitReached: "Batas maksimal 5 API tercapai.",
    limitReachedBody: "Hapus salah satu API di bawah atau tunggu hingga kedaluwarsa.",
    createdTitle: "API berhasil dibuat",
    openApi: "Buka",
    slotsLabel: "{n} dari 5",
    maxActive: "",
    sampleJson: `[
  { "id": "1", "firstName": "Budi", "lastName": "Santoso", "role": "admin" },
  { "id": "2", "firstName": "Siti", "lastName": "Rahmawati", "role": "member" },
  { "id": "3", "firstName": "Rizky", "lastName": "Pratama", "role": "member" }
]`,
    issues: {
      EMPTY: "Tempel object atau array JSON.",
      INVALID_JSON: "JSON tidak valid. Periksa tanda koma, tanda kutip, dan kurung.",
      TOO_LARGE: "Ukuran JSON melebihi batas yang diizinkan ({max} KB).",
      NOT_OBJECT_OR_ARRAY: "Level teratas harus berupa object { } atau array [ ].",
      TOO_DEEP: "Tingkat nesting terlalu dalam (maksimal {max}).",
      ARRAY_TOO_LONG: "Panjang array melebihi batas yang diizinkan (maksimal {max} item).",
      TOO_MANY_KEYS: "Terlalu banyak key dalam satu object (maksimal {max}).",
      UNSAFE_KEY: "Key tidak aman «{key}» tidak diizinkan.",
      AUTO_FIXED: "Koma berlebih di akhir atau key tidak aman telah dihapus.",
    },
  },
  imageGenerator: {
    title: "Generator Gambar",
    blurb:
      "Buat gambar placeholder kustom untuk proyek Anda. Salin URL SVG MockData atau foto acak untuk dipakai di <img>, CSS, atau field gambar.",
    modeSvg: "SVG",
    modeReal: "Foto asli",
    width: "Lebar",
    height: "Tinggi",
    generate: "Buat URL",
    generating: "Membuat…",
    yourUrl: "URL API Anda",
    preview: "Pratinjau",
    useInProject: "Pakai di proyek",
    tabUrl: "URL",
    tabHtml: "HTML",
    tabCss: "CSS",
    tabJs: "JavaScript",
    tabCurl: "cURL",
    readySizes: "Ukuran siap pakai",
    sizes: {
      avatar: "Avatar",
      thumbnail: "Thumbnail",
      profile: "Profil",
      square: "Persegi",
      post: "Post",
      cover: "Cover",
      banner: "Banner",
      story: "Story",
    },
  },
  jsonWorkbench: {
    title: "JSON Workbench",
    blurb:
      "Tempel JSON sekali saja lalu berpindah antar tool Format, Search, Convert, dan lainnya tanpa menempel ulang.",
    toolNavLabel: "Tool Workbench",
    source: {
      title: "JSON Sumber",
      hint: "Tempel sekali di sini — semua tool akan memakai JSON ini.",
      sample: "Muat contoh",
      valid: "JSON valid.",
      needJson: "Tempel JSON di sisi kiri terlebih dahulu.",
      fixFirst: "Perbaiki error sintaks pada JSON sumber terlebih dahulu.",
      pickAction: "Apa yang ingin Anda lakukan?",
      useResult: "Jadikan hasil sebagai JSON sumber",
      diffHint: "JSON sumber adalah Sisi A; tempel JSON B di bawah untuk membandingkan.",
      escapedInput: "String yang di-escape",
      schemaInput: "JSON Schema",
      fromSchemaNote:
        "Tempel JSON Schema di bawah untuk membuat contoh JSON lalu menerapkannya ke sumber.",
    },
    categories: {
      core: "Inti",
      transform: "Konversi",
      utility: "Utilitas",
    },
    labels: {
      input: "Input",
      output: "Output",
      tree: "Tree",
      matches: "Kecocokan",
      jsonA: "JSON A",
      jsonB: "JSON B",
      diffResult: "Perbedaan",
      jsonpath: "JSONPath",
      result: "Hasil ({count})",
    },
    actions: {
      format: "Format",
      minify: "Minify",
      showTree: "Tampilkan tree",
      search: "Cari",
      clearSearch: "Hapus pencarian",
      replace: "Ganti",
      replaceAll: "Ganti semua",
      prevMatch: "Sebelumnya",
      nextMatch: "Berikutnya",
      compare: "Bandingkan",
      run: "Jalankan",
      runPath: "Jalankan path",
      toTypescript: "Ubah ke TypeScript",
      toZod: "Ubah ke Zod",
      toSchema: "Ubah ke Schema",
      swapDirection: "Tukar arah",
      sortKeys: "Urutkan key",
      removeEmpty: "Hapus nilai kosong",
      flatten: "Flatten",
      unflatten: "Unflatten",
      escape: "Escape",
      unescape: "Unescape",
      repair: "Perbaiki JSON",
      fromSchema: "Buat contoh",
      extractKeys: "Ekstrak key",
      extractValues: "Ekstrak value",
      pick: "Pilih field",
      omit: "Buang field",
      compareStructure: "Bandingkan struktur",
      clear: "Bersihkan",
      expandAll: "Perluas semua",
      collapseAll: "Ciutkan semua",
      copyPath: "Salin path",
      copyValue: "Salin value",
    },
    errors: {
      empty: "Tempel JSON.",
      invalid: "JSON tidak valid.",
      unexpectedEnd: "Akhir JSON tidak terduga.",
      unexpectedToken: "Token tidak terduga: {token}",
      expectedPropertyName: "Nama properti harus menggunakan tanda kutip ganda.",
      expectedCommaOrBrace: "Diharapkan ',' atau '}' setelah nilai.",
      expectedCommaOrBracket: "Diharapkan ',' atau ']' setelah item array.",
      expectedColon: "Diharapkan ':' setelah nama properti.",
      unterminatedString: "String belum ditutup.",
      badControlChar: "Terdapat karakter kontrol yang tidak valid di dalam string.",
      badEscape: "Urutan escape tidak valid di dalam string.",
      trailingChar: "Ada karakter berlebih setelah nilai JSON.",
      objectKeyExpected: "Diharapkan key object di sini.",
      unexpectedCharacter: "Karakter tidak terduga: {char}",
      invalidCharacter: "Karakter tidak valid: {char}",
      invalidUnicode: "Escape Unicode tidak valid: {chars}",
      couldNotRepair: "JSON ini tidak dapat diperbaiki secara otomatis.",
      atLineColumn: "Baris {line}, kolom {column}",
      atLine: "Baris {line}",
      atPosition: "Posisi {position}",
    },
    types: {
      object: "Object",
      array: "Array",
      string: "String",
      number: "Number",
      boolean: "Boolean",
      null: "null",
    },
    validate: {
      idleHint: "Tempel JSON untuk memeriksa kesesuaiannya dengan sintaks standar.",
      validTitle: "JSON valid",
      validBody: "Tipe root: {type}",
      invalidTitle: "JSON tidak valid",
    },
    tree: {
      idleTitle: "Tree akan tampil di sini",
      idleBody: "Tempel JSON di sisi kiri lalu klik «Tampilkan tree».",
      errorTitle: "Tidak dapat membuat tree",
      errorBody: "Perbaiki error sintaks JSON lalu coba lagi.",
    },
    search: {
      query: "Cari",
      replaceWith: "Ganti dengan",
      matchCount: "{current} dari {total}",
      noMatches: "Tidak ada yang cocok",
      noMatchesBody: "Tidak ditemukan kecocokan pada key maupun value.",
      idleTitle: "Hasil pencarian akan tampil di sini",
      idleBody: "Masukkan teks untuk mencari key dan value lalu klik «Cari».",
      errorTitle: "Pencarian belum tersedia",
      errorBody: "Perbaiki error sintaks JSON sebelum melakukan pencarian.",
      kindKey: "Key",
      kindValue: "Value",
      activeHint: "{kind} · {path}",
      replacedCount: "{count} item berhasil diganti.",
    },
    diff: {
      idleTitle: "Perbedaan akan tampil di sini",
      idleBody: "Isi kedua sisi — JSON A dan JSON B — untuk membandingkan.",
      identical: "Tidak ada perbedaan. Kedua dokumen memiliki struktur dan nilai yang sama.",
      added: "Ditambahkan / hanya ada di B",
      removed: "Dihapus / hanya ada di A",
      changed: "Diubah",
      sideEmpty: "Bagian ini kosong.",
      emptyA: "JSON A kosong.",
      emptyB: "JSON B kosong.",
      bothInvalid: "Keduanya — JSON A dan JSON B — tidak valid.",
    },
    jsonpath: {
      whatIs:
        "JSONPath membantu Anda mengambil nilai tertentu dari JSON bersarang — mirip seperti CSS selector untuk data. Klik salah satu contoh di bawah untuk memasukkan ekspresi.",
      hintTitle: "Panduan singkat sintaks",
      hintBody: `$              Dokumen root
.users         Nama properti
[*]            Semua elemen array
[0]            Elemen pertama array`,
      idleTitle: "Hasil query akan tampil di sini",
      idleBody: "Masukkan ekspresi path lalu jalankan query.",
      errorTitle: "Query gagal dijalankan",
      errorBody: "Perbaiki error pada JSON atau path lalu coba lagi.",
      noResults: "Tidak ada hasil untuk path ini.",
      emptyPath: "Masukkan ekspresi JSONPath.",
    },
    transform: {
      tsIdleTitle: "Tipe TypeScript akan tampil di sini",
      tsIdleBody: "Tempel JSON untuk menghasilkan tipe TypeScript.",
      zodIdleTitle: "Skema Zod akan tampil di sini",
      zodIdleBody: "Tempel JSON untuk menghasilkan skema Zod.",
      schemaExplain: "JSON ↔ Schema",
      schemaUse:
        "Buat JSON Schema dari JSON sumber atau hasilkan contoh JSON dari schema.",
      schemaIdleTitle: "JSON Schema akan tampil di sini",
      schemaIdleBody: "Tempel JSON untuk menghasilkan JSON Schema.",
      yamlIdleTitle: "YAML akan tampil di sini",
      yamlIdleBody: "Mengonversi JSON sumber ke format YAML.",
      yamlToJsonIdle: "Tempel YAML di atas untuk dikonversi ke JSON sumber.",
      yamlApplied: "Berhasil dikonversi dan diterapkan ke JSON sumber.",
      csvIdleTitle: "CSV akan tampil di sini",
      csvIdleBodyJson:
        "Ubah satu object, array berisi object, atau object berlist dari JSON sumber menjadi CSV.",
      csvIdleBodyCsv: "Tempel CSV dengan baris header untuk diubah menjadi JSON.",
      csvToJsonIdle: "Tempel CSV di atas untuk dikonversi ke JSON sumber.",
      csvApplied: "Berhasil dikonversi dan diterapkan ke JSON sumber.",
      csvUnsupported: "Struktur JSON ini tidak dapat dikonversi ke CSV.",
    },
    utilities: {
      sortAsc: "A → Z",
      sortDesc: "Z → A",
      sortIdleTitle: "Siap diurutkan",
      sortIdleBody: "Pilih A → Z atau Z → A untuk melihat key yang sudah diurutkan di output.",
      sortApplied: "Key telah diurutkan. Lihat hasilnya di bawah.",
      removeOptions: "Nilai kosong yang akan dihapus",
      removeNull: "null",
      removeEmptyString: '""',
      removeEmptyArray: "[]",
      removeEmptyObject: "{}",
      removeNullLabel: "null",
      removeEmptyStringLabel: "String kosong",
      removeEmptyArrayLabel: "Array kosong",
      removeEmptyObjectLabel: "Object kosong",
      removePreserveHint: "false dan 0 tetap dipertahankan dan tidak dihapus.",
      removeIdleTitle: "JSON yang sudah dibersihkan akan tampil di sini",
      removeIdleBody: "Pilih nilai yang ingin dihapus lalu jalankan.",
      nestedLabel: "Bersarang",
      flatLabel: "Flat",
      flattenHint: "Mengubah object bersarang menjadi key terpisah titik (misalnya address.city, skills.0).",
      flattenUse:
        "Berguna saat mengekspor ke spreadsheet, file .env, indeks pencarian, atau API yang membutuhkan dictionary datar.",
      flattenIdleTitle: "Siap di-flatten",
      flattenIdleBody: "Key bersarang akan tampil sebagai path terpisah titik pada output.",
      flattenApplied: "Berhasil di-flatten. Lihat hasilnya di bawah.",
      unflattenHint: "Mengubah path terpisah titik menjadi object bersarang dan segmen angka menjadi array.",
      unflattenUse:
        "Berguna ketika Anda ingin mengembalikan key datar seperti user.name atau skills.0 menjadi JSON bersarang biasa.",
      unflattenIdleTitle: "JSON bersarang akan tampil di sini",
      unflattenIdleBody: "Tempel object dengan key terpisah titik untuk mengembalikan struktur bersarang.",
      escapeIdleTitle: "String yang di-escape akan tampil di sini",
      escapeIdleBody: "Meng-escape JSON agar aman disematkan di dalam string literal.",
      escapeHint:
        'Mengubah JSON menjadi satu string yang di-escape sehingga tanda kutip dan baris baru aman disisipkan ke teks lain.',
      escapeUse:
        "Membantu mencegah tanda kutip luar terputus saat menempelkan JSON ke kode, environment variable, atau log.",
      unescapeIdleTitle: "JSON yang di-unescape akan tampil di sini",
      unescapeIdleBody: "Tempel string JSON yang di-escape untuk mengembalikan JSON aslinya.",
      repairHint:
        "Memperbaiki JSON yang rusak, terpotong, berkomentar, atau tidak lengkap langkah demi langkah.",
      repairUse:
        "Menangani trailing comma, tanda kutip/koma/kurung yang hilang, komentar, code fence, literal Python/JS, JSONP, tipe MongoDB, NDJSON, potongan terpotong, dan sisa ketikan saat mengedit.",
      repairAlreadyValid: "JSON sudah valid — hanya pemformatan yang diperbarui.",
      repairFormatted: "Terformat.",
      repairReady: "Perbaikan otomatis siap.",
      repairApplied: "Berhasil diperbaiki.",
      repairAppliedToSource: "Diterapkan ke JSON sumber.",
      repairFailedTitle: "Tidak dapat diperbaiki sepenuhnya",
      repairFailedAt: "{message} ({line}:{column})",
      repairPreview: "Pratinjau perbaikan",
      repairFixes: {
        "trailing-commas": "Trailing comma",
        "single-quotes": "Tanda kutip tunggal",
        "smart-quotes": "Smart quote",
        "unquoted-keys": "Key tanpa tanda kutip",
        "missing-commas": "Koma yang hilang",
        "missing-brackets": "Kurung yang belum ditutup",
        comments: "Komentar",
        "code-fence": "Code fence",
        "python-literals": "Literal Python",
        "js-undefined": "undefined → null",
        jsonp: "Wrapper JSONP",
        "escaped-string": "String JSON ter-escape",
        mongodb: "Tipe MongoDB",
        ndjson: "NDJSON → array",
        ellipsis: "Elipsis (…)",
        "string-concat": "Penggabungan string",
        whitespace: "Spasi & baris baru",
        truncated: "Input terpotong / tidak lengkap",
        "mid-edit-junk": "Sisa teks saat mengedit",
      },
      repairIdleTitle: "JSON yang diperbaiki akan tampil di sini",
      repairIdleBody:
        "Tempel potongan tidak lengkap atau data mirip JSON ke JSON sumber untuk melihat pratinjau.",
      fromSchemaHint:
        "Membuat contoh JSON dari JSON Schema berdasarkan type, properties, required, items, enum, dan default.",
      fromSchemaIdleTitle: "Contoh JSON akan tampil di sini",
      fromSchemaIdleBody: "Tempel JSON Schema di bawah untuk membuat contoh.",
      extractHint:
        'Mengekstrak leaf path beserta nilainya (misalnya { path: "address.city", value: "Jakarta" }).',
      extractIdleTitle: "Key dan value yang diekstrak akan tampil di sini",
      extractIdleBody: "Pilih field di atas untuk mendapatkan pasangan path dan value.",
      extractKeysHint: "Menampilkan key bersarang sebagai path terpisah titik (serta indeks array seperti .0).",
      extractKeysIdleTitle: "Key yang diekstrak akan tampil di sini",
      extractKeysIdleBody: "Tempel JSON untuk mengumpulkan semua key.",
      extractValuesHint: "Mengumpulkan semua leaf value (primitif dan null).",
      extractValuesIdleTitle: "Value yang diekstrak akan tampil di sini",
      extractValuesIdleBody: "Tempel JSON untuk mengumpulkan semua value.",
      fieldsLabel: "Field dari JSON sumber",
      fieldsClickHint:
        "Klik path untuk memilih. Properti bersarang dipisahkan tanda titik.",
      fieldsSelectAll: "Pilih semua",
      fieldsClear: "Kosongkan pilihan",
      fieldsEmpty: "Tidak ada field yang bisa dipilih pada JSON ini.",
      pickHint: "Hanya mempertahankan field yang dipilih. Klik path pada daftar di bawah.",
      pickIdleTitle: "Hasil akan tampil di sini",
      pickIdleBody: "",
      omitHint: "Menghapus field yang dipilih. Klik path pada daftar di bawah.",
      omitIdleTitle: "Hasil akan tampil di sini",
      omitIdleBody: "",
      compareHint: "Membandingkan struktur dua dokumen JSON secara berdampingan tanpa mempermasalahkan perbedaan nilai.",
      compareUse:
        "Key yang hilang di A ditandai merah, key tambahan di B ditandai hijau, dan perbedaan tipe ditandai kuning.",
      compareBack: "Kembali ke Workbench",
      compareIdleTitle: "Masukkan dua dokumen JSON",
      compareIdleBody: "Isi kedua sisi untuk membandingkan strukturnya.",
      compareIdentical: "Struktur identik: key dan tipe data sama.",
      compareMissing: "Key yang hilang (hanya di A)",
      compareExtra: "Key tambahan (hanya di B)",
      compareType: "Tipe berbeda",
    },
    empty: {
      formatTitle: "JSON terformat akan tampil di sini",
      formatBody: "Tempel JSON di sisi kiri lalu klik «Format».",
    },
    soon: {
      badge: "Segera hadir",
      title: "{tool} akan segera tersedia",
      body: "Tool ini masuk dalam roadmap Workbench dan akan hadir di pembaruan berikutnya.",
    },
    tools: {
      format: "Format",
      minify: "Minify",
      validate: "Validasi",
      tree: "Tree",
      search: "Cari",
      diff: "Diff",
      jsonpath: "JSONPath",
      convert: "Konversi",
      toTypescript: "TypeScript",
      toZod: "Zod",
      toSchema: "JSON Schema",
      yaml: "YAML",
      csv: "CSV",
      sortKeys: "Urutkan key",
      removeEmpty: "Hapus nilai kosong",
      flatten: "Flatten",
      unflatten: "Unflatten",
      escape: "Escape",
      unescape: "Unescape",
      repair: "Perbaiki",
      extract: "Key & Value",
      extractKeys: "Ekstrak key",
      extractValues: "Ekstrak value",
      pick: "Pilih field",
      omit: "Buang field",
      compareStructure: "Bandingkan struktur",
    },
  },
  generator: {
    title: "Generator Data",
    subtitle: "Buat data uji yang realistis untuk frontend dengan cepat.",
    chooseType: "Pilih tipe data",
    searchPlaceholder: "Cari tipe data…",
    noTopics: "Tidak ada tipe data yang cocok.",
    fieldsLegend: "Field",
    moreFields: "Tampilkan field lainnya",
    lessFields: "Sembunyikan field opsional",
    optionalFields: "Field opsional",
    records: "Jumlah record",
    customQty: "Kustom",
    country: "Negara",
    countrySearch: "Cari negara…",
    selectPlaceholder: "Pilih tipe data…",
    outputMode: "Mode output",
    modePayload: "POST payload",
    modeApi: "API record",
    modePayloadHint: "Tanpa id dan timestamp — cocok untuk request POST create.",
    modeApiHint: "Menyertakan id, createdAt, dan updatedAt — seperti record API tersimpan.",
    jsonType: "JSON",
    viewJson: "JSON",
    viewType: "TS",
    generate: "Buat {n}",
    generating: "Membuat {n}…",
    generateAgain: "Buat ulang",
    refresh: "Segarkan",
    generated: "Dibuat: {n}",
    download: "Unduh",
    createApi: "Buat API",
    createSuccess: "API sementara telah dibuat.",
    createBlockedArray:
      "API sementara mendukung hingga 500 record. Kurangi jumlahnya lalu coba lagi.",
    createBlockedSize:
      "Ukuran JSON melebihi batas API sementara (64 KB). Pilih lebih sedikit record atau field.",
    openTemporary: "Buka di API Sementara",
    emptyTitle: "Pilih tipe data",
    emptyBody: "Pilih topik di atas untuk membuat record uji yang realistis.",
    duration1h: "1 jam",
    duration6h: "6 jam",
    duration12h: "12 jam",
    duration24h: "24 jam",
    countries: {
      all: "Semua negara",
      IR: "Iran",
      DE: "Jerman",
      US: "Amerika Serikat",
      GB: "Inggris",
      FR: "Prancis",
      NL: "Belanda",
      JP: "Jepang",
      CA: "Kanada",
    },
    categories: {
      people: "Orang",
      ecommerce: "E-Commerce",
      content: "Konten",
      media: "Media",
      business: "Bisnis",
      location: "Lokasi",
    },
    fields: {
      id: "id",
      name: "Nama",
      username: "Username",
      email: "Email",
      avatar: "Avatar",
      phone: "Telepon",
      company: "Perusahaan",
      location: "Lokasi",
      age: "Usia",
      role: "Role",
      jobTitle: "Jabatan",
      department: "Departemen",
      bio: "Bio",
      website: "Website",
      createdAt: "Tanggal dibuat",
      updatedAt: "Tanggal diperbarui",
      hiredAt: "Tanggal bergabung",
      ordersCount: "Jumlah order",
      totalSpent: "Total belanja",
      postsCount: "Jumlah post",
      price: "Harga",
      image: "Gambar",
      category: "Kategori",
      description: "Deskripsi",
      brand: "Brand",
      stock: "Stok",
      rating: "Rating",
      sku: "SKU",
      colors: "Warna",
      orderId: "ID Order",
      customer: "Pelanggan",
      items: "Item",
      total: "Total",
      status: "Status",
      orderDate: "Tanggal order",
      paymentStatus: "Status pembayaran",
      shippingAddress: "Alamat pengiriman",
      user: "User",
      comment: "Komentar",
      post: "Post",
      date: "Tanggal",
      product: "Produk",
      title: "Judul",
      verified: "Terverifikasi",
      helpful: "Membantu",
      slug: "Slug",
      parentCategory: "Kategori induk",
      productCount: "Jumlah produk",
      quantity: "Jumlah",
      discount: "Diskon",
      code: "Kode",
      type: "Tipe",
      expiresAt: "Tanggal kedaluwarsa",
      minimumOrder: "Minimum order",
      usageLimit: "Batas pemakaian",
      active: "Aktif",
      amount: "Nominal",
      currency: "Mata uang",
      paymentMethod: "Metode pembayaran",
      transactionId: "ID Transaksi",
      order: "Order",
      carrier: "Kurir",
      trackingNumber: "Nomor resi",
      estimatedDelivery: "Estimasi tiba",
      body: "Isi",
      author: "Penulis",
      tags: "Tag",
      publishedAt: "Tanggal terbit",
      likes: "Like",
      views: "Views",
      replies: "Balasan",
      attachments: "Lampiran",
      actionUrl: "URL aksi",
      sender: "Pengirim",
      receiver: "Penerima",
      message: "Pesan",
      read: "Sudah dibaca",
      artist: "Artis",
      cover: "Cover",
      year: "Tahun",
      genre: "Genre",
      tracks: "Track",
      album: "Album",
      duration: "Durasi",
      poster: "Poster",
      director: "Sutradara",
      language: "Bahasa",
      plays: "Pemutaran",
      label: "Label",
      pages: "Halaman",
      isbn: "ISBN",
      instructor: "Instruktur",
      level: "Level",
      lessons: "Pelajaran",
      students: "Siswa",
      employees: "Karyawan",
      logo: "Logo",
      industry: "Industri",
      salary: "Gaji",
      experience: "Pengalaman",
      remote: "Remote",
      founded: "Tahun berdiri",
      postedAt: "Tanggal diposting",
      capacity: "Kapasitas",
      capital: "Ibu kota",
      flag: "Bendera",
      region: "Wilayah",
      population: "Populasi",
      street: "Jalan",
      postalCode: "Kode pos",
      latitude: "Latitude",
      longitude: "Longitude",
      country: "Negara",
      city: "Kota",
      notes: "Catatan",
      team: "Tim",
      joinedAt: "Tanggal masuk",
      skills: "Skill",
      specialty: "Spesialisasi",
      hospital: "Rumah sakit",
      licenseNumber: "Nomor lisensi",
      yearsExperience: "Tahun pengalaman",
      bloodType: "Golongan darah",
      diagnosis: "Diagnosis",
      doctor: "Dokter",
      admittedAt: "Tanggal masuk",
      vehicleType: "Jenis kendaraan",
      plateNumber: "Nomor polisi",
      tripsCount: "Jumlah perjalanan",
      roomNumber: "Nomor kamar",
      checkIn: "Check-in",
      checkOut: "Check-out",
      nights: "Malam",
      followers: "Pengikut",
      following: "Mengikuti",
      grade: "Kelas",
      school: "Sekolah",
      gpa: "IPK",
      major: "Jurusan",
      enrollmentYear: "Tahun masuk",
      subject: "Mata pelajaran",
      classesCount: "Jumlah kelas",
      invoiceNumber: "Nomor invoice",
      issueDate: "Tanggal terbit",
      dueDate: "Jatuh tempo",
      tax: "Pajak",
      itemsCount: "Jumlah item",
      target: "Target",
      targetType: "Tipe target",
      reaction: "Reaksi",
      color: "Warna",
      thumbnail: "Thumbnail",
      channel: "Channel",
      url: "URL",
      width: "Lebar",
      height: "Tinggi",
      alt: "Teks alt",
      photographer: "Fotografer",
      host: "Host",
      episodes: "Episode",
      subscribers: "Subscriber",
      owner: "Pemilik",
      public: "Publik",
      progress: "Progres",
      teamSize: "Ukuran tim",
      budget: "Anggaran",
      startDate: "Tanggal mulai",
      membersCount: "Jumlah anggota",
      focus: "Fokus",
      countriesCount: "Jumlah negara",
      areaKm2: "Luas (km²)",
      timezone: "Zona waktu",
      terminals: "Terminal",
      altitude: "Ketinggian",
      accuracy: "Akurasi",
    },
    topics: {
      users: {
        name: "Users",
        description: "Profil user untuk aplikasi dan dashboard",
        preview: {
          line1: "Budi Santoso",
          line2: "@budi_santoso · budi@mail.test",
          line3: "Jakarta",
        },
      },
      customers: {
        name: "Pelanggan",
        description: "Kontak pelanggan dan detail akun",
        preview: {
          line1: "Siti Rahmawati",
          line2: "siti@demo.dev",
          line3: "+62 812-3456-7890",
        },
      },
      employees: {
        name: "Karyawan",
        description: "Anggota tim beserta jabatan dan departemen",
        preview: {
          line1: "Rizky Pratama",
          line2: "Frontend Developer",
          line3: "Engineering · Acme",
        },
      },
      authors: {
        name: "Penulis",
        description: "Penulis artikel dan kreator konten",
        preview: {
          line1: "Ayu Lestari",
          line2: "Menulis seputar product design dan UX.",
        },
      },
      contacts: {
        name: "Kontak",
        description: "Kontak dan perusahaan untuk CRM",
        preview: {
          line1: "Dimas Wijaya",
          line2: "dimas@acme.test · Acme",
        },
      },
      "team-members": {
        name: "Anggota Tim",
        description: "Anggota tim produk dan engineering",
        preview: {
          line1: "Nadia Kusuma",
          line2: "Tech Lead · Platform",
        },
      },
      doctors: {
        name: "Dokter",
        description: "Dokter beserta spesialisasi dan rumah sakit",
        preview: {
          line1: "dr. Hendra Gunawan",
          line2: "Kardiologi · RS Umum Kota",
        },
      },
      patients: {
        name: "Pasien",
        description: "Data pasien beserta diagnosis dan golongan darah",
        preview: {
          line1: "Dewi Anggraini",
          line2: "A+ · Hipertensi",
        },
      },
      drivers: {
        name: "Driver",
        description: "Driver transportasi beserta jenis kendaraan dan rating",
        preview: {
          line1: "Agus Saputra",
          line2: "Sedan · ★ 4,8",
        },
      },
      guests: {
        name: "Tamu",
        description: "Tamu hotel beserta nomor kamar dan status check-in",
        preview: {
          line1: "Putri Maharani",
          line2: "Kamar 412 · Check-in",
        },
      },
      profiles: {
        name: "Profil",
        description: "Profil media sosial beserta jumlah pengikut dan bio",
        preview: {
          line1: "Fajar Ramadhan",
          line2: "@fajar_ramadhan · 12 rb pengikut",
        },
      },
      "girl-students": {
        name: "Siswi",
        description: "Profil siswi beserta kelas dan sekolah",
        preview: {
          line1: "Zahra Aulia",
          line2: "Kelas 10 · SMA Negeri 1",
        },
      },
      "boy-students": {
        name: "Siswa",
        description: "Profil siswa beserta kelas dan sekolah",
        preview: {
          line1: "Kevin Halim",
          line2: "Kelas 9 · SMP Harapan Bangsa",
        },
      },
      teachers: {
        name: "Guru",
        description: "Guru beserta mata pelajaran dan sekolah",
        preview: {
          line1: "Ratna Sari",
          line2: "Matematika · SMA Negeri 3",
        },
      },
      products: {
        name: "Produk",
        description: "Produk toko lengkap dengan harga dan spesifikasi",
        preview: {
          line1: "Headphone Wireless Noise-Canceling",
          line2: "Rp450.000 · Elektronik",
          line3: "★★★★☆",
        },
      },
      orders: {
        name: "Order",
        description: "Order pelanggan beserta item dan status pengiriman",
        preview: {
          line1: "Order #10482",
          line2: "3 item · Rp780.000",
          line3: "Terkirim",
        },
      },
      reviews: {
        name: "Ulasan",
        description: "Rating bintang dan ulasan pelanggan",
        preview: {
          line1: "★★★★★ Sangat memuaskan",
          line2: "Kualitas bahannya kokoh dan mudah digunakan sehari-hari.",
        },
      },
      categories: {
        name: "Kategori",
        description: "Kategori katalog untuk e-commerce",
        preview: { line1: "Elektronik", line2: "electronics" },
      },
      "cart-items": {
        name: "Item Keranjang",
        description: "Produk yang ditambahkan ke keranjang belanja",
        preview: { line1: "Smartwatch", line2: "2 × Rp299.000 · Rp598.000" },
      },
      coupons: {
        name: "Kupon",
        description: "Kode promo dan aturan diskon",
        preview: { line1: "HEMAT10", line2: "Diskon 10% · s.d. 2026-12-01" },
      },
      payments: {
        name: "Pembayaran",
        description: "Transaksi lengkap dengan nominal dan metode bayar",
        preview: { line1: "Rp250.000 IDR", line2: "QRIS · Berhasil" },
      },
      shipments: {
        name: "Pengiriman",
        description: "Status pengiriman dan jasa ekspedisi",
        preview: { line1: "SHP-10482 · JNE", line2: "Dalam perjalanan" },
      },
      invoices: {
        name: "Invoice",
        description: "Invoice tagihan beserta nominal dan jatuh tempo",
        preview: { line1: "INV-10482", line2: "Rp3.500.000 · Lunas" },
      },
      brands: {
        name: "Brand",
        description: "Brand beserta logo dan jumlah produk",
        preview: { line1: "Acme", line2: "acme · 128 produk" },
      },
      posts: {
        name: "Post",
        description: "Artikel blog dan postingan feed",
        preview: { line1: "Cara merancang antarmuka yang ringkas", line2: "Oleh Ayu Lestari" },
      },
      comments: {
        name: "Komentar",
        description: "Komentar pada post dan produk",
        preview: {
          line1: "Penjelasannya jelas dan gampang diikuti!",
          line2: "ayu · 12 like",
        },
      },
      messages: {
        name: "Pesan",
        description: "Thread chat dan pesan langsung",
        preview: {
          line1: "Bisa cek build demo terbaru?",
          line2: "Rizky Pratama → Siti Rahmawati",
        },
      },
      notifications: {
        name: "Notifikasi",
        description: "Notifikasi aplikasi dan pemberitahuan",
        preview: { line1: "Komentar baru", line2: "Komunitas · 2 jam lalu" },
      },
      tags: {
        name: "Tag",
        description: "Tag beserta slug dan jumlah post",
        preview: { line1: "typescript", line2: "142 post" },
      },
      "content-categories": {
        name: "Kategori Konten",
        description: "Bagian artikel dan panduan",
        preview: { line1: "Panduan", line2: "guides · 86 post" },
      },
      likes: {
        name: "Like",
        description: "Reaksi like pada post dan komentar",
        preview: { line1: "Fajar Ramadhan menyukai post", line2: "Post · Like" },
      },
      albums: {
        name: "Album",
        description: "Album musik beserta cover dan daftar track",
        preview: {
          line1: "Random Access Memories",
          line2: "Daft Punk",
          line3: "2013 · 13 track",
        },
      },
      songs: {
        name: "Lagu",
        description: "Track audio beserta durasi dan artis",
        preview: { line1: "Midnight Cruise", line2: "3:42 · Elektronik" },
      },
      movies: {
        name: "Film",
        description: "Film beserta poster dan rating",
        preview: { line1: "Late Night Express", line2: "2021 · ★ 8,2" },
      },
      books: {
        name: "Buku",
        description: "Buku beserta penulis dan cover",
        preview: { line1: "Catatan Desain Antarmuka", line2: "Ayu Lestari · 2019" },
      },
      videos: {
        name: "Video",
        description: "Klip video beserta durasi dan jumlah views",
        preview: {
          line1: "Bangun dashboard dalam 10 menit",
          line2: "12:40 · 84 rb views",
        },
      },
      images: {
        name: "Gambar",
        description: "Grafik beserta dimensi dan tag",
        preview: { line1: "Senja di Sudirman", line2: "1280×720" },
      },
      podcasts: {
        name: "Podcast",
        description: "Acara podcast beserta host dan jumlah episode",
        preview: { line1: "Kode & Kopi", line2: "48 episode · Tech" },
      },
      playlists: {
        name: "Playlist",
        description: "Daftar track beserta kreator dan genre",
        preview: { line1: "Fokus", line2: "32 track · Elektronik" },
      },
      companies: {
        name: "Perusahaan",
        description: "Profil perusahaan dan industri",
        preview: { line1: "Acme Corp", line2: "Layanan IT · Jakarta" },
      },
      jobs: {
        name: "Lowongan Kerja",
        description: "Posisi terbuka beserta lokasi dan tipe kerja",
        preview: {
          line1: "Frontend Developer",
          line2: "Google · Jakarta · Full-time",
        },
      },
      courses: {
        name: "Kursus",
        description: "Kursus pembelajaran beserta silabus dan instruktur",
        preview: { line1: "React Praktis", line2: "Menengah · 12 jam" },
      },
      events: {
        name: "Event",
        description: "Meetup, konferensi, dan workshop",
        preview: { line1: "Frontend Summit", line2: "Bandung · Workshop" },
      },
      projects: {
        name: "Proyek",
        description: "Proyek beserta progres dan anggaran",
        preview: { line1: "Redesain Analytics", line2: "Berjalan · 72%" },
      },
      teams: {
        name: "Tim",
        description: "Tim internal beserta lead dan jumlah anggota",
        preview: { line1: "Tim Produk", line2: "8 anggota · Engineering" },
      },
      continents: {
        name: "Benua",
        description: "Benua di dunia beserta kode dan statistik dasar",
        preview: { line1: "Asia", line2: "AS · 48 negara" },
      },
      countries: {
        name: "Negara",
        description: "Negara beserta nama, kode, dan bendera",
        preview: { line1: "Indonesia", line2: "ID · Jakarta" },
      },
      cities: {
        name: "Kota",
        description: "Kota beserta wilayah dan negara",
        preview: { line1: "Yogyakarta", line2: "Indonesia · Jawa Tengah" },
      },
      addresses: {
        name: "Alamat",
        description: "Alamat pengiriman dan kantor",
        preview: {
          line1: "Jl. Jenderal Sudirman No. 42",
          line2: "10220 Jakarta Pusat, DKI Jakarta, Indonesia",
        },
      },
      regions: {
        name: "Wilayah / Provinsi",
        description: "Wilayah geografis dan provinsi",
        preview: { line1: "Jawa Barat", line2: "Indonesia · Bandung" },
      },
      neighborhoods: {
        name: "Kawasan",
        description: "Kawasan dan lingkungan kota",
        preview: { line1: "Kebayoran Baru", line2: "Jakarta Selatan · 12160" },
      },
      airports: {
        name: "Bandara",
        description: "Bandara beserta kode dan kota",
        preview: { line1: "Bandara Internasional Soekarno-Hatta", line2: "CGK · Indonesia" },
      },
      coordinates: {
        name: "Koordinat",
        description: "Data latitude, longitude, dan lokasi",
        preview: {
          line1: "-6.208763, 106.845599",
          line2: "Jakarta · Indonesia",
        },
      },
    },
    errors: {
      pickTopic: "Pilih tipe data terlebih dahulu.",
      INVALID_TOPIC: "Tipe data tidak dikenal.",
      INVALID_FIELDS: "Pilih minimal satu field.",
      INVALID_QUANTITY: "Jumlah harus antara 1 dan 1000.",
      INVALID_COUNTRY: "Negara tidak valid.",
      GENERATE_FAILED: "Gagal membuat data. Silakan coba lagi beberapa saat lagi.",
      DOWNLOAD_FAILED: "Gagal mengunduh file. Silakan coba lagi beberapa saat lagi.",
      CREATE_FAILED: "Gagal membuat API sementara.",
      LIMIT_REACHED: "Batas maksimal 5 API sementara tercapai. Hapus salah satunya terlebih dahulu.",
      RATE_LIMITED: "Terlalu banyak request. Silakan coba lagi beberapa saat lagi.",
    },
  },
  preview: {
    docs: "Dokumentasi",
    playground: "Playground",
    blurb: "Antarmuka sederhana untuk melihat cara kerja API ini secara langsung.",
    blurbFaHint: "",
    backToResource: "Kembali ke {name}",
    search: "Cari",
    create: "Buat",
    edit: "Edit",
    delete: "Hapus",
    save: "Simpan",
    saving: "Menyimpan…",
    deleting: "Menghapus…",
    cancel: "Batal",
    fillSample: "Isi contoh",
    noRecords: "Tidak ada record",
    loading: "Memuat…",
    confirmDelete: "Hapus record ini?",
    confirmDeleteBody: "Tindakan ini tidak dapat dibatalkan.",
    networkError: "Terjadi gangguan jaringan",
    authDemoPassword: "Password demo sama untuk semua user standar:",
    username: "Username",
    password: "Password",
    login: "Masuk",
    loginSuccess: "Berhasil masuk.",
    logout: "Keluar",
    getMe: "GET /me",
    token: "Token",
    user: "User",
    loginFirst: "Masuk terlebih dahulu untuk mendapatkan token",
    createdAt: "Tanggal dibuat",
    fieldLabels: {
      name: "Nama",
      username: "Username",
      email: "Email",
      avatarUrl: "URL Avatar",
      role: "Role",
      city: "Kota",
      country: "Negara",
      company: "Perusahaan",
      title: "Judul",
      body: "Isi",
      published: "Dipublikasikan",
      userId: "ID User",
      postId: "ID Post",
      albumId: "ID Album",
      url: "URL",
      thumbnailUrl: "URL Thumbnail",
      completed: "Selesai",
      description: "Deskripsi",
      price: "Harga",
      stock: "Stok",
      category: "Kategori",
      imageUrl: "URL Gambar",
      message: "Pesan",
      type: "Tipe",
      read: "Sudah dibaca",
      code: "Kode",
      capital: "Ibu kota",
      region: "Wilayah",
      population: "Populasi",
      currency: "Mata uang",
      flagUrl: "URL Bendera",
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
      teaser: "Dalam pengembangan — tool format, diff, dan konversi",
      hint: "/json — pilih tool untuk mengganti tampilan",
      badge: "Dalam pengembangan",
      summary:
        "JSON Workbench (dalam pengembangan) adalah tool berbasis browser untuk memformat, membandingkan struktur, mencari, dan mengonversi JSON, termasuk TypeScript, Zod, YAML, CSV, dan berbagai utilitas.",
      details: [
        "Buka JSON Workbench di /json lalu pilih tool untuk langsung mengganti tampilan (mendukung parameter ?tool=).",
        "Tool inti: Format, Tree, Search, JSONPath, dan Compare Structure.",
        "Converter: TypeScript, Zod, JSON Schema, YAML, dan CSV.",
        "Utilitas: Sort Keys, Remove Empty, Flatten, Escape, Repair, Pick/Omit field, dan lainnya.",
        "Sedang dalam pengembangan aktif — tool dan penyempurnaan baru akan hadir di pembaruan berikutnya.",
      ],
    },
    "2026-09-19-image-generator": {
      title: "Generator Gambar",
      teaser: "URL gambar placeholder kustom",
      hint: "/image-generator — pilih SVG atau foto asli lalu salin URL",
      summary:
        "Buat gambar placeholder menggunakan parameter URL, lengkap dengan ukuran siap pakai untuk avatar, post, banner, dan lainnya memakai SVG MockData serta foto Picsum.",
      details: [
        "Pilih SVG atau foto asli di /image-generator, atur lebar dan tinggi, lalu salin URL-nya.",
        "URL publik secara default mengacak hasil: gunakan /image/{w}/{h} untuk SVG atau tambahkan ?type=real untuk foto.",
        "Kirim parameter kustom ?seed= agar warna SVG atau foto tetap sama.",
        "Tempelkan URL langsung ke <img>, CSS, atau field gambar.",
      ],
    },
    "2026-09-17-generator": {
      title: "Generator Data",
      teaser: "Data JSON realistis dalam hitungan detik",
      hint: "/generator — pilih topik untuk membuat, menyalin, atau membuat API",
      summary:
        "Buat data JSON yang realistis untuk frontend dengan cepat. Pilih topik, field, dan jumlah record — lalu salin, unduh, atau jadikan API sementara.",
      details: [
        "Buat data dari kategori People, E-Commerce, Content, Media, Business, dan Location di /generator.",
        "Mendukung format POST payload maupun API record; tersedia juga data bahasa Persia terlokalisasi untuk FA.",
        "Hasilkan hingga 1.000 record sekaligus di browser; fitur «Buat API» mengikuti batas API sementara (500 record / 64 KB).",
        "Pengaturan pilihan dan data yang sudah dibuat tetap tersimpan saat berpindah halaman (akan direset saat halaman dimuat ulang).",
      ],
    },
    "2026-09-16-temporary": {
      title: "API Sementara",
      teaser: "Tempel JSON dan dapatkan URL REST sementara",
      hint: "/temporary — tempel JSON untuk membuat URL REST publik",
      summary:
        "Buat endpoint REST sementara yang dapat diakses publik dari JSON yang ditempel. Tanpa login; hingga 5 API aktif bersamaan per browser.",
      details: [
        "Buat di /temporary dengan masa berlaku 1 jam, 6 jam, 12 jam, atau 24 jam.",
        "Gunakan GET, POST, PATCH, dan DELETE pada /api/t/… seperti resource lainnya.",
        "Maksimal 5 API aktif per browser dan maksimal 20 pembuatan per jam per IP.",
        "Perlakukan URL seperti password: siapa pun yang punya tautan ini bisa membaca dan mengubah data hingga masa berlakunya habis.",
      ],
    },
    "2026-09-15-preview": {
      title: "Pratinjau Resource",
      teaser: "Antarmuka sederhana yang terhubung ke API asli",
      hint: "/preview/users — coba CRUD langsung di browser",
      summary:
        "Tampilan demo praktis untuk resource seperti Users, Posts, dan Auth yang terhubung ke API asli.",
      details: [
        "Buka pratinjau live dari halaman dokumentasi resource mana pun.",
        "Uji baca, cari, pagination, buat, edit, dan hapus pada database demo bersama.",
        "Pratinjau Auth menyertakan form login (password bersama: password) dan request GET /me menggunakan token.",
        "Ubah bahasa di bagian atas bila perlu memasukkan data bahasa Persia.",
      ],
    },
    "2026-09-14-lang-fa": {
      title: "Data Bahasa Persia (?lang=fa)",
      teaser: "Data uji bahasa Persia terlokalisasi",
      hint: "/api/users?lang=fa — tambahkan lang=fa untuk data bahasa Persia",
      summary:
        "Tambahkan ?lang=fa pada endpoint untuk mendapatkan nama, username, nomor telepon, dan teks dalam bahasa Persia.",
      details: [
        "Bahasa default adalah bahasa Inggris; bahasa ditentukan sepenuhnya oleh query parameter lang=fa (bukan cookie atau Accept-Language).",
        "Respons FA menyertakan header Content-Language: fa serta petunjuk font Vazirmatn.",
        "Berfungsi untuk daftar data, record tunggal, maupun login memakai username bahasa Persia.",
        "Memilih فارسی di atas juga membuat Playground otomatis menambahkan lang=fa.",
      ],
    },
    "2026-09-12-playground": {
      title: "Playground",
      teaser: "Panggil API langsung dari browser",
      hint: "/playground — kirim request dan lihat JSON",
      summary:
        "Kirim request API langsung di browser, uji login yang berhasil maupun gagal, dan lihat respons JSON yang terformat.",
      details: [
        "Pilih resource dan aksi, ubah query parameter atau body JSON, lalu kirim request.",
        "Di Auth, bandingkan respons 200 dan 401 dengan mudah lewat tombol «Kredensial valid» dan «Kredensial salah».",
        "Lihat kode status HTTP, JSON terformat, dan pagination koleksi.",
        "Request per resource serta respons terakhir tetap tersimpan saat berpindah halaman (akan direset saat halaman dimuat ulang).",
      ],
    },
    "2026-09-10-auth": {
      title: "Mock Auth",
      teaser: "Login dan autentikasi dengan Bearer Token",
      hint: "/api/auth/login — password selalu password",
      summary:
        "Kirim POST ke /api/auth/login dengan kredensial user demo dan password untuk mendapatkan Bearer Token yang dipakai bersama /me.",
      details: [
        "Password demo bersama untuk semua user standar adalah password.",
        "Jika berhasil, endpoint mengembalikan mock Bearer Token dan object user (id, name, username, email, role).",
        "Password salah atau user tidak dikenal mengembalikan 401 dengan pesan error yang jelas.",
        "Kirim header Authorization: Bearer <token> saat memanggil GET /api/auth/me untuk mengambil user saat ini.",
      ],
    },
    "2026-09-08-resources": {
      title: "Resource REST Aktif",
      teaser: "CRUD lengkap untuk Users, Posts, dan lainnya",
      hint: "/docs#resources — lihat daftar endpoint yang tersedia",
      summary:
        "Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, dan Countries tersedia dengan dukungan CRUD lengkap serta pagination.",
      details: [
        "Daftar ber-pagination mengembalikan { data, pagination } dengan page, limit, total, dan totalPages.",
        "Tersedia query parameter untuk pencarian, pengurutan, filter, delay sintetis, dan simulasi kode error.",
        "Database bersama di produksi direset setiap hari — gunakan untuk demo dan pengujian, bukan penyimpanan permanen.",
        "Unduh spesifikasi siap baca mesin dari /openapi.json untuk dipakai di Postman, Swagger, atau tool AI.",
      ],
    },
  },
  catalog: {
    auth: {
      title: "Auth",
      summary:
        "Endpoint tiruan untuk login memakai username dan password. Mengembalikan Bearer Token jika berhasil atau 401 jika ditolak.",
    },
    users: {
      title: "Users",
      summary: "CRUD API tiruan untuk user lengkap dengan pencarian, filter role, dan pagination.",
    },
    posts: {
      title: "Posts",
      summary: "Post yang terhubung dengan user beserta dukungan tag dan status publikasi.",
    },
    comments: {
      title: "Comments",
      summary: "Komentar pada post lengkap dengan nama, email, dan isi teks.",
    },
    albums: {
      title: "Albums",
      summary: "Album milik user; foto terhubung ke album melalui albumId.",
    },
    photos: {
      title: "Photos",
      summary: "Foto album dengan field url dan thumbnailUrl.",
    },
    todos: {
      title: "Todos",
      summary: "Daftar tugas sederhana yang terhubung dengan user beserta status penyelesaian.",
    },
    products: {
      title: "Products",
      summary: "Katalog produk lengkap dengan harga, stok, kategori, dan imageUrl.",
    },
    notifications: {
      title: "Notifications",
      summary: "Notifikasi user lengkap dengan tipe dan status sudah dibaca.",
    },
    countries: {
      title: "Countries",
      summary: "Data negara lengkap dengan kode ISO, wilayah, populasi, dan bendera.",
    },
  },
};

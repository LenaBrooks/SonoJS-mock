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

export const vi: Messages = {
  common: {
    home: "Trang chủ",
    docs: "Tài liệu",
    playground: "Playground",
    contact: "Liên hệ",
    preview: "Xem trước",
    search: "Tìm kiếm",
    loading: "Đang tải…",
    save: "Lưu",
    saving: "Đang lưu…",
    cancel: "Hủy",
    create: "Tạo mới",
    edit: "Chỉnh sửa",
    delete: "Xóa",
    searchPlaceholder: "Tìm API…",
    noResults: "Không tìm thấy kết quả phù hợp",
    new: "Mới",
    inDevelopment: "Đang phát triển",
    actions: "Thao tác",
    copy: "Sao chép",
    copied: "Đã sao chép",
    live: "Đang chạy",
    open: "Mở",
    tryIt: "Dùng thử",
    learnMore: "Tìm hiểu thêm",
    back: "Quay lại",
    close: "Đóng",
    yes: "Có",
    no: "Không",
    name: "Tên",
    email: "Email",
    message: "Tin nhắn",
    send: "Gửi",
    sending: "Đang gửi…",
    networkError: "Lỗi kết nối mạng",
    temporary: "API Tạm thời",
    temporaryBadge: "Khởi tạo nhanh",
    generator: "Trình tạo dữ liệu",
    imageGenerator: "Trình tạo ảnh",
    jsonWorkbench: "Không gian làm việc JSON",
  },
  header: {
    primaryNav: "Điều hướng chính",
    whatsNew: "Có gì mới",
    whatsNewTitle: "Có gì mới",
    whatsNewSubtitle: "Tính năng và cập nhật mới nhất",
    latest: "Cập nhật mới nhất",
    contact: "Giới thiệu & Liên hệ",
    menu: "Menu",
    openMenu: "Mở menu",
    appearance: "Giao diện",
    lightMode: "Bật chế độ sáng",
    darkMode: "Bật chế độ tối",
    light: "Sáng",
    dark: "Tối",
    apiLangGroup: "Ngôn ngữ",
    english: "English",
    persian: "فارسی",
    github: "GitHub",
    githubStars: "GitHub — Gắn sao cho repo",
  },
  home: {
    tagline:
      "REST mock API miễn phí với dữ liệu JSON sát thực tế. Tạo prototype không cần backend, kiểm thử xác thực và thêm endpoint ngay lập tức.",
    taglineNote: "",
    resourcesTitle: "Resource",
    resourcesBlurb:
      "10 resource REST API có sẵn kèm tài liệu và ví dụ. Trên môi trường production, dữ liệu dùng chung cơ sở dữ liệu demo.",
    searchLabel: "Tìm API và endpoint",
    searchPlaceholder: "Tìm users, posts, auth…",
    temporaryCtaTitle: "API Tạm thời",
    temporaryCtaBody:
      "Tạo nhanh API tạm thời từ JSON dán vào hoặc từ trình tạo dữ liệu. Hãy coi URL như mật khẩu. Tối đa 5 API tạm thời hoạt động cùng lúc trên mỗi trình duyệt.",
    temporaryCtaLink: "Tạo API tạm thời",
  },
  notFound: {
    title: "Không tìm thấy trang",
    body: "Trang này không tồn tại trên MockData. Quay về trang chủ hoặc mở tài liệu.",
    home: "Trang chủ",
    docs: "Tài liệu",
  },
  blog: {
    title: "Blog",
    description:
      "Bài viết và hướng dẫn về mock data, JSON, API và phát triển frontend.",
    all: "Tất cả",
    emptyTitle: "Chưa có bài viết nào",
    emptyBody: "Bài viết mới sẽ sớm được đăng — bạn quay lại sau nhé.",
    emptyCategoryTitle: "Danh mục này chưa có bài viết",
    emptyCategoryBody: "Hãy chọn danh mục khác hoặc xem tất cả bài viết.",
    readingTime: "{n} phút đọc",
    previousPage: "Trang trước",
    nextPage: "Trang sau",
    pageStatus: "Trang {page} / {total}",
    paginationNav: "Điều hướng phân trang",
    categoriesNav: "Danh mục blog",
    backToBlog: "Blog",
    previousArticle: "Bài trước",
    nextArticle: "Bài tiếp theo",
    relatedArticles: "Bài viết liên quan",
    categories: {
      news: "Tin tức",
      "mock-data": "Mock data",
      json: "JSON",
      api: "API",
      frontend: "Frontend",
    },
  },
  contact: {
    title: "Liên hệ",
    intro:
      "Bạn có câu hỏi, góp ý hoặc ý tưởng tính năng mới? Gửi tin nhắn qua biểu mẫu bên dưới hoặc liên hệ trực tiếp qua email:",
    name: "Tên",
    email: "Email",
    topic: "Chủ đề",
    message: "Tin nhắn",
    send: "Gửi",
    sending: "Đang gửi…",
    success: "Tin nhắn của bạn đã được gửi. Cảm ơn bạn đã liên hệ — chúng mình sẽ phản hồi sớm.",
    chooseTopic: "Vui lòng chọn một chủ đề.",
    pickTopic: "Tin nhắn của bạn về vấn đề gì?",
    topics: {
      question: "Câu hỏi",
      bug: "Báo lỗi",
      feature: "Đề xuất tính năng",
      other: "Khác",
    },
  },
  docs: {
    title: "Tài liệu",
    navLabel: "Mục lục tài liệu",
    intro:
      "MockData cung cấp các resource REST giả lập ở định dạng JSON. Bạn có thể gọi các endpoint mở, kiểm thử luồng đăng nhập, gửi request trên Playground, tạo tập dữ liệu tại /generator, tạo ảnh placeholder tại /image-generator, dùng JSON Workbench tại /json và chạy API tạm thời. Các resource trong catalog trên bản production dùng chung một cơ sở dữ liệu (xem mục «Dữ liệu dùng chung» để biết thêm chi tiết).",
    toc: {
      intro: "Giới thiệu",
      whatsNew: "Có gì mới",
      temporary: "API Tạm thời",
      generator: "Trình tạo dữ liệu",
      imageGenerator: "Trình tạo ảnh",
      jsonWorkbench: "Không gian làm việc JSON",
      sharedData: "Dữ liệu dùng chung",
      language: "Ngôn ngữ",
      resources: "Resource",
      openapi: "OpenAPI",
      requests: "Request",
      errors: "Lỗi",
      rateLimit: "Rate Limit",
      reset: "Đặt lại dữ liệu",
    },
    whatsNewTitle: "Có gì mới",
    whatsNewBlurb:
      "Các cập nhật dành cho developer sắp xếp từ mới nhất đến cũ nhất. Nhấn vào thẻ bất kỳ để xem chi tiết — danh sách này cũng có sẵn ở biểu tượng chuông phía trên.",
    temporaryTitle: "API Tạm thời",
    temporaryBody:
      "Bạn cần endpoint REST tạm thời với dữ liệu JSON của riêng mình? API tạm thời tách biệt khỏi catalog dùng chung: dán JSON và chọn thời hạn để nhận URL công khai /api/t/…, hoặc tạo trực tiếp qua nút «Tạo API» trong trình tạo dữ liệu.",
    temporaryBullets: [
      "Tạo ngay trên trình duyệt tại /temporary mà không cần đăng nhập (cũng có thể mở từ «Tạo API» ở /generator).",
      "Chọn thời gian hết hạn: 1 giờ, 6 giờ, 12 giờ hoặc 24 giờ (mặc định 12 giờ).",
      "Gửi request GET, POST, PATCH và DELETE tới /api/t/… cho cả collection lẫn từng bản ghi.",
      "Hãy coi URL như mật khẩu: ai có liên kết này đều có thể đọc và chỉnh sửa dữ liệu cho đến khi hết hạn.",
      "Request gửi đến API tạm thời đã hết hạn sẽ trả về mã HTTP 410.",
    ],
    temporaryLimitsTitle: "Giới hạn của API Tạm thời",
    temporaryLimitsBullets: [
      "Tối đa 5 API tạm thời đang hoạt động trên mỗi trình duyệt.",
      "Tối đa 20 lần tạo API trong khung 1 giờ trượt từ một địa chỉ IP (vượt mức sẽ nhận HTTP 429).",
      "Kích thước payload JSON tối đa là 64 KB.",
      "Tối đa 8 tầng lồng nhau, 500 phần tử mảng và 200 key cho mỗi object.",
      "Rate limit toàn cục của /api vẫn áp dụng (khoảng 60 request mỗi phút cho mỗi IP).",
    ],
    generatorTitle: "Trình tạo dữ liệu",
    generatorBody:
      "Tạo nhanh dữ liệu JSON sát thực tế cho frontend mà không cần tự gõ mẫu thủ công. Mọi thao tác diễn ra trên trình duyệt và bạn có thể sao chép, tải xuống hoặc chuyển thành API tạm thời.",
    generatorBullets: [
      "Vào /generator và chọn chủ đề thuộc các nhóm People, E-Commerce, Content, Media, Business hoặc Location.",
      "Chuyển đổi giữa định dạng POST payload (không có id và timestamp) và API record (có id, createdAt và updatedAt).",
      "Dùng dữ liệu tiếng Ba Tư bản địa hóa cho FA hoặc dữ liệu tiếng Anh đa quốc gia cho EN.",
      "Tạo tối đa 1.000 bản ghi mỗi lần ngay trên trình duyệt; thao tác «Tạo API» tuân theo giới hạn của API tạm thời (500 bản ghi / 64 KB).",
      "Tùy chọn đã chọn và dữ liệu vừa tạo được giữ lại khi chuyển trang trong ứng dụng (sẽ đặt lại khi tải lại toàn bộ trang).",
    ],
    imageGeneratorTitle: "Trình tạo ảnh",
    imageGeneratorBody:
      "Tạo URL ảnh placeholder tùy chỉnh cho giao diện của bạn. Chọn ảnh SVG MockData hoặc ảnh ngẫu nhiên Picsum, chỉnh chiều rộng và chiều cao, sau đó sao chép URL để dùng trong <img>, CSS hoặc các trường ảnh.",
    imageGeneratorBullets: [
      "Chọn đồ họa SVG hoặc ảnh chụp thật tại /image-generator.",
      "Định dạng URL công khai là /image/{width}/{height} cho SVG, hoặc thêm ?type=real cho ảnh chụp.",
      "Mặc định URL trả về kết quả ngẫu nhiên; truyền tham số ?seed= tùy chỉnh để giữ nguyên màu SVG hoặc ảnh.",
      "Có sẵn các kích thước chuẩn cho Avatar, Thumbnail, Profile, Square, Post, Cover, Banner và Story.",
    ],
    jsonWorkbenchTitle: "JSON Workbench",
    jsonWorkbenchBody:
      "JSON Workbench (đang phát triển) là bộ công cụ chạy trên trình duyệt giúp định dạng, so sánh, tìm kiếm và chuyển đổi JSON khi xây dựng giao diện.",
    jsonWorkbenchBullets: [
      "Mở JSON Workbench tại /json và chọn công cụ để chuyển khung làm việc ngay lập tức (hỗ trợ tham số ?tool=).",
      "Công cụ cốt lõi: Format, Tree, Search, JSONPath và Compare Structure.",
      "Trình chuyển đổi: TypeScript, Zod, JSON Schema, YAML và CSV.",
      "Tiện ích: Sort Keys, Remove Empty, Flatten/Unflatten, Escape/Repair, Pick/Omit trường và nhiều công cụ khác.",
      "Chạy hoàn toàn trên trình duyệt — dữ liệu JSON của bạn không được gửi lên máy chủ.",
      "Đang được phát triển tích cực — nhiều công cụ và cải tiến mới sẽ ra mắt ở các bản cập nhật tiếp theo.",
    ],
    sharedDataTitle: "Dữ liệu dùng chung",
    sharedDataBody:
      "Mọi người dùng đều làm việc trên cùng một cơ sở dữ liệu trực tiếp: dữ liệu bạn tạo, sửa hoặc xóa sẽ hiển thị ngay với người khác. Trên bản production, cơ sở dữ liệu được đặt lại về dữ liệu gốc hằng ngày qua GET /api/cron/reset. Phù hợp cho prototype và demo, không dùng cho dữ liệu cố định hay nhạy cảm.",
    languageTitle: "Ngôn ngữ",
    languageBody:
      "Mặc định, nội dung resource trả về bằng tiếng Anh. Thêm query parameter lang=fa để nhận tên, username, email, số điện thoại và cụm từ tiếng Ba Tư. Hệ thống không dùng cookie hay header Accept-Language — chỉ áp dụng query parameter. Bộ chuyển ngôn ngữ ở thanh trên cùng (English | فارسی) điều chỉnh cả Playground lẫn Preview.",
    languageBullets: [
      "Ví dụ: GET /api/users?lang=fa",
      "Response FA kèm theo header Content-Language: fa và gợi ý font (Vazirmatn).",
      "Chọn فارسی ở thanh trên sẽ đổi hướng văn bản sang phải-sang-trái (RTL) và Playground tự động thêm lang=fa.",
    ],
    resourcesTitle: "Resource",
    resourcesBlurb:
      "Tổng quan các endpoint hiện có và những tính năng sắp ra mắt.",
    colResource: "Resource",
    colBasePath: "Base Path",
    colStatus: "Trạng thái",
    colDocs: "Tài liệu",
    statusLive: "Đang chạy",
    statusDev: "Đang phát triển",
    statusSoon: "Sắp ra mắt",
    openapiTitle: "OpenAPI",
    openapiBody:
      "Đặc tả chuẩn máy đọc được cho toàn bộ endpoint hiện có (Auth, Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, Countries và reset admin). Tiện lợi khi nhập vào Postman, Swagger UI hoặc các công cụ AI.",
    download: "Tải xuống",
    requestsTitle: "Request",
    requestsBody:
      "Các endpoint dạng collection trả về data và pagination; trong khi bản ghi đơn lẻ trả về { data }.",
    errorsTitle: "Lỗi",
    errorsBody:
      "Response lỗi chứa một object error. Các mã trạng thái phổ biến gồm 400 cho request không hợp lệ, 401 khi chưa xác thực hoặc đăng nhập thất bại, 404 khi không tìm thấy bản ghi, 429 khi vượt rate limit và 500 cho lỗi máy chủ. Để kiểm thử xử lý lỗi ở phía client, hãy mô phỏng mã lỗi bằng cách thêm ?status=500 (trong khoảng 400–599).",
    rateLimitTitle: "Rate Limit",
    rateLimitBody:
      "Để giữ dịch vụ ổn định cho tất cả mọi người, các request tới /api/* được giới hạn khoảng {limit} mỗi phút trên mỗi IP. Khi vượt giới hạn, máy chủ trả về HTTP 429 (Too Many Requests); bạn có thể theo dõi hạn ngạch còn lại qua các header X-RateLimit.",
    resetTitle: "Đặt lại dữ liệu",
    resetBody:
      "Mọi khách truy cập đều dùng chung cơ sở dữ liệu demo. Trên production, dữ liệu tự động đặt lại mỗi 24 giờ, nhưng bạn cũng có thể xóa sạch và nạp lại dữ liệu mẫu cho các bảng demo bằng secret admin bên dưới.",
    resetPanel: {
      intro: "Nhập secret admin để đặt lại và nạp lại dữ liệu mẫu cho các bảng demo.",
      placeholder: "Secret admin",
      button: "Đặt lại ngay",
      resetting: "Đang đặt lại…",
      needSecret: "Vui lòng nhập secret admin trước.",
      confirm: "Bạn có chắc muốn đặt lại và nạp lại dữ liệu mẫu cho các bảng demo không?",
      networkError: "Lỗi kết nối mạng. Vui lòng kiểm tra xem máy chủ có đang chạy không.",
      donePrefix: "Đã đặt lại xong",
    },
    colIndex: "#",
  },
  resourceDocs: {
    endpoints: "Endpoint",
    queryParams: "Query Parameter",
    examples: "Ví dụ Request",
    response: "Ví dụ Response",
    tryExample: "Dùng thử",
    preview: "Xem trước",
    playground: "Playground",
    backToResources: "Quay lại danh sách resource",
  },
  playground: {
    title: "Playground",
    blurb:
      "Gửi request thực tế đến MockData API và xem response JSON ngay trên trình duyệt. Request gần nhất của từng resource vẫn được lưu khi bạn chuyển trang.",
    resource: "Resource",
    action: "Thao tác",
    send: "Gửi",
    sending: "Đang gửi…",
    response: "Response",
    request: "Request",
    body: "Body",
    query: "Query",
    headers: "Header",
    correct: "Thông tin hợp lệ",
    wrong: "Thông tin sai",
    password: "Password",
    user: "User",
    pickUser: "Chọn một user",
    loadError: "Không thể tải danh sách tùy chọn",
    emptyResponse: "Chưa có response nào",
    startHint: "Chọn một resource rồi gửi request.",
    types: "TS",
    json: "JSON",
  },
  temporary: {
    title: "API Tạm thời",
    blurb: "Dán JSON và chạy API tạm thời chỉ trong vài giây.",
    privacyNote:
      "Hãy coi URL như mật khẩu: ai có liên kết này đều có thể đọc và chỉnh sửa dữ liệu cho đến khi hết hạn. Tối đa 5 API tạm thời hoạt động cùng lúc trên mỗi trình duyệt.",
    jsonLabel: "JSON",
    durationLabel: "Thời hạn",
    duration1h: "1 giờ",
    duration6h: "6 giờ",
    duration12h: "12 giờ",
    duration24h: "24 giờ",
    checkJson: "Kiểm tra JSON",
    jsonValid: "JSON hợp lệ — bạn có thể tạo API.",
    jsonHint: "Kiểm tra JSON trước hoặc tạo API ngay.",
    create: "Tạo API",
    creating: "Đang tạo…",
    acceptFix: "Áp dụng sửa & tạo",
    rejectFix: "Tiếp tục chỉnh sửa",
    fixedPreview: "Chúng mình đã tự động sửa một vài lỗi nhỏ. Xem lại kết quả rồi tạo nhé.",
    myApis: "API Tạm thời của tôi",
    emptyList: "Hiện chưa có API tạm thời nào đang hoạt động.",
    copyUrl: "Sao chép",
    delete: "Xóa",
    deleteAll: "Xóa tất cả",
    deleting: "…",
    confirmDelete: "Xóa API này?",
    confirmDeleteBody: "Liên kết này sẽ ngừng hoạt động ngay.",
    confirmDeleteAll: "Xóa tất cả API?",
    confirmDeleteAllBody: "Tất cả liên kết trong danh sách này sẽ ngừng hoạt động.",
    cancel: "Hủy",
    limitReached: "Đã đạt giới hạn tối đa 5 API.",
    limitReachedBody: "Hãy xóa bớt một API bên dưới hoặc chờ đến khi hết hạn.",
    createdTitle: "Đã tạo API",
    openApi: "Mở",
    slotsLabel: "{n} / 5",
    maxActive: "",
    sampleJson: `[
  { "id": "1", "firstName": "Minh", "lastName": "Nguyễn", "role": "admin" },
  { "id": "2", "firstName": "Linh", "lastName": "Trần", "role": "member" },
  { "id": "3", "firstName": "Khoa", "lastName": "Phạm", "role": "member" }
]`,
    issues: {
      EMPTY: "Hãy dán một JSON object hoặc array.",
      INVALID_JSON: "JSON không hợp lệ. Kiểm tra lại dấu phẩy, dấu ngoặc kép và dấu ngoặc.",
      TOO_LARGE: "Kích thước JSON vượt quá giới hạn cho phép ({max} KB).",
      NOT_OBJECT_OR_ARRAY: "Cấp cao nhất phải là object { } hoặc array [ ].",
      TOO_DEEP: "Độ sâu lồng nhau quá lớn (tối đa {max}).",
      ARRAY_TOO_LONG: "Độ dài mảng vượt quá giới hạn cho phép (tối đa {max} phần tử).",
      TOO_MANY_KEYS: "Quá nhiều key trong một object (tối đa {max}).",
      UNSAFE_KEY: "Key không an toàn «{key}» không được phép.",
      AUTO_FIXED: "Đã xóa dấu phẩy thừa ở cuối hoặc các key không an toàn.",
    },
  },
  imageGenerator: {
    title: "Trình tạo ảnh",
    blurb:
      "Tạo ảnh placeholder tùy chỉnh cho dự án của bạn. Sao chép URL SVG MockData hoặc ảnh ngẫu nhiên để dùng trong <img>, CSS hoặc các trường ảnh.",
    modeSvg: "SVG",
    modeReal: "Ảnh thật",
    width: "Chiều rộng",
    height: "Chiều cao",
    generate: "Tạo URL",
    generating: "Đang tạo…",
    yourUrl: "URL API của bạn",
    preview: "Xem trước",
    useInProject: "Dùng trong dự án",
    tabUrl: "URL",
    tabHtml: "HTML",
    tabCss: "CSS",
    tabJs: "JavaScript",
    tabCurl: "cURL",
    readySizes: "Kích thước có sẵn",
    sizes: {
      avatar: "Avatar",
      thumbnail: "Thumbnail",
      profile: "Hồ sơ",
      square: "Vuông",
      post: "Post",
      cover: "Cover",
      banner: "Banner",
      story: "Story",
    },
  },
  jsonWorkbench: {
    title: "JSON Workbench",
    blurb:
      "Dán JSON một lần rồi chuyển qua lại giữa Format, Search, Convert và các công cụ khác mà không cần dán lại nhiều lần.",
    toolNavLabel: "Công cụ Workbench",
    source: {
      title: "JSON Nguồn",
      hint: "Dán một lần tại đây — mọi công cụ sẽ dùng chung JSON này.",
      sample: "Nạp dữ liệu mẫu",
      valid: "JSON hợp lệ.",
      needJson: "Vui lòng dán JSON ở cột bên trái trước.",
      fixFirst: "Hãy sửa lỗi cú pháp trên JSON nguồn trước.",
      pickAction: "Bạn muốn làm gì?",
      useResult: "Dùng kết quả làm JSON nguồn",
      diffHint: "JSON nguồn là Bên A; dán JSON B bên dưới để so sánh.",
      escapedInput: "Chuỗi đã escape",
      schemaInput: "JSON Schema",
      fromSchemaNote:
        "Dán JSON Schema bên dưới để tạo JSON mẫu và áp dụng vào nguồn.",
    },
    categories: {
      core: "Cốt lõi",
      transform: "Chuyển đổi",
      utility: "Tiện ích",
    },
    labels: {
      input: "Input",
      output: "Output",
      tree: "Tree",
      matches: "Kết quả khớp",
      jsonA: "JSON A",
      jsonB: "JSON B",
      diffResult: "Điểm khác biệt",
      jsonpath: "JSONPath",
      result: "Kết quả ({count})",
    },
    actions: {
      format: "Định dạng",
      minify: "Thu gọn (Minify)",
      showTree: "Hiển thị tree",
      search: "Tìm kiếm",
      clearSearch: "Xóa tìm kiếm",
      replace: "Thay thế",
      replaceAll: "Thay thế tất cả",
      prevMatch: "Trước",
      nextMatch: "Sau",
      compare: "So sánh",
      run: "Chạy",
      runPath: "Chạy path",
      toTypescript: "Chuyển sang TypeScript",
      toZod: "Chuyển sang Zod",
      toSchema: "Chuyển sang Schema",
      swapDirection: "Đổi chiều",
      sortKeys: "Sắp xếp key",
      removeEmpty: "Xóa giá trị rỗng",
      flatten: "Làm phẳng (Flatten)",
      unflatten: "Khôi phục lồng nhau",
      escape: "Escape",
      unescape: "Unescape",
      repair: "Sửa lỗi JSON",
      fromSchema: "Tạo mẫu",
      extractKeys: "Trích xuất key",
      extractValues: "Trích xuất value",
      pick: "Chọn trường",
      omit: "Loại bỏ trường",
      compareStructure: "So sánh cấu trúc",
      clear: "Xóa trắng",
      expandAll: "Mở rộng tất cả",
      collapseAll: "Thu gọn tất cả",
      copyPath: "Sao chép path",
      copyValue: "Sao chép value",
    },
    errors: {
      empty: "Hãy dán JSON.",
      invalid: "JSON không hợp lệ.",
      unexpectedEnd: "Kết thúc JSON đột ngột.",
      unexpectedToken: "Token không mong đợi: {token}",
      expectedPropertyName: "Tên thuộc tính phải đặt trong dấu ngoặc kép.",
      expectedCommaOrBrace: "Cần ',' hoặc '}' sau giá trị.",
      expectedCommaOrBracket: "Cần ',' hoặc ']' sau phần tử mảng.",
      expectedColon: "Cần ':' sau tên thuộc tính.",
      unterminatedString: "Chuỗi chưa được đóng ngoặc kép.",
      badControlChar: "Chuỗi chứa ký tự điều khiển không hợp lệ.",
      badEscape: "Chuỗi escape không hợp lệ bên trong chuỗi.",
      trailingChar: "Có ký tự dư thừa sau giá trị JSON.",
      objectKeyExpected: "Cần key của object tại vị trí này.",
      unexpectedCharacter: "Ký tự không mong đợi: {char}",
      invalidCharacter: "Ký tự không hợp lệ: {char}",
      invalidUnicode: "Mã thoát Unicode không hợp lệ: {chars}",
      couldNotRepair: "Không thể tự động sửa JSON này.",
      atLineColumn: "Dòng {line}, cột {column}",
      atLine: "Dòng {line}",
      atPosition: "Vị trí {position}",
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
      idleHint: "Dán JSON để kiểm tra tính hợp lệ theo cú pháp chuẩn.",
      validTitle: "JSON hợp lệ",
      validBody: "Kiểu root: {type}",
      invalidTitle: "JSON không hợp lệ",
    },
    tree: {
      idleTitle: "Tree sẽ hiển thị tại đây",
      idleBody: "Dán JSON ở cột bên trái rồi nhấn «Hiển thị tree».",
      errorTitle: "Không thể tạo tree",
      errorBody: "Hãy sửa lỗi cú pháp JSON rồi thử lại.",
    },
    search: {
      query: "Tìm kiếm",
      replaceWith: "Thay bằng",
      matchCount: "{current} / {total}",
      noMatches: "Không có kết quả khớp",
      noMatchesBody: "Không tìm thấy key hay value nào khớp với từ khóa của bạn.",
      idleTitle: "Kết quả tìm kiếm sẽ hiển thị tại đây",
      idleBody: "Nhập từ khóa để tìm trong key và value rồi nhấn «Tìm kiếm».",
      errorTitle: "Chưa thể tìm kiếm",
      errorBody: "Hãy sửa lỗi cú pháp JSON trước khi tìm kiếm.",
      kindKey: "Key",
      kindValue: "Value",
      activeHint: "{kind} · {path}",
      replacedCount: "Đã thay thế {count} mục.",
    },
    diff: {
      idleTitle: "Kết quả so sánh sẽ hiển thị tại đây",
      idleBody: "Điền cả hai bên — JSON A và JSON B — để so sánh.",
      identical: "Không có điểm khác biệt. Hai tài liệu có cấu trúc và giá trị giống hệt nhau.",
      added: "Được thêm / chỉ có ở B",
      removed: "Bị xóa / chỉ có ở A",
      changed: "Đã thay đổi",
      sideEmpty: "Phần này đang trống.",
      emptyA: "JSON A đang trống.",
      emptyB: "JSON B đang trống.",
      bothInvalid: "Cả hai — JSON A và JSON B — đều không hợp lệ.",
    },
    jsonpath: {
      whatIs:
        "JSONPath giúp bạn trích xuất các giá trị cụ thể từ JSON lồng nhau — giống như CSS selector dành cho dữ liệu. Nhấn vào một ví dụ bên dưới để điền biểu thức.",
      hintTitle: "Hướng dẫn cú pháp nhanh",
      hintBody: `$              Tài liệu gốc (root)
.users         Tên thuộc tính
[*]            Tất cả phần tử của mảng
[0]            Phần tử đầu tiên của mảng`,
      idleTitle: "Kết quả truy vấn sẽ hiển thị tại đây",
      idleBody: "Nhập biểu thức path rồi chạy truy vấn.",
      errorTitle: "Truy vấn thất bại",
      errorBody: "Hãy sửa lỗi trong JSON hoặc path rồi thử lại.",
      noResults: "Không có kết quả nào cho path này.",
      emptyPath: "Hãy nhập biểu thức JSONPath.",
    },
    transform: {
      tsIdleTitle: "Kiểu TypeScript sẽ hiển thị tại đây",
      tsIdleBody: "Dán JSON để tạo kiểu TypeScript.",
      zodIdleTitle: "Schema Zod sẽ hiển thị tại đây",
      zodIdleBody: "Dán JSON để tạo schema Zod.",
      schemaExplain: "JSON ↔ Schema",
      schemaUse:
        "Tạo JSON Schema từ JSON nguồn hoặc tạo JSON mẫu từ schema.",
      schemaIdleTitle: "JSON Schema sẽ hiển thị tại đây",
      schemaIdleBody: "Dán JSON để tạo JSON Schema.",
      yamlIdleTitle: "YAML sẽ hiển thị tại đây",
      yamlIdleBody: "Đang chuyển đổi JSON nguồn sang định dạng YAML.",
      yamlToJsonIdle: "Dán YAML ở trên để chuyển sang JSON nguồn.",
      yamlApplied: "Đã chuyển đổi và áp dụng vào JSON nguồn.",
      csvIdleTitle: "CSV sẽ hiển thị tại đây",
      csvIdleBodyJson:
        "Chuyển một object, mảng các object hoặc object chứa danh sách từ JSON nguồn sang CSV.",
      csvIdleBodyCsv: "Dán CSV có dòng tiêu đề để chuyển sang JSON.",
      csvToJsonIdle: "Dán CSV ở trên để chuyển sang JSON nguồn.",
      csvApplied: "Đã chuyển đổi và áp dụng vào JSON nguồn.",
      csvUnsupported: "Không thể chuyển cấu trúc JSON này sang CSV.",
    },
    utilities: {
      sortAsc: "A → Z",
      sortDesc: "Z → A",
      sortIdleTitle: "Sẵn sàng sắp xếp",
      sortIdleBody: "Chọn A → Z hoặc Z → A để xem các key đã sắp xếp ở output.",
      sortApplied: "Đã sắp xếp key. Xem kết quả bên dưới.",
      removeOptions: "Giá trị rỗng cần xóa",
      removeNull: "null",
      removeEmptyString: '""',
      removeEmptyArray: "[]",
      removeEmptyObject: "{}",
      removeNullLabel: "null",
      removeEmptyStringLabel: "Chuỗi rỗng",
      removeEmptyArrayLabel: "Mảng rỗng",
      removeEmptyObjectLabel: "Object rỗng",
      removePreserveHint: "false và 0 được giữ nguyên, không bị xóa.",
      removeIdleTitle: "JSON sau khi dọn dẹp sẽ hiển thị tại đây",
      removeIdleBody: "Chọn các giá trị cần xóa rồi chạy.",
      nestedLabel: "Lồng nhau",
      flatLabel: "Phẳng",
      flattenHint: "Chuyển các object lồng nhau thành key phân tách bằng dấu chấm (ví dụ address.city, skills.0).",
      flattenUse:
        "Hữu ích khi xuất sang bảng tính, file .env, chỉ mục tìm kiếm hoặc các API cần dictionary phẳng.",
      flattenIdleTitle: "Sẵn sàng làm phẳng",
      flattenIdleBody: "Các key lồng nhau sẽ hiển thị dưới dạng đường dẫn phân tách dấu chấm ở output.",
      flattenApplied: "Đã làm phẳng xong. Xem kết quả bên dưới.",
      unflattenHint: "Chuyển đường dẫn phân tách dấu chấm thành object lồng nhau và phân đoạn số thành mảng.",
      unflattenUse:
        "Hữu ích khi bạn muốn đưa các key phẳng như user.name hoặc skills.0 về cấu trúc JSON lồng nhau thông thường.",
      unflattenIdleTitle: "JSON lồng nhau sẽ hiển thị tại đây",
      unflattenIdleBody: "Dán object có các key phân tách dấu chấm để khôi phục cấu trúc lồng nhau.",
      escapeIdleTitle: "Chuỗi đã escape sẽ hiển thị tại đây",
      escapeIdleBody: "Đang escape JSON để chèn an toàn bên trong chuỗi ký tự.",
      escapeHint:
        'Chuyển JSON thành một chuỗi đã escape để dấu ngoặc kép và xuống dòng an toàn khi đặt trong văn bản khác.',
      escapeUse:
        "Giúp tránh làm vỡ dấu ngoặc kép bên ngoài khi dán JSON vào mã nguồn, biến môi trường hoặc log.",
      unescapeIdleTitle: "JSON đã unescape sẽ hiển thị tại đây",
      unescapeIdleBody: "Dán chuỗi JSON đã escape để khôi phục JSON gốc.",
      repairHint:
        "Sửa từng bước các JSON lỗi, bị cắt cụt, có comment hoặc gõ dở dang.",
      repairUse:
        "Xử lý dấu phẩy thừa cuối dòng, thiếu ngoặc kép/dấu phẩy/dấu ngoặc, comment, code fence, literal Python/JS, JSONP, kiểu MongoDB, NDJSON, đoạn bị cắt và phần dư khi đang sửa.",
      repairAlreadyValid: "JSON vốn đã hợp lệ — chỉ cập nhật lại định dạng.",
      repairFormatted: "Đã định dạng.",
      repairReady: "Sẵn sàng tự động sửa.",
      repairApplied: "Đã sửa xong.",
      repairAppliedToSource: "Đã áp dụng vào JSON nguồn.",
      repairFailedTitle: "Không thể sửa hoàn toàn",
      repairFailedAt: "{message} ({line}:{column})",
      repairPreview: "Xem trước bản sửa",
      repairFixes: {
        "trailing-commas": "Dấu phẩy thừa cuối dòng",
        "single-quotes": "Dấu ngoặc đơn",
        "smart-quotes": "Smart quote",
        "unquoted-keys": "Key không có ngoặc kép",
        "missing-commas": "Thiếu dấu phẩy",
        "missing-brackets": "Thiếu dấu đóng ngoặc",
        comments: "Comment",
        "code-fence": "Code fence",
        "python-literals": "Literal Python",
        "js-undefined": "undefined → null",
        jsonp: "Wrapper JSONP",
        "escaped-string": "Chuỗi JSON đã escape",
        mongodb: "Kiểu MongoDB",
        ndjson: "NDJSON → array",
        ellipsis: "Dấu ba chấm (…)",
        "string-concat": "Nối chuỗi",
        whitespace: "Khoảng trắng & xuống dòng",
        truncated: "Input bị cắt / chưa hoàn chỉnh",
        "mid-edit-junk": "Phần dư giữa lúc chỉnh sửa",
      },
      repairIdleTitle: "JSON đã sửa sẽ hiển thị tại đây",
      repairIdleBody:
        "Dán đoạn trích chưa hoàn chỉnh hoặc dữ liệu giống JSON vào JSON nguồn để xem trước.",
      fromSchemaHint:
        "Tạo JSON mẫu từ JSON Schema dựa trên type, properties, required, items, enum và default.",
      fromSchemaIdleTitle: "JSON mẫu sẽ hiển thị tại đây",
      fromSchemaIdleBody: "Dán JSON Schema bên dưới để tạo dữ liệu mẫu.",
      extractHint:
        'Trích xuất các leaf path kèm giá trị (ví dụ { path: "address.city", value: "TP. Hồ Chí Minh" }).',
      extractIdleTitle: "Key và value trích xuất sẽ hiển thị tại đây",
      extractIdleBody: "Chọn các trường ở trên để lấy cặp path và value.",
      extractKeysHint: "Hiển thị các key lồng nhau dưới dạng đường dẫn phân tách dấu chấm (kèm chỉ số mảng như .0).",
      extractKeysIdleTitle: "Các key trích xuất sẽ hiển thị tại đây",
      extractKeysIdleBody: "Dán JSON để thu thập toàn bộ key.",
      extractValuesHint: "Thu thập tất cả leaf value (kiểu nguyên thủy và null).",
      extractValuesIdleTitle: "Các value trích xuất sẽ hiển thị tại đây",
      extractValuesIdleBody: "Dán JSON để thu thập toàn bộ value.",
      fieldsLabel: "Các trường từ JSON nguồn",
      fieldsClickHint:
        "Nhấn vào một path để chọn. Các thuộc tính lồng nhau được ngăn cách bằng dấu chấm.",
      fieldsSelectAll: "Chọn tất cả",
      fieldsClear: "Bỏ chọn",
      fieldsEmpty: "Không có trường nào để chọn trong JSON này.",
      pickHint: "Chỉ giữ lại các trường đã chọn. Nhấn vào các path trong danh sách bên dưới.",
      pickIdleTitle: "Kết quả sẽ hiển thị tại đây",
      pickIdleBody: "",
      omitHint: "Loại bỏ các trường đã chọn. Nhấn vào các path trong danh sách bên dưới.",
      omitIdleTitle: "Kết quả sẽ hiển thị tại đây",
      omitIdleBody: "",
      compareHint: "So sánh cấu trúc của hai tài liệu JSON cạnh nhau mà không xét sự khác biệt về giá trị.",
      compareUse:
        "Key thiếu ở A tô đỏ, key thêm vào ở B tô xanh lá và khác biệt kiểu dữ liệu tô vàng.",
      compareBack: "Quay lại Workbench",
      compareIdleTitle: "Nhập hai tài liệu JSON",
      compareIdleBody: "Điền cả hai bên để so sánh cấu trúc.",
      compareIdentical: "Cấu trúc giống nhau: các key và kiểu dữ liệu tương đồng.",
      compareMissing: "Key bị thiếu (chỉ có ở A)",
      compareExtra: "Key dư ra (chỉ có ở B)",
      compareType: "Khác kiểu dữ liệu",
    },
    empty: {
      formatTitle: "JSON đã định dạng sẽ hiển thị tại đây",
      formatBody: "Dán JSON ở cột bên trái rồi nhấn «Định dạng».",
    },
    soon: {
      badge: "Sắp ra mắt",
      title: "{tool} sẽ sớm khả dụng",
      body: "Công cụ này nằm trong lộ trình của Workbench và sẽ có mặt ở bản cập nhật tiếp theo.",
    },
    tools: {
      format: "Định dạng",
      minify: "Thu gọn",
      validate: "Kiểm tra hợp lệ",
      tree: "Tree",
      search: "Tìm kiếm",
      diff: "Diff",
      jsonpath: "JSONPath",
      convert: "Chuyển đổi",
      toTypescript: "TypeScript",
      toZod: "Zod",
      toSchema: "JSON Schema",
      yaml: "YAML",
      csv: "CSV",
      sortKeys: "Sắp xếp key",
      removeEmpty: "Xóa giá trị rỗng",
      flatten: "Làm phẳng",
      unflatten: "Khôi phục lồng nhau",
      escape: "Escape",
      unescape: "Unescape",
      repair: "Sửa lỗi",
      extract: "Key & Value",
      extractKeys: "Trích xuất key",
      extractValues: "Trích xuất value",
      pick: "Chọn trường",
      omit: "Loại bỏ trường",
      compareStructure: "So sánh cấu trúc",
    },
  },
  generator: {
    title: "Trình tạo dữ liệu",
    subtitle: "Tạo nhanh dữ liệu kiểm thử sát thực tế cho frontend.",
    chooseType: "Chọn loại dữ liệu",
    searchPlaceholder: "Tìm loại dữ liệu…",
    noTopics: "Không tìm thấy loại dữ liệu phù hợp.",
    fieldsLegend: "Trường dữ liệu",
    moreFields: "Hiện thêm trường",
    lessFields: "Ẩn trường tùy chọn",
    optionalFields: "Trường tùy chọn",
    records: "Số lượng bản ghi",
    customQty: "Tùy chỉnh",
    country: "Quốc gia",
    countrySearch: "Tìm quốc gia…",
    selectPlaceholder: "Chọn loại dữ liệu…",
    outputMode: "Chế độ xuất",
    modePayload: "POST payload",
    modeApi: "API record",
    modePayloadHint: "Không có id và timestamp — phù hợp cho request POST tạo mới.",
    modeApiHint: "Bao gồm id, createdAt và updatedAt — giống bản ghi API đã lưu.",
    jsonType: "JSON",
    viewJson: "JSON",
    viewType: "TS",
    generate: "Tạo {n}",
    generating: "Đang tạo {n}…",
    generateAgain: "Tạo lại",
    refresh: "Làm mới",
    generated: "Đã tạo: {n}",
    download: "Tải xuống",
    createApi: "Tạo API",
    createSuccess: "Đã tạo API tạm thời.",
    createBlockedArray:
      "API tạm thời hỗ trợ tối đa 500 bản ghi. Hãy giảm số lượng rồi thử lại.",
    createBlockedSize:
      "Kích thước JSON vượt giới hạn của API tạm thời (64 KB). Hãy chọn ít bản ghi hoặc ít trường hơn.",
    openTemporary: "Mở trong API Tạm thời",
    emptyTitle: "Chọn loại dữ liệu",
    emptyBody: "Hãy chọn một chủ đề ở trên để tạo các bản ghi kiểm thử sát thực tế.",
    duration1h: "1 giờ",
    duration6h: "6 giờ",
    duration12h: "12 giờ",
    duration24h: "24 giờ",
    countries: {
      all: "Tất cả quốc gia",
      IR: "Iran",
      DE: "Đức",
      US: "Hoa Kỳ",
      GB: "Vương quốc Anh",
      FR: "Pháp",
      NL: "Hà Lan",
      JP: "Nhật Bản",
      CA: "Canada",
    },
    categories: {
      people: "Con người",
      ecommerce: "E-Commerce",
      content: "Nội dung",
      media: "Media",
      business: "Doanh nghiệp",
      location: "Địa điểm",
    },
    fields: {
      id: "id",
      name: "Tên",
      username: "Username",
      email: "Email",
      avatar: "Avatar",
      phone: "Điện thoại",
      company: "Công ty",
      location: "Vị trí",
      age: "Tuổi",
      role: "Role",
      jobTitle: "Chức danh",
      department: "Phòng ban",
      bio: "Tiểu sử",
      website: "Website",
      createdAt: "Ngày tạo",
      updatedAt: "Ngày cập nhật",
      hiredAt: "Ngày vào làm",
      ordersCount: "Số đơn hàng",
      totalSpent: "Tổng chi tiêu",
      postsCount: "Số bài viết",
      price: "Giá",
      image: "Hình ảnh",
      category: "Danh mục",
      description: "Mô tả",
      brand: "Thương hiệu",
      stock: "Tồn kho",
      rating: "Đánh giá",
      sku: "SKU",
      colors: "Màu sắc",
      orderId: "Mã đơn hàng",
      customer: "Khách hàng",
      items: "Sản phẩm",
      total: "Tổng tiền",
      status: "Trạng thái",
      orderDate: "Ngày đặt hàng",
      paymentStatus: "Trạng thái thanh toán",
      shippingAddress: "Địa chỉ giao hàng",
      user: "User",
      comment: "Bình luận",
      post: "Bài viết",
      date: "Ngày",
      product: "Sản phẩm",
      title: "Tiêu đề",
      verified: "Đã xác minh",
      helpful: "Hữu ích",
      slug: "Slug",
      parentCategory: "Danh mục cha",
      productCount: "Số sản phẩm",
      quantity: "Số lượng",
      discount: "Giảm giá",
      code: "Mã",
      type: "Loại",
      expiresAt: "Ngày hết hạn",
      minimumOrder: "Đơn tối thiểu",
      usageLimit: "Giới hạn lượt dùng",
      active: "Hoạt động",
      amount: "Số tiền",
      currency: "Tiền tệ",
      paymentMethod: "Phương thức thanh toán",
      transactionId: "Mã giao dịch",
      order: "Đơn hàng",
      carrier: "Đơn vị vận chuyển",
      trackingNumber: "Mã vận đơn",
      estimatedDelivery: "Dự kiến giao",
      body: "Nội dung",
      author: "Tác giả",
      tags: "Tag",
      publishedAt: "Ngày xuất bản",
      likes: "Lượt thích",
      views: "Lượt xem",
      replies: "Phản hồi",
      attachments: "Tệp đính kèm",
      actionUrl: "URL hành động",
      sender: "Người gửi",
      receiver: "Người nhận",
      message: "Tin nhắn",
      read: "Đã đọc",
      artist: "Nghệ sĩ",
      cover: "Ảnh bìa",
      year: "Năm",
      genre: "Thể loại",
      tracks: "Track",
      album: "Album",
      duration: "Thời lượng",
      poster: "Poster",
      director: "Đạo diễn",
      language: "Ngôn ngữ",
      plays: "Lượt phát",
      label: "Hãng phát hành",
      pages: "Số trang",
      isbn: "ISBN",
      instructor: "Giảng viên",
      level: "Trình độ",
      lessons: "Bài học",
      students: "Học viên",
      employees: "Nhân sự",
      logo: "Logo",
      industry: "Ngành nghề",
      salary: "Lương",
      experience: "Kinh nghiệm",
      remote: "Remote",
      founded: "Năm thành lập",
      postedAt: "Ngày đăng",
      capacity: "Sức chứa",
      capital: "Thủ đô",
      flag: "Quốc kỳ",
      region: "Khu vực",
      population: "Dân số",
      street: "Đường",
      postalCode: "Mã bưu chính",
      latitude: "Latitude",
      longitude: "Longitude",
      country: "Quốc gia",
      city: "Thành phố",
      notes: "Ghi chú",
      team: "Team",
      joinedAt: "Ngày tham gia",
      skills: "Kỹ năng",
      specialty: "Chuyên khoa",
      hospital: "Bệnh viện",
      licenseNumber: "Số giấy phép",
      yearsExperience: "Số năm kinh nghiệm",
      bloodType: "Nhóm máu",
      diagnosis: "Chẩn đoán",
      doctor: "Bác sĩ",
      admittedAt: "Ngày nhập viện",
      vehicleType: "Loại xe",
      plateNumber: "Biển số xe",
      tripsCount: "Số chuyến",
      roomNumber: "Số phòng",
      checkIn: "Nhận phòng",
      checkOut: "Trả phòng",
      nights: "Số đêm",
      followers: "Người theo dõi",
      following: "Đang theo dõi",
      grade: "Lớp / Khối",
      school: "Trường học",
      gpa: "GPA",
      major: "Chuyên ngành",
      enrollmentYear: "Năm nhập học",
      subject: "Môn học",
      classesCount: "Số lớp",
      invoiceNumber: "Số hóa đơn",
      issueDate: "Ngày phát hành",
      dueDate: "Ngày đến hạn",
      tax: "Thuế",
      itemsCount: "Số lượng mục",
      target: "Mục tiêu",
      targetType: "Loại mục tiêu",
      reaction: "Cảm xúc",
      color: "Màu",
      thumbnail: "Thumbnail",
      channel: "Kênh",
      url: "URL",
      width: "Chiều rộng",
      height: "Chiều cao",
      alt: "Văn bản alt",
      photographer: "Nhiếp ảnh gia",
      host: "Host",
      episodes: "Tập",
      subscribers: "Người đăng ký",
      owner: "Chủ sở hữu",
      public: "Công khai",
      progress: "Tiến độ",
      teamSize: "Quy mô team",
      budget: "Ngân sách",
      startDate: "Ngày bắt đầu",
      membersCount: "Số thành viên",
      focus: "Trọng tâm",
      countriesCount: "Số quốc gia",
      areaKm2: "Diện tích (km²)",
      timezone: "Múi giờ",
      terminals: "Nhà ga",
      altitude: "Độ cao",
      accuracy: "Độ chính xác",
    },
    topics: {
      users: {
        name: "Users",
        description: "Hồ sơ user cho ứng dụng và dashboard",
        preview: {
          line1: "Minh Nguyễn",
          line2: "@minh_nguyen · minh@mail.test",
          line3: "TP. Hồ Chí Minh",
        },
      },
      customers: {
        name: "Khách hàng",
        description: "Thông tin liên hệ và tài khoản khách hàng",
        preview: {
          line1: "Linh Trần",
          line2: "linh@demo.dev",
          line3: "+84 90 123 4567",
        },
      },
      employees: {
        name: "Nhân viên",
        description: "Thành viên nhóm kèm chức danh và phòng ban",
        preview: {
          line1: "Khoa Phạm",
          line2: "Frontend Developer",
          line3: "Engineering · Acme",
        },
      },
      authors: {
        name: "Tác giả",
        description: "Người viết bài và nhà sáng tạo nội dung",
        preview: {
          line1: "Thảo Lê",
          line2: "Viết về product design và trải nghiệm UX.",
        },
      },
      contacts: {
        name: "Danh bạ liên hệ",
        description: "Liên hệ và công ty phục vụ CRM",
        preview: {
          line1: "Huy Hoàng",
          line2: "huy@acme.test · Acme",
        },
      },
      "team-members": {
        name: "Thành viên Team",
        description: "Thành viên nhóm sản phẩm và kỹ thuật",
        preview: {
          line1: "Ngọc Bùi",
          line2: "Tech Lead · Platform",
        },
      },
      doctors: {
        name: "Bác sĩ",
        description: "Bác sĩ kèm chuyên khoa và bệnh viện",
        preview: {
          line1: "BS. Tuấn Đặng",
          line2: "Tim mạch · Bệnh viện Đa khoa Thành phố",
        },
      },
      patients: {
        name: "Bệnh nhân",
        description: "Hồ sơ bệnh nhân kèm chẩn đoán và nhóm máu",
        preview: {
          line1: "Mai Vũ",
          line2: "A+ · Tăng huyết áp",
        },
      },
      drivers: {
        name: "Tài xế",
        description: "Tài xế đặt xe kèm loại xe và đánh giá",
        preview: {
          line1: "Nam Đỗ",
          line2: "Sedan · ★ 4,8",
        },
      },
      guests: {
        name: "Khách lưu trú",
        description: "Khách khách sạn kèm số phòng và trạng thái nhận phòng",
        preview: {
          line1: "Hà Ngô",
          line2: "Phòng 412 · Đã check-in",
        },
      },
      profiles: {
        name: "Hồ sơ mạng xã hội",
        description: "Hồ sơ cá nhân kèm lượt theo dõi và tiểu sử",
        preview: {
          line1: "Khánh Hồ",
          line2: "@khanh_ho · 12K người theo dõi",
        },
      },
      "girl-students": {
        name: "Học sinh nữ",
        description: "Hồ sơ học sinh nữ kèm lớp và trường",
        preview: {
          line1: "Lan Dương",
          line2: "Lớp 10 · THPT Chu Văn An",
        },
      },
      "boy-students": {
        name: "Học sinh nam",
        description: "Hồ sơ học sinh nam kèm lớp và trường",
        preview: {
          line1: "Bảo Phan",
          line2: "Lớp 9 · THCS Nguyễn Du",
        },
      },
      teachers: {
        name: "Giáo viên",
        description: "Giáo viên kèm môn học và trường",
        preview: {
          line1: "Hương Lý",
          line2: "Toán học · THPT Lê Hồng Phong",
        },
      },
      products: {
        name: "Sản phẩm",
        description: "Sản phẩm cửa hàng kèm giá bán và thông số",
        preview: {
          line1: "Tai nghe chống ồn không dây",
          line2: "1.290.000 ₫ · Điện tử",
          line3: "★★★★☆",
        },
      },
      orders: {
        name: "Đơn hàng",
        description: "Đơn hàng của khách kèm danh sách sản phẩm và trạng thái giao",
        preview: {
          line1: "Đơn #10482",
          line2: "3 sản phẩm · 2.450.000 ₫",
          line3: "Đã giao hàng",
        },
      },
      reviews: {
        name: "Đánh giá",
        description: "Điểm sao và nhận xét từ khách hàng",
        preview: {
          line1: "★★★★★ Rất đáng tiền",
          line2: "Hoàn thiện chắc chắn và thao tác rất mượt.",
        },
      },
      categories: {
        name: "Danh mục",
        description: "Danh mục sản phẩm cho thương mại điện tử",
        preview: { line1: "Điện tử", line2: "electronics" },
      },
      "cart-items": {
        name: "Sản phẩm trong giỏ",
        description: "Mặt hàng được thêm vào giỏ hàng",
        preview: { line1: "Đồng hồ thông minh", line2: "2 × 890.000 ₫ · 1.780.000 ₫" },
      },
      coupons: {
        name: "Mã giảm giá",
        description: "Mã khuyến mãi và điều kiện áp dụng",
        preview: { line1: "CHAO10", line2: "Giảm 10% · đến 2026-12-01" },
      },
      payments: {
        name: "Thanh toán",
        description: "Giao dịch kèm số tiền và hình thức thanh toán",
        preview: { line1: "650.000 ₫ VND", line2: "Chuyển khoản · Thành công" },
      },
      shipments: {
        name: "Vận chuyển",
        description: "Trạng thái giao nhận và đơn vị vận chuyển",
        preview: { line1: "SHP-10482 · Giao Hàng Nhanh", line2: "Đang giao" },
      },
      invoices: {
        name: "Hóa đơn",
        description: "Hóa đơn thanh toán kèm giá trị và hạn thanh toán",
        preview: { line1: "INV-10482", line2: "12.500.000 ₫ · Đã thanh toán" },
      },
      brands: {
        name: "Thương hiệu",
        description: "Thương hiệu kèm logo và số lượng sản phẩm",
        preview: { line1: "Acme", line2: "acme · 128 sản phẩm" },
      },
      posts: {
        name: "Bài viết",
        description: "Bài blog và bài đăng trên bảng tin",
        preview: { line1: "Cách thiết kế giao diện gọn và dễ dùng", line2: "Bởi Thảo Lê" },
      },
      comments: {
        name: "Bình luận",
        description: "Bình luận trên bài viết và sản phẩm",
        preview: {
          line1: "Giải thích rất rõ ràng và dễ áp dụng!",
          line2: "thao · 12 lượt thích",
        },
      },
      messages: {
        name: "Tin nhắn",
        description: "Hội thoại chat và tin nhắn trực tiếp",
        preview: {
          line1: "Bạn xem giúp bản demo mới nhất nhé?",
          line2: "Khoa Phạm → Linh Trần",
        },
      },
      notifications: {
        name: "Thông báo",
        description: "Thông báo và cảnh báo trong ứng dụng",
        preview: { line1: "Bình luận mới", line2: "Cộng đồng · 2 giờ trước" },
      },
      tags: {
        name: "Tag",
        description: "Tag kèm slug và số lượng bài viết",
        preview: { line1: "typescript", line2: "142 bài viết" },
      },
      "content-categories": {
        name: "Chuyên mục nội dung",
        description: "Các nhóm bài viết và tài liệu hướng dẫn",
        preview: { line1: "Hướng dẫn", line2: "guides · 86 bài viết" },
      },
      likes: {
        name: "Lượt thích",
        description: "Lượt thích trên bài viết và bình luận",
        preview: { line1: "Khánh Hồ đã thích bài viết", line2: "Bài viết · Thích" },
      },
      albums: {
        name: "Album",
        description: "Album nhạc kèm ảnh bìa và danh sách track",
        preview: {
          line1: "Random Access Memories",
          line2: "Daft Punk",
          line3: "2013 · 13 track",
        },
      },
      songs: {
        name: "Bài hát",
        description: "Track âm thanh kèm thời lượng và nghệ sĩ",
        preview: { line1: "Midnight Cruise", line2: "3:42 · Điện tử" },
      },
      movies: {
        name: "Phim",
        description: "Phim kèm poster và điểm đánh giá",
        preview: { line1: "Late Night Express", line2: "2021 · ★ 8,2" },
      },
      books: {
        name: "Sách",
        description: "Sách kèm tác giả và ảnh bìa",
        preview: { line1: "Ghi chép thiết kế giao diện", line2: "Thảo Lê · 2019" },
      },
      videos: {
        name: "Video",
        description: "Video clip kèm thời lượng và lượt xem",
        preview: {
          line1: "Dựng dashboard trong 10 phút",
          line2: "12:40 · 84N lượt xem",
        },
      },
      images: {
        name: "Hình ảnh",
        description: "Đồ họa kèm kích thước và tag",
        preview: { line1: "Hoàng hôn bên sông Hàn", line2: "1280×720" },
      },
      podcasts: {
        name: "Podcast",
        description: "Chương trình podcast kèm host và số tập",
        preview: { line1: "Code & Cà phê", line2: "48 tập · Tech" },
      },
      playlists: {
        name: "Playlist",
        description: "Danh sách phát kèm người tạo và thể loại",
        preview: { line1: "Tập trung", line2: "32 track · Điện tử" },
      },
      companies: {
        name: "Công ty",
        description: "Hồ sơ doanh nghiệp và lĩnh vực hoạt động",
        preview: { line1: "Acme Corp", line2: "Dịch vụ IT · TP. Hồ Chí Minh" },
      },
      jobs: {
        name: "Việc làm",
        description: "Vị trí tuyển dụng kèm địa điểm và hình thức làm việc",
        preview: {
          line1: "Frontend Developer",
          line2: "Google · TP. Hồ Chí Minh · Full-time",
        },
      },
      courses: {
        name: "Khóa học",
        description: "Khóa học kèm giáo trình và giảng viên",
        preview: { line1: "React thực chiến", line2: "Trung cấp · 12 giờ" },
      },
      events: {
        name: "Sự kiện",
        description: "Meetup, hội nghị và workshop",
        preview: { line1: "Frontend Summit", line2: "Đà Nẵng · Workshop" },
      },
      projects: {
        name: "Dự án",
        description: "Dự án kèm tiến độ và ngân sách",
        preview: { line1: "Thiết kế lại trang Analytics", line2: "Đang làm · 72%" },
      },
      teams: {
        name: "Team",
        description: "Nhóm nội bộ kèm trưởng nhóm và sĩ số",
        preview: { line1: "Team Sản phẩm", line2: "8 thành viên · Engineering" },
      },
      continents: {
        name: "Châu lục",
        description: "Các châu lục trên thế giới kèm mã và số liệu cơ bản",
        preview: { line1: "Châu Á", line2: "AS · 48 quốc gia" },
      },
      countries: {
        name: "Quốc gia",
        description: "Quốc gia kèm tên, mã và quốc kỳ",
        preview: { line1: "Việt Nam", line2: "VN · Hà Nội" },
      },
      cities: {
        name: "Thành phố",
        description: "Thành phố kèm khu vực và quốc gia",
        preview: { line1: "Đà Nẵng", line2: "Việt Nam · Miền Trung" },
      },
      addresses: {
        name: "Địa chỉ",
        description: "Địa chỉ giao hàng và văn phòng",
        preview: {
          line1: "235 Đồng Khởi, Phường Bến Nghé",
          line2: "700000 Quận 1, TP. Hồ Chí Minh, Việt Nam",
        },
      },
      regions: {
        name: "Khu vực / Tỉnh thành",
        description: "Khu vực địa lý và tỉnh thành",
        preview: { line1: "Thừa Thiên Huế", line2: "Việt Nam · Huế" },
      },
      neighborhoods: {
        name: "Phường / Khu phố",
        description: "Khu vực dân cư và phường xã",
        preview: { line1: "Thảo Điền", line2: "TP. Thủ Đức · 71300" },
      },
      airports: {
        name: "Sân bay",
        description: "Sân bay kèm mã và thành phố",
        preview: { line1: "Sân bay Quốc tế Nội Bài", line2: "HAN · Việt Nam" },
      },
      coordinates: {
        name: "Tọa độ",
        description: "Dữ liệu latitude, longitude và vị trí",
        preview: {
          line1: "21.027763, 105.834160",
          line2: "Hà Nội · Việt Nam",
        },
      },
    },
    errors: {
      pickTopic: "Hãy chọn một loại dữ liệu trước.",
      INVALID_TOPIC: "Loại dữ liệu không xác định.",
      INVALID_FIELDS: "Hãy chọn ít nhất một trường dữ liệu.",
      INVALID_QUANTITY: "Số lượng phải nằm trong khoảng từ 1 đến 1000.",
      INVALID_COUNTRY: "Quốc gia không hợp lệ.",
      GENERATE_FAILED: "Không thể tạo dữ liệu. Vui lòng thử lại sau.",
      DOWNLOAD_FAILED: "Không thể tải file. Vui lòng thử lại sau.",
      CREATE_FAILED: "Không thể tạo API tạm thời.",
      LIMIT_REACHED: "Đã đạt giới hạn tối đa 5 API tạm thời. Hãy xóa bớt một API trước.",
      RATE_LIMITED: "Bạn đã gửi quá nhiều request. Vui lòng thử lại sau ít phút.",
    },
  },
  preview: {
    docs: "Tài liệu",
    playground: "Playground",
    blurb: "Giao diện đơn giản giúp bạn thấy cách API này vận hành thực tế.",
    blurbFaHint: "",
    backToResource: "Quay lại {name}",
    search: "Tìm kiếm",
    create: "Tạo mới",
    edit: "Chỉnh sửa",
    delete: "Xóa",
    save: "Lưu",
    saving: "Đang lưu…",
    deleting: "Đang xóa…",
    cancel: "Hủy",
    fillSample: "Điền mẫu",
    noRecords: "Không có bản ghi nào",
    loading: "Đang tải…",
    confirmDelete: "Xóa bản ghi này?",
    confirmDeleteBody: "Thao tác này không thể hoàn tác.",
    networkError: "Lỗi kết nối mạng",
    authDemoPassword: "Mật khẩu demo giống nhau cho mọi user thường:",
    username: "Username",
    password: "Password",
    login: "Đăng nhập",
    loginSuccess: "Đăng nhập thành công.",
    logout: "Đăng xuất",
    getMe: "GET /me",
    token: "Token",
    user: "User",
    loginFirst: "Hãy đăng nhập trước để lấy token",
    createdAt: "Ngày tạo",
    fieldLabels: {
      name: "Tên",
      username: "Username",
      email: "Email",
      avatarUrl: "URL Avatar",
      role: "Role",
      city: "Thành phố",
      country: "Quốc gia",
      company: "Công ty",
      title: "Tiêu đề",
      body: "Nội dung",
      published: "Đã xuất bản",
      userId: "ID User",
      postId: "ID Bài viết",
      albumId: "ID Album",
      url: "URL",
      thumbnailUrl: "URL Thumbnail",
      completed: "Hoàn thành",
      description: "Mô tả",
      price: "Giá",
      stock: "Tồn kho",
      category: "Danh mục",
      imageUrl: "URL Hình ảnh",
      message: "Tin nhắn",
      type: "Loại",
      read: "Đã đọc",
      code: "Mã",
      capital: "Thủ đô",
      region: "Khu vực",
      population: "Dân số",
      currency: "Tiền tệ",
      flagUrl: "URL Quốc kỳ",
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
      teaser: "Đang phát triển — công cụ format, diff và chuyển đổi",
      hint: "/json — chọn một công cụ để chuyển khung làm việc",
      badge: "Đang phát triển",
      summary:
        "JSON Workbench (đang phát triển) là bộ công cụ chạy trên trình duyệt để định dạng, so sánh cấu trúc, tìm kiếm và chuyển đổi JSON, hỗ trợ TypeScript, Zod, YAML, CSV cùng nhiều tiện ích khác.",
      details: [
        "Mở JSON Workbench tại /json và chọn công cụ để chuyển khung làm việc ngay lập tức (hỗ trợ tham số ?tool=).",
        "Công cụ cốt lõi: Format, Tree, Search, JSONPath và Compare Structure.",
        "Trình chuyển đổi: TypeScript, Zod, JSON Schema, YAML và CSV.",
        "Tiện ích: Sort Keys, Remove Empty, Flatten, Escape, Repair, Pick/Omit trường và nhiều tiện ích khác.",
        "Đang được phát triển tích cực — nhiều công cụ và cải tiến mới sẽ ra mắt ở các bản cập nhật tiếp theo.",
      ],
    },
    "2026-09-19-image-generator": {
      title: "Trình tạo ảnh",
      teaser: "URL ảnh placeholder tùy chỉnh",
      hint: "/image-generator — chọn SVG hoặc ảnh thật rồi sao chép URL",
      summary:
        "Tạo ảnh placeholder bằng tham số URL, có sẵn các kích thước cho avatar, post, banner và nhiều mục đích khác với SVG MockData cùng ảnh từ Picsum.",
      details: [
        "Chọn SVG hoặc ảnh thật tại /image-generator, chỉnh chiều rộng và chiều cao rồi sao chép URL.",
        "URL công khai mặc định trả về kết quả ngẫu nhiên: dùng /image/{w}/{h} cho SVG hoặc thêm ?type=real cho ảnh chụp.",
        "Truyền tham số ?seed= tùy chỉnh để giữ màu SVG hoặc ảnh cố định.",
        "Dán URL trực tiếp vào thẻ <img>, CSS hoặc trường ảnh.",
      ],
    },
    "2026-09-17-generator": {
      title: "Trình tạo dữ liệu",
      teaser: "Dữ liệu JSON sát thực tế trong vài giây",
      hint: "/generator — chọn chủ đề để tạo, sao chép hoặc tạo API",
      summary:
        "Tạo nhanh dữ liệu JSON sát thực tế cho frontend. Chọn chủ đề, trường dữ liệu và số lượng bản ghi — sau đó sao chép, tải xuống hoặc tạo API tạm thời.",
      details: [
        "Tạo dữ liệu từ các nhóm People, E-Commerce, Content, Media, Business và Location tại /generator.",
        "Hỗ trợ cả định dạng POST payload lẫn API record; có thêm dữ liệu tiếng Ba Tư bản địa hóa cho FA.",
        "Tạo tối đa 1.000 bản ghi mỗi lần trên trình duyệt; thao tác «Tạo API» tuân theo giới hạn của API tạm thời (500 bản ghi / 64 KB).",
        "Tùy chọn đã chọn và dữ liệu vừa tạo được giữ lại khi chuyển trang (sẽ đặt lại khi tải lại trang).",
      ],
    },
    "2026-09-16-temporary": {
      title: "API Tạm thời",
      teaser: "Dán JSON và nhận ngay URL REST tạm thời",
      hint: "/temporary — dán JSON để tạo URL REST công khai",
      summary:
        "Tạo endpoint REST tạm thời truy cập công khai từ JSON dán vào. Không cần đăng nhập; tối đa 5 API hoạt động cùng lúc trên mỗi trình duyệt.",
      details: [
        "Tạo tại /temporary với thời hạn 1 giờ, 6 giờ, 12 giờ hoặc 24 giờ.",
        "Dùng GET, POST, PATCH và DELETE trên /api/t/… tương tự các resource khác.",
        "Tối đa 5 API hoạt động trên mỗi trình duyệt và tối đa 20 lần tạo mỗi giờ trên mỗi IP.",
        "Hãy coi URL như mật khẩu: ai có liên kết này đều có thể đọc và chỉnh sửa dữ liệu cho đến khi hết hạn.",
      ],
    },
    "2026-09-15-preview": {
      title: "Xem trước Resource",
      teaser: "Giao diện đơn giản kết nối thẳng với API thật",
      hint: "/preview/users — thử CRUD trực tiếp trên trình duyệt",
      summary:
        "Các màn hình demo trực quan cho những resource như Users, Posts và Auth hoạt động trên API thật.",
      details: [
        "Mở bản xem trước trực tiếp từ trang tài liệu của bất kỳ resource nào.",
        "Kiểm thử đọc, tìm kiếm, phân trang, tạo mới, sửa và xóa trên cơ sở dữ liệu demo dùng chung.",
        "Bản xem trước Auth gồm form đăng nhập (mật khẩu chung: password) và request GET /me kèm token.",
        "Đổi ngôn ngữ ở thanh trên khi bạn cần nhập dữ liệu tiếng Ba Tư.",
      ],
    },
    "2026-09-14-lang-fa": {
      title: "Dữ liệu tiếng Ba Tư (?lang=fa)",
      teaser: "Dữ liệu kiểm thử tiếng Ba Tư bản địa hóa",
      hint: "/api/users?lang=fa — thêm lang=fa để lấy dữ liệu tiếng Ba Tư",
      summary:
        "Thêm ?lang=fa vào endpoint để nhận tên, username, số điện thoại và nội dung chữ bằng tiếng Ba Tư.",
      details: [
        "Ngôn ngữ mặc định là tiếng Anh; ngôn ngữ chỉ phụ thuộc vào query parameter lang=fa (không dùng cookie hay Accept-Language).",
        "Response FA có header Content-Language: fa cùng gợi ý font Vazirmatn.",
        "Hoạt động với danh sách, bản ghi đơn lẻ lẫn đăng nhập bằng username tiếng Ba Tư.",
        "Chọn فارسی ở thanh trên cũng giúp Playground tự động thêm lang=fa.",
      ],
    },
    "2026-09-12-playground": {
      title: "Playground",
      teaser: "Gọi API trực tiếp ngay trên trình duyệt",
      hint: "/playground — gửi request và xem JSON",
      summary:
        "Gửi request API trực tiếp trên trình duyệt, kiểm thử đăng nhập thành công lẫn thất bại và xem JSON đã định dạng.",
      details: [
        "Chọn resource và thao tác, chỉnh query parameter hoặc body JSON rồi gửi request.",
        "Tại Auth, so sánh nhanh response 200 và 401 qua hai nút «Thông tin hợp lệ» và «Thông tin sai».",
        "Xem mã trạng thái HTTP, JSON đã định dạng và phân trang của collection.",
        "Request của từng resource cùng response gần nhất được lưu khi chuyển trang (sẽ đặt lại khi tải lại trang).",
      ],
    },
    "2026-09-10-auth": {
      title: "Mock Auth",
      teaser: "Đăng nhập và xác thực bằng Bearer Token",
      hint: "/api/auth/login — password luôn là password",
      summary:
        "Gửi POST tới /api/auth/login kèm thông tin user demo và password để nhận Bearer Token dùng cho /me.",
      details: [
        "Mật khẩu demo chung cho mọi user thường là password.",
        "Khi thành công, endpoint trả về mock Bearer Token và object user (id, name, username, email, role).",
        "Sai password hoặc không tìm thấy user sẽ trả về 401 kèm thông báo lỗi rõ ràng.",
        "Truyền header Authorization: Bearer <token> khi gọi GET /api/auth/me để lấy thông tin user hiện tại.",
      ],
    },
    "2026-09-08-resources": {
      title: "Resource REST Đang chạy",
      teaser: "Đầy đủ CRUD cho Users, Posts và nhiều resource khác",
      hint: "/docs#resources — xem danh sách endpoint hiện có",
      summary:
        "Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications và Countries đã sẵn sàng với đầy đủ CRUD và phân trang.",
      details: [
        "Danh sách phân trang trả về { data, pagination } gồm page, limit, total và totalPages.",
        "Hỗ trợ query parameter để tìm kiếm, sắp xếp, lọc, giả lập độ trễ và ép mã lỗi.",
        "Cơ sở dữ liệu dùng chung trên production được đặt lại hằng ngày — dùng cho demo và kiểm thử, không dùng lưu trữ lâu dài.",
        "Tải đặc tả máy đọc được từ /openapi.json để dùng với Postman, Swagger hoặc các công cụ AI.",
      ],
    },
  },
  catalog: {
    auth: {
      title: "Auth",
      summary:
        "Endpoint giả lập đăng nhập bằng username và password. Trả về Bearer Token nếu hợp lệ hoặc 401 nếu bị từ chối.",
    },
    users: {
      title: "Users",
      summary: "CRUD API giả lập cho user kèm tìm kiếm, lọc theo role và phân trang.",
    },
    posts: {
      title: "Posts",
      summary: "Bài viết liên kết với user, hỗ trợ tag và trạng thái xuất bản.",
    },
    comments: {
      title: "Comments",
      summary: "Bình luận trên bài viết kèm tên, email và nội dung.",
    },
    albums: {
      title: "Albums",
      summary: "Album của user; ảnh liên kết tới album thông qua albumId.",
    },
    photos: {
      title: "Photos",
      summary: "Ảnh trong album kèm các trường url và thumbnailUrl.",
    },
    todos: {
      title: "Todos",
      summary: "Danh sách công việc đơn giản liên kết với user kèm trạng thái hoàn thành.",
    },
    products: {
      title: "Products",
      summary: "Catalog sản phẩm kèm giá, tồn kho, danh mục và imageUrl.",
    },
    notifications: {
      title: "Notifications",
      summary: "Thông báo của user kèm loại thông báo và trạng thái đã đọc.",
    },
    countries: {
      title: "Countries",
      summary: "Dữ liệu quốc gia kèm mã ISO, khu vực, dân số và quốc kỳ.",
    },
  },
};

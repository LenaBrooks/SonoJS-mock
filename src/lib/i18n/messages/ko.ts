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

export const ko: Messages = {
  common: {
    home: "홈",
    docs: "문서",
    playground: "Playground",
    contact: "문의하기",
    preview: "미리보기",
    search: "검색",
    loading: "불러오는 중…",
    save: "저장",
    saving: "저장 중…",
    cancel: "취소",
    create: "생성",
    edit: "수정",
    delete: "삭제",
    searchPlaceholder: "API 검색…",
    noResults: "검색 결과가 없습니다",
    new: "신규",
    inDevelopment: "개발 중",
    actions: "작업",
    copy: "복사",
    copied: "복사됨",
    live: "운영 중",
    open: "열기",
    tryIt: "사용해 보기",
    learnMore: "자세히 보기",
    back: "뒤로",
    close: "닫기",
    yes: "예",
    no: "아니요",
    name: "이름",
    email: "이메일",
    message: "메시지",
    send: "보내기",
    sending: "전송 중…",
    networkError: "네트워크 오류",
    temporary: "임시 API",
    temporaryBadge: "바로 사용",
    generator: "더미 데이터 생성기",
    imageGenerator: "이미지 생성기",
    jsonWorkbench: "JSON 작업공간",
  },
  header: {
    primaryNav: "기본 탐색",
    whatsNew: "새 소식",
    whatsNewTitle: "새 소식",
    whatsNewSubtitle: "최신 기능 및 업데이트",
    latest: "최신",
    contact: "소개 및 문의",
    menu: "메뉴",
    openMenu: "메뉴 열기",
    appearance: "화면 테마",
    lightMode: "라이트 모드로 전환",
    darkMode: "다크 모드로 전환",
    light: "라이트",
    dark: "다크",
    apiLangGroup: "언어",
    english: "English",
    persian: "فارسی",
    github: "GitHub",
    githubStars: "GitHub — 저장소에 별표 주기",
  },
  home: {
    tagline:
      "실제와 같은 JSON을 바로 사용할 수 있는 무료 REST 목(Mock) API입니다. 백엔드를 따로 구축하지 않고도 프로토타이핑과 인증 테스트, 실전 연동 개발을 빠르게 진행할 수 있습니다.",
    taglineNote: "",
    resourcesTitle: "리소스",
    resourcesBlurb:
      "문서와 예제가 포함된 10개의 REST API를 바로 사용할 수 있습니다. 프로덕션 환경에서는 공용 데모 데이터를 사용합니다.",
    searchLabel: "API 및 엔드포인트 검색",
    searchPlaceholder: "users, posts, auth 등 검색…",
    temporaryCtaTitle: "임시 API",
    temporaryCtaBody:
      "JSON을 붙여넣거나 생성기에서 바로 임시 API를 만들 수 있습니다. URL은 비밀번호처럼 안전하게 관리하세요. 브라우저당 최대 5개의 활성 임시 API를 유지할 수 있습니다.",
    temporaryCtaLink: "임시 API 만들기",
  },
  notFound: {
    title: "페이지를 찾을 수 없습니다",
    body: "요청하신 페이지가 MockData에 존재하지 않습니다. 홈으로 돌아가거나 문서를 확인해 보세요.",
    home: "홈",
    docs: "문서",
  },
  blog: {
    title: "블로그",
    description:
      "더미 데이터, JSON, API, 프런트엔드 개발 워크플로에 대한 가이드와 인사이트를 확인해 보세요.",
    all: "전체",
    emptyTitle: "아직 게시된 글이 없습니다",
    emptyBody: "새 글이 발행되면 이곳에 표시됩니다. 잠시 후 다시 확인해 주세요.",
    emptyCategoryTitle: "일치하는 글이 없습니다",
    emptyCategoryBody: "다른 카테고리를 선택하거나 전체 글 목록을 살펴보세요.",
    readingTime: "약 {n}분 소요",
    previousPage: "이전",
    nextPage: "다음",
    pageStatus: "{total}페이지 중 {page}페이지",
    paginationNav: "페이지 이동",
    categoriesNav: "카테고리 탐색",
    backToBlog: "블로그",
    previousArticle: "이전 글",
    nextArticle: "다음 글",
    relatedArticles: "관련 글",
    categories: {
      news: "소식",
      "mock-data": "더미 데이터",
      json: "JSON",
      api: "API",
      frontend: "프런트엔드",
    },
  },
  contact: {
    title: "문의하기",
    intro:
      "궁금한 점이나 피드백, 아이디어가 있다면 편하게 메시지를 남겨 주세요. 이메일로도 연락할 수 있습니다:",
    name: "이름",
    email: "이메일",
    topic: "문의 유형",
    message: "내용",
    send: "메시지 보내기",
    sending: "전송 중…",
    success: "메시지를 보냈습니다. 소중한 의견 감사합니다. 빠르게 확인해 답변드릴게요.",
    chooseTopic: "문의 유형을 선택해 주세요.",
    pickTopic: "어떤 내용으로 문의하시나요?",
    topics: {
      question: "질문",
      bug: "버그 제보",
      feature: "기능 제안",
      other: "기타",
    },
  },
  docs: {
    title: "문서",
    navLabel: "문서 목차",
    intro:
      "MockData는 JSON 기반의 목 REST 리소스를 제공합니다. 공개 엔드포인트 호출과 인증 로그인 흐름 테스트, Playground에서 요청 전송, /generator에서 테스트 데이터 생성, /image-generator에서 플레이스홀더 이미지 생성, /json에서 JSON Workbench 활용, 임시 API 생성까지 모두 브라우저에서 바로 테스트할 수 있습니다. 프로덕션 카탈로그 리소스는 공용 데이터베이스를 사용합니다(자세한 내용은 공용 데이터 항목을 참고하세요).",
    toc: {
      intro: "소개",
      whatsNew: "새 소식",
      temporary: "임시 API",
      generator: "더미 데이터 생성기",
      imageGenerator: "이미지 생성기",
      jsonWorkbench: "JSON 작업공간",
      sharedData: "공용 데이터",
      language: "언어",
      resources: "리소스",
      openapi: "OpenAPI",
      requests: "요청",
      errors: "오류",
      rateLimit: "요청 제한",
      reset: "데이터 초기화",
    },
    whatsNewTitle: "새 소식",
    whatsNewBlurb:
      "개발자를 위한 주요 업데이트를 최신순으로 정리했습니다. 카드를 누르면 상세 내용을 볼 수 있으며, 상단 알림 아이콘에서도 같은 목록을 열 수 있습니다.",
    temporaryTitle: "임시 API",
    temporaryBody:
      "원하는 JSON을 담은 일회성 REST 엔드포인트가 필요하신가요? 임시 API는 공용 카탈로그와 분리되어 동작합니다. JSON을 붙여넣고 만료 시간을 고르면 /api/t/… 공개 URL이 발급되며, 생성기의 'API 만들기'에서도 바로 만들 수 있습니다.",
    temporaryBullets: [
      "회원가입 없이 /temporary 에서 브라우저로 바로 만들 수 있습니다(/generator 의 'API 만들기'에서도 생성 가능).",
      "만료 시간은 1시간, 6시간, 12시간, 24시간 중 선택할 수 있으며 기본값은 12시간입니다.",
      "발급된 /api/t/… URL에 일반 컬렉션이나 문서처럼 GET, POST, PATCH, DELETE 요청을 보낼 수 있습니다.",
      "URL은 비밀번호처럼 안전하게 다루세요. 만료 전까지는 URL을 아는 누구나 데이터를 읽고 수정할 수 있습니다.",
      "만료된 임시 API에 요청을 보내면 HTTP 410 응답이 반환됩니다.",
    ],
    temporaryLimitsTitle: "임시 API 제한 사항",
    temporaryLimitsBullets: [
      "브라우저당 동시에 유지할 수 있는 활성 임시 API는 최대 5개입니다.",
      "1시간 슬라이딩 윈도우 기준 IP당 최대 20개까지 생성할 수 있습니다(초과 시 HTTP 429).",
      "JSON 페이로드 최대 크기는 64 KB입니다.",
      "최대 중첩 깊이는 8단계, 배열 길이는 최대 500개, 객체 키 개수는 최대 200개까지 허용됩니다.",
      "/api 전체 요청 제한(IP당 분당 약 60회)도 함께 적용됩니다.",
    ],
    generatorTitle: "더미 데이터 생성기",
    generatorBody:
      "직접 샘플 데이터를 만들지 않고도 프런트엔드 개발에 쓸 수 있는 실감 나는 JSON을 빠르게 생성할 수 있습니다. 모든 작업은 브라우저에서 이루어지며, 생성된 데이터는 복사하거나 다운로드하거나 임시 API로 바로 내보낼 수 있습니다.",
    generatorBullets: [
      "/generator 에서 인물, 이커머스, 콘텐츠, 미디어, 비즈니스, 위치 등 카테고리별로 데이터를 선택할 수 있습니다.",
      "id와 타임스탬프가 없는 POST 본문 형태와 id, createdAt, updatedAt이 포함된 API 레코드 형태를 전환할 수 있습니다.",
      "FA에서는 현지 페르시아어 데이터를 사용하고, EN에서는 여러 국가의 영어 데이터를 제공합니다.",
      "브라우저에서 한 번에 최대 1,000개 레코드까지 생성할 수 있습니다. 'API 만들기'는 임시 API 제한(500개 / 64 KB)을 따릅니다.",
      "페이지를 이동해도 선택한 옵션과 생성된 결과는 유지됩니다(새로고침 시 초기화).",
    ],
    imageGeneratorTitle: "이미지 생성기",
    imageGeneratorBody:
      "UI 개발에 필요한 플레이스홀더 이미지 URL을 손쉽게 만들 수 있습니다. MockData SVG 이미지나 Picsum 기반의 무작위 사진을 선택해 너비와 높이를 지정한 뒤 img 태그, CSS, 이미지 필드에 바로 복사해 사용하세요.",
    imageGeneratorBullets: [
      "/image-generator 에서 SVG 이미지 또는 실사 사진 중 선택할 수 있습니다.",
      "공개 URL 형식: SVG는 /image/{width}/{height}, 사진은 ?type=real 을 붙입니다.",
      "기본값은 무작위 결과를 반환하지만, 원하는 ?seed= 값을 지정하면 동일한 SVG 색상이나 사진을 고정할 수 있습니다.",
      "아바타, 썸네일, 프로필, 피드 게시물, 커버, 배너, 스토리 등 자주 쓰는 프리셋 크기를 제공합니다.",
    ],
    jsonWorkbenchTitle: "JSON Workbench",
    jsonWorkbenchBody:
      "JSON Workbench(개발 중)는 화면을 구현하면서 JSON 포매팅, 비교, 검색, 변환 작업을 브라우저 한 곳에서 이어갈 수 있는 도구 모음입니다.",
    jsonWorkbenchBullets: [
      "/json 에서 JSON Workbench를 열고 도구를 선택하면 바로 전환됩니다(?tool= 쿼리로 직접 진입도 가능).",
      "핵심 도구: 포맷, 트리 뷰어, 검색, JSONPath, 구조 비교.",
      "변환 도구: TypeScript, Zod, JSON Schema, YAML, CSV.",
      "유틸리티: 키 정렬, 빈 값 제거, 평탄화(Flatten), 이스케이프/복구, 필드 선택/제외 등.",
      "브라우저에서 실행되므로 입력한 JSON이 서버로 전송되지 않습니다.",
      "현재도 기능을 확장 중이며, 추후 도구와 사용성을 계속 추가할 예정입니다.",
    ],
    sharedDataTitle: "공용 데이터",
    sharedDataBody:
      "모든 사용자가 동일한 라이브 데이터베이스를 함께 사용합니다. 생성·수정·삭제한 내용은 즉시 반영되며 다른 사용자에게도 보입니다. 프로덕션 환경에서는 GET /api/cron/reset 을 통해 매일 초기 시드 데이터로 초기화됩니다. 프로토타입과 데모 용도로는 적합하지만, 중요한 영구 데이터를 저장하는 용도로는 사용하지 마세요.",
    languageTitle: "언어",
    languageBody:
      "기본적으로 모든 리소스 텍스트는 영어로 반환됩니다. 쿼리 파라미터 lang=fa 를 추가하면 이름, 사용자명, 이메일, 전화번호, 문장 등이 페르시아어로 현지화된 응답을 받을 수 있습니다. 쿠키나 Accept-Language 헤더는 읽지 않으며 쿼리 파라미터만 사용합니다. 상단 언어 전환기(English | فارسی)를 바꾸면 Playground와 미리보기 화면에도 반영됩니다.",
    languageBullets: [
      "예시: GET /api/users?lang=fa",
      "FA 응답에는 Content-Language: fa 와 렌더링용 font 객체(Vazirmatn)가 포함됩니다.",
      "상단에서 فارسی 를 선택하면 레이아웃이 오른쪽에서 왼쪽(RTL)으로 전환되고 Playground에도 lang=fa 가 자동으로 적용됩니다.",
    ],
    resourcesTitle: "리소스",
    resourcesBlurb:
      "현재 사용할 수 있는 엔드포인트와 앞으로 제공될 예정인 기능 목록입니다.",
    colResource: "리소스",
    colBasePath: "기본 경로",
    colStatus: "상태",
    colDocs: "문서",
    statusLive: "운영 중",
    statusDev: "개발 중",
    statusSoon: "출시 예정",
    openapiTitle: "OpenAPI",
    openapiBody:
      "사용 가능한 모든 엔드포인트(Auth, Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, Countries 및 관리자 초기화)에 대한 기계 판독 가능 명세입니다. Postman, Swagger UI, AI 도구 등에 바로 불러올 수 있습니다.",
    download: "다운로드",
    requestsTitle: "요청",
    requestsBody:
      "컬렉션 엔드포인트는 data 와 pagination 을 반환하고, 단일 리소스 엔드포인트는 { data } 를 반환합니다.",
    errorsTitle: "오류",
    errorsBody:
      "오류 응답에는 error 객체가 포함됩니다. 주요 상태 코드는 잘못된 요청 400, 인증 필요 401, 리소스 없음 404, 요청 한도 초과 429, 서버 오류 500입니다. 클라이언트 예외 처리를 테스트하려면 ?status=500 (400~599 범위)을 붙여 원하는 상태 코드를 재현할 수 있습니다.",
    rateLimitTitle: "요청 제한",
    rateLimitBody:
      "모든 사용자가 안정적으로 이용할 수 있도록 /api/* 요청은 IP당 분당 약 {limit}회로 제한됩니다. 한도를 초과하면 HTTP 429(Too Many Requests)가 반환되며, 응답 헤더의 X-RateLimit 항목에서 남은 횟수를 확인할 수 있습니다.",
    resetTitle: "데이터 초기화",
    resetBody:
      "모든 사용자가 동일한 데모 데이터베이스를 공유합니다. 프로덕션에서는 24시간마다 초기 시드 데이터로 복구되지만, 관리자 시크릿이 있다면 아래 패널에서 데모 테이블을 비우고 초기 데이터를 다시 채울 수 있습니다.",
    resetPanel: {
      intro: "관리자 시크릿을 입력해 데모 테이블을 초기화하고 초기 시드 데이터를 다시 불러옵니다.",
      placeholder: "관리자 시크릿",
      button: "지금 초기화",
      resetting: "초기화 중…",
      needSecret: "관리자 시크릿을 입력해 주세요.",
      confirm: "데모 테이블을 초기화하고 초기 시드 데이터를 다시 채울까요?",
      networkError: "네트워크 오류가 발생했습니다. 서버가 실행 중인지 확인해 주세요.",
      donePrefix: "초기화 완료",
    },
    colIndex: "#",
  },
  resourceDocs: {
    endpoints: "엔드포인트",
    queryParams: "쿼리 파라미터",
    examples: "요청 예제",
    response: "응답 예제",
    tryExample: "실행해 보기",
    preview: "미리보기",
    playground: "Playground",
    backToResources: "리소스 목록으로 돌아가기",
  },
  playground: {
    title: "Playground",
    blurb:
      "MockData API로 실제 요청을 보내고 브라우저에서 JSON 응답을 바로 확인할 수 있습니다. 리소스별 최근 요청 내용은 탐색하는 동안 유지됩니다.",
    resource: "리소스",
    action: "동작",
    send: "요청 보내기",
    sending: "전송 중…",
    response: "응답",
    request: "요청",
    body: "요청 본문",
    query: "쿼리",
    headers: "헤더",
    correct: "올바른 인증 정보",
    wrong: "잘못된 인증 정보",
    password: "비밀번호",
    user: "사용자",
    pickUser: "사용자 선택",
    loadError: "선택 항목을 불러오지 못했습니다",
    emptyResponse: "아직 응답이 없습니다",
    startHint: "리소스를 선택하고 요청을 보내 보세요.",
    types: "TS",
    json: "JSON",
  },
  temporary: {
    title: "임시 API",
    blurb: "JSON을 붙여넣고 임시 API를 빠르게 만들어 보세요.",
    privacyNote:
      "URL은 비밀번호처럼 안전하게 관리하세요. 만료 전까지는 URL을 아는 누구나 데이터를 읽고 수정할 수 있습니다. 브라우저당 최대 5개의 활성 임시 API를 유지할 수 있습니다.",
    jsonLabel: "JSON",
    durationLabel: "유효 기간",
    duration1h: "1시간",
    duration6h: "6시간",
    duration12h: "12시간",
    duration24h: "24시간",
    checkJson: "JSON 검사",
    jsonValid: "문제가 없습니다. 생성할 수 있습니다.",
    jsonHint: "미리 검사할 수도 있고, 바로 생성할 수도 있습니다.",
    create: "API 만들기",
    creating: "생성 중…",
    acceptFix: "수정 적용 후 생성",
    rejectFix: "계속 수정",
    fixedPreview: "일부 문제를 자동으로 수정했습니다. 확인 후 생성할 수 있습니다.",
    myApis: "내 임시 API",
    emptyList: "활성화된 임시 API가 없습니다.",
    copyUrl: "복사",
    delete: "삭제",
    deleteAll: "전체 삭제",
    deleting: "…",
    confirmDelete: "이 API를 삭제할까요?",
    confirmDeleteBody: "삭제하면 이 URL은 즉시 사용할 수 없게 됩니다.",
    confirmDeleteAll: "모든 API를 삭제할까요?",
    confirmDeleteAllBody: "목록의 모든 URL이 즉시 사용할 수 없게 됩니다.",
    cancel: "취소",
    limitReached: "최대 5개 한도에 도달했습니다.",
    limitReachedBody: "아래 목록에서 하나를 삭제하거나 만료될 때까지 기다려 주세요.",
    createdTitle: "생성 완료",
    openApi: "열기",
    slotsLabel: "{n} / 5",
    maxActive: "",
    sampleJson: `[
  { "id": "1", "firstName": "김서준", "lastName": "", "role": "admin" },
  { "id": "2", "firstName": "이서윤", "lastName": "", "role": "member" },
  { "id": "3", "firstName": "박도윤", "lastName": "", "role": "member" }
]`,
    issues: {
      EMPTY: "JSON 객체 또는 배열을 붙여넣어 주세요.",
      INVALID_JSON: "올바르지 않은 JSON입니다. 쉼표, 따옴표, 대괄호, 중괄호를 확인해 주세요.",
      TOO_LARGE: "JSON 크기가 최대 한도({max} KB)를 초과했습니다.",
      NOT_OBJECT_OR_ARRAY: "최상위 요소는 객체 { } 또는 배열 [ ] 이어야 합니다.",
      TOO_DEEP: "중첩 깊이가 너무 깊습니다(최대 {max}단계).",
      ARRAY_TOO_LONG: "배열 길이가 최대 한도({max}개)를 초과했습니다.",
      TOO_MANY_KEYS: "객체당 키 개수가 최대 한도({max}개)를 초과했습니다.",
      UNSAFE_KEY: "안전하지 않은 키 이름 '{key}'은 사용할 수 없습니다.",
      AUTO_FIXED: "불필요한 끝 쉼표나 안전하지 않은 키를 정리했습니다.",
    },
  },
  imageGenerator: {
    title: "이미지 생성기",
    blurb:
      "프로젝트용 플레이스홀더 이미지를 필요할 때마다 생성하세요. MockData SVG 이미지나 무작위 사진 URL을 img 태그, CSS, 이미지 필드에 바로 복사해 사용할 수 있습니다.",
    modeSvg: "SVG",
    modeReal: "사진",
    width: "너비",
    height: "높이",
    generate: "URL 생성",
    generating: "생성 중…",
    yourUrl: "생성된 API URL",
    preview: "미리보기",
    useInProject: "프로젝트에 적용하기",
    tabUrl: "URL",
    tabHtml: "HTML",
    tabCss: "CSS",
    tabJs: "JavaScript",
    tabCurl: "cURL",
    readySizes: "자주 쓰는 크기",
    sizes: {
      avatar: "아바타",
      thumbnail: "썸네일",
      profile: "프로필",
      square: "정사각형",
      post: "게시물",
      cover: "커버",
      banner: "배너",
      story: "스토리",
    },
  },
  jsonWorkbench: {
    title: "JSON Workbench",
    blurb:
      "JSON을 한 번만 붙여넣고 포매팅, 검색, 변환 등 여러 작업을 매번 다시 붙여넣지 않고 이어갈 수 있습니다.",
    toolNavLabel: "Workbench 도구 목록",
    source: {
      title: "원본 JSON",
      hint: "여기에 한 번만 붙여넣으면 모든 도구에서 이 JSON을 바로 사용할 수 있습니다.",
      sample: "샘플 불러오기",
      valid: "유효한 JSON입니다.",
      needJson: "먼저 왼쪽에 JSON을 붙여넣어 주세요.",
      fixFirst: "먼저 '원본 JSON'의 구문 오류를 수정한 뒤 다시 시도해 주세요.",
      pickAction: "어떤 작업을 실행할까요?",
      useResult: "원본 JSON에 적용",
      diffHint: "'원본 JSON'을 A로 두고, 아래에 비교할 B JSON을 붙여넣어 주세요.",
      escapedInput: "이스케이프된 문자열",
      schemaInput: "JSON Schema",
      fromSchemaNote:
        "아래에 JSON Schema를 붙여넣으면 샘플 JSON을 생성해 '원본 JSON'에 반영할 수 있습니다.",
    },
    categories: {
      core: "기본",
      transform: "변환",
      utility: "유틸리티",
    },
    labels: {
      input: "입력",
      output: "출력",
      tree: "트리",
      matches: "일치 항목",
      jsonA: "JSON A",
      jsonB: "JSON B",
      diffResult: "비교 결과",
      jsonpath: "JSONPath",
      result: "결과 ({count})",
    },
    actions: {
      format: "포맷 정렬",
      minify: "압축",
      showTree: "트리 보기",
      search: "검색",
      clearSearch: "검색 초기화",
      replace: "바꾸기",
      replaceAll: "모두 바꾸기",
      prevMatch: "이전 일치",
      nextMatch: "다음 일치",
      compare: "비교하기",
      run: "실행",
      runPath: "경로 실행",
      toTypescript: "TypeScript로 변환",
      toZod: "Zod로 변환",
      toSchema: "Schema로 변환",
      swapDirection: "방향 전환",
      sortKeys: "키 정렬",
      removeEmpty: "빈 값 제거",
      flatten: "평탄화",
      unflatten: "중첩 복원",
      escape: "이스케이프",
      unescape: "이스케이프 해제",
      repair: "자동 복구",
      fromSchema: "샘플 생성",
      extractKeys: "키 추출",
      extractValues: "값 추출",
      pick: "선택 키 추출",
      omit: "선택 키 제외",
      compareStructure: "구조 비교",
      clear: "지우기",
      expandAll: "모두 펼치기",
      collapseAll: "모두 접기",
      copyPath: "경로 복사",
      copyValue: "값 복사",
    },
    errors: {
      empty: "JSON을 붙여넣어 주세요.",
      invalid: "올바르지 않은 JSON입니다.",
      unexpectedEnd: "JSON이 중간에 끝났습니다.",
      unexpectedToken: "예상치 못한 토큰입니다: {token}",
      expectedPropertyName: "속성 이름은 큰따옴표로 감싸야 합니다.",
      expectedCommaOrBrace: "값 뒤에는 ',' 또는 '}'가 와야 합니다.",
      expectedCommaOrBracket: "배열 요소 뒤에는 ',' 또는 ']'가 와야 합니다.",
      expectedColon: "속성 이름 뒤에는 ':'가 와야 합니다.",
      unterminatedString: "문자열이 닫히지 않았습니다.",
      badControlChar: "문자열에 허용되지 않는 제어 문자가 포함되어 있습니다.",
      badEscape: "문자열에 잘못된 이스케이프 시퀀스가 있습니다.",
      trailingChar: "JSON 값 뒤에 불필요한 문자가 있습니다.",
      objectKeyExpected: "이 위치에는 객체 키가 필요합니다.",
      unexpectedCharacter: "예상치 못한 문자입니다: {char}",
      invalidCharacter: "유효하지 않은 문자입니다: {char}",
      invalidUnicode: "잘못된 유니코드 이스케이프입니다: {chars}",
      couldNotRepair: "이 JSON은 자동으로 복구할 수 없습니다.",
      atLineColumn: "{line}행 {column}열",
      atLine: "{line}행",
      atPosition: "위치 {position}",
    },
    types: {
      object: "객체",
      array: "배열",
      string: "문자열",
      number: "숫자",
      boolean: "불리언",
      null: "null",
    },
    validate: {
      idleHint: "JSON을 붙여넣으면 표준 JSON 구문 여부를 검사합니다.",
      validTitle: "유효한 JSON입니다",
      validBody: "루트 타입: {type}",
      invalidTitle: "올바르지 않은 JSON입니다",
    },
    tree: {
      idleTitle: "여기에 트리가 표시됩니다",
      idleBody: "왼쪽에 JSON을 붙여넣고 '트리 보기'를 눌러 주세요.",
      errorTitle: "트리를 표시할 수 없습니다",
      errorBody: "JSON 구문 오류를 수정한 뒤 다시 시도해 주세요.",
    },
    search: {
      query: "검색어",
      replaceWith: "바꿀 문자열",
      matchCount: "{total}개 중 {current}번째",
      noMatches: "일치 항목 없음",
      noMatchesBody: "키와 값 모두에서 일치하는 항목을 찾지 못했습니다.",
      idleTitle: "여기에 검색 결과가 표시됩니다",
      idleBody: "검색어를 입력하고 '검색'을 누르면 키와 값을 함께 검색합니다.",
      errorTitle: "검색을 실행할 수 없습니다",
      errorBody: "JSON 구문 오류를 수정한 뒤 검색해 주세요.",
      kindKey: "키",
      kindValue: "값",
      activeHint: "{kind} · {path}",
      replacedCount: "{count}개 항목을 바꿨습니다.",
    },
    diff: {
      idleTitle: "여기에 차이점이 표시됩니다",
      idleBody: "JSON A와 JSON B를 모두 입력해 비교해 보세요.",
      identical: "차이점이 없습니다. 두 문서의 구조와 값이 같습니다.",
      added: "추가됨 / B에만 있음",
      removed: "삭제됨 / A에만 있음",
      changed: "변경됨",
      sideEmpty: "이쪽이 비어 있습니다.",
      emptyA: "JSON A가 비어 있습니다.",
      emptyB: "JSON B가 비어 있습니다.",
      bothInvalid: "JSON A와 JSON B 모두 올바르지 않습니다.",
    },
    jsonpath: {
      whatIs:
        "JSONPath를 사용하면 중첩된 JSON에서 원하는 값을 골라낼 수 있습니다(데이터용 CSS 선택자와 비슷합니다). 아래 예시를 눌러 바로 입력해 보세요.",
      hintTitle: "문법 가이드",
      hintBody: `$              루트 문서
.users         속성 이름
[*]            배열의 모든 요소
[0]            배열의 첫 번째 요소`,
      idleTitle: "여기에 쿼리 결과가 표시됩니다",
      idleBody: "경로 표현식을 입력하고 실행해 보세요.",
      errorTitle: "쿼리를 실행할 수 없습니다",
      errorBody: "JSON 또는 경로 표현식의 오류를 수정한 뒤 다시 시도해 주세요.",
      noResults: "이 경로와 일치하는 항목이 없습니다.",
      emptyPath: "JSONPath 표현식을 입력해 주세요.",
    },
    transform: {
      tsIdleTitle: "여기에 TypeScript 타입이 표시됩니다",
      tsIdleBody: "JSON을 붙여넣으면 TypeScript 타입 정의를 생성합니다.",
      zodIdleTitle: "여기에 Zod 스키마가 표시됩니다",
      zodIdleBody: "JSON을 붙여넣으면 Zod 스키마를 생성합니다.",
      schemaExplain: "JSON ↔ Schema",
      schemaUse:
        "'원본 JSON'에서 JSON Schema를 만들거나, Schema에서 샘플 JSON을 생성할 수 있습니다.",
      schemaIdleTitle: "여기에 JSON Schema가 표시됩니다",
      schemaIdleBody: "JSON을 붙여넣으면 JSON Schema를 생성합니다.",
      yamlIdleTitle: "여기에 YAML 출력이 표시됩니다",
      yamlIdleBody: "원본 JSON이 YAML로 변환되어 나타납니다.",
      yamlToJsonIdle: "위에 YAML을 붙여넣으면 '원본 JSON'으로 변환됩니다.",
      yamlApplied: "변환 완료! '원본 JSON'을 업데이트했습니다.",
      csvIdleTitle: "여기에 CSV 출력이 표시됩니다",
      csvIdleBodyJson:
        "'원본 JSON'의 단일 객체, 객체 배열, 또는 목록을 담은 객체를 CSV로 변환합니다.",
      csvIdleBodyCsv: "헤더 행이 있는 CSV를 붙여넣으면 JSON으로 변환합니다.",
      csvToJsonIdle: "위에 CSV를 붙여넣으면 '원본 JSON'으로 변환됩니다.",
      csvApplied: "변환 완료! '원본 JSON'을 업데이트했습니다.",
      csvUnsupported: "이 JSON 구조는 CSV로 변환할 수 없습니다.",
    },
    utilities: {
      sortAsc: "A → Z",
      sortDesc: "Z → A",
      sortIdleTitle: "정렬 준비 완료",
      sortIdleBody: "A → Z 또는 Z → A를 선택하면 키를 정렬한 결과가 출력에 표시됩니다.",
      sortApplied: "키를 정렬했습니다. 아래 출력에서 확인해 보세요.",
      removeOptions: "제거할 빈 값 유형",
      removeNull: "null",
      removeEmptyString: '""',
      removeEmptyArray: "[]",
      removeEmptyObject: "{}",
      removeNullLabel: "null",
      removeEmptyStringLabel: "빈 문자열",
      removeEmptyArrayLabel: "빈 배열",
      removeEmptyObjectLabel: "빈 객체",
      removePreserveHint: "false와 0은 제거되지 않고 유지됩니다.",
      removeIdleTitle: "여기에 정리된 JSON이 표시됩니다",
      removeIdleBody: "제거할 항목을 선택한 뒤 실행해 주세요.",
      nestedLabel: "중첩 구조",
      flatLabel: "평탄화 구조",
      flattenHint: "중첩 객체를 점(.)으로 구분된 키로 변환합니다(예: address.city, skills.0).",
      flattenUse:
        "스프레드시트 내보내기, .env 구성, 검색 색인화, 평면 키-값만 받는 API 연동에 유용합니다.",
      flattenIdleTitle: "평탄화 준비 완료",
      flattenIdleBody: "중첩된 키가 점으로 구분된 경로 형태로 출력됩니다.",
      flattenApplied: "평탄화했습니다. 아래 출력에서 확인해 보세요.",
      unflattenHint: "점으로 구분된 경로를 다시 중첩 객체로 되돌리고 숫자 구간은 배열로 변환합니다.",
      unflattenUse:
        "user.name 이나 skills.0 같은 평면 키를 원래 중첩 JSON으로 복원할 때 사용하세요.",
      unflattenIdleTitle: "여기에 복원된 중첩 JSON이 표시됩니다",
      unflattenIdleBody: "점 경로가 포함된 객체를 붙여넣으면 중첩 구조로 복원됩니다.",
      escapeIdleTitle: "여기에 이스케이프된 문자열이 표시됩니다",
      escapeIdleBody: "문자열 리터럴 등에 넣을 수 있도록 JSON이 이스케이프됩니다.",
      escapeHint:
        "JSON을 한 줄의 이스케이프된 문자열로 변환합니다. 따옴표와 줄바꿈이 " 및 
 형태로 바뀌어 다른 문자열 안에 안전하게 넣을 수 있습니다.",
      escapeUse:
        "코드, 환경 변수, 로그 등에 JSON을 끼워 넣을 때 바깥 따옴표가 깨지는 문제를 막아 줍니다.",
      unescapeIdleTitle: "여기에 이스케이프 해제된 JSON이 표시됩니다",
      unescapeIdleBody: "이스케이프된 JSON 문자열을 붙여넣으면 원래 JSON으로 복원됩니다.",
      repairHint:
        "깨지거나 잘린 JSON, 주석이 섞인 JSON, 작성 중인 JSON을 여러 단계로 자동 복구합니다.",
      repairUse:
        "따옴표·쉼표·괄호 보완, 주석 및 코드 블록 펜스 제거, Python/JS 리터럴, JSONP, MongoDB 타입, NDJSON, 잘림, 입력 중 남은 흔적 정리를 지원합니다.",
      repairAlreadyValid: "이미 유효한 JSON이라 포맷만 정리했습니다.",
      repairFormatted: "포맷을 정리했습니다.",
      repairReady: "자동 복구가 가능합니다.",
      repairApplied: "복구했습니다.",
      repairAppliedToSource: "'원본 JSON'에 반영했습니다.",
      repairFailedTitle: "완전히 복구하지 못했습니다",
      repairFailedAt: "{message} ({line}행 {column}열)",
      repairPreview: "복구 미리보기",
      repairFixes: {
        "trailing-commas": "끝 쉼표",
        "single-quotes": "작은따옴표",
        "smart-quotes": "스마트 따옴표",
        "unquoted-keys": "따옴표 없는 키",
        "missing-commas": "누락된 쉼표",
        "missing-brackets": "누락된 괄호",
        comments: "주석",
        "code-fence": "코드 펜스",
        "python-literals": "Python 리터럴",
        "js-undefined": "undefined → null",
        jsonp: "JSONP 래퍼",
        "escaped-string": "이스케이프된 JSON 문자열",
        mongodb: "MongoDB 타입",
        ndjson: "NDJSON → 배열",
        ellipsis: "생략 기호(…)",
        "string-concat": "문자열 연결",
        whitespace: "공백 및 줄바꿈",
        truncated: "중간 잘림 / 미완성",
        "mid-edit-junk": "입력 중 남은 불필요한 문자",
      },
      repairIdleTitle: "여기에 복구된 JSON이 표시됩니다",
      repairIdleBody:
        "'원본 JSON'에 불완전한 텍스트나 JSON 형태 데이터를 붙여넣으면 복구 결과가 출력됩니다.",
      fromSchemaHint:
        "type, properties, required, items, enum, default 정보를 바탕으로 JSON Schema에서 샘플 JSON을 만듭니다.",
      fromSchemaIdleTitle: "여기에 생성된 샘플 JSON이 표시됩니다",
      fromSchemaIdleBody: "아래에 JSON Schema를 붙여넣으면 샘플을 생성합니다.",
      extractHint:
        '말단 경로와 값 쌍을 추출합니다(예: { path: "address.city", value: "서울특별시" }).',
      extractIdleTitle: "여기에 추출된 키와 값이 표시됩니다",
      extractIdleBody: "위에서 필드를 선택하면 경로와 값 쌍을 추출합니다.",
      extractKeysHint: "중첩된 키를 점으로 구분된 경로 목록으로 보여줍니다(배열 인덱스는 .0 형식).",
      extractKeysIdleTitle: "여기에 추출된 키 목록이 표시됩니다",
      extractKeysIdleBody: "JSON을 붙여넣으면 모든 키를 추출합니다.",
      extractValuesHint: "원시 값이나 null 등 말단(leaf) 값만 모두 모읍니다.",
      extractValuesIdleTitle: "여기에 추출된 값 목록이 표시됩니다",
      extractValuesIdleBody: "JSON을 붙여넣으면 모든 값을 추출합니다.",
      fieldsLabel: "'원본 JSON'의 필드",
      fieldsClickHint:
        "경로를 클릭해 선택할 수 있습니다. 중첩된 속성은 점으로 구분됩니다.",
      fieldsSelectAll: "전체 선택",
      fieldsClear: "선택 해제",
      fieldsEmpty: "이 JSON에는 선택할 수 있는 필드가 없습니다.",
      pickHint: "선택한 필드만 남깁니다. 아래 목록을 눌러 필드를 고르세요.",
      pickIdleTitle: "여기에 결과가 표시됩니다",
      pickIdleBody: "",
      omitHint: "선택한 필드를 제외합니다. 아래 목록을 눌러 필드를 고르세요.",
      omitIdleTitle: "여기에 결과가 표시됩니다",
      omitIdleBody: "",
      compareHint: "두 JSON 문서를 나란히 놓고 값 차이는 무시한 채 구조만 비교합니다.",
      compareUse:
        "A에 없는 키는 빨간색, B에서 추가된 키는 초록색, 양쪽의 타입이 다른 키는 호박색으로 표시됩니다.",
      compareBack: "Workbench로 돌아가기",
      compareIdleTitle: "두 JSON 문서를 입력해 주세요",
      compareIdleBody: "양쪽에 JSON을 입력하면 구조를 비교할 수 있습니다.",
      compareIdentical: "구조가 같습니다. 키와 데이터 타입이 일치합니다.",
      compareMissing: "누락된 키(A에만 있음)",
      compareExtra: "추가된 키(B에만 있음)",
      compareType: "타입 불일치",
    },
    empty: {
      formatTitle: "여기에 포맷된 JSON이 표시됩니다",
      formatBody: "왼쪽에 JSON을 붙여넣고 '포맷 정렬'을 눌러 주세요.",
    },
    soon: {
      badge: "출시 예정",
      title: "{tool} 기능은 곧 제공될 예정입니다",
      body: "이 도구는 전체 Workbench 미리보기에 포함되어 있으며, 추후 업데이트에서 지원될 예정입니다.",
    },
    tools: {
      format: "포맷",
      minify: "압축",
      validate: "유효성 검사",
      tree: "트리",
      search: "검색",
      diff: "Diff",
      jsonpath: "JSONPath",
      convert: "변환",
      toTypescript: "TypeScript",
      toZod: "Zod",
      toSchema: "JSON Schema",
      yaml: "YAML",
      csv: "CSV",
      sortKeys: "키 정렬",
      removeEmpty: "빈 값 제거",
      flatten: "평탄화",
      unflatten: "중첩 복원",
      escape: "이스케이프",
      unescape: "이스케이프 해제",
      repair: "자동 복구",
      extract: "키·값 추출",
      extractKeys: "키 추출",
      extractValues: "값 추출",
      pick: "필드 선택",
      omit: "필드 제외",
      compareStructure: "구조 비교",
    },
  },
  generator: {
    title: "더미 데이터 생성기",
    subtitle: "프런트엔드 개발에 쓸 수 있는 실감 나는 테스트 데이터를 빠르게 만드세요.",
    chooseType: "데이터 유형",
    searchPlaceholder: "데이터 유형 검색…",
    noTopics: "일치하는 데이터 유형이 없습니다.",
    fieldsLegend: "필드",
    moreFields: "필드 더 보기",
    lessFields: "선택 필드 접기",
    optionalFields: "선택 필드",
    records: "개수",
    customQty: "직접 입력",
    country: "국가",
    countrySearch: "국가 검색…",
    selectPlaceholder: "데이터 유형 선택…",
    outputMode: "출력 형식",
    modePayload: "POST 본문",
    modeApi: "API 레코드",
    modePayloadHint: "id와 타임스탬프가 없어 새 리소스를 생성하는 POST 요청 본문에 바로 쓰기 좋습니다.",
    modeApiHint: "id, createdAt, updatedAt이 포함되어 저장된 API 응답 형태와 비슷합니다.",
    jsonType: "JSON",
    viewJson: "JSON",
    viewType: "TS",
    generate: "{n}개 생성",
    generating: "{n}개 생성 중…",
    generateAgain: "다시 생성",
    refresh: "새로 생성",
    generated: "{n}개 생성됨",
    download: "다운로드",
    createApi: "API 만들기",
    createSuccess: "임시 API를 만들었습니다.",
    createBlockedArray:
      "임시 API는 최대 500개 레코드까지 지원합니다. 개수를 줄인 뒤 다시 시도해 주세요.",
    createBlockedSize:
      "JSON 크기가 임시 API 한도(64 KB)를 넘었습니다. 개수를 줄이거나 필드를 덜 선택해 주세요.",
    openTemporary: "'임시 API'에서 관리",
    emptyTitle: "데이터 유형을 선택하세요",
    emptyBody: "위에서 데이터 유형을 고르면 테스트용 데이터를 생성할 수 있습니다.",
    duration1h: "1시간",
    duration6h: "6시간",
    duration12h: "12시간",
    duration24h: "24시간",
    countries: {
      all: "전체 국가",
      IR: "이란",
      DE: "독일",
      US: "미국",
      GB: "영국",
      FR: "프랑스",
      NL: "네덜란드",
      JP: "일본",
      CA: "캐나다",
    },
    categories: {
      people: "인물",
      ecommerce: "커머스",
      content: "콘텐츠",
      media: "미디어",
      business: "비즈니스",
      location: "위치",
    },
    fields: {
      id: "id",
      name: "이름",
      username: "사용자명",
      email: "이메일",
      avatar: "아바타",
      phone: "전화번호",
      company: "회사",
      location: "위치",
      age: "나이",
      role: "역할",
      jobTitle: "직무",
      department: "부서",
      bio: "소개",
      website: "웹사이트",
      createdAt: "생성일시",
      updatedAt: "수정일시",
      hiredAt: "입사일",
      ordersCount: "주문 수",
      totalSpent: "총 결제액",
      postsCount: "게시물 수",
      price: "가격",
      image: "이미지",
      category: "카테고리",
      description: "설명",
      brand: "브랜드",
      stock: "재고",
      rating: "평점",
      sku: "SKU",
      colors: "색상",
      orderId: "주문 ID",
      customer: "고객",
      items: "주문 항목",
      total: "합계 금액",
      status: "상태",
      orderDate: "주문일",
      paymentStatus: "결제 상태",
      shippingAddress: "배송지 주소",
      user: "사용자",
      comment: "댓글",
      post: "게시물",
      date: "날짜",
      product: "상품",
      title: "제목",
      verified: "인증 여부",
      helpful: "도움됨 수",
      slug: "슬러그",
      parentCategory: "상위 카테고리",
      productCount: "상품 수",
      quantity: "수량",
      discount: "할인",
      code: "코드",
      type: "유형",
      expiresAt: "만료일",
      minimumOrder: "최소 주문 금액",
      usageLimit: "사용 한도",
      active: "활성 상태",
      amount: "금액",
      currency: "통화",
      paymentMethod: "결제 수단",
      transactionId: "거래 ID",
      order: "주문",
      carrier: "택배사",
      trackingNumber: "송장 번호",
      estimatedDelivery: "도착 예정일",
      body: "본문",
      author: "작성자",
      tags: "태그",
      publishedAt: "발행일시",
      likes: "좋아요 수",
      views: "조회수",
      replies: "답글 수",
      attachments: "첨부파일",
      actionUrl: "이동 URL",
      sender: "보낸사람",
      receiver: "받는사람",
      message: "메시지",
      read: "읽음 여부",
      artist: "아티스트",
      cover: "커버 이미지",
      year: "연도",
      genre: "장르",
      tracks: "트랙 수",
      album: "앨범",
      duration: "재생 시간",
      poster: "포스터",
      director: "감독",
      language: "언어",
      plays: "재생 수",
      label: "레이블",
      pages: "페이지 수",
      isbn: "ISBN",
      instructor: "강사",
      level: "난이도",
      lessons: "강의 수",
      students: "수강생 수",
      employees: "직원 수",
      logo: "로고",
      industry: "산업군",
      salary: "급여",
      experience: "경력",
      remote: "원격 근무",
      founded: "설립 연도",
      postedAt: "등록일",
      capacity: "수용 인원",
      capital: "수도",
      flag: "국기",
      region: "지역",
      population: "인구",
      street: "도로명·상세주소",
      postalCode: "우편번호",
      latitude: "위도",
      longitude: "경도",
      country: "국가",
      city: "도시",
      notes: "메모",
      team: "팀",
      joinedAt: "합류일",
      skills: "스킬",
      specialty: "전공·전문분야",
      hospital: "병원",
      licenseNumber: "면허 번호",
      yearsExperience: "경력 연차",
      bloodType: "혈액형",
      diagnosis: "진단명",
      doctor: "담당의",
      admittedAt: "입원일",
      vehicleType: "차종",
      plateNumber: "차량 번호",
      tripsCount: "운행 횟수",
      roomNumber: "객실 번호",
      checkIn: "체크인",
      checkOut: "체크아웃",
      nights: "숙박 일수",
      followers: "팔로워 수",
      following: "팔로잉 수",
      grade: "학년",
      school: "학교",
      gpa: "학점(GPA)",
      major: "전공",
      enrollmentYear: "입학년도",
      subject: "과목",
      classesCount: "수업 수",
      invoiceNumber: "청구서 번호",
      issueDate: "발행일",
      dueDate: "납부 기한",
      tax: "세액",
      itemsCount: "항목 수",
      target: "대상",
      targetType: "대상 유형",
      reaction: "반응",
      color: "색상",
      thumbnail: "썸네일",
      channel: "채널",
      url: "URL",
      width: "너비",
      height: "높이",
      alt: "대체 텍스트",
      photographer: "촬영자",
      host: "호스트",
      episodes: "에피소드 수",
      subscribers: "구독자 수",
      owner: "소유자",
      public: "공개 여부",
      progress: "진행률",
      teamSize: "팀 규모",
      budget: "예산",
      startDate: "시작일",
      membersCount: "멤버 수",
      focus: "주요 분야",
      countriesCount: "국가 수",
      areaKm2: "면적 (km²)",
      timezone: "시간대",
      terminals: "터미널",
      altitude: "고도",
      accuracy: "정확도",
    },
    topics: {
      users: {
        name: "사용자",
        description: "앱 및 대시보드용 사용자 프로필",
        preview: {
          line1: "김서준",
          line2: "@seojun_kim · seojun@mail.test",
          line3: "서울특별시",
        },
      },
      customers: {
        name: "고객",
        description: "구매자 및 계정 연락처 데이터",
        preview: {
          line1: "이서윤",
          line2: "seoyoon@demo.dev",
          line3: "010-2345-6789",
        },
      },
      employees: {
        name: "직원",
        description: "직무와 부서 정보를 포함한 팀 구성원",
        preview: {
          line1: "박도윤",
          line2: "프런트엔드 엔지니어",
          line3: "개발팀 · Acme",
        },
      },
      authors: {
        name: "작성자",
        description: "아티클 기고자 및 크리에이터",
        preview: {
          line1: "최지우",
          line2: "제품 디자인과 UX를 다룹니다.",
        },
      },
      contacts: {
        name: "연락처",
        description: "CRM용 담당자 정보 및 소속 회사",
        preview: {
          line1: "정하준",
          line2: "hajun@acme.test · Acme",
        },
      },
      "team-members": {
        name: "팀원",
        description: "프로덕트 및 엔지니어링 스쿼드 구성원",
        preview: {
          line1: "강민서",
          line2: "테크 리드 · 플랫폼팀",
        },
      },
      doctors: {
        name: "의사",
        description: "진료과와 병원 정보를 포함한 의료진",
        preview: {
          line1: "조현우 전문의",
          line2: "순환기내과 · 한빛서울병원",
        },
      },
      patients: {
        name: "환자",
        description: "진단명과 혈액형을 포함한 진료 기록",
        preview: {
          line1: "윤채원",
          line2: "A형 · 고혈압",
        },
      },
      drivers: {
        name: "드라이버",
        description: "차종과 평점을 포함한 운송·모빌리티 기사",
        preview: {
          line1: "장준호",
          line2: "세단 · ★ 4.8",
        },
      },
      guests: {
        name: "투숙객",
        description: "객실 번호와 투숙 상태를 포함한 호텔 고객",
        preview: {
          line1: "임수빈",
          line2: "412호 · 투숙 중",
        },
      },
      profiles: {
        name: "프로필",
        description: "팔로워 수와 자기소개가 포함된 소셜 프로필",
        preview: {
          line1: "한지호",
          line2: "@jiho_han · 팔로워 1.2만",
        },
      },
      "girl-students": {
        name: "여학생",
        description: "학년과 학교 정보를 포함한 여학생 데이터",
        preview: {
          line1: "서연우",
          line2: "고등학교 2학년 · 푸른솔고등학교",
        },
      },
      "boy-students": {
        name: "남학생",
        description: "학년과 학교 정보를 포함한 남학생 데이터",
        preview: {
          line1: "신유준",
          line2: "중학교 3학년 · 은하중학교",
        },
      },
      teachers: {
        name: "교사",
        description: "담당 과목과 학교 정보를 포함한 교원 데이터",
        preview: {
          line1: "권다은",
          line2: "수학 · 중앙고등학교",
        },
      },
      products: {
        name: "상품",
        description: "쇼핑몰용 상품 정보와 가격",
        preview: {
          line1: "무선 노이즈 캔슬링 헤드폰",
          line2: "₩148,000 · 가젯",
          line3: "★★★★☆",
        },
      },
      orders: {
        name: "주문",
        description: "주문 품목과 진행 상태를 포함한 구매 내역",
        preview: {
          line1: "주문 #10482",
          line2: "3개 품목 · ₩246,000",
          line3: "배송 완료",
        },
      },
      reviews: {
        name: "리뷰",
        description: "별점과 상품 후기 코멘트",
        preview: {
          line1: "★★★★★ 정말 만족스러워요",
          line2: "마감이 깔끔하고 쓰기 편합니다.",
        },
      },
      categories: {
        name: "카테고리",
        description: "상품 카탈로그 분류 목록",
        preview: { line1: "가젯", line2: "gadgets" },
      },
      "cart-items": {
        name: "장바구니 상품",
        description: "장바구니에 담긴 상품 항목",
        preview: { line1: "스마트워치", line2: "2 × ₩198,000 · ₩396,000" },
      },
      coupons: {
        name: "쿠폰",
        description: "할인 코드 및 적용 조건",
        preview: { line1: "WELCOME10", line2: "10% 할인 · 2026-12-01 만료" },
      },
      payments: {
        name: "결제",
        description: "결제 금액 및 결제 수단 내역",
        preview: { line1: "₩68,000 KRW", line2: "신용카드 · 결제 완료" },
      },
      shipments: {
        name: "배송",
        description: "택배사와 배송 상태 정보",
        preview: { line1: "ORD-10482 · CJ대한통운", line2: "배송 중" },
      },
      invoices: {
        name: "청구서",
        description: "금액과 납부 기한이 포함된 청구 내역",
        preview: { line1: "INV-10482", line2: "₩1,280,000 · 결제 완료" },
      },
      brands: {
        name: "브랜드",
        description: "로고와 상품 수를 포함한 브랜드 목록",
        preview: { line1: "Acme", line2: "acme · 128개 상품" },
      },
      posts: {
        name: "게시물",
        description: "블로그 글 및 피드 게시글",
        preview: { line1: "깔끔한 UI 만들기", line2: "작성자: 최지우" },
      },
      comments: {
        name: "댓글",
        description: "게시물 및 상품에 달린 댓글과 답글",
        preview: {
          line1: "핵심만 잘 정리되어 있네요!",
          line2: "지우 · 좋아요 12",
        },
      },
      messages: {
        name: "메시지",
        description: "채팅 및 다이렉트 메시지",
        preview: {
          line1: "최신 초안 확인 가능할까요?",
          line2: "박도윤 → 이서윤",
        },
      },
      notifications: {
        name: "알림",
        description: "앱 내 알림 메시지 및 요약",
        preview: { line1: "새 댓글이 달렸습니다", line2: "커뮤니티 · 2시간 전" },
      },
      tags: {
        name: "태그",
        description: "슬러그와 게시물 수를 포함한 태그 목록",
        preview: { line1: "typescript", line2: "142개 글" },
      },
      "content-categories": {
        name: "콘텐츠 카테고리",
        description: "아티클과 글을 묶는 카테고리",
        preview: { line1: "튜토리얼", line2: "tutorials · 86개 글" },
      },
      likes: {
        name: "좋아요",
        description: "게시물 및 댓글 좋아요 기록",
        preview: { line1: "한지호가 좋아합니다", line2: "게시물 · 좋아요" },
      },
      albums: {
        name: "앨범",
        description: "커버 아트가 포함된 음악 앨범",
        preview: {
          line1: "Random Access Memories",
          line2: "Daft Punk",
          line3: "2013 · 13트랙",
        },
      },
      songs: {
        name: "곡",
        description: "재생 시간과 아티스트를 포함한 음원 데이터",
        preview: { line1: "미드나잇 크루즈", line2: "3:42 · 일렉트로닉" },
      },
      movies: {
        name: "영화",
        description: "포스터와 평점을 포함한 영화 데이터",
        preview: { line1: "레이트 나이트 익스프레스", line2: "2021 · ★ 8.2" },
      },
      books: {
        name: "도서",
        description: "저자와 표지 이미지를 포함한 도서 데이터",
        preview: { line1: "인터페이스 설계 노트", line2: "최지우 · 2019" },
      },
      videos: {
        name: "동영상",
        description: "재생 시간과 조회수를 포함한 영상 데이터",
        preview: {
          line1: "10분 만에 대시보드 UI 만들기",
          line2: "12:40 · 조회수 8.4만",
        },
      },
      images: {
        name: "이미지",
        description: "해상도와 태그가 포함된 이미지 에셋",
        preview: { line1: "노을 지는 도심", line2: "1280×720" },
      },
      podcasts: {
        name: "팟캐스트",
        description: "진행자와 에피소드 수를 포함한 방송 데이터",
        preview: { line1: "코드와 커피", line2: "48화 · 테크" },
      },
      playlists: {
        name: "플레이리스트",
        description: "제작자와 장르를 포함한 재생목록",
        preview: { line1: "집중할 때 듣는 음악", line2: "32곡 · 일렉트로닉" },
      },
      companies: {
        name: "기업",
        description: "회사 정보 및 소속 산업군",
        preview: { line1: "에이씨미 주식회사", line2: "IT·소프트웨어 · 서울" },
      },
      jobs: {
        name: "채용공고",
        description: "근무지와 고용 형태를 포함한 구인 정보",
        preview: {
          line1: "프런트엔드 엔지니어",
          line2: "Google · 서울 · 정규직",
        },
      },
      courses: {
        name: "강의",
        description: "커리큘럼과 강사 정보를 담은 강좌",
        preview: { line1: "React 실전 입문", line2: "중급 · 12시간" },
      },
      events: {
        name: "이벤트",
        description: "밋업, 컨퍼런스 등 행사 정보",
        preview: { line1: "프런트엔드 밋업", line2: "서울 · 워크숍" },
      },
      projects: {
        name: "프로젝트",
        description: "진행률과 예산을 포함한 프로젝트 목록",
        preview: { line1: "분석 대시보드 개편", line2: "진행 중 · 72%" },
      },
      teams: {
        name: "팀",
        description: "리드와 인원수를 포함한 사내 팀",
        preview: { line1: "프로덕트 스쿼드", line2: "8명 · 개발본부" },
      },
      continents: {
        name: "대륙",
        description: "대륙 코드와 통계 정보",
        preview: { line1: "아시아", line2: "AS · 48개국" },
      },
      countries: {
        name: "국가",
        description: "국가명, 코드, 국기 데이터",
        preview: { line1: "대한민국", line2: "KR · 서울특별시" },
      },
      cities: {
        name: "도시",
        description: "광역자치단체 및 국가와 연결된 도시 정보",
        preview: { line1: "부산광역시", line2: "대한민국 · 부산" },
      },
      addresses: {
        name: "주소",
        description: "배송지 및 사무실 주소 데이터",
        preview: {
          line1: "서울특별시 강남구 테헤란로 152",
          line2: "우편번호 06236",
        },
      },
      regions: {
        name: "지역",
        description: "권역 및 시·도 행정구역",
        preview: { line1: "경기도", line2: "대한민국 · 수원시" },
      },
      neighborhoods: {
        name: "동네·상권",
        description: "도시 내 세부 동네 및 지역 정보",
        preview: { line1: "성수동", line2: "서울특별시 · 04763" },
      },
      airports: {
        name: "공항",
        description: "공항 코드와 도시 정보를 포함한 공항 데이터",
        preview: { line1: "인천국제공항", line2: "ICN · 대한민국" },
      },
      coordinates: {
        name: "좌표",
        description: "위도, 경도 및 위치 설명",
        preview: {
          line1: "37.566535, 126.977969",
          line2: "서울특별시 · 대한민국",
        },
      },
    },
    errors: {
      pickTopic: "데이터 유형을 먼저 선택해 주세요.",
      INVALID_TOPIC: "알 수 없는 데이터 유형입니다.",
      INVALID_FIELDS: "필드를 하나 이상 선택해 주세요.",
      INVALID_QUANTITY: "개수는 1부터 1000 사이로 입력해 주세요.",
      INVALID_COUNTRY: "유효하지 않은 국가입니다.",
      GENERATE_FAILED: "데이터를 생성하지 못했습니다. 잠시 후 다시 시도해 주세요.",
      DOWNLOAD_FAILED: "다운로드에 실패했습니다. 잠시 후 다시 시도해 주세요.",
      CREATE_FAILED: "임시 API를 만들지 못했습니다.",
      LIMIT_REACHED: "임시 API 한도(5개)에 도달했습니다. 기존 API 중 하나를 삭제해 주세요.",
      RATE_LIMITED: "요청이 너무 많습니다. 잠시 후 다시 시도해 주세요.",
    },
  },
  preview: {
    docs: "문서",
    playground: "Playground",
    blurb: "이 API가 실제로 어떻게 동작하는지 가볍게 살펴볼 수 있는 화면입니다.",
    blurbFaHint: "",
    backToResource: "{name} 목록으로 돌아가기",
    search: "검색",
    create: "새로 만들기",
    edit: "수정",
    delete: "삭제",
    save: "저장",
    saving: "저장 중…",
    deleting: "삭제 중…",
    cancel: "취소",
    fillSample: "샘플 채우기",
    noRecords: "데이터가 없습니다",
    loading: "불러오는 중…",
    confirmDelete: "삭제할까요?",
    confirmDeleteBody: "이 작업은 되돌릴 수 없습니다.",
    networkError: "네트워크 오류",
    authDemoPassword: "모든 초기 사용자의 데모 비밀번호는 동일합니다:",
    username: "사용자명",
    password: "비밀번호",
    login: "로그인",
    loginSuccess: "로그인되었습니다.",
    logout: "로그아웃",
    getMe: "GET /me",
    token: "토큰",
    user: "사용자",
    loginFirst: "토큰을 받으려면 먼저 로그인하세요",
    createdAt: "생성일시",
    fieldLabels: {
      name: "이름",
      username: "사용자명",
      email: "이메일",
      avatarUrl: "아바타 URL",
      role: "역할",
      city: "도시",
      country: "국가",
      company: "회사",
      title: "제목",
      body: "본문",
      published: "공개 여부",
      userId: "사용자 ID",
      postId: "게시물 ID",
      albumId: "앨범 ID",
      url: "URL",
      thumbnailUrl: "썸네일 URL",
      completed: "완료 여부",
      description: "설명",
      price: "가격",
      stock: "재고",
      category: "카테고리",
      imageUrl: "이미지 URL",
      message: "메시지",
      type: "유형",
      read: "읽음 여부",
      code: "코드",
      capital: "수도",
      region: "지역",
      population: "인구",
      currency: "통화",
      flagUrl: "국기 URL",
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
      teaser: "개발 중 — JSON 포매팅, 비교, 변환 도구",
      hint: "/json — 도구를 선택하면 작업 화면이 전환됩니다",
      badge: "개발 중",
      summary:
        "JSON Workbench(개발 중)는 브라우저에서 JSON 포맷 정렬, 구조 비교, 검색, 변환을 수행할 수 있는 도구 모음입니다. TypeScript, Zod, YAML, CSV 및 다양한 유틸리티를 지원합니다.",
      details: [
        "/json 에서 JSON Workbench를 열고 도구를 선택하면 바로 전환됩니다(?tool= 쿼리로 직접 열 수도 있습니다).",
        "기본 도구: 포맷, 트리 뷰어, 검색, JSONPath, 구조 비교.",
        "변환 도구: TypeScript, Zod, JSON Schema, YAML, CSV.",
        "유틸리티: 키 정렬, 빈 값 제거, 평탄화, 이스케이프, 자동 복구, 필드 선택/제외 등.",
        "계속 개발 중인 기능으로, 앞으로 더 많은 도구와 개선 사항이 추가될 예정입니다.",
      ],
    },
    "2026-09-19-image-generator": {
      title: "이미지 생성기",
      teaser: "필요할 때마다 플레이스홀더 이미지 URL 생성",
      hint: "/image-generator — SVG 또는 사진을 선택해 URL 복사",
      summary:
        "URL 파라미터로 바로 쓸 수 있는 플레이스홀더 이미지를 생성하세요. MockData SVG와 Picsum 사진을 지원하며 아바타, 게시물, 배너 등 자주 쓰는 프리셋 크기를 제공합니다.",
      details: [
        "/image-generator 에서 SVG 또는 사진을 고르고 너비와 높이를 지정해 URL을 복사할 수 있습니다.",
        "공개 URL은 기본적으로 무작위 이미지를 반환합니다. SVG는 /image/{w}/{h}, 사진은 ?type=real 을 사용합니다.",
        "원하는 ?seed= 값을 넣으면 같은 SVG 색상이나 같은 사진을 유지할 수 있습니다.",
        "img 태그, CSS, 이미지 필드에 바로 붙여넣어 사용할 수 있습니다.",
      ],
    },
    "2026-09-17-generator": {
      title: "더미 데이터 생성기",
      teaser: "실제 같은 JSON을 빠르게 생성",
      hint: "/generator — 데이터 유형을 고르고 생성·복사하거나 'API 만들기' 실행",
      summary:
        "프런트엔드 개발에 쓸 수 있는 실감 나는 JSON을 손쉽게 만들어 보세요. 유형, 필드, 개수를 고른 뒤 복사·다운로드하거나 임시 API로 바로 생성할 수 있습니다.",
      details: [
        "/generator 에서 인물, 커머스, 콘텐츠, 미디어, 비즈니스, 위치 데이터를 생성할 수 있습니다.",
        "POST 본문 형태와 API 레코드 형태를 지원하며, FA에서는 현지 페르시아어 데이터를 사용합니다.",
        "브라우저에서 한 번에 최대 1,000개 레코드까지 생성할 수 있으며, 'API 만들기'는 임시 API 제한(500개 / 64 KB)을 따릅니다.",
        "화면을 이동해도 선택한 설정과 생성 결과는 유지됩니다(새로고침 시 초기화).",
      ],
    },
    "2026-09-16-temporary": {
      title: "임시 API",
      teaser: "JSON을 붙여넣고 일회성 REST URL 발급",
      hint: "/temporary — JSON을 붙여넣고 공개 REST URL 받기",
      summary:
        "원하는 JSON을 붙여넣어 임시 공개 REST URL을 만드세요. 회원가입이 필요 없으며, 브라우저당 최대 5개의 활성 API를 생성할 수 있습니다.",
      details: [
        "/temporary 에서 만료 시간(1시간, 6시간, 12시간, 24시간)을 선택해 바로 생성할 수 있습니다.",
        "발급된 /api/t/… URL에 일반 엔드포인트처럼 GET, POST, PATCH, DELETE 요청을 보낼 수 있습니다.",
        "브라우저당 최대 5개, IP당 1시간에 최대 20개까지 생성할 수 있습니다.",
        "URL은 비밀번호처럼 안전하게 관리하세요. 만료 전까지는 URL을 아는 누구나 읽고 수정할 수 있습니다.",
      ],
    },
    "2026-09-15-preview": {
      title: "미리보기 화면",
      teaser: "리소스별 샘플 UI 제공",
      hint: "/preview/users — 브라우저에서 CRUD 동작 확인",
      summary:
        "Users, Posts, Auth 등 리소스마다 실제 API와 연동되는 가벼운 미리보기 화면을 제공합니다.",
      details: [
        "각 리소스 문서 페이지의 '미리보기' 링크로 실제 API와 연결된 화면을 열 수 있습니다.",
        "공용 데모 데이터를 대상으로 조회, 검색, 페이지네이션, 생성, 수정, 삭제를 직접 해볼 수 있습니다.",
        "Auth 미리보기에서는 로그인 폼(비밀번호는 password 로 고정)과 토큰 기반 GET /me 호출을 테스트할 수 있습니다.",
        "필요하면 상단 언어 전환기에서 페르시아어 샘플 데이터를 불러올 수 있습니다.",
      ],
    },
    "2026-09-14-lang-fa": {
      title: "페르시아어 데이터 (?lang=fa)",
      teaser: "페르시아어 샘플 데이터셋 지원",
      hint: "/api/users?lang=fa — 요청에 lang=fa 를 붙여 페르시아어 데이터 조회",
      summary:
        "엔드포인트에 ?lang=fa 를 추가하면 현지 페르시아어 이름, 사용자명, 전화번호, 텍스트가 포함된 응답을 받을 수 있습니다.",
      details: [
        "기본 언어는 영어이며, 쿠키나 Accept-Language 대신 lang=fa 쿼리 파라미터로만 전환됩니다.",
        "FA 응답에는 Content-Language: fa 와 화면 표시용 Vazirmatn 폰트 정보가 함께 제공됩니다.",
        "목록 및 단건 조회와 더불어 페르시아어 사용자명 로그인도 지원합니다.",
        "상단에서 فارسی 를 선택하면 Playground에서도 lang=fa 가 자동으로 붙습니다.",
      ],
    },
    "2026-09-12-playground": {
      title: "Playground",
      teaser: "브라우저에서 직접 API 호출",
      hint: "/playground — 요청을 보내고 JSON 응답 확인",
      summary:
        "브라우저에서 직접 API 요청을 보내고 로그인 성공/실패를 테스트하면서 정리된 JSON 응답을 확인할 수 있습니다.",
      details: [
        "리소스와 동작을 고르고 쿼리나 JSON 본문을 수정한 뒤 요청을 보낼 수 있습니다.",
        "Auth 로그인에서는 '올바른 인증 정보 / 잘못된 인증 정보' 버튼으로 200과 401 응답을 쉽게 비교할 수 있습니다.",
        "HTTP 상태 코드와 포맷된 JSON, 컬렉션의 페이지네이션 정보를 함께 보여줍니다.",
        "탐색하는 동안 리소스별 요청 내용과 최근 응답이 유지됩니다(새로고침 시 초기화).",
      ],
    },
    "2026-09-10-auth": {
      title: "목 인증(Mock Auth)",
      teaser: "로그인 및 Bearer 토큰 지원",
      hint: "/api/auth/login — 비밀번호는 password 로 고정",
      summary:
        "/api/auth/login 에 초기 사용자와 비밀번호를 POST하면 /me 호출에 사용할 수 있는 Bearer 토큰을 발급받을 수 있습니다.",
      details: [
        "모든 초기 사용자는 동일한 데모 비밀번호 password 를 사용합니다.",
        "로그인에 성공하면 목 Bearer 토큰과 user 객체(id, name, username, email, role)가 반환됩니다.",
        "비밀번호가 틀리거나 사용자를 찾지 못하면 401 상태 코드와 명확한 오류 구조를 반환합니다.",
        "GET /api/auth/me 요청의 Authorization: Bearer <token> 헤더에 토큰을 담아 현재 사용자 정보를 조회할 수 있습니다.",
      ],
    },
    "2026-09-08-resources": {
      title: "실시간 REST 리소스",
      teaser: "Users, Posts 등 다양한 리소스에서 CRUD 지원",
      hint: "/docs#resources — 사용 가능한 엔드포인트 목록 보기",
      summary:
        "Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, Countries 리소스를 제공하며 전체 CRUD와 페이지네이션을 지원합니다.",
      details: [
        "페이지네이션이 적용된 목록은 { data, pagination } 형태로 page, limit, total, totalPages 를 포함합니다.",
        "검색, 정렬, 필터링, 지연 시뮬레이션, 지정한 오류 상태 코드 반환 등 쿼리 파라미터를 지원합니다.",
        "프로덕션 공용 데이터베이스는 매일 초기화되므로 데모 및 테스트 용도로 사용하고 영구 데이터 저장에는 쓰지 마세요.",
        "/openapi.json 에서 기계 판독 가능한 명세를 받아 Postman, Swagger, AI 도구 등에 가져올 수 있습니다.",
      ],
    },
  },
  catalog: {
    auth: {
      title: "Auth",
      summary:
        "사용자명과 비밀번호로 테스트하는 목 로그인 엔드포인트입니다. 인증에 성공하면 Bearer 토큰을, 실패하면 401을 반환합니다.",
    },
    users: {
      title: "Users",
      summary: "검색, 역할 필터링, 페이지네이션을 지원하는 목 사용자 CRUD API입니다.",
    },
    posts: {
      title: "Posts",
      summary: "작성자(사용자)와 연결된 블로그 게시물 리소스로 태그와 공개 여부를 지원합니다.",
    },
    comments: {
      title: "Comments",
      summary: "게시물에 달리는 댓글 리소스로 이름, 이메일, 본문 필드를 포함합니다.",
    },
    albums: {
      title: "Albums",
      summary: "사용자와 연결된 앨범 리소스입니다. 사진 항목은 albumId 로 앨범과 연결됩니다.",
    },
    photos: {
      title: "Photos",
      summary: "앨범 속 이미지 리소스로 url 과 thumbnailUrl 필드를 포함합니다.",
    },
    todos: {
      title: "Todos",
      summary: "사용자와 연결된 간단한 할 일 항목으로 완료 상태를 가집니다.",
    },
    products: {
      title: "Products",
      summary: "가격, 재고, 카테고리, imageUrl 을 포함한 상품 카탈로그 리소스입니다.",
    },
    notifications: {
      title: "Notifications",
      summary: "알림 유형과 읽음 상태를 포함한 사용자 알림 리소스입니다.",
    },
    countries: {
      title: "Countries",
      summary: "ISO 코드, 지역, 인구, 국기 정보 등을 제공하는 국가 데이터 리소스입니다.",
    },
  },
};

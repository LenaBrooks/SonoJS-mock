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

export const zh: Messages = {
  common: {
    home: "首页",
    docs: "文档",
    playground: "Playground",
    contact: "联系我们",
    preview: "预览",
    search: "搜索",
    loading: "加载中…",
    save: "保存",
    saving: "保存中…",
    cancel: "取消",
    create: "新建",
    edit: "编辑",
    delete: "删除",
    searchPlaceholder: "搜索 API…",
    noResults: "暂无结果",
    new: "新上线",
    inDevelopment: "开发中",
    actions: "操作",
    copy: "复制",
    copied: "已复制",
    live: "运行中",
    open: "打开",
    tryIt: "试一试",
    learnMore: "了解更多",
    back: "返回",
    close: "关闭",
    yes: "是",
    no: "否",
    name: "姓名",
    email: "邮箱",
    message: "留言",
    send: "发送",
    sending: "发送中…",
    networkError: "网络错误",
    temporary: "临时 API",
    temporaryBadge: "即开即用",
    generator: "数据生成器",
    imageGenerator: "图片生成",
    jsonWorkbench: "JSON 工作台",
  },
  header: {
    primaryNav: "主导航",
    whatsNew: "更新动态",
    whatsNewTitle: "更新动态",
    whatsNewSubtitle: "最新功能与版本更新",
    latest: "最新",
    contact: "关于",
    menu: "菜单",
    openMenu: "打开菜单",
    appearance: "外观",
    lightMode: "切换到浅色模式",
    darkMode: "切换到深色模式",
    light: "浅色",
    dark: "深色",
    apiLangGroup: "语言",
    english: "English",
    persian: "فارسی",
    github: "GitHub",
    githubStars: "GitHub — 为仓库点亮星标",
  },
  home: {
    tagline:
      "提供真实 JSON 的免费 REST Mock API。无需搭建后端，即可快速原型开发、测试鉴权流程并调用真实接口。",
    taglineNote: "",
    resourcesTitle: "资源列表",
    resourcesBlurb:
      "十个可立即调用的 REST API，均配有文档与示例。生产环境使用共享演示数据。",
    searchLabel: "搜索 API 和接口",
    searchPlaceholder: "搜索 users、posts、auth…",
    temporaryCtaTitle: "临时 API",
    temporaryCtaBody:
      "粘贴 JSON 即可创建临时 API，也可直接从假数据生成器一键发布。请像保管密码一样妥善保存链接——每个浏览器最多同时保留 5 个有效临时 API。",
    temporaryCtaLink: "创建临时 API",
  },
  notFound: {
    title: "页面不存在",
    body: "该地址不属于 MockData。请返回首页或查看文档。",
    home: "首页",
    docs: "文档",
  },
  blog: {
    title: "博客",
    description:
      "围绕假数据、JSON、API 与前端开发工作流的指南与随笔——写给正在使用 MockData 的开发者。",
    all: "全部",
    emptyTitle: "暂无文章",
    emptyBody: "已发布的文章将显示在这里，欢迎稍后再来。",
    emptyCategoryTitle: "暂无文章",
    emptyCategoryBody: "试试切换其他分类，或查看全部文章。",
    readingTime: "阅读约 {n} 分钟",
    previousPage: "上一页",
    nextPage: "下一页",
    pageStatus: "第 {page} 页，共 {total} 页",
    paginationNav: "分页导航",
    categoriesNav: "文章分类",
    backToBlog: "博客",
    previousArticle: "上一篇",
    nextArticle: "下一篇",
    relatedArticles: "相关文章",
    categories: {
      news: "动态",
      "mock-data": "假数据",
      json: "JSON",
      api: "API",
      frontend: "前端",
    },
  },
  contact: {
    title: "联系我们",
    intro:
      "有问题、建议或想法？可以直接给我们发简短留言，也可以发送邮件至",
    name: "姓名",
    email: "邮箱",
    topic: "主题",
    message: "内容",
    send: "发送留言",
    sending: "发送中…",
    success: "留言已发送，感谢你的反馈，我们会尽快回复。",
    chooseTopic: "请选择你的来意。",
    pickTopic: "我们需要为你提供哪方面的帮助？",
    topics: {
      question: "咨询问题",
      bug: "反馈 Bug",
      feature: "建议新功能",
      other: "其他事务",
    },
  },
  docs: {
    title: "文档",
    navLabel: "文档",
    intro:
      "MockData 提供 JSON 格式的模拟 REST 资源。你可以自由调用公开接口、测试 Auth 登录、在 Playground 发起在线请求、在 /generator 生成测试数据、在 /image-generator 获取占位图片、在 /json 打开 JSON Workbench，或发布自己的临时 API。生产环境下的目录资源共用一套数据库——详见“共享数据”。",
    toc: {
      intro: "简介",
      whatsNew: "更新动态",
      temporary: "临时 API",
      generator: "假数据生成器",
      imageGenerator: "图片生成器",
      jsonWorkbench: "JSON 工作台",
      sharedData: "共享数据",
      language: "语言设置",
      resources: "资源说明",
      openapi: "OpenAPI",
      requests: "请求规范",
      errors: "错误处理",
      rateLimit: "频率限制",
      reset: "重置演示数据",
    },
    whatsNewTitle: "更新动态",
    whatsNewBlurb:
      "按时间倒序展示面向开发者的最新功能。点击卡片可查看详情；顶部铃铛图标中也提供同一份更新列表。",
    temporaryTitle: "临时 API",
    temporaryBody:
      "需要一个带自定义 JSON 的一次性 REST 接口？临时 API 与共享目录相互隔离。粘贴 JSON、选择有效期，即可获得 /api/t/… 下的公开访问地址；也可以在假数据生成器中点击“创建 API”直接发布。",
    temporaryBullets: [
      "无需注册——直接在浏览器中访问 /temporary 创建（或在 /generator 中通过“创建 API”发布）。",
      "可选有效期：1 小时、6 小时、12 小时或 24 小时（默认 12 小时）。",
      "可像普通集合或文档一样，对公开地址 /api/t/… 发起 GET、POST、PATCH 和 DELETE 请求。",
      "请把链接当作密码保管：在过期前，任何拿到链接的人都可以读取和修改数据。",
      "临时 API 过期后，请求将返回 HTTP 410。",
    ],
    temporaryLimitsTitle: "临时 API 限制",
    temporaryLimitsBullets: [
      "每个浏览器最多同时拥有 5 个有效的临时 API。",
      "单个 IP 在 1 小时滑动窗口内最多创建 20 次（超出返回 HTTP 429）。",
      "JSON 载荷大小上限为 64 KB。",
      "最大嵌套深度为 8 层；数组最多 500 项；对象最多 200 个键。",
      "/api 全局频率限制仍同时生效（每 IP 每分钟约 60 次请求）。",
    ],
    generatorTitle: "假数据生成器",
    generatorBody:
      "无需手写 mock 数据，直接为前端生成贴近真实的 JSON。全部在浏览器本地运行。选择数据类型、字段和数量后，即可复制、下载或发布为临时 API。",
    generatorBullets: [
      "访问 /generator——涵盖人物、电商、内容、媒体、企业与地理位置等类别。",
      "支持选择 POST 请求体（不含 id 和时间戳）或 API 记录格式（包含 id、createdAt 和 updatedAt）。",
      "FA 语言使用本地波斯语词库；EN 使用多国英语词库。",
      "单次最多生成 1,000 条记录；“创建 API”遵循临时 API 的限制（500 条 / 64 KB）。",
      "在站内页面间切换时会保留所选配置与生成结果（整页刷新后会清空）。",
    ],
    imageGeneratorTitle: "图片生成器",
    imageGeneratorBody:
      "前端开发需要占位图片链接？可使用 MockData SVG 占位图或随机真实照片（通过 Picsum 跳转）。设置宽高并复制链接，即可用于 img 标签、CSS 或任意图片字段。",
    imageGeneratorBullets: [
      "访问 /image-generator——支持 SVG 占位图或真实照片。",
      "公开链接格式：SVG 为 /image/{width}/{height}；真实照片请加上 ?type=real。",
      "默认随机返回；传入可选参数 ?seed= 可固定相同的 SVG 配色或同一张真实照片。",
      "内置头像、缩略图、个人主页、动态卡片、封面、横幅和竖屏故事等常用尺寸。",
    ],
    jsonWorkbenchTitle: "JSON Workbench",
    jsonWorkbenchBody:
      "JSON Workbench（开发中）：浏览器内的一站式 JSON 处理工作台，助你在搭建界面时随时完成格式化、比对、检索与转换，无需离开 MockData。",
    jsonWorkbenchBullets: [
      "在 /json 打开 JSON Workbench 并选择工具，视图会立即切换（支持通过 ?tool= 分享链接）。",
      "核心工具：格式化、树状视图、搜索、JSONPath 与结构比对。",
      "转换工具：TypeScript、Zod、JSON Schema、YAML 与 CSV。",
      "实用工具：键排序、剔除空值、扁平化、转义/修复、提取/过滤字段等。",
      "纯浏览器端运行——你的 JSON 不会上传至任何服务器。",
      "仍在持续迭代中——更多工具与体验优化即将推出。",
    ],
    sharedDataTitle: "共享数据",
    sharedDataBody:
      "所有访客共用同一份实时数据库。新增、修改和删除都会真实生效并对所有人可见。生产环境会通过 GET /api/cron/reset 每天自动重置一次种子数据。非常适合原型联调与功能演示，但不适合存放需要长期保留的数据。",
    languageTitle: "语言设置",
    languageBody:
      "默认情况下，所有资源文本均为英文。传入 lang=fa 可获取波斯语响应，包含本地化的姓名、用户名、邮箱、手机号与文案。系统不会读取 Cookie 或 Accept-Language 请求头，仅认查询参数。顶部语言切换器（English | فارسی）也会同步影响 Playground 与预览页。",
    languageBullets: [
      "示例：GET /api/users?lang=fa",
      "FA 响应会带上 Content-Language: fa 以及用于渲染的 font 对象（Vazirmatn）。",
      "在顶部选择 فارسی 会将界面切换为从右到左（RTL），并在 Playground 中自动加上 lang=fa。",
    ],
    resourcesTitle: "资源说明",
    resourcesBlurb:
      "当前已上线的可调用接口，以及后续规划功能的说明。",
    colResource: "资源",
    colBasePath: "基础路径",
    colStatus: "状态",
    colDocs: "文档",
    statusLive: "运行中",
    statusDev: "开发中",
    statusSoon: "即将上线",
    openapiTitle: "OpenAPI",
    openapiBody:
      "涵盖所有已上线接口（Auth、Users、Posts、Comments、Albums、Photos、Todos、Products、Notifications、Countries 及管理员重置）的机器可读规范。可直接导入 Postman、Swagger UI 或 AI 工具。",
    download: "下载",
    requestsTitle: "请求规范",
    requestsBody:
      "集合接口返回 data 与 pagination；单条资源接口返回 { data }。",
    errorsTitle: "错误处理",
    errorsBody:
      "失败响应包含 error 对象。常见状态码：400 参数校验失败、401 未认证、404 资源不存在、429 请求过于频繁、500 服务端错误。调试界面时可加上 ?status=500（范围 400–599）强制模拟错误。",
    rateLimitTitle: "频率限制",
    rateLimitBody:
      "为保障所有人的演示体验，每个 IP 每分钟最多可调用 /api/* 约 {limit} 次；超出会收到 HTTP 429（请求过多）。响应头中还会附带 X-RateLimit 字段显示剩余配额。",
    resetTitle: "重置演示数据",
    resetBody:
      "所有用户共用同一套演示库。线上环境每 24 小时会自动恢复初始种子数据；如果你持有管理员密钥，也可以通过下方表单立即清空并重新加载种子数据。",
    resetPanel: {
      intro: "输入管理员密钥以清空演示数据表并重新写入初始种子数据。",
      placeholder: "管理员密钥",
      button: "立即重置",
      resetting: "重置中…",
      needSecret: "请先输入管理员密钥。",
      confirm: "此操作将清空演示数据表并重新加载种子数据，是否继续？",
      networkError: "网络错误，请确认服务是否已启动。",
      donePrefix: "重置完成",
    },
    colIndex: "#",
  },
  resourceDocs: {
    endpoints: "接口列表",
    queryParams: "查询参数",
    examples: "调用示例",
    response: "响应示例",
    tryExample: "试一试",
    preview: "预览",
    playground: "Playground",
    backToResources: "返回资源列表",
  },
  playground: {
    title: "Playground",
    blurb:
      "向 MockData API 发送真实请求，直接在浏览器中查看 JSON 响应——浏览期间会为每种资源保留最近一次请求。",
    resource: "资源",
    action: "操作",
    send: "发送请求",
    sending: "发送中…",
    response: "响应结果",
    request: "请求详情",
    body: "请求体",
    query: "查询参数",
    headers: "请求头",
    correct: "有效账号",
    wrong: "无效账号",
    password: "密码",
    user: "用户",
    pickUser: "选择用户",
    loadError: "无法加载下拉选项",
    emptyResponse: "暂无响应",
    startHint: "选择资源并发送请求即可开始。",
    types: "TS",
    json: "JSON",
  },
  temporary: {
    title: "临时 API",
    blurb: "粘贴 JSON，快速生成临时 API。",
    privacyNote:
      "请像对待密码一样保管链接。在过期前，任何拥有链接的人都可以读取和修改数据。每个浏览器最多同时保留 5 个有效临时 API。",
    jsonLabel: "JSON",
    durationLabel: "有效期",
    duration1h: "1 小时",
    duration6h: "6 小时",
    duration12h: "12 小时",
    duration24h: "24 小时",
    checkJson: "校验",
    jsonValid: "格式正常，可以创建。",
    jsonHint: "随时校验，或直接点击创建。",
    create: "创建 API",
    creating: "创建中…",
    acceptFix: "应用修复并创建",
    rejectFix: "继续编辑",
    fixedPreview: "已自动修复部分问题，确认后即可创建。",
    myApis: "我的 API",
    emptyList: "当前没有有效的临时 API。",
    copyUrl: "复制",
    delete: "删除",
    deleteAll: "全部删除",
    deleting: "…",
    confirmDelete: "确定删除该 API？",
    confirmDeleteBody: "删除后该链接将立即失效。",
    confirmDeleteAll: "确定删除全部 API？",
    confirmDeleteAllBody: "列表中的所有链接将立即失效。",
    cancel: "取消",
    limitReached: "已达到 5 个 API 的上限。",
    limitReachedBody: "请先删除下方列表中的任意一项，或等待现有 API 过期。",
    createdTitle: "创建成功",
    openApi: "打开",
    slotsLabel: "{n} / 5",
    maxActive: "",
    sampleJson: `[
  { "id": "1", "firstName": "林嘉豪", "lastName": "", "role": "admin" },
  { "id": "2", "firstName": "陈思涵", "lastName": "", "role": "member" },
  { "id": "3", "firstName": "周子轩", "lastName": "", "role": "member" }
]`,
    issues: {
      EMPTY: "请粘贴 JSON 对象或数组。",
      INVALID_JSON: "JSON 格式无效——请检查逗号、引号、方括号和花括号。",
      TOO_LARGE: "JSON 体积超出限制（最大 {max} KB）。",
      NOT_OBJECT_OR_ARRAY: "根节点必须是对象 { } 或数组 [ ]。",
      TOO_DEEP: "嵌套层级过深（最大 {max} 层）。",
      ARRAY_TOO_LONG: "数组长度超出限制（最多 {max} 项）。",
      TOO_MANY_KEYS: "单个对象的键数量过多（最多 {max} 个）。",
      UNSAFE_KEY: "不允许使用危险键名“{key}”。",
      AUTO_FIXED: "已移除多余的尾随逗号或不安全键名。",
    },
  },
  imageGenerator: {
    title: "图片生成器",
    blurb:
      "为项目准备占位图时，可按需生成 MockData SVG 或随机真实照片。直接把图片链接填入 img 标签、CSS 或任意图片字段即可使用。",
    modeSvg: "SVG",
    modeReal: "真实照片",
    width: "宽度",
    height: "高度",
    generate: "生成链接",
    generating: "生成中…",
    yourUrl: "你的 API 链接",
    preview: "效果预览",
    useInProject: "在项目中使用",
    tabUrl: "URL",
    tabHtml: "HTML",
    tabCss: "CSS",
    tabJs: "JavaScript",
    tabCurl: "cURL",
    readySizes: "常用尺寸",
    sizes: {
      avatar: "头像",
      thumbnail: "缩略图",
      profile: "主页图",
      square: "方图",
      post: "帖子配图",
      cover: "封面图",
      banner: "横幅图",
      story: "竖屏故事",
    },
  },
  jsonWorkbench: {
    title: "JSON Workbench",
    blurb:
      "只需粘贴一次 JSON，即可连续执行格式化、检索、转换等操作，无需反复粘贴。",
    toolNavLabel: "Workbench 工具栏",
    source: {
      title: "你的 JSON",
      hint: "只需在这里粘贴一次，下方所有工具都会基于这份数据进行处理。",
      sample: "加载示例",
      valid: "JSON 格式有效。",
      needJson: "请先在左侧粘贴 JSON。",
      fixFirst: "请先修复“你的 JSON”中的语法错误，然后再试。",
      pickAction: "你想执行什么操作？",
      useResult: "设为当前 JSON",
      diffHint: "“你的 JSON”作为 A 侧，请在下方粘贴用于对比的 B 侧数据。",
      escapedInput: "转义字符串",
      schemaInput: "JSON Schema",
      fromSchemaNote:
        "在下方粘贴 JSON Schema，可生成示例 JSON 并填入“你的 JSON”。",
    },
    categories: {
      core: "核心功能",
      transform: "格式转换",
      utility: "实用工具",
    },
    labels: {
      input: "输入",
      output: "输出",
      tree: "树状结构",
      matches: "匹配项",
      jsonA: "JSON A",
      jsonB: "JSON B",
      diffResult: "比对结果",
      jsonpath: "JSONPath",
      result: "结果（{count}）",
    },
    actions: {
      format: "格式化",
      minify: "压缩",
      showTree: "显示树状图",
      search: "搜索",
      clearSearch: "清除搜索",
      replace: "替换",
      replaceAll: "全部替换",
      prevMatch: "上一个匹配",
      nextMatch: "下一个匹配",
      compare: "开始比对",
      run: "运行",
      runPath: "执行查询",
      toTypescript: "生成 TS 类型",
      toZod: "生成 Zod",
      toSchema: "生成 Schema",
      swapDirection: "切换方向",
      sortKeys: "键排序",
      removeEmpty: "清理空值",
      flatten: "扁平化",
      unflatten: "还原嵌套",
      escape: "转义",
      unescape: "反转义",
      repair: "修复",
      fromSchema: "生成示例",
      extractKeys: "提取键名",
      extractValues: "提取键值",
      pick: "提取字段",
      omit: "排除字段",
      compareStructure: "比对结构",
      clear: "清空",
      expandAll: "全部展开",
      collapseAll: "全部折叠",
      copyPath: "复制路径",
      copyValue: "复制值",
    },
    errors: {
      empty: "请先粘贴 JSON。",
      invalid: "JSON 格式无效。",
      unexpectedEnd: "JSON 意外结束。",
      unexpectedToken: "意外的词法单元：{token}",
      expectedPropertyName: "属性名必须使用双引号包裹。",
      expectedCommaOrBrace: "属性值后应为“,”或“}”。",
      expectedCommaOrBracket: "数组元素后应为“,”或“]”。",
      expectedColon: "属性名后应为“:”。",
      unterminatedString: "字符串未闭合。",
      badControlChar: "字符串中包含非法控制字符。",
      badEscape: "字符串中包含无效的转义序列。",
      trailingChar: "JSON 值之后存在多余字符。",
      objectKeyExpected: "此处应为对象键名。",
      unexpectedCharacter: "意外的字符：{char}",
      invalidCharacter: "无效的字符：{char}",
      invalidUnicode: "无效的 Unicode 转义：{chars}",
      couldNotRepair: "无法自动修复该 JSON。",
      atLineColumn: "第 {line} 行，第 {column} 列",
      atLine: "第 {line} 行",
      atPosition: "位置 {position}",
    },
    types: {
      object: "对象",
      array: "数组",
      string: "字符串",
      number: "数字",
      boolean: "布尔值",
      null: "null",
    },
    validate: {
      idleHint: "粘贴 JSON 后即可校验，仅检查标准 JSON 语法。",
      validTitle: "JSON 格式有效",
      validBody: "根节点类型：{type}",
      invalidTitle: "JSON 格式无效",
    },
    tree: {
      idleTitle: "树状结构将显示在这里",
      idleBody: "在左侧粘贴 JSON 后点击“显示树状图”。",
      errorTitle: "无法生成树状结构",
      errorBody: "请先修复 JSON 语法错误，然后再试。",
    },
    search: {
      query: "搜索关键词",
      replaceWith: "替换为",
      matchCount: "第 {current} 项，共 {total} 项",
      noMatches: "无匹配项",
      noMatchesBody: "键名和键值中均未找到匹配内容。",
      idleTitle: "匹配结果将显示在这里",
      idleBody: "输入关键词并点击“搜索”，将同时检索键名与键值。",
      errorTitle: "无法执行搜索",
      errorBody: "请先修复 JSON 语法错误，再重新搜索。",
      kindKey: "键",
      kindValue: "值",
      activeHint: "{kind} · {path}",
      replacedCount: "已替换 {count} 处。",
    },
    diff: {
      idleTitle: "差异结果将显示在这里",
      idleBody: "分别填入 JSON A 和 JSON B 后开始比对。",
      identical: "没有差异——两份文档的结构完全一致。",
      added: "新增 / 仅见于 B",
      removed: "删除 / 仅见于 A",
      changed: "已修改",
      sideEmpty: "这一侧暂无内容。",
      emptyA: "JSON A 为空。",
      emptyB: "JSON B 为空。",
      bothInvalid: "JSON A 和 JSON B 均无效。",
    },
    jsonpath: {
      whatIs:
        "JSONPath 可从嵌套 JSON 中提取目标值——类似数据的 CSS 选择器。点击下方示例即可快速填入。",
      hintTitle: "语法说明",
      hintBody: `$              根节点
.users         属性名
[*]            数组全部元素
[0]            数组首个元素`,
      idleTitle: "查询结果将显示在这里",
      idleBody: "输入路径表达式并执行查询。",
      errorTitle: "无法执行查询",
      errorBody: "请先修正 JSON 或路径表达式中的错误，然后再试。",
      noResults: "该路径下没有匹配结果。",
      emptyPath: "请输入 JSONPath 表达式。",
    },
    transform: {
      tsIdleTitle: "TypeScript 类型定义将显示在这里",
      tsIdleBody: "粘贴 JSON 后即可生成类型定义。",
      zodIdleTitle: "Zod Schema 将显示在这里",
      zodIdleBody: "粘贴 JSON 后即可生成 Zod 校验 Schema。",
      schemaExplain: "JSON ↔ Schema",
      schemaUse:
        "可从“你的 JSON”推导 JSON Schema，也可反向根据 Schema 生成示例数据。",
      schemaIdleTitle: "JSON Schema 将显示在这里",
      schemaIdleBody: "粘贴 JSON 后即可生成 JSON Schema。",
      yamlIdleTitle: "YAML 输出将显示在这里",
      yamlIdleBody: "你的 JSON 会实时转换为 YAML。",
      yamlToJsonIdle: "在上方粘贴 YAML，将转换为“你的 JSON”。",
      yamlApplied: "转换完成，已更新“你的 JSON”。",
      csvIdleTitle: "CSV 输出将显示在这里",
      csvIdleBodyJson:
        "支持转换“你的 JSON”中的单个对象、对象数组，或包含列表的对象。",
      csvIdleBodyCsv: "粘贴带表头的 CSV 文本，即可转换为 JSON。",
      csvToJsonIdle: "在上方粘贴 CSV，将转换为“你的 JSON”。",
      csvApplied: "转换完成，已更新“你的 JSON”。",
      csvUnsupported: "当前 JSON 结构无法转换为 CSV。",
    },
    utilities: {
      sortAsc: "A → Z",
      sortDesc: "Z → A",
      sortIdleTitle: "准备排序",
      sortIdleBody: "选择 A→Z 或 Z→A 后，排序后的键名将显示在输出区。",
      sortApplied: "键名已排序，请查看下方输出。",
      removeOptions: "要移除的空值类型",
      removeNull: "null",
      removeEmptyString: '""',
      removeEmptyArray: "[]",
      removeEmptyObject: "{}",
      removeNullLabel: "null 值",
      removeEmptyStringLabel: "空字符串",
      removeEmptyArrayLabel: "空数组",
      removeEmptyObjectLabel: "空对象",
      removePreserveHint: "false 和 0 会始终保留。",
      removeIdleTitle: "清理后的 JSON 将显示在这里",
      removeIdleBody: "勾选需要清理的项并执行。",
      nestedLabel: "嵌套结构",
      flatLabel: "扁平结构",
      flattenHint: "将嵌套对象转为点分隔键名——例如 address.city 和 skills.0。",
      flattenUse:
        "适合导出表格、编写 .env 配置、构建搜索索引，或对接仅接受扁平键值对的接口。",
      flattenIdleTitle: "准备扁平化",
      flattenIdleBody: "嵌套键名将在输出中转为点分隔路径。",
      flattenApplied: "已完成扁平化，请查看下方输出。",
      unflattenHint: "点分隔路径会还原为嵌套对象，数字分段会还原为数组。",
      unflattenUse:
        "当你拿到扁平键名（如 user.name、skills.0）并需要还原为嵌套 JSON 时非常实用。",
      unflattenIdleTitle: "还原后的嵌套 JSON 将显示在这里",
      unflattenIdleBody: "粘贴包含点分隔路径的对象后即可还原嵌套。",
      escapeIdleTitle: "转义后的字符串将显示在这里",
      escapeIdleBody: "你的 JSON 将被转义，以便嵌入字符串中使用。",
      escapeHint:
        "把 JSON 转换为单行转义字符串——引号和换行会变成 \" 与 \n，方便放入其他字符串或配置项。",
      escapeUse:
        "适合把 JSON 写进代码、环境变量或日志时，避免破坏外层引号。",
      unescapeIdleTitle: "还原后的 JSON 将显示在这里",
      unescapeIdleBody: "粘贴已转义的 JSON 字符串后即可反转义。",
      repairHint:
        "针对损坏、截断、带注释或编辑中途的 JSON 提供多步自动修复。",
      repairUse:
        "可修复引号、逗号和括号；清理注释与代码块围栏；处理 Python/JS 字面量、JSONP、MongoDB 类型、NDJSON、截断内容及输入残留。",
      repairAlreadyValid: "本身已是合法 JSON，仅做了格式化。",
      repairFormatted: "已格式化。",
      repairReady: "可自动修复。",
      repairApplied: "已修复。",
      repairAppliedToSource: "已应用到“你的 JSON”。",
      repairFailedTitle: "未能完全修复",
      repairFailedAt: "{message}（第 {line} 行，第 {column} 列）",
      repairPreview: "修复预览",
      repairFixes: {
        "trailing-commas": "尾随逗号",
        "single-quotes": "单引号",
        "smart-quotes": "弯引号",
        "unquoted-keys": "未加引号的键名",
        "missing-commas": "漏写逗号",
        "missing-brackets": "缺失括号",
        comments: "注释",
        "code-fence": "代码块围栏",
        "python-literals": "Python 字面量",
        "js-undefined": "undefined → null",
        jsonp: "JSONP 包裹",
        "escaped-string": "转义 JSON 字符串",
        mongodb: "MongoDB 类型",
        ndjson: "NDJSON → 数组",
        ellipsis: "省略号",
        "string-concat": "字符串拼接",
        whitespace: "空白与排版",
        truncated: "截断 / 不完整",
        "mid-edit-junk": "编辑中途残留",
      },
      repairIdleTitle: "修复后的 JSON 将显示在这里",
      repairIdleBody:
        "在“你的 JSON”中粘贴残缺文本或准 JSON，输出区会实时展示修复结果。",
      fromSchemaHint:
        "根据 type、properties、required、items、enum 和 default 从 Schema 生成示例 JSON。",
      fromSchemaIdleTitle: "生成的示例 JSON 将显示在这里",
      fromSchemaIdleBody: "在下方粘贴 JSON Schema 即可生成示例。",
      extractHint:
        "输出叶子路径与对应值的键值对——例如 { path: \"address.city\", value: \"上海\" }。",
      extractIdleTitle: "提取的键值将显示在这里",
      extractIdleBody: "在上方勾选字段即可提取路径与对应值。",
      extractKeysHint: "按点号路径列出嵌套键名（数组下标以 .0 表示）。",
      extractKeysIdleTitle: "提取的键名将显示在这里",
      extractKeysIdleBody: "粘贴 JSON 后即可提取所有键名。",
      extractValuesHint: "深度收集所有叶子节点值（基本类型与 null）。",
      extractValuesIdleTitle: "提取的值将显示在这里",
      extractValuesIdleBody: "粘贴 JSON 后即可提取所有值。",
      fieldsLabel: "“你的 JSON”中的字段",
      fieldsClickHint:
        "直接点击路径即可勾选，无需手动输入；嵌套路径使用点号分隔。",
      fieldsSelectAll: "全选",
      fieldsClear: "清空",
      fieldsEmpty: "当前 JSON 中没有可选字段。",
      pickHint: "仅保留选中的字段——请点击下方字段进行勾选。",
      pickIdleTitle: "结果将显示在这里",
      pickIdleBody: "",
      omitHint: "剔除选中的字段——请点击下方字段进行勾选。",
      omitIdleTitle: "结果将显示在这里",
      omitIdleBody: "",
      compareHint: "并排填入两份 JSON 文档，仅对比结构，忽略具体数值差异。",
      compareUse:
        "A 中缺失的键标红，B 中新增的键标绿，两侧存在类型差异的字段标琥珀色。",
      compareBack: "返回 Workbench",
      compareIdleTitle: "请填入两份 JSON 文档",
      compareIdleBody: "在左右两侧分别填入 JSON 即可比对结构。",
      compareIdentical: "结构一致——键名与数据类型完全匹配。",
      compareMissing: "缺失字段（仅存在于 A）",
      compareExtra: "新增字段（仅存在于 B）",
      compareType: "类型不一致",
    },
    empty: {
      formatTitle: "格式化后的 JSON 将显示在这里",
      formatBody: "在左侧粘贴 JSON 后点击“格式化”。",
    },
    soon: {
      badge: "即将上线",
      title: "{tool} 即将推出",
      body: "该工具已列入完整 Workbench 预览，将在后续版本中开放。",
    },
    tools: {
      format: "格式化",
      minify: "压缩",
      validate: "校验",
      tree: "树状图",
      search: "搜索",
      diff: "Diff",
      jsonpath: "JSONPath",
      convert: "转换",
      toTypescript: "TypeScript",
      toZod: "Zod",
      toSchema: "JSON Schema",
      yaml: "YAML",
      csv: "CSV",
      sortKeys: "键排序",
      removeEmpty: "清理空值",
      flatten: "扁平化",
      unflatten: "还原嵌套",
      escape: "转义",
      unescape: "反转义",
      repair: "修复",
      extract: "提取键值",
      extractKeys: "提取键名",
      extractValues: "提取值",
      pick: "提取字段",
      omit: "排除字段",
      compareStructure: "比对结构",
    },
  },
  generator: {
    title: "假数据生成器",
    subtitle: "为你的前端项目快速生成逼真的测试数据。",
    chooseType: "数据类型",
    searchPlaceholder: "搜索数据类型…",
    noTopics: "没有匹配的数据类型。",
    fieldsLegend: "字段",
    moreFields: "展开更多字段",
    lessFields: "收起可选字段",
    optionalFields: "可选字段",
    records: "条数",
    customQty: "自定义",
    country: "国家/地区",
    countrySearch: "搜索国家/地区…",
    selectPlaceholder: "请选择数据类型…",
    outputMode: "输出模式",
    modePayload: "POST 请求体",
    modeApi: "API 记录",
    modePayloadHint: "不含 id 与时间戳，可直接作为新建接口的 POST 请求体。",
    modeApiHint: "包含 id、createdAt 与 updatedAt，贴近接口已存储的数据行。",
    jsonType: "JSON",
    viewJson: "JSON",
    viewType: "TS",
    generate: "生成 {n} 条数据",
    generating: "正在生成 {n} 条数据…",
    generateAgain: "重新生成",
    refresh: "再次生成",
    generated: "已生成 {n} 条数据",
    download: "下载",
    createApi: "创建 API",
    createSuccess: "临时 API 已创建。",
    createBlockedArray:
      "临时 API 最多支持 500 条记录，请调小数量后再发布。",
    createBlockedSize:
      "当前 JSON 超出临时 API 大小限制（64 KB），请减少条数或精简字段。",
    openTemporary: "前往“临时 API”管理",
    emptyTitle: "选择一种数据类型",
    emptyBody: "在上方选择数据类型，即可生成贴近真实的测试数据。",
    duration1h: "1 小时",
    duration6h: "6 小时",
    duration12h: "12 小时",
    duration24h: "24 小时",
    countries: {
      all: "全部国家/地区",
      IR: "伊朗",
      DE: "德国",
      US: "美国",
      GB: "英国",
      FR: "法国",
      NL: "荷兰",
      JP: "日本",
      CA: "加拿大",
    },
    categories: {
      people: "人物",
      ecommerce: "电商",
      content: "内容",
      media: "媒体",
      business: "企业",
      location: "地理位置",
    },
    fields: {
      id: "id",
      name: "姓名",
      username: "用户名",
      email: "邮箱",
      avatar: "头像",
      phone: "手机号",
      company: "公司",
      location: "所在地",
      age: "年龄",
      role: "角色",
      jobTitle: "职位",
      department: "部门",
      bio: "简介",
      website: "个人主页",
      createdAt: "创建时间",
      updatedAt: "更新时间",
      hiredAt: "入职时间",
      ordersCount: "订单数",
      totalSpent: "累计消费",
      postsCount: "文章数",
      price: "价格",
      image: "图片",
      category: "分类",
      description: "描述",
      brand: "品牌",
      stock: "库存",
      rating: "评分",
      sku: "SKU",
      colors: "颜色",
      orderId: "订单号",
      customer: "客户",
      items: "商品明细",
      total: "合计",
      status: "状态",
      orderDate: "下单日期",
      paymentStatus: "支付状态",
      shippingAddress: "收货地址",
      user: "用户",
      comment: "评论",
      post: "文章",
      date: "日期",
      product: "商品",
      title: "标题",
      verified: "已验证",
      helpful: "有用数",
      slug: "Slug",
      parentCategory: "上级分类",
      productCount: "商品数量",
      quantity: "数量",
      discount: "折扣",
      code: "编码",
      type: "类型",
      expiresAt: "到期时间",
      minimumOrder: "起订金额",
      usageLimit: "使用上限",
      active: "是否启用",
      amount: "金额",
      currency: "币种",
      paymentMethod: "支付方式",
      transactionId: "交易流水号",
      order: "订单",
      carrier: "物流商",
      trackingNumber: "物流单号",
      estimatedDelivery: "预计送达",
      body: "正文",
      author: "作者",
      tags: "标签",
      publishedAt: "发布时间",
      likes: "点赞数",
      views: "浏览量",
      replies: "回复数",
      attachments: "附件",
      actionUrl: "跳转链接",
      sender: "发件人",
      receiver: "收件人",
      message: "消息内容",
      read: "已读",
      artist: "歌手/艺人",
      cover: "封面",
      year: "年份",
      genre: "流派",
      tracks: "曲目数",
      album: "专辑",
      duration: "时长",
      poster: "海报",
      director: "导演",
      language: "语言",
      plays: "播放量",
      label: "厂牌",
      pages: "页数",
      isbn: "ISBN",
      instructor: "讲师",
      level: "难度",
      lessons: "课时数",
      students: "学员数",
      employees: "员工数",
      logo: "Logo",
      industry: "行业",
      salary: "薪资",
      experience: "经验要求",
      remote: "远程办公",
      founded: "成立年份",
      postedAt: "发布日期",
      capacity: "容纳人数",
      capital: "首府/首都",
      flag: "国旗",
      region: "省/州/大区",
      population: "人口",
      street: "街道地址",
      postalCode: "邮政编码",
      latitude: "纬度",
      longitude: "经度",
      country: "国家",
      city: "城市",
      notes: "备注",
      team: "团队",
      joinedAt: "加入时间",
      skills: "技能",
      specialty: "科室/专长",
      hospital: "医院",
      licenseNumber: "执业编号",
      yearsExperience: "从业年限",
      bloodType: "血型",
      diagnosis: "诊断结果",
      doctor: "主治医生",
      admittedAt: "入院时间",
      vehicleType: "车型",
      plateNumber: "车牌号",
      tripsCount: "行程数",
      roomNumber: "房号",
      checkIn: "入住时间",
      checkOut: "退房时间",
      nights: "晚数",
      followers: "粉丝数",
      following: "关注数",
      grade: "年级",
      school: "学校",
      gpa: "绩点",
      major: "专业",
      enrollmentYear: "入学年份",
      subject: "科目",
      classesCount: "班级数",
      invoiceNumber: "发票号",
      issueDate: "开票日期",
      dueDate: "到期日",
      tax: "税费",
      itemsCount: "条目数",
      target: "目标对象",
      targetType: "目标类型",
      reaction: "互动类型",
      color: "颜色",
      thumbnail: "缩略图",
      channel: "频道",
      url: "链接",
      width: "宽度",
      height: "高度",
      alt: "替代文本",
      photographer: "摄影师",
      host: "主播",
      episodes: "集数",
      subscribers: "订阅数",
      owner: "负责人",
      public: "是否公开",
      progress: "进度",
      teamSize: "团队规模",
      budget: "预算",
      startDate: "开始日期",
      membersCount: "成员数",
      focus: "方向",
      countriesCount: "国家数量",
      areaKm2: "面积（km²）",
      timezone: "时区",
      terminals: "航站楼",
      altitude: "海拔",
      accuracy: "精度",
    },
    topics: {
      users: {
        name: "用户",
        description: "适用于应用与后台看板的用户档案",
        preview: {
          line1: "林嘉豪",
          line2: "@linjiahao · jiahao@mail.test",
          line3: "上海",
        },
      },
      customers: {
        name: "客户",
        description: "买家与账户联系人信息",
        preview: {
          line1: "陈思涵",
          line2: "sihan@demo.dev",
          line3: "138 0013 8000",
        },
      },
      employees: {
        name: "员工",
        description: "含职位与所属部门的团队成员",
        preview: {
          line1: "周子轩",
          line2: "前端工程师",
          line3: "研发部 · Acme",
        },
      },
      authors: {
        name: "作者",
        description: "撰稿人与内容创作者",
        preview: {
          line1: "许明哲",
          line2: "专注产品设计与体验。",
        },
      },
      contacts: {
        name: "联系人",
        description: "CRM 联系人与关联公司",
        preview: {
          line1: "沈佳宁",
          line2: "jianing@acme.test · Acme",
        },
      },
      "team-members": {
        name: "团队成员",
        description: "产品与研发团队协作者",
        preview: {
          line1: "赵宇航",
          line2: "技术负责人 · 研发部",
        },
      },
      doctors: {
        name: "医生",
        description: "含科室与所属医院的医护人员",
        preview: {
          line1: "苏文静 主任医师",
          line2: "心内科 · 瑞金医院",
        },
      },
      patients: {
        name: "患者",
        description: "含诊断结果与血型的就诊记录",
        preview: {
          line1: "顾子墨",
          line2: "A+ · 高血压",
        },
      },
      drivers: {
        name: "司机",
        description: "含车型与评分的车队驾驶员",
        preview: {
          line1: "陆浩然",
          line2: "轿车 · ★ 4.8",
        },
      },
      guests: {
        name: "住客",
        description: "含房号与入住状态的酒店客人",
        preview: {
          line1: "何雨桐",
          line2: "412 房 · 已入住",
        },
      },
      profiles: {
        name: "个人主页",
        description: "含粉丝数与简介的社交主页",
        preview: {
          line1: "宋晚晴",
          line2: "@songwanqing · 1.24 万粉丝",
        },
      },
      "girl-students": {
        name: "女学生",
        description: "含年级与学校的女学生档案",
        preview: {
          line1: "唐语彤",
          line2: "高二 · 育才中学",
        },
      },
      "boy-students": {
        name: "男学生",
        description: "含年级与学校的男学生档案",
        preview: {
          line1: "韩景行",
          line2: "初三 · 育英学校",
        },
      },
      teachers: {
        name: "教师",
        description: "含任教学科与学校的教师档案",
        preview: {
          line1: "郑雅琳",
          line2: "数学 · 实验中学",
        },
      },
      products: {
        name: "商品",
        description: "商城商品与价格信息",
        preview: {
          line1: "无线降噪耳机",
          line2: "¥899 · 数码电子",
          line3: "★★★★☆",
        },
      },
      orders: {
        name: "订单",
        description: "含商品明细与状态的购买订单",
        preview: {
          line1: "订单 #10482",
          line2: "3 件商品 · ¥1,499",
          line3: "已签收",
        },
      },
      reviews: {
        name: "评价",
        description: "用户打分与商品评价内容",
        preview: {
          line1: "★★★★★ 体验很棒",
          line2: "做工扎实，上手顺手。",
        },
      },
      categories: {
        name: "商品分类",
        description: "商品目录分类",
        preview: { line1: "数码电子", line2: "shuma-dianzi" },
      },
      "cart-items": {
        name: "购物车商品",
        description: "已加入购物车的商品项",
        preview: { line1: "智能手表", line2: "2 × ¥1,299 · ¥2,598" },
      },
      coupons: {
        name: "优惠券",
        description: "折扣码与使用门槛",
        preview: { line1: "WELCOME10", line2: "9 折 · 2026-12-01 到期" },
      },
      payments: {
        name: "支付记录",
        description: "支付单与支付方式",
        preview: { line1: "¥568 CNY", line2: "在线支付 · 已支付" },
      },
      shipments: {
        name: "物流单",
        description: "物流商与配送状态",
        preview: { line1: "ORD-10482 · 顺丰速运", line2: "运输中" },
      },
      invoices: {
        name: "发票",
        description: "含金额与到期日的开票记录",
        preview: { line1: "INV-10482", line2: "¥8,500 · 已结算" },
      },
      brands: {
        name: "品牌",
        description: "含 Logo 与商品数的商城品牌",
        preview: { line1: "Acme", line2: "acme · 128 款商品" },
      },
      posts: {
        name: "文章",
        description: "博客文章与信息流动态",
        preview: { line1: "为流畅体验而设计", line2: "作者：宋晚晴" },
      },
      comments: {
        name: "评论",
        description: "文章或商品下的评论回复",
        preview: {
          line1: "很有帮助，谢谢！",
          line2: "阿哲 · 12 赞",
        },
      },
      messages: {
        name: "私信",
        description: "站内会话消息",
        preview: {
          line1: "最新那版草稿方便看一眼吗？",
          line2: "周子轩 → 陈思涵",
        },
      },
      notifications: {
        name: "通知",
        description: "应用内提醒与消息摘要",
        preview: { line1: "收到新评论", line2: "提示 · 2 小时前" },
      },
      tags: {
        name: "标签",
        description: "含 slug 与计数的文章标签",
        preview: { line1: "typescript", line2: "142 篇文章" },
      },
      "content-categories": {
        name: "内容分类",
        description: "用于整理文章的专栏分类",
        preview: { line1: "教程", line2: "jiaocheng · 86 篇文章" },
      },
      likes: {
        name: "点赞记录",
        description: "对文章与评论的互动点赞",
        preview: { line1: "宋晚晴赞了一篇文章", line2: "文章 · 喜欢" },
      },
      albums: {
        name: "专辑",
        description: "含封面的音乐专辑",
        preview: {
          line1: "Random Access Memories",
          line2: "Daft Punk",
          line3: "2013 · 13 首曲目",
        },
      },
      songs: {
        name: "歌曲",
        description: "含时长与艺人的单曲",
        preview: { line1: "午夜环线", line2: "3:42 · 电子" },
      },
      movies: {
        name: "电影",
        description: "含海报与评分的影片",
        preview: { line1: "夜班快车", line2: "2021 · ★ 8.2" },
      },
      books: {
        name: "图书",
        description: "含作者与封面的书籍",
        preview: { line1: "界面设计之道", line2: "许明哲 · 2019" },
      },
      videos: {
        name: "视频",
        description: "含时长与播放量的视频",
        preview: {
          line1: "10 分钟搭好数据看板",
          line2: "12:40 · 8.4 万次播放",
        },
      },
      images: {
        name: "图片",
        description: "含尺寸与标签的图片素材",
        preview: { line1: "清晨微光", line2: "1280×720" },
      },
      podcasts: {
        name: "播客",
        description: "含主播与集数的播客节目",
        preview: { line1: "代码与拿铁", line2: "48 集 · 科技" },
      },
      playlists: {
        name: "歌单",
        description: "含创建者与风格的歌单",
        preview: { line1: "深度专注", line2: "32 首 · 电子" },
      },
      companies: {
        name: "公司",
        description: "企业主体与所属行业",
        preview: { line1: "Acme 科技", line2: "互联网科技 · 上海" },
      },
      jobs: {
        name: "职位",
        description: "含地点与雇佣类型的招聘岗位",
        preview: {
          line1: "前端开发工程师",
          line2: "Google · 上海 · 全职",
        },
      },
      courses: {
        name: "课程",
        description: "课程内容与授课讲师",
        preview: { line1: "React 入门与实战", line2: "进阶 · 12 小时" },
      },
      events: {
        name: "活动",
        description: "线下聚会与技术大会",
        preview: { line1: "前端交流沙龙", line2: "北京 · 工作坊" },
      },
      projects: {
        name: "项目",
        description: "含进度与预算的项目列表",
        preview: { line1: "数据看板改版", line2: "进行中 · 72%" },
      },
      teams: {
        name: "团队",
        description: "含负责人与人数的内部团队",
        preview: { line1: "产品小组", line2: "8 人 · 研发部" },
      },
      continents: {
        name: "大洲",
        description: "世界各大洲编码与统计信息",
        preview: { line1: "亚洲", line2: "AS · 48 个国家/地区" },
      },
      countries: {
        name: "国家/地区",
        description: "国家/地区名称、编码与国旗",
        preview: { line1: "中国", line2: "CN · 北京" },
      },
      cities: {
        name: "城市",
        description: "含所属省/州与国家/地区的城市",
        preview: { line1: "杭州", line2: "中国 · 浙江省" },
      },
      addresses: {
        name: "地址",
        description: "格式完整的收货或办公地址",
        preview: {
          line1: "中关村大街 27 号",
          line2: "100080 北京市海淀区",
        },
      },
      regions: {
        name: "地区",
        description: "省、自治区、直辖市或大区",
        preview: { line1: "广东省", line2: "中国 · 广州" },
      },
      neighborhoods: {
        name: "商圈/街区",
        description: "城市街区与生活圈",
        preview: { line1: "静安寺", line2: "上海 · 200040" },
      },
      airports: {
        name: "机场",
        description: "含 IATA 三字码与所在城市的机场",
        preview: { line1: "北京首都国际机场", line2: "PEK · 中国" },
      },
      coordinates: {
        name: "经纬度坐标",
        description: "纬度、经度与地点描述",
        preview: {
          line1: "39.904202, 116.407394",
          line2: "北京 · 中国",
        },
      },
    },
    errors: {
      pickTopic: "请先选择一种数据类型。",
      INVALID_TOPIC: "未知的数据类型。",
      INVALID_FIELDS: "请至少选择一个字段。",
      INVALID_QUANTITY: "数量必须在 1 到 1000 之间。",
      INVALID_COUNTRY: "无效的国家/地区。",
      GENERATE_FAILED: "生成数据失败，请稍后重试。",
      DOWNLOAD_FAILED: "下载失败，请稍后重试。",
      CREATE_FAILED: "创建临时 API 失败。",
      LIMIT_REACHED: "临时 API 数量已达上限（最多 5 个），请先删除一个。",
      RATE_LIMITED: "创建过于频繁，请稍后再试。",
    },
  },
  preview: {
    docs: "文档",
    playground: "Playground",
    blurb: "一个用于体验该 API 的简洁交互界面。",
    blurbFaHint: "",
    backToResource: "返回 {name}",
    search: "搜索",
    create: "新建",
    edit: "编辑",
    delete: "删除",
    save: "保存",
    saving: "保存中…",
    deleting: "删除中…",
    cancel: "取消",
    fillSample: "填入示例",
    noRecords: "暂无数据",
    loading: "加载中…",
    confirmDelete: "确认删除？",
    confirmDeleteBody: "删除后将无法恢复。",
    networkError: "网络错误",
    authDemoPassword: "所有初始用户的演示密码均为",
    username: "用户名",
    password: "密码",
    login: "登录",
    loginSuccess: "登录成功。",
    logout: "退出登录",
    getMe: "GET /me",
    token: "Token",
    user: "用户",
    loginFirst: "请先登录以获取 Token",
    createdAt: "创建时间",
    fieldLabels: {
      name: "姓名",
      username: "用户名",
      email: "邮箱",
      avatarUrl: "头像链接",
      role: "角色",
      city: "城市",
      country: "国家/地区",
      company: "公司",
      title: "标题",
      body: "内容",
      published: "已发布",
      userId: "用户 ID",
      postId: "文章 ID",
      albumId: "专辑 ID",
      url: "链接",
      thumbnailUrl: "缩略图链接",
      completed: "已完成",
      description: "描述",
      price: "价格",
      stock: "库存",
      category: "分类",
      imageUrl: "图片链接",
      message: "消息",
      type: "类型",
      read: "已读",
      code: "编码",
      capital: "首府/首都",
      region: "地区",
      population: "人口",
      currency: "币种",
      flagUrl: "国旗链接",
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
      teaser: "开发中——支持 JSON 格式化、比对与转换",
      hint: "/json — 选择工具后视图立即切换",
      badge: "开发中",
      summary:
        "JSON Workbench 正在开发中：浏览器内的一站式 JSON 处理工具集，支持格式化、结构比对、搜索与转换，涵盖 TypeScript、Zod、YAML、CSV 及多种实用工具。",
      details: [
        "访问 /json 打开 JSON Workbench 并选择工具，视图会立即切换（支持通过 ?tool= 直达）。",
        "核心工具：格式化、树状图、搜索、JSONPath 与结构比对。",
        "转换工具：支持导出为 TypeScript、Zod、JSON Schema、YAML 与 CSV。",
        "实用工具：键排序、清理空值、扁平化、转义、修复、提取/排除字段等。",
        "仍在持续迭代中，更多工具与细节优化将陆续上线。",
      ],
    },
    "2026-09-19-image-generator": {
      title: "图片生成器",
      teaser: "按需生成占位图片链接",
      hint: "/image-generator — 选择 SVG 或真实照片并复制链接",
      summary:
        "通过链接获取占位图片——支持 MockData SVG 或 Picsum 真实照片，内置头像、帖子配图与横幅等常用尺寸。",
      details: [
        "访问 /image-generator 选择 SVG 或真实照片，设置宽高后即可复制现成链接。",
        "公开链接默认随机：SVG 为 /image/{w}/{h}；真实照片请追加 ?type=real。",
        "传入可选参数 ?seed= 可固定相同的 SVG 配色或同一张真实照片。",
        "可直接用于 img 标签、CSS 或任意图片字段，无需手动上传素材。",
      ],
    },
    "2026-09-17-generator": {
      title: "假数据生成器",
      teaser: "几秒内生成真实感 JSON",
      hint: "/generator — 选择类型、生成、复制，或点击“创建 API”",
      summary:
        "为前端快速生成贴近真实的 JSON——选择数据类型、字段与条数后，可复制、下载或发布为临时 API。",
      details: [
        "访问 /generator 获取人物、电商、内容、媒体、企业与地理位置数据。",
        "支持 POST 请求体与 API 记录两种模式；FA 界面使用本地波斯语词库。",
        "浏览器内单次最多生成 1,000 条；“创建 API”遵循临时 API 限制（500 条 / 64 KB）。",
        "页面切换期间会保留所选配置与生成结果（整页刷新后会清空）。",
      ],
    },
    "2026-09-16-temporary": {
      title: "临时 API",
      teaser: "一段 JSON，一条临时接口链接",
      hint: "/temporary — 粘贴 JSON 即可获取公开 REST 链接",
      summary:
        "粘贴自定义 JSON 即可生成临时公开 REST 链接——无需注册，每个浏览器最多可同时保留 5 个有效 API。",
      details: [
        "在 /temporary 中创建：选择有效期（1 小时、6 小时、12 小时或 24 小时）并发布。",
        "可像常规接口一样对公开地址 /api/t/… 发送 GET、POST、PATCH 与 DELETE 请求。",
        "每个浏览器最多同时保留 5 个有效 API；单个 IP 每小时最多创建 20 个。",
        "请像保管密码一样保存链接——在过期前，持有链接者均可读取与修改数据。",
      ],
    },
    "2026-09-15-preview": {
      title: "预览页",
      teaser: "为每类资源提供示例交互界面",
      hint: "/preview/users — 在浏览器中体验增删改查",
      summary:
        "为 Users、Posts、Auth 等各类资源提供在线示例界面，直接对接真实接口完成增删改查。",
      details: [
        "每份资源文档页都配有“预览”按钮，可打开连接真实接口的轻量示例界面。",
        "支持列表浏览、搜索、分页、新增、编辑与删除，数据与共享演示库同步。",
        "Auth 预览提供可登录表单（密码固定为 password）以及携带 Token 调用 GET /me。",
        "需要时可通过顶部语言切换器加载波斯语示例数据。",
      ],
    },
    "2026-09-14-lang-fa": {
      title: "波斯语数据（?lang=fa）",
      teaser: "内置波斯语示例数据集",
      hint: "/api/users?lang=fa — 在任意请求后加上 lang=fa 即可获取波斯语文本",
      summary:
        "在任意接口后拼接 ?lang=fa，即可获取伊朗本地化姓名、用户名、手机号与示例文案。",
      details: [
        "默认语言仍为英文，仅通过查询参数 lang=fa 切换语言，不依赖 Cookie 或 Accept-Language。",
        "FA 响应包含 Content-Language: fa 以及用于渲染的 Vazirmatn 字体信息。",
        "适用于列表接口、详情接口以及使用波斯语用户名登录。",
        "在顶部选择 فارسی 后，Playground 会自动带上 lang=fa。",
      ],
    },
    "2026-09-12-playground": {
      title: "Playground",
      teaser: "在浏览器中直接调用 API",
      hint: "/playground — 发送请求并查看 JSON",
      summary:
        "在浏览器中直接调用已上线接口，测试成功或失败登录，并查看结构清晰的 JSON 响应。",
      details: [
        "选择资源与操作，调整查询参数或 JSON 请求体后即可发送请求。",
        "Auth 登录提供“有效账号 / 无效账号”快捷按钮，一键对比 200 与 401 响应。",
        "响应区展示 HTTP 状态码、格式化 JSON，以及列表接口附带的分页信息。",
        "站内切换页面时会按资源保留请求状态与最近响应（刷新页面后重置）。",
      ],
    },
    "2026-09-10-auth": {
      title: "模拟鉴权（Mock Auth）",
      teaser: "支持登录与 Bearer Token",
      hint: "/api/auth/login — 密码固定为 password",
      summary:
        "向 /api/auth/login 发送任意初始用户与密码的 POST 请求，即可换取用于调用 /me 的 Bearer Token。",
      details: [
        "所有初始用户共用同一个演示密码：password。",
        "登录成功后返回模拟 Bearer Token 以及 user 对象（包含 id、name、username、email、role）。",
        "密码错误或用户不存在时返回 401 与明确的错误结构。",
        "在 GET /api/auth/me 请求头中携带 Authorization: Bearer <token> 即可获取当前登录用户。",
      ],
    },
    "2026-09-08-resources": {
      title: "在线 REST 资源",
      teaser: "Users、Posts 等多类资源支持完整 CRUD",
      hint: "/docs#resources — 查看已上线接口列表",
      summary:
        "提供 Users、Posts、Comments、Albums、Photos、Todos、Products、Notifications 与 Countries，支持完整 CRUD 与分页。",
      details: [
        "标准分页列表结构为 { data, pagination }，包含 page、limit、total 与 totalPages。",
        "支持搜索、排序、筛选、模拟延迟以及强制返回指定错误状态码等查询参数。",
        "生产环境共享数据库每日定时重置，适合演示与联调，不适合持久化业务数据。",
        "可在 /openapi.json 获取机器可读接口清单，方便导入 Postman、Swagger 与 AI 工具。",
      ],
    },
  },
  catalog: {
    auth: {
      title: "Auth",
      summary:
        "基于用户名与密码的模拟登录接口。凭据有效时返回 Bearer Token，无效时返回 401。",
    },
    users: {
      title: "Users",
      summary: "支持搜索、按角色筛选与分页的模拟用户 CRUD 接口。",
    },
    posts: {
      title: "Posts",
      summary: "关联用户的博客风格文章资源，支持标签与发布状态。",
    },
    comments: {
      title: "Comments",
      summary: "文章评论资源，包含姓名、邮箱与评论内容。",
    },
    albums: {
      title: "Albums",
      summary: "关联用户的相册资源，照片记录通过 albumId 关联相册。",
    },
    photos: {
      title: "Photos",
      summary: "相册图片资源，包含 url 与 thumbnailUrl。",
    },
    todos: {
      title: "Todos",
      summary: "关联用户的轻量待办事项，包含完成状态。",
    },
    products: {
      title: "Products",
      summary: "商品目录资源，包含价格、库存、分类与 imageUrl。",
    },
    notifications: {
      title: "Notifications",
      summary: "用户通知资源，包含通知类型与已读状态。",
    },
    countries: {
      title: "Countries",
      summary: "国家/地区信息资源，包含 ISO 编码、地区、人口与国旗。",
    },
  },
};

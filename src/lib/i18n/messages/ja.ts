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

export const ja: Messages = {
  common: {
    home: "ホーム",
    docs: "ドキュメント",
    playground: "Playground",
    contact: "お問い合わせ",
    preview: "プレビュー",
    search: "検索",
    loading: "読み込み中…",
    save: "保存",
    saving: "保存中…",
    cancel: "キャンセル",
    create: "新規作成",
    edit: "編集",
    delete: "削除",
    searchPlaceholder: "APIを検索…",
    noResults: "該当する結果がありません",
    new: "新着",
    inDevelopment: "開発中",
    actions: "操作",
    copy: "コピー",
    copied: "コピーしました",
    live: "稼働中",
    open: "開く",
    tryIt: "試してみる",
    learnMore: "詳しく見る",
    back: "戻る",
    close: "閉じる",
    yes: "はい",
    no: "いいえ",
    name: "名前",
    email: "メールアドレス",
    message: "メッセージ",
    send: "送信",
    sending: "送信中…",
    networkError: "ネットワークエラー",
    temporary: "一時API",
    temporaryBadge: "今すぐ使える",
    generator: "ダミーデータ生成",
    imageGenerator: "画像ジェネレーター",
    jsonWorkbench: "JSONワークベンチ",
  },
  header: {
    primaryNav: "メインナビゲーション",
    whatsNew: "新着情報",
    whatsNewTitle: "新着情報",
    whatsNewSubtitle: "最新機能とアップデート",
    latest: "最新",
    contact: "概要",
    menu: "メニュー",
    openMenu: "メニューを開く",
    appearance: "表示テーマ",
    lightMode: "ライトモードに切り替え",
    darkMode: "ダークモードに切り替え",
    light: "ライト",
    dark: "ダーク",
    apiLangGroup: "言語",
    english: "English",
    persian: "فارسی",
    github: "GitHub",
    githubStars: "GitHub — リポジトリにスターをつける",
  },
  home: {
    tagline:
      "リアルなJSONをすぐ使える無料のRESTモックAPI。バックエンドを用意しなくても、プロトタイプ開発や認証テスト、本番さながらのAPI連携が手軽にできます。",
    taglineNote: "",
    resourcesTitle: "リソース一覧",
    resourcesBlurb:
      "ドキュメントとサンプル付きの10種類のREST APIをすぐに利用できます。本番環境では共有デモデータを使用します。",
    searchLabel: "APIとエンドポイントを検索",
    searchPlaceholder: "users、posts、auth などを検索…",
    temporaryCtaTitle: "一時API",
    temporaryCtaBody:
      "JSONを貼り付けるか、ジェネレーターから直接公開して一時APIを作成できます。URLはパスワードと同じように大切に扱ってください。ブラウザごとに有効な一時APIは最大5件まで作成できます。",
    temporaryCtaLink: "一時APIを作成",
  },
  notFound: {
    title: "ページが見つかりません",
    body: "お探しのページはMockDataに存在しません。ホームに戻るか、ドキュメントをご確認ください。",
    home: "ホーム",
    docs: "ドキュメント",
  },
  blog: {
    title: "ブログ",
    description:
      "ダミーデータやJSON、API、フロントエンド開発のワークフローに関するガイドや記事をお届けします。",
    all: "すべて",
    emptyTitle: "記事はまだありません",
    emptyBody: "公開された記事がここに表示されます。しばらくしてからまたご覧ください。",
    emptyCategoryTitle: "該当する記事がありません",
    emptyCategoryBody: "別のカテゴリーを選ぶか、「すべて」から記事一覧をご覧ください。",
    readingTime: "約{n}分で読めます",
    previousPage: "前へ",
    nextPage: "次へ",
    pageStatus: "{total}ページ中 {page}ページ目",
    paginationNav: "ページネーション",
    categoriesNav: "カテゴリー一覧",
    backToBlog: "ブログ",
    previousArticle: "前の記事",
    nextArticle: "次の記事",
    relatedArticles: "関連記事",
    categories: {
      news: "ニュース",
      "mock-data": "ダミーデータ",
      json: "JSON",
      api: "API",
      frontend: "フロントエンド",
    },
  },
  contact: {
    title: "お問い合わせ",
    intro:
      "ご質問やご要望、アイデアなどがあればお気軽にメッセージをお送りください。メールでもご連絡いただけます：",
    name: "お名前",
    email: "メールアドレス",
    topic: "種別",
    message: "お問い合わせ内容",
    send: "送信する",
    sending: "送信中…",
    success: "メッセージを送信しました。フィードバックありがとうございます。折り返しご連絡いたします。",
    chooseTopic: "お問い合わせの種別を選択してください。",
    pickTopic: "どのようなご用件でしょうか？",
    topics: {
      question: "ご質問",
      bug: "不具合の報告",
      feature: "機能リクエスト",
      other: "その他",
    },
  },
  docs: {
    title: "ドキュメント",
    navLabel: "ドキュメント",
    intro:
      "MockDataはJSON形式のモックRESTリソースを提供します。公開エンドポイントの呼び出しやAuthログインの検証、Playgroundでのリクエスト送信、/generatorでのテストデータ作成、/image-generatorでのダミー画像取得、/jsonでのJSON Workbench利用、一時APIの公開まで自由に試せます。本番環境のカタログ用リソースは共有データベースを利用します（詳しくは「共有データ」をご覧ください）。",
    toc: {
      intro: "はじめに",
      whatsNew: "新着情報",
      temporary: "一時API",
      generator: "ダミーデータ生成",
      imageGenerator: "画像ジェネレーター",
      jsonWorkbench: "JSONワークベンチ",
      sharedData: "共有データ",
      language: "言語設定",
      resources: "リソース",
      openapi: "OpenAPI",
      requests: "リクエスト仕様",
      errors: "エラー処理",
      rateLimit: "レート制限",
      reset: "デモデータのリセット",
    },
    whatsNewTitle: "新着情報",
    whatsNewBlurb:
      "開発者向けの新機能を新しい順に掲載しています。カードをクリックすると詳細を確認でき、上部のベルアイコンからも同じ一覧を開けます。",
    temporaryTitle: "一時API",
    temporaryBody:
      "独自のJSONを載せた使い捨てRESTエンドポイントが必要ですか？一時APIは共有カタログとは分離されています。JSONを貼り付けて有効期限を選ぶだけで /api/t/… の公開URLが発行され、ジェネレーターの「APIを作成」から直接公開することもできます。",
    temporaryBullets: [
      "サインアップ不要で /temporary からブラウザ上で作成できます（/generator の「APIを作成」からも作成可能）。",
      "有効期限は1時間、6時間、12時間、24時間から選択できます（デフォルトは12時間）。",
      "発行された /api/t/… のURLに対して、通常のコレクションやドキュメントと同じようにGET、POST、PATCH、DELETEを実行できます。",
      "URLはパスワードと同じように管理してください。期限が切れるまではURLを知る誰もがデータの読み取りと更新を行えます。",
      "有効期限を過ぎた一時APIへのリクエストはHTTP 410を返します。",
    ],
    temporaryLimitsTitle: "一時APIの制限事項",
    temporaryLimitsBullets: [
      "ブラウザごとに同時有効な一時APIは最大5件までです。",
      "1IPあたり1時間のスライディングウィンドウで最大20件まで作成できます（超過時はHTTP 429）。",
      "JSONペイロードの上限サイズは64 KBです。",
      "最大ネスト深度は8階層、配列は最大500件、オブジェクトのキー数は最大200個までです。",
      "/api 全体のレート制限もあわせて適用されます（1IPあたり1分間に約60リクエスト）。",
    ],
    generatorTitle: "ダミーデータ生成",
    generatorBody:
      "手作業でサンプルデータを作らなくても、フロントエンド開発向けのリアルなJSONをすぐに生成できます。すべてブラウザ上で完結し、生成したデータはコピーやダウンロード、一時APIとしての公開が可能です。",
    generatorBullets: [
      "/generator を開き、人物、EC、コンテンツ、メディア、ビジネス、ロケーションなどのカテゴリーから選べます。",
      "idやタイムスタンプを含まないPOSTボディ形式と、id・createdAt・updatedAtを含むAPIレコード形式を切り替えられます。",
      "FAでは現地のペルシャ語データ、ENでは複数国の英語データを使用します。",
      "ブラウザ上で1回あたり最大1,000件まで生成できます。「APIを作成」は一時APIの制限（500件 / 64 KB）に従います。",
      "ページを移動しても選択内容や生成結果は保持されます（フルリロードするとリセットされます）。",
    ],
    imageGeneratorTitle: "画像ジェネレーター",
    imageGeneratorBody:
      "UI開発用のプレースホルダー画像URLを簡単に作成できます。MockDataのSVG画像や、Picsum経由のランダムな写真を利用でき、幅と高さを指定してコピーするだけでimgタグやCSS、各種画像フィールドにそのまま使えます。",
    imageGeneratorBullets: [
      "/image-generator からSVG画像またはリアル写真を選べます。",
      "公開URLの形式：SVGは /image/{width}/{height}、リアル写真は ?type=real を付けます。",
      "デフォルトではランダムに返却されますが、任意の ?seed= パラメーターを指定すると同じSVG配色や同じ写真を固定できます。",
      "アバター、サムネイル、プロフィール、投稿、カバー、バナー、ストーリーなどのプリセットサイズを用意しています。",
    ],
    jsonWorkbenchTitle: "JSON Workbench",
    jsonWorkbenchBody:
      "JSON Workbench（開発中）は、画面を作りながらフォーマットや比較、検索、変換をブラウザ上でまとめて行えるJSONツールキットです。",
    jsonWorkbenchBullets: [
      "/json でJSON Workbenchを開き、ツールを選ぶとすぐに切り替わります（?tool= パラメーターで直接開くことも可能）。",
      "コアツール：フォーマット、ツリー表示、検索、JSONPath、構造比較。",
      "変換ツール：TypeScript、Zod、JSON Schema、YAML、CSV。",
      "ユーティリティ：キー並び替え、空要素の削除、フラット化、エスケープ／修復、フィールド抽出／除外など。",
      "ブラウザ上で動作するため、入力したJSONがサーバーへ送信されることはありません。",
      "現在も開発を進めており、今後もツールや使いやすさを順次追加していきます。",
    ],
    sharedDataTitle: "共有データ",
    sharedDataBody:
      "すべての利用者が同じライブデータベースを共有しています。作成したデータや更新・削除内容は即時反映され、他の利用者からも見えます。本番環境では GET /api/cron/reset により毎日初期シードデータへリセットされます。プロトタイプやデモには最適ですが、永続化が必要なデータの保存には使わないでください。",
    languageTitle: "言語設定",
    languageBody:
      "デフォルトではすべてのリソーステキストが英語で返されます。クエリパラメーター lang=fa を付けると、名前やユーザー名、メールアドレス、電話番号、文章などがペルシャ語ローカライズされたレスポンスを取得できます。CookieやAccept-Languageヘッダーは参照せず、クエリパラメーターのみを使用します。ヘッダーの言語スイッチャー（English | فارسی）を切り替えると、Playgroundやプレビュー画面にも反映されます。",
    languageBullets: [
      "例：GET /api/users?lang=fa",
      "FAレスポンスには Content-Language: fa と、表示用の font オブジェクト（Vazirmatn）が含まれます。",
      "ヘッダーで فارسی を選ぶと表示が右から左（RTL）に切り替わり、Playgroundでも lang=fa が自動で付与されます。",
    ],
    resourcesTitle: "リソース",
    resourcesBlurb:
      "現在利用できるエンドポイントと、今後追加予定の機能一覧です。",
    colResource: "リソース",
    colBasePath: "ベースパス",
    colStatus: "ステータス",
    colDocs: "ドキュメント",
    statusLive: "稼働中",
    statusDev: "開発中",
    statusSoon: "近日公開",
    openapiTitle: "OpenAPI",
    openapiBody:
      "利用可能な全エンドポイント（Auth、Users、Posts、Comments、Albums、Photos、Todos、Products、Notifications、Countries、および管理者向けリセット）の機械可読仕様です。PostmanやSwagger UI、AIツールなどにそのまま読み込めます。",
    download: "ダウンロード",
    requestsTitle: "リクエスト仕様",
    requestsBody:
      "コレクションエンドポイントは data と pagination を返し、単一リソースエンドポイントは { data } を返します。",
    errorsTitle: "エラー処理",
    errorsBody:
      "エラーレスポンスには error オブジェクトが含まれます。主なステータスコードは、入力不備の400、未認証の401、リソース未存在の404、レート制限超過の429、サーバーエラーの500です。画面側の挙動を確認したいときは ?status=500（400〜599の範囲）を付けて任意のエラーを再現できます。",
    rateLimitTitle: "レート制限",
    rateLimitBody:
      "誰もが快適に利用できるよう、/api/* へのリクエストは1IPあたり1分間に約{limit}回までに制限されています。超過するとHTTP 429（Too Many Requests）が返され、レスポンスヘッダーの X-RateLimit 項目で残り枠を確認できます。",
    resetTitle: "デモデータのリセット",
    resetBody:
      "すべての利用者が同じデモデータベースを共有しています。本番環境では24時間ごとに初期シードデータへ戻りますが、管理者シークレットをお持ちの場合は下のフォームから今すぐテーブルを空にして初期データを再投入できます。",
    resetPanel: {
      intro: "管理者シークレットを入力してデモテーブルを初期化し、初期シードデータを再投入します。",
      placeholder: "管理者シークレット",
      button: "今すぐリセット",
      resetting: "リセット中…",
      needSecret: "管理者シークレットを入力してください。",
      confirm: "デモテーブルを初期化して初期シードデータを再投入します。よろしいですか？",
      networkError: "ネットワークエラーが発生しました。サーバーが起動しているか確認してください。",
      donePrefix: "リセット完了",
    },
    colIndex: "#",
  },
  resourceDocs: {
    endpoints: "エンドポイント",
    queryParams: "クエリパラメーター",
    examples: "リクエスト例",
    response: "レスポンス例",
    tryExample: "試す",
    preview: "プレビュー",
    playground: "Playground",
    backToResources: "リソース一覧に戻る",
  },
  playground: {
    title: "Playground",
    blurb:
      "MockData APIに実際のリクエストを送り、ブラウザ上でJSONレスポンスを確認できます。リソースごとの直近のリクエスト内容は閲覧中ずっと保持されます。",
    resource: "リソース",
    action: "アクション",
    send: "送信",
    sending: "送信中…",
    response: "レスポンス",
    request: "リクエスト",
    body: "リクエストボディ",
    query: "クエリ",
    headers: "ヘッダー",
    correct: "正常な認証情報",
    wrong: "不正な認証情報",
    password: "パスワード",
    user: "ユーザー",
    pickUser: "ユーザーを選択",
    loadError: "選択肢を読み込めませんでした",
    emptyResponse: "レスポンスはまだありません",
    startHint: "リソースを選んでリクエストを送信してください。",
    types: "TS",
    json: "JSON",
  },
  temporary: {
    title: "一時API",
    blurb: "JSONを貼り付けて、一時APIを素早く作成できます。",
    privacyNote:
      "URLはパスワードと同じように扱ってください。期限切れになるまではURLを知る誰もがデータの読み取りと更新を行えます。ブラウザごとに同時有効な一時APIは最大5件までです。",
    jsonLabel: "JSON",
    durationLabel: "有効期限",
    duration1h: "1時間",
    duration6h: "6時間",
    duration12h: "12時間",
    duration24h: "24時間",
    checkJson: "JSONを検証",
    jsonValid: "問題ありません。作成できます。",
    jsonHint: "いつでも検証できるほか、そのまま作成することもできます。",
    create: "APIを作成",
    creating: "作成中…",
    acceptFix: "修正を適用して作成",
    rejectFix: "編集を続ける",
    fixedPreview: "いくつかの問題を自動修正しました。内容を確認して作成できます。",
    myApis: "作成したAPI",
    emptyList: "有効な一時APIはまだありません。",
    copyUrl: "コピー",
    delete: "削除",
    deleteAll: "すべて削除",
    deleting: "…",
    confirmDelete: "このAPIを削除しますか？",
    confirmDeleteBody: "削除するとこのURLはすぐに使えなくなります。",
    confirmDeleteAll: "すべてのAPIを削除しますか？",
    confirmDeleteAllBody: "一覧にあるすべてのURLがすぐに使えなくなります。",
    cancel: "キャンセル",
    limitReached: "上限の5件に達しました。",
    limitReachedBody: "下のリストからいずれかを削除するか、期限切れをお待ちください。",
    createdTitle: "作成しました",
    openApi: "開く",
    slotsLabel: "{n} / 5",
    maxActive: "",
    sampleJson: `[
  { "id": "1", "firstName": "佐藤 蓮", "lastName": "", "role": "admin" },
  { "id": "2", "firstName": "鈴木 陽葵", "lastName": "", "role": "member" },
  { "id": "3", "firstName": "高橋 湊", "lastName": "", "role": "member" }
]`,
    issues: {
      EMPTY: "JSONオブジェクトまたは配列を貼り付けてください。",
      INVALID_JSON: "JSONが無効です。カンマや引用符、角括弧、波括弧を確認してください。",
      TOO_LARGE: "JSONのサイズが上限を超えています（最大 {max} KB）。",
      NOT_OBJECT_OR_ARRAY: "ルート要素はオブジェクト { } または配列 [ ] である必要があります。",
      TOO_DEEP: "ネストが深すぎます（最大 {max} 階層）。",
      ARRAY_TOO_LONG: "配列の要素数が上限を超えています（最大 {max} 件）。",
      TOO_MANY_KEYS: "1つのオブジェクトに含まれるキーが多すぎます（最大 {max} 個）。",
      UNSAFE_KEY: "安全でないキー名「{key}」は使用できません。",
      AUTO_FIXED: "末尾の余分なカンマや安全でないキーを削除しました。",
    },
  },
  imageGenerator: {
    title: "画像ジェネレーター",
    blurb:
      "プロジェクト用のプレースホルダー画像をオンデマンドで作成できます。MockDataのSVG画像やランダムな写真URLをimgタグやCSS、画像フィールドにそのままコピーして使えます。",
    modeSvg: "SVG",
    modeReal: "写真",
    width: "幅",
    height: "高さ",
    generate: "URLを生成",
    generating: "生成中…",
    yourUrl: "生成されたAPI URL",
    preview: "プレビュー",
    useInProject: "プロジェクトでの使い方",
    tabUrl: "URL",
    tabHtml: "HTML",
    tabCss: "CSS",
    tabJs: "JavaScript",
    tabCurl: "cURL",
    readySizes: "よく使うサイズ",
    sizes: {
      avatar: "アバター",
      thumbnail: "サムネイル",
      profile: "プロフィール",
      square: "スクエア",
      post: "投稿画像",
      cover: "カバー",
      banner: "バナー",
      story: "ストーリー",
    },
  },
  jsonWorkbench: {
    title: "JSON Workbench",
    blurb:
      "JSONを一度貼り付けるだけで、フォーマットや検索、変換などの操作を何度も貼り直さずに続けられます。",
    toolNavLabel: "Workbenchツール一覧",
    source: {
      title: "対象のJSON",
      hint: "ここに1回貼り付けるだけで、すべてのツールでこのJSONを扱えます。",
      sample: "サンプルを読み込む",
      valid: "有効なJSONです。",
      needJson: "先に左側にJSONを貼り付けてください。",
      fixFirst: "先に「対象のJSON」の構文エラーを修正してからお試しください。",
      pickAction: "どの操作を実行しますか？",
      useResult: "対象のJSONに反映",
      diffHint: "「対象のJSON」をA側として、下に比較対象のB側JSONを貼り付けてください。",
      escapedInput: "エスケープ済み文字列",
      schemaInput: "JSON Schema",
      fromSchemaNote:
        "下にJSON Schemaを貼り付けると、サンプルJSONを生成して「対象のJSON」に反映できます。",
    },
    categories: {
      core: "基本操作",
      transform: "変換",
      utility: "ユーティリティ",
    },
    labels: {
      input: "入力",
      output: "出力",
      tree: "ツリー",
      matches: "一致項目",
      jsonA: "JSON A",
      jsonB: "JSON B",
      diffResult: "比較結果",
      jsonpath: "JSONPath",
      result: "結果（{count}）",
    },
    actions: {
      format: "整形する",
      minify: "圧縮する",
      showTree: "ツリーを表示",
      search: "検索",
      clearSearch: "検索をクリア",
      replace: "置換",
      replaceAll: "すべて置換",
      prevMatch: "前の一致へ",
      nextMatch: "次の一致へ",
      compare: "比較する",
      run: "実行",
      runPath: "パスを実行",
      toTypescript: "TypeScriptに変換",
      toZod: "Zodに変換",
      toSchema: "Schemaに変換",
      swapDirection: "方向を入れ替え",
      sortKeys: "キーを並び替え",
      removeEmpty: "空要素を削除",
      flatten: "フラット化",
      unflatten: "ネストに戻す",
      escape: "エスケープ",
      unescape: "アンエスケープ",
      repair: "修復する",
      fromSchema: "サンプルを生成",
      extractKeys: "キーを抽出",
      extractValues: "値を抽出",
      pick: "指定キーを抽出",
      omit: "指定キーを除外",
      compareStructure: "構造を比較",
      clear: "クリア",
      expandAll: "すべて展開",
      collapseAll: "すべて折りたたむ",
      copyPath: "パスをコピー",
      copyValue: "値をコピー",
    },
    errors: {
      empty: "JSONを貼り付けてください。",
      invalid: "無効なJSONです。",
      unexpectedEnd: "JSONが途中で終わっています。",
      unexpectedToken: "予期しないトークンです：{token}",
      expectedPropertyName: "プロパティ名はダブルクォーテーションで囲む必要があります。",
      expectedCommaOrBrace: "値の後は「,」または「}」を指定してください。",
      expectedCommaOrBracket: "配列要素の後は「,」または「]」を指定してください。",
      expectedColon: "プロパティ名の後は「:」を指定してください。",
      unterminatedString: "文字列が閉じられていません。",
      badControlChar: "文字列内に不正な制御文字が含まれています。",
      badEscape: "文字列内に不正なエスケープシーケンスが含まれています。",
      trailingChar: "JSONの値の後ろに余分な文字があります。",
      objectKeyExpected: "ここにはオブジェクトのキー名が必要です。",
      unexpectedCharacter: "予期しない文字です：{char}",
      invalidCharacter: "無効な文字です：{char}",
      invalidUnicode: "無効なUnicodeエスケープです：{chars}",
      couldNotRepair: "このJSONは自動修復できませんでした。",
      atLineColumn: "{line}行目・{column}列目",
      atLine: "{line}行目",
      atPosition: "位置 {position}",
    },
    types: {
      object: "オブジェクト",
      array: "配列",
      string: "文字列",
      number: "数値",
      boolean: "真偽値",
      null: "null",
    },
    validate: {
      idleHint: "JSONを貼り付けると標準JSON構文として検証されます。",
      validTitle: "有効なJSONです",
      validBody: "ルート型：{type}",
      invalidTitle: "無効なJSONです",
    },
    tree: {
      idleTitle: "ここにツリーが表示されます",
      idleBody: "左側にJSONを貼り付けて「ツリーを表示」を押してください。",
      errorTitle: "ツリーを表示できません",
      errorBody: "JSONの構文エラーを修正してからもう一度お試しください。",
    },
    search: {
      query: "検索ワード",
      replaceWith: "置換後の文字列",
      matchCount: "{total}件中 {current}件目",
      noMatches: "一致なし",
      noMatchesBody: "キー名・値ともに一致する項目が見つかりませんでした。",
      idleTitle: "ここに検索結果が表示されます",
      idleBody: "キーワードを入力して「検索」を押すと、キー名と値の両方を検索します。",
      errorTitle: "検索を実行できません",
      errorBody: "JSONの構文エラーを修正してから検索してください。",
      kindKey: "キー",
      kindValue: "値",
      activeHint: "{kind} · {path}",
      replacedCount: "{count}件を置換しました。",
    },
    diff: {
      idleTitle: "ここに差分が表示されます",
      idleBody: "JSON AとJSON Bの両方を入力して比較してください。",
      identical: "差分はありません。2つのドキュメントは同じ構造と値を持っています。",
      added: "追加 / Bのみに存在",
      removed: "削除 / Aのみに存在",
      changed: "変更あり",
      sideEmpty: "こちら側は空です。",
      emptyA: "JSON Aが空です。",
      emptyB: "JSON Bが空です。",
      bothInvalid: "JSON AとJSON Bのどちらも無効です。",
    },
    jsonpath: {
      whatIs:
        "JSONPathを使うと、ネストしたJSONから目的の値を抽出できます（データ版のCSSセレクターのようなものです）。下の例をクリックして入力できます。",
      hintTitle: "構文ガイド",
      hintBody: `$              ルート要素
.users         プロパティ名
[*]            配列の全要素
[0]            配列の最初の要素`,
      idleTitle: "ここにクエリ結果が表示されます",
      idleBody: "パス式を入力して実行してください。",
      errorTitle: "クエリを実行できません",
      errorBody: "JSONまたはパス式のエラーを直してからもう一度お試しください。",
      noResults: "このパスに一致する要素はありませんでした。",
      emptyPath: "JSONPath式を入力してください。",
    },
    transform: {
      tsIdleTitle: "ここにTypeScriptの型定義が表示されます",
      tsIdleBody: "JSONを貼り付けると型定義を生成します。",
      zodIdleTitle: "ここにZodスキーマが表示されます",
      zodIdleBody: "JSONを貼り付けるとZodスキーマを生成します。",
      schemaExplain: "JSON ↔ Schema",
      schemaUse:
        "「対象のJSON」からJSON Schemaを生成したり、SchemaからサンプルJSONを作ったりできます。",
      schemaIdleTitle: "ここにJSON Schemaが表示されます",
      schemaIdleBody: "JSONを貼り付けるとJSON Schemaを生成します。",
      yamlIdleTitle: "ここにYAMLが出力されます",
      yamlIdleBody: "対象のJSONがYAMLに変換されて表示されます。",
      yamlToJsonIdle: "上にYAMLを貼り付けると、「対象のJSON」に変換されます。",
      yamlApplied: "変換し、「対象のJSON」を更新しました。",
      csvIdleTitle: "ここにCSVが出力されます",
      csvIdleBodyJson:
        "「対象のJSON」にある単一オブジェクト、オブジェクト配列、またはリストを含むオブジェクトをCSVに変換します。",
      csvIdleBodyCsv: "ヘッダー行付きのCSVを貼り付けるとJSONに変換します。",
      csvToJsonIdle: "上にCSVを貼り付けると、「対象のJSON」に変換されます。",
      csvApplied: "変換し、「対象のJSON」を更新しました。",
      csvUnsupported: "このJSON構造はCSVに変換できません。",
    },
    utilities: {
      sortAsc: "A → Z",
      sortDesc: "Z → A",
      sortIdleTitle: "並び替えの準備完了",
      sortIdleBody: "A→Z または Z→A を選ぶと、キーを並び替えた結果が出力に表示されます。",
      sortApplied: "キーを並び替えました。下の出力をご確認ください。",
      removeOptions: "削除する空要素の種類",
      removeNull: "null",
      removeEmptyString: '""',
      removeEmptyArray: "[]",
      removeEmptyObject: "{}",
      removeNullLabel: "null",
      removeEmptyStringLabel: "空文字",
      removeEmptyArrayLabel: "空配列",
      removeEmptyObjectLabel: "空オブジェクト",
      removePreserveHint: "false と 0 は削除されずに残ります。",
      removeIdleTitle: "ここにクリーンアップ後のJSONが表示されます",
      removeIdleBody: "削除したい種類を選んで実行してください。",
      nestedLabel: "ネスト構造",
      flatLabel: "フラット構造",
      flattenHint: "ネストしたオブジェクトをドット区切りのキーに変換します（例：address.city、skills.0）。",
      flattenUse:
        "スプレッドシートへの出力や .env の作成、検索インデックス化、フラットなキー・バリューしか受け付けないAPIとの連携に便利です。",
      flattenIdleTitle: "フラット化の準備完了",
      flattenIdleBody: "ネストされたキーが出力上でドット区切りのパスに変換されます。",
      flattenApplied: "フラット化しました。下の出力をご確認ください。",
      unflattenHint: "ドット区切りのパスをネストしたオブジェクトに戻し、数字のセグメントは配列に変換します。",
      unflattenUse:
        "user.name や skills.0 のようなフラットなキーを元のネストしたJSONに戻したいときに役立ちます。",
      unflattenIdleTitle: "ここに復元されたネストJSONが表示されます",
      unflattenIdleBody: "ドット区切りのパスを含むオブジェクトを貼り付けるとネストに戻ります。",
      escapeIdleTitle: "ここにエスケープ済み文字列が表示されます",
      escapeIdleBody: "文字列リテラルなどに埋め込めるよう、JSONがエスケープされます。",
      escapeHint:
        "JSONを1行のエスケープ済み文字列に変換します。引用符や改行が " や 
 になるため、他の文字列に安全に埋め込めます。",
      escapeUse:
        "コードや環境変数、ログなどにJSONを埋め込む際、外側の引用符が壊れるのを防ぎたいときに便利です。",
      unescapeIdleTitle: "ここにアンエスケープ後のJSONが表示されます",
      unescapeIdleBody: "エスケープされたJSON文字列を貼り付けると元のJSONに戻ります。",
      repairHint:
        "壊れたJSONや途切れたJSON、コメント入り、編集途中のJSONを複数ステップで自動修復します。",
      repairUse:
        "引用符・カンマ・括弧の補完や、コメント・コードフェンスの除去、Python/JSリテラル、JSONP、MongoDB型、NDJSON、途中切れ、編集中ゴミの整理に対応しています。",
      repairAlreadyValid: "すでに有効なJSONのため、整形のみ行いました。",
      repairFormatted: "整形しました。",
      repairReady: "自動修復できます。",
      repairApplied: "修復しました。",
      repairAppliedToSource: "「対象のJSON」に反映しました。",
      repairFailedTitle: "完全に修復できませんでした",
      repairFailedAt: "{message}（{line}行目・{column}列目）",
      repairPreview: "修復プレビュー",
      repairFixes: {
        "trailing-commas": "末尾カンマ",
        "single-quotes": "シングルクォーテーション",
        "smart-quotes": "スマートクォーテーション",
        "unquoted-keys": "引用符なしのキー",
        "missing-commas": "カンマ抜け",
        "missing-brackets": "括弧抜け",
        comments: "コメント",
        "code-fence": "コードフェンス",
        "python-literals": "Pythonリテラル",
        "js-undefined": "undefined → null",
        jsonp: "JSONPラッパー",
        "escaped-string": "エスケープ済みJSON文字列",
        mongodb: "MongoDB型",
        ndjson: "NDJSON → 配列",
        ellipsis: "省略記号（…）",
        "string-concat": "文字列連結",
        whitespace: "空白・改行",
        truncated: "途中切れ / 未完",
        "mid-edit-junk": "編集途中の不要文字",
      },
      repairIdleTitle: "ここに修復後のJSONが表示されます",
      repairIdleBody:
        "「対象のJSON」に不完全なテキストやJSON風の記述を貼り付けると、修復結果が出力に表示されます。",
      fromSchemaHint:
        "type、properties、required、items、enum、default をもとにJSON SchemaからサンプルJSONを生成します。",
      fromSchemaIdleTitle: "ここに生成されたサンプルJSONが表示されます",
      fromSchemaIdleBody: "下にJSON Schemaを貼り付けるとサンプルを生成します。",
      extractHint:
        "リーフパスと値のペアを出力します（例：{ path: "address.city", value: "東京都" }）。",
      extractIdleTitle: "ここに抽出されたキーと値が表示されます",
      extractIdleBody: "上でフィールドを選ぶと、パスと値のペアを抽出します。",
      extractKeysHint: "ネストしたキーをドット区切りのパスで一覧表示します（配列インデックスは .0 形式）。",
      extractKeysIdleTitle: "ここに抽出されたキー一覧が表示されます",
      extractKeysIdleBody: "JSONを貼り付けるとすべてのキーを抽出します。",
      extractValuesHint: "プリミティブ値や null などの末端（リーフ）の値をすべて集めます。",
      extractValuesIdleTitle: "ここに抽出された値一覧が表示されます",
      extractValuesIdleBody: "JSONを貼り付けるとすべての値を抽出します。",
      fieldsLabel: "「対象のJSON」内のフィールド",
      fieldsClickHint:
        "パスをクリックするだけで選択できます。ネストされた階層はドット区切りで表されます。",
      fieldsSelectAll: "すべて選択",
      fieldsClear: "選択解除",
      fieldsEmpty: "このJSONには選択できるフィールドがありません。",
      pickHint: "選択したフィールドだけを残します。下のリストをクリックして選んでください。",
      pickIdleTitle: "ここに結果が表示されます",
      pickIdleBody: "",
      omitHint: "選択したフィールドを取り除きます。下のリストをクリックして選んでください。",
      omitIdleTitle: "ここに結果が表示されます",
      omitIdleBody: "",
      compareHint: "2つのJSONドキュメントを並べて、値の違いは無視し構造だけを比較します。",
      compareUse:
        "Aにないキーは赤、Bで増えたキーは緑、両方で型が異なるキーはアンバー（琥珀色）で表示されます。",
      compareBack: "Workbenchに戻る",
      compareIdleTitle: "2つのJSONドキュメントを入力してください",
      compareIdleBody: "左右両方にJSONを入力すると構造を比較できます。",
      compareIdentical: "構造は一致しています。キーとデータ型が同じです。",
      compareMissing: "不足しているキー（Aのみに存在）",
      compareExtra: "追加されたキー（Bのみに存在）",
      compareType: "型の不一致",
    },
    empty: {
      formatTitle: "ここに整形されたJSONが表示されます",
      formatBody: "左側にJSONを貼り付けて「整形する」を押してください。",
    },
    soon: {
      badge: "近日公開",
      title: "{tool} は近日公開予定です",
      body: "このツールはWorkbenchの全体プレビューに含まれており、今後のアップデートで提供予定です。",
    },
    tools: {
      format: "整形",
      minify: "圧縮",
      validate: "検証",
      tree: "ツリー",
      search: "検索",
      diff: "Diff",
      jsonpath: "JSONPath",
      convert: "変換",
      toTypescript: "TypeScript",
      toZod: "Zod",
      toSchema: "JSON Schema",
      yaml: "YAML",
      csv: "CSV",
      sortKeys: "キー並び替え",
      removeEmpty: "空要素削除",
      flatten: "フラット化",
      unflatten: "ネスト復元",
      escape: "エスケープ",
      unescape: "アンエスケープ",
      repair: "修復",
      extract: "キー・値抽出",
      extractKeys: "キー抽出",
      extractValues: "値抽出",
      pick: "キー選択",
      omit: "キー除外",
      compareStructure: "構造比較",
    },
  },
  generator: {
    title: "ダミーデータ生成",
    subtitle: "フロントエンド開発向けのリアルなテストデータを素早く作成できます。",
    chooseType: "データ種別",
    searchPlaceholder: "データ種別を検索…",
    noTopics: "一致するデータ種別がありません。",
    fieldsLegend: "フィールド",
    moreFields: "フィールドをさらに表示",
    lessFields: "オプションフィールドを隠す",
    optionalFields: "オプションフィールド",
    records: "件数",
    customQty: "カスタム",
    country: "国・地域",
    countrySearch: "国・地域を検索…",
    selectPlaceholder: "データ種別を選択…",
    outputMode: "出力モード",
    modePayload: "POSTボディ",
    modeApi: "APIレコード",
    modePayloadHint: "idやタイムスタンプを含まないため、新規作成APIのPOSTボディにそのまま使えます。",
    modeApiHint: "idやcreatedAt、updatedAtを含むため、保存済みのAPIレコードに近い形になります。",
    jsonType: "JSON",
    viewJson: "JSON",
    viewType: "TS",
    generate: "{n}件を生成",
    generating: "{n}件を生成中…",
    generateAgain: "再生成",
    refresh: "もう一度生成",
    generated: "{n}件を生成しました",
    download: "ダウンロード",
    createApi: "APIを作成",
    createSuccess: "一時APIを作成しました。",
    createBlockedArray:
      "一時APIは最大500件まで作成できます。件数を減らしてからお試しください。",
    createBlockedSize:
      "JSONのサイズが一時APIの上限（64 KB）を超えています。件数やフィールドを減らしてください。",
    openTemporary: "「一時API」で管理する",
    emptyTitle: "データ種別を選んでください",
    emptyBody: "上からデータ種別を選ぶと、リアルなテストデータを生成できます。",
    duration1h: "1時間",
    duration6h: "6時間",
    duration12h: "12時間",
    duration24h: "24時間",
    countries: {
      all: "すべての国・地域",
      IR: "イラン",
      DE: "ドイツ",
      US: "アメリカ",
      GB: "イギリス",
      FR: "フランス",
      NL: "オランダ",
      JP: "日本",
      CA: "カナダ",
    },
    categories: {
      people: "人物",
      ecommerce: "EC・コマース",
      content: "コンテンツ",
      media: "メディア",
      business: "ビジネス",
      location: "ロケーション",
    },
    fields: {
      id: "id",
      name: "名前",
      username: "ユーザー名",
      email: "メールアドレス",
      avatar: "アバター",
      phone: "電話番号",
      company: "会社名",
      location: "所在地",
      age: "年齢",
      role: "権限・ロール",
      jobTitle: "役職",
      department: "部署",
      bio: "自己紹介",
      website: "Webサイト",
      createdAt: "作成日時",
      updatedAt: "更新日時",
      hiredAt: "入社日",
      ordersCount: "注文数",
      totalSpent: "累計購入額",
      postsCount: "投稿数",
      price: "価格",
      image: "画像",
      category: "カテゴリー",
      description: "説明",
      brand: "ブランド",
      stock: "在庫数",
      rating: "評価",
      sku: "SKU",
      colors: "カラー",
      orderId: "注文ID",
      customer: "顧客",
      items: "注文商品",
      total: "合計金額",
      status: "ステータス",
      orderDate: "注文日",
      paymentStatus: "決済状況",
      shippingAddress: "配送先住所",
      user: "ユーザー",
      comment: "コメント",
      post: "投稿",
      date: "日付",
      product: "商品",
      title: "タイトル",
      verified: "認証済み",
      helpful: "参考になった数",
      slug: "スラッグ",
      parentCategory: "親カテゴリー",
      productCount: "商品数",
      quantity: "数量",
      discount: "割引",
      code: "コード",
      type: "種別",
      expiresAt: "有効期限",
      minimumOrder: "最低注文金額",
      usageLimit: "利用上限",
      active: "有効",
      amount: "金額",
      currency: "通貨",
      paymentMethod: "決済方法",
      transactionId: "取引ID",
      order: "注文",
      carrier: "配送業者",
      trackingNumber: "追跡番号",
      estimatedDelivery: "お届け予定日",
      body: "本文",
      author: "作成者",
      tags: "タグ",
      publishedAt: "公開日時",
      likes: "いいね数",
      views: "閲覧数",
      replies: "返信数",
      attachments: "添付ファイル",
      actionUrl: "遷移先URL",
      sender: "送信者",
      receiver: "受信者",
      message: "メッセージ",
      read: "既読",
      artist: "アーティスト",
      cover: "カバー画像",
      year: "年",
      genre: "ジャンル",
      tracks: "トラック数",
      album: "アルバム",
      duration: "再生時間",
      poster: "ポスター",
      director: "監督",
      language: "言語",
      plays: "再生回数",
      label: "レーベル",
      pages: "ページ数",
      isbn: "ISBN",
      instructor: "講師",
      level: "レベル",
      lessons: "レッスン数",
      students: "受講生数",
      employees: "従業員数",
      logo: "ロゴ",
      industry: "業界",
      salary: "給与",
      experience: "経験年数",
      remote: "リモート可",
      founded: "設立年",
      postedAt: "掲載日",
      capacity: "定員",
      capital: "首都",
      flag: "国旗",
      region: "地域",
      population: "人口",
      street: "番地・通り",
      postalCode: "郵便番号",
      latitude: "緯度",
      longitude: "経度",
      country: "国",
      city: "市区町村",
      notes: "メモ",
      team: "チーム",
      joinedAt: "参加日",
      skills: "スキル",
      specialty: "専門分野",
      hospital: "病院名",
      licenseNumber: "免許番号",
      yearsExperience: "経験年数",
      bloodType: "血液型",
      diagnosis: "診断名",
      doctor: "担当医",
      admittedAt: "入院日",
      vehicleType: "車種",
      plateNumber: "ナンバープレート",
      tripsCount: "乗車回数",
      roomNumber: "部屋番号",
      checkIn: "チェックイン",
      checkOut: "チェックアウト",
      nights: "泊数",
      followers: "フォロワー数",
      following: "フォロー中",
      grade: "学年",
      school: "学校名",
      gpa: "GPA",
      major: "専攻",
      enrollmentYear: "入学年",
      subject: "教科",
      classesCount: "担当クラス数",
      invoiceNumber: "請求書番号",
      issueDate: "発行日",
      dueDate: "支払期限",
      tax: "税金",
      itemsCount: "明細数",
      target: "対象",
      targetType: "対象種別",
      reaction: "リアクション",
      color: "カラー",
      thumbnail: "サムネイル",
      channel: "チャンネル",
      url: "URL",
      width: "幅",
      height: "高さ",
      alt: "代替テキスト",
      photographer: "撮影者",
      host: "ホスト",
      episodes: "エピソード数",
      subscribers: "登録者数",
      owner: "オーナー",
      public: "公開",
      progress: "進捗",
      teamSize: "チーム人数",
      budget: "予算",
      startDate: "開始日",
      membersCount: "メンバー数",
      focus: "重点領域",
      countriesCount: "国数",
      areaKm2: "面積（km²）",
      timezone: "タイムゾーン",
      terminals: "ターミナル",
      altitude: "標高",
      accuracy: "精度",
    },
    topics: {
      users: {
        name: "ユーザー",
        description: "アプリや管理ダッシュボード向けのユーザープロフィール",
        preview: {
          line1: "佐藤 蓮",
          line2: "@ren_sato · ren@mail.test",
          line3: "東京都",
        },
      },
      customers: {
        name: "顧客",
        description: "購入者やアカウントの連絡先データ",
        preview: {
          line1: "鈴木 陽葵",
          line2: "himari@demo.dev",
          line3: "090-1234-5678",
        },
      },
      employees: {
        name: "社員",
        description: "役職や部署情報を含むチームメンバー",
        preview: {
          line1: "高橋 湊",
          line2: "フロントエンドエンジニア",
          line3: "開発部 · Acme",
        },
      },
      authors: {
        name: "著者",
        description: "記事の執筆者やクリエイター",
        preview: {
          line1: "田中 結衣",
          line2: "プロダクトデザインとUXを執筆。",
        },
      },
      contacts: {
        name: "連絡先",
        description: "CRM向けの担当者情報と所属企業",
        preview: {
          line1: "伊藤 蒼",
          line2: "aoi@acme.test · Acme",
        },
      },
      "team-members": {
        name: "チームメンバー",
        description: "プロダクトや開発チームのメンバー一覧",
        preview: {
          line1: "渡辺 芽依",
          line2: "テックリード · 開発部",
        },
      },
      doctors: {
        name: "医師",
        description: "診療科と所属病院を含む医療スタッフ",
        preview: {
          line1: "山本 翔太 医師",
          line2: "循環器内科 · 桜木総合病院",
        },
      },
      patients: {
        name: "患者",
        description: "診断名や血液型を含む診療レコード",
        preview: {
          line1: "中村 凛",
          line2: "A型 · 高血圧",
        },
      },
      drivers: {
        name: "ドライバー",
        description: "車種や評価を含む配車・輸送ドライバー",
        preview: {
          line1: "小林 悠真",
          line2: "セダン · ★ 4.8",
        },
      },
      guests: {
        name: "宿泊客",
        description: "部屋番号や滞在状況を含むホテルゲスト",
        preview: {
          line1: "加藤 美咲",
          line2: "412号室 · 滞在中",
        },
      },
      profiles: {
        name: "プロフィール",
        description: "フォロワー数や自己紹介付きのSNSプロフィール",
        preview: {
          line1: "吉田 朝陽",
          line2: "@asahi_y · フォロワー 1.2万人",
        },
      },
      "girl-students": {
        name: "女子生徒",
        description: "学年や学校名を含む女子生徒データ",
        preview: {
          line1: "山田 紬",
          line2: "高校2年 · 緑ヶ丘高校",
        },
      },
      "boy-students": {
        name: "男子生徒",
        description: "学年や学校名を含む男子生徒データ",
        preview: {
          line1: "佐々木 律",
          line2: "中学3年 · 青葉中学校",
        },
      },
      teachers: {
        name: "教員・先生",
        description: "担当教科と学校名を含む教員データ",
        preview: {
          line1: "松本 彩花",
          line2: "数学 · 第一高校",
        },
      },
      products: {
        name: "商品",
        description: "ECサイト向けの商品情報と価格",
        preview: {
          line1: "ワイヤレスノイズキャンセリングヘッドホン",
          line2: "¥14,800 · ガジェット",
          line3: "★★★★☆",
        },
      },
      orders: {
        name: "注文",
        description: "注文明細とステータスを含む購入オーダー",
        preview: {
          line1: "注文 #10482",
          line2: "3点 · ¥24,600",
          line3: "配達完了",
        },
      },
      reviews: {
        name: "レビュー",
        description: "星評価と商品の感想コメント",
        preview: {
          line1: "★★★★★ とても使いやすい",
          line2: "作りがしっかりしていて満足です。",
        },
      },
      categories: {
        name: "カテゴリー",
        description: "商品カタログのカテゴリー一覧",
        preview: { line1: "ガジェット", line2: "gadgets" },
      },
      "cart-items": {
        name: "カート内商品",
        description: "ショッピングカートに追加されたアイテム",
        preview: { line1: "スマートウォッチ", line2: "2 × ¥19,800 · ¥39,600" },
      },
      coupons: {
        name: "クーポン",
        description: "割引コードと利用条件",
        preview: { line1: "WELCOME10", line2: "10%オフ · 2026-12-01まで" },
      },
      payments: {
        name: "決済履歴",
        description: "支払い明細と決済手段",
        preview: { line1: "¥6,800 JPY", line2: "クレジットカード · 支払い済み" },
      },
      shipments: {
        name: "配送・出荷",
        description: "配送業者と配送ステータス",
        preview: { line1: "ORD-10482 · ヤマト運輸", line2: "輸送中" },
      },
      invoices: {
        name: "請求書",
        description: "金額と支払期限を含む請求データ",
        preview: { line1: "INV-10482", line2: "¥128,000 · 支払い済み" },
      },
      brands: {
        name: "ブランド",
        description: "ロゴや取り扱い商品数を含むブランド一覧",
        preview: { line1: "Acme", line2: "acme · 128商品" },
      },
      posts: {
        name: "投稿",
        description: "ブログ記事やタイムライン投稿",
        preview: { line1: "心地よいUIをつくる設計", line2: "著者：田中 結衣" },
      },
      comments: {
        name: "コメント",
        description: "記事や商品へのコメントと返信",
        preview: {
          line1: "とても参考になりました！",
          line2: "たなか · 12いいね",
        },
      },
      messages: {
        name: "メッセージ",
        description: "チャットやダイレクトメッセージ",
        preview: {
          line1: "最新のドラフトを確認できますか？",
          line2: "高橋 湊 → 鈴木 陽葵",
        },
      },
      notifications: {
        name: "通知",
        description: "アプリ内の通知メッセージと概要",
        preview: { line1: "新しいコメントが届きました", line2: "お知らせ · 2時間前" },
      },
      tags: {
        name: "タグ",
        description: "スラッグや記事数付きのタグ一覧",
        preview: { line1: "typescript", line2: "142件の投稿" },
      },
      "content-categories": {
        name: "記事カテゴリー",
        description: "記事を整理するためのカテゴリー",
        preview: { line1: "チュートリアル", line2: "tutorials · 86件の投稿" },
      },
      likes: {
        name: "いいね",
        description: "投稿やコメントへのいいね履歴",
        preview: { line1: "吉田 朝陽がいいねしました", line2: "投稿 · いいね" },
      },
      albums: {
        name: "アルバム",
        description: "ジャケット画像付きの音楽アルバム",
        preview: {
          line1: "Random Access Memories",
          line2: "Daft Punk",
          line3: "2013 · 13曲",
        },
      },
      songs: {
        name: "楽曲",
        description: "再生時間やアーティストを含む楽曲データ",
        preview: { line1: "ミッドナイト・クルーズ", line2: "3:42 · エレクトロニック" },
      },
      movies: {
        name: "映画",
        description: "ポスター画像や評価を含む映画データ",
        preview: { line1: "レイトナイト・エクスプレス", line2: "2021 · ★ 8.2" },
      },
      books: {
        name: "書籍",
        description: "著者や表紙画像を含む書籍データ",
        preview: { line1: "インターフェース設計の工夫", line2: "田中 結衣 · 2019" },
      },
      videos: {
        name: "動画",
        description: "再生時間や再生回数を含む動画データ",
        preview: {
          line1: "10分で作るダッシュボードUI",
          line2: "12:40 · 8.4万回再生",
        },
      },
      images: {
        name: "画像",
        description: "解像度やタグ付きのアセット画像",
        preview: { line1: "朝焼けの街並み", line2: "1280×720" },
      },
      podcasts: {
        name: "ポッドキャスト",
        description: "ホストやエピソード数を含む番組データ",
        preview: { line1: "コードとコーヒー", line2: "48エピソード · テクノロジー" },
      },
      playlists: {
        name: "プレイリスト",
        description: "作成者やジャンルを含むプレイリスト",
        preview: { line1: "集中ワークBGM", line2: "32曲 · エレクトロニック" },
      },
      companies: {
        name: "企業",
        description: "企業情報と所属する業界",
        preview: { line1: "Acme株式会社", line2: "IT・ソフトウェア · 東京都" },
      },
      jobs: {
        name: "求人",
        description: "勤務地や雇用形態を含む求人情報",
        preview: {
          line1: "フロントエンドエンジニア",
          line2: "Google · 東京都 · 正社員",
        },
      },
      courses: {
        name: "講座・コース",
        description: "学習カリキュラムと講師情報",
        preview: { line1: "React実践入門", line2: "中級 · 12時間" },
      },
      events: {
        name: "イベント",
        description: "ミートアップやカンファレンスなどのイベント",
        preview: { line1: "フロントエンド勉強会", line2: "東京都 · ワークショップ" },
      },
      projects: {
        name: "プロジェクト",
        description: "進捗率や予算を含むプロジェクト一覧",
        preview: { line1: "分析ダッシュボード刷新", line2: "進行中 · 72%" },
      },
      teams: {
        name: "チーム",
        description: "リーダーやメンバー数を含む社内チーム",
        preview: { line1: "プロダクトチーム", line2: "8名 · 開発部" },
      },
      continents: {
        name: "大陸",
        description: "各大陸のコードと統計データ",
        preview: { line1: "アジア", line2: "AS · 48か国" },
      },
      countries: {
        name: "国",
        description: "国名、国コード、国旗データ",
        preview: { line1: "日本", line2: "JP · 東京都" },
      },
      cities: {
        name: "市区町村・都市",
        description: "都道府県や国に紐づく都市データ",
        preview: { line1: "大阪市", line2: "日本 · 大阪府" },
      },
      addresses: {
        name: "住所",
        description: "配送先やオフィス向けの住所データ",
        preview: {
          line1: "渋谷区道玄坂2-21-1",
          line2: "〒150-0043 東京都",
        },
      },
      regions: {
        name: "地域・都道府県",
        description: "地方や都道府県などの地域区分",
        preview: { line1: "神奈川県", line2: "日本 · 横浜市" },
      },
      neighborhoods: {
        name: "エリア・街区",
        description: "都市内のエリアや街区情報",
        preview: { line1: "中目黒", line2: "東京都 · 153-0051" },
      },
      airports: {
        name: "空港",
        description: "空港コードや所在都市を含む空港データ",
        preview: { line1: "東京国際空港（羽田）", line2: "HND · 日本" },
      },
      coordinates: {
        name: "座標",
        description: "緯度・経度と地点の説明",
        preview: {
          line1: "35.681236, 139.767125",
          line2: "東京都 · 日本",
        },
      },
    },
    errors: {
      pickTopic: "データ種別を選択してください。",
      INVALID_TOPIC: "不明なデータ種別です。",
      INVALID_FIELDS: "フィールドを1つ以上選択してください。",
      INVALID_QUANTITY: "件数は1〜1000の範囲で指定してください。",
      INVALID_COUNTRY: "無効な国・地域です。",
      GENERATE_FAILED: "データの生成に失敗しました。時間をおいて再度お試しください。",
      DOWNLOAD_FAILED: "ダウンロードに失敗しました。時間をおいて再度お試しください。",
      CREATE_FAILED: "一時APIの作成に失敗しました。",
      LIMIT_REACHED: "一時APIの上限（5件）に達しています。どれか1つを削除してください。",
      RATE_LIMITED: "短時間に多くのリクエストが送信されました。しばらくしてからお試しください。",
    },
  },
  preview: {
    docs: "ドキュメント",
    playground: "Playground",
    blurb: "このAPIの動作を気軽に試せるシンプルな画面です。",
    blurbFaHint: "",
    backToResource: "{name} に戻る",
    search: "検索",
    create: "新規作成",
    edit: "編集",
    delete: "削除",
    save: "保存",
    saving: "保存中…",
    deleting: "削除中…",
    cancel: "キャンセル",
    fillSample: "サンプルを入力",
    noRecords: "データがありません",
    loading: "読み込み中…",
    confirmDelete: "削除しますか？",
    confirmDeleteBody: "この操作は元に戻せません。",
    networkError: "ネットワークエラー",
    authDemoPassword: "初期ユーザーのデモパスワードはすべて同じです：",
    username: "ユーザー名",
    password: "パスワード",
    login: "ログイン",
    loginSuccess: "ログインしました。",
    logout: "ログアウト",
    getMe: "GET /me",
    token: "トークン",
    user: "ユーザー",
    loginFirst: "トークンを取得するには先にログインしてください",
    createdAt: "作成日時",
    fieldLabels: {
      name: "名前",
      username: "ユーザー名",
      email: "メールアドレス",
      avatarUrl: "アバターURL",
      role: "ロール",
      city: "市区町村",
      country: "国",
      company: "会社名",
      title: "タイトル",
      body: "本文",
      published: "公開済み",
      userId: "ユーザーID",
      postId: "投稿ID",
      albumId: "アルバムID",
      url: "URL",
      thumbnailUrl: "サムネイルURL",
      completed: "完了",
      description: "説明",
      price: "価格",
      stock: "在庫数",
      category: "カテゴリー",
      imageUrl: "画像URL",
      message: "メッセージ",
      type: "種別",
      read: "既読",
      code: "コード",
      capital: "首都",
      region: "地域",
      population: "人口",
      currency: "通貨",
      flagUrl: "国旗URL",
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
      teaser: "開発中 — JSONの整形・比較・変換ツール",
      hint: "/json — ツールを選ぶと表示が切り替わります",
      badge: "開発中",
      summary:
        "JSON Workbench（開発中）は、ブラウザ上でJSONの整形や構造比較、検索、変換を行えるツールキットです。TypeScript、Zod、YAML、CSVや各種ユーティリティに対応しています。",
      details: [
        "/json でJSON Workbenchを開き、ツールを選ぶとすぐに切り替わります（?tool= でも指定可能）。",
        "基本操作：整形、ツリー、検索、JSONPath、構造比較。",
        "変換：TypeScript、Zod、JSON Schema、YAML、CSV。",
        "ユーティリティ：キー並び替え、空要素削除、フラット化、エスケープ、修復、キー選択／除外など。",
        "現在も開発中であり、今後もツールや改善を順次追加していきます。",
      ],
    },
    "2026-09-19-image-generator": {
      title: "画像ジェネレーター",
      teaser: "プレースホルダー画像URLをオンデマンド生成",
      hint: "/image-generator — SVGまたは写真を選んでURLをコピー",
      summary:
        "URL指定で使えるプレースホルダー画像を生成できます。MockDataのSVGやPicsumの写真に対応し、アバターや投稿画像、バナーなどのプリセットサイズも用意しています。",
      details: [
        "/image-generator からSVGまたは写真を選び、幅と高さを指定してURLをコピーできます。",
        "公開URLはデフォルトでランダム返却されます。SVGは /image/{w}/{h}、写真は ?type=real を指定します。",
        "任意の ?seed= パラメーターを渡すと、同じSVGカラーや同じ写真を固定できます。",
        "imgタグやCSS、画像フィールドなどにそのまま貼り付けて使えます。",
      ],
    },
    "2026-09-17-generator": {
      title: "ダミーデータ生成",
      teaser: "リアルなJSONを数秒で作成",
      hint: "/generator — 種別を選んで生成・コピー、または「APIを作成」",
      summary:
        "フロントエンド向けのリアルなJSONを素早く作成できます。データ種別やフィールド、件数を選んでコピーやダウンロード、一時APIとしての公開が可能です。",
      details: [
        "/generator から人物、EC、コンテンツ、メディア、ビジネス、ロケーションのデータを生成できます。",
        "POSTボディ形式とAPIレコード形式に対応しており、FAでは現地のペルシャ語データを使用します。",
        "ブラウザ上で1回あたり最大1,000件まで生成できます。「APIを作成」は一時APIの制限（500件 / 64 KB）に従います。",
        "画面を移動しても選択内容や生成結果は保持されます（フルリロードするとリセットされます）。",
      ],
    },
    "2026-09-16-temporary": {
      title: "一時API",
      teaser: "JSONを貼り付けて、使い捨てのREST URLを発行",
      hint: "/temporary — JSONを貼って公開REST URLを取得",
      summary:
        "任意のJSONを貼り付けるだけで一時的な公開REST URLを発行できます。サインアップ不要で、ブラウザごとに同時有効なAPIは最大5件まで作成できます。",
      details: [
        "/temporary から作成できます。有効期限（1時間、6時間、12時間、24時間）を選んで公開します。",
        "発行された /api/t/… のURLに対して、通常のエンドポイントと同じようにGET、POST、PATCH、DELETEを実行できます。",
        "ブラウザごとに同時有効なAPIは最大5件まで、1IPあたり1時間に最大20件まで作成できます。",
        "URLはパスワードと同じように保管してください。期限切れまではURLを知る誰もが読み取りと更新を行えます。",
      ],
    },
    "2026-09-15-preview": {
      title: "プレビュー画面",
      teaser: "各リソースのサンプルUIを用意",
      hint: "/preview/users — ブラウザ上でCRUDを操作",
      summary:
        "UsersやPosts、Authなどの各リソースに、実際のAPIとつながるシンプルな操作画面を用意しました。",
      details: [
        "各リソースのドキュメントページにある「プレビュー」から、実APIに連携した軽量UIを開けます。",
        "一覧表示や検索、ページネーション、作成、編集、削除を共有デモデータに反映しながら試せます。",
        "Authプレビューではログインフォーム（パスワードは password 固定）と、トークンを使った GET /me を試せます。",
        "必要に応じて、ヘッダーの言語スイッチャーからペルシャ語のサンプルデータを読み込めます。",
      ],
    },
    "2026-09-14-lang-fa": {
      title: "ペルシャ語データ（?lang=fa）",
      teaser: "ペルシャ語のサンプルデータセットに対応",
      hint: "/api/users?lang=fa — リクエストに lang=fa を付けてペルシャ語データを取得",
      summary:
        "任意のエンドポイントに ?lang=fa を付けると、現地のペルシャ語による名前やユーザー名、電話番号、サンプルテキストを取得できます。",
      details: [
        "デフォルトは英語のままで、CookieやAccept-Languageではなく lang=fa クエリパラメーターのみで切り替わります。",
        "FAレスポンスには Content-Language: fa と、表示用の Vazirmatn フォント情報が含まれます。",
        "一覧取得や詳細取得のほか、ペルシャ語のユーザー名を使ったログインにも対応しています。",
        "ヘッダーで فارسی を選ぶと、Playgroundでも lang=fa が自動的に付与されます。",
      ],
    },
    "2026-09-12-playground": {
      title: "Playground",
      teaser: "ブラウザから直接APIを呼び出し",
      hint: "/playground — リクエストを送信してJSONを確認",
      summary:
        "ブラウザから直接APIを呼び出し、ログインの成功・失敗を試しながら整形されたJSONレスポンスを確認できます。",
      details: [
        "リソースとアクションを選び、クエリやJSONボディを調整してリクエストを送信できます。",
        "Authログインでは「正常な認証情報 / 不正な認証情報」のボタンから200と401のレスポンスを手軽に比較できます。",
        "HTTPステータスコードや整形済みJSONのほか、コレクションではページネーション情報も表示されます。",
        "ページ移動中はリソースごとにリクエスト内容と直近のレスポンスが保持されます（リロードでリセット）。",
      ],
    },
    "2026-09-10-auth": {
      title: "モック認証（Mock Auth）",
      teaser: "ログインとBearerトークンに対応",
      hint: "/api/auth/login — パスワードは password 固定",
      summary:
        "/api/auth/login に初期ユーザーとパスワードをPOSTすると、/me の呼び出しに使えるBearerトークンを取得できます。",
      details: [
        "すべての初期ユーザーで共通のデモパスワード password を使用します。",
        "ログインに成功すると、モックのBearerトークンと user オブジェクト（id、name、username、email、role）が返ります。",
        "パスワードが誤っている場合やユーザーが見つからない場合は401と分かりやすいエラー構造を返します。",
        "GET /api/auth/me の Authorization: Bearer <token> ヘッダーにトークンを渡すと現在のユーザー情報を取得できます。",
      ],
    },
    "2026-09-08-resources": {
      title: "ライブRESTリソース",
      teaser: "UsersやPostsなど複数のリソースでCRUDに対応",
      hint: "/docs#resources — 利用可能なエンドポイント一覧を見る",
      summary:
        "Users、Posts、Comments、Albums、Photos、Todos、Products、Notifications、Countriesを提供し、完全なCRUDとページネーションに対応しています。",
      details: [
        "ページネーション付き一覧は { data, pagination } 形式で、page、limit、total、totalPages を含みます。",
        "検索や並び替え、絞り込み、遅延シミュレーション、指定エラーコードの返却などのクエリパラメーターに対応しています。",
        "本番環境の共有データベースは毎日リセットされるため、デモや動作確認には適していますが永続データ保存には向きません。",
        "/openapi.json から機械可読な仕様を取得でき、PostmanやSwagger、AIツールなどに読み込めます。",
      ],
    },
  },
  catalog: {
    auth: {
      title: "Auth",
      summary:
        "ユーザー名とパスワードによるモックログインエンドポイントです。認証成功時はBearerトークンを、失敗時は401を返します。",
    },
    users: {
      title: "Users",
      summary: "検索やロールでの絞り込み、ページネーションに対応したモックユーザーCRUD APIです。",
    },
    posts: {
      title: "Posts",
      summary: "ユーザーに紐づくブログ投稿リソースで、タグや公開状態に対応しています。",
    },
    comments: {
      title: "Comments",
      summary: "投稿に対するコメントリソースで、名前やメールアドレス、本文を含みます。",
    },
    albums: {
      title: "Albums",
      summary: "ユーザーに紐づくアルバムリソースです。写真データは albumId でアルバムと関連付けられます。",
    },
    photos: {
      title: "Photos",
      summary: "アルバム内の画像リソースで、url と thumbnailUrl を含みます。",
    },
    todos: {
      title: "Todos",
      summary: "ユーザーに紐づくシンプルなToDoアイテムで、完了状態を持ちます。",
    },
    products: {
      title: "Products",
      summary: "価格や在庫数、カテゴリー、imageUrl を含む商品カタログリソースです。",
    },
    notifications: {
      title: "Notifications",
      summary: "通知種別や既読状態を含むユーザー向け通知リソースです。",
    },
    countries: {
      title: "Countries",
      summary: "ISOコードや地域、人口、国旗などの情報を持つ国データリソースです。",
    },
  },
};

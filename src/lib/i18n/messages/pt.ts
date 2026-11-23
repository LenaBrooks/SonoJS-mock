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

export const pt: Messages = {
  common: {
    home: "Início",
    docs: "Documentação",
    playground: "Playground",
    contact: "Contato",
    preview: "Preview",
    search: "Buscar",
    loading: "Carregando…",
    save: "Salvar",
    saving: "Salvando…",
    cancel: "Cancelar",
    create: "Criar",
    edit: "Editar",
    delete: "Excluir",
    searchPlaceholder: "Buscar APIs…",
    noResults: "Nenhum resultado",
    new: "Novo",
    inDevelopment: "Em desenvolvimento",
    actions: "Ações",
    copy: "Copiar",
    copied: "Copiado",
    live: "No ar",
    open: "Abrir",
    tryIt: "Testar",
    learnMore: "Saiba mais",
    back: "Voltar",
    close: "Fechar",
    yes: "Sim",
    no: "Não",
    name: "Nome",
    email: "E-mail",
    message: "Mensagem",
    send: "Enviar",
    sending: "Enviando…",
    networkError: "Erro de rede",
    temporary: "API temporária",
    temporaryBadge: "Instantânea",
    generator: "Gerador",
    imageGenerator: "Imagens",
    jsonWorkbench: "Área de trabalho JSON",
  },
  header: {
    primaryNav: "Navegação principal",
    whatsNew: "Novidades",
    whatsNewTitle: "Novidades",
    whatsNewSubtitle: "Últimas atualizações e recursos",
    latest: "Mais recente",
    contact: "Sobre",
    menu: "Menu",
    openMenu: "Abrir menu",
    appearance: "Aparência",
    lightMode: "Mudar para modo claro",
    darkMode: "Mudar para modo escuro",
    light: "Claro",
    dark: "Escuro",
    apiLangGroup: "Idioma",
    english: "English",
    persian: "فارسی",
    github: "GitHub",
    githubStars: "GitHub — dê uma estrela ao projeto",
  },
  home: {
    tagline:
      "APIs REST fictícias e gratuitas com JSON real. Prototipe interfaces, teste autenticação e chame endpoints reais — sem configurar backend.",
    taglineNote: "",
    resourcesTitle: "Recursos",
    resourcesBlurb:
      "Dez APIs REST ativas com documentação e exemplos. Dados de demonstração compartilhados em produção.",
    searchLabel: "Buscar APIs e endpoints",
    searchPlaceholder: "Buscar usuários, posts, auth…",
    temporaryCtaTitle: "API temporária",
    temporaryCtaBody:
      "Cole seu JSON e crie uma API de curta duração — ou publique direto pelo Gerador de Dados Fictícios. Trate o link como uma senha — até 5 ativas por vez no navegador.",
    temporaryCtaLink: "Criar uma API temporária",
  },
  notFound: {
    title: "Página não encontrada",
    body: "Essa URL não faz parte do MockData. Volte para o início ou confira a documentação.",
    home: "Início",
    docs: "Documentação",
  },
  blog: {
    title: "Blog",
    description:
      "Guias e notas sobre dados fictícios, JSON, APIs e fluxos de frontend — escritos para quem constrói com o MockData.",
    all: "Todos",
    emptyTitle: "Nenhum post",
    emptyBody: "Os artigos publicados aparecerão aqui. Volte em breve.",
    emptyCategoryTitle: "Nenhum post",
    emptyCategoryBody: "Tente outra categoria ou veja todos os posts.",
    readingTime: "{n} min de leitura",
    previousPage: "Anterior",
    nextPage: "Próxima",
    pageStatus: "Página {page} de {total}",
    paginationNav: "Paginação",
    categoriesNav: "Categorias",
    backToBlog: "Blog",
    previousArticle: "Anterior",
    nextArticle: "Próximo",
    relatedArticles: "Artigos relacionados",
    categories: {
      news: "Novidades",
      "mock-data": "Dados fictícios",
      json: "JSON",
      api: "API",
      frontend: "Frontend",
    },
  },
  contact: {
    title: "Fale conosco",
    intro:
      "Dúvidas, feedbacks ou ideias — mande uma mensagem curta e ela vai direto para a nossa caixa de entrada. Você também pode enviar um e-mail para",
    name: "Nome",
    email: "E-mail",
    topic: "Assunto",
    message: "Mensagem",
    send: "Enviar mensagem",
    sending: "Enviando…",
    success: "Mensagem enviada. Valeu — entraremos em contato.",
    chooseTopic: "Escolha o que você precisa.",
    pickTopic: "Do que você precisa?",
    topics: {
      question: "Tenho uma dúvida",
      bug: "Reportar um bug",
      feature: "Sugerir um recurso",
      other: "Outro assunto",
    },
  },
  docs: {
    title: "Documentação",
    navLabel: "Docs",
    intro:
      "O MockData entrega recursos REST fictícios em JSON. Use os recursos públicos à vontade, teste login no Auth, faça chamadas ao vivo no Playground, gere massas de dados em /generator, pegue imagens de placeholder em /image-generator, abra o JSON Workbench em /json ou publique sua própria API temporária. Em produção, os recursos do catálogo usam um único banco compartilhado — veja Dados compartilhados.",
    toc: {
      intro: "Introdução",
      whatsNew: "Novidades",
      temporary: "API temporária",
      generator: "Gerador de Dados Fictícios",
      imageGenerator: "Gerador de Imagens",
      jsonWorkbench: "Área de trabalho JSON",
      sharedData: "Dados compartilhados",
      language: "Idioma",
      resources: "Recursos",
      openapi: "OpenAPI",
      requests: "Requisições",
      errors: "Erros",
      rateLimit: "Limites de requisição",
      reset: "Resetar dados de demo",
    },
    whatsNewTitle: "Novidades",
    whatsNewBlurb:
      "Recursos lançados para devs, do mais novo ao mais antigo. Clique em um card para expandir os detalhes. A mesma lista fica no ícone de sino no topo.",
    temporaryTitle: "API temporária",
    temporaryBody:
      "Precisa de um endpoint REST descartável com o seu próprio JSON? APIs temporárias ficam separadas do catálogo compartilhado. Cole o JSON, escolha por quanto tempo ela deve ficar ativa e receba uma URL pública em /api/t/… Também dá para publicar direto do Gerador de Dados Fictícios via Criar API.",
    temporaryBullets: [
      "Sem cadastro — crie em /temporary no navegador (ou com Criar API em /generator).",
      "Duração disponível: 1, 6, 12 ou 24 horas (padrão de 12h).",
      "Chame a URL pública /api/t/… com GET, POST, PATCH e DELETE como uma coleção ou documento comum.",
      "Trate o link como uma senha: quem tiver o link pode ler e alterar os dados até expirar.",
      "Quando uma API expira, as requisições retornam HTTP 410.",
    ],
    temporaryLimitsTitle: "Limites da API temporária",
    temporaryLimitsBullets: [
      "Até 5 APIs temporárias ativas por vez no navegador.",
      "Até 20 criações por IP a cada hora deslizante (HTTP 429 se passar do limite).",
      "Payload JSON de no máximo 64 KB.",
      "Profundidade máxima de aninhamento 8; arrays com até 500 itens; objetos com até 200 chaves.",
      "O mesmo limite global de /api continua valendo (cerca de 60 requisições por IP por minuto).",
    ],
    generatorTitle: "Gerador de Dados Fictícios",
    generatorBody:
      "Gere JSON realista para o seu front sem escrever mocks na mão. Roda 100% no navegador. Escolha o tipo de dado, os campos e a quantidade, depois copie, baixe ou publique via API temporária.",
    generatorBullets: [
      "Abra /generator — tipos de pessoas, e-commerce, conteúdo, mídia, negócios e localização.",
      "Escolha entre corpo de POST (sem id/timestamps) ou formato de registro de API (id + createdAt + updatedAt).",
      "O idioma FA usa pacotes locais em persa; EN usa pacotes em inglês de vários países.",
      "Gere até 1.000 registros; Criar API segue os limites de Temporária (500 itens / 64 KB).",
      "Seleções e resultados continuam durante a navegação na aplicação (são limpos ao recarregar a página inteira).",
    ],
    imageGeneratorTitle: "Gerador de Imagens",
    imageGeneratorBody:
      "Precisa de uma URL de imagem de placeholder para o front? Use placeholders SVG do MockData ou fotos reais aleatórias (via redirecionamento do Picsum). Defina largura e altura, copie o link e jogue em img, CSS ou qualquer campo de imagem.",
    imageGeneratorBullets: [
      "Abra /image-generator — placeholders SVG ou fotos reais.",
      "Formato da URL pública: /image/{width}/{height} para SVG; adicione ?type=real para fotos.",
      "Aleatória por padrão. O parâmetro opcional ?seed= mantém sempre as mesmas cores do SVG ou a mesma foto real.",
      "Tamanhos prontos para avatar, miniatura, perfil, post, capa, banner e story.",
    ],
    jsonWorkbenchTitle: "JSON Workbench",
    jsonWorkbenchBody:
      "JSON Workbench (em desenvolvimento): um espaço único no navegador para o dia a dia com JSON enquanto você monta interfaces — formate, compare, busque e converta sem sair do MockData.",
    jsonWorkbenchBullets: [
      "Abra o JSON Workbench em /json e escolha uma ferramenta — o ambiente atualiza na hora (compartilhe com ?tool=).",
      "Essenciais: Formatar, Visualização em Árvore, Buscar, JSONPath e Comparar Estrutura.",
      "Transformar: TypeScript, Zod, JSON Schema, YAML e CSV.",
      "Utilitários: ordenar chaves, remover valores vazios, achatar, escapar/reparar, selecionar/omitir e muito mais.",
      "Roda no seu navegador — o JSON não é enviado para nenhum servidor.",
      "Ainda em evolução — mais ferramentas e refinamentos vêm aí.",
    ],
    sharedDataTitle: "Dados compartilhados",
    sharedDataBody:
      "Todos os visitantes compartilham o mesmo banco ao vivo. Criações, alterações e exclusões são reais e visíveis para todo mundo. Em produção, os dados iniciais são resetados automaticamente uma vez por dia via GET /api/cron/reset. Use para prototipagem e demos — não para guardar nada que você precise manter.",
    languageTitle: "Idioma",
    languageBody:
      "Por padrão, todo o texto dos recursos vem em inglês. Passe lang=fa para respostas em persa com nomes, usuários, e-mails, telefones e textos iranianos. Cookie ou cabeçalho Accept-Language não são usados — apenas o query param. O seletor de idioma do site (English | فارسی) também define essa preferência no Playground e no Preview.",
    languageBullets: [
      "Exemplo: GET /api/users?lang=fa",
      "Respostas em FA incluem Content-Language: fa e um objeto font (Vazirmatn) para renderização.",
      "Escolher فارسی no topo muda a interface para RTL e adiciona lang=fa no Playground.",
    ],
    resourcesTitle: "Recursos",
    resourcesBlurb:
      "Endpoints ativos que você já pode chamar hoje, além de um breve roadmap do que vem a seguir.",
    colResource: "Recurso",
    colBasePath: "Caminho base",
    colStatus: "Status",
    colDocs: "Docs",
    statusLive: "No ar",
    statusDev: "Em desenvolvimento",
    statusSoon: "Em breve",
    openapiTitle: "OpenAPI",
    openapiBody:
      "Catálogo legível por máquina de todos os endpoints ativos (Auth, Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, Countries e reset admin). Importe no Postman, Swagger UI ou ferramentas de IA.",
    download: "Baixar",
    requestsTitle: "Requisições",
    requestsBody:
      "Listagens retornam data + pagination. Itens únicos retornam { data }.",
    errorsTitle: "Erros",
    errorsBody:
      "Falhas retornam um objeto error. Status: 400 validação, 401 não autorizado, 404 não encontrado, 429 limite excedido, 500 servidor. Passe ?status=500 (400–599) para forçar um erro em demos de UI.",
    rateLimitTitle: "Limites de requisição",
    rateLimitBody:
      "Para manter a demo justa para todo mundo, cada IP pode chamar /api/* cerca de {limit} vezes por minuto. Se passar disso, você recebe HTTP 429 (muitas requisições). A resposta também inclui cabeçalhos X-RateLimit para você ver quantas chamadas ainda restam.",
    resetTitle: "Resetar dados de demo",
    resetBody:
      "Todo mundo compartilha o mesmo banco de demonstração. No ambiente no ar, os dados voltam ao seed padrão automaticamente a cada 24 horas. Se você tiver a chave de admin, pode limpar e recarregar esse seed na hora com o formulário abaixo.",
    resetPanel: {
      intro:
        "Digite a chave de admin para limpar as tabelas de demo e recarregar o seed padrão.",
      placeholder: "Chave de admin",
      button: "Resetar agora",
      resetting: "Resetando…",
      needSecret: "Digite a chave de admin primeiro.",
      confirm:
        "Isso vai limpar as tabelas de seed e recarregar os dados padrão. Continuar?",
      networkError: "Erro de rede. O servidor está rodando?",
      donePrefix: "Reset concluído",
    },
    colIndex: "#",
  },
  resourceDocs: {
    endpoints: "Endpoints",
    queryParams: "Parâmetros de query",
    examples: "Exemplos",
    response: "Resposta",
    tryExample: "Testar",
    preview: "Preview",
    playground: "Playground",
    backToResources: "Voltar para recursos",
  },
  playground: {
    title: "Playground",
    blurb:
      "Envie requisições reais para as APIs do MockData. Inspecione o JSON no navegador — sua última requisição por recurso fica salva enquanto você navega pelo site.",
    resource: "Recurso",
    action: "Ação",
    send: "Enviar",
    sending: "Enviando…",
    response: "Resposta",
    request: "Requisição",
    body: "Body",
    query: "Query",
    headers: "Headers",
    correct: "Correta",
    wrong: "Incorreta",
    password: "Senha",
    user: "Usuário",
    pickUser: "Escolha um usuário",
    loadError: "Não foi possível carregar as opções do seletor",
    emptyResponse: "Nenhuma resposta ainda",
    startHint: "Escolha um recurso e envie uma requisição para começar.",
    types: "TS",
    json: "JSON",
  },
  temporary: {
    title: "API temporária",
    blurb: "Cole seu JSON e crie uma API de curta duração.",
    privacyNote:
      "Trate o link como uma senha. Até expirar, qualquer pessoa com o link pode ler e alterar os dados. Até 5 ativas por vez no navegador.",
    jsonLabel: "JSON",
    durationLabel: "Duração",
    duration1h: "1 hora",
    duration6h: "6 horas",
    duration12h: "12 horas",
    duration24h: "24 horas",
    checkJson: "Validar",
    jsonValid: "Tudo certo — pronto para criar.",
    jsonHint: "Valide quando quiser ou crie direto.",
    create: "Criar API",
    creating: "Criando…",
    acceptFix: "Aplicar correção e criar",
    rejectFix: "Editar novamente",
    fixedPreview: "Corrigimos alguns problemas. Revise e crie.",
    myApis: "Minhas APIs",
    emptyList: "Nenhuma API ativa ainda.",
    copyUrl: "Copiar",
    delete: "Excluir",
    deleteAll: "Excluir todas",
    deleting: "…",
    confirmDelete: "Excluir esta API?",
    confirmDeleteBody: "A URL vai parar de funcionar na hora.",
    confirmDeleteAll: "Excluir todas as APIs?",
    confirmDeleteAllBody: "Todas as URLs desta lista vão parar de funcionar na hora.",
    cancel: "Cancelar",
    limitReached: "Você atingiu o limite de 5 APIs.",
    limitReachedBody: "Exclua uma da lista abaixo ou espere alguma expirar.",
    createdTitle: "Criada",
    openApi: "Abrir",
    slotsLabel: "{n} / 5",
    maxActive: "",
    sampleJson: `[
  { "id": "1", "firstName": "Camila", "lastName": "Almeida", "role": "admin" },
  { "id": "2", "firstName": "Rafael", "lastName": "Costa", "role": "member" },
  { "id": "3", "firstName": "Beatriz", "lastName": "Ferreira", "role": "member" }
]`,
    issues: {
      EMPTY: "Cole um objeto ou array JSON.",
      INVALID_JSON: "JSON inválido — confira vírgulas, aspas e colchetes/chaves.",
      TOO_LARGE: "O JSON é grande demais (máx. {max} KB).",
      NOT_OBJECT_OR_ARRAY: "A raiz precisa ser um objeto { } ou array [ ].",
      TOO_DEEP: "Aninhamento fundo demais (profundidade máx. {max}).",
      ARRAY_TOO_LONG: "O array é longo demais (máx. {max} itens).",
      TOO_MANY_KEYS: "Chaves demais em um único objeto (máx. {max}).",
      UNSAFE_KEY: "A chave insegura “{key}” não é permitida.",
      AUTO_FIXED: "Vírgulas sobrando no fim ou chaves inseguras foram removidas.",
    },
  },
  imageGenerator: {
    title: "Gerador de Imagens",
    blurb:
      "Para imagens do seu projeto, use SVGs do MockData ou fotos reais aleatórias com dimensões personalizadas. Coloque o link da imagem direto em uma tag img, no CSS ou em qualquer campo de imagem.",
    modeSvg: "SVG",
    modeReal: "Imagem Real",
    width: "Largura",
    height: "Altura",
    generate: "Gerar",
    generating: "Gerando…",
    yourUrl: "Sua URL da API",
    preview: "Preview",
    useInProject: "Use no seu projeto",
    tabUrl: "URL",
    tabHtml: "HTML",
    tabCss: "CSS",
    tabJs: "JavaScript",
    tabCurl: "cURL",
    readySizes: "Tamanhos prontos",
    sizes: {
      avatar: "Avatar",
      thumbnail: "Miniatura",
      profile: "Perfil",
      square: "Quadrado",
      post: "Post",
      cover: "Capa",
      banner: "Banner",
      story: "Story",
    },
  },
  jsonWorkbench: {
    title: "JSON Workbench",
    blurb:
      "Cole seu JSON uma vez. Depois escolha o que fazer — formatar, buscar, converter e mais sem precisar colar de novo.",
    toolNavLabel: "Ferramentas do workbench",
    source: {
      title: "Seu JSON",
      hint: "Cole aqui uma vez. Toda ação abaixo usa este documento.",
      sample: "Carregar exemplo",
      valid: "JSON válido.",
      needJson: "Cole seu JSON à esquerda primeiro.",
      fixFirst: "Corrija o erro de JSON em Seu JSON e tente de novo.",
      pickAction: "O que você quer fazer?",
      useResult: "Usar como JSON",
      diffHint: "Seu JSON é o lado A. Cole o outro documento abaixo como B.",
      escapedInput: "String escapada",
      schemaInput: "JSON Schema",
      fromSchemaNote:
        "Cole um JSON Schema abaixo — gera um documento de exemplo que você pode jogar em Seu JSON.",
    },
    categories: {
      core: "Essenciais",
      transform: "Transformar",
      utility: "Utilitários",
    },
    labels: {
      input: "Entrada",
      output: "Saída",
      tree: "Árvore",
      matches: "Ocorrências",
      jsonA: "JSON A",
      jsonB: "JSON B",
      diffResult: "Diferenças",
      jsonpath: "JSONPath",
      result: "Resultado ({count})",
    },
    actions: {
      format: "Formatar",
      minify: "Minificar",
      showTree: "Mostrar árvore",
      search: "Buscar",
      clearSearch: "Limpar busca",
      replace: "Substituir",
      replaceAll: "Substituir tudo",
      prevMatch: "Ocorrência anterior",
      nextMatch: "Próxima ocorrência",
      compare: "Comparar",
      run: "Executar",
      runPath: "Executar",
      toTypescript: "Gerar types",
      toZod: "Gerar Zod",
      toSchema: "Gerar schema",
      swapDirection: "Inverter",
      sortKeys: "Ordenar chaves",
      removeEmpty: "Remover vazios",
      flatten: "Achatar",
      unflatten: "Desachatar",
      escape: "Escapar",
      unescape: "Desescapar",
      repair: "Reparar",
      fromSchema: "Gerar exemplo",
      extractKeys: "Extrair chaves",
      extractValues: "Extrair valores",
      pick: "Selecionar campos",
      omit: "Omitir campos",
      compareStructure: "Comparar estrutura",
      clear: "Limpar",
      expandAll: "Expandir tudo",
      collapseAll: "Recolher tudo",
      copyPath: "Copiar caminho",
      copyValue: "Copiar valor",
    },
    errors: {
      empty: "Cole algum JSON primeiro.",
      invalid: "JSON inválido.",
      unexpectedEnd: "Fim inesperado do JSON.",
      unexpectedToken: "Token inesperado: {token}",
      expectedPropertyName: "Era esperado um nome de propriedade entre aspas duplas.",
      expectedCommaOrBrace: "Era esperado ',' ou '}' após o valor de uma propriedade.",
      expectedCommaOrBracket: "Era esperado ',' ou ']' após um item do array.",
      expectedColon: "Era esperado ':' após o nome de uma propriedade.",
      unterminatedString: "String não fechada.",
      badControlChar: "Caractere de controle inválido dentro de uma string.",
      badEscape: "Sequência de escape inválida dentro de uma string.",
      trailingChar: "Caracteres inesperados após o valor JSON.",
      objectKeyExpected: "Era esperada uma chave de objeto.",
      unexpectedCharacter: "Caractere inesperado: {char}",
      invalidCharacter: "Caractere inválido: {char}",
      invalidUnicode: "Escape unicode inválido: {chars}",
      couldNotRepair: "Não foi possível reparar este JSON.",
      atLineColumn: "linha {line}, coluna {column}",
      atLine: "linha {line}",
      atPosition: "posição {position}",
    },
    types: {
      object: "objeto",
      array: "array",
      string: "string",
      number: "número",
      boolean: "booleano",
      null: "null",
    },
    validate: {
      idleHint: "Cole o JSON e valide. Apenas a sintaxe padrão de JSON é verificada.",
      validTitle: "JSON válido",
      validBody: "Tipo da raiz: {type}",
      invalidTitle: "JSON inválido",
    },
    tree: {
      idleTitle: "A árvore aparece aqui",
      idleBody: "Cole o JSON à esquerda e clique em Mostrar árvore.",
      errorTitle: "Não dá para montar a árvore",
      errorBody: "Corrija o erro de JSON primeiro e tente de novo.",
    },
    search: {
      query: "Buscar",
      replaceWith: "Substituir por",
      matchCount: "{current} de {total}",
      noMatches: "Nenhuma ocorrência",
      noMatchesBody: "Nada bateu com essa busca em chaves ou valores.",
      idleTitle: "As ocorrências aparecem aqui",
      idleBody: "Digite um termo e clique em Buscar. Procura em chaves e valores.",
      errorTitle: "Não dá para buscar",
      errorBody: "Corrija o erro de JSON primeiro e busque de novo.",
      kindKey: "Chave",
      kindValue: "Valor",
      activeHint: "{kind} · {path}",
      replacedCount: "{count} ocorrência(s) substituída(s).",
    },
    diff: {
      idleTitle: "O diff aparece aqui",
      idleBody: "Cole o JSON A e o JSON B e depois compare.",
      identical: "Sem diferenças — os documentos têm estrutura idêntica.",
      added: "Adicionado / em B",
      removed: "Removido / em A",
      changed: "Alterado",
      sideEmpty: "Nada deste lado.",
      emptyA: "O JSON A está vazio.",
      emptyB: "O JSON B está vazio.",
      bothInvalid: "Tanto o JSON A quanto o JSON B são inválidos.",
    },
    jsonpath: {
      whatIs:
        "JSONPath extrai valores de um JSON aninhado — como um seletor CSS para dados. Clique em um exemplo abaixo.",
      hintTitle: "Sintaxe",
      hintBody: `$              Raiz
.users         Propriedade
[*]            Todos os itens do array
[0]            Primeiro item`,
      idleTitle: "O resultado aparece aqui",
      idleBody: "Digite um caminho e execute a consulta.",
      errorTitle: "Não dá para executar a consulta",
      errorBody: "Corrija o erro no JSON ou no caminho e tente de novo.",
      noResults: "Nenhum resultado para este caminho.",
      emptyPath: "Digite uma expressão JSONPath.",
    },
    transform: {
      tsIdleTitle: "O código TypeScript aparece aqui",
      tsIdleBody: "Cole o JSON e gere os types.",
      zodIdleTitle: "O schema Zod aparece aqui",
      zodIdleBody: "Cole o JSON e gere um schema Zod.",
      schemaExplain: "JSON ↔ Schema",
      schemaUse:
        "Infira um JSON Schema a partir de Seu JSON, ou inverta o sentido para montar um documento de exemplo a partir de um schema.",
      schemaIdleTitle: "O JSON Schema aparece aqui",
      schemaIdleBody: "Cole o JSON e gere um schema.",
      yamlIdleTitle: "O YAML aparece aqui",
      yamlIdleBody: "Seu JSON vira YAML em tempo real.",
      yamlToJsonIdle: "Cole o YAML acima — ele vira Seu JSON.",
      yamlApplied: "Convertido — Seu JSON foi atualizado.",
      csvIdleTitle: "O CSV aparece aqui",
      csvIdleBodyJson:
        "Converte Seu JSON — um objeto único, um array de objetos ou um objeto envolvendo uma tabela.",
      csvIdleBodyCsv: "Cole um CSV com linha de cabeçalho e converta para JSON.",
      csvToJsonIdle: "Cole o CSV acima — ele vira Seu JSON.",
      csvApplied: "Convertido — Seu JSON foi atualizado.",
      csvUnsupported: "Não foi possível converter este JSON para CSV.",
    },
    utilities: {
      sortAsc: "A → Z",
      sortDesc: "Z → A",
      sortIdleTitle: "Pronto para ordenar",
      sortIdleBody: "Escolha A→Z ou Z→A — as chaves ordenadas aparecem na saída.",
      sortApplied: "Chaves ordenadas — veja a saída abaixo.",
      removeOptions: "Remover estes itens",
      removeNull: "null",
      removeEmptyString: '""',
      removeEmptyArray: "[]",
      removeEmptyObject: "{}",
      removeNullLabel: "valores null",
      removeEmptyStringLabel: "strings vazias",
      removeEmptyArrayLabel: "arrays vazios",
      removeEmptyObjectLabel: "objetos vazios",
      removePreserveHint: "false e 0 são sempre mantidos.",
      removeIdleTitle: "O JSON limpo aparece aqui",
      removeIdleBody: "Escolha o que remover e execute.",
      nestedLabel: "Aninhado",
      flatLabel: "Plano",
      flattenHint: "Transforma objetos aninhados em chaves com ponto — ex.: address.city e skills.0.",
      flattenUse:
        "Útil para planilhas, arquivos .env, índices de busca ou APIs que só aceitam mapas planos de chave/valor.",
      flattenIdleTitle: "Pronto para achatar",
      flattenIdleBody: "Chaves aninhadas viram caminhos com ponto na saída.",
      flattenApplied: "Achatado — veja a saída abaixo.",
      unflattenHint: "Caminhos com ponto reconstroem objetos; segmentos numéricos reconstroem arrays.",
      unflattenUse:
        "Use quando você tiver chaves planas (user.name, skills.0) e precisar do JSON aninhado de volta.",
      unflattenIdleTitle: "O JSON aninhado aparece aqui",
      unflattenIdleBody: "Cole um objeto com caminhos planos e desachate.",
      escapeIdleTitle: "A string escapada aparece aqui",
      escapeIdleBody: "Seu JSON será escapado para uso dentro de uma string.",
      escapeHint:
        'Transforma seu JSON em uma única string escapada — aspas e quebras de linha viram \\" / \\n para caber dentro de outra string ou config.',
      escapeUse:
        "Prático para embutir JSON em código, variáveis de ambiente ou logs sem quebrar as aspas de fora.",
      unescapeIdleTitle: "O JSON aparece aqui",
      unescapeIdleBody: "Cole uma string JSON escapada e desescape.",
      repairHint:
        "Reparo em múltiplas passadas para JSON quebrado, truncado, comentado ou no meio da edição.",
      repairUse:
        "Corrige aspas, vírgulas e colchetes/chaves; remove comentários e blocos de código; trata literais Python/JS, JSONP, tipos do MongoDB, NDJSON, documentos truncados e sujeira digitada no meio.",
      repairAlreadyValid: "Já estava certinho. Só formatamos.",
      repairFormatted: "Formatado.",
      repairReady: "Corrigimos o que foi possível.",
      repairApplied: "Corrigido.",
      repairAppliedToSource: "Aplicado em Seu JSON.",
      repairFailedTitle: "Não deu para reparar totalmente",
      repairFailedAt: "{message} (linha {line}, coluna {column})",
      repairPreview: "Reparado",
      repairFixes: {
        "trailing-commas": "Vírgulas sobrando no fim",
        "single-quotes": "Aspas simples",
        "smart-quotes": "Aspas curvas",
        "unquoted-keys": "Chaves sem aspas",
        "missing-commas": "Vírgulas faltando",
        "missing-brackets": "Chaves/colchetes faltando",
        comments: "Comentários",
        "code-fence": "Bloco de código",
        "python-literals": "Literais Python",
        "js-undefined": "undefined → null",
        jsonp: "Wrapper JSONP",
        "escaped-string": "String JSON escapada",
        mongodb: "Tipos do MongoDB",
        ndjson: "NDJSON → array",
        ellipsis: "Reticências",
        "string-concat": "Concatenação de strings",
        whitespace: "Espaços / formatação",
        truncated: "Truncado / incompleto",
        "mid-edit-junk": "Sujeira no meio da edição",
      },
      repairIdleTitle: "O JSON reparado aparece aqui",
      repairIdleBody:
        "Cole um texto quebrado ou quase-JSON em Seu JSON — o reparo roda ao vivo na saída.",
      fromSchemaHint:
        "Schema → JSON de exemplo a partir de type, properties, required, items, enum e default.",
      fromSchemaIdleTitle: "O JSON de exemplo aparece aqui",
      fromSchemaIdleBody: "Cole um JSON Schema abaixo e gere um exemplo.",
      extractHint:
        "Retorna pares de caminho folha + valor juntos — ex.: { path: \"address.city\", value: \"São Paulo\" }.",
      extractIdleTitle: "Chaves e valores aparecem aqui",
      extractIdleBody: "Selecione os campos acima para extrair caminhos e valores.",
      extractKeysHint: "Retorna caminhos de chaves aninhadas com notação de ponto (arrays como .0).",
      extractKeysIdleTitle: "As chaves aparecem aqui",
      extractKeysIdleBody: "Cole o JSON e extraia as chaves.",
      extractValuesHint: "Coleta valores folha (primitivos e null) em profundidade.",
      extractValuesIdleTitle: "Os valores aparecem aqui",
      extractValuesIdleBody: "Cole o JSON e extraia os valores.",
      fieldsLabel: "Campos de Seu JSON",
      fieldsClickHint:
        "Clique nos caminhos para selecionar — sem precisar digitar. Caminhos aninhados usam ponto.",
      fieldsSelectAll: "Selecionar tudo",
      fieldsClear: "Limpar",
      fieldsEmpty: "Este JSON não tem campos selecionáveis.",
      pickHint: "Mantenha apenas os campos que você escolher — clique nos campos abaixo.",
      pickIdleTitle: "O resultado aparece aqui",
      pickIdleBody: "",
      omitHint: "Remova os campos que você escolher — clique nos campos abaixo.",
      omitIdleTitle: "O resultado aparece aqui",
      omitIdleBody: "",
      compareHint: "Cole dois documentos JSON lado a lado. Só estrutura — valores são ignorados.",
      compareUse:
        "Chaves faltando acendem em vermelho em A, chaves adicionadas em verde em B e divergências de tipo em âmbar nos dois.",
      compareBack: "Voltar ao workbench",
      compareIdleTitle: "Cole os dois documentos JSON",
      compareIdleBody: "Adicione JSON à esquerda e à direita para comparar a estrutura.",
      compareIdentical: "Mesma estrutura — types e chaves batem.",
      compareMissing: "Faltando (só em A)",
      compareExtra: "Adicionados (só em B)",
      compareType: "Tipo divergente",
    },
    empty: {
      formatTitle: "O JSON formatado aparece aqui",
      formatBody: "Cole o JSON à esquerda e clique em Formatar.",
    },
    soon: {
      badge: "Em breve",
      title: "{tool} vem aí",
      body: "Esta ferramenta está listada para você ver o workbench completo. Ela será liberada em uma etapa posterior.",
    },
    tools: {
      format: "Formatar",
      minify: "Minificar",
      validate: "Validar",
      tree: "Visualização em Árvore",
      search: "Buscar",
      diff: "Diff",
      jsonpath: "JSONPath",
      convert: "Converter",
      toTypescript: "TypeScript",
      toZod: "Zod",
      toSchema: "JSON Schema",
      yaml: "YAML",
      csv: "CSV",
      sortKeys: "Ordenar chaves",
      removeEmpty: "Remover vazios",
      flatten: "Achatar",
      unflatten: "Desachatar",
      escape: "Escapar",
      unescape: "Desescapar",
      repair: "Reparar",
      extract: "Extrair chaves e valores",
      extractKeys: "Extrair chaves",
      extractValues: "Extrair valores",
      pick: "Selecionar",
      omit: "Omitir",
      compareStructure: "Comparar estrutura",
    },
  },
  generator: {
    title: "Gerador de Dados Fictícios",
    subtitle: "Gere dados realistas para os seus projetos frontend.",
    chooseType: "Tipos de dados",
    searchPlaceholder: "Buscar dados…",
    noTopics: "Nenhum tipo de dado encontrado.",
    fieldsLegend: "Campos",
    moreFields: "Mais campos",
    lessFields: "Ocultar opcionais",
    optionalFields: "Campos opcionais",
    records: "Registros",
    customQty: "Personalizado",
    country: "País",
    countrySearch: "Buscar países…",
    selectPlaceholder: "Escolha um tipo de dado…",
    outputMode: "Formato de saída",
    modePayload: "Body de POST",
    modeApi: "Registro da API",
    modePayloadHint: "Sem id nem timestamps — pronto para enviar num POST de criação.",
    modeApiHint: "Inclui id, createdAt e updatedAt como uma linha salva na API.",
    jsonType: "JSON",
    viewJson: "JSON",
    viewType: "TS",
    generate: "Gerar {n} registros",
    generating: "Gerando {n} registros…",
    generateAgain: "Gerar novamente",
    refresh: "Gerar de novo",
    generated: "{n} registros gerados",
    download: "Baixar",
    createApi: "Criar API",
    createSuccess: "API temporária criada.",
    createBlockedArray:
      "A API temporária aceita até 500 registros. Diminua a quantidade para publicar.",
    createBlockedSize:
      "Este JSON passa do limite da API temporária (64 KB). Diminua a quantidade ou remova campos.",
    openTemporary: "Gerenciar em Temporária",
    emptyTitle: "Escolha um tipo de dado",
    emptyBody: "Selecione algo acima para começar a gerar dados realistas.",
    duration1h: "1h",
    duration6h: "6h",
    duration12h: "12h",
    duration24h: "24h",
    countries: {
      all: "Todos os países",
      IR: "Irã",
      DE: "Alemanha",
      US: "Estados Unidos",
      GB: "Inglaterra",
      FR: "França",
      NL: "Países Baixos",
      JP: "Japão",
      CA: "Canadá",
    },
    categories: {
      people: "Pessoas",
      ecommerce: "E-commerce",
      content: "Conteúdo",
      media: "Mídia",
      business: "Negócios",
      location: "Localização",
    },
    fields: {
      id: "id",
      name: "Nome",
      username: "Usuário",
      email: "E-mail",
      avatar: "Avatar",
      phone: "Telefone",
      company: "Empresa",
      location: "Localização",
      age: "Idade",
      role: "Perfil",
      jobTitle: "Cargo",
      department: "Área",
      bio: "Bio",
      website: "Site",
      createdAt: "Criado em",
      updatedAt: "Atualizado em",
      hiredAt: "Contratado em",
      ordersCount: "Total de pedidos",
      totalSpent: "Total gasto",
      postsCount: "Total de posts",
      price: "Preço",
      image: "Imagem",
      category: "Categoria",
      description: "Descrição",
      brand: "Marca",
      stock: "Estoque",
      rating: "Avaliação",
      sku: "SKU",
      colors: "Cores",
      orderId: "ID do pedido",
      customer: "Cliente",
      items: "Itens",
      total: "Total",
      status: "Status",
      orderDate: "Data do pedido",
      paymentStatus: "Status do pagamento",
      shippingAddress: "Endereço de entrega",
      user: "Usuário",
      comment: "Comentário",
      post: "Post",
      date: "Data",
      product: "Produto",
      title: "Título",
      verified: "Verificado",
      helpful: "Votos úteis",
      slug: "Slug",
      parentCategory: "Categoria pai",
      productCount: "Quantidade de produtos",
      quantity: "Quantidade",
      discount: "Desconto",
      code: "Código",
      type: "Tipo",
      expiresAt: "Expira em",
      minimumOrder: "Pedido mínimo",
      usageLimit: "Limite de uso",
      active: "Ativo",
      amount: "Valor",
      currency: "Moeda",
      paymentMethod: "Forma de pagamento",
      transactionId: "ID da transação",
      order: "Pedido",
      carrier: "Transportadora",
      trackingNumber: "Código de rastreio",
      estimatedDelivery: "Previsão de entrega",
      body: "Conteúdo",
      author: "Autor",
      tags: "Tags",
      publishedAt: "Publicado em",
      likes: "Curtidas",
      views: "Visualizações",
      replies: "Respostas",
      attachments: "Anexos",
      actionUrl: "URL de ação",
      sender: "Remetente",
      receiver: "Destinatário",
      message: "Mensagem",
      read: "Lida",
      artist: "Artista",
      cover: "Capa",
      year: "Ano",
      genre: "Gênero",
      tracks: "Faixas",
      album: "Álbum",
      duration: "Duração",
      poster: "Pôster",
      director: "Direção",
      language: "Idioma",
      plays: "Reproduções",
      label: "Gravadora",
      pages: "Páginas",
      isbn: "ISBN",
      instructor: "Instrutor",
      level: "Nível",
      lessons: "Aulas",
      students: "Alunos",
      employees: "Funcionários",
      logo: "Logo",
      industry: "Setor",
      salary: "Salário",
      experience: "Experiência",
      remote: "Remoto",
      founded: "Fundação",
      postedAt: "Publicado em",
      capacity: "Capacidade",
      capital: "Capital",
      flag: "Bandeira",
      region: "Estado / Província / Região",
      population: "População",
      street: "Rua",
      postalCode: "CEP",
      latitude: "Latitude",
      longitude: "Longitude",
      country: "País",
      city: "Cidade",
      notes: "Observações",
      team: "Time",
      joinedAt: "Entrou em",
      skills: "Skills",
      specialty: "Especialidade",
      hospital: "Hospital",
      licenseNumber: "Registro profissional",
      yearsExperience: "Anos de experiência",
      bloodType: "Tipo sanguíneo",
      diagnosis: "Diagnóstico",
      doctor: "Médico",
      admittedAt: "Internado em",
      vehicleType: "Tipo de veículo",
      plateNumber: "Placa",
      tripsCount: "Total de viagens",
      roomNumber: "Quarto",
      checkIn: "Check-in",
      checkOut: "Check-out",
      nights: "Noites",
      followers: "Seguidores",
      following: "Seguindo",
      grade: "Série",
      school: "Escola",
      gpa: "CR / Média",
      major: "Curso",
      enrollmentYear: "Ano de matrícula",
      subject: "Disciplina",
      classesCount: "Total de aulas",
      invoiceNumber: "Número da nota",
      issueDate: "Data de emissão",
      dueDate: "Data de vencimento",
      tax: "Impostos",
      itemsCount: "Quantidade de itens",
      target: "Alvo",
      targetType: "Tipo de alvo",
      reaction: "Reação",
      color: "Cor",
      thumbnail: "Miniatura",
      channel: "Canal",
      url: "URL",
      width: "Largura",
      height: "Altura",
      alt: "Texto alternativo",
      photographer: "Fotógrafo",
      host: "Apresentador",
      episodes: "Episódios",
      subscribers: "Inscritos",
      owner: "Responsável",
      public: "Público",
      progress: "Progresso",
      teamSize: "Tamanho do time",
      budget: "Orçamento",
      startDate: "Data de início",
      membersCount: "Total de membros",
      focus: "Foco",
      countriesCount: "Total de países",
      areaKm2: "Área (km²)",
      timezone: "Fuso horário",
      terminals: "Terminais",
      altitude: "Altitude",
      accuracy: "Precisão",
    },
    topics: {
      users: {
        name: "Usuários",
        description: "Perfis de pessoas para apps e dashboards",
        preview: {
          line1: "Larissa Andrade",
          line2: "@larissa.a · larissa@mail.test",
          line3: "São Paulo",
        },
      },
      customers: {
        name: "Clientes",
        description: "Compradores e contatos de conta",
        preview: {
          line1: "Gabriel Souza",
          line2: "gabriel@demo.dev",
          line3: "+55 11 99876-5432",
        },
      },
      employees: {
        name: "Funcionários",
        description: "Pessoas do time com cargos e áreas",
        preview: {
          line1: "Mariana Rocha",
          line2: "Desenvolvedora Frontend",
          line3: "Engenharia · Acme",
        },
      },
      authors: {
        name: "Autores",
        description: "Redatores e criadores de conteúdo",
        preview: {
          line1: "Tiago Lima",
          line2: "Escreve sobre design de produto.",
        },
      },
      contacts: {
        name: "Contatos",
        description: "Contatos estilo CRM e vínculos com empresas",
        preview: {
          line1: "Fernanda Gomes",
          line2: "fernanda@acme.test · Acme",
        },
      },
      "team-members": {
        name: "Membros do time",
        description: "Pessoas dos times de produto e engenharia",
        preview: {
          line1: "Diego Oliveira",
          line2: "tech lead · Engenharia",
        },
      },
      doctors: {
        name: "Médicos",
        description: "Profissionais de saúde com especialidade e hospital",
        preview: {
          line1: "Dra. Helena Carvalho",
          line2: "Cardiologia · Hospital Central",
        },
      },
      patients: {
        name: "Pacientes",
        description: "Prontuários com diagnóstico e tipo sanguíneo",
        preview: {
          line1: "Bruno Ribeiro",
          line2: "A+ · Hipertensão",
        },
      },
      drivers: {
        name: "Motoristas",
        description: "Motoristas de frota com veículo e avaliação",
        preview: {
          line1: "André Martins",
          line2: "sedã · ★ 4,8",
        },
      },
      guests: {
        name: "Hóspedes",
        description: "Hóspedes de hotel com quarto e status da estadia",
        preview: {
          line1: "Isabela Pereira",
          line2: "Quarto 412 · hospedada",
        },
      },
      profiles: {
        name: "Perfis",
        description: "Perfis sociais com seguidores e bio",
        preview: {
          line1: "Ana Clara Dias",
          line2: "@anaclaradias · 12,4 mil seguidores",
        },
      },
      "girl-students": {
        name: "Alunas",
        description: "Estudantes meninas com série e escola",
        preview: {
          line1: "Sofia Castro",
          line2: "2º ano EM · Colégio Bandeirantes",
        },
      },
      "boy-students": {
        name: "Alunos",
        description: "Estudantes meninos com série e escola",
        preview: {
          line1: "Lucas Mendes",
          line2: "9º ano · Escola Monteiro Lobato",
        },
      },
      teachers: {
        name: "Professores",
        description: "Educadores com disciplina e escola",
        preview: {
          line1: "Patrícia Nogueira",
          line2: "Matemática · Colégio Horizonte",
        },
      },
      products: {
        name: "Produtos",
        description: "Itens de loja e preços",
        preview: {
          line1: "Fone de Ouvido Sem Fio",
          line2: "R$ 249,90 · Eletrônicos",
          line3: "★★★★☆",
        },
      },
      orders: {
        name: "Pedidos",
        description: "Pedidos de compra com itens e status",
        preview: {
          line1: "Pedido #10482",
          line2: "3 itens · R$ 389,90",
          line3: "Entregue",
        },
      },
      reviews: {
        name: "Avaliações",
        description: "Notas e comentários de clientes",
        preview: {
          line1: "★★★★★ Produto top",
          line2: "Bem útil e fácil de usar.",
        },
      },
      categories: {
        name: "Categorias",
        description: "Grupos do catálogo de produtos",
        preview: { line1: "Eletrônicos", line2: "eletronicos" },
      },
      "cart-items": {
        name: "Itens do carrinho",
        description: "Itens adicionados a um carrinho de compras",
        preview: { line1: "Smartwatch", line2: "2 × R$ 499 · R$ 998" },
      },
      coupons: {
        name: "Cupons",
        description: "Códigos de desconto e regras",
        preview: { line1: "BEMVINDO10", line2: "10% · expira em 01/12/2026" },
      },
      payments: {
        name: "Pagamentos",
        description: "Tentativas de pagamento e formas usadas",
        preview: { line1: "R$ 184,50 BRL", line2: "cartão · pago" },
      },
      shipments: {
        name: "Envios",
        description: "Transportadoras e status de rastreio",
        preview: { line1: "PED-10482 · Correios", line2: "Em trânsito" },
      },
      invoices: {
        name: "Notas / Faturas",
        description: "Documentos de cobrança com valores e vencimentos",
        preview: { line1: "FAT-10482", line2: "R$ 1.250 · paga" },
      },
      brands: {
        name: "Marcas",
        description: "Marcas de loja com logos e catálogos",
        preview: { line1: "Acme", line2: "acme · 128 produtos" },
      },
      posts: {
        name: "Posts",
        description: "Artigos de blog e publicações de feed",
        preview: { line1: "Projetando para velocidade", line2: "Por Ana Clara Dias" },
      },
      comments: {
        name: "Comentários",
        description: "Respostas em posts e produtos",
        preview: {
          line1: "Ajudou demais — valeu!",
          line2: "Pedro · 12 curtidas",
        },
      },
      messages: {
        name: "Mensagens",
        description: "Conversas estilo caixa de entrada",
        preview: {
          line1: "Consegue revisar o último rascunho?",
          line2: "Marina → Rafael",
        },
      },
      notifications: {
        name: "Notificações",
        description: "Alertas e resumos no app",
        preview: { line1: "Novo comentário", line2: "info · há 2h" },
      },
      tags: {
        name: "Tags",
        description: "Tags de conteúdo com slugs e contagens",
        preview: { line1: "typescript", line2: "142 posts" },
      },
      "content-categories": {
        name: "Categorias de conteúdo",
        description: "Categorias editoriais para posts",
        preview: { line1: "Tutoriais", line2: "tutoriais · 86 posts" },
      },
      likes: {
        name: "Curtidas",
        description: "Reações em posts e comentários",
        preview: { line1: "Ana curtiu um post", line2: "post · amei" },
      },
      albums: {
        name: "Álbuns",
        description: "Álbuns de música com capa",
        preview: {
          line1: "Random Access Memories",
          line2: "Daft Punk",
          line3: "2013 · 13 faixas",
        },
      },
      songs: {
        name: "Músicas",
        description: "Faixas com duração e artista",
        preview: { line1: "Estrada da Madrugada", line2: "3:42 · Eletrônica" },
      },
      movies: {
        name: "Filmes",
        description: "Filmes com pôster e nota",
        preview: { line1: "Circuito Noturno", line2: "2021 · ★ 8,2" },
      },
      books: {
        name: "Livros",
        description: "Títulos com autores e capas",
        preview: { line1: "Projetando Interfaces", line2: "Tiago Lima · 2019" },
      },
      videos: {
        name: "Vídeos",
        description: "Clipes de vídeo com duração e visualizações",
        preview: {
          line1: "Monte um dashboard em 10 minutos",
          line2: "12:40 · 84 mil views",
        },
      },
      images: {
        name: "Imagens",
        description: "Fotos com dimensões e tags",
        preview: { line1: "Luz da manhã", line2: "1280×720" },
      },
      podcasts: {
        name: "Podcasts",
        description: "Programas com apresentadores e número de episódios",
        preview: { line1: "Código & Café", line2: "48 episódios · Tech" },
      },
      playlists: {
        name: "Playlists",
        description: "Listas de faixas com criadores e gêneros",
        preview: { line1: "Foco Total", line2: "32 faixas · Eletrônica" },
      },
      companies: {
        name: "Empresas",
        description: "Organizações e setores",
        preview: { line1: "Acme Corp", line2: "Tecnologia · São Paulo" },
      },
      jobs: {
        name: "Vagas",
        description: "Vagas de emprego com local e modelo",
        preview: {
          line1: "Desenvolvedor Frontend",
          line2: "Google · São Paulo · Tempo integral",
        },
      },
      courses: {
        name: "Cursos",
        description: "Conteúdo de aprendizado e instrutores",
        preview: { line1: "Fundamentos de React", line2: "Intermediário · 12h" },
      },
      events: {
        name: "Eventos",
        description: "Meetups e conferências",
        preview: { line1: "Frontend Meetup", line2: "São Paulo · Workshop" },
      },
      projects: {
        name: "Projetos",
        description: "Frentes de trabalho com progresso e orçamento",
        preview: { line1: "Redesign do dashboard", line2: "em_andamento · 72%" },
      },
      teams: {
        name: "Times",
        description: "Times da empresa com lideranças e tamanho",
        preview: { line1: "Squad de produto", line2: "8 membros · Engenharia" },
      },
      continents: {
        name: "Continentes",
        description: "Continentes do mundo com códigos e estatísticas",
        preview: { line1: "América do Sul", line2: "SA · 12 países" },
      },
      countries: {
        name: "Países",
        description: "Nomes de países, códigos e bandeiras",
        preview: { line1: "Brasil", line2: "BR · Brasília" },
      },
      cities: {
        name: "Cidades",
        description: "Cidades com estado e país",
        preview: { line1: "Curitiba", line2: "Brasil · Paraná" },
      },
      addresses: {
        name: "Endereços",
        description: "Endereços completos coerentes",
        preview: {
          line1: "Av. Paulista, 1578",
          line2: "São Paulo, SP, Brasil",
        },
      },
      regions: {
        name: "Regiões",
        description: "Estados, províncias e regiões",
        preview: { line1: "Minas Gerais", line2: "Brasil · Belo Horizonte" },
      },
      neighborhoods: {
        name: "Bairros",
        description: "Bairros e regiões urbanas",
        preview: { line1: "Pinheiros", line2: "São Paulo · SP" },
      },
      airports: {
        name: "Aeroportos",
        description: "Aeroportos com códigos IATA e cidades",
        preview: { line1: "Guarulhos", line2: "GRU · Brasil" },
      },
      coordinates: {
        name: "Coordenadas geo",
        description: "Latitude, longitude e rótulos de local",
        preview: {
          line1: "-23.550520, -46.633308",
          line2: "São Paulo · Brasil",
        },
      },
    },
    errors: {
      pickTopic: "Escolha um tipo de dado primeiro.",
      INVALID_TOPIC: "Tipo de dado desconhecido.",
      INVALID_FIELDS: "Selecione pelo menos um campo.",
      INVALID_QUANTITY: "A quantidade deve ficar entre 1 e 1000.",
      INVALID_COUNTRY: "País inválido.",
      GENERATE_FAILED: "Não foi possível gerar os dados. Tente de novo.",
      DOWNLOAD_FAILED: "Falha no download. Tente de novo.",
      CREATE_FAILED: "Não foi possível criar a API temporária.",
      LIMIT_REACHED: "Limite da API temporária atingido (5 ativas). Exclua uma primeiro.",
      RATE_LIMITED: "Muitas criações em sequência. Tente mais tarde.",
    },
  },
  preview: {
    docs: "Docs",
    playground: "Playground",
    blurb: "Uma interface simples para testar esta API.",
    blurbFaHint: "",
    backToResource: "Voltar para {name}",
    search: "Buscar",
    create: "Criar",
    edit: "Editar",
    delete: "Excluir",
    save: "Salvar",
    saving: "Salvando…",
    deleting: "Excluindo…",
    cancel: "Cancelar",
    fillSample: "Preencher exemplo",
    noRecords: "Nenhum registro",
    loading: "Carregando…",
    confirmDelete: "Excluir?",
    confirmDeleteBody: "Este item será removido permanentemente.",
    networkError: "Erro de rede",
    authDemoPassword: "A senha de demo para todo usuário inicial é",
    username: "Usuário",
    password: "Senha",
    login: "Entrar",
    loginSuccess: "Login feito com sucesso.",
    logout: "Sair",
    getMe: "GET /me",
    token: "Token",
    user: "Usuário",
    loginFirst: "Faça login primeiro para pegar um token",
    createdAt: "Adicionado",
    fieldLabels: {
      name: "Nome",
      username: "Usuário",
      email: "E-mail",
      avatarUrl: "URL do avatar",
      role: "Perfil",
      city: "Cidade",
      country: "País",
      company: "Empresa",
      title: "Título",
      body: "Conteúdo",
      published: "Publicado",
      userId: "ID do usuário",
      postId: "ID do post",
      albumId: "ID do álbum",
      url: "URL",
      thumbnailUrl: "URL da miniatura",
      completed: "Concluída",
      description: "Descrição",
      price: "Preço",
      stock: "Estoque",
      category: "Categoria",
      imageUrl: "URL da imagem",
      message: "Mensagem",
      type: "Tipo",
      read: "Lida",
      code: "Código",
      capital: "Capital",
      region: "Região",
      population: "População",
      currency: "Moeda",
      flagUrl: "URL da bandeira",
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
      teaser: "Em desenvolvimento — formate, compare e transforme JSON",
      hint: "/json — escolha uma ferramenta, o ambiente atualiza na hora",
      badge: "Em desenvolvimento",
      summary:
        "O JSON Workbench está em desenvolvimento: um espaço único no navegador para formatar, comparar estrutura, buscar e transformar JSON — além de TypeScript, Zod, YAML, CSV e utilitários.",
      details: [
        "Abra o JSON Workbench em /json e escolha uma ferramenta — o ambiente atualiza na hora (link direto com ?tool=).",
        "Essenciais: Formatar, Árvore, Buscar, JSONPath e Comparar Estrutura.",
        "Transformar: conversões para TypeScript, Zod, JSON Schema, YAML e CSV.",
        "Utilitários: ordenar chaves, limpar valores vazios, achatar, escapar, reparar, selecionar/omitir e mais.",
        "Ainda em evolução — espere mais ferramentas e ajustes com o tempo.",
      ],
    },
    "2026-09-19-image-generator": {
      title: "Gerador de Imagens",
      teaser: "Imagens de placeholder por URL",
      hint: "/image-generator — SVG ou foto real, copie o link",
      summary:
        "Imagens de placeholder por URL — SVG do MockData ou fotos reais via Picsum, com tamanhos prontos para avatares, posts e banners.",
      details: [
        "Abra /image-generator para escolher SVG ou imagem real, definir largura/altura e copiar uma URL pronta.",
        "URLs públicas são aleatórias por padrão: /image/{w}/{h} para SVG; adicione ?type=real para fotos.",
        "O parâmetro opcional ?seed= mantém sempre as mesmas cores do SVG ou a mesma foto real.",
        "Jogue o link em img, CSS ou qualquer campo de imagem — sem etapa de upload.",
      ],
    },
    "2026-09-17-generator": {
      title: "Gerador de Dados Fictícios",
      teaser: "JSON realista em segundos",
      hint: "/generator — escolha um tipo, gere, copie ou clique em Criar API",
      summary:
        "Gere JSON realista para o front — escolha tipo, campos e quantidade, depois copie, baixe ou publique via API temporária.",
      details: [
        "Abra /generator para dados de pessoas, e-commerce, conteúdo, mídia, negócios e localização.",
        "Formatos de body de POST vs registro da API; a interface FA usa pacotes locais em persa.",
        "Gere até 1.000 registros no navegador; Criar API usa os limites de Temporária (500 / 64 KB).",
        "Seleções e resultados continuam durante a navegação na SPA (são limpos ao recarregar a página inteira).",
      ],
    },
    "2026-09-16-temporary": {
      title: "API temporária",
      teaser: "Seu JSON, URL de curta duração",
      hint: "/temporary — cole o JSON e receba um link REST público",
      summary:
        "Cole o seu próprio JSON e receba uma URL REST pública de curta duração — sem cadastro, até 5 APIs ativas por navegador.",
      details: [
        "Crie em /temporary: escolha uma duração (1h, 6h, 12h ou 24h) e publique.",
        "Chame a URL pública /api/t/… com GET, POST, PATCH e DELETE comuns.",
        "Até 5 APIs ativas por navegador; até 20 criações por IP por hora.",
        "Trate o link como uma senha — quem tiver o link pode ler e alterar os dados até expirar.",
      ],
    },
    "2026-09-15-preview": {
      title: "Preview",
      teaser: "Interfaces de exemplo para cada recurso",
      hint: "/preview/users — teste criar, editar e excluir no navegador",
      summary:
        "Interfaces de exemplo ao vivo para Usuários, Posts, Auth e todos os recursos — crie, edite e exclua direto na API real.",
      details: [
        "Cada página de docs de recurso tem um botão Preview que abre um mini-app em cima dos endpoints reais.",
        "Liste, busque, pagine, crie, edite e exclua linhas — mesmo banco compartilhado de demo que todo mundo.",
        "O preview de Auth inclui um formulário de login funcional (a senha é sempre password) e GET /me com o token.",
        "Use o seletor de idioma no topo para carregar dados de exemplo em persa quando quiser.",
      ],
    },
    "2026-09-14-lang-fa": {
      title: "Dados em persa (?lang=fa)",
      teaser: "Dados de exemplo em persa",
      hint: "/api/users?lang=fa — adicione lang=fa a qualquer query para texto em persa",
      summary:
        "Receba nomes, usuários, telefones e textos de exemplo iranianos adicionando ?lang=fa a qualquer endpoint.",
      details: [
        "Inglês continua sendo o padrão. Apenas o query param lang=fa troca o texto — sem cookie ou Accept-Language.",
        "Respostas em FA incluem Content-Language: fa e um objeto font apontando para Vazirmatn na renderização.",
        "Funciona em rotas de listagem e detalhe, além de login com usernames em persa.",
        "Escolher فارسی no topo adiciona lang=fa no Playground.",
      ],
    },
    "2026-09-12-playground": {
      title: "Playground",
      teaser: "Chame APIs direto no navegador",
      hint: "/playground — envie requisições e inspecione o JSON",
      summary:
        "Chame endpoints ativos no navegador, teste sucesso ou falha no login e inspecione respostas JSON.",
      details: [
        "Escolha um recurso e ação, edite query params ou body JSON e envie a requisição.",
        "O login do Auth tem atalhos de senha Correta / Incorreta para testar 200 vs 401 rapidinho.",
        "As respostas mostram status, JSON fácil de ler e paginação quando a rota retorna.",
        "A UI da requisição e as últimas respostas ficam guardadas por recurso na navegação da SPA (recarregar a página limpa).",
      ],
    },
    "2026-09-10-auth": {
      title: "Auth fictício",
      teaser: "Login e tokens Bearer",
      hint: "/api/auth/login — a senha é sempre password",
      summary:
        "Faça POST em /api/auth/login com qualquer usuário inicial e senha → receba um token Bearer para o /me.",
      details: [
        "Todo usuário inicial compartilha a senha de mock: password.",
        "Login válido retorna um token Bearer fictício e um objeto user (id, name, username, email, role).",
        "Senha errada ou usuário inexistente retorna 401 com um payload de erro claro.",
        "Envie Authorization: Bearer <token> para GET /api/auth/me ler o usuário atual.",
      ],
    },
    "2026-09-08-resources": {
      title: "Recursos REST ativos",
      teaser: "Usuários, posts e mais — CRUD completo",
      hint: "/docs#resources — lista de APIs ativas",
      summary:
        "Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications e Countries — CRUD completo com paginação.",
      details: [
        "Formato padrão de lista: { data, pagination } com page, limit, total e totalPages.",
        "Suporte a query params de busca, ordenação, filtros, delay artificial e status de erro forçado.",
        "Banco compartilhado de produção reseta todo dia — ótimo para demos, não para armazenamento permanente.",
        "Catálogo legível por máquina em /openapi.json para Postman, Swagger e ferramentas de IA.",
      ],
    },
  },
  catalog: {
    auth: {
      title: "Auth",
      summary:
        "Login fictício com usuário/senha. Credenciais válidas retornam um token Bearer; inválidas retornam 401.",
    },
    users: {
      title: "Users",
      summary: "CRUD de usuários fictícios com busca, filtros por perfil e paginação.",
    },
    posts: {
      title: "Posts",
      summary: "Posts estilo blog ligados a usuários, com tags e flags de publicação.",
    },
    comments: {
      title: "Comments",
      summary: "Comentários em posts — nome, e-mail e conteúdo.",
    },
    albums: {
      title: "Albums",
      summary: "Álbuns de fotos ligados a usuários. Fotos referenciam albumId.",
    },
    photos: {
      title: "Photos",
      summary: "Fotos de álbum com url e thumbnailUrl.",
    },
    todos: {
      title: "Todos",
      summary: "Tarefas simples com flag de concluída, ligadas a usuários.",
    },
    products: {
      title: "Products",
      summary: "Itens de catálogo com preço, estoque, categoria e imageUrl.",
    },
    notifications: {
      title: "Notifications",
      summary: "Notificações de usuário com tipo e flags de lida.",
    },
    countries: {
      title: "Countries",
      summary: "Registros de países com código ISO, região, população e bandeira.",
    },
  },
};

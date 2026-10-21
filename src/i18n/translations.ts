/**
 * SavePrompt i18n translations module
 * Supports: en, es, pt, de, fr, ja, zh
 */

export type SupportedLang = 'en' | 'es' | 'pt' | 'de' | 'fr' | 'ja' | 'zh';

export interface Translations {
  meta: {
    title: string;
    description: string;
    ogImage: string;
  };
  nav: {
    home: string;
    language: string;
    theme: string;
    install: string;
    support: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  prompt: {
    searchPlaceholder: string;
    addNew: string;
    editPrompt: string;
    deletePrompt: string;
    copyPrompt: string;
    copied: string;
    noPrompts: string;
    noResults: string;
    titleLabel: string;
    contentLabel: string;
    tagsLabel: string;
    categoryLabel: string;
    save: string;
    cancel: string;
    confirmDelete: string;
    importExport: string;
    importBtn: string;
    exportBtn: string;
    allCategories: string;
    uncategorized: string;
    tagPlaceholder: string;
  };
  footer: {
    tagline: string;
    privacy: string;
    support: string;
  };
  seo: {
    howToTitle: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    faq1q: string;
    faq1a: string;
    faq2q: string;
    faq2a: string;
    faq3q: string;
    faq3a: string;
    faq4q: string;
    faq4a: string;
  };
}

const en: Translations = {
  meta: {
    title: 'SavePrompt — Save, Organize & Reuse AI Prompts Offline',
    description: 'A free, private, offline-first PWA to save, tag, search, and organize your AI prompts. No account needed — all data stays on your device.',
    ogImage: '/og-image.png',
  },
  nav: {
    home: 'SavePrompt',
    language: 'Language',
    theme: 'Theme',
    install: 'Install App',
    support: 'Support',
  },
  hero: {
    title: 'Save & Organize Your AI Prompts',
    subtitle: 'A free, private, offline-first tool to save, tag, and reuse your best AI prompts. No sign-up required.',
  },
  prompt: {
    searchPlaceholder: 'Search prompts...',
    addNew: 'New Prompt',
    editPrompt: 'Edit Prompt',
    deletePrompt: 'Delete',
    copyPrompt: 'Copy',
    copied: 'Copied!',
    noPrompts: 'No prompts saved yet. Create your first one!',
    noResults: 'No prompts match your search.',
    titleLabel: 'Title',
    contentLabel: 'Prompt Content',
    tagsLabel: 'Tags',
    categoryLabel: 'Category',
    save: 'Save',
    cancel: 'Cancel',
    confirmDelete: 'Are you sure you want to delete this prompt?',
    importExport: 'Import / Export',
    importBtn: 'Import',
    exportBtn: 'Export',
    allCategories: 'All Categories',
    uncategorized: 'Uncategorized',
    tagPlaceholder: 'Add tags (comma separated)',
  },
  footer: {
    tagline: 'Made with ♥ for the AI community',
    privacy: '100% Private — All data stays on your device',
    support: 'Support on Ko-fi',
  },
  seo: {
    howToTitle: 'How to Save and Organize AI Prompts with SavePrompt',
    step1: 'Open SavePrompt in your browser — no sign-up or download required.',
    step2: 'Click "New Prompt" to create a prompt. Add a title, content, tags, and category.',
    step3: 'Use the search bar or filter by tags and categories to quickly find your saved prompts.',
    step4: 'Click "Copy" to copy any prompt to your clipboard and paste it into your favorite AI tool.',
    faq1q: 'Is SavePrompt free?',
    faq1a: 'Yes, SavePrompt is completely free and open source. There are no hidden fees, subscriptions, or premium tiers.',
    faq2q: 'Does SavePrompt store my data on a server?',
    faq2a: 'No. All your prompts are stored locally in your browser using LocalStorage. No data is ever sent to any server. Your prompts are 100% private.',
    faq3q: 'Can I use SavePrompt offline?',
    faq3a: 'Yes! SavePrompt is a Progressive Web App (PWA). Once loaded, it works fully offline. You can even install it as an app on your phone or desktop.',
    faq4q: 'How do I back up my prompts?',
    faq4a: 'Use the Export feature to download all your prompts as a JSON file. You can import them back anytime using the Import feature.',
  },
};

const es: Translations = {
  meta: {
    title: 'SavePrompt — Guarda, Organiza y Reutiliza Prompts de IA Sin Conexión',
    description: 'Una PWA gratuita, privada y offline para guardar, etiquetar, buscar y organizar tus prompts de IA. Sin cuenta necesaria — todos los datos permanecen en tu dispositivo.',
    ogImage: '/og-image.png',
  },
  nav: {
    home: 'SavePrompt',
    language: 'Idioma',
    theme: 'Tema',
    install: 'Instalar App',
    support: 'Apoyar',
  },
  hero: {
    title: 'Guarda y Organiza tus Prompts de IA',
    subtitle: 'Una herramienta gratuita, privada y offline para guardar, etiquetar y reutilizar tus mejores prompts de IA. Sin registro.',
  },
  prompt: {
    searchPlaceholder: 'Buscar prompts...',
    addNew: 'Nuevo Prompt',
    editPrompt: 'Editar Prompt',
    deletePrompt: 'Eliminar',
    copyPrompt: 'Copiar',
    copied: '¡Copiado!',
    noPrompts: 'Aún no hay prompts guardados. ¡Crea el primero!',
    noResults: 'Ningún prompt coincide con tu búsqueda.',
    titleLabel: 'Título',
    contentLabel: 'Contenido del Prompt',
    tagsLabel: 'Etiquetas',
    categoryLabel: 'Categoría',
    save: 'Guardar',
    cancel: 'Cancelar',
    confirmDelete: '¿Estás seguro de que quieres eliminar este prompt?',
    importExport: 'Importar / Exportar',
    importBtn: 'Importar',
    exportBtn: 'Exportar',
    allCategories: 'Todas las Categorías',
    uncategorized: 'Sin categoría',
    tagPlaceholder: 'Añadir etiquetas (separadas por comas)',
  },
  footer: {
    tagline: 'Hecho con ♥ para la comunidad de IA',
    privacy: '100% Privado — Todos los datos permanecen en tu dispositivo',
    support: 'Apoyar en Ko-fi',
  },
  seo: {
    howToTitle: 'Cómo Guardar y Organizar Prompts de IA con SavePrompt',
    step1: 'Abre SavePrompt en tu navegador — sin registro ni descarga necesarios.',
    step2: 'Haz clic en "Nuevo Prompt" para crear un prompt. Añade un título, contenido, etiquetas y categoría.',
    step3: 'Usa la barra de búsqueda o filtra por etiquetas y categorías para encontrar rápidamente tus prompts guardados.',
    step4: 'Haz clic en "Copiar" para copiar cualquier prompt al portapapeles y pegarlo en tu herramienta de IA favorita.',
    faq1q: '¿Es SavePrompt gratuito?',
    faq1a: 'Sí, SavePrompt es completamente gratuito y de código abierto. No hay tarifas ocultas, suscripciones ni niveles premium.',
    faq2q: '¿SavePrompt almacena mis datos en un servidor?',
    faq2a: 'No. Todos tus prompts se almacenan localmente en tu navegador usando LocalStorage. Nunca se envían datos a ningún servidor. Tus prompts son 100% privados.',
    faq3q: '¿Puedo usar SavePrompt sin conexión?',
    faq3a: '¡Sí! SavePrompt es una Aplicación Web Progresiva (PWA). Una vez cargada, funciona completamente sin conexión. Incluso puedes instalarla como una app en tu teléfono o escritorio.',
    faq4q: '¿Cómo hago una copia de seguridad de mis prompts?',
    faq4a: 'Usa la función de Exportar para descargar todos tus prompts como un archivo JSON. Puedes importarlos de nuevo en cualquier momento usando la función de Importar.',
  },
};

const pt: Translations = {
  meta: {
    title: 'SavePrompt — Salve, Organize e Reutilize Prompts de IA Offline',
    description: 'Um PWA gratuito, privado e offline para salvar, marcar, buscar e organizar seus prompts de IA. Sem necessidade de conta — todos os dados ficam no seu dispositivo.',
    ogImage: '/og-image.png',
  },
  nav: {
    home: 'SavePrompt',
    language: 'Idioma',
    theme: 'Tema',
    install: 'Instalar App',
    support: 'Apoiar',
  },
  hero: {
    title: 'Salve e Organize seus Prompts de IA',
    subtitle: 'Uma ferramenta gratuita, privada e offline para salvar, marcar e reutilizar seus melhores prompts de IA. Sem necessidade de cadastro.',
  },
  prompt: {
    searchPlaceholder: 'Buscar prompts...',
    addNew: 'Novo Prompt',
    editPrompt: 'Editar Prompt',
    deletePrompt: 'Excluir',
    copyPrompt: 'Copiar',
    copied: 'Copiado!',
    noPrompts: 'Nenhum prompt salvo ainda. Crie o primeiro!',
    noResults: 'Nenhum prompt corresponde à sua busca.',
    titleLabel: 'Título',
    contentLabel: 'Conteúdo do Prompt',
    tagsLabel: 'Tags',
    categoryLabel: 'Categoria',
    save: 'Salvar',
    cancel: 'Cancelar',
    confirmDelete: 'Tem certeza de que deseja excluir este prompt?',
    importExport: 'Importar / Exportar',
    importBtn: 'Importar',
    exportBtn: 'Exportar',
    allCategories: 'Todas as Categorias',
    uncategorized: 'Sem categoria',
    tagPlaceholder: 'Adicionar tags (separadas por vírgulas)',
  },
  footer: {
    tagline: 'Feito com ♥ para a comunidade de IA',
    privacy: '100% Privado — Todos os dados ficam no seu dispositivo',
    support: 'Apoiar no Ko-fi',
  },
  seo: {
    howToTitle: 'Como Salvar e Organizar Prompts de IA com o SavePrompt',
    step1: 'Abra o SavePrompt no seu navegador — sem cadastro ou download necessários.',
    step2: 'Clique em "Novo Prompt" para criar um prompt. Adicione um título, conteúdo, tags e categoria.',
    step3: 'Use a barra de busca ou filtre por tags e categorias para encontrar rapidamente seus prompts salvos.',
    step4: 'Clique em "Copiar" para copiar qualquer prompt para a área de transferência e colá-lo na sua ferramenta de IA favorita.',
    faq1q: 'O SavePrompt é gratuito?',
    faq1a: 'Sim, o SavePrompt é completamente gratuito e de código aberto. Não há taxas ocultas, assinaturas ou planos premium.',
    faq2q: 'O SavePrompt armazena meus dados em um servidor?',
    faq2a: 'Não. Todos os seus prompts são armazenados localmente no seu navegador usando LocalStorage. Nenhum dado é enviado para qualquer servidor. Seus prompts são 100% privados.',
    faq3q: 'Posso usar o SavePrompt offline?',
    faq3a: 'Sim! O SavePrompt é um Aplicativo Web Progressivo (PWA). Uma vez carregado, funciona totalmente offline. Você pode até instalá-lo como um app no seu celular ou desktop.',
    faq4q: 'Como faço backup dos meus prompts?',
    faq4a: 'Use o recurso de Exportar para baixar todos os seus prompts como um arquivo JSON. Você pode importá-los de volta a qualquer momento usando o recurso de Importar.',
  },
};

const de: Translations = {
  meta: {
    title: 'SavePrompt — KI-Prompts Speichern, Organisieren & Offline Wiederverwenden',
    description: 'Eine kostenlose, private, Offline-first PWA zum Speichern, Taggen, Suchen und Organisieren deiner KI-Prompts. Kein Konto nötig — alle Daten bleiben auf deinem Gerät.',
    ogImage: '/og-image.png',
  },
  nav: {
    home: 'SavePrompt',
    language: 'Sprache',
    theme: 'Design',
    install: 'App Installieren',
    support: 'Unterstützen',
  },
  hero: {
    title: 'Speichere & Organisiere deine KI-Prompts',
    subtitle: 'Ein kostenloses, privates Offline-Tool zum Speichern, Taggen und Wiederverwenden deiner besten KI-Prompts. Keine Registrierung erforderlich.',
  },
  prompt: {
    searchPlaceholder: 'Prompts suchen...',
    addNew: 'Neuer Prompt',
    editPrompt: 'Prompt Bearbeiten',
    deletePrompt: 'Löschen',
    copyPrompt: 'Kopieren',
    copied: 'Kopiert!',
    noPrompts: 'Noch keine Prompts gespeichert. Erstelle deinen ersten!',
    noResults: 'Keine Prompts stimmen mit deiner Suche überein.',
    titleLabel: 'Titel',
    contentLabel: 'Prompt-Inhalt',
    tagsLabel: 'Tags',
    categoryLabel: 'Kategorie',
    save: 'Speichern',
    cancel: 'Abbrechen',
    confirmDelete: 'Bist du sicher, dass du diesen Prompt löschen möchtest?',
    importExport: 'Importieren / Exportieren',
    importBtn: 'Importieren',
    exportBtn: 'Exportieren',
    allCategories: 'Alle Kategorien',
    uncategorized: 'Unkategorisiert',
    tagPlaceholder: 'Tags hinzufügen (kommagetrennt)',
  },
  footer: {
    tagline: 'Mit ♥ für die KI-Community gemacht',
    privacy: '100% Privat — Alle Daten bleiben auf deinem Gerät',
    support: 'Auf Ko-fi unterstützen',
  },
  seo: {
    howToTitle: 'So speicherst und organisierst du KI-Prompts mit SavePrompt',
    step1: 'Öffne SavePrompt in deinem Browser — keine Registrierung oder Download erforderlich.',
    step2: 'Klicke auf "Neuer Prompt", um einen Prompt zu erstellen. Füge einen Titel, Inhalt, Tags und eine Kategorie hinzu.',
    step3: 'Nutze die Suchleiste oder filtere nach Tags und Kategorien, um deine gespeicherten Prompts schnell zu finden.',
    step4: 'Klicke auf "Kopieren", um einen Prompt in die Zwischenablage zu kopieren und in dein bevorzugtes KI-Tool einzufügen.',
    faq1q: 'Ist SavePrompt kostenlos?',
    faq1a: 'Ja, SavePrompt ist vollständig kostenlos und Open Source. Es gibt keine versteckten Gebühren, Abonnements oder Premium-Stufen.',
    faq2q: 'Speichert SavePrompt meine Daten auf einem Server?',
    faq2a: 'Nein. Alle deine Prompts werden lokal in deinem Browser mit LocalStorage gespeichert. Es werden niemals Daten an einen Server gesendet. Deine Prompts sind 100% privat.',
    faq3q: 'Kann ich SavePrompt offline nutzen?',
    faq3a: 'Ja! SavePrompt ist eine Progressive Web App (PWA). Einmal geladen, funktioniert es vollständig offline. Du kannst es sogar als App auf deinem Handy oder Desktop installieren.',
    faq4q: 'Wie sichere ich meine Prompts?',
    faq4a: 'Nutze die Export-Funktion, um alle deine Prompts als JSON-Datei herunterzuladen. Du kannst sie jederzeit mit der Import-Funktion wieder importieren.',
  },
};

const fr: Translations = {
  meta: {
    title: 'SavePrompt — Sauvegardez, Organisez et Réutilisez vos Prompts IA Hors Ligne',
    description: 'Une PWA gratuite, privée et hors ligne pour sauvegarder, taguer, rechercher et organiser vos prompts IA. Aucun compte requis — toutes les données restent sur votre appareil.',
    ogImage: '/og-image.png',
  },
  nav: {
    home: 'SavePrompt',
    language: 'Langue',
    theme: 'Thème',
    install: 'Installer l\'App',
    support: 'Soutenir',
  },
  hero: {
    title: 'Sauvegardez et Organisez vos Prompts IA',
    subtitle: 'Un outil gratuit, privé et hors ligne pour sauvegarder, taguer et réutiliser vos meilleurs prompts IA. Aucune inscription requise.',
  },
  prompt: {
    searchPlaceholder: 'Rechercher des prompts...',
    addNew: 'Nouveau Prompt',
    editPrompt: 'Modifier le Prompt',
    deletePrompt: 'Supprimer',
    copyPrompt: 'Copier',
    copied: 'Copié !',
    noPrompts: 'Aucun prompt sauvegardé. Créez le premier !',
    noResults: 'Aucun prompt ne correspond à votre recherche.',
    titleLabel: 'Titre',
    contentLabel: 'Contenu du Prompt',
    tagsLabel: 'Tags',
    categoryLabel: 'Catégorie',
    save: 'Enregistrer',
    cancel: 'Annuler',
    confirmDelete: 'Êtes-vous sûr de vouloir supprimer ce prompt ?',
    importExport: 'Importer / Exporter',
    importBtn: 'Importer',
    exportBtn: 'Exporter',
    allCategories: 'Toutes les Catégories',
    uncategorized: 'Non catégorisé',
    tagPlaceholder: 'Ajouter des tags (séparés par des virgules)',
  },
  footer: {
    tagline: 'Fait avec ♥ pour la communauté IA',
    privacy: '100% Privé — Toutes les données restent sur votre appareil',
    support: 'Soutenir sur Ko-fi',
  },
  seo: {
    howToTitle: 'Comment Sauvegarder et Organiser vos Prompts IA avec SavePrompt',
    step1: 'Ouvrez SavePrompt dans votre navigateur — aucune inscription ni téléchargement requis.',
    step2: 'Cliquez sur "Nouveau Prompt" pour créer un prompt. Ajoutez un titre, du contenu, des tags et une catégorie.',
    step3: 'Utilisez la barre de recherche ou filtrez par tags et catégories pour retrouver rapidement vos prompts sauvegardés.',
    step4: 'Cliquez sur "Copier" pour copier un prompt dans le presse-papiers et le coller dans votre outil IA préféré.',
    faq1q: 'SavePrompt est-il gratuit ?',
    faq1a: 'Oui, SavePrompt est entièrement gratuit et open source. Il n\'y a pas de frais cachés, d\'abonnements ou de niveaux premium.',
    faq2q: 'SavePrompt stocke-t-il mes données sur un serveur ?',
    faq2a: 'Non. Tous vos prompts sont stockés localement dans votre navigateur via LocalStorage. Aucune donnée n\'est jamais envoyée à un serveur. Vos prompts sont 100% privés.',
    faq3q: 'Puis-je utiliser SavePrompt hors ligne ?',
    faq3a: 'Oui ! SavePrompt est une Application Web Progressive (PWA). Une fois chargée, elle fonctionne entièrement hors ligne. Vous pouvez même l\'installer comme une app sur votre téléphone ou votre ordinateur.',
    faq4q: 'Comment sauvegarder mes prompts ?',
    faq4a: 'Utilisez la fonction d\'Export pour télécharger tous vos prompts sous forme de fichier JSON. Vous pouvez les réimporter à tout moment grâce à la fonction d\'Import.',
  },
};

const ja: Translations = {
  meta: {
    title: 'SavePrompt — AIプロンプトをオフラインで保存・整理・再利用',
    description: '無料でプライベートなオフラインファーストPWA。AIプロンプトを保存、タグ付け、検索、整理できます。アカウント不要 — すべてのデータはお使いのデバイスに保存されます。',
    ogImage: '/og-image.png',
  },
  nav: {
    home: 'SavePrompt',
    language: '言語',
    theme: 'テーマ',
    install: 'アプリをインストール',
    support: 'サポート',
  },
  hero: {
    title: 'AIプロンプトを保存＆整理',
    subtitle: 'AIプロンプトを保存、タグ付け、再利用するための無料でプライベートなオフラインツール。登録不要。',
  },
  prompt: {
    searchPlaceholder: 'プロンプトを検索...',
    addNew: '新規プロンプト',
    editPrompt: 'プロンプトを編集',
    deletePrompt: '削除',
    copyPrompt: 'コピー',
    copied: 'コピーしました！',
    noPrompts: 'まだプロンプトがありません。最初のプロンプトを作成しましょう！',
    noResults: '検索に一致するプロンプトがありません。',
    titleLabel: 'タイトル',
    contentLabel: 'プロンプト内容',
    tagsLabel: 'タグ',
    categoryLabel: 'カテゴリ',
    save: '保存',
    cancel: 'キャンセル',
    confirmDelete: 'このプロンプトを削除してもよろしいですか？',
    importExport: 'インポート / エクスポート',
    importBtn: 'インポート',
    exportBtn: 'エクスポート',
    allCategories: 'すべてのカテゴリ',
    uncategorized: '未分類',
    tagPlaceholder: 'タグを追加（カンマ区切り）',
  },
  footer: {
    tagline: 'AIコミュニティのために♥を込めて作りました',
    privacy: '100%プライベート — すべてのデータはお使いのデバイスに保存されます',
    support: 'Ko-fiでサポート',
  },
  seo: {
    howToTitle: 'SavePromptでAIプロンプトを保存・整理する方法',
    step1: 'ブラウザでSavePromptを開きます — 登録やダウンロードは不要です。',
    step2: '「新規プロンプト」をクリックしてプロンプトを作成します。タイトル、内容、タグ、カテゴリを追加します。',
    step3: '検索バーを使用するか、タグやカテゴリでフィルタリングして、保存したプロンプトをすばやく見つけます。',
    step4: '「コピー」をクリックしてプロンプトをクリップボードにコピーし、お気に入りのAIツールに貼り付けます。',
    faq1q: 'SavePromptは無料ですか？',
    faq1a: 'はい、SavePromptは完全に無料でオープンソースです。隠れた料金、サブスクリプション、プレミアムプランはありません。',
    faq2q: 'SavePromptはサーバーにデータを保存しますか？',
    faq2a: 'いいえ。すべてのプロンプトはLocalStorageを使用してブラウザにローカル保存されます。データがサーバーに送信されることはありません。プロンプトは100%プライベートです。',
    faq3q: 'SavePromptをオフラインで使用できますか？',
    faq3a: 'はい！SavePromptはプログレッシブウェブアプリ（PWA）です。一度読み込めば、完全にオフラインで動作します。スマートフォンやデスクトップにアプリとしてインストールすることもできます。',
    faq4q: 'プロンプトのバックアップはどうすればいいですか？',
    faq4a: 'エクスポート機能を使用して、すべてのプロンプトをJSONファイルとしてダウンロードします。インポート機能を使用していつでも再インポートできます。',
  },
};

const zh: Translations = {
  meta: {
    title: 'SavePrompt — 离线保存、整理和复用AI提示词',
    description: '一款免费、私密、离线优先的PWA，用于保存、标记、搜索和整理您的AI提示词。无需注册 — 所有数据都保存在您的设备上。',
    ogImage: '/og-image.png',
  },
  nav: {
    home: 'SavePrompt',
    language: '语言',
    theme: '主题',
    install: '安装应用',
    support: '支持',
  },
  hero: {
    title: '保存和整理您的AI提示词',
    subtitle: '一款免费、私密的离线工具，用于保存、标记和复用您最好的AI提示词。无需注册。',
  },
  prompt: {
    searchPlaceholder: '搜索提示词...',
    addNew: '新建提示词',
    editPrompt: '编辑提示词',
    deletePrompt: '删除',
    copyPrompt: '复制',
    copied: '已复制！',
    noPrompts: '还没有保存的提示词。创建您的第一个吧！',
    noResults: '没有匹配您搜索的提示词。',
    titleLabel: '标题',
    contentLabel: '提示词内容',
    tagsLabel: '标签',
    categoryLabel: '分类',
    save: '保存',
    cancel: '取消',
    confirmDelete: '您确定要删除这个提示词吗？',
    importExport: '导入 / 导出',
    importBtn: '导入',
    exportBtn: '导出',
    allCategories: '所有分类',
    uncategorized: '未分类',
    tagPlaceholder: '添加标签（逗号分隔）',
  },
  footer: {
    tagline: '为AI社区用♥制作',
    privacy: '100%私密 — 所有数据都保存在您的设备上',
    support: '在Ko-fi上支持',
  },
  seo: {
    howToTitle: '如何使用SavePrompt保存和整理AI提示词',
    step1: '在浏览器中打开SavePrompt — 无需注册或下载。',
    step2: '点击"新建提示词"创建提示词。添加标题、内容、标签和分类。',
    step3: '使用搜索栏或按标签和分类筛选，快速找到保存的提示词。',
    step4: '点击"复制"将提示词复制到剪贴板，然后粘贴到您喜欢的AI工具中。',
    faq1q: 'SavePrompt是免费的吗？',
    faq1a: '是的，SavePrompt完全免费且开源。没有隐藏费用、订阅或高级版本。',
    faq2q: 'SavePrompt会将我的数据存储在服务器上吗？',
    faq2a: '不会。您的所有提示词都使用LocalStorage存储在浏览器本地。数据不会被发送到任何服务器。您的提示词100%私密。',
    faq3q: '我可以离线使用SavePrompt吗？',
    faq3a: '可以！SavePrompt是一个渐进式Web应用（PWA）。一旦加载完成，它可以完全离线工作。您甚至可以将其作为应用安装到手机或桌面上。',
    faq4q: '如何备份我的提示词？',
    faq4a: '使用导出功能将所有提示词下载为JSON文件。您可以随时使用导入功能重新导入它们。',
  },
};

const translations: Record<SupportedLang, Translations> = {
  en, es, pt, de, fr, ja, zh,
};

export const supportedLanguages: { code: SupportedLang; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
];

export function getTranslations(lang: SupportedLang): Translations {
  return translations[lang] || translations.en;
}

export function getLangPath(lang: SupportedLang): string {
  return lang === 'en' ? '/' : `/${lang}/`;
}

export default translations;

import en from './en.json';
import es from './es.json';
import pt from './pt.json';
import de from './de.json';
import fr from './fr.json';
import ja from './ja.json';
import zh from './zh.json';

// ─── Type Definitions ────────────────────────────────────────────────────────

export interface MetaTranslations {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export interface NavTranslations {
  home: string;
  support: string;
  installApp: string;
  lightMode: string;
  darkMode: string;
  language: string;
}

export interface AppTranslations {
  heading: string;
  subheading: string;
  promptPlaceholder: string;
  tagPlaceholder: string;
  saveButton: string;
  searchPlaceholder: string;
  copyButton: string;
  copiedButton: string;
  deleteButton: string;
  exportButton: string;
  importButton: string;
  emptyState: string;
  noResults: string;
  promptSaved: string;
  promptDeleted: string;
  exportSuccess: string;
  importSuccess: string;
  confirmDelete: string;
  allTags: string;
  charactersCount: string;
}

export interface PwaTranslations {
  installTitle: string;
  installDescription: string;
  installButton: string;
  dismissButton: string;
}

export interface FooterTranslations {
  tagline: string;
  privacy: string;
  support: string;
}

export interface SeoTranslations {
  faqTitle: string;
  faq1q: string;
  faq1a: string;
  faq2q: string;
  faq2a: string;
  faq3q: string;
  faq3a: string;
  faq4q: string;
  faq4a: string;
  howToTitle: string;
  howToStep1: string;
  howToStep2: string;
  howToStep3: string;
  howToStep4: string;
}

export interface Translations {
  meta: MetaTranslations;
  nav: NavTranslations;
  app: AppTranslations;
  pwa: PwaTranslations;
  footer: FooterTranslations;
  seo: SeoTranslations;
}

export interface Language {
  code: string;
  badge: string;
  label: string;
}

// ─── Supported Languages ─────────────────────────────────────────────────────

export const languages: Language[] = [
  { code: 'en', badge: 'US', label: 'English' },
  { code: 'es', badge: 'ES', label: 'Español' },
  { code: 'pt', badge: 'BR', label: 'Português' },
  { code: 'de', badge: 'DE', label: 'Deutsch' },
  { code: 'fr', badge: 'FR', label: 'Français' },
  { code: 'ja', badge: 'JP', label: '日本語' },
  { code: 'zh', badge: 'CN', label: '中文' },
];

/** All supported language codes */
export type LanguageCode = 'en' | 'es' | 'pt' | 'de' | 'fr' | 'ja' | 'zh';

/** The default language code */
export const defaultLanguage: LanguageCode = 'en';

// ─── Translation Map ─────────────────────────────────────────────────────────

const translationMap: Record<LanguageCode, Translations> = {
  en: en as Translations,
  es: es as Translations,
  pt: pt as Translations,
  de: de as Translations,
  fr: fr as Translations,
  ja: ja as Translations,
  zh: zh as Translations,
};

// ─── Utility Functions ───────────────────────────────────────────────────────

/**
 * Returns the translation object for the given language code.
 * Falls back to English if the language code is not supported.
 */
export function getTranslations(lang: string): Translations {
  const code = lang as LanguageCode;
  return translationMap[code] ?? translationMap[defaultLanguage];
}

/**
 * Returns the correct URL path for a given language and path.
 * English (default) maps to the root; other languages get a subpath prefix.
 *
 * @example
 * getLocalizedPath('en', '/')       → '/'
 * getLocalizedPath('es', '/')       → '/es/'
 * getLocalizedPath('en', '/support') → '/support'
 * getLocalizedPath('fr', '/support') → '/fr/support'
 */
export function getLocalizedPath(lang: string, path: string): string {
  // Normalize: ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // English uses root paths (no prefix)
  if (lang === defaultLanguage) {
    return normalizedPath;
  }

  // Other languages get a /<lang> prefix
  // Avoid double slashes: if path is just '/', return '/<lang>/'
  if (normalizedPath === '/') {
    return `/${lang}/`;
  }

  return `/${lang}${normalizedPath}`;
}

/**
 * Extracts the language code from a URL pathname.
 * Returns the default language if no language prefix is found.
 *
 * @example
 * getLanguageFromPath('/')          → 'en'
 * getLanguageFromPath('/es/')       → 'es'
 * getLanguageFromPath('/fr/support') → 'fr'
 * getLanguageFromPath('/about')     → 'en'
 */
export function getLanguageFromPath(pathname: string): LanguageCode {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return defaultLanguage;

  const firstSegment = segments[0] as LanguageCode;
  if (translationMap[firstSegment]) {
    return firstSegment;
  }

  return defaultLanguage;
}

/**
 * Checks if a given language code is supported.
 */
export function isValidLanguage(lang: string): lang is LanguageCode {
  return lang in translationMap;
}

// ─── Default Export ──────────────────────────────────────────────────────────

export default en as Translations;

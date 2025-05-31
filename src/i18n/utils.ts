import enTranslations from './en.json';
import esTranslations from './es.json';

// Define the structure of your translation files.
// This helps with type safety if you want to ensure both files have the same keys.
// type TranslationKeys = keyof typeof enTranslations; // Original type
type TranslationKeys = string; // More permissive type to allow dot notation
type Translations = typeof enTranslations;

const translations: Record<string, Translations> = {
  en: enTranslations,
  es: esTranslations,
};

export const defaultLang = 'en';
export const supportedLangs = ['en', 'es'];

/**
 * Determines the language from the URL path.
 * Falls back to the default language if the locale is not found or not supported.
 * e.g., /es/about -> es
 * e.g., /about -> en (if defaultLang is 'en')
 */
export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split('/');
  if (supportedLangs.includes(lang)) {
    return lang;
  }
  return defaultLang;
}

/**
 * Returns a translation function for the given language.
 * The returned function `t` will look up a string by its key.
 * If a translation is not found in the current language, it falls back to the default language.
 *
 * @param lang The desired language code (e.g., 'en', 'es').
 * @returns A function `t(key: TranslationKeys)` that returns the translated string.
 */
export function useTranslations(lang: string | undefined) {
  const currentLang = lang && translations[lang] ? lang : defaultLang;
  const langTranslations = translations[currentLang];
  const defaultLangTranslations = translations[defaultLang];

  return function t(key: TranslationKeys): string {
    // Assuming all keys are flat for simplicity, matching the provided JSON structure.
    // For nested keys like 'nav.home', you'd need a more complex lookup function.
    // The current JSON structure is flat at the first level (e.g., "nav", "projects")
    // but then nested (e.g., nav.home).
    // This basic implementation will need adjustment if deep nesting is used directly with `t()`.

    // A simple way to handle dot-notation keys for one level of nesting:
    const keys = key.split('.');
    let translationSet;
    let translation;

    if (keys.length === 2) {
      translationSet = (langTranslations as any)[keys[0]];
      if (translationSet) {
        translation = translationSet[keys[1]];
      }
      if (!translation) {
        // Fallback to default language
        translationSet = (defaultLangTranslations as any)[keys[0]];
        if (translationSet) {
          translation = translationSet[keys[1]];
        }
      }
    } else {
      // For top-level keys (if any) or direct keys
      translation = (langTranslations as any)[key] || (defaultLangTranslations as any)[key];
    }

    return translation || String(key); // Return key itself if no translation found anywhere
  };
}

// Helper to determine if the default language should be shown in the URL
// For now, we assume the default language (en) does not have a prefix.
export const showDefaultLangInUrl = false;

/**
 * Creates a translated path.
 * If showDefaultLangInUrl is false and the target language is the default language,
 * it returns the path without the language prefix.
 * Otherwise, it prepends the language code.
 *
 * @param path The base path (e.g., '/about').
 * @param targetLang The language to translate the path for.
 * @returns The translated path (e.g., '/about' or '/es/about').
 */
export function useTranslatedPath(targetLang: string) {
    return function translatePath(path: string): string {
        const langPrefix = `/${targetLang}`;
        // Ensure path starts with a slash
        const normalizedPath = path.startsWith('/') ? path : `/${path}`;

        if (!showDefaultLangInUrl && targetLang === defaultLang) {
            // For default lang, return path without prefix, ensuring it's not just "/" or empty
            return normalizedPath === '/' ? '/' : normalizedPath;
        }
        // For non-default lang, or if showing default lang in URL, prefix with lang
        // Avoid double slashes if path is "/"
        return normalizedPath === '/' ? langPrefix : `${langPrefix}${normalizedPath}`;
    };
}

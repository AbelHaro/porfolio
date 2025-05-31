// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';
// Corrected import path
import { supportedLangs, defaultLang } from './i18n/utils';

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, redirect, locals } = context;

  // Use imported values
  const siteSupportedLocales = supportedLangs; // e.g. ['en', 'es']
  const siteDefaultLocale = defaultLang; // e.g. 'en'

  // Values from context.locals (populated by Astro's built-in i18n middleware)
  // @ts-ignore - locals.currentLocale might not be on default Locals type
  const currentPathLocale = locals.currentLocale as string | undefined; // Locale based on current URL path
  // @ts-ignore - locals.preferredLocale might not be on default Locals type
  const browserPreferredLocale = locals.preferredLocale as string | undefined; // Browser's preference matched against siteSupportedLocales

  // Only redirect if:
  // 1. A preferred locale is detected from the browser (and is one we support).
  // 2. The preferred locale is not the default language.
  // 3. The current URL is for the default locale's content.
  //    Astro.locals.currentLocale should be the siteDefaultLocale in this case.

  if (
    browserPreferredLocale &&
    browserPreferredLocale !== siteDefaultLocale &&
    currentPathLocale === siteDefaultLocale && // Current page is effectively the default language version
    siteSupportedLocales.includes(browserPreferredLocale)
  ) {
    let newPathname = url.pathname;
    if (newPathname === '/') {
      newPathname = ''; // Avoids double slash like //es// when prefixing
    }

    let newUrl = `/${browserPreferredLocale}${newPathname}`; // Corrected variable name

    // Ensure trailing slash for root, if original had it or if it's the bare domain
    if (url.pathname === '/' && !newUrl.endsWith('/')) {
        newUrl += '/';
    }

    // Append search parameters and hash
    if (url.search) {
      newUrl += url.search;
    }
    if (url.hash) {
      newUrl += url.hash;
    }

    // Perform the redirect
    return redirect(newUrl, 302); // Using 302 for "found" / temporary redirect
  }

  // No redirection needed, continue to the next middleware or page
  return next();
});

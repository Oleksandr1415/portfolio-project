import { ui, defaultLang } from './ui';

type Ui = (typeof ui)['en'];

// string Path -> Dot Path.
type DotPaths<T, Prefix extends string = ''> = T extends string
  ? Prefix
  : {
      [K in keyof T & string]: DotPaths<T[K], Prefix extends '' ? K : `${Prefix}.${K}`>;
    }[keyof T & string];

export type TranslationKey = DotPaths<Ui>;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function resolvePath(obj: any, path: string): string {
  return path.split('.').reduce((acc, key) => acc?.[key], obj) ?? path;
}

export function useTranslations(lang: keyof typeof ui) {
  return ui[lang];
}

export function getHomeHashLink(lang: keyof typeof ui, hash: string) {
  const fragment = hash.startsWith('#') ? hash : `#${hash}`;
  return `/${lang}/${fragment}`;
}

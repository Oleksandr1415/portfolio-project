export type Medal = {
  i18nExcerptKey: keyof typeof import('@/i18n/ui').ui.en;
  value: string;
};

export const medals: Medal[] = [
  {
    i18nExcerptKey: 'about.tools',
    value: '20+',
  },
  {
    i18nExcerptKey: 'about.languages',
    value: '4',
  },
  {
    i18nExcerptKey: 'about.degrees',
    value: '2(+1)',
  },
  {
    i18nExcerptKey: 'about.training',
    value: '1+',
  },
];

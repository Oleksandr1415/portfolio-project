// mock/menu.ts
export interface MenuElement {
  href: string;
  i18nKey: keyof typeof import('@/i18n/ui').ui.en;
  linkClass?: string;
}

export const menuElements: MenuElement[] = [
  { href: '#about', i18nKey: 'nav.about' },
  { href: '#skills', i18nKey: 'nav.skills' },
  { href: '#roadmap', i18nKey: 'nav.roadmap' },
  { href: '#contact', i18nKey: 'nav.contact' },
];

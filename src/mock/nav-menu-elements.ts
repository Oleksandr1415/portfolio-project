export interface MenuElement {
  href: string;
  linkClass?: string;
  title: string;
}

export const menuElements: MenuElement[] = [
  {
    href: '#about',
    title: 'About me',
  },
  {
    href: '#skills',
    title: 'Skills',
  },
  {
    href: '#roadmap',
    title: 'Roadmap',
  },
  // {
  //   href: '#hobbies',
  //   title: 'Hobbies',
  // },
  {
    href: '#contact',
    title: 'Contact',
  },
];

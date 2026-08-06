# Project Description

Hello!

I am happy to introduce you to my [_**Portfolio project**_](https://portfolio-project-gilt-kappa.vercel.app/) <-- Link to the site :).

## 🚀 Tech Stack

- [Astro](https://astro.build/) — static site framework
- [React](https://react.dev/) — interactive UI components
- npm — package management (**will change to pnpm**)
- ddev - Docker Environment

## Running the project

### Prerequisites

- [Docker](https://www.docker.com/) + [DDEV](https://ddev.com/get-started/) + some [code editor](https://code.visualstudio.com/) for comfort

### start the dev server

1. clone the [project](https://github.com/Oleksandr1415/portfolio-project.git) (https://github.com/Oleksandr1415/portfolio-project.git)

```bash
git clone https://github.com/Oleksandr1415/portfolio-project.git
cd portfolio-project
```

2. start the containers `ddev start `

3. run the dev server `ddev npm run dev`

The ddev will start the dev server under this link. (alternatively run: - _ddev describe_ -)  
https://portfolio-project.ddev.site:4322/

## 📁 Project Structure (~~In process~~)

```text
/
├── .ddev
│   └── config.yaml
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

- `src/pages/` — file-based routing, each `.astro` or `.md` file becomes a route
- `src/components/` — reusable Astro and React components
- `src/layouts/` — shared page layouts

## 🧞 Available Scripts

All the scripts can be run locally or INSIDE the virtual machine (Docker). Make sure you run commands where you actually want them.
If the dev server is run by ddev, and you want to add a package, you should definitely use `ddev npm install` instead of `npm install`

| Command           | Ddev Command           | Action                                 |
| ----------------- | ---------------------- | -------------------------------------- |
| `npm install`     | `ddev npm install`     | Install dependencies                   |
| `npm run dev`     | `ddev npm run dev`     | Start local dev server                 |
| `npm run build`   | `ddev npm run build`   | Build production site to `./dist/`     |
| `npm run preview` | `ddev npm run preview` | Preview build locally before deploying |

## 🌐 Deployment

This DEMO of the project is deployed on [Vercel](https://vercel.com/).

**URL:** https://portfolio-project-gilt-kappa.vercel.app/

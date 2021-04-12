<p align="center">
  <a href="https://www.kennyvh.com/"><img alt="netlify" src="https://img.shields.io/netlify/a1d39bd7-cb99-4836-84c7-faf67832905f"></a>
  <a href="https://github.com/hkennyv/kennyvh.com/actions?query=workflow%3ABuild"><img alt="build" src="https://img.shields.io/github/workflow/status/hkennyv/kennyvh.com/Build?label=build"></a>
  <a href="https://github.com/hkennyv/kennyvh.com/actions?query=workflow%3AFormat"><img alt="format" src="https://img.shields.io/github/workflow/status/hkennyv/kennyvh.com/Format?label=format"></a>
</p>

# kennyvh.com

## Overview

My personal site & blog :), made using my
[NextJS terminal theme port](https://github.com/hkennyv/next-theme-terminal) of
the popular [Terminal Hugo theme](https://github.com/panr/hugo-theme-terminal).

This repostiory was forked from the NextJS terminal theme port and may contain
some changes that aren't present in the [upstream](https://github.com/hkennyv/next-theme-terminal)
like a CMS or changes to certain routes' index pages. However, the majority of
the theme remains the same as the upstream.

The live site can be viewed here: <https://kennyvh.com>

## Usage

To get started, you'll need:

- [node.js](https://nodejs.org/en/download/) >= 12.0
- [yarn](https://yarnpkg.com/) >= 1.0
- [git](https://git-scm.com/)

### Cloning the repository

Clone the repository to your local machine using the following command:

```
git clone https://github.com/hkennyv/kennyvh.com.git
```

### Install dependencies

Install dependencies using `yarn`:

```
yarn install
```

### Running a dev server

You can see all the features the dev server includes [here](https://nextjs.org/docs).
Use the following command to start the dev server:

```
yarn dev
```

### Publishing the site

It's highly recommended to use [Netlify](https://www.netlify.com/) to host
this site due to their excellent support for Next.js (and it's free)!

### Deploying static pages (recommended)

You can export your application to static HTML, which can be served without
a node.js server required. This is preferred for this site:

```
yarn build && yarn export
```

This generates an `out/` directory that can be served by any static site page
host or CDN.

#### Deploying with a custom server

To deploy the site, you can use the following build command:

```
yarn build
```

This will build the application in the `.next/` folder. Then use the following
command to start a node.js server that serves both statically generated and
server-side generated pages:

```
yarn start
```

For more details on deployment, see the [Next.js docs](https://nextjs.org/docs/deployment).

### Keeping up to date with the theme

This site theme is inspired by [panr/hugo-theme-terminal](https://github.com/panr/hugo-theme-terminal).
I ported this theme (with permission, of course) to a React/Next.JS theme,
[hkennyv/next-theme-terminal](https://github.com/hkennyv/next-theme-terminal).

I try my best to keep the NextJS theme in sync with the hugo theme, so the
recommended way to keep your theme up to date is to add the theme repository
as another remote that you can merge into your site.

**Adding a new remote, `theme`**

```
git remote add theme git@github.com:hkennyv/next-theme-terminal.git
```

**Updating the theme**

```
git pull theme main
```

**NOTE:** If you've changed any of the theme files, there may be merge
conflicts you will need to resolve to move forward.

## License

Copyright © 2019-2020 Radosław Kozieł ([@panr](https://twitter.com/panr)) and Kenny Huynh ([@hkennyv](https://github.com/hkennyv)).

The theme is released under the MIT License. Check the [original theme license](https://github.com/hkennyv/next-theme-terminal/blob/master/LICENSE) for additional licensing information.

![Eva designs and builds things for the web.](https://raw.githubusercontent.com/evadecker/eva.town/main/public/og/default.png)

<div align="center">

![Vercel](https://vercelbadge.vercel.app/api/evadecker/eva.town) [![Playwright](https://github.com/evadecker/eva.town/actions/workflows/playwright.yml/badge.svg)](https://github.com/evadecker/eva.town/actions/workflows/playwright.yml) [![HTML5 Validation](https://github.com/evadecker/eva.town/actions/workflows/w3c.yml/badge.svg)](https://github.com/evadecker/eva.town/actions/workflows/w3c.yml) [![Check Links](https://github.com/evadecker/eva.town/actions/workflows/links.yml/badge.svg)](https://github.com/evadecker/eva.town/actions/workflows/links.yml) ![GitHub](https://img.shields.io/github/license/evadecker/eva.town) 

</div>

# Eva Decker

This is the source code for [eva.town](https://eva.town), designed, coded, and written by Eva—that's me! It's a place for me to share notes and learn in public. I try to update things regularly.

You're welcome to fork this site, use it as inspiration, and modify things for your own projects—just pls don't steal it or try to claim it as your own.

For information about the technology and tools behind the site, visit [eva.town/colophon](https://eva.town/colophon).

## Getting Started

To get started, run:

```bash
pnpm dev
```

If it's the first time running the repo you may need to run `pnpm i` to install packages.

Other scripts in `package.json` can also be run with `pnpm`.

## Notes To Self

Some shortcuts and workflows to remember.

### Dates

Frontmatter for content should include a required `datePublished` and an optional `dateModified` field. Dates should be ISO-formatted datetime strings and *include the time zone of publishing*, like this: `2023-09-26 03:47:00-04:00`.

It's important to include the time zone (EDT: `-04:00`, EST: `-05:00`) so that relative dates (like "4 days ago") can display correctly depending on a user's local time zone, and because I may not always write from the East Coast.

To insert dates in the frontmatter of Markdown files, use the [Insert Date String](https://marketplace.visualstudio.com/items?itemName=jsynowiec.vscode-insertdatestring) from VS Code and press `command` + `shift` + `I`.

> [!IMPORTANT]  
> Remember to update `dateModified` when revising articles! It's a mildly annoying manual step, yes, but it's easier (for now) than building something to handle setting dates automatically.

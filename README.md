![Eva designs and builds things for the web.](/public/og/default.png)

![Vercel](https://vercelbadge.vercel.app/api/evadecker/evadecker.com) [![Playwright](https://github.com/evadecker/evadecker.com/actions/workflows/playwright.yml/badge.svg)](https://github.com/evadecker/evadecker.com/actions/workflows/playwright.yml) [![HTML5 Validation](https://github.com/evadecker/evadecker.com/actions/workflows/w3c.yml/badge.svg)](https://github.com/evadecker/evadecker.com/actions/workflows/w3c.yml) ![GitHub](https://img.shields.io/github/license/evadecker/evadecker.com)

# Eva Decker

This is the source code for https://evadecker.com, designed, coded, and written by Eva—me! It's a place for me to share notes and learn in public. I try to update things regularly. This readme is mostly notes-to-self so I can remember little shortcuts and workflows.

For information about the technology and tools behind this site, visit [https://evadecker.com/colophon](https://evadecker.com/colophon).

## Notes to Self

### Dates

Frontmatter for content should include a `datePublished` and optional `dateModified` field including an ISO-formatted date string like this: `2023-09-26 03:47:00-04:00`. It's important to include the time zone (EDT: `-04:00`, EST: `-05:00`) so that relative dates (like "4 days ago") can display correctly depending on a user's local time zone.

To insert dates in the frontmatter of Markdown files, use the [Insert Date String](https://marketplace.visualstudio.com/items?itemName=jsynowiec.vscode-insertdatestring) from VS Code and press `command` + `shift` + `I`. 

> [!IMPORTANT]  
> Remember to update `dateModified` when revising articles! Yes, it's a manual step to remember, but it's easier (for now) than building something to handle it automatically.

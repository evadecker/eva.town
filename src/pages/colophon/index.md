---
layout: ../../layouts/Prose.astro
title: Colophon
description: Colophon is a designer-y word for “how it’s made”—here’s what powers evadecker.com.
datePublished: 2023-09-26 03:47:00-04:00
dateModified: 2023-09-27 23:01:39-04:00
---

## About this site

I designed and built this site myself. It's a home to share things I'm exploring and things I've built. It's a place for me to learn in public.

All code is open source and available on [Github](https://github.com/evadecker/evadecker.com). The first commit was December 5, 2018, but the earliest version of this site dates back to 2015, an era where I eschewed versioning and uploaded files manually via <abbr title="File Transfer Protocol">FTP</abbr>. I've grown a lot since then—and the technology around me has grown, too.

## Technology

This site is built using [Astro](https://astro.build). Astro handles the content-heavy views (written in [MDX](https://mdxjs.com)), but for more interactive components I use [React](https://react.dev) and [TypeScript](https://www.typescriptlang.org).

Code is edited using [VS Code](https://code.visualstudio.com) on a [MacBook Pro](https://www.apple.com/macbook-pro/). My terminal of choice is [Warp](https://www.warp.dev). My go-to coding font is [MonoLisa](https://www.monolisa.dev).

End-to-end tests are written using [Playwright](https://playwright.dev), and I use [Polypane](https://polypane.app) to preview devices, test accessibility, and toggle user preferences like `(prefers-color-scheme)`.

Hosting and automatic deployment is handled with [Vercel](https://vercel.com/).

## Typography

Headings and components are set in [Roc Grotesk Variable](https://fonts.adobe.com/fonts/roc-grotesk-variable). As the name suggests, it's a variable font, meaning I can stretch character widths and fine-tune weights for different uses. Body text is set in [Loretta Variable](https://fonts.adobe.com/fonts/loretta-variable). Both typefaces are served via [Adobe Fonts](https://fonts.adobe.com). Monospaced text is set in [Fira Code](https://github.com/tonsky/FiraCode), hosted locally.

Typography is scaled using a lot of math and a [fluid type scale](https://utopia.fyi/blog/designing-with-fluid-type-scales) by [Utopia](https://utopia.fyi/type/calculator/), meaning that font sizes will interpolate between mobile and desktop to optimize for the current browser width.

Type inspiration can be found anywhere, from comic art and video games to bodega window displays, but I often return to a handful of resources:

- [*The Elements of Typographic Style*](https://bookshop.org/a/97627/9780881792126) by Robert Bringhurst
- [Butterick’s Practical Typography](https://practicaltypography.com)
- Bethany Heck’s [Font Review Journal](https://fontreviewjournal.com)
- [Fonts In Use](https://fontsinuse.com)

## Styling

I use [Radix Colors](https://www.radix-ui.com/colors) to apply palettes consistently, ensure accessibility, and seamlessly switch between light and dark mode. Icons are from [Remix Icon](https://remixicon.com). Styles are written using [vanilla-extract](https://vanilla-extract.style)—a fantastic little library which adds TypeScript's type safety to your theming and variables and then compiles down to static CSS. I [don’t use a grid](https://gridless.design).

## Sounds

The interactive synth uses a variety of samples from [Bolder Sounds](https://www.boldersounds.com/index.php?main_page=product_music_info&products_id=71), [Freesound](https://freesound.org/people/Samulis/packs/21029/), [Soundpacks](https://soundpacks.com/free-sound-packs/xylophone-samples-pack/), [Philharmonia Orchestra Sound Samples](https://www.philharmonia.co.uk/explore/sound_samples/banjo), [Precisionsound](https://store.precisionsound.net/shop/peruvian-ocarina/), [HearthSounds](https://maxtimkovich.com/hearthsounds?q=murloc), and [The Mushroom Kingdom](https://themushroomkingdom.net/media/smw/wav).

## Notice an issue?

If you spot a typo, encounter a broken feature, or have a recommendation for an improvement, [file an issue on Github](https://github.com/evadecker/evadecker.com/issues).

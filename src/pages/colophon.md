---
layout: ../layouts/Prose.astro
title: Colophon
description: Colophon is a designer-y word for “credits”. This site is possible thanks to the following people and tools.
---

I designed and built this site myself. All the code is open source and available on [Github](https://github.com/evadecker/evadecker.com).

## Technology and Tooling

This site is built using [Astro](https://astro.build). Astro handles the content-heavy views (written in [MDX](https://mdxjs.com)), but for more interactive components I use [React](https://react.dev) and [TypeScript](https://www.typescriptlang.org).

Code is edited using [VS Code](https://code.visualstudio.com) on a [MacBook Pro](https://www.apple.com/macbook-pro/). My terminal of choice is [Warp](https://www.warp.dev). My go-to coding font is [MonoLisa](https://www.monolisa.dev).

End-to-end tests are written using [Playwright](https://playwright.dev), and I use [Polypane](https://polypane.app) to preview the site in multiple viewports, test accessibility, and toggle user preferences like `(prefers-color-scheme)` and `(prefers-reduced-motion)`.

Hosting and automatic deployment is handled with [Vercel](https://vercel.com/).

## Typography

The sans-serif font used for headings and UI is [Roc Grotesk Variable](https://fonts.adobe.com/fonts/roc-grotesk-variable), designed by Nikola Kostić. The serif font used for body text is [Loretta Variable](https://fonts.adobe.com/fonts/loretta-variable), by Abel Martins and Joana Correia. Both fonts are served via [Adobe Fonts](https://fonts.adobe.com).

The monospace font used for code blocks is [Fira Code](https://github.com/tonsky/FiraCode), by Nikita Prokopov. The pixel font used for the "START" text on the synth is [04b](http://www.04.jp.org/), by Yuji Oshimoto.

Typography is scaled using a lot of math and a [fluid type scale](https://utopia.fyi/blog/designing-with-fluid-type-scales) by [Utopia](https://utopia.fyi/type/calculator/), meaning that font sizes will interpolate between mobile and desktop to optimize for the current browser width.

## Styling

I use [Radix Colors](https://www.radix-ui.com/colors) to apply palettes consistently, ensure accessibility, and seamlessly switch between light and dark mode. Icons are from [Remix Icon](https://remixicon.com). Styles are written using [vanilla-extract](https://vanilla-extract.style)—a fantastic little library which adds TypeScript's type safety to your theming and variables and then compiles down to static CSS.

## Sounds

The interactive synth uses a variety of samples from [Bolder Sounds](https://www.boldersounds.com/index.php?main_page=product_music_info&products_id=71), [Freesound](https://freesound.org/people/Samulis/packs/21029/), [Soundpacks](https://soundpacks.com/free-sound-packs/xylophone-samples-pack/), [Philharmonia Orchestra Sound Samples](https://www.philharmonia.co.uk/explore/sound_samples/banjo), [Precisionsound](https://store.precisionsound.net/shop/peruvian-ocarina/), [HearthSounds](https://maxtimkovich.com/hearthsounds?q=murloc), and [The Mushroom Kingdom](https://themushroomkingdom.net/media/smw/wav).

## Notice an issue?

If you spot a typo, encounter a broken feature, or have a recommendation for an improvement, [file an issue on Github](https://github.com/evadecker/evadecker.com/issues).

# Kyle Decker
This is the source code that powers [kyledecker.me](https://kyledecker.me).

## Usage
Feel free to use and remix this code as you see fit, but don't steal it as your own, please. Whatever you make, share it with me! 😄 kyle@kyledecker.me

## Colophon

**Software**
- [Sketch](https://www.sketchapp.com/) for designing and exporting SVGs
- [VS Code](https://code.visualstudio.com/) for&hellip; coding
- [iTerm2](https://www.iterm2.com/) for command lining

**Libraries, Plugins, etc.**
- [Kirby](https://getkirby.com/) and [kirby-webpack](https://github.com/brocessing/kirby-webpack) for easy-as-heck flat-file content management
- [Howler.js](https://howlerjs.com/) for serving audio
- [Audiosprite](https://github.com/tonistiigi/audiosprite) for generating audio sprite files
- [Swup](https://github.com/gmrchk/swup) for CSS-powered page transitions, caching, and pre-rendering
- [Rellax](https://github.com/dixonandmoe/rellax) for buttery-smooth parallax
- [Flickity](https://flickity.metafizzy.co/) for touch-responsive carousels
- [Lazysizes](https://github.com/aFarkas/lazysizes) for progressively loading images


**Synth Samples**
- Toy Piano by [Bolder Sounds](https://www.boldersounds.com/index.php?main_page=product_music_info&products_id=71)
- Harp by user [Samulis](https://freesound.org/people/Samulis/) on [Freesound](https://freesound.org/people/Samulis/packs/21029/)
- Xylophone by [Soundpacks](https://soundpacks.com/free-sound-packs/xylophone-samples-pack/)
- Banjo by [Philharmonia Orchestra Sound Samples](https://www.philharmonia.co.uk/explore/sound_samples/banjo)
- Ocarina by [Precisionsound](https://store.precisionsound.net/shop/peruvian-ocarina/)
- RuPaul’s Drag Race © Viacom International, manually sourced and sampled
- Murloc © Blizzard, sourced from [HearthSounds](https://maxtimkovich.com/hearthsounds?q=murloc)
- Super Mario World © Koji Kondo & Nintendo, sourced from [The Mushroom Kingdom](https://themushroomkingdom.net/media/smw/wav)

**Fonts**
- 04b by [Yuji Oshimoto](http://www.04.jp.org/)
- [Minion](https://fonts.adobe.com/fonts/minion) by Robert Slimbach of [Adobe](https://fonts.adobe.com/foundries/adobe)
- [Nimbus Sans](https://fonts.adobe.com/fonts/nimbus-sans) by [URW++](https://www.urwtype.com/en/)

**Hosting**
- [Github](https://github.com/) for version control
- [Namecheap](https://www.namecheap.com/) for domain registration and hosting
- [Adobe Fonts](https://fonts.adobe.com/) for serving web fonts
- [Cloudflare](https://www.cloudflare.com/) for faster speed and increased security

## Notes to self

### How To Add A New Synth Sound

1. **Download your samples.**
    - There should be one file for each note from C3 to E3, 17 in total.
    - Make sure they're, like, legal.
2. **Rename your samples.**
    - Sounds should take this format: C3.wav, Csharp3.wav, D3.wav, Dsharp3.wav&hellip;
    - This is case-sensitive. (c3, cSHARP3, D_3, d_sharp_three &rarr; NOPE.)
    - It doesn't matter what extension they are; everything will get combined into one file.
3. **Trim silence.** *(Optional)*
    - If there's silence at the start of the sample, it'll sound laggy. [Trim it with this FFMPEG command.](https://gist.github.com/kybradeck/d49738402295a1a16afcebea1055da05)
4. **Generate a sprite.**
    - [You can do this with one command.](https://gist.github.com/kybradeck/7c1782a292c0a215f96f2f9850c0ab71)
5. **Add the sprite to the website.**
    - TBD.

### How to convert images to svg and webp for lazyloading

JPEG, PNG, and GIF to SVG
```zsh
# One file
sqip input.png -o output.svg

# All files in a directory
for file in *.png; do sqip "$file" -o "${file%.png}".svg; done
```

JPEG and PNG to WEBP
```zsh
# One file
cwebp input.png -o output.webp

# All files in a directory
for file in *.png; do cwebp "$file" -o "${file%.png}".webp; done
```

GIF to WEBP
```zsh
# One file
gif2webp input.gif -o output.webp

# All files in a directory
for file in *.gif; do gif2webp "$file" -o "${file%.gif}".webp; done
```

# Avery Madison Decker

[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c441f8-5db7-4113-9c12-5ab385e5f080/deploy-status)](https://app.netlify.com/sites/avery-computer/deploys)

This is the source code that powers [avery.computer](https://avery.computer).

## Usage

Feel free to use and remix this code as you see fit, but don't steal it as your own, please. Whatever you make, share it with me! <hello@avery.computer>

## Colophon

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

### Note to Self: How To Add A New Synth Sound

1. **Download your samples.**
   - There should be one file for each note from C3 to E3, 17 in total.
   - Make sure they're, like, legal.
2. **Rename your samples.**
   - Sounds should take this format: C3.wav, Csharp3.wav, D3.wav, Dsharp3.wav&hellip;
   - This is case-sensitive. (c3, cSHARP3, D_3, d_sharp_three &rarr; NOPE.)
   - It doesn't matter what extension they are; everything will get combined into one file.
3. **Trim silence.** _(Optional)_
   - If there's silence at the start of the sample, it'll sound laggy. [Trim it with this FFMPEG command.](https://gist.github.com/kybradeck/d49738402295a1a16afcebea1055da05)
4. **Generate a sprite.**
   - [You can do this with one command.](https://gist.github.com/kybradeck/7c1782a292c0a215f96f2f9850c0ab71)
5. **Add the sprite to the website.**
   - TBD.

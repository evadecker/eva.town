    <footer id="footer">
      <div class="footer-content wrapper">
        <a href="<?= $site->url() ?>" class="logo"><span class="visually-hidden"><?= $site->title() ?></span><?php snippet('logo') ?></a>
        <div class="footer-copyright">
          &copy;&nbsp;<a href="<?= $site->page('about')->url() ?>">Kyle Decker</a>, <?= date("Y") ?><span class="dot"></span><button data-micromodal-trigger="colophon" class="credits">Credits</button>
        </div>
      </div>
      <div id="colophon" aria-hidden="true">
        <div class="colophon-overlay" tabindex="-1" data-micromodal-close></div>
        <div role="dialog" aria-modal="true" aria-labelledby="credits-title" class="colophon-content">
          <div class="colophon-header wrapper">
            <h2 id="credits-title">Credits</h2>
            <button aria-label="Close modal" data-micromodal-close>
              <svg viewBox="0 0 22 22">
                <path d="M11.0710678,8.94974747 L18.1421356,1.87867966 L20.263456,4 L13.1923882,11.0710678 L20.263456,18.1421356 L18.1421356,20.263456 L11.0710678,13.1923882 L4,20.263456 L1.87867966,18.1421356 L8.94974747,11.0710678 L1.87867966,4 L4,1.87867966 L11.0710678,8.94974747 Z"></path>
              </svg>
            </button>
          </div>
          <div class="colophon-scrollarea">
            <div class="wrapper">
              <div class="colophon-block">
                <h3>Content Management</h3>
                <ul class="emoji-list">
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f497.png" alt="Growing heart emoji" class="emoji">
                    <a href="https://getkirby.com/">Kirby</a> for easy-as-heck file-based content management
                  </li>
                </ul>
              </div>
              <div class="colophon-block">
                <h3>Libraries</h3>
                <ul class="emoji-list">
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f61c.png" alt="Winking face with tongue emoji" class="emoji">
                    <a href="https://www.emojione.com/">EmojiOne</a> for beautiful, free cross-platform emojis
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f446.png" alt="Finger pointing up emoji" class="emoji">
                    <a href="https://flickity.metafizzy.co/">Flickity</a> for touch-responsive carousels
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f50a.png" alt="Loud speaker emoji" class="emoji">
                    <a href="https://howlerjs.com/">Howler</a> for serving audio
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f5fa.png" alt="Map emoji" class="emoji">
                    <a href="https://github.com/pedroborges/kirby-xml-sitemap">kirby-xml-sitemap</a> for automatic sitemap generation
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f301.png" alt="Foggy picture emoji" class="emoji">
                    <a href="https://github.com/aFarkas/lazysizes">Lazysizes</a> for progressively loading images
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/274e.png" alt="X emoji" class="emoji">
                    <a href="https://micromodal.now.sh/">Micromodal</a> for accessible modals like this one
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f4fd.png" alt="Video projector emoji" class="emoji">
                    <a href="https://plyr.io/">Plyr</a> for simple, accessible video embeds
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f4a8.png" alt="Dash emoji" class="emoji">
                    <a href="https://github.com/gmrchk/swup">Swup</a> for page transitions, caching, and pre-rendering
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f415.png" alt="Doge emoji" class="emoji">
                    <a href="https://github.com/matthieua/WOW">WOW</a> for animations on scroll
                  </li>
                </ul>
              </div>
              <div class="colophon-block">
                <h3>Software</h3>
                <ul class="emoji-list">
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f5a5.png" alt="Computer emoji" class="emoji">
                    <a href="https://www.iterm2.com/">iTerm2</a> for hacking into the mainframe
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f48e.png" alt="Gem stone emoji" class="emoji">
                    <a href="https://www.sketchapp.com/"">Sketch</a> for designing and exporting SVGs
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f19a.png" alt="VS emoji" class="emoji">
                    <a href="https://code.visualstudio.com/">VS Code</a> for&hellip; coding
                  </li>
                </ul>
              </div>
              <div class="colophon-block">
                <h3>Build Tools</h3>
                <ul class="emoji-list">
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f47e.png" alt="Alien sprite emoji" class="emoji">
                    <a href="https://github.com/tonistiigi/audiosprite">Audiosprite</a> for generating audio sprite files
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f49e.png" alt="Revolving heart emoji" class="emoji">
                    <a href="https://github.com/brocessing/kirby-webpack">kirby-webpack</a> for browser reloading, asset bundling, and minification
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/2728.png" alt="Sparkles emoji" class="emoji">
                    <a href="https://developers.google.com/speed/webp/docs/api">libwebp</a> for generating WEBP images from PNGs, JPEGs and GIFs
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f32b.png" alt="Fog emoji" class="emoji">
                    <a href="https://github.com/technopagan/sqip">SQIP</a> for generating low quality SVG image placeholders
                  </li>
                </ul>
              </div>
              <div class="colophon-block">
                <h3>Samples</h3>
                <ul class="emoji-list">
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f3b9.png" alt="Piano emoji" class="emoji">
                    Toy Piano by <a href="https://www.boldersounds.com/index.php?main_page=product_music_info&products_id=71">Bolder Sounds</a>
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f47c.png" alt="Baby angel emoji" class="emoji">
                    Harp by <a href="https://freesound.org/people/Samulis/">Samulis</a> on <a href="https://freesound.org/people/Samulis/packs/21029/">Freesound</a>
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f3b5.png" alt="Musical note emoji" class="emoji">
                    Xylophone by <a href="https://soundpacks.com/free-sound-packs/xylophone-samples-pack/">Soundpacks</a>
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f920.png" alt="Cowboy emoji" class="emoji">
                    Banjo by <a href="https://www.philharmonia.co.uk/explore/sound_samples/banjo">Philharmonia Orchestra Sound Samples</a>
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f9dd.png" alt="Elf emoji" class="emoji">
                    Ocarina by <a href="https://store.precisionsound.net/shop/peruvian-ocarina/">Precisionsound</a>
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f484.png" alt="Lipstick emoji" class="emoji">
                    RuPaul’s Drag Race &copy; Viacom, manually sampled
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f438.png" alt="Frog emoji" class="emoji">
                    Murloc &copy; Blizzard, sourced from <a href="https://maxtimkovich.com/hearthsounds?q=murloc">HearthSounds</a>
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f344.png" alt="Mushroom emoji" class="emoji">
                    Super Mario World © Nintendo, sourced from <a href="https://themushroomkingdom.net/media/smw/wav">The Mushroom Kingdom</a>
                  </li>
                </ul>
              </div>
              <div class="colophon-block">
                <h3>Fonts</h3>
                <ul class="emoji-list">
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f524.png" alt="ABC emoji" class="emoji">
                    <a href="https://www.dafont.com/04b-30.font">04b</a> by <a href="http://www.04.jp.org/">Yuji Oshimoto</a>
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f524.png" alt="ABC emoji" class="emoji">
                    <a href="https://fonts.adobe.com/fonts/minion">Minion</a> by Robert Slimbach of <a href="https://fonts.adobe.com/foundries/adobe">Adobe</a>
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f524.png" alt="ABC emoji" class="emoji">
                    <a href="https://fonts.adobe.com/fonts/nimbus-sans">Nimbus Sans</a> and <a href="https://fonts.adobe.com/fonts/nimbus-sans">Nimbus Sans Extended</a> by <a href="https://www.urwtype.com/en/">URW++</a>
                  </li>
                </ul>
              </div>
              <div class="colophon-block">
                <h3>Hosting</h3>
                <ul class="emoji-list">
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f170.png" alt="Red A emoji" class="emoji">
                    <a href="https://fonts.adobe.com/">Adobe Fonts</a> for serving web fonts
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f419.png" alt="Octopus emoji" class="emoji">
                    <a href="https://github.com/">Github</a> for version control
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f4be.png" alt="Floppy disk emoji" class="emoji">
                    <a href="https://www.namecheap.com/">Namecheap</a> for domain registration and hosting 
                  </li>
                </ul>
              </div>
              <div class="colophon-block">
                <h3>Misc</h3>
                <ul class="emoji-list">
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/2705.png" alt="Checkmark emoji" class="emoji">
                    <a href="https://humaan.com/checklist/">Humaan's QA checklist</a> for launching a website
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f4a1.png" alt="Lightbulb emoji" class="emoji">
                    <a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> for auditing website performance and best practices
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f30a.png" alt="Wave emoji" class="emoji">
                    <a href="http://wave.webaim.org/">WAVE</a> for evaluating web accessibility
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f197.png" alt="OK emoji" class="emoji">
                    <a href="https://validator.w3.org/">W3 HTML5 and CSS3 validator</a> for ensuring semantic code
                  </li>
                  <li>
                    <img src="<?= $site->url() ?>/assets/emoji/1f970.png" alt="Smiling face with hearts emoji" class="emoji">
                    Gracious friends and family for proofreading, bug testing, and continued feedback and encouragement
                  </li>
                </ul>
              </div>
              <div class="disclaimer">All other content &copy; Kyle Decker, <?= date("Y") ?>. Stealing is lame!</div>
            </div>
          </div> 
        </div>
      </div>
    </footer>
  </body>
</html>

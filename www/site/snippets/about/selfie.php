<aside>
  <figure>
    <!-- 550 / 440 * 100% -->
    <picture class="ratio-box" style="padding-top: 125%"> 
      <source data-srcset="<?= $page->file('kyle-decker-portrait-sketch.webp')->url() ?>" type="image/webp">
      <source data-srcset="<?= $page->image('kyle-decker-portrait-sketch.png')->url() ?>" type="image/png"> 
      <img
        class="lazyload fade-in"
        data-src="<?= $page->image('kyle-decker-portrait-sketch.png')->url() ?>"
        src="<?= $page->image('kyle-decker-portrait-sketch.svg')->url() ?>"
        alt="Portrait of the guy who made this site."
      />
    </picture>
    <figcaption>Sketch by Winston Vicinte.</figcaption>
  </figure>
</aside>

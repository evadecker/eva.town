<aside>
  <figure>
    <!-- 550 / 440 * 100% -->
    <picture class="ratio-box" style="padding-top: 125%"> 
      <source data-srcset="<?= $page->image('kyle-decker-portrait-sketch.webp') ?>" type="image/webp">
      <source data-srcset="<?= $page->image('kyle-decker-portrait-sketch.png') ?>" type="image/png"> 
      <img
        class="lazyload fade-in"
        data-src="<?= $page->image('kyle-decker-portrait-sketch.png') ?>"
        src="<?= $page->image('kyle-decker-portrait-sketch.svg') ?>"
        alt="Portrait of the guy who made this site."
      />
    </picture>
    <figcaption>Sketch by Winston Vicinte.</figcaption>
  </figure>
</aside>

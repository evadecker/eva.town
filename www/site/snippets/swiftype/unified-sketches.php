<aside class="mobile-fullwidth">
  <figure>
    <picture>
      <source data-srcset="<?= $page->file('unified-sketches.webp')->url() ?>" type="image/webp">
      <source data-srcset="<?= $page->image('unified-sketches.png')->url() ?>" type="image/png"> 
      <img
        class="lazyload blur-up"
        data-src="<?= $page->image('unified-sketches.png')->url() ?>"
        src="<?= $page->image('unified-sketches.svg')->url() ?>"
        alt="Sketches illustrating a potential UI for Swiftype that would integrate the customization of search with the previewing of search itself."
      />
    </picture>
  </figure>
</aside>

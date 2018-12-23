<aside class="mobile-fullwidth">
  <figure>
    <picture>
      <source data-srcset="<?= $page->file('transitions.webp')->url() ?>" type="image/webp">
      <source data-srcset="<?= $page->image('transitions.png')->url() ?>" type="image/png"> 
      <img
        class="lazyload blur-up"
        data-src="<?= $page->image('transitions.png')->url() ?>"
        src="<?= $page->image('transitions.svg')->url() ?>"
        alt="A photo of a Moleskine notebook with written start and end keys of various songs."
      >
    </picture>
    <figcaption>
    Where to next? I let music theory dictate the track order.
    </figcaption>
  </figure>
</aside>

<aside>
  <figure>
    <picture>
      <source data-srcset="<?= $page->file('wintrmx-moleskine.webp')->url() ?>" type="image/webp">
      <source data-srcset="<?= $page->image('wintrmx-moleskine.jpg')->url() ?>" type="image/jpeg"> 
      <img
        class="lazyload blur-up"
        data-src="<?= $page->image('wintrmx-moleskine.jpg')->url() ?>"
        src="<?= $page->image('wintrmx-moleskine.svg')->url() ?>"
        alt="A photo of a Moleskine notebook with written start and end keys of various songs."
      />
    </picture>
    <figcaption>
    Where to next? I let music theory dictate the track order.
    </figcaption>
  </figure>
</aside>

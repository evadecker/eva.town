<figure class="figure-wide">
  <picture>
    <source data-srcset="<?= $page->file('tracks.webp')->url() ?>" type="image/webp">
    <source data-srcset="<?= $page->image('tracks.png')->url() ?>" type="image/png"> 
    <img class="lazyload blur-up" data-src="<?= $page->image('tracks.png')->url() ?>" src="<?= $page->image('tracks.svg')->url() ?>" alt="Tracks, the original prototype shown to me." title="When life gives you lemons.">
  </picture>
  <figcaption>The product demoed to me, called Tracks.</figcaption>
</figure>

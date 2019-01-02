<figure>
  <picture>
    <source data-srcset="<?= $page->file('data-visualization.webp')->url() ?>" type="image/webp">
    <source data-srcset="<?= $page->image('data-visualization.png')->url() ?>" type="image/png"> 
    <img class="lazyload blur-up" data-src="<?= $page->image('data-visualization.png')->url() ?>" src="<?= $page->image('data-visualization.svg')->url() ?>" alt='Various data visualization explorations.'>
  </picture>
  <figcaption>Various data visualization explorations.</figcaption>
</figure>

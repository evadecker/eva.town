<figure class="figure-full">
  <picture>
    <source data-srcset="<?= $page->file('sketches.webp')->url() ?>" type="image/webp">
    <source data-srcset="<?= $page->image('sketches.png')->url() ?>" type="image/png"> 
    <img class="lazyload blur-up" data-src="<?= $page->image('sketches.png')->url() ?>" src="<?= $page->image('sketches.svg')->url() ?>" alt='Many sketches and sticky notes from early in development.'>
  </picture>
  <div class="wrapper">
    <figcaption>Early ideation around layout logic and the appearance of individual steps. Sticky notes and other scribbled marginalia track questions, concerns, and wishes for the new product.</figcaption>
  </div>
</figure>

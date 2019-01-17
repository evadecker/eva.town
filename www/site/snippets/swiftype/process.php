<aside>
  <figure>
    <picture>
      <source data-srcset="<?= $page->file('my-process.webp')->url() ?>" type="image/webp">
      <source data-srcset="<?= $page->image('my-process.png')->url() ?>" type="image/png"> 
      <img class="lazyload blur-up" data-src="<?= $page->image('my-process.png')->url() ?>" src="<?= $page->image('my-process.svg')->url() ?>" alt="A terrible drawing by a four year-old." >
    </picture>
    <figcaption>My process, circa 2015.</figcaption>
  </figure>
</aside>

<aside>
  <figure>
    <picture> 
      <source data-srcset="<?= $page->file('avery-portrait-sketch.webp')->url() ?>" type="image/webp">
      <source data-srcset="<?= $page->image('avery-portrait-sketch.png')->url() ?>" type="image/png"> 
      <img class="lazyload blur-up" data-src="<?= $page->image('avery-portrait-sketch.png')->url() ?>" src="<?= $page->image('avery-portrait-sketch.svg')->url() ?>" alt="Portrait of the guy who made this site.">
    </picture>
  </figure>
</aside>

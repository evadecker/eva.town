<figure>
  <picture>
    <source data-srcset="<?= $page->file('research-findings.webp')->url() ?>" type="image/webp">
    <source data-srcset="<?= $page->image('research-findings.png')->url() ?>" type="image/png"> 
    <img class="lazyload blur-up" data-src="<?= $page->image('research-findings.png')->url() ?>" src="<?= $page->image('research-findings.svg')->url() ?>" alt='A table of research results.'>
  </picture>
</figure>

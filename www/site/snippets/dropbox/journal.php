<figure class="figure-wide">
  <picture>
    <source data-srcset="<?= $page->file('journal-log.webp')->url() ?>" type="image/webp">
    <source data-srcset="<?= $page->image('journal-log.png')->url() ?>" type="image/png"> 
    <img class="lazyload blur-up" data-src="<?= $page->image('journal-log.png')->url() ?>" src="<?= $page->image('journal-log.svg')->url() ?>" alt='Journal entries from the course of the project.'>
  </picture>
  <figcaption>Regular journal entries helped keep the team in-sync on the latest designs and understand the rationale behind the changes.</figcaption>
</figure>

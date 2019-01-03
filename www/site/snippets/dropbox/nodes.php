<figure>
  <picture>
    <source data-srcset="<?= $page->file('nodes.webp')->url() ?>" type="image/webp">
    <source data-srcset="<?= $page->image('nodes.png')->url() ?>" type="image/png"> 
    <img class="lazyload blur-up" data-src="<?= $page->image('nodes.png')->url() ?>" src="<?= $page->image('nodes.svg')->url() ?>" alt='Different types of steps contained in a journey.'>
  </picture>
  <figcaption>Icon colors establish logical groups and enable quicker scanning of journeys.</figcaption>
</figure>

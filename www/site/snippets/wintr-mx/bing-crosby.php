<aside>
  <figure>
    <picture>
      <source data-srcset="<?= $page->file('bing-crosby.webp')->url() ?>" type="image/webp">
      <source data-srcset="<?= $page->image('bing-crosby.jpg')->url() ?>" type="image/jpeg"> 
      <img
        class="lazyload blur-up"
        data-src="<?= $page->image('bing-crosby.jpg')->url() ?>"
        src="<?= $page->image('bing-crosby.svg')->url() ?>"
        alt='The record "White Christmas" by Bing Crosby, released in 1942.'
      >
    </picture>
    <figcaption>Why is this still a thing.</figcaption>
  </figure>
</aside>

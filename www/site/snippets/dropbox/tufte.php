<aside>
  <figure>
    <picture>
      <source data-srcset="<?= $page->file('tufte.webp')->url() ?>" type="image/webp">
      <source data-srcset="<?= $page->image('tufte.jpg')->url() ?>" type="image/jpg"> 
      <img class="lazyload blur-up" data-src="<?= $page->image('tufte.jpg')->url() ?>" src="<?= $page->image('tufte.svg')->url() ?>" alt='A page from the chapter ‘Chartjunk’ in Edward Tufte’s Visual Display of Quantitative Information.'>
    </picture>
    <figcaption>In his books, Edward Tufte calls out 'chartjunk' and other flashy displays which obscure more than they reveal.</figcaption>
  </figure>
</aside>

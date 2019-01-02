<figure class="figure-wide">
  <picture>
    <source data-srcset="<?= $page->file('lifecycle-flow.webp')->url() ?>" type="image/webp">
    <source data-srcset="<?= $page->image('lifecycle-flow.png')->url() ?>" type="image/png"> 
    <img class="lazyload blur-up" data-src="<?= $page->image('lifecycle-flow.png')->url() ?>" src="<?= $page->image('lifecycle-flow.svg')->url() ?>" alt='A flowchart depicting the stages of a journey.'>
  </picture>
  <figcaption>I designed this chart to print and hang on five tabloid-sized sheets for feedback during a design critique. It illustrates the lifecycle of a journey from start to finish, along with transactional emails sent and abilities available during each stage.</figcaption>
</figure>

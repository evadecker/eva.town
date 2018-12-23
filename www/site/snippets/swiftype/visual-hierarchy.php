<figure class="figure-wide">
  <picture>
    <source data-srcset="<?= $page->file('visual-hierarchy.webp')->url() ?>" type="image/webp">
    <source data-srcset="<?= $page->image('visual-hierarchy.png')->url() ?>" type="image/png"> 
    <img
      class="lazyload blur-up"
      data-src="<?= $page->image('visual-hierarchy.png')->url() ?>"
      src="<?= $page->image('visual-hierarchy.svg')->url() ?>"
      alt="The original Swiftype dashboard had site navigation on the left, child to the engine selector, on the right, child to the engines link, a tiny bit of text next to links for docs and support."
    >
  </picture>
  <figcaption>Swiftype dashboard, Nov 2015. An example of poor visual hierarchy. The active tab is also difficult to spot.</figcaption>
</figure>

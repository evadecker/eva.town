<aside class="mobile-fullwidth">
  <figure>
    <picture>
      <source data-srcset="<?= $page->file('responsive-nav.webp')->url() ?>" type="image/webp">
      <source data-srcset="<?= $page->image('responsive-nav.gif')->url() ?>" type="image/gif"> 
      <img class="lazyload blur-up" data-src="<?= $page->image('responsive-nav.gif')->url() ?>" src="<?= $page->image('responsive-nav.svg')->url() ?>" alt="An animated image of the new Swiftype dashboard, showing how the layout changes at different breakpoints.">
    </picture>
    <figcaption>Below a certain width, the sidebar condenses to a top bar with drop-down menus, making the most of any screen size. This is all accomplished with CSS—there is only one nav component.</figcaption>
  </figure>
</aside>

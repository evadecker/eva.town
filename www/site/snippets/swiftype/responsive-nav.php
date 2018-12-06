<aside class="mobile-fullwidth">
  <figure>
    <picture>
      <source data-srcset="<?= $page->file('responsive-nav.webp')->url() ?>" type="image/webp">
      <source data-srcset="<?= $page->image('responsive-nav.gif')->url() ?>" type="image/gif"> 
      <img
        class="lazyload blur-up"
        data-src="<?= $page->image('responsive-nav.gif')->url() ?>"
        src="<?= $page->image('responsive-nav.svg')->url() ?>"
        alt="An animated image of the new Swiftype dashboard, showing how the layout changes at different breakpoints."
      />
    </picture>
    <figcaption>Below a certain width, the sidebar condenses to a top bar with drop-down menus. This takes advantage of screen real estate when it is available, but provides a fallback for users with smaller screens.</figcaption>
  </figure>
</aside>

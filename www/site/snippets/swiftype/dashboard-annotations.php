<div class="full-width">
  <figure class="figure-wide wrapper">
    <div class="image-annotated">
      <picture>
        <source data-srcset="<?= $page->file('dashboard.webp')->url() ?>" type="image/webp">
        <source data-srcset="<?= $page->image('dashboard.png')->url() ?>" type="image/png"> 
        <img
          class="lazyload blur-up"
          data-src="<?= $page->image('dashboard.png')->url() ?>"
          src="<?= $page->image('dashboard.svg')->url() ?>"
          alt="The new Swiftype dashboard."
        />
      </picture>
      <div class="annotations">
        <div class="annotation rellax" style="top: 2%; left: 20%" data-direction="left" data-rellax-speed="-0.5">
          <div class="annotation-popover">Top-level navigation takes top-level prominence. <em>Engines</em> is enlarged and moved away from <em>Docs</em> and <em>Support</em>.</div>
        </div>
        <div class="annotation rellax" style="top: 15%; left: 94%" data-direction="top-right" data-rellax-speed="-0.5">
          <div class="annotation-popover">Three account menus merge into one, allowing users to manage  settings, switch accounts, and log out from one place.</div>
        </div>
        <div class="annotation rellax" style="top: 56%; left: 5.5%" data-direction="top-left" data-rellax-speed="-0.5">
          <div class="annotation-popover">A persistent sidebar beneath the engines dropdown clarifies navigation. The active page is visible without hovering. The dark background draws focus to the content.</div>
        </div>
        <div class="annotation rellax" style="top: 62%; left: 79%" data-direction="top" data-rellax-speed="-0.5">
          <div class="annotation-popover">Fonts are larger and bolder. All-caps text has been eliminated almost everywhere.</div>
        </div>
      </div>
    </div>
    <figcaption class="desktop-annotations-note">*View on a larger screen to see annotations</figcaption>
  </figure>
</div>

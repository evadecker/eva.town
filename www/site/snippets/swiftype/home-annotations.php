<div class="full-width transparent">
  <figure class="figure-wide wrapper">
    <div class="image-annotated">
      <picture>
        <source data-srcset="<?= $page->file('swiftype-home.webp')->url() ?>" type="image/webp">
        <source data-srcset="<?= $page->image('swiftype-home.png')->url() ?>" type="image/png"> 
        <img
          class="lazyload blur-up"
          data-src="<?= $page->image('swiftype-home.png')->url() ?>"
          src="<?= $page->image('swiftype-home.svg')->url() ?>"
          alt="The new Swiftype dashboard home."
        />
      </picture>
      <div class="annotations">
        <div class="annotation" style="top: 16%; left: 30%" data-direction="bottom-left">
          <div class="annotation-rellax">
            <div class="annotation-popover">Enlarged and expanded cards now fill the available width, enlarging hit targets and improving legibility.</div>
          </div>
        </div>
        <div class="annotation" style="top: 42.5%; left: 57%" data-direction="left">
          <div class="annotation-rellax">
            <div class="annotation-popover">Cards display week-over-week trends, adding helpful context. Users can now jump directly to analytics by clicking these stats.</div>
          </div>
        </div>
        <div class="annotation" style="top: 77%; left: 10%" data-direction="top-left">
          <div class="annotation-rellax">
            <div class="annotation-popover">Archived engines shift down to the bottom to keep the list clean and relevant.</div>
          </div>
        </div>
        <div class="annotation" style="top: 81%; left: 90%" data-direction="top-right">
          <div class="annotation-rellax">
            <div class="annotation-popover">Account activity relocates to the sidebar to ensure recent events are visible without scrolling.</div>
          </div>
        </div>
      </div>
    </div>
    <figcaption class="desktop-annotations-note">*View on a larger screen to see annotations</figcaption>
  </figure>  
</div>

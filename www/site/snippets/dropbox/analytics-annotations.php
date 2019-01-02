<div class="full-width transparent">
  <figure class="figure-wide wrapper">
    <div class="image-annotated">
      <picture>
        <source data-srcset="<?= $page->image('analytics.png')->url() ?>" type="image/png"> 
        <img class="lazyload blur-up" data-src="<?= $page->image('analytics.png')->url() ?>" src="<?= $page->image('analytics.svg')->url() ?>" alt="Analytics within Journey Builder">
      </picture>
      <div class="annotations">
        <div class="annotation" style="top: 9.5%; left: 29%" data-direction="left">
          <div class="annotation-rellax">
            <div class="annotation-popover">Journey-wide analytics appear in a fixed sidebar on the left. Dates can be toggled.</div>
          </div>
        </div>
        <div class="annotation" style="top: 34%; left: 63%" data-direction="top-left">
          <div class="annotation-rellax">
            <div class="annotation-popover">This waterfall visualization—proposed by an engineer—displays the relative breakdown of users who have traversed each part of a journey.</div>
          </div>
        </div>
        <div class="annotation" style="top: 54.8%; left: 21%" data-direction="left">
          <div class="annotation-rellax">
            <div class="annotation-popover" style="width: 10rem">Stats are nested, listed in descending order. Descriptive tooltips explain vague labels.</div>
          </div>
        </div>
        <div class="annotation" style="top: 68.5%; left: 5%" data-direction="top-left">
          <div class="annotation-rellax">
            <div class="annotation-popover">Statistically significant deviations from the norm appear in red.</div>
          </div>
        </div>
        <div class="annotation" style="top: 79%; left: 67%" data-direction="top-right">
          <div class="annotation-rellax">
            <div class="annotation-popover">Steps can be clicked to reveal a popover with individual analytics, allowing users to drill down into performance at each step of a journey.</div>
          </div>
        </div>
      </div>
    </div>
    <figcaption class="desktop-annotations-note">*View on a larger screen to see annotations</figcaption>
  </figure>
</div>

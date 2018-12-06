<div class="full-width transparent">
  <div class='marquee' data-duration='5000' data-gap='10' data-duplicated='true'>
    <?php foreach($page->images() as $image): ?>
      <picture class="empty-state">
        <source data-srcset="{{site.url}}/assets/images/swiftype/empty-states/{{empty-state.filename}}.webp" type="image/webp">
        <source data-srcset="{{site.url}}/assets/images/swiftype/empty-states/{{empty-state.filename}}.png" type="image/png"> 
        <img
          class="lazyload blur-up"
          data-expand="600"
          data-src="{{site.url}}/assets/images/swiftype/empty-states/{{empty-state.filename}}.png"
          src="{{site.url}}/assets/images/swiftype/empty-states/{{empty-state.filename}}.svg"
          alt="{{empty-state.alt | escape}}"
        />
      </picture>
    <?php endforeach ?>
  </div>
</div>

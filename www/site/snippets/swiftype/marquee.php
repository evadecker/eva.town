<div class="full-width transparent">
  <div class="marquee">
    <?php $emptystates = yaml($page->children()->find('empty-states')->emptyStates()) ?>
    <?php foreach($emptystates as $emptystate): ?>
      <?php $filename = $emptystate['filename'] ?>
      <picture class="empty-state">
        <source data-srcset="<?= $page->find('empty-states')->file($filename.'.webp')->url() ?>" type="image/webp">
        <source data-srcset="<?= $page->find('empty-states')->image($filename.'.png')->url() ?>" type="image/png">
        <img
          class="lazyload blur-up"
          data-expand="600"
          data-src="<?= $page->find('empty-states')->image($filename.'.png')->url() ?>"
          src="<?= $page->find('empty-states')->image($filename.'.svg')->url() ?>"
          alt="Blah"
        />
      </picture>
    <?php endforeach ?>
  </div>
</div>

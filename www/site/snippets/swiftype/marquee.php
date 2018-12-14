<div class="full-width transparent">
  <div class="marquee">
    <?php for($n = 1; $n <= 2; $n++): // Duplicate marquee twice ?>
      <div class="marquee-half" <?php e($n == 2, 'aria-hidden="true"') ?>>
        <?php $emptystates = yaml($page->children()->find('empty-states')->emptyStates()) ?>
        <?php $i = 1 ?>
        <?php foreach($emptystates as $emptystate): ?>
          <?php
            $classname;
            $filename = $emptystate['filename'];
            if($i == 4 || $i == 6 || $i == 9 || $i == 12) {
              $classname = 'background';
            } elseif($i == 1 || $i == 3 || $i == 7 || $i == 10) {
              $classname = 'midground';
            } else {
              $classname = 'foreground';
            }
            $i++;
          ?>
          <picture class="empty-state <?= $classname ?>">
            <source srcset="<?= $page->find('empty-states')->file($filename.'.webp')->url() ?>" type="image/webp">
            <source srcset="<?= $page->find('empty-states')->image($filename.'.png')->url() ?>" type="image/png">
            <img
              src="<?= $page->find('empty-states')->image($filename.'.svg')->url() ?>"
              alt="<?= $emptystate['alt'] ?>"
            />
          </picture>
        <?php endforeach ?>
      </div>
    <?php endfor ?>
  </div>
</div>

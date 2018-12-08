<div class="full-width">
  <div class="empties">
    <?php $emptystates = yaml($page->children()->find('empty-states')->emptyStates()) ?>
    <?php $i = 1 ?>
    <?php foreach($emptystates as $emptystate): ?>
      <?php
        $classname;
        $speed;
        $filename = $emptystate['filename'];
        if($i == 4 || $i == 6 || $i == 9 || $i == 12) {
          $classname = 'background';
          $speed = -3;
          $zIndex = 1;
        } elseif($i == 1 || $i == 3 || $i == 7 || $i == 10) {
          $classname = 'midground';
          $speed = -2;
          $zIndex = 2;
        } else {
          $classname = 'foreground';
          $speed = 2;
          $zIndex = 3;
        }
        $i++;
      ?>
      <picture class="empty-state <?= $classname ?>" data-rellax-speed="<?= $speed ?>" data-rellax-zindex="<?= $zIndex ?>">
        <source srcset="<?= $page->find('empty-states')->file($filename.'.webp')->url() ?>" type="image/webp">
        <source srcset="<?= $page->find('empty-states')->image($filename.'.png')->url() ?>" type="image/png">
        <img
          src="<?= $page->find('empty-states')->image($filename.'.svg')->url() ?>"
          alt="<?= $emptystate['alt'] ?>"
        />
      </picture>
    <?php endforeach ?>
  </div>
</div>

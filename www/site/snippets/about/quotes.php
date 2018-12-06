<div class="quotes">
  <div class="wrapper">
    <?php foreach($site->find('quotes')->children()->visible() as $quote): ?>
      <blockquote class="quote">
        <span class="quote-text">
          <?= $quote->quote()->kirbytext()->widont() ?>
        </span>
        <cite>
          <span class="quote-author"><?= $quote->author()->kirbytext() ?></span>
          <span class="quote-source"><?= $quote->source()->kirbytext() ?></span>
        </cite>
      </blockquote>
    <?php endforeach ?>
  </div>
  <div class="quote-controls">
    <button class="quote-arrow prev"><?php snippet('arrow-l') ?></button>
      <div class="quote-dots">
        <?php $i = 0; foreach($site->find('quotes')->children()->visible() as $quote): $i++; ?>
          <button class="quote-dot"><span class="visually-hidden"><?= $i ?></span></button>
        <?php endforeach ?>
      </div>
    <button class="quote-arrow next"><?php snippet('arrow-r') ?></button>
  </div>
</div>

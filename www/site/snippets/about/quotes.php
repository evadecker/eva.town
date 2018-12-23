<div class="quotes-carousel">
  <?php foreach($site->find('quotes')->children() as $quote): ?>
    <blockquote class="quote">
      <span class="quote-text">
        <?= $quote->quote()->kirbytext()->widont() ?>
      </span>
      <cite>
        <span class="quote-author"><?= $quote->author()->text() ?></span>
        <span class="quote-source"><?= $quote->source()->text() ?></span>
      </cite>
    </blockquote>
  <?php endforeach ?>
</div>

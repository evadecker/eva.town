<div class="quotes-carousel" data-flickity='{ "autoPlay": 4000, "wrapAround": true, "selectedAttraction": 0.04, "friction": 0.35, "arrowShape": "M100 58.9998426 36.0499178 58.9998426 65.088158 85.4765278 53.6014289 100 0 50.1043963 53.6348574 0 65.0600993 14.7597671 36.09408 41.0436272 100 41.0436272z" }'>
  <?php foreach($site->find('quotes')->children()->visible() as $quote): ?>
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

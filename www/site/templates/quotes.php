<?php snippet('head') ?>
<?php snippet('header') ?>

<main id="swup" class="page-content transition-fade" aria-label="Content">
  <div class="books wrapper">
    <?php foreach ($site->find('quotes')->children() as $book) : ?>
      <div class="book">
        <div class="book-details">
          <?php if ($book->cover()->isNotEmpty()) : ?>
            <img src="<?= $book->cover()->toFile()->resize(300)->url() ?>" class="book-cover" />
          <?php endif ?>
          <h3 class="book-author"><?= $book->author()->text() ?></h3>
          <div class="book-title"><?= $book->title()->text()->widont() ?></div>
        </div>
        <div class="quotes">
          <?php foreach ($book->quotes()->toStructure() as $quote) : ?>
            <blockquote class="quote">
              <?= $quote->quote()->kirbytext() ?>
              <?php if ($quote->page()->isNotEmpty()) : ?>
                <span class="quote-page"><?= $quote->page() ?></span>
              <?php endif ?>
            </blockquote>
          <?php endforeach ?>
        </div>
      </div>
    <?php endforeach ?>
  </div>
</main>

<?php snippet('footer') ?>

<?php snippet('head') ?>
<?php snippet('header') ?>

<main id="swup" class="page-content transition-fade" aria-label="Content">
  <article class="post wrapper about-page">
    <div class="announcement">
      This site just launched! Please email <a href="mailto:kyle@kyledecker.me">kyle@kyledecker.me</a> if you find anything misspelled, misplaced, misguided, or malfunctioning.
    </div>
    <h1 class="visually-hidden"><?= $page->title() ?></h1>
    <div class="post-content">
      <?= $page->text()->kirbytext() ?>
    </div>
  </article>
  <?php snippet('about/quotes') ?>
</main>

<?php snippet('footer') ?>




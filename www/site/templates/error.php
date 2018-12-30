<?php snippet('head') ?>
<?php snippet('header') ?>

<main id="swup" class="page-content wrapper transition-fade" aria-label="Content">
  <h1 class="big-404" data-text="404">404</h1>
  <h2><?= $page->title()->widont() ?></h2>
  <?= $page->text()->kirbytext() ?>
</main>

<?php snippet('footer') ?>

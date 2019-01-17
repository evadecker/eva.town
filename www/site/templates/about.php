<?php snippet('head') ?>
<?php snippet('header') ?>

<main id="swup" class="page-content transition-fade" aria-label="Content">
  <article class="post wrapper about-page">
    <h1 class="visually-hidden"><?= $page->title() ?></h1>
    <div class="post-content">
      <?= $page->text()->kirbytext() ?>
    </div>
  </article>
  <?php snippet('about/quotes') ?>
</main>

<?php snippet('footer') ?>




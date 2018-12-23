<?php snippet('head') ?>
<?php snippet('header') ?>

<main id="swup" class="page-content transition-fade" aria-label="Content">
  <article class="post wrapper about-page">
    <div class="announcement">
      <img class="emoji" src="<?= $site->url() ?>/assets/emoji/1f331.png"><strong>Just launched!</strong> If you find anything misspelled, misplaced, or malfunctioning, please tell <a href="mailto:kyle@kyledecker.me">kyle@kyledecker.me</a>.
    </div>
    <h1 class="visually-hidden"><?= $page->title() ?></h1>
    <div class="post-content">
      <?= $page->text()->kirbytext() ?>
    </div>
  </article>
  <?php snippet('about/quotes') ?>
</main>

<?php snippet('footer') ?>




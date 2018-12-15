<?php snippet('head') ?>
<?php snippet('header') ?>

<main id="swup" class="page-content" aria-label="Content">

  <div class="project-overview">
    <?php
      $page->hasPrevVisible() ? $prev = $page->prevVisible() : $prev = $page->siblings()->visible()->last();

      $page->hasNextVisible() ? $next = $page->nextVisible() : $next = $page->siblings()->visible()->first();
    ?>
    <div class="project-pagination">
      <a class="project-arrow prev" href="<?= $prev->url() ?>" data-swup-transition="prev-project"><?php snippet('arrow-l') ?><span class="tooltip"><?= $prev->title() ?></span></a>
      <a class="project-arrow next" href="<?= $next->url() ?>" data-swup-transition="next-project"><?php snippet('arrow-r') ?><span class="tooltip"><?= $next->title() ?></span></a>
    </div>
    <div class="project-info transition-swipe">
      <time class="project-year"><?= $page->year() ?></time>
      <h1 class="project-title" itemprop="name headline"><?= $page->title() ?></h1>
      <a class="project-website" href="https://<?= $page->website() ?>" target="_blank"><?= $page->website() ?></a>
    </div>
  </div>

  <article class="post wrapper h-entry transition-swipe" itemscope itemtype="http://schema.org/BlogPosting">
    <div class="post-content e-content" itemprop="articleBody">
    <aside class="post-callout">
      <div class="project-challenge">
        <strong class="project-overview-label">The challenge</strong>
        <?= $page->challenge() ?>
      </div>
      <div class="project-role">
        <strong class="project-overview-label">My role</strong>
        <?= $page->role() ?>
      </div>
    </aside>
    <?php if($page->isPasswordProtected() == '1'): ?>
      <?php if($site->user()): ?>
        <?= $page->text()->kirbytext() ?>
      <?php else: ?>
        <?php snippet('login') ?>
      <?php endif ?>
    <?php else: ?>
      <?= $page->text()->kirbytext() ?>
    <?php endif ?>
    </div>

    <a class="u-url" href="<?= $page->url() ?>" hidden></a>
  </article>

</main>

<?php snippet('footer') ?>

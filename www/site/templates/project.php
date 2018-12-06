<?php snippet('head') ?>
<?php snippet('header') ?>

<main id="swup" class="page-content transition-fade" aria-label="Content">

  <article class="post wrapper h-entry" itemscope itemtype="http://schema.org/BlogPosting">

    <aside class="project-overview">
      <h1 class="project-title" itemprop="name headline"><?= $page->title() ?></h1>
      <div class="project-basics">
        <div class="project-info">
          <time class="project-year"><?= $page->year() ?></time>
          <a class="project-website" href="<?= $page->website() ?>"><?= $page->website() ?></a>
        </div>
        <div class="project-pagination">
          <a class="project-arrow prev" href="#"><?php snippet('arrow-l') ?></a>
          <a class="project-arrow next" href="#"><?php snippet('arrow-r') ?></a>
        </div>
      </div>
      <div class="project-challenge">
        <strong class="project-overview-label">The challenge</strong>
        <?= $page->challenge() ?>
      </div>
      <div class="project-role">
        <strong class="project-overview-label">My role</strong>
        <?= $page->role() ?>
      </div>
    </aside>

    <div class="post-content e-content" itemprop="articleBody">
      <?= $page->text()->kirbytext() ?>
    </div>

    <a class="u-url" href="{{ page.url | relative_url }}" hidden></a>
  </article>

</main>

<?php snippet('footer') ?>

<div class="home-projects wrapper">
  <?php foreach($site->find('work')->children()->visible() as $project): ?>
    <?php if($project != $page): ?>
      <a class="home-project <?= 'color-'.$project->color() ?>" href="<?= $project->url() ?>">
        <span class="project-logo">
          <?php snippet($project->slug().'/logo') ?>
        </span>
        <h3><?= $project->title()->html() ?> <span class="project-arrow"><?php snippet('arrow-r') ?></span></h3>
        <p><?= $project->tagline()->html() ?></p>
      </a>
    <?php endif ?>
    
  <?php endforeach ?>
  <a class="home-project home-project-about" href="<?= $site->find('about')->url() ?>">
    <span class="project-logo"></span>
    <h3>About <span class="project-arrow"><?php snippet('arrow-r') ?></span></h3>
    <p>Information on Kyle, the human. Contact info, resume, job history, links&hellip; the fun is endless.</p>
  </a>
</div>

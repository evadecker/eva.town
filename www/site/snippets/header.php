<header id="header" role="banner">
	<nav class="wrapper" role="navigation">
		<a class="site-title page-link <?php e($page->isHomePage(), 'active') ?>" rel="author" href="<?= url() ?>"><?php snippet('logo') ?></a>
    <?php foreach($pages->visible() as $p): ?>
      <a class="page-link <?php e($p->isOpen(), 'active') ?>" href="<?= $p->url() ?>"><?php echo $p->title()->html() ?></a>
    <?php endforeach ?>
  </nav>
</header>

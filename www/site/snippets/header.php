<header class="site-header" role="banner">
	<div class="wrapper">
		<a class="site-title page-link page-link-home" rel="author" href="<?= url() ?>"><?= $site->author()->html() ?></a>
		<nav class="site-nav" role="navigation">
      <?php foreach($pages->visible() as $p): ?>
        <a class="page-link <?php e($p->isOpen(), 'active') ?>" href="<?= $p->url() ?>"><?php echo $p->title()->html() ?></a>
      <?php endforeach ?>
    </nav>
	</div>
</header>

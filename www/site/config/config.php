<?php

@include __DIR__ . DS . 'license.php';

/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options

*/

c::set('content.file.extension', 'md');
c::set('cache.ignore', array('sitemap'));
c::set('smartypants', true);
c::set('markdown.extra', true);

c::set('routes', array(
	array(
		'pattern' => 'sitemap.xml',
		'action'  => function() {
			tpl::load(kirby()->roots()->templates() . DS . 'sitemap.php', array( 'pages' => site()->pages() ), false );
		}
	),
));

<?php

/**
 * Kirby XML Sitemap
 *
 * @version   1.0.0-beta.1
 * @author    Pedro Borges <oi@pedroborg.es>
 * @copyright Pedro Borges <oi@pedroborg.es>
 * @link      https://github.com/pedroborges/kirby-xml-sitemap
 * @license   MIT
 */

kirby()->set('snippet', 'sitemap.page', __DIR__ . '/snippets/page.php');
kirby()->set('snippet', 'sitemap.image', __DIR__ . '/snippets/image.php');

kirby()->set('route', [
    'pattern' => 'sitemap.xsl',
    'method'  => 'GET',
    'action'  => function() {
        $stylesheet = f::read(__DIR__ . DS . 'xml-sitemap.xsl');

        return new response($stylesheet, 'xsl');
    }
]);

kirby()->set('route', [
    'pattern' => 'sitemap.xml',
    'method'  => 'GET',
    'action'  => function() {
        if (cache::exists('sitemap')) {
            return new response(cache::get('sitemap'), 'xml');
        }

        $includeInvisibles = c::get('sitemap.include.invisible', false);
        $ignoredPages      = c::get('sitemap.ignored.pages', []);
        $ignoredTemplates  = c::get('sitemap.ignored.templates', []);

        if (! is_array($ignoredPages)) {
            throw new Exception('The option "sitemap.ignored.pages" must be an array.');
        }

        if (! is_array($ignoredTemplates)) {
            throw new Exception('The option "sitemap.ignored.templates" must be an array.');
        }

        $languages = site()->languages();
        $pages     = site()->index();

        if (! $includeInvisibles) {
            $pages = $pages->visible();
        }

        $pages = $pages
                    ->not($ignoredPages)
                    ->filterBy('intendedTemplate', 'not in', $ignoredTemplates)
                    ->map('sitemapProcessAttributes');

        $process = c::get('sitemap.process', null);

        if ($process instanceof Closure) {
            $pages = $process($pages);

            if (! $pages instanceof Collection) {
                throw new Exception('The option "sitemap.process" must return a Collection.');
            }
        } elseif (! is_null($process)) {
            throw new Exception($process . ' is not callable.');
        }

        $template = __DIR__ . DS . 'xml-sitemap.html.php';
        $sitemap  = tpl::load($template, compact('languages', 'pages'));

        cache::set('sitemap', $sitemap);

        return new response($sitemap, 'xml');
    }
]);

function sitemapPriority($page) {
    return $page->isHomePage() ? 1 : number_format(1.6 / ($page->depth() + 1), 1);
}

function sitemapFrequency($page) {
    $priority = sitemapPriority($page);

    switch (true) {
        case $priority === 1  : $frequency = 'daily';  break;
        case $priority >= 0.5 : $frequency = 'weekly'; break;
        default : $frequency = 'monthly';
    }

    return $frequency;
}

function sitemapProcessAttributes($page) {
    $frequency = c::get('sitemap.frequency', false);
    $priority  = c::get('sitemap.priority', false);

    if ($frequency) {
        $frequency = is_bool($frequency) ? 'sitemapFrequency' : $frequency;
        if (! is_callable($frequency)) throw new Exception($frequency . ' is not callable.');
        $page->frequency = $frequency($page);
    }

    if ($priority) {
        $priority = is_bool($priority) ? 'sitemapPriority' : $priority;
        if (! is_callable($priority)) throw new Exception($priority . ' is not callable.');
        $page->priority = $priority($page);
    }

    return $page;
}

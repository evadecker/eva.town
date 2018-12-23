<?php // Echo header to avoid issue when PHP short tag is enabled ?>
<?= '<?xml version="1.0" encoding="utf-8"?>'; ?>
<?= '<?xml-stylesheet type="text/xsl" href="' . url('sitemap.xsl') . '"?>'; ?>
<urlset
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <?php foreach ($pages as $page) : ?>
    <?php snippet('sitemap.page', compact('languages', 'page')) ?>
    <?php endforeach ?>
</urlset>

# Kirby XML Sitemap [![Release](https://img.shields.io/github/release/pedroborges/kirby-xml-sitemap.svg)](https://github.com/pedroborges/kirby-xml-sitemap/releases) [![Issues](https://img.shields.io/github/issues/pedroborges/kirby-xml-sitemap.svg)](https://github.com/pedroborges/kirby-xml-sitemap/issues)

XML Sitemap is a powerful Kirby CMS plugin that generates a nice `sitemap.xml` for your site!

![Kirby XML Sitemap screenshot](https://raw.githubusercontent.com/pedroborges/kirby-xml-sitemap/master/screenshot.png)

## Main features
- Cache support
- Human-readable XML sitemap
- Image attributes
- Multi-language support
- Powerful options

## Requirements
- Kirby 2.4.0+
- PHP 5.4+

## Installation
After installing the plugin using any of the methods below you should be able to visit `https://yoursite.com/sitemap.xml` to see an human-readable sitemap without any initial configuration.

### Download
[Download the files](https://github.com/pedroborges/kirby-xml-sitemap/archive/master.zip) and place them inside `site/plugins/xml-sitemap`.

### Kirby CLI
Kirby's [command line interface](https://github.com/getkirby/cli) makes installing the XML Sitemap a breeze:

    $ kirby plugin:install pedroborges/kirby-xml-sitemap

Updating couldn't be any easier, simply run:

    $ kirby plugin:update pedroborges/kirby-xml-sitemap

### Git Submodule
You can add the XML Sitemap as a Git submodule.

    $ cd your/project/root
    $ git submodule add https://github.com/pedroborges/kirby-xml-sitemap.git site/plugins/xml-sitemap
    $ git submodule update --init --recursive
    $ git commit -am "Add XML Sitemap plugin"

Updating is as easy as running a few commands.

    $ cd your/project/root
    $ git submodule foreach git checkout master
    $ git submodule foreach git pull
    $ git commit -am "Update submodules"
    $ git submodule update --init --recursive

## Options
XML Sitemap works out of the box and most likely you won't need to change any option manually. However there are the following options in case you need to change the defaults:

```php
// License URL for your site's images
c::set('sitemap.images.license', null);

// Enable/disable adding images to XML Sitemap
c::set('sitemap.include.images', true);

// Add/remove invisible pages
c::set('sitemap.include.invisible', false);

// URI of pages to remove
c::set('sitemap.ignored.pages', []);

// Templates names to remove
c::set('sitemap.ignored.templates', []);

// Show/hide change frequency attribute
// (see more below)
c::set('sitemap.frequency', false);

// Show/hide priority attribute
// (see more below)
c::set('sitemap.priority', false);
```

## Extensions

#### `sitemap.frequency`
When this option is set to `true` the plugin will default to [this function](https://github.com/pedroborges/kirby-xml-sitemap/blob/bcd95cdbecc99809161d702c96c9fb25e66e69f8/sitemap.php#L61-L71) to determine the value of the `changefreq` attribute of URLs on your XML sitemap. You can pass a callback to use your own logic:

```php
c::set('sitemap.frequency', function($page) {
    // You must return a string
    return $page->isHomePage() ? 'daily' : 'never';
});
```

#### `sitemap.priority`
When this option is set to `true` the plugin will default to [this function](https://github.com/pedroborges/kirby-xml-sitemap/blob/bcd95cdbecc99809161d702c96c9fb25e66e69f8/sitemap.php#L57-L59) to determine the value of the `priority` attribute of URLs on your XML sitemap. You can pass a callback to use your own logic:

```php
c::set('sitemap.priority', function($page) {
    // You must return a floating point number between 0 and 1
    return $page->depth() === 1 ? 1 : 0.5;
});
```

#### `sitemap.process`
The XML Sitemap plugin includes options that are enough for most projects. However there are cases in which you need more control. This option allows you to process the pages collection in any way you want, such as removing or adding a specific set of pages.

```php
// Add a page that was removed on the
// `sitemap.ignored.templates` option
c::set('sitemap.process', function($pages) {
    $shy = page('super-shy-page');

    return $pages->add($shy);
});

// Filter a set of pages based on a field value
c::set('sitemap.process', function($pages) {
    return $pages->filter(function($page) {
        // Remove future posts
        if ($page->intendedTemplate() === 'post') {
            return $page->date() < time();
        }

        // Keep all other pages
        return true;
    });
});
```

> You can do any number of manipulation on the `$pages` collection.

## Change Log
All notable changes to this project will be documented at: <https://github.com/pedroborges/kirby-xml-sitemap/blob/master/changelog.md>

## License
XML Sitemap is open-sourced software licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

Copyright © 2017 Pedro Borges <oi@pedroborg.es>

<?php

namespace Kirby\Autobuster;

use HTML;
use STR;
use F;

/**
 * Kirby Autobuster JS Component
 *
 * @package   Kirby CMS
 * @author    Bastian Allgeier <bastian@getkirby.com>
 * @link      http://getkirby.com
 * @copyright Bastian Allgeier
 * @license   http://getkirby.com/license
 */
class JS extends \Kirby\Component\JS
{
    /**
     * Builds the html script tag for the given javascript file
     *
     * @param string $src
     * @param boolean async
     * @return string
     */
    public function tag($src, $async = false)
    {
        if (is_array($src)) {
            $js = array();
            foreach ($src as $s) {
                $js[] = $this->tag($s, $async);
            }
            return implode(PHP_EOL, $js) . PHP_EOL;
        }

        // auto template js files
        if ($src == '@auto') {
            $template = $this->kirby->site()->page()->template();
            $file =  $template . '.js';
            $root = $this->kirby->roots()->autojs() . DS . $file;
            if (file_exists($root)) {
                $mod = f::modified($root);
                $src  = $this->kirby->urls()->autojs() . '/' . $template . '.js' . '?v=' . $mod;
            } else {
                return false;
            }
        } else {
            $file = kirby()->roots()->index() . DS . $src;

            if (file_exists($file)) {
                $mod = f::modified($file);
                $src = dirname($src) . '/' . f::filename($src) . '?v=' . $mod;
            }
        }

        // build the array of HTML attributes
        $attr = array('src' => url($src));
        if (is_array($async)) {
            $attr = array_merge($attr, $async);
        } elseif ($async === true) {
            $attr['async'] = true;
        }
        return html::tag('script', '', $attr);
    }
}

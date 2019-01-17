<?php

namespace Kirby\Autobuster;

use F;

/**
 * Kirby Autobuster CSS Component
 *
 * @package   Kirby CMS
 * @author    Bastian Allgeier <bastian@getkirby.com>
 * @link      http://getkirby.com
 * @copyright Bastian Allgeier
 * @license   http://getkirby.com/license
 */
class CSS extends \Kirby\Component\CSS {

  /**
   * Builds the html link tag for the given css file
   *
   * @param string $url
   * @param null|string $media
   * @return string
   */
  public function tag($url, $media = null) {

    if(is_array($url)) {
      $css = array();
      foreach($url as $u) $css[] = $this->tag($u, $media);
      return implode(PHP_EOL, $css) . PHP_EOL;
    }

    // auto template css files
    if ($url == '@auto') {
        $template = $this->kirby->site()->page()->template();
        $file =  $template . '.css';
        $root = $this->kirby->roots()->autocss() . DS . $file;
        if (file_exists($root)) {
            $mod = f::modified($root);
            $url  = $this->kirby->urls()->autocss() . '/' . $template . '.css' . '?v=' . $mod;
        } else {
            return false;
        }
    } else {
        $file = kirby()->roots()->index() . DS . $url;

        if (file_exists($file)) {
            $mod = f::modified($file);
            $url = dirname($url) . '/' . f::filename($url) . '?v=' . $mod;
        }
    }


    return parent::tag($url, $media);

  }

}

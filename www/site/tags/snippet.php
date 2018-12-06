<?php
kirbytext::$tags['snippet'] = array(
  'attr' => array(
  ),
  'html' => function($tag) {
  	$file =  $tag->attr('snippet');
  	return snippet($file, array(), true);
  }
);

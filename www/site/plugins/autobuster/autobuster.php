<?php

if(!c::get('autobuster')) return;

load([
  'kirby\\autobuster\\css' => __DIR__ . DS . 'lib' . DS . 'css.php',
  'kirby\\autobuster\\js'  => __DIR__ . DS . 'lib' . DS . 'js.php'
]);

kirby()->set('component', 'css', 'Kirby\\Autobuster\\CSS');
kirby()->set('component', 'js',  'Kirby\\Autobuster\\JS');

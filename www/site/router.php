<?php

// Content is not served from the built in server, skip
if (php_sapi_name() !== 'cli-server') return false;

$root = dirname(__DIR__);
$ds = DIRECTORY_SEPARATOR;
$index = $root . $ds . 'index.php';
$relindex = str_replace($_SERVER['DOCUMENT_ROOT'], '', $root . '/index.php');
$path = isset(parse_url($_SERVER['REQUEST_URI'])['path'])
  ? parse_url($_SERVER['REQUEST_URI'])['path']
  : $_SERVER['REQUEST_URI'];
$request = ltrim($path, '/');

// This is a real file, skip
if (file_exists($root . '/' . $request)) return false;

// Not a file with an explicit extension, skip
$ext = isset(pathinfo($request)['extension'])
  ? strtolower(pathinfo($request)['extension'])
  : NULL;
if ($ext === NULL) return false;

// It is also possible to add an extension whitelist / blacklist

// Handle the file through index.php
$_SERVER['SCRIPT_FILENAME'] = $index;
$_SERVER['SCRIPT_NAME'] = $relindex;
$_SERVER['PHP_SELF'] = $relindex . '/' . $request;
$_SERVER['PATH_INFO'] = '/' . $request;
unset($_SERVER['HTTP_CACHE_CONTROL']);

include $index;

<?php

return function($site, $pages, $page) {
  if(r::is('post') and get('login')) {
    $invalidMessage = 'Incorrect passphrase. Try again, and be sure to include spaces.';
    $successMessage = 'Correct! And they control our government at the highest level!<br/>Redirecting&hellip; 🐍🐍🐍';

    if($user = $site->user(get('username')) and $user->login(get('password'))) {
      $message = $successMessage;
      return;
    } else {
      $message = $invalidMessage;
    }

    $response = array(
      'username' => get('username'),
      'password' => get('password'),
      'message'  => $message
    );
  }

  return $response;
};

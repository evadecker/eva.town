<?php

return function($site, $pages, $page) {
  $response = [];

  if(r::is('post')) {
    if(($user = $site->user('guest')) && $user->login(get('password'))) {
      $response['success'] = true;
      $response['message'] = "Correct! And they control our government at the highest level! <br/><em>Redirecting&hellip;</em> 🐍🐍🐍";
    } else {
      $response['success'] = false;
      $response['message'] =  "Incorrect passphrase. Try again, and be sure to include spaces.";
    }
  }

  return compact('response');
};

<figure>
  <video poster="<?= $page->image('launch-video.jpg')->url() ?>" class="js-player" playsinline controls preload="none">
    <source src="<?= $page->file('launch-video.mp4')->url() ?>" type="video/mp4">
    <source src="<?= $page->file('launch-video.webm')->url() ?>" type="video/webm">
  </video>
</figure>

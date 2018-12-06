<aside>
  <figure>
    <picture>
      <source data-srcset="<?= $page->file('taskbar-icons.webp')->url() ?>" type="image/webp">
      <source data-srcset="<?= $page->image('taskbar-icons.png')->url() ?>" type="image/png"> 
      <img
        class="lazyload blur-up"
        data-src="<?= $page->image('taskbar-icons.png')->url() ?>"
        src="<?= $page->image('taskbar-icons.svg')->url() ?>"
        alt="Dropbox taskbar icons on Mac and Windows."
      />
    </picture>
    <figcaption>I created the tiny Dropbox glyphs seen in the desktop toolbar on Windows, Mac, and Linux. With 500 million active Dropbox users, this is probably the most viewed thing I’ve ever created, which both thrills and terrifies me.</figcaption>
  </figure>
</aside>

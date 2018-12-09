<aside>
  <figure>
    <!-- 550 / 440 * 100% -->
    <picture class="ratio-box" style="padding-top: 125%"> 
      <source srcset="<?= $page->file('kyle-decker-portrait-sketch.webp')->url() ?>" type="image/webp">
      <source srcset="<?= $page->image('kyle-decker-portrait-sketch.png')->url() ?>" type="image/png"> 
      <img
        src="<?= $page->image('kyle-decker-portrait-sketch.png')->url() ?>"
        alt="Portrait of the guy who made this site."
      />
    </picture>
    <figcaption>Sketch by Winston Vicinte.</figcaption>
  </figure>
</aside>

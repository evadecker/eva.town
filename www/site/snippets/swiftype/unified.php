<figure>
  <picture>
    <source data-srcset="<?= $page->file('dashboard-unified.webp')->url() ?>" type="image/webp">
    <source data-srcset="<?= $page->image('dashboard-unified.png')->url() ?>" type="image/png"> 
    <img
      class="lazyload blur-up"
      data-src="<?= $page->image('dashboard-unified.png')->url() ?>"
      src="<?= $page->image('dashboard-unified.svg')->url() ?>"
      alt="A wireframe displays the Swiftype interface with sidebars for configuring display options."
    />
  </picture>
  <figcaption>WYSIWYG for search: this wireframe demonstrates what it could look like to configure your search using the same layout and style of the search interface itself. A sidebar would contain all controls for managing content, appearance, and other customizations.</figcaption>
</figure>

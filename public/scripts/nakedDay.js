(function () {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();

  let attrs;

  // For testing:
  // month = 3; day = 9;

  if (document.querySelectorAll && month === 3 && day === 9) {
    // Remove all linked stylesheets and style blocks
    document
      .querySelectorAll('style, link[rel="stylesheet"]')
      .forEach((item) => {
        item.remove();
      });

    // Remove synth
    document.getElementById("synth").remove();

    // Remove phone
    document.getElementById("phone").remove();

    // Remove theme toggle
    document.querySelector("[data-theme-toggle]").remove();

    // Remove all inline styles
    attrs = document.querySelectorAll("[style]");
    for (let ii = 0; ii < attrs.length; ii++) {
      if (notIgnored(attrs[ii])) {
        attrs[ii].removeAttribute("style");
      }
    }

    // Inject a message at the top of the document. Optional - just remove this section if you don't want it.
    const message = document.createElement("div");
    const body = document.getElementsByTagName("body")[0];
    message.innerHTML =
      '<p>Why is this page looking so simple? It\'s <a href="https://css-naked-day.github.io">CSS Naked Day</a>!</p><hr>';
    body.insertBefore(message, body.firstChild);
  }
})();

'use strict'

import synth from './synth.js'

document.addEventListener('DOMContentLoaded', function (event) {
  // Run scripts on page change
  function refresh () {
    // Open all external links in new tab
    for (var c = document.getElementsByTagName('a'), a = 0; a < c.length; a++) {
      var b = c[a]
      b.getAttribute('href') && b.hostname !== window.location.hostname && (b.target = '_blank')
    }

    window.gtag('config', 'UA-36543481-1', {
      'page_title': document.title,
      'page_path': window.location.pathname + window.location.search
    })

    if (document.querySelector('#synth') !== null) {
      synth.init()
      document.querySelector('#synth-start').addEventListener('click', () => {
        synth.start()
      })
    }
  }

  function init () {
    refresh()
  }

  init()
})

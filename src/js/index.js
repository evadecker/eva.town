'use strict'

import WOW from 'wowjs'
import Swup from 'swup'
import 'lazysizes'
// import * as Synth from './synth.js'
// import './quotes.js'
// import './wizard.js'
// var imagesLoaded = require('imagesloaded')

document.addEventListener('DOMContentLoaded', function (event) {
  function init () {
    // ---------------------------------------------
    // Home Page
    // ---------------------------------------------
    if (document.body.classList.contains('page-home')) {
      // Synth.start()
    }

    if (!document.body.classList.contains('page-home')) {
      // Synth.stop()
    }

    // ---------------------------------------------
    // About Page
    // ---------------------------------------------
    if (document.body.classList.contains('page-about')) {
      // quotes.init()
    }

    // ---------------------------------------------
    // Swiftype Page
    // ---------------------------------------------
    if (document.body.classList.contains('page-swiftype')) {
      // ---------------------------------------------
      // Reveal annotations on scroll
      // ---------------------------------------------
      var wow = new WOW.WOW(
        {
          boxClass: 'annotation',
          offset: 120
        }
      )
      wow.init()

      // ---------------------------------------------
      // Marquee empty states
      // ---------------------------------------------
      // $('.marquee').imagesLoaded(function () {
      //   $('.marquee').marquee({
      //     speed: 50,
      //     delayBeforeStart: 0,
      //     direction: 'right',
      //     startVisible: true
      //   })
      // })

      // ---------------------------------------------
      // Color changing icon table
      // ---------------------------------------------
      document.querySelector('.table-background-toggle').addEventListener('click', () => {
        document.querySelector('.icon-table').setAttribute('data-color', document.querySelector('.table-background-toggle input:checked').value)
      })
    }
  }

  // ---------------------------------------------
  // Run once
  // ---------------------------------------------

  init()

  // ---------------------------------------------
  // Page Transitions
  // ---------------------------------------------
  let options = {
    scroll: true,
    animateScroll: false,
    debugMode: true
  }

  const swup = new Swup(options)

  swup.on('contentReplaced', function () {
    // init()
  })
})

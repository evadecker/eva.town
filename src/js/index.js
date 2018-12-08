'use strict'

import WOW from 'wowjs'
import Swup from 'swup'
import 'lazysizes'
import 'flickity'
// import * as Synth from './synth.js'
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

    }

    // ---------------------------------------------
    // Swiftype Page
    // ---------------------------------------------
    if (document.body.classList.contains('page-swiftype')) {
      // Color changing icon table
      document.querySelector('.table-background-toggle').addEventListener('click', () => {
        document.querySelector('.icon-table').setAttribute('data-color', document.querySelector('.table-background-toggle input:checked').value)
      })

      // Reveal annotations on scroll
      var wow = new WOW.WOW(
        {
          boxClass: 'annotation',
          offset: 120
        }
      )
      wow.init()

      // Marquee empty states
      // $('.marquee').imagesLoaded(function () {
      //   $('.marquee').marquee({
      //     speed: 50,
      //     delayBeforeStart: 0,
      //     direction: 'right',
      //     startVisible: true
      //   })
      // })
    }

    // Rewrite this to be event to-swiftype, event from-swiftype using SWUP
    // Else removal scripts will be run on every page load
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
    init()
  })
})

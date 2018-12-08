'use strict'

import WOW from 'wowjs'
import Swup from 'swup'
import Flickity from 'flickity'
import 'lazysizes'
import './wizard.js'
import './synth.js'
// var imagesLoaded = require('imagesloaded')

var flickity

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
      flickity = new Flickity('.quotes-carousel', {
        autoPlay: 4000,
        wrapAround: true,
        selectedAttraction: 0.04,
        friction: 0.35,
        arrowShape: 'M100 58.9998426 36.0499178 58.9998426 65.088158 85.4765278 53.6014289 100 0 50.1043963 53.6348574 0 65.0600993 14.7597671 36.09408 41.0436272 100 41.0436272z'
      })
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
          offset: 60
        }
      )
      wow.init()
      wow.sync()

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

  swup.on('animationOutDone', function () {
    flickity.destroy()
  })
})

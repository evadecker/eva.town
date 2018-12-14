'use strict'

import Swup from 'swup'
import Flickity from 'flickity'
import Rellax from 'rellax'
import WOW from 'wowjs'
import swapTwo from './swaptwo.js'
import synth from './synth.js'
import imagesLoaded from 'imagesloaded'
import 'lazysizes'
import './wizard.js'

document.addEventListener('DOMContentLoaded', function (event) {
  const swup = new Swup({
    elements: ['#swup', '#header'],
    scroll: true,
    animateScroll: false
    // debugMode: true
  })

  function init () {
    if (document.querySelector('#synth') !== null) {
      document.querySelector('#synth-start').addEventListener('click', () => {
        synth.start()
      })
      swup.on('willReplaceContent', function () {
        synth.stop()
      })
    }

    if (document.querySelector('.quotes-carousel') !== null) {
      var flickity = new Flickity('.quotes-carousel', {
        autoPlay: 4000,
        wrapAround: true,
        selectedAttraction: 0.04,
        friction: 0.35,
        arrowShape: 'M100 58.9998426 36.0499178 58.9998426 65.088158 85.4765278 53.6014289 100 0 50.1043963 53.6348574 0 65.0600993 14.7597671 36.09408 41.0436272 100 41.0436272z'
      })

      swup.on('willReplaceContent', function () {
        flickity.destroy()
      })
    }

    if (document.querySelector('.icon-table') !== null) {
      // Color changing icon table
      document.querySelector('.table-background-toggle').addEventListener('click', () => {
        document.querySelector('.icon-table').setAttribute('data-color', document.querySelector('.table-background-toggle input:checked').value)
      })
    }

    if (document.querySelector('.annotations') !== null) {
      imagesLoaded('.annotations', function () {
        var wow = new WOW.WOW({
          boxClass: 'annotation',
          offset: 60
        })
        wow.init()

        var rellax = new Rellax('.annotation-rellax', {
          speed: -0.5,
          center: true
        })

        swup.on('willReplaceContent', function () {
          wow.destroy()
          rellax.destroy()
        })
      })
    }

    if (document.querySelector('.empty-state') !== null) {
      var empties = new Rellax('.empty-state', {
        center: true
      })

      swup.on('willReplaceContent', function () {
        empties.destroy()
      })
    }

    if (document.querySelector('.garbled') !== null) {
      var garbled = document.querySelectorAll('.garbled')
      var randomRange
      var garbler
      garbled.forEach((garbled) => {
        garbler = setTimeout(function swap () {
          var text = [...garbled.innerHTML]
          randomRange = Math.floor(Math.random() * (2000 - 400) + 400)
          garbled.innerHTML = swapTwo(text)
          garbler = setTimeout(swap, randomRange)
        }, randomRange)
      })

      swup.on('willReplaceContent', function () {
        clearTimeout(garbler)
      })
    }
  }

  // Run once
  init()

  // Handle loading and killing scripts on page transitions
  swup.on('contentReplaced', function () {
    init()
  })
})

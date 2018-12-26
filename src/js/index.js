'use strict'

import Swup from 'swup'
import Flickity from 'flickity'
import swapTwo from './swaptwo.js'
import synth from './synth.js'
import 'lazysizes'
import './wizard.js'

const WOW = require('wowjs')
const swup = new Swup({
  elements: ['#swup', '#header'],
  scroll: true,
  animateScroll: false
  // debugMode: true
})

document.addEventListener('DOMContentLoaded', function (event) {
  function init () {
    // Open all external links in new tab
    for (var c = document.getElementsByTagName('a'), a = 0;a < c.length; a++) {
      var b = c[a]
      b.getAttribute('href') && b.hostname !== window.location.hostname && (b.target = '_blank')
    }

    if (document.querySelector('#synth') !== null) {
      synth.init()
      document.querySelector('#synth-start').addEventListener('click', () => {
        synth.start()
      })
      swup.on('animationOutStart', function () {
        synth.stop()
      })
    }

    if (document.querySelector('.quotes-carousel') !== null) {
      var flickity = new Flickity('.quotes-carousel', {
        autoPlay: 4000,
        wrapAround: true,
        selectedAttraction: 0.04,
        friction: 0.35,
        prevNextButtons: false
        // arrowShape: 'M100 58.9998426 36.0499178 58.9998426 65.088158 85.4765278 53.6014289 100 0 50.1043963 53.6348574 0 65.0600993 14.7597671 36.09408 41.0436272 100 41.0436272z'
      })

      flickity.on('staticClick', function (event, pointer, cellElement, cellIndex) {
        if (cellElement) {
          flickity.selectCell(cellElement, true, false)
        }
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
      var wow = new WOW.WOW({
        boxClass: 'annotation',
        offset: 60,
        live: false
      })

      wow.init()

      swup.on('willReplaceContent', function () {
        wow.destroy()
      })
    }

    if (document.querySelector('.garbled') !== null) {
      var garbled = document.querySelectorAll('.garbled')
      var randomRange
      var garbler
      garbled.forEach((garbled) => {
        garbler = setTimeout(function swap () {
          var text = [...garbled.innerHTML]
          randomRange = Math.floor(Math.random() * (3200 - 1000) + 1000)
          garbled.innerHTML = swapTwo(text)
          garbler = setTimeout(swap, randomRange)
        }, randomRange)
      })

      swup.on('willReplaceContent', function () {
        clearTimeout(garbler)
      })
    }

    if (document.getElementById('protected') !== null) {
      var form = document.getElementById('protected')
      form.addEventListener('submit', handlePasswordSubmit, false)

      swup.on('willReplaceContent', function () {
        form.removeEventListener('submit', handlePasswordSubmit)
      })
    }

    if (document.querySelector('#colophon') !== null) {
      var credits = document.getElementById('credits')
      var colophon = document.getElementById('colophon')
      var close = colophon.querySelector('.close')
      var overlay = colophon.querySelector('.colophon-overlay')
      var toggleOverlay = function () {
        if (colophon.dataset.visible === 'true') {
          colophon.dataset.visible = 'false'
          document.body.classList.remove('noscroll')
          setTimeout(function () {
            colophon.style.display = 'none'
          }, 300)
        } else {
          colophon.dataset.visible = 'true'
          colophon.style.display = 'block'
          document.body.classList.add('noscroll')
        }
      }
      credits.addEventListener('click', toggleOverlay)
      close.addEventListener('click', toggleOverlay)
      overlay.addEventListener('click', toggleOverlay)
    }
  }

  // Run on initial load
  init()

  // Handle loading and killing scripts on page transitions
  document.addEventListener('swup:contentReplaced', function () {
    init()
  })
})

function handlePasswordSubmit (e) {
  e.preventDefault()

  var form = this
  var data = new FormData(form)
  var url = form.action + '.json'
  var passwordField = form.querySelector('#password')
  var message = form.querySelector('.message')

  var xhr = new XMLHttpRequest()
  xhr.open('POST', url, true)
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  xhr.send(data)

  xhr.onload = function () {
    if (xhr.status === 200) {
      var json = JSON.parse(xhr.responseText)
      console.log(json)
      if (json.success === false) {
        message.innerHTML = json.message
        // Remove blinking cursor for animation since it glitches on iOS
        passwordField.blur()
        // Add classes for styling and animations
        form.classList.add('error')
        form.classList.remove('try-again')
        // Needed to reset unfinished CSS animations
        void form.offsetWidth
        form.classList.add('try-again')
        setTimeout(function () {
          // Clear input field when the shake animation starts shakin'
          passwordField.value = ''
        }, 250)
        setTimeout(function () {
          // Re-focus field
          passwordField.focus()
        }, 800)
      } else if (json.success === true) {
        message.innerHTML = json.message
        passwordField.disabled = true
        form.classList.remove('error', 'try-again')
        form.classList.add('success')
        setTimeout(function () {
          window.location.reload()
        }, 3000)
      }
    } else {
      console.log('Something went wrong. Please try again.')
    }
  }
}

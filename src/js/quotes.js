'use strict'
import * as $ from 'jquery'

var quotes = (function () {
  var activeQuote = 1
  var $el = $('#quotes')
  var $quote = $el.find('.quote')
  var $dot = $el.find('.quote-dot')
  var $prevArrow = $el.find('.prev')
  var $nextArrow = $el.find('.next')

  function _bindEvents () {
    $prevArrow.on('click', prevQuote())
    $nextArrow.on('click', nextQuote())
    $dot.on('click', function () {
      var num = $(this).index()
      setActiveQuote(num)
    })

    $(document).keydown(function (e) {
      switch (e.key) {
        case 'ArrowLeft':
          prevQuote()
          break
        case 'ArrowRight':
          nextQuote()
          break
      }
    })
  }

  function unbindEvents () {
    $el.unbind();
  }

  function init () {
    setActiveQuote(activeQuote)
    _bindEvents()
    _render()
  }

  function _render () {
    $quote.removeClass('active')
    $quote.eq(activeQuote).addClass('active')
    $dot.removeClass('active')
    $dot.eq(activeQuote).addClass('active')
  }

  function getNumQuotes () {
    return $quote.length - 1
  }

  function setActiveQuote (num) {
    if (num > getNumQuotes()) {
      num = 0
    } else if (num < 0) {
      num = getNumQuotes()
    }

    activeQuote = num
    _render()
  }

  function nextQuote () {
    setActiveQuote(activeQuote + 1)
  }

  function prevQuote () {
    setActiveQuote(activeQuote - 1)
  }
})()

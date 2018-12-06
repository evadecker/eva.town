import WOW from 'wowjs'
import Swup from 'swup'
import * as $ from 'jquery'
import './wizard.js'
var imagesLoaded = require('imagesloaded')
require('jquery.marquee')
require('lazysizes')

imagesLoaded.makeJQueryPlugin($)

jQuery(document).ready(function () {
  function init () {
    // ---------------------------------------------
    // Home Page
    // ---------------------------------------------
    if ($('body').hasClass('page-home')) {
      synth.init()
    }

    if (!$('body').hasClass('page-home')) {
      synth.stop()
    }

    // ---------------------------------------------
    // About Page
    // ---------------------------------------------
    if ($('body').hasClass('page-about')) {
      // ---------------------------------------------
      // Quotes Slider
      // ---------------------------------------------
      const $quote = $('.quote')
      const $dot = $('.quote-dot')
      const numQuotes = $quote.length - 1

      var activeQuote = 0

      function setActiveQuote(num) {
        if (num > numQuotes) {
          num = 0;
        } else if (num < 0) {
          num = numQuotes;
        }

        activeQuote = num;

        $quote.removeClass('active');
        $quote.eq(activeQuote).addClass('active');

        $dot.removeClass('active');
        $dot.eq(activeQuote).addClass('active');
      }

      function nextQuote() {
        setActiveQuote(activeQuote + 1);
      }

      function prevQuote() {
        setActiveQuote(activeQuote - 1);
      }

      function initQuotes() {
        setActiveQuote(activeQuote);
        
        $('.quotes .next').click(function() {
          nextQuote();
        });

        $('.quotes .prev').click(function() {
          prevQuote();
        });

        $dot.click(function() {
          num = $(this).index();
          setActiveQuote(num);
        })

        $(document).keydown(function(e) {
          switch (e.key) {
            case 'ArrowLeft':
              prevQuote();
              break;

            case 'ArrowRight':
              nextQuote();
              break;
          }
        });
      }
      initQuotes()
    }

    // ---------------------------------------------
    // Swiftype Page
    // ---------------------------------------------
    if ($('body').hasClass('page-swiftype')) {
      // ---------------------------------------------
      // Reveal annotations on scroll
      // ---------------------------------------------
      wow = new WOW(
        {
          boxClass: 'annotation',
          offset: 120
        }
      )
      wow.init()

      // ---------------------------------------------
      // Marquee empty states
      // ---------------------------------------------
      $('.marquee').imagesLoaded(function () {
        $('.marquee').marquee({
          speed: 50,
          delayBeforeStart: 0,
          direction: 'right',
          startVisible: true
        })
      })

      // ---------------------------------------------
      // Color changing icon table
      // ---------------------------------------------
      $('.table-background-toggle input[type=radio]').click(function () {
        var color = this.value
        $(this).closest('.icon-table').attr('data-color', color)
      })
    }

    // ---------------------------------------------
    // All pages
    // ---------------------------------------------

    $('.page-link').removeClass('active')

    if ($('body').hasClass('page-about')) {
      $('.page-link-about').addClass('active')
    }
    if ($('body').hasClass('page-project')) {
      $('.page-link-work').addClass('active')
    }
    if ($('body').hasClass('page-home')) {
      $('.page-link-home').addClass('active')
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
    animateScroll: false
  }

  const swup = new Swup(options)

  swup.on('contentReplaced', function () {
    init()
  })
})

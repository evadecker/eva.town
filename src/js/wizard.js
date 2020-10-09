var wizard = (function () {
  var dialogue

  function setDialogue () {
    var yearText
    var daysLeft
    var daysLeftText
    var year = new Date().getFullYear()

    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
      // Is leap year
      yearText = 'Well, ' + year + ' is a leap year, so I guess that makes it 366.'
    } else {
      yearText = 'All 365 days of ' + year + '. Every one.'
    }

    var today = new Date()
    var endOfYear = new Date(year, 11, 31)
    var oneDay = 1000 * 60 * 60 * 24

    daysLeft = Math.ceil((endOfYear.getTime() - today.getTime()) / (oneDay))

    if (daysLeft > 1) {
      daysLeftText = 'Only ' + daysLeft + ' days left...'
    } else {
      daysLeftText = 'Today’s the last day. Hallelujah!'
    }

    dialogue = [
      ['???: AAAAAHHHHHH!!!', 3000],
      ['Something heavy shatters.', 1500, 'italic'],
      ['You hear a muffled curse and the footsteps of someone approaching.', 2500, 'italic'],
      ['???: ...Who’s there?', 2500],
      ['A door creaks open, revealing a grisled old man with an unkempt beard.', 2500, 'italic'],
      ['His robe is tattered and matted with cat hair.', 3000, 'italic'],
      ['OLD MAN: You startled me.', 2500],
      ['OLD MAN: I don’t get visitors often.', 3000],
      ['OLD MAN: You must’ve come a long way.', 2500],
      ['Corkscrewing his pinky finger in his ear, he dislodges a wad of earwax.', 2500, 'italic'],
      ['OLD MAN: I suppose I should introduce myself.', 4000],
      ['He brushes cat hair off his robe.', 2000, 'italic'],
      ['OLD MAN: I’m the man behind the console.', 3000],
      ['OLD MAN: You can call me THE WIZARD.', 2000],
      ['He does halfhearted jazz hands.', 3000, 'italic'],
      ['THE WIZARD: Sorry I’m not really dressed for the occasion.', 3000],
      ['THE WIZARD: See, you caught me in the middle of work.', 3000],
      ['THE WIZARD: I make this website run.', 3000],
      ['THE WIZARD: Day and night!', 2000],
      ['THE WIZARD: 24 hours a day, 365 days a year.', 2000],
      ['THE WIZARD: ' + yearText, 1500],
      ['THE WIZARD: ' + daysLeftText, 2000],
      ['THE WIZARD: Not that anyone’s counting.', 1000],
      ['THE WIZARD: Yep. That’s my job.', 1000],
      ['THE WIZARD: Everything look ok?', 3000],
      ['THE WIZARD: Buttons working?', 1500],
      ['THE WIZARD: Images loading?', 1200],
      ['THE WIZARD: Animations animating?', 1000],
      ['THE WIZARD: No typos?', 1000],
      ['THE WIZARD: No glitches?', 1000],
      ['THE WIZARD: No rogue orcs?', 1000],
      ['THE WIZARD: ...', 1000],
      ['THE WIZARD: Those orcs are a real headache, I tell ya.', 3000],
      ['THE WIZARD: If you find anything, would you please let me know?', 2500],
      ['THE WIZARD: My master is rather... particular.', 2400],
      ['THE WIZARD: They likes to keep things tidy.', 3000],
      ['THE WIZARD: I take mail at this address: thewizard@kyledecker.me', 2000],
      ['THE WIZARD: I mean...', 2000],
      ['THE WIZARD: ...you don’t have to only write about business.', 4000],
      ['THE WIZARD: An old wizard gets lonely.', 6000],
      ['THE WIZARD: .', 2000],
      ['THE WIZARD: ..', 2000],
      ['THE WIZARD: ...', 2000],
      ['THE WIZARD: ....', 2000],
      ['THE WIZARD: .....you come ‘round these parts much?', 1000],
      ['THE WIZARD: Uh, hm, never mind. Just thinking to myself.', 6000],
      ['THE WIZARD: Anyways.', 3000],
      ['THE WIZARD: Thanks for coming by.', 1500],
      ['THE WIZARD: You probably have things to do.', 2000],
      ['THE WIZARD: Me?', 3000],
      ['THE WIZARD: I’ve gotta keep putting the ‘fun’ in ‘functions’!!!', 3000],
      ['He expels a loud, forced laugh at his own joke.', 2000, 'italic'],
      ['He smiles awkwardly.', 6000, 'italic'],
      ['THE WIZARD vanishes in a puff of smoke without saying goodbye.', 5000, 'italic'],
      ['The smoke leaves behind a sour odor.', 5000, 'italic'],
      ['...yup, he’s really gone.', 12000, 'italic'],
      ['This smell sure is lingering.', 8000, 'italic'],
      ['THE WIZARD, UNSEEN: What are you still doing here, kid?!', 30000],
      ['THE WIZARD: Get off the computer! Go live your life!', 2000]
    ]
  }

  function handleDevtoolsOpen () {
    var styles
    var totalDelay = 0

    for (let i = 0; i < dialogue.length; i++) {
      let delay = dialogue[i][1]
      setTimeout(function () {
        var text = '%c' + dialogue[i][0]
        if (dialogue[i][2] === 'italic') {
          styles = 'font-size:14px; font-style:italic;'
        } else {
          styles = 'font-size:14px; font-weight:bold;'
        }
        console.log(text, styles)
      }, totalDelay += delay)
    }
  }

  function init () {
    setDialogue()

    // Detect if devtools are open
    // https://stackoverflow.com/a/30638226
    var r = /./
    var isDevtoolsOpen = false
    r.toString = function () {
      isDevtoolsOpen = true
    }
    console.log('%c', r)

    if (isDevtoolsOpen) {
      handleDevtoolsOpen()
    }
  }

  return {
    init: init
  }
})()

export default wizard

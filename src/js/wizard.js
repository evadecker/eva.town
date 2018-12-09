import 'devtools-detect'

(function () {
  // Talk to the man behind the curtain once the console is opened
  window.addEventListener('devtoolschange', function (e) {
    var yearText
    var daysLeft
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

    var dialogue = [
      ['???: AHHHH!!!', 500],
      ['* Something heavy shatters. *', 1000, 'italic'],
      ['* You hear a muffled curse and the footsteps of someone approaching. *', 2000, 'italic'],
      ['???: ...Who’s there?', 2000],
      ['* A door opens, revealing a grisled old man with an unkempt beard. *', 2000, 'italic'],
      ['* His robe is tattered and matted with cat hair. *', 3000, 'italic'],
      ['OLD MAN: You startled me.', 2000],
      ['OLD MAN: I don’t get visitors often.', 3000],
      ['OLD MAN: You must’ve come a long way.', 2000],
      ['OLD MAN: I suppose I should introduce myself.', 4000],
      ['OLD MAN: I’m the man behind the curtain.', 1500],
      ['OLD MAN: You can call me THE WIZARD.', 1500],
      ['* He dusts some cat hair off his robe. *', 2000, 'italic'],
      ['THE WIZARD: Sorry I’m not really dressed for the occasion.', 2000],
      ['THE WIZARD: I do have nicer clothes.', 2000],
      ['THE WIZARD: Really.', 2000],
      ['* You ask what he does. *', 3000, 'italic'],
      ['THE WIZARD: What do I do?', 3000],
      ['THE WIZARD: I make this website run.', 3000],
      ['THE WIZARD: Day and night, 24 hours a day, 365 days a year.', 2000],
      ['THE WIZARD: ' + yearText, 1500],
      ['THE WIZARD: Only ' + daysLeft + ' days left...', 1000],
      ['THE WIZARD: Not that anyone’s counting.', 1000],
      ['THE WIZARD: But yeah, that’s my job.', 1000],
      ['THE WIZARD: Everything look ok?', 3000],
      ['THE WIZARD: Buttons working?', 1500],
      ['THE WIZARD: Images loading?', 1200],
      ['THE WIZARD: Animations animating?', 1000],
      ['THE WIZARD: No typos?', 800],
      ['THE WIZARD: No glitches?', 600],
      ['THE WIZARD: No rogue orcs?', 400],
      ['THE WIZARD: ...', 400],
      ['THE WIZARD: ....', 400],
      ['THE WIZARD: .....', 400],
      ['THE WIZARD: ......', 400],
      ['THE WIZARD: .......', 400],
      ['THE WIZARD: If you find anything, would you please let me know?', 4000],
      ['THE WIZARD: My master is rather... particular.', 2400],
      ['THE WIZARD: He likes to keep things tidy.', 3000],
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
      ['THE WIZARD: If you wanna hang out some time, you can find me here:', 2000],
      ['THE WIZARD: https://github.com/kybradeck/', 1500],
      ['THE WIZARD: You’ve probably got stuff to do.', 2000],
      ['THE WIZARD: Me?', 3000],
      ['THE WIZARD: I’ve gotta keep putting the ‘fun’ in ‘functions’!!!', 3000],
      ['* He expels a loud, forced laugh at his own joke. *', 2000, 'italic'],
      ['* He smiles awkwardly. *', 6000, 'italic'],
      ['* Neither of you are sure what to do. *', 4000, 'italic'],
      ['* THE WIZARD vanishes in a puff of smoke without saying goodbye. *', 5000, 'italic'],
      ['* The smoke leaves behind a sour odor. *', 5000, 'italic'],
      ['* ...yup, he’s gone. *', 12000, 'italic'],
      ['* This smell is really lingering. *', 6000, 'italic'],
      ['THE WIZARD, UNSEEN: What are you still doing here, kid?!', 30000],
      ['THE WIZARD: Get off the computer! Go live your life!', 2000]
    ]

    var styles
    var totalDelay = 0

    if (e.detail.open) {
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
  })
})()

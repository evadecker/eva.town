\version "2.12.2"

#(set-global-staff-size 19)

\header {
  title    = "Star Trek: Voyager"
  subtitle = \markup { \bold "Title Theme" }
  composer = "Jerry Goldsmith"
  arranger = "Ky Decker"
  tagline = ##f
}

\paper {
  #(set-paper-size "letter")
  ragged-last-bottom=##f
  top-margin = 14
  left-margin = 15
  right-margin = 15
}

global = {
  \key ges \major
  \numericTimeSignature
  \time 2/2
  \tempo "Adagio con moto" 2 = 60
}

rh_intro = {
  \relative c {
    \clef bass
    r4\f <aes des ees aes>2.->\arpeggio |

    \clef treble
    <aes'' aes'>2--( <des, des'>2-- | <des' des'>1--) |
    <aes, des ees aes>4\mp( des4 \tuplet 3/2 {des'4 c aes} | des,1) |

    \clef bass
    r4\f <aes, des ees aes>2.->\arpeggio |

    aes'4\mp des,\cresc des' c |
    \tempo "poco accel."
    aes4 des, des' c |
    aes4 des,\! \tempo "rit." des'4 c4 |
  }
}

lh_intro = {
  \clef bass
  \relative c,, {
    des8-> des'8~ des2. |
    R1*3 |
    r2. r8 aes |
    des,8-> des'8~ des2. |
    r8 aes'8~ aes4. des8~ des4~ |
    des8 aes8~ aes4. des8~ des4~ |
    des8 aes8~ aes4. des8~ des4~ |
  }
}

rh_chorale = {
  \section
  \relative c' {
    \tempo "a tempo"
    <<
      {des2\mf(\! ges, | ges' f4 des)}
      \\
      {bes1 | ces1}
    >>
    |
    <<
      {des4( ees ees des) | des2( ces4) r8 ges}
      \\
      {ges1 | ges2.  r4}
    >>
    |
    <<
      {des'8 ges, ges2 r8 bes | des aes aes2. | ces8 ees, ees2 aes4}
      \\
      {bes1 | f1 | aes2.  r4}
    >>
    \tempo "poco rit."
    f4(~ f16 ges aes bes\cresc \clef treble ces des ees f ges aes bes ces |

    \tempo "a tempo"
    <des, ges des'>2\mf\arpeggio)\! ges2( | <ges ces ees ges>2 <f f'>4 des') |
    <des, ges des'>4( <ees ees'> <ees ges ees'> <des des'> |
    <bes' ees ges bes>2\> <ges ges'>4.)\! ees'8 |
    <<
      {des8\mp  ges, ges2 r8 des' | aes  des, des2 aes'4}
      \\
      {ges1 | f }
    >>
    \pageBreak |
    <<
      {r8 ges ges' ges, f-- ges ges' ges,}
      \\
      {<bes, ges'>1}
    >>
    \stemUp ees8-- ges ges' ges, des-- ges ges' ges, |
  }
}

lh_chorale = {
  \section
  \relative c {
    <ges des'>1 | aes | bes | ces |
    ges1 | <des des'> | <aes aes'> |
    des8 aes' des2 <des, des'>4 |

    ges8 des' ges des bes' ges des ges |
    aes, ees' aes ees ces' aes ees aes |
    bes, ges' bes ges des' bes ges bes |
    ces, ges' ces des ees4. r8 |
    <des, bes' des>1 | <des aes'> |
    <ges, des' ges>1  |
    <aes ges'>2 <bes ges'>2 |
  }
}

rh_running = {
  \section
  \relative c'' {
    \section
    <ces, des ees ges>2_\cresc( <aes aes'>4 <bes bes'> |
    <b d g b>4 <cis cis'> <d d'> <e e'> |
    <ges ces ees ges>2  <ces, ces'>4 <ges' ces ees ges> |
    <g b d g>1) |

    <ges ces ees ges>2\mf( <\parenthesize ces, ces'>4 <ges' ces ees ges> |
    <g b cis e g>2) <\parenthesize b, b'>4( <g' b cis e g> |
    <gis b d e gis>2.\f <ais ais'>4 |
    <aes des f aes>2) <aes des> |
  }
}

lh_running = {
  \section
  \relative c {
    ces8 ges ees' ces ges' ees ces ees |
    b g d' b g' d b d |
    ces ges ees' ces ges' ees ces ees |

    \tuplet 6/4 2 {
      b8 g b d b d g d b d b g |
      ces, ges' ces ces ges' ces ces ges ces, ces8 ges8 ces, |
      b g' b8 b g' b b g b, b g b, |
      e b' e e b' e e b e, e b e, |
      des aes' des f aes des
    } f4 <des,,, des'>-- |
  }
}

rh_climax = {
  \relative c'' {
    \section
    \tempo "Un poco meno mosso"
    <des ges bes des>2->\ff( <ges, des' ges>2 |
    <ges' ces ees ges>2 <f ces' ees f>4 <des des'>) |
    \tempo "molto rit."
    <des bes' des>4\( <ees bes' ees> <ees bes' ees> <des bes' des> |
    <bes' ees ges bes>2-> <ges bes ees ges>~ | 2.\fermata\) r8 ees' |

    \tempo "a tempo"
    <<
      {des8\mf ges,8 ges2 r8 des' | aes des, des2 r8 aes'}
      \\
      {ges1 | f }
    >>
    <<
      {ges1\decresc~ | ges\!}
      \\
      {r8 ges, ges' ges, f-- ges ges' ges, | ees-- ges ges' ges, des-- ges ges'4}
    >>
    {e,,16 [fis16 gis16 a16 b16 cis16 d16 e16 ]} <a, d fis>8-.\sfz\! <b e gis>8->~ <b e gis>4 |
    <<
      {r4 ges'' \tuplet 3/2{ges'4 f des} | ges,1}
      \\
      {<bes,, des bes'>1~ | <bes des bes'> }
    >>
    \fine
  }
}

lh_climax = {
  \section
  \relative c, {
    <ges ges'>4-> <des'' ges bes> <des ges ces> <des ges des'> |
    <aes, aes'> <des' aes' ces> <des aes' des> <des aes' ees'> |
    <bes, bes'> <des' bes' des> <des bes' ees> <des bes' f'> |
    \grace {s8 <ces, ces'>8} <ges'' bes ees ges>1~ | 2. r4 |
    \clef treble
    <des' bes' des>1 | <des aes'> |
    \clef bass
    <ges,, des' ges>1~ | <ges des' ges>1 |
    r2 <d, d'>8-. <d'' a' d>8->~  <d a' d>4 |
    <ges, des' ges>1~ | <ges des' ges> |
    \fine
  }
}

right = {{
  \global
  \rh_intro
  \rh_chorale
  \rh_running
  \rh_climax
}}

left = {{
  \global
  \lh_intro
  \lh_chorale
  \lh_running
  \lh_climax
}}

\score {
  \new PianoStaff
  <<
    \new Staff = "right" \right
    \new Staff = "left" \left
  >>

  \layout {
    \override DynamicTextSpanner.style = #'none
    \override DynamicLineSpanner.staff-padding = 3
  }
  \midi { }
}

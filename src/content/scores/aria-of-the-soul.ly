\version "2.26.0"

#(set-global-staff-size 19)

\header {
  title = "Aria of the Soul"
  subtitle = \markup { \bold "Velvet Room Theme" }
  subsubtitle = \markup { \italic \raise #0.5 "from Persona" }
  composer = "Shoji Meguro"
  arranger = "Arr. Ky Decker"
  tagline = ##f
}

\paper {
  #(set-paper-size "letter")
  ragged-last-bottom = ##f
  top-margin = 12
}

global = {
  \key b \minor
  \time 4/4
  \tempo "Andante" 4 = 100
}

rh_intro = {
  <<
    \relative c'' {b8\p\( cis d b cis d b cis | d b cis d fis4.\)\fermata}
    \\
    \relative c'' {b2 a2 | g2}
  >>
   \tuplet 3/2 { e16\( d cis } |
  b8\mp cis d b cis d b cis | d b cis d fis4.\)\fermata \tuplet 3/2 { e16\( d cis } |
  d8 e fis d e fis d e | \tempo "poco accel." eis\cresc fis gis eis fis gis eis fis |
  fis gis a fis gis a fis gis\! | a\mf fis g? a fis g a fis |
  \tempo "rit."
  a8\decresc d, cis d a' d, cis d | a' d, cis d\! a d cis d\) |
}

lh_intro = {
  R1 | R1 |
  \clef treble
  b8 fis' a4 a,8 fis' a4 |
  <g, d' fis>2~ 4.\fermata r8 |

  \clef bass
  <d, d'>2 <fis' a e'> |
  <cis, cis'>2 <<
    \relative c { fis'4( eis) }
    \\
    \relative c, {<gis'' b>2}
   >> |
  <fis fis'>2 <a' cis gis'> |
  <e, e'> <b'' e a> |

  <d,, a' a'>1\arpeggio~ q |
}

rh_chorale = {
  \section
  \tempo "a tempo"
  \relative c'
  <<
    {d'2\mp cis4 d | b2. r8 b16 cis}
    \\
    {fis,2 e | e2( d4) r4}
  >>
  <<
    \relative c'' {d2 cis4 fis | b,1}
    \\
    \relative c' {fis2 e | d1}
  >>

  <g,, d'>2 fis''4. e16 d |
  <<
    \relative c'' {cis1~ | cis2 e4. d16 cis}
    \\
    \relative c' {e2 a4 g | fis1}
  >>
  <<
    \relative c'' {b2 cis4 d | g, d' cis d}
    \\
    \relative c' {fis2 e | d e}
  >>

  \relative c'
  <<
    {d'2 cis4 d | b2. r8 b16 cis}
    \\
    {fis,2 e | d2 cis4 d}
  >>
  <<
    {d2 cis4 fis | b,2. r8 b16 cis}
    \\
    {fis,2 e | d2 cis4 fis}
  >>
  <<
    \relative c'' {d2 cis4 fis | b,2 cis4 d}
    \\
    \relative c' {<d b'>2\cresc b'4 ais4 | d,2 e}
  >>
  <<
    \relative c'' {g4 fis' e d | cis2.}
    \\
    \relative c'' {g2 gis2 | a2.\!\mf}
  >> r4 |
}

lh_chorale = {
  \section
  \relative c'
  <<
    {a2 a | b1}
    \\
    {d,2 cis | b1}
  >>
  <<
    \relative {b2 a | a( g)}
    \\
    \relative {b,2 a | g2. fis4}
  >>

  \relative c <e, b' e>1 |
  <<
    \relative {b2( a)}
    \\
    \relative <a, e'>1
  >>
  \relative c, <fis cis' fis> |

  r8 b' fis' b r a, e' a |
  r g, d' g~ <a, e' g>2 |

  r8 d8 a' d r cis,8 a' cis |
  r b, fis' b~ b2 |
  b8 b, fis' b r a, e' b'16 cis |
  r8 g, d' g~ g2 |
  g,4 g' fis fis, |
  <b fis'>2 <a fis'> |
  <<
    \relative c' {g2 gis}
    \\
    \relative c {b1}
  >>
  <a e' a>2. g4 |
}

rh_ostinato = {
  \section
  \relative c''
  <<
    \relative c''' {a1~ | a4. g8 fis g a fis}
    \\
    \relative c'' {<cis e>1\mp | <b d>}
  >>
  <<
    \relative c''' {g1~\mordent | g4. g8 fis e d cis}
    \\
    \relative c'' {<b d>1 | <a cis>}
  >>
  <cis' e a>2.. fis8 | <b, d>2.. e16 fis |
  <<
    \relative c''' {g8 fis e d cis d e fis}
    \\
    \relative c'' {<b d>2}
  >>
  <ais, cis>1~ | 1\fermata
}

lh_ostinato = {
  \section
  \relative c,

  fis8 cis a' gis a fis cis e |
  b fis' d' cis d  b fis a |
  e, b' g' fis g e b d |
  a e' cis' b cis a e g |
  fis, cis' a' gis a fis cis e |
  b fis' d' cis d  b fis a |
  e b' g' fis e d cis b |
  <fis cis'>1~ | 1\fermata
}

rh_improv_a = {
  \section

  \relative c'' {
    <d d'>1\p |
    r2 <b' b'> |
    <cis cis'>2. r8 e |
    <cis fis>1 |
    r4. a'8( b,2) |
    r4. a8( cis,4.) d8 |
    <<
      \relative c'' {e2.. fis8 | fis1}
      \\
      \relative c'' {b1 | ais1}
    >>
  }
}

lh_improv_a = {
  \section
  <b cis d>4 4 4 4 |
  <g b d e>4 4 4 4 |
  <g a cis>4 4 4 4 |
  <fis a cis d>4 4 <fis a b d>4 4 |
  <g b d>4 4 4 4 |
  <e b' d>4 4 4 4 |
  <fis b>4 4 4 4 |
  <fis cis'>4 4 4 4 |
}

rh_improv_b = {
  \relative c'' {
    fis8( b2..) | cis8( d2..) |
    e8( fis2.) e8( | a,1) |
    r4. b16( ais cis b a! g fis e d cis | b2.) r8 a8( |
    fis2.) r8 e( | cis1) |
  }
}

lh_improv_b = {
  <b cis d>4 4 4 4 |
  <g b d e>4 4 4 4 |
  <g a cis>4 4 4 4 |
  <fis a cis d>4 4 <fis a b d>4 4 |
  <g b d>4 4 4 4 |
  <e b' d>4 4 4 4 |
  <fis b e>4 4 4 4 |
  <fis ais>4 4 4 4 |
}

rh_improv_c = {
  \clef bass
  \relative c' {
    <b cis d>4 4 4 4 |
    <g b d e>4 4 4 4 |
    <a cis e>4 <cis e>4 4 4 |
    <a cis e>4 <a cis d fis>4 4 4 |
    <b d>4 4 4 4 |
    <g b d>4 4 4 4 |
    <g b e>4 4 4 4 |
    <ais fis'>1 |
  }
}

lh_improv_c = {
  \relative c {
    r2 b4. fis8 |
    g4. fis'8 e d cis d |
    e8 a, a'2~ a8 g |
    g4 fis2. |
    r8 b, a' g g fis fis e |
    e2. r8 \tuplet 3/2 {e16 d cis} |
    b8 cis d b cis d b cis~ |
    <cis fis>1
  }
}

rh_theme_return = {
  \section
  \clef treble
  \relative c''
  <<
    {d1~\mp | d4. fis8 e d cis d | cis1~ | cis4. e8 d cis b cis }
    \\
    {fis,2.. fis8 | g1 | e2.. e8 | fis1 }
  >>
  <<
    {b2. cis8 d | d2 r8 b cis d | d cis cis2. | b8 ais ais2. }
    \\
    {g1 | gis | a\cresc | <e fis>2 g?4 fis\! }
  >>
}

lh_theme_return = {
  \section
  b,8 d' cis d b d a d | g, d' fis, d' e, d' d, d' |
  a,8 cis' b cis a cis g cis | fis, cis' e, cis' d, cis' cis, cis' |
  g,8 g' e g d g cis, g' |
  gis,8 gis' e gis d gis cis, gis' |
  a,8 a' e a d, a' cis, a' |
  ais,8 ais' e ais d, ais' cis, ais' |
}

rh_theme_eighths = {
  \section

  \relative c' {
    <d fis d'>2..\mf fis8 |

  \relative c''
    <<
      {g4. fis'8 e d cis d}
      \\
      {d,4 r b'2}
    >>
  }

  <a cis>2.\mordent r8 a' |
  <d, g> fis e d cis d e fis |
  <g, b>2 r4 cis8 d |
  <gis, d'>2 r8 b8 cis d |
  <<
    \relative c'' {d8 cis cis2.}
    \\
    \relative c'' {a2.. g?8}
  >>
  \time 5/4
  |
    <<
    \relative c'' {b8 ais ais2}
    \\
    \relative c' {<e fis>2.}
  >>
  r2 |
  \numericTimeSignature
  \time 4/4
}

lh_theme_eighths = {
  \section

  \relative c {
    b8 <cis' d fis>8 8 8 8 8 8 8 |
    e,,8 <b'' d g>8 8 8 <b e g>8 8 <b d g>8 8 |
    a,8 <a' cis e>8 8 <a cis a'>8 8 <a cis g'>8 8 8 |
    <a d g>8 8 <a d fis>8 8 <a d e>8 8 <a d>8 8 |

    g,8 <d' b' d>8 8 8 8 8 8 g, |
    gis8 <d' b' d>8 8 8 8 8 8 8 |
    a8 <e' a d>8 8 8 8 8 8 <g,? g'?> |
    \time 5/4
    <fis fis'>8 <d' d'> <cis cis'> <b b'> \tempo "molto rit." <ais ais'> <g g'> <fis fis'> <e e'> <d d'> <cis cis'> |
    \numericTimeSignature
    \time 4/4
  }
}

rh_theme_triplets = {
  \section
  \tempo "a tempo"

  \relative c'' {
    <d fis d'>2..\f <fis, fis'>8 |
    <g b g'>4. <fis' fis'>8 <e e'> <d d'> <cis cis'> <d d'> |
    <cis e cis'>2. r8 <a' a'>8 |
    <g d' g>8 <fis fis'> <e e'> <d d'> <cis cis'> <d d'> <e e'> <fis fis'> |
    <b, g' b>2. \tuplet 3/2 {<b g' b>8 <cis cis'> <d d'>} |
    <d gis d'>2 r8 <b b'>8 <cis gis' cis> <d d'> |
    <d a' d>8 <cis cis'> <cis a' cis>2. |
    <b eis b'>8\accent\ff <ais ais'> <ais fis' ais>2~\accent ais'8 g16\sp fis  |
    e d cis b ais g fis e d cis16 b ais \change Staff = "left" g fis e d |
    cis\cresc b ais g \tempo "rit." fis e d cis b ais g fis e d cis r\! \change Staff = "right" |
  }
}

lh_theme_triplets = {
  \section

  \relative c, {
    \tuplet 3/2 4 {
      b8 fis' d' b'\tenuto fis d cis'\tenuto fis, d d'\tenuto fis, d |
      e, b' g' d'\tenuto b e, e'\tenuto b e, fis'\tenuto b, e, |
      e'\tenuto a,, e' a\tenuto a e' a\tenuto e a, g'\tenuto e a, |
      g' fis d a g fis d a g fis d a    }
    |

    \tuplet 3/2 4 { g g' d' g, d' b' b d, g, } g8 g, |
    \tuplet 3/2 4 { gis gis' d' gis, d' b' b d, gis, } gis8 gis, |
    \tuplet 3/2 4 { a e' a a e' a a e a, } <a, a'>8\tenuto <g g'>\tenuto |
    <fis fis'>8\accent r <fis' fis'>2.\accent |
    s1*2 |
  }
}

rh_outro = {
  \section
  \relative c'
  \tempo "Largamente maestoso"
  \appoggiatura s8
  <<
    \relative c'' {d2.\ff fis,4 | g4. fis'8 e d cis d}
    \\
    \relative c' {<d fis>2. d4 | e1 }
  >> |
  <<
    \relative c'' {cis2. e,4 | fis1 }
    \\
    \relative c' {<e fis>2. cis4 | dis1 }
  >> |
  <<
    \relative c'' {b2. b,4 }
    \\
    \relative c' {<b e>2. b4 }
  >> |
  <<
    \relative c'  {cis2}
    \\
    \relative c' {<g b>2}
  >> r8
  <b, b'> <cis cis'> <d d'> |
  <d fis b d>2 <e fis b e>2 |
  \tempo "rit." <cis fis b cis>2 <cis e ais cis> |
  <b fis' b>1\fff\fermata
  \fine
}

lh_outro = {
  \section

  \relative c {
    \appoggiatura <b,, b'>8
    <b'' fis' b>2. 4 | <b g' b>1 |
    <ais fis' ais>2. 4 | <a! fis' b>1 |
    <g e' g>2. 4 | <e b' e>2 r2 |
  }
  <<
    \relative c,, { s1 | r8 cis''-- d-- b-- cis-- d-- b-- cis-- }
    \\
    \relative c,, { r4 <fis fis'>2 4~ | <fis fis'>2 fis'2 }
  >>
  |
  <b,, fis' b>1\fermata
  \fine
}

right = \relative c'' {
  \global
  \clef treble

  \rh_intro
  \break
  \rh_chorale
  \break
  \rh_ostinato
  \rh_improv_a
  \rh_improv_b
  \rh_improv_c
  \rh_theme_return
  \rh_theme_eighths
  \rh_theme_triplets
  \break
  \rh_outro
}

left = \relative c' {
  \global
  \clef bass

  \lh_intro
  \lh_chorale
  \lh_ostinato
  \lh_improv_a
  \lh_improv_b
  \lh_improv_c
  \lh_theme_return
  \lh_theme_eighths
  \lh_theme_triplets
  \lh_outro
}

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

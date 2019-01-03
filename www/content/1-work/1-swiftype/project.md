title: Swiftype

----

slug: swiftype

----

year: 2015–2016

----

color: yellow

----

website: swiftype.com

----

tagline: On shipping incrementally, learning to appreciate process, and what makes a good interface font.

----

challenge: Improve usability for the Swiftype dashboard without modifying any core features.

----

role: Research, interface design, typesetting, iconography, illustration, and front-end engineering.

----

text:

## I didn't start this project the way you're supposed&nbsp;to.

To be honest, I didn't know how projects were supposed to start. I was a junior product designer; any part of me that knew about things like problem definitions and success metrics assumed that they were formalities for people who wanted to look important and thorough. The *real* work is the designing itself, right?

My assignment was to redesign the Swiftype dashboard. Make it more usable; more consistent; more pretty. With dozens of different views and components that I had the opportunity to rethink all at once, this was a substantial undertaking. I dove in without a second thought.

Sketching a little by hand, I'd mock up some slick-looking interfaces on my fancy new computer then repeat as inspiration struck. I was having a blast, but before long, I found myself adrift. With so many potential directions, how do you decide which one is best? Where do you even begin with such a large redesign? A sense of overwhelm steadily crept over me.

(snippet: swiftype/process)

My design lead [Casey](http://zumwa.lt/) recognized what was happening. My revisions had become cyclical: a change in one design would trigger an edit to another until I ended up more or less where I had started, minus the hours spent. I wasn't making forward progress.

One morning he approached me and keenly posed a challenge:

> Find one thing you can improve by the end of the day. Then <dfn title="'Shipping' is tech lingo for launching or releasing a product update.">ship it</dfn>.

This felt like a breath of fresh air. One little thing? I could do that. Gladly.

The user settings menu had been bugging me; it was in an odd place and the labels were unclear. Casey agreed. I created a <dfn title="In version control tools, a branch is a copy of the codebase that lets you make edits independently before merging in your changes.">branch</dfn>, tweaked some code to reposition the menu, ran tests, and then we pushed it live. It took a couple of hours from start to finish.

*The product is better! You did that! People are using it right now.*

It felt amazing.

Weeks spent envisioning grand, sweeping redesigns paled in comparison to this simple little tweak. *This* was real. *This* had impact.

*Aha! You scale a mountain one step at a time.*

In writing, it sounds obvious. But feeling that contrast firsthand and seeing the eventual success it brought has stuck with me and continues to guide my design ethos to this day.

## What is&nbsp;Swiftype?

[Swiftype](https://swiftype.com) lets anyone easily add search to their app or website. It's used by companies like Twitch, Shopify, TechCrunch, and AT&T, and helps millions of people find information every day, whether they're seeking customer support, online shopping, or browsing a blog.

I joined in 2015, one designer of two in a company of about thirty. The dashboard redesign was one of my first projects.

(snippet: swiftype/terms)

## What's the&nbsp;problem?

The Swiftype dashboard suffered from a number of core issues:

1. **Legibility.** Tiny, low-contrast all-caps text dominated.
2. **Hierarchy.** Unclear navigation and labeling made the product feel more complex than it really was.
3. **Consistency.** Scant conventions existed for layouts, copywriting, and styling; many one-off solutions looked and functioned differently despite serving identical purposes.
4. **Organization.** Accrued technical debt introduced bugs and made adding features a chore.

(snippet: swiftype/old-dashboard)

We aimed to improve these aspects, but not to rethink or rebuild features or the product itself. All functionality had to remain intact, as-is.

The focus on visual design and interaction was in-part due to organizational limitations: we lacked a product manager, had no researchers, and the engineering team was focused on another endeavor. This undertaking was entirely design-led and design-executed.

We explored some more aspirational directions as well, which I'll share at the end. Considering our limited resources, I'm incredibly proud of what we were able to accomplish as a team of two designer-slash-developers. Let's dive in.

## Choosing a&nbsp;font

What makes a good interface font?

First, it must be versatile. A typeface needs to accommodate buttons, inputs, labels, tooltips, large heading text, and small descriptive text. Data-heavy products like Swiftype also require dense tables, data visualizations, and snippets of code.

Versatility manifests as *plainness*, and indeed—you generally want something unremarkable. Unfussy. A nondescript font that will communicate clearly without getting in the way. Something with a large <dfn title="A font's x-height is the distance between its baseline and the mean line of lowercase letters—typically, the height of the letter x.">x-height</dfn> and open <dfn title="A counter is the area of a letter that is entirely or partially enclosed.">counters</dfn> to improve legibility at small sizes. And ideally, something that includes condensed widths (good for space-constrained areas like tables) and a variety of weights from light to heavy (for fine-grained control over visual hierarchy). If there's a monospaced version for code, even better.

Swiftype used the font National everywhere. As the product evolved, it began to pose problems.

(snippet: swiftype/national)

[National](https://klim.co.nz/retail-fonts/national/) is a beautiful font that shines in large, light weights, and it worked marvelously on the Swiftype marketing site for a long time. On the dashboard, however, its distinctive curved feet appeared more fiddly than charming, the jump between weights was sporadic, and bizarrely, it consistently appeared 10–20% smaller than other system fonts. (These are fixed in the completely redrawn 2017 release, [National 2](https://klim.co.nz/blog/national-2-design-information/).) To compensate for these quirks and a lack of wide or condensed widths, text had often been set in <span class="uppercase">all caps</span>.

(snippet: swiftype/all-caps)

Casey and I experimented with several typefaces. What would tick all the usability boxes, communicate Swiftype's voice *just enough*, and not be overused by other brands?

Contenders included Avenir Next, Proxima Nova, Whitney, and Fakt Pro. We spent time with each typeface, trying them on for size. Limits were uncovered through pressure testing: how does it hold up at its smallest? At its largest? Thick, thin, condensed, inverted? Where does it shine and where does it falter?

In the end, we settled on the humble and utilitarian [Acumin Pro](http://acumin.typekit.com/), a <dfn title="Neo-grotesque is a style of typeface characterized by even uniform strokes and simple, mechanical forms. Helvetica and Univers are neo-grotesques.">neo-grotesque</dfn> <dfn title="Serifs are the little nubs that stick off the ends of strokes on typefaces like Times New Roman and Georgia. Sans serif simply means 'without serif'.">sans-serif</dfn> "intended for a balanced and rational quality." Sensible bold and semibold weights gave us fine-tuned control over type hierarchy; condensed and semicondensed variants allowed us to make the best use of limited space. Not long after the dashboard redesign, we put Acumin to work across Swiftype's marketing site as well.

(snippet: swiftype/acumin)

## Crafting icons

(snippet: swiftype/icons)

As part of the redesign, I created an entirely new icon set to increase legibility at small sizes and on non-retina screens. As with the font choice, these icons went through several iterations in an effort to accurately convey meaning and maintain continuity with our existing voice.

The existing icons had been drawn at 48px for use on the marketing site, later scaled down for use on the dashboard. This rendered them fuzzy on non-<dfn title="Retina displays, or HiDPI displays, have a higher resolution (number of pixels) than traditional displays.">retina</dfn> displays. Most icons also included a glyph inside a square or round container, which made the glyph itself minuscule and muddied the icons' silhouettes.

I began by illustrating icons at the intended display size. The first iteration was modeled after the single-pixel stroke icons [found on Dropbox](https://dribbble.com/shots/1437544-Dropbox-File-Icons) or Finder at the time. They were too delicate, and they didn't work well on a dark background.

The second iteration slightly enlarged the icons and only used a single color, but the plump, round forms came across as childish. The synonyms icon also shapeshifted into what appeared to be two slices of bacon, and I really prefer to keep my icons cruelty-free.

The final, two-tone icons struck a balance between the former two. Large areas of fill—as in *Overview* and *Analytics*—were broken up to lighten the shapes and create more distinctive silhouettes. The re-addition of a second shade also helped lighten visual weight.

## Clarifying navigation

In 2014, scientists were awarded the Nobel Prize for discovering that [our brains have a sort of built-in GPS](https://www.youtube.com/watch?v=jYCR0pQLd_U). Located in the entorhinal cortex, it's composed of *grid cells* and *place cells* arranged in a repeating triangular array, which fire predictably depending on our location, our destination, and which direction we're facing. Thanks to these cells, we can orient ourselves in physical space.

What happens when we need to orient ourselves in two-dimensional space? What points us in the right direction? Within a screen, how do we find our location and set a course toward our destination?

The answer is *hierarchy*.

(snippet: swiftype/hierarchy)

Swiftype's content hierarchy was sound, but its visual hierarchy did not accurately reflect that inner logic. This mismatch subverted user expectations.

Drop-down menus above the content served as navigation, and each drop-down was labeled after a category of features. But the categories were vague. Users didn't know categories. Users knew *features*. Forcing them to understand the categories increased [cognitive load](http://seriouspony.com/blog/2013/7/24/your-app-makes-me-fat) and made browsing the dashboard unnecessarily difficult.

Here's a quick test: if you wanted to change the order of your search results, would you first look under *Customize* or *Manage*?

(snippet: swiftype/visual-hierarchy)

(snippet: swiftype/responsive-nav)

A sidebar would solve these problems, but it would also create a new challenge: anything wider than what existed would overflow small screens, causing horizontal scroll. The long-term solution, to make the whole dashboard <dfn title="A 'responsive' website shifts its design to accomodate any display size, from a phone to a 30-inch monitor.">responsive</dfn>, would require more time than we could spare... could we mitigate this another way?

We also knew that the shift to a sidebar would be a big change for users. Compared to simply changing colors or fonts, repositioning things tends to upset people more—especially ones who've built up muscle memory. We wanted to deploy this as seamlessly as possible.

We ended up continuing the incremental improvements I described at the beginning. One small change. Ship it. Measure results. Everything ok? Next change.

By pacing out edits, we prevented overwhelming users with a massive, unexpected dashboard-wide redesign. We were able to isolate individual variables, and users got to get comfortable with one thing at a time. We didn't push the new font or the reskin until after all the pieces had been moved in place.

After all the incremental edits and final reskin, here's where we ended.

(snippet: swiftype/dashboard-annotations)

## Rethinking home

The original dashboard home displayed all of a user's engines in a three column grid of cards. Each card included the number of pages indexed and the total of searches and autocompletes in the last seven days. Below the cards was recent account activity, and to the right was a sidebar of static links. All in all, fairly sparse.

(snippet: swiftype/old-dashboard-home)

Considering how little was displayed, why not remove this view entirely and redirect users to their most recent engine, which they'll probably want to access anyways? This could cut out one step in a common workflow. However, without a proper home, there'd no longer be a place to display account-wide activity or analytics.

Keeping the dashboard home, how might we improve it?

Let's begin with the sidebar links—the ones labeled *Account*, *Help & Support*, and *Resources*. Our product analytics revealed that these were practically never clicked. It's easy to see why—most of them were duplicates! *Settings*, *Support*, and *Documentation* can all be accessed from any page's header. The two remaining unique links, *Search Concepts* and *Case Studies*, were clicked less than a dozen times over several months by thousands of active customers. This valuable space on the dashboard's most trafficked view could be better used.

Our analytics also revealed that over 99% of users had four or fewer total search engines. A three-column grid might work well for a dozen engines (about how many Swiftype manages internally), but the vast majority of our users wouldn't even fill one row.

(snippet: swiftype/home-annotations)

The redesigned home resides inside a dark container to emphasize a relationship "above" the rest of the dashboard. Users with more than ten engines see a condensed list view. Crafted from the ground up as the first fully-responsive dashboard view, the redesigned home allows users to easily keep tabs on their search analytics even when everything else is not yet mobile-friendly.

## Enforcing consistency

(snippet: swiftype/consistency)

Conventions were established for interface copy. Capitalize all words in buttons; use title case for page titles; use sentence case and a period for page descriptions.

We also established standards for button colors (blue: primary action, white: secondary action, green: plan-related actions, red: dangerous actions) and empty states (I created over a dozen illustrations, in the process consolidating several different layouts into one reusable template).

Internally, over 96% of the <dfn class="uppercase" title="Cascading Style Sheets: the language used for visually styling the web.">CSS</dfn> was refactored and reorganized. We eliminated a massive, single stylesheet, breaking everything into partials containing modular, reusable components and eliminating overspecificity. In total, over 8,000 lines of <span class="uppercase">CSS</span> were removed or rewritten.

(snippet: swiftype/marquee)

## Results

All of the changes our team made were received positively from users, and we actually received several complimentary emails from customers, as well as kind notes during our scheduled customer feedback survey. One response read: "love having this level of detailed control over search results, laid out in a very user-friendly way." A clean codebase will simplify future improvements and expansions to the dashboard.

## Where to&nbsp;next?

The Swiftype team has been making some seriously cool stuff since I left in 2016, and they were recently acquired by [Elastic](https://www.elastic.co/). [See what they've been up to.](https://swiftype.com/)

Casey and I did a great job making the existing navigation the best it could be. We left the visual hierarchy in a much better place, but the content hierarchy—the foundation—was left untouched.

I'd love to see us dig even deeper. Why have a dozen pages for managing search? Why not have *one*?

(snippet: swiftype/unified-sketches)

(snippet: swiftype/unified)

Imagine this: rather than categorizing and fragmenting features like results ranking, weights, and styling into separate views, what if we condensed them into one? What if users could edit and preview search simultaneously, so that the interface used to customize is the same one that actually *displays* search results?

Perhaps, the best navigation is no navigation at all.

---

Toward the end of 2016, I remember taking a walk with Casey to a Peet's Coffee in downtown San Francisco. He pointed out how much I'd grown as a designer since I'd joined. Reflecting back, I was shocked at all the things I hadn't known and had never done a brief year prior.

I'm infinitely grateful that Casey and the rest of the Swiftype team took a chance on this junior designer during a time dozens of others declined.

Projects don't always start the way they're "supposed" to, but maybe that's okay. What's important is forward progress. The bigger your steps, the harder it becomes to adjust course once they've been made.

You scale a mountain one step at a time.

---

If you'd like to read more, I've published additional case studies for [Dropbox](/work/dropbox) and a personal project, [Wintr.mx](/work/wintr-mx). [Read about me](/about) or go back and [play with that keyboard](/).

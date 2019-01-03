Title: Dropbox

----

Slug: dropbox

----

Year: 2016–2017

----

Color: blue

----

Website: dropbox.com

----

Tagline: On working with engineers, "startups within startups", and the value of a well-run team retrospective.

----

Challenge: Unify the Dropbox communication channels to improve the user experience and reduce error.

----

Role: Research, product roadmapping, product design, iconography, and front-end engineering.

----

Ispasswordprotected: 1

----

Text: 

## Nobody would be able to use this. And this was v2.

I shuddered thinking about how v1 must’ve looked... frankly, this was a usability nightmare.

But in spite of it all—or maybe *because* of it all—I was excited. I couldn't wait to dive in.

## Background

When I joined Dropbox, I was placed on the Growth Platform team. Historically engineering-driven, Growth Platform was responsible for building our communication tools—the things we use to email users, send push notifications, and display ads within Dropbox on the web, the mobile app, and the desktop tray.

The "platform" part of Growth Platform referred to developer <dfn title="Application Program Interface">APIs</dfn> that other teams used and a <dfn title="Graphical User Interface">GUI</dfn> that could be used to create, manage, and send messages without code.

There were eight engineers and two product managers; I would be their first designer.

(snippet: dropbox/growth-platform)

At the beginning, I spent most of my time trying to understand our tools. Why had we built them? How were they used? Who used them? And why had we given everything codenames?

(snippet: dropbox/terms)

It was during this process of discovering and understanding existing tools that I was introduced to a new one, codenamed Tracks.

## Getting started

The engineers, bless their hearts. Their intentions were good, but product design was not in their wheelhouse. Not even on the same planet.

(image: tracks.png caption: "Tracks", v2, no onboarding. Use this product. Go.)

I didn't say that, of course, but I did need a lot of help decoding what they showed me. What *is* Tracks? What does it do? What does "SC" mean? What about "BN"? What's a "StormcrowNode"? Why is there an lonely little exclamation mark in the top circle?

For every question they answered (and there were many), the more excited I grew. By the end of our conversation I had already sketched a full page of ideas.

I was convinced: this mess held the potential to make work easier, faster, and smarter. First, we just needed to make it understandable.

---

So... what *was* this thing my team had built?

Let me see if I can help explain.

You know the breakfast machine from *Pee Wee Herman's Big Adventure*? It starts with Pee Wee turning on a fan which blows a pinwheel which rolls an egg down a tube and pushes a dinosaur across a clothesline and ends with a full breakfast, smiley pancake and all.

(snippet: dropbox/peewee)

Imagine that, but picture that there are 50,000 Pee Wees. And that different pinwheels make different breakfasts. And that *you* have the power to line up the tubes and dinosaurs and clotheslines so that *this pinwheel* makes *this breakfast*.

Also, the breakfasts are really emails. And some Pee Wees have let us know they really, really don't want breakfast.

Make sense?

Tracks—renamed *Journey Builder*—takes some input (a user, a user group, an experiment) and gives some output (an email on this date, a push notification after this action). That's all there is to it. What I needed to design was a visual, intuitive way to link it all together.

## Preliminary research

I began by asking what work had been done before. The first version of Tracks, still live at this point, was a mess of nested tables and dropdowns which suffered depressingly low usage. The second version, as shown above, was a step in the right direction, but it was still a far cry from a pleasant experience.

Talks with the Dropboxers who created and sent marketing campaigns revealed that their biggest frustration was coordinating between tools. The prospect that something like Tracks could solve this problem excited them, but they were skeptical.

Competitive analysis uncovered a whole industry of products dubbed *marketing automation*, home to [Campaign Monitor](https://www.campaignmonitor.com/), [ActiveCampaign](https://www.activecampaign.com/), and [SendGrid](https://www.autopilothq.com/), which all have different takes on this experience. Inspiration was drawn from diagramming tools like [LucidChart](https://www.lucidchart.com/), automation-based tools like [Automator](https://support.apple.com/guide/automator/welcome/mac) and [IFTTT](https://ifttt.com/), and even music tools like [Minihost Modular](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Minihost%20Modular.htm) which allow chaining together audio effects and plugins.

(snippet: dropbox/automation-products)

## Early concepts

The opportunity to work on an interface that went beyond gridded lists, cards, and tables immediately piqued my interest. This could be dynamic! Expressive!

(snippet: dropbox/sketches)

[Mockups]

## Co-creation

Our existing solution was incredibly complex. Achieving even the simplest things required jumping through an absurd number of hoops.

Any sufficiently complex model requires users to create stories of their own: images they keep in their head to help guide them through byzantine processes and connect all the dots. I was curious: what did this mental image look like? How could we make a new product match that image as closely as possible?

To better understand this, I proposed conducting research sessions which asked users to visualize just that: their internal maps. The pictures in their heads.

Growth Platform didn't have a researcher, so we'd have to bootstrap it. I chatted with other teams' researchers to understand best practices and how *they'd* go about this, given the chance. I took their knowledge and conducted three hour-long interview sessions with users who had experience with the existing tools. An observation room was set up so engineers and other team members could see and hear firsthand the problems our users faced.

[Video of user research sessions]

The research learnings were then synthesized and summarized:

(snippet: dropbox/research-learnings)

The results of the research guided our prioritization of features for the initial release and gave the whole team new ideas for features to build. Without this research, small and scrappy as it was, Journey Builder would have solved fewer problems, and done so in a much clumsier way.


## Principles and goals

Early on, my design lead, [Kurt](http://kurtvarner.com/) saw how eagerly I had jumped in and encouraged me to take a step back. This was a complex product; failing to do our due diligence up-front could come back and bite us later.

He said I should work with the team to establish design principles.

(snippet: dropbox/principles)

Based on this, we determined that a journey should communicate what it does at a glance by having the most pertinent details viewable at the highest level. Anyone viewing a journey for the first time should be able to read it like a choose-your-own-adventure guide. It should encourage experimentation, providing actionable analytics and building space to tinker without fear. And it should unify the fragmented, integrating all the tools they need should into one coherent, usable whole.

We also wanted to lower the messaging error rate, reduce coordination tax, and enable sending smarter campaigns.

## Development

Throughout the process, I documented changes in [Dropbox Paper](https://paper.dropbox.com/). The principles were pasted at the top of the doc as a continuous reminder, and design updates were written in a journal-style log.

(snippet: dropbox/journal)

(snippet: dropbox/vertical-alignment)

After some toying with display size and layout, we decided that each step should take the same format: a simple rectangle with a fixed height, icon, and line of text. This would force us to simplify the representation of each step until it could be communicated in a few words, the hope being that even large, complex journeys would become easy to read and navigate if that was the case. It also helped shore up vertical alignment across different paths, which easily got out of whack when different steps had different heights.

(image: nodes.png caption: Icon colors establish logical groups and enable quicker scanning of journeys.)

An important part of this process was actively involving the engineering team. After all, Journey Builder was *their* brainchild. I knew the sorts of things good design could achieve and the type of reactions it could evoke. Many engineers on the team had worked exclusively on platform or "behind-the-scenes" efforts, so this was their first time collaborating with a designer. I wanted to leave a good impression.

The most successful teams I've been a part of have engineers and designers working side-by-side, sharing the same space and collaborating closely. The least successful ones have been where designers and developers segregate themselves and toss work back and forth over a wall, or worse, view each other as adversaries.

(snippet: dropbox/engineers)

We acted like a startup within a startup. Because our product was not Dropbox-user-facing, we had massive leeway to take a more rapid pace than most of the rest of the company. And *our* users were a skip down the hall, in desks just like ours. If we had a research question, we could run over to whoever was available and ask it.

After less than five months of design and development, we launched the alpha version of Journey Builder in June 2017:

(snippet: dropbox/journey-annotations)

Our team's product managers created this charming video to announce the launch.

(snippet: dropbox/launch-vid)

## Analytics

After we launched the first version of the product and people began using it, the biggest question we got back was "is this journey successful?" The process of creating and managing journeys was smooth—people loved it, but it was what came *afterwards* that needed help. So we set out to build sensible analytics.

(snippet: dropbox/lifecycle)

Megaphone already had a basic form of analytics baked into Bluemail and Bluenote. Just a table of numbers, no visualizations, ill-defined terms. When asked about the existing analytics, the unanimous response was: "I ignore them". They were described as "untrustworthy" and "wrong".

We obviously needed to fix the underlying metrics so that they accurately reflected the numbers users saw elsewhere—and we would. Beyond that, I aspired to use data to tell a story.

(snippet: dropbox/tufte)

Around this time, I was reading through [Edward Tufte](https://www.edwardtufte.com/tufte/)'s data visualization books. I was thinking about how we could use successful "visual explanations" to enlighten and inspire confidence. I explored several different methods for displaying information, including box-and-whisker plots, average read times, an aggregate "impact" metric, comparisons across categories...

(snippet: dropbox/dataviz)

Above all, I wanted the analytics to nudge users toward "better" rather than just "more". The end goal of Journey Builder isn't to send the *most* emails, but to send the *right* emails to the the right users at the right time.

(snippet: dropbox/analytics-annotations)

## Results

[Email sent to Dropboxers]

I learned the value of educating everyone on the value of design. It was incredible to see the reaction of engineers on the team, seeing their idea take shape and seeing how excited others' got about it. It was the same concept as what existed before, and solved the same problems, but because it did it in a way that was clean, understandable, and delightful, people loved it (I don't use that verb lightly) in a way that was never possible with the original design.

Success metrics???

## What's next?

There are also little things that came up along the way: for example, delaying with a specific date, in practice, is only ever done at the start of a journey, not in the middle: so it really makes more sense for that option to live in the journey settings, rather than in the delay steps.

[image of delay node]

Better integration and easier content creation. We've much improved the process of scheduling sends and coordinating between the different messaging tools. But the process of creating those messages is still pretty painful.

I learned the value of establishing design principles

---

Thanks for reading. I've published additional case studies for [Swiftype](/work/swiftype) and a personal project, [Wintr.mx](/work/wintr-mx). [Read about me](/about) or [journey to some fart sounds](/).

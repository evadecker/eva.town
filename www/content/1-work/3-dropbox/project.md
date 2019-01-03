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

Tagline: On scrappy research, writing good design principles, and the value of treating engineers as designers.

----

Challenge: Create an automation tool to make sending messages to Dropbox users easier and less error-prone.

----

Role: Research, product roadmapping, product design, iconography, and front-end engineering.

----

Ispasswordprotected: 1

----

Text: 

## When I joined Dropbox, I was placed on the Growth Platform team.

Historically engineering-driven, Growth Platform was responsible for building our communication tools—the <dfn title="Application Program Interface">APIs</dfn> and <dfn title="Graphical User Interface">GUIs</dfn> we use to email users, send push notifications, and display ads within Dropbox on the web, the mobile app, and the desktop tray.

There were eight engineers and two product managers; I would be their first designer.

(snippet: dropbox/growth-platform)

At the beginning, I spent most of my time trying to understand our tools. Why had we built them? How were they used? Who used them? And why was everything codenamed?

(snippet: dropbox/terms)

It was during this process of discovering and understanding existing tools that I was introduced to a new one.

## Getting started

In conference room 411, Shared Memory, Henry and Aaron, two engineers on my team, connected their laptops to the TV screen to demo the product they'd been working on. I'd heard a little about it already—it was some kind of way to link events together—but wasn't quite sure what to expect.

Presented with a flat, matter-of-factness only an engineer could muster, I was introduced to Tracks. And, well... bless their hearts, but I needed a fair bit of help decoding what I was shown.

(snippet: dropbox/tracks)

A dot-gridded canvas contained bubbles with thick black strokes, each connected with arrows bisected by smaller bubbles. They demonstrated adding new bubbles to the canvas, linking them together with arrows, and changing settings using a cryptic dropdown on the right.

What did all of this *do*? What does "SC" mean? What about "BN"? What's a "StormcrowNode"? Why is there an lonely little exclamation mark up there in the top circle? How do you turn it on? How do you turn it *off*? Are people using this already?

For every question I asked (there were many) and they answered (posing even more questions), the more excited I grew. By the end of our conversation I had already sketched a full page of ideas.

Leaving room 411, I was convinced: this held the potential to make work easier, faster, and smarter. First, we needed to make it understandable.

---

So... what exactly was this thing my team had built?

Let me see if I can help explain.

You know the breakfast machine from *Pee Wee Herman's Big Adventure*? It starts with Pee Wee turning on a fan, which blows a pinwheel, which rolls an egg down a tube that pushes a dinosaur across a clothesline who makes a life-sized model of Abraham Lincoln flip pancakes until Pee Wee is delivered a full breakfast spread, smiley bacon face and all.

(snippet: dropbox/peewee)

Picture that.

Now picture that there are 50,000 Pee Wees. And that different pinwheels which make different breakfasts. And that *you* have the power to line up the tubes and dinosaurs and Abraham Lincolns so that *this pinwheel* makes *this breakfast*.

Also, the breakfasts are really emails. And some Pee Wees have let us know they really, really don't want breakfast.

Make sense?

Tracks—eventually renamed *Journey Builder*—takes some input (a user, a user group, an experiment) and gives some output (an email on this date, a push notification after this action). That's all there is to it. What I needed to design was a visual, intuitive way to link it all together.

## Early research and sketching

I began by asking what work had been done before. The first version of Tracks, still active at this point, was a mess of nested tables and dropdowns which suffered depressingly low usage. Shown above, the second version made strides in the right direction, but wouldn't win any awards.

Talks with the Dropboxers who created and sent marketing campaigns revealed that their biggest frustration was coordination between tools. The prospect that something like Journey Builder could solve this problem excited them, but they were skeptical.

Competitive analysis uncovered a whole industry of products dubbed *marketing automation*, home to [Campaign Monitor](https://www.campaignmonitor.com/), [ActiveCampaign](https://www.activecampaign.com/), and [SendGrid](https://www.autopilothq.com/), each with a different take on this experience. Inspiration was drawn from diagramming tools like [LucidChart](https://www.lucidchart.com/), automation-based tools like [Automator](https://support.apple.com/guide/automator/welcome/mac) and [IFTTT](https://ifttt.com/), and even music tools like [Minihost Modular](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Minihost%20Modular.htm) which allow chaining together audio effects and plugins.

(snippet: dropbox/automation-products)

The opportunity to work on an interface that went beyond gridded lists, cards, and tables immediately piqued my interest. This could be dynamic! Expressive!

(snippet: dropbox/sketches)

## Co-creation

Our existing, journey-less solution was incredibly complex. Achieving even the simplest things required jumping through an absurd number of hoops.

To deal with this complexity, users must’ve formed images of their own. Mental maps to help connect all the dots. I was curious: if you wanted to draw this map, what would it look like? How could we make a new product mirror that map as closely as possible?

To understand this, I proposed conducting research sessions which asked users to visualize just that: their internal maps. The pictures in their heads.

Growth Platform didn't have a researcher, so we'd have to bootstrap it. I chatted with other teams' researchers to understand best practices and how *they'd* go about this, given the chance. I took their knowledge and conducted three separate hour-long sketching sessions with users who had experience with the existing tools. An observation room was set up so engineers and other team members could see and hear firsthand the problems our users faced.

(snippet: dropbox/research-video)

The research learnings were then synthesized and summarized:

(snippet: dropbox/research-learnings)

The results of the research guided our prioritization of features for the initial release and gave the whole team new ideas. Small and scrappy as it was, without this research, Journey Builder would have solved fewer problems, and done so in a much clumsier way.


## Principles and goals

Around this time, I began to create high-fidelity mockups and collect feedback during design critiques. Taking note, my design lead [Kurt](http://kurtvarner.com/) pulled me aside after one session. He said I was doing great work, but encouraged me to take a step back. This was a complex product—rushing the start could come back and bite us later.

He said I should work with the team to establish design principles.

(snippet: dropbox/principles)

We determined that a journey should communicate what it does at a glance by having the most pertinent details viewable at the highest level. Anyone viewing a journey for the first time should be able to read it like a choose-your-own-adventure guide. It should encourage experimentation, providing actionable analytics and building space to tinker without fear. And it should unify the fragmented, integrating all the tools they need should into one coherent, usable whole.

We also wanted to lower the messaging error rate, reduce coordination tax, and enable sending smarter campaigns.

## Development

Throughout the process, I documented changes in Dropbox Paper. The principles were pasted at the top of the doc as a continuous reminder, and design updates were written in a journal-style log.

(snippet: dropbox/journal)

(snippet: dropbox/vertical-alignment)

After some toying with display size and layout, we decided that each step should take the same format: a simple rectangle with a fixed height, icon, and line of text. This would force us to simplify the representation of each step until it could be communicated in a few words, the hope being that even large, complex journeys would become easy to read and navigate if that was the case. It also helped shore up vertical alignment across different paths, which easily got out of whack when different steps had different heights.

(snippet: dropbox/nodes)

I extended the official Dropbox icon set to include [specific glyphs needed for Journey Builder](https://dribbble.com/shots/3418028-Marketing-automation-icons).

---

An important part of this process was actively involving the engineering team. After all, Journey Builder was *their* brainchild. Many developers on the team had worked exclusively on platform or "behind-the-scenes" efforts, so this was their first time collaborating with a designer. I wanted to leave a good impression.

The most successful teams I've been on have engineers and designers working side-by-side, sharing the same space and collaborating closely. The least successful ones have been where disciplines segregate themselves and toss work back and forth over a wall, or worse, view each other as adversaries.

(snippet: dropbox/engineers)

We operated like a startup within a startup. Because our product was not outward-facing, we had leeway to take a more rapid pace than the rest of the company. Our users were a skip down the hall, in desks just like ours; if we had a research question, we could run over to whoever was available and ask it.

After less than five months of design and development, we launched the alpha version of Journey Builder in June 2017.

(snippet: dropbox/journey-annotations)

Our team's product managers created this charming video to announce the launch.

(snippet: dropbox/launch-vid)

## Analytics

The release of Journey Builder was met with massive enthusiasm. Once people began using it regularly, the biggest question we got back was "how do I know if my journey is successful?" The process of creating and managing journeys was smooth—people loved the improvements, but what came *afterwards* still needed help. So we set out to build sensible analytics.

(snippet: dropbox/lifecycle)

Megaphone already had basic analytics baked into Bluemail and Bluenote—a simple numerical table of send and receive stats. When asked about these existing analytics, the unanimous response was, "I ignore them." They were described as "untrustworthy" and "wrong".

We obviously needed to fix the underlying metrics so that they accurately reflected the numbers users saw elsewhere—and we would. Beyond that, I aspired to use data to tell a story.

(snippet: dropbox/tufte)

Around this time, I was reading through [Edward Tufte](https://www.edwardtufte.com/tufte/)'s data visualization books. I was thinking about how we could use data to enlighten and inspire confidence. I explored several different methods for displaying information, including box-and-whisker plots, small multiples, donut charts, and an aggregate "impact" metric.

(snippet: dropbox/dataviz)

I wanted analytics to nudge users toward "better" rather than "more". Journey Builder was built to send the *right* emails, not the most emails. In fact, our motto on Growth Platform was "right message, right user, right time."

(snippet: dropbox/analytics-annotations)

## Results

One of the most incredible things to me about this project was seeing engineers release Journey Builder into the wild and have others meet it with genuine excitement. It solved the same problems as before, but because the new release presented things understandably and delightfully, people loved it in a way they never loved the previous "undesigned" versions. It was a joy to witness.

Journey Builder is now the de-facto way to create and manage campaigns at Dropbox. Last I heard, legacy tools like Scheduler were in the process of being deprecated so that Journey Builder could handle the scheduling of all messages.

## What's next?

There are ample opportunities for better integration with Bluemail and Bluenote, the content creation tools. Right now the creation of email and push messages are completely detached from the journey building experience, and must be linked together during journey creation.

How might we run robust, safe experiments from within Journey Builder? Managed A/B tests could distribute a percentage of users between two or more paths, and then send all remaining users to the winning path. (Dropbox can currently do this, but not from within Journey Builder, and it requires hefty setup.)

There's a lot of fascinating potential for loops within journeys, or even journeys that lead to or nest within other journeys. Aaron, the engineer who originally built Tracks, once told me that the ultimate iteration of his product could encapsulate every message sent to every Dropbox user.

One journey from which all other journeys flow.

---

Thanks for reading. I've published additional case studies for [Swiftype](/work/swiftype) and a personal project, [Wintr.mx](/work/wintr-mx). [Read about me](/about) or [journey to some fart sounds](/).

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

## It looked atrocious. I could hardly contain my excitement.

This was sinful. Nobody would be able to use this. And this was v2! I winced thinking about what v1 must've looked like...

(image: tracks.png caption: "Tracks", v2, no onboarding. Use this product. Go.)

I needed a lot of help decoding this. For example, what does "SC" mean? "BN"? What about that red and black dot? What's a "StormcrowNode"? Does anything happen if I click the little unlabeled circle? Why is there an exclamation mark in the circle at the top?

## Background

When I joined Dropbox, I was placed on the Growth Platform team. Historically engineering-driven, Growth Platform was responsible for building and maintaining the internal tools that Dropbox used to email, send push notifications, and display in-product ads. This included the "platform"—i.e., the developer <dfn title="Application Program Interface">APIs</dfn> used to accomplish these things—as well as a <dfn title="Graphical User Interface">GUI</dfn> that various teams used to create, manage, and send messages.

When I joined, there were eight engineers and two product managers. I was the first designer the team would ever have.

(snippet: dropbox/growth-platform)

(snippet: dropbox/terms)

It wasn't long before I began to take a holistic look at Megaphone—our product suite—to analyze how the parts fit together and where there might be room for improvement. Seeing the Tracks prototype was the spark that lit the flame.

## Getting started

The engineers, bless their hearts. Their intentions were good, but product design was clearly not in their wheelhouse. Not even on the same planet.

I didn't say that, of course. In fact, for every question they answered, the more excited I grew.

In spite of the poor design (or perhaps because of it), by the end of our conversation I had already sketched a full page of ideas. The opportunity to work on an interface that went beyond gridded lists, cards, and tables immediately piqued my interest. This could be dynamic! Expressive!

At the heart of this mess was a gem. A cool, powerful gem which held the potential to make work easier, faster, and smarter. All we needed was to dust off the crud and make that gem shine, so people could see it for what it was.

<aside>
<figure>
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KVdqwD_bcPs?start=75" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<figcaption>Product design.</figcaption>
</figure>
</aside>

What exactly *was* it?

You know the [breakfast machine](https://www.youtube.com/watch?v=KVdqwD_bcPs) from *Pee Wee Herman's Big Adventure*? It starts with Pee Wee blowing on a pinwheel and ends with a full breakfast, smiley pancake and all.

Imagine that, but then picture that there are 5,000 Pee Wees. And different pinwheels make different breakfasts. And that the breakfasts are really emails? And some Pee Wees have let us know they really, really don't like breakfast.

That's it. That's the product.

It takes some input (a user, a user group, an experiment) and gives some output (an email on this date, a push notification after this action). That's all there is to it. Tracks—eventually renamed to Journey Builder—is just a visual way to link those all together.

(Sketch of nodes being linked together? - to illustrate)

## Research: background and competitive analysis

I began by asking what work had been done here before. There was a version before this: what was it like? Did people use it? If not, why not? What were the biggest problems that users dealt with day-to-day?

I wrote out some of the questions I hoped to solve.

<aside>
(image: active-campaign.png caption: Active Campaign.)

(image: active-campaign.webp caption: Autopilot.)

(image: minihost-modular.png caption: A similar design pattern can be found in music tools.)
</aside>

(image: campaign-monitor.png caption: Campaign Monitor.)

(image: automator.png caption: Automator)

What similar products existed in the wild? Within the marketing automation industry, products like [Campaign Monitor](https://www.campaignmonitor.com/), [ActiveCampaign](https://www.activecampaign.com/), and [SendGrid](https://www.autopilothq.com/) all have different takes on this UX. Outside of marketing, inspiration was drawn from diagramming tools like [LucidChart](https://www.lucidchart.com/), automation-based tools like [Automator](https://support.apple.com/guide/automator/welcome/mac) and [IFTTT](https://ifttt.com/), and even audio tools like [Minihost Modular](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Minihost%20Modular.htm), which allows users to chain together audio effects and plugins.

## Research: drawing mental maps

Our existing solution was incredibly complex. Achieving even the simplest things required jumping through an absurd number of hoops.

For example, say you wanted to send out a welcome email immediately after someone registers for your app. After a week, you'd like to send a follow-up email: if they haven't taken any actions, the email should provide links to support; if they've been active, it should highlight features to check out. Companies like Dropbox regularly do this.

Here's a simplified version of what it took to do that in the old system: you'd create one email as desired, then duplicate it and make edits to the second variant. Once you had both of your emails ready, you'd go to **Hive** to export a list of users who will receive the first test batch. Take that exported list and split it 50/50. Go to the 

[Image of existing workflow]

Any sufficiently complex model requires users to create stories of their own. Given this complexity, users must have some internal image they use to connect all the dots. **What did their mental image look like, and how could we make a new product match that as closely as possible?** To understand this, I proposed conducting research sessions which asked them to visualize just that.

Growth Platform didn't have a researcher, so if we wanted to do this, we'd have to bootstrap it. Dropbox had plenty. 

[Video of user research sessions]

## Early concepts

(image: early-notes.png)

[Sketches - what worked? What didn't?]

[Mockups]

## Principles and goals

Early on, my design lead, [Kurt](http://kurtvarner.com/) saw me going ham and encouraged me to take a step back. This was a complex product; failing to do our due diligence up-front could come back and bite us later.

He said I should work with the team to establish [design principles](https://medium.com/the-year-of-the-looking-glass/a-matter-of-principle-4f5e6ad076bb). A good design principle "helps resolve real-world questions", "imparts a human-oriented sense of *why*", and "has a point of view that a rational person could disagree with".

Based on this, we determined that a journey should communicate what it does at a glance by having the most pertinent details viewable at the highest level. Anyone viewing a journey for the first time (regardless of their experience with the tool) should be able to understand what is happening without having to dig into menus, detail panes, help articles, or other parts of Megaphone. It should encourage experimentation, providing actionable analytics and building space to tinker without fear. And it should unify the fragmented, integrating all the tools they need should into one coherent, usable whole.

We also wanted to reduce the messaging error rate, reduce coordination tax, and enable sending smarter campaigns.

## Iteration

Throughout the process, I documented changes in [Dropbox Paper](https://paper.dropbox.com/). The principles were pasted at the top of the doc as a continuous reminder, and design updates were written in a journal-style log.

[Image of one design update post - include helpful alt text]

[Annotations - where did we land]

[Icons iteration - goal of using Maestro, Dropbox component library, behind the scenes as well and contributing to the repo]

Workflow: We acted like a startup within a startup. Very little oversight, ability to move quickly, direct line of communication with our users (Dropboxers down the hall).

## Engineering

I paired closely with our front-end engineers to rapidly ship changes. For example, one of my goals was that journeys should use a consistent, immovable display logic. By displaying "nodes" in one place and one place only, we would a) speed up the creation and management of journeys (whole segments wouldn't need to be dragged to a new place if a node gets added in the middle), b) reduce coordination tax (since if two people create the same journey, they'll look identical too). This came at the cost of additional engineering work upfront, but the benefit to users was worth it.

I paired closely with [Gianluca](https://github.com/gianluca-venturini), one of our front-end devs, to implement a layout logic.

[Image of layout logic sketches]

We were dealing with a lot of tech debt that was causing us to write complex overrides and add `!important` declarations in CSS just to display simple things. We were importing something like 6 different CSS libraries and they were all conflicting in the global namespace.

Eventually frustrated by this, and told by other engineers that it wasn't a priority and it would require a lot of time to fix, I took it upon myself to rip out all the old libraries and keep the few lines that were needed. It was surprisingly easy. It took about a day of my time, plus some bugfixes over the next week or so. And it made life so much better.

[Email I sent out]

## Analytics

After we launched the first version of the product and people began using it, the biggest question we got back was "is this journey successful?" The process of creating and managing journeys was smooth—people loved it, but it was what came *afterwards* that needed help. So we set out to build sensible analytics.

Megaphone already had a basic form of analytics baked into Bluemail and Bluenote. Just a table of numbers, no visualizations, ill-defined terms. When asked about the existing analytics, the unanimous response was: "I ignore them". They were described as "untrustworthy" and "wrong".

We obviously needed to fix the underlying metrics so that they accurately reflected the numbers users saw in tools like [Hive](https://hive.apache.org/). Beyond that, I wanted to use data to tell a story.

<aside>
Photo of Tufte book
</aside>

Design session with engineers, who came up with some amazing ideas: better than the designers!

Around this time, I was reading a lot of [Edward Tufte](https://www.edwardtufte.com/tufte/), "the Leonardo da Vinci of data." I was thinking about how we could use successful data visualization to inspire confidence. I explored a lot of different methods for displaying the information:

[Analytics explorations]
Box-and-whisker plots, read times, an aggregate "impact" metric, comparing across categories... these were all ideas.

[Annotation of analytics]

## Results

We officially launched v1 of Journey Builder to Dropbox on [date].

[Email sent to Dropboxers]

[Launch video]

I learned the value of educating everyone on the value of design. It was incredible to see the reaction of engineers on the team, seeing their idea take shape and seeing how excited others' got about it. It was the same concept as what existed before, and solved the same problems, but because it did it in a way that was clean, understandable, and delightful, people loved it (I don't use that verb lightly) in a way that was never possible with the original design.

Success metrics???

## Future: what's next?

There are also little things that came up along the way: for example, delaying with a specific date, in practice, is only ever done at the start of a journey, not in the middle: so it really makes more sense for that option to live in the journey settings, rather than in the delay steps.

[image of delay node]

Better integration and easier content creation. We've much improved the process of scheduling sends and coordinating between the different messaging tools. But the process of creating those messages is still pretty painful.

I learned the value of establishing design principles

---

Thanks for reading. I've published additional case studies for [Swiftype](/work/swiftype) and a personal project, [Wintr.mx](/work/wintr-mx). [Read about me](/about) or [go make some fart sounds](/).
---
title: The First Baby Steps Of Bankliday
createdAt: November 30, 2021
updatedAt:
slug: the-first-baby-steps-of-bankliday
published: true
excerpt: An introduction to my new side project, bankliday while answering the Why? What? How? When? questions.
---

My brain literally can't stop thinking and constantly comes up with different ideas. I'm pretty sure that I’m not the only one who has a _Project Ideas_ list with at least 10+ potential candidates. From all of those, my latest one seems to be the most promising so far because it ticks 3 important boxes.

1. ✅ Solving my problem

2. ✅ B2B (SaaS)

3. ✅ Automating a manual task

Based on these initial assumptions and requirements, a couple of weeks ago I started to work on a new project, called [bankliday](https://bankliday.com).

## Why?

### Solving my problem

In Glovo, we have transparent, publicly available calendars for everyone. Currently, we operate in 4 different Tech Hubs (Barcelona, Madrid, Warsaw, and Kyiv). Apart from our day-to-day interactions within our close “neighborhood”, we usually have meetings with folks from other offices so it’s pretty common to see similar messages

![IMG_4793.png](https://res.craft.do/user/full/d2ad5d13-1ee2-e626-3729-920e4673863f/doc/3A89B856-6608-4B4C-822B-8C7AE56E0901/16FF0585-8974-4BB1-ABC9-2ABA354DD71D_2/IMG_4793.png)

You might have been here before, especially if you work at a multinational company with offices in several locations. Sooner or later, you realize that **it’s hard to keep up with different teams’ local, bank holidays**.

- Sometimes you’d expect certain answers, actions from another team in a different country and when they don’t reply, you don’t know why they aren’t available.
- You're about to schedule a meeting or interview with someone from another team but you don’t know if they will be available on those days (except if they manually highlight bank holidays in their calendar). Constantly checking whether a day is a bank holiday or not is not a scalable solution.
- The famous Calendar Tetris. Impossible to plan company-wide events.

With the rising trend of remote-first work and distributed companies becoming a norm, this problem will be even worse.

### B2C vs. B2B

A classical question. Disclaimer, **I’m far from being an expert**. I have a bit of experience building B2C products and tried to do my homework by reading a lot about startups business models. Most of the time, for an independent/bootstrapped (not VC-backed) company, B2B could be more beneficial from a financial perspective compared to B2C. If you don't trust me, you'll do [Pieter Levels](https://twitter.com/levelsio)

> [I think indie makers are all too much focused on shiny B2C products when the real money is in B2B](https://twitter.com/levelsio/status/1128634008575676417)

or

> [If you want to have a lot of fun, do B2C. If you want to get rich, do B2B.](https://twitter.com/levelsio/status/1111133718985347072)

And the list can go on with several other tweets…

Of course, it’s not only about money, rather the willingness to spend it and the customer mindset. As a business, you can afford to leverage a service that speeds up your work or makes one of your processes more efficient. At the end of the day, everything can be translated to time, which eventually equals 💸. My assumption is that as long as you can prove that you could be valuable for a business (by e.g. saving time, automating the manual, error-prone tasks), you should be able to sell more easily, compared to a single user.

Since I’ve been aware of this, I’ve been trying to come up with a potential micro-SaaS idea, with not a lot of success. Until recently, when I noticed this problem above and realized that it can be solved by automation. **Finally, it clicked**.

### Automation

Maybe I’m a bit biased towards this topic because whenever I need to do something at least 3 times, I immediately start to think about possible automation. Especially, if those need to be done in the exact same ways or the end results should be identical. Well, we can also call it laziness. _Thankfully,_ I'm not the only one because in general, people are lazy. That's why we have e.g. remote controls, robot vacuum cleaners, and don't forget to mention food delivery services. Building something based on this could be a win-win – providing a tool/service to make their life easier and free up time, while they can focus on more important things – basically, that's the initial theory how most of our apps, services, devices were built around, in a nutshell of course.

## What?

[Bankliday](https://bankliday.com/) is a bank holiday tracking tool across different locations & offices where you can monitor, check, and manage teams’ local holidays mostly for distributed organizations, international & remote companies.

Ideally, **you shouldn't really visit the website regularly at all** (mostly once or twice per year). Wait, what?! Sounds a bit counterproductive...

The most important features are the seamless integrations into your existing work environment

- Are you a heavy user of Slack or Microsoft Teams? → Use the bankliday app or bot without leaving the chat-box
- Do you literally live in your Calendar? → Leverage the Calendar widgets

And you name the rest.

## How?

### Tech Stack

If you ever had a chance to work with me, you might be aware that I’m obsessed with new, shiny stuff. Whenever I started a project, I went with at least one – but usually more – cutting-edge technology. Not a big surprise, that it also happened that I started a project for the sake of learning a new technology (looking at you SwiftUI, and [Historico](https://historico.app)). 🤷

**This time, I wanted to do it differently**. Focusing more on the actual product and less on the tech itself. Apart from that, I also tried to keep in mind that I’m building bankliday as a side-project, with not a lot of time to debug and research potential issues with early tools. The goal was to find the tools and environment where I can be the most productive. Based on this, I decided to use

- [Next.js](https://nextjs.org) for both the marketing pages and the app (`/pages`-based rendering solves everything!)
- [Vercel](https://vercel.com/) for hosting (frontend, serverless functions, edge functions, etc.)
- [TailwindCSS](https://tailwindcss.com) and [TailwindUI](https://tailwindui.com) for UI design (slightly customized by adding custom colors and font) sprinkled with some [HeadlessUI](https://headlessui.dev) and/or [RadixUI](https://www.radix-ui.com) magic
- [Supabase](https://supabase.com) as a managed BaaS (Backend as a Service) with built-in Auth, Storage, and PostgreSQL
- [ConvertKit](https://convertkit.com) for collecting emails

Of course, there are still some unknowns (like implementing the Slack and Google Calendar integrations) but I’ll cross those bridges when I got there.

### Marketing & Sales

I have to admit, these are my weakest points and the areas where I need to improve the most. The initial idea was to start with a simple landing page + newsletter subscription and try to share those in some places. Although, I still need to overcome my perfectionism and convince myself that it’s something worths posting. In the meantime, I’m reading [different](https://startupbook.net) [books](https://austinkleon.com/show-your-work/), [articles](https://www.julian.com/guide/growth/intro), and doing [courses](https://seofordevs.com) to level up my skills and most importantly, to understand better the big picture.

I’m also experimenting with joining the Build in Public movement and sharing most of the details of this project either on [my Twitter](https://twitter.com/matepappcom/) or here.

## When?

Absolutely no idea. And to be honest, I don’t want to unnecessarily stress myself by creating artificial deadlines – although, sometimes those could be good excuses to overcome my procrastination –. At the same time, I really enjoy working at Glovo and besides that, I also like to dedicate some time to my friends & family, hobbies. The overall goal would be to create a sustainable system and set of habits in order to be able to keep up with this process. I'm trying to focus on playing the [long-game](https://fs.blog/long-game/) 💆.

Thank you for taking time to read my braindump. Feedback, as always is highly appreciated. In case you’re interested in more content or future [thoughts](/thoughts), consider giving a follow [on my Twitter](https://twitter.com/matepappcom) or [send an old-fashioned way email](mailto:hey@matepapp.com).

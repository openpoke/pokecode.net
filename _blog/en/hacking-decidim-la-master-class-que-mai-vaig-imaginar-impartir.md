---
layout: blog
title: "🎭 Hacking Decidim: the master class I never imagined I would give"
slug: hacking_decidim
author: Elvia Benedith
tags:
  - FemcodersClub
  - DecidimHack
image: /assets/img/pokecode_decidim.jpg
locale: en
reading_time: 5
order: 5
---
If you ask me how things are going at work, I could sum it up with a simple expression: *so far, so good*.

It has been an intense year, both personally and professionally. At home, we welcomed a new family member, and now we are four. A huge change that has transformed many of our routines, priorities, and perspectives. At the same time, the company has also grown. When I joined, there were fewer people; now we are five. And although that may seem like a simple fact, to me it is a clear sign that we are moving forward.

With growth come new opportunities and also new learnings. In my case, one of the things I value most is having three senior colleagues around me from whom I can learn every day. Having close role models, observing how they work, and being able to rely on their experience is a privilege I try to make the most of.

Even so, it has been a year of adaptation. A large part of it was marked by a leave of absence related to the arrival of this new family member. After almost six months without touching a computer, returning came with excitement, but also with many fears.

I still remember my first *issue* after coming back. I was asked whether I preferred to start with a complex task or if I felt more comfortable easing back into things with something lighter. My answer was clear: I wanted to see how I was doing. I wanted to know what was still there.

Because after several months away, even the most basic things start to feel uncertain. Would I remember all the commands? How did I spin up the environment? Where was that configuration again? These are questions many people probably ask themselves when returning after a long break.

And then something beautiful happened.

Little by little, everything started coming back. The concepts, the routines, the confidence. The magic was still there. Today I can say it with a smile because I realised it had never disappeared; it just needed time to wake up again.

In this process, I also started using something I barely used a year ago: artificial intelligence as a work tool. When used well, it has become a great ally for learning, unblocking problems, and improving efficiency. Moreover, working in *open source* projects means there are programs that provide free access to advanced tools, which undoubtedly makes experimentation and learning much easier.

At the same time, I continue to be part of an association whose goal is to reduce the digital gender gap and empower women in the tech sector. During my leave, I was also somewhat more distant from its day-to-day activities. I followed events, commented on posts, and stayed in touch from afar, but I was not involved in organising or planning.

Coming back was neither immediate nor easy.

Although I never truly left, I felt like I had lost part of my space. Doubts appeared that many people will recognise: imposter syndrome, that feeling of questioning whether you still belong or whether you still have something valuable to contribute.

Fortunately, the answer came little by little. One event after another. One meeting after another. And almost without realising it, I started feeling like an active part of the association again.

All this context is important because it helps explain why what happened next meant so much to me.

In a previous article, I shared how I discovered the company I work for thanks to a *master class* they gave during a *full-stack* development bootcamp for women.

If you missed that story, you can read it here:  
[**How is it going? My first month working as a junior full stack developer**](https://medium.com/@femcodersclub/how-is-it-going-my-first-month-working-as-a-junior-full-stack-developer-6e29cf8df46e)

Well, a few weeks ago I had the opportunity to give that very same *master class*.

I still need a moment to process that.

**I was now the one giving the same session that, years ago, had allowed me to discover the company I work for today**.

The idea came from the company itself. We wanted to organise an event in collaboration with the Femcoders club association, and I was asked to lead the initiative. I was in charge of coordinating the organisation, speaking with the venue where the event would take place, preparing the outreach, and reviewing all the details needed to make the event happen. The event was open to anyone interested in attending, regardless of their experience or professional background.

A few days before, I had the opportunity to take part in a podcast to talk about my professional experience, my current role, and my work as a co-founder of the Femcoders club association. This interview also helped us give visibility to the *master class*.

If you’re interested in listening to the full conversation, you can find it here:

- [**Youtube**](https://www.youtube.com/watch?v=X1iuJGtZXok)
- [**XRCB**](https://www.barcelona.cat/xrcb/ca/podcast/la-revolucio-de-les-programadores)

The session kept the same essence, although we updated the repository, reviewed the equipment we would use during the session, and refreshed the presentation. Of course, I had the constant support of my colleagues, which made the whole process much smoother.

During the *master class*, we taught how to “hack” Decidim, a digital democratic participation platform based on open-source software used by institutions, public administrations, and organisations to foster civic participation.

Pokecode, the company I work for, is one of the partners of the Decidim project and specialises in developing solutions for civic participation and digital democracy. The session was designed so that anyone could experiment with the code, understand how the platform works, and make small customisations in a local environment.

And then the day came.

During the session, I felt time pass incredibly fast. I looked at the clock and two hours had already gone by without me noticing.

I loved it.

And if you attended the event, or simply want to experiment with what we covered during the session, I have gathered the steps here to reproduce the working environment we used.

## Want to try it yourself?

### Requirements

- Docker Desktop installed and running on your computer.
- A code editor. We recommend Visual Studio Code:  
  https://code.visualstudio.com/

### Project setup and startup

Open a terminal and run:

```bash
git clone https://github.com/openpoke/decidim-hacks.git
cd decidim-hacks
git pull
docker compose up
```

You can find more information in the repository itself.

Once the environment is running, you will be able to access:

```bash
https://localhost:3000
https://localhost:8080
```

And if you want to explore the project:

```bash
https://github.com/openpoke/decidim-hacks
```

Inside the repository, you will find different exercises to run locally and continue learning at your own pace.

If you have any questions or would like us to organise this *master class* again in the future, feel free to reach out.

![Foto de la master class](/assets/img/hack_decidim.jpeg)

Afterwards, I looked at the photos from the event and confirmed something I already felt during the session: in almost all of them, I’m smiling. But not just any smile. That genuine smile that appears when you feel comfortable, when you enjoy what you do, and when you feel exactly where you’re supposed to be.

Beyond the talk itself, this event gave me a huge boost of confidence. It was a reminder of everything I’ve gone through over the past year and of the importance of the people who accompany me along the way.

Because behind this experience there was support, trust, and many people telling me, in one way or another: “go for it, you can do it.”

And the most beautiful part is that I truly felt they were with me.

Perhaps that is why this experience has meant so much to me. Because it was not just a *master class*. It was the confirmation that, even after a pause, after fears and doubts, we keep growing.

Sometimes we just need to give ourselves the chance to realise it.

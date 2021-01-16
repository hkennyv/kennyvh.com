---
title: Benchmarking the M1
date: 2021-01-16T16:52:27.196Z
author: kenny huynh
tags:
  - tech
  - apple
  - review
---
In my last post, I talked about [upgrading my laptop](https://www.kennyvh.com/posts/upgrading-my-laptop). I'm about a month in and, so far, I'm extremely satisfied with it and would recommend it to _most_ people.

I used the qualifier "most", because although this machine has worked delightfully for me, there are a few things that could make it less than ideal for some use-cases that I won't fully go into detail here.

## My use-case

I'll be focusing on my use-case in this post, so what do I actually use my laptop for?

- web browsing
- checking emails
- discord
- recently, [TFT](https://teamfighttactics.leagueoflegends.com/)
- dj'ing
- blogging
- development & programming

Well, most of these things work out of the box. Some of these things work _to some extent_. Luckily for me, none of them don't work at all (although the process to get them set up is less than ideal for many people).

### Surfing the web

Web browsing for the most part, is _extremely_ fast. My M1 MBA scores a higher [browser bench](https://browserbench.org/) than my desktop (which I will show in the benchmark section below). In fact, due to the M1 using the ARM architecture, there seems to be an instruction in the ARM ISA that [accelerates javascript](https://news.ycombinator.com/item?id=25233554). This is really great actually since a lot of tools these days offer an SPA version in the browser (not saying this is great, but this is the way things seem to be moving). MS office offers both a web version as well as an ARM native version, so no qualms there either.

### Gaming

I don't play too many games nowadays, I'm mostly in it so I can talk to my friends and hangout in the voice chat. Discord works without a hitch on my M1, which is mostly expected since it's built on top of [electron](https://www.electronjs.org/). TFT also runs quite well on the M1, which is a pleasant surprise as well as some other games like [tabletop simulator](https://store.steampowered.com/app/286160/Tabletop_Simulator/). I have some benchmarks posted in the [benchmarks](#benchmarks) section.

### DJ'ing

I've also recently picked up a [DDJ-400 controller](https://www.pioneerdj.com/en-us/product/controller/ddj-400/black/overview/) that has been a blast to play around with. It uses [rekordbox](https://rekordbox.com/en/), which also works without a hitch on my M1.

### Development

Lastly, programming and developing things is where the most friction is with the M1 (as expected when transitioning to a new architecture). So, depending on what kind of development you do, the M1 may or may not be ready for you yet. I do a broad range of development that is quite literally, "full stack" from embedded pcb design (using KiCAD) to writing embedded software (c/c++/rust) and a good amount of web development too (python/js).

Again, some of these things work out of the box. Some of them require a bit of effort to get setup. In my experience:

At the time, when I set up brew, they were recommending to run it through Rosetta. I didn't want to install and run all my packages in x86 only to reinstall them again when an ARM port came out, so I went ahead and went with the not-recommended native install. This went mostly smoothly, the main difference was manualling installing brew to `/opt/homebrew/` instead of `/usr/local` like on x86 mac os.

From there, when setting up a new machine, I normally just clone my [dotfiles](https://github.com/hkennyv/dotfiles) and run `brew bundle --file $HOME/.khuynh/Brewfile` and it installs all of my casks & formulae.

The rust toolchain didn't work out of the box, but it wasn't too difficult to get setup with. The "rustup-init" brew formulae failed to install, so I simply installed it manually and installed the nightly rust toolchain, which had M1 support. Easy!

I haven't done too much C/C++ development on my laptop yet, but I don't anticipate it to be too difficult. I've been mostly playing around with some ESP32 and STM32 dev boards I have. For these, there are many toolchain options, so I'm not too worried. I use PIC at work and expect there will be some difficulty using proprietary vendor toolchains though.

The javascript/node.js environment and toolchain installed without any issues through brew. I normally use VSCode insiders, so they had released an ARM native version already, so I was good to go!

Lastly, I do mostly data engineering stuff in Python, so the numpy/pandas/scipy stack is important to me. Python itself installed without an issue but problems arise when trying to install some of the scientific packages such as numpy and tensorflow. Since these heavily rely on clibs such as openblas, it took a lot of work to get these to install properly. It's still annoying to do since I make heavy use of virtualenvs, I have to build numpy from source and manually set the `OPENBLAS`env var to point to my installation each time and even then pandas and matplotlib have some issues working with it. I haven't even tried to do any deep learning stuff since I expect even more dependency issues with it. So, unfortunately, I would not recommend someone who uses the scientific python stack heavily to snag an M1 just yet. There are some key issues, however, that you can probably track to see when these issue are resolved: [numpy#18160](https://github.com/numpy/numpy/issues/18160), [numpy#17807](https://github.com/numpy/numpy/issues/17807).





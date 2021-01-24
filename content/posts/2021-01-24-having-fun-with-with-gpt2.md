---
title: having fun with with GPT2
date: 2021-01-24T18:34:16.328Z
author: kenny huynh
description: Training GPT2 on >40k of my own facebook messages...
cover: /images/uploads/openai-cover.png
tags:
  - machine-learning
  - nlp
  - development
  - funny
---
So this weekend, I finally found the time to sit down and play around a little bit with GPT-2 and work on making my own chat bot based on over 40K messages from my facebook messenger. The ultimate goal is to incorporate my bot into some kind of API or twitter bot.

All my work is done in this [repository](https://github.com/hkennyv/meowbot).

## GPT-2

For those who aren't familiar with GPT-2, it is a state-of-the-art, large-scale, unsupervised [language model](https://openai.com/blog/better-language-models/) made by [OpenAI](https://github.com/openai/gpt-2). It is capable of generating coherent text paragraphs\*, rudimentary reading comprehension, and more!

\* most of the time ;) 

#### GPT-2 Use Cases

There are a lot of use cases for a language model such as GPT-2 such as:

- summarizing large bodies of text
- creating a customer support chat bot (one that doesn't suck)
- creating a chat-bot that converses with people (could help fight against depression & loneliness)
- ...and tons more!

However, one of the things I learned in like 7th grade science class was "with great power comes great responsibility". This is particularly true when considering such a powerful modern technological advancement. We need to evaluate the question "Should we be doing this?" in addition to "Can we do this?". So, considering the ethics of such a technology, we can clearly see what kind issues may arise as a result:

- generating misleading information (IMO, one of the most important issues that has been significantly magnified by the popularity of social media)
- impersonation of other people (GPT-2, combined with deep-faked videos are terrifying but are probably already happening)
- invasion of privacy - _\*puts on tin-foil hat\*_ - a _really_ good nlp model, of a person for example, could potentially reveal a lot about a person that they aren't comfortable sharing. how scary is it that a bot can possibly know more about you, than _you_ just from analyzing the sentiments in your language and speech.

If any of this really interests you, there's a whole subdiscipline dedicated to it called [natural language processing](https://en.wikipedia.org/wiki/Natural_language_processing) (or NLP for short). Check it out!

## Creating my own chat bot

I'm sure that I am barely scratching the surface of the capabilities of this bot, but I've been wanting to play around with it for a while and have come up with the novel idea of creating a bot that talks like one of my friends.

#### The method

In order to do this, I will be building off of the pre-trained GPT2-small model and training it on about 40k of my own facebook messages using a technique called [transfer learning](https://en.wikipedia.org/wiki/Transfer_learning).

Transfer learning is a technique that allows you to overcome some of the largest barriers to accessible deep learning: having a ton of data and having a ton of compute (GPT-2 was trained on >8 million web pages and costs [roughly $50K USD to train](https://blog.usejournal.com/opengpt-2-we-replicated-gpt-2-because-you-can-too-45e34e6d36dc)). Specifically, I'll be fine-tuning the model using facebook messages.

I can highly recommend using [Google colab](https://colab.research.google.com/notebooks/intro.ipynb#recent=true) for the fine-tuning process. It's free and I was able to train quite a bit using a VM with a Nvidia Tesla T4 GPU. I even almost considered purchasing colab pro for a month... oh well, maybe in the future.

The full method with more instruction is available on my [repository](https://github.com/hkennyv/meowbot).

#### Results

The results were actually super funny. I trained about 4 models based on 3 different people so far with various success (all in one day). It took me about 30-60 minutes per model to train using the Tesla T4 on colab.

Here's the results from a model where I gave it the prompt: `"I love to eat"`:

```
i love to eat healthier by using low calories..*sigh*don't eat meat and dairy products ths not?& the doctor has given us bad info & misinformed people the wrong info%& and our bodies are constantly attacked by undeserved fat even though we do have health problems & we have terrible immune issues? :'(

==========
i love to eat these burritos once a month :'(

==========
i love to eat dif,

==========
i love to eat with ya mf...

==========
i love to eat breakfast with john & billy :'(
```

What really stuck out to me about this model is that it 1) captured some names (changed them to keep anonymity), 2) it captured some abbreviations that I've used when speaking with this friend. "mf" is short for "my friend" :P, and 3) it even uses slang like "eat with ya".

Here's another one on one of my poorer performing models:

```
I love to eat you know
can I skip just desserts right?

==========
I love to see
 - it's my first time building nanoblocks baha

==========
I love to sing
And can't sing Korean songs right?
 (You got me all the tickets??
```

This one produces a lot of garbage, likely because GPT2 is more geared for larger paragraphs and the facebook messages I trained it with were probably, on average, less than 10-15 words per message. Still funny, nonetheless...

And this one was probably the most interesting (and slightly unsettling):

```
my deepest, darkest secret is that of my life, because I couldn't even risk it.
Not even in high-school, when my family was wiped out by hurricane harvey, my brothers, me, and even the music we made together would have all disappeared.
I couldn't imagine being in a position to change it, even if it was a sign of weakness.

==========
my deepest, darkest secret is that I only slept 3 hours last night - 
and this morning I woke up completely.
I would have never imagined I had the power to do anything with my body. 

==========
my deepest, darkest secret is to admit it to your bud, even if it's ur deepest desire.
It's not uncommon to find libido issues after observing someone in a private area. 

==========
my deepest, darkest secret is that of my friend, John. 
Even now, as I sit here in his hall, wondering where I might have gone so long without you. 
But I am a man ready to shed himself of you.
You must have a new friend, someone to save me, someone to listen to my deepest thoughts,
a kindred spirit to understand my condition, and a responsibility to live up to your principles.
Even now, as I sit here in your hall, you mustering up a bouquet of hope for our brothers and friends in need.
But all I can say is I am a man ready to shed himself of you.
I cannot take the lashes off my lashes, and drag my humanity out of you.
You must share in my every act with as much will power as you can get.  
Even now, as you say to me, you must hide in plain sight from me.  
Even now, as you joke with me about raising the price of tobacco products,
and say that you would have done more if there was a tax on tobacco products, yet you would have done more with less.
Even now, as you and I laugh at the irony in front of my face, think about how we
==========
my deepest, darkest secret is that I never realized that I had the power to make myself happy or even
happy with myself. That's what made me feel abandoned and unwanted all along.
```

This model was trained on a much larger set of messages (~30k messages). It's very amusing because I can definitely hear my friend's tone and see some of his sentiments baked into these responses. That last one though... _yikes_, hits a little too close to home lol.

## Conclusion

All-in-all, it was a really productive day and I learned quite a bit. It was really fun to get my hands dirty and building a model. I think I'll continue to play around with it and figure out where to deploy some of these :)


 


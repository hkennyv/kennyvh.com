---
title: Building personal websites
date: 2021-04-10T18:54:59.089Z
author: kenny huynh
description: My stream of consciousness on the web and how I approached building
  kennyvh.com...
tags:
  - web
  - tech
---
The web is home to millions of websites. According to [internetlivestats](https://www.internetlivestats.com/total-number-of-websites/), the very first website went live in August 1991 and now there are almost ***2 billion*** websites online at the time of writing this post.

![total-number-websites](/images/uploads/total-number-websites.png)

I wrote a short python script to scrape the internetlivestats and plot the data below:

````python
# %% [markdown]
# this script reads the total number of websites from
# https://www.internetlivestats.com/total-number-of-websites/
# and plots it.
#
# to run it, you will need to install matplotlib, pandas, and lxml. using `pip`
# you can:
#
# ```
# pip install matplotlib pandas lxml
# ```
#
# %%
from datetime import datetime

import matplotlib as mpl
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns

# %%
# NOTE: lxml does not accept HTTPS
URL = "http://www.internetlivestats.com/total-number-of-websites/"
df = pd.read_html(URL)[0]

# %%
df["Year (June)"] = df["Year (June)"].str.extract(r"(\d{4})")
df["Websites"] = df["Websites"].str.extract(r"(\d*)")

df = df.dropna(axis=0, subset=["Year (June)", "Websites"])

df["Year (June)"] = pd.to_numeric(df["Year (June)"]).astype(int)
df["Websites"] = pd.to_numeric(df["Websites"]).astype(int)
df = df.sort_values("Year (June)").reset_index()

# %%
plt.style.use("dark_background")
loc = mpl.ticker.MultipleLocator(base=3.0)

ax = sns.barplot(x="Year (June)", y="Websites", data=df)

ax.set(ylabel="Number of websites", xlabel="Year")
ax.xaxis.set_major_locator(loc)
ax.get_yaxis().set_major_formatter(plt.matplotlib.ticker.StrMethodFormatter("{x:,.0f}"))
ax.yaxis.grid(color="gray", linestyle="dashed")
ax.set_axisbelow(True)

now = datetime.now().strftime("%Y/%m/%d")
plt.suptitle(f"Total number of websites by year ({now})", fontsize=16)
plt.tight_layout()
plt.savefig("total-number-of-websites.png")

# %%
````

The thing that I love the most about the internet is how it allows people to share and publish information that is accessible to anyone in the world with an internet connection. Having a personal website is like having your own little corner of the internet to share with whomever you wish.

However, most people I know can count the number of websites they visit daily on both hands. Why is that? Unfortunately, the internet has been reduced down to a handful of big sites that are quite literally designed to [drive attention and create addictive experiences](https://blog.mozilla.org/internetcitizen/2018/07/27/attention-addiction/).

## kennyvh.com

I made <https://www.kennyvh.com/> for a few reasons:

* to carve out my own personal corner of the internet
* to experiment and play around on the web
* to practice reflecting and writing

So far, it has been a blast to do so. I've probably rewritten my site like 3-4x by now and I've learned a lot and had fun each time. Highly recommend.

### Technical decisions

For now, I've settled with Vercel's, [Next.JS](https://nextjs.org/). Prior to this, I've used plain HTML, CSS, and JS, I've used [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html), and I've tried [GatsbyJS](https://www.gatsbyjs.com/) as well.

There were a few requirements I had in mind when building my site:

#### Technology is fun

I wanted to use fun technology to build my site (who doesn't like fun stuff?). There are a *ton* of awesome things going on in the web world that I'm super excited about. React is awesome and Next.JS is seriously the piece that the React ecosystem was missing IMO. The tooling and developer experience (DX) is unmatched. This is such a refreshing breath of fresh air coming from the embedded world where the DX is basically non-existent and the ecosystem is dominated by sh*tty vendor-specific tools.

I'm particularly excited to be using NextJS since it seems like they're pioneering some awesome things such as [React server components](https://vercel.com/blog/everything-about-react-server-components). IMO Gatsby was awesome as well, however I felt like using GraphQL for shuffling data around was a little hacky and unintuitive.

#### Needs to be fast

I initially went with full vanilla HTML, CSS, & Javascript because I wanted the site to be fast, responsive on mobile, lightweight, and I wanted my site to work without JS. I was vehemently against these "fad" frameworks.

However, after giving Gatsby a try, I was amazed by the DX. I was able to get a site up and running in <10 minutes just by following their docs, that's how great and easy it was. I quickly found that modern front-end tooling enables you to do so much with so little effort. You get static site generation, lazy loading images, routing, etc. for almost *free*. I scored pretty much the same in the [Google lighthouse score](https://github.com/hkennyv/kennyvh.com/tree/gatsby-stop) using Gatsby as I did with vanilla HTML, CSS, and JS. Amazing.

#### Needs to be low maintenance

This is kind of ironic in a post talking about front-end frameworks. It is basically a meme at this point where everyone jokes about a new javascript framework coming out every week. I used to be in this camp as well, but I've come to accept and embrace the rapid innovation happening in the front-end space. There's a time and a place for old and boring tech and similarly there's a place for the amazing stuff that is happening in the front-end space.

Honestly though, the principles behind Gatsby and NextJS more or less just build static HTML (there is SSR as well, which is a different story) and deploy it. Simple and easy. You can easily drop some static HTML behind apache, nginx, or whatever your webserver of choice is. However, with the amazing (and free) services like [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), [Cloudflare pages](https://pages.cloudflare.com/), or even [Github pages](https://pages.github.com/), CI and deployment couldn't be easier.

I'm sure this won't be the last time I rewrite my website. This process can sound like quite a lot, but I would highly encourage anyone who is interested in web technology to explore and experiment with all of the awesome stuff going on in this space.

Feel free to checkout the source for my site [here](https://github.com/hkennyv/kennyvh.com).

Cheers,

Kenny
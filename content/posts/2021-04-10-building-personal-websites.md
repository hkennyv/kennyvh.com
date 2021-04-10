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

<details>
 <summary>View code to generate plot from internetlivestats</summary>
 <p>plot.py</p>
 <code>
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
 </code>
</details>

The thing that I love the most about the internet is how it allows people to share and publish information that is accessible to anyone in the world with an internet connection. Having a personal website is like having your own little corner of the internet to share with whomever you wish.

However, most people I know can count the number of websites they visit daily on both hands. Why is that? Unfortunately, the internet has been reduced down 